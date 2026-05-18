import type { Repository, Route } from "./types";

export const CATEGORY_LABELS: Record<string, string> = {
  payments: "Paiements",
  ecommerce: "E-commerce",
  "delivery-addressing": "Livraison et adressage",
  education: "Education",
  health: "Sante",
  agriculture: "Agriculture",
  "public-services": "Services publics",
  mobility: "Mobilite",
  "civic-tech": "Civic tech",
  "language-ai": "Langue et IA",
  "culture-history": "Culture et histoire",
  "meta-catalogue": "Meta-catalogue",
  "developer-tools": "Outils developpeur",
  datasets: "Donnees",
  environment: "Environnement",
  community: "Communaute",
  "offline-first": "Offline-first",
  "security-identity": "Securite et identite",
};

export function formatNumber(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value);
}

export function formatDate(value: string | null) {
  if (!value) {
    return "Inconnue";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
  }).format(new Date(value));
}

export function statusLabel(status: Repository["status"]) {
  const labels: Record<Repository["status"], string> = {
    active: "Actif",
    experimental: "Experimental",
    stable: "Stable",
    inactive: "Inactif",
    archived: "Archive",
    unknown: "Inconnu",
  };

  return labels[status];
}

export function getProjectCategories(project: Repository) {
  return [project.category, ...(project.additional_categories ?? [])];
}

export function getAllCategories(projects: Repository[]) {
  const counts = new Map<string, number>();

  for (const project of projects) {
    for (const category of getProjectCategories(project)) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([slug, count]) => ({
      slug,
      label: CATEGORY_LABELS[slug] ?? slug,
      count,
    }))
    .sort((left, right) => left.label.localeCompare(right.label, "fr"));
}

export function sortByStars(projects: Repository[]) {
  return [...projects].sort((left, right) => {
    if (right.stars !== left.stars) {
      return right.stars - left.stars;
    }

    if (right.forks !== left.forks) {
      return right.forks - left.forks;
    }

    return left.name.localeCompare(right.name, "fr");
  });
}

export function matchesSearch(project: Repository, search: string) {
  const normalizedSearch = search.trim().toLowerCase();

  if (!normalizedSearch) {
    return true;
  }

  const haystack = [
    project.name,
    project.description,
    project.maintainer ?? "",
    project.language,
    ...(project.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(normalizedSearch);
}

export function buildProjectHash(slug: string) {
  return `#/project/${slug}`;
}

export function parseRoute(hash: string): Route {
  const cleanedHash = hash.replace(/^#/, "");

  if (cleanedHash.startsWith("/project/")) {
    const slug = decodeURIComponent(cleanedHash.replace("/project/", ""));
    return { kind: "project", slug };
  }

  return { kind: "home" };
}

export function shuffleProjects(projects: Repository[]) {
  const cloned = [...projects];

  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[swapIndex]] = [cloned[swapIndex], cloned[index]];
  }

  return cloned;
}
