import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const canonicalPath = path.join(repoRoot, "data", "repositories.json");
const enrichedPath = path.join(repoRoot, "data", "repositories.enriched.json");
const websiteAssetPath = path.join(
  repoRoot,
  "website",
  "public",
  "data",
  "repositories.enriched.json",
);

const shouldFetch = process.argv.includes("--fetch");

function parseGithubUrl(url) {
  const match = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/#?]+)/i);

  if (!match) {
    throw new Error(`Unsupported GitHub URL: ${url}`);
  }

  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/i, ""),
  };
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function loadJson(jsonPath, fallbackValue = null) {
  try {
    const content = await readFile(jsonPath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return fallbackValue;
    }

    throw error;
  }
}

async function fetchGithubMetadata(repositoryPath) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "open-source-madagascar-website-generator",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(`https://api.github.com/repos/${repositoryPath}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed for ${repositoryPath}: ${response.status}`);
  }

  const payload = await response.json();

  return {
    stars: payload.stargazers_count ?? 0,
    forks: payload.forks_count ?? 0,
    last_updated: payload.pushed_at ?? payload.updated_at ?? null,
  };
}

function buildFallbackMetadata(previousEntry) {
  return {
    stars: previousEntry?.stars ?? 0,
    forks: previousEntry?.forks ?? 0,
    last_updated: previousEntry?.last_updated ?? null,
  };
}

async function main() {
  const repositories = await loadJson(canonicalPath, []);
  const previousEnriched = await loadJson(enrichedPath, []);
  const previousByUrl = new Map(previousEnriched.map((entry) => [entry.url, entry]));

  const enrichedRepositories = [];

  for (const repository of repositories) {
    const { owner, repo } = parseGithubUrl(repository.url);
    const repositoryPath = `${owner}/${repo}`;
    const previousEntry = previousByUrl.get(repository.url);
    let githubMetadata = buildFallbackMetadata(previousEntry);

    if (shouldFetch) {
      try {
        githubMetadata = await fetchGithubMetadata(repositoryPath);
      } catch (error) {
        console.warn(
          `[generate_website_data] Falling back to cached metadata for ${repositoryPath}: ${
            error instanceof Error ? error.message : String(error)
          }`,
        );
      }
    }

    enrichedRepositories.push({
      ...repository,
      slug: slugify(`${owner}-${repo}`),
      github_owner: owner,
      github_repo: repo,
      repository_path: repositoryPath,
      stars: githubMetadata.stars,
      forks: githubMetadata.forks,
      last_updated: githubMetadata.last_updated,
    });
  }

  const serialized = `${JSON.stringify(enrichedRepositories, null, 2)}\n`;

  await mkdir(path.dirname(enrichedPath), { recursive: true });
  await mkdir(path.dirname(websiteAssetPath), { recursive: true });
  await writeFile(enrichedPath, serialized, "utf8");
  await writeFile(websiteAssetPath, serialized, "utf8");

  console.log(
    `[generate_website_data] Wrote ${enrichedRepositories.length} entries to data/repositories.enriched.json and website/public/data/repositories.enriched.json`,
  );
}

await main();
