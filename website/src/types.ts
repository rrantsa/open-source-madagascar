export type Repository = {
  name: string;
  url: string;
  description: string;
  category: string;
  additional_categories?: string[];
  language: string;
  framework: string | null;
  license: string;
  status: "active" | "experimental" | "stable" | "inactive" | "archived" | "unknown";
  maintainer: string | null;
  target_users?: string[];
  madagascar_relevance: string;
  tags?: string[];
  notes?: string | null;
  slug: string;
  github_owner: string;
  github_repo: string;
  repository_path: string;
  stars: number;
  forks: number;
  last_updated: string | null;
};

export type Route =
  | { kind: "home" }
  | {
      kind: "project";
      slug: string;
    };
