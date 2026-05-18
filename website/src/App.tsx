import { startTransition, useDeferredValue, useEffect, useState } from "react";
import {
  buildProjectHash,
  CATEGORY_LABELS,
  formatDate,
  formatNumber,
  getAllCategories,
  getProjectCategories,
  matchesSearch,
  parseRoute,
  shuffleProjects,
  sortByStars,
  statusLabel,
} from "./catalogue";
import type { Repository, Route } from "./types";

const PROJECT_PROPOSAL_URL = "https://github.com/rrantsa/open-source-madagascar/issues/new/choose";
const PROJECT_PR_URL = "https://github.com/rrantsa/open-source-madagascar/compare";

function useHashRoute() {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseRoute(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return route;
}

function ProjectCard({
  project,
}: {
  project: Repository;
}) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span className="pill">{CATEGORY_LABELS[project.category] ?? project.category}</span>
        <span className="pill pill--muted">{statusLabel(project.status)}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <dl className="project-card__stats">
        <div>
          <dt>Maintainer</dt>
          <dd>{project.maintainer ?? "Non renseigné"}</dd>
        </div>
        <div>
          <dt>Stars</dt>
          <dd>{formatNumber(project.stars)}</dd>
        </div>
        <div>
          <dt>Forks</dt>
          <dd>{formatNumber(project.forks)}</dd>
        </div>
        <div>
          <dt>Maj</dt>
          <dd>{formatDate(project.last_updated)}</dd>
        </div>
      </dl>

      <div className="project-card__actions">
        <a className="button button--ghost" href={project.url} target="_blank" rel="noreferrer">
          Voir le repo
        </a>
        <a className="button" href={buildProjectHash(project.slug)}>
          Détails
        </a>
      </div>
    </article>
  );
}

function ContributionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="proposal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close" type="button" onClick={onClose} aria-label="Fermer">
          x
        </button>
        <p className="eyebrow">Contribuer</p>
        <h2 id="proposal-title">Proposer un projet</h2>
        <p>
          Open Source Madagascar référence des projets utiles à Madagascar et reste ouvert aux
          contributions de la communauté.
        </p>
        <p>
          Pour proposer un nouveau projet, vous pouvez ouvrir une Issue pour décrire la repository
          ou soumettre directement une Pull Request dans le dépôt GitHub.
        </p>
        <div className="modal__actions">
          <a className="button" href={PROJECT_PROPOSAL_URL} target="_blank" rel="noreferrer">
            Créer une Issue
          </a>
          <a className="button button--ghost" href={PROJECT_PR_URL} target="_blank" rel="noreferrer">
            Ouvrir une Pull Request
          </a>
        </div>
      </div>
    </div>
  );
}

function FeaturedCarousel({
  projects,
}: {
  projects: Repository[];
}) {
  const trackProjects = [...projects, ...projects];

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="featured-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Showroom</p>
          <h2>Des projets à découvrir en continu</h2>
        </div>
        <p>
          Une sélection visuelle qui fait défiler des projets du catalogue pour aider les visiteurs
          à explorer sans connaître l&apos;écosystème à l&apos;avance.
        </p>
      </div>

      <div className="carousel-shell">
        <div className="carousel-track">
          {trackProjects.map((project, index) => (
            <a className="featured-card" href={buildProjectHash(project.slug)} key={`${project.slug}-${index}`}>
              <span className="featured-card__category">
                {CATEGORY_LABELS[project.category] ?? project.category}
              </span>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              <div className="featured-card__footer">
                <span>{formatNumber(project.stars)} stars</span>
                <span>{project.maintainer ?? "Communauté"}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage({
  projects,
  featuredProjects,
  selectedCategory,
  searchTerm,
  onCategorySelect,
  onOpenContributionModal,
  onSearchChange,
}: {
  projects: Repository[];
  featuredProjects: Repository[];
  selectedCategory: string;
  searchTerm: string;
  onCategorySelect: (category: string) => void;
  onOpenContributionModal: () => void;
  onSearchChange: (value: string) => void;
}) {
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const categories = getAllCategories(projects);
  const sortedProjects = sortByStars(projects);
  const filteredProjects = sortedProjects.filter((project) => {
    const categoryMatches =
      selectedCategory === "all" || getProjectCategories(project).includes(selectedCategory);

    return categoryMatches && matchesSearch(project, deferredSearchTerm);
  });

  const maintainerCount = new Set(
    projects.map((project) => project.maintainer).filter((maintainer): maintainer is string => Boolean(maintainer)),
  ).size;

  const handleExplore = () => {
    document.getElementById("catalogue")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">GitHub Pages MVP</p>
          <h1>Explorer les projets open source utiles à Madagascar</h1>
          <p className="hero__lead">
            Une vitrine simple pour les personnes non techniques, les étudiants, les associations
            et les équipes qui veulent trouver des projets pertinents, comprendre leur objectif et
            visiter leur repository GitHub.
          </p>

          <div className="hero__actions">
            <button className="button" type="button" onClick={handleExplore}>
              Explorer le catalogue
            </button>
            <button className="button button--ghost" type="button" onClick={onOpenContributionModal}>
              Proposer un projet
            </button>
          </div>
        </div>

        <div className="hero__panel">
          <div className="hero-stat">
            <span>Projets indexés</span>
            <strong>{formatNumber(projects.length)}</strong>
          </div>
          <div className="hero-stat">
            <span>Catégories visibles</span>
            <strong>{formatNumber(categories.length)}</strong>
          </div>
          <div className="hero-stat">
            <span>Maintainers référencés</span>
            <strong>{formatNumber(maintainerCount)}</strong>
          </div>
        </div>
      </section>

      <FeaturedCarousel projects={featuredProjects} />

      <section className="category-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Catégories</p>
            <h2>Parcourir par domaine</h2>
          </div>
          <p>Chaque catégorie ouvre un angle de lecture pour des besoins concrets en contexte malgache.</p>
        </div>

        <div className="category-grid">
          <button
            className={selectedCategory === "all" ? "category-card category-card--active" : "category-card"}
            type="button"
            onClick={() => onCategorySelect("all")}
          >
            <strong>Toutes les catégories</strong>
            <span>{formatNumber(projects.length)} projets</span>
          </button>

          {categories.map((category) => (
            <button
              className={
                selectedCategory === category.slug ? "category-card category-card--active" : "category-card"
              }
              key={category.slug}
              type="button"
              onClick={() => onCategorySelect(category.slug)}
            >
              <strong>{category.label}</strong>
              <span>{formatNumber(category.count)} projets</span>
            </button>
          ))}
        </div>
      </section>

      <section className="catalogue-section" id="catalogue">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Recherche</p>
            <h2>Trouver un projet</h2>
          </div>
          <p>
            Les résultats sont triés par stars GitHub, puis par forks, pour mettre en avant les
            projets les plus visibles.
          </p>
        </div>

        <div className="search-panel">
          <label className="search-panel__field" htmlFor="project-search">
            <span>Rechercher un projet, un maintainer, un langage ou un tag</span>
            <input
              id="project-search"
              type="search"
              value={searchTerm}
              placeholder="Ex : éducation, Svelte, julkwel, data..."
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </label>
          <button className="button button--ghost" type="button" onClick={() => onSearchChange("")}>
            Effacer
          </button>
        </div>

        <p className="results-summary">
          {formatNumber(filteredProjects.length)} projet(s) affiche(s)
          {selectedCategory !== "all" ? ` dans ${CATEGORY_LABELS[selectedCategory] ?? selectedCategory}` : ""}
          {deferredSearchTerm ? ` pour "${deferredSearchTerm}"` : ""}.
        </p>

        {filteredProjects.length === 0 ? (
          <div className="empty-state">
            <h3>Aucun projet ne correspond à cette recherche.</h3>
            <p>Essayez une autre catégorie ou un mot-clé plus large.</p>
          </div>
        ) : (
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function ProjectDetailPage({
  project,
  onOpenContributionModal,
}: {
  project: Repository;
  onOpenContributionModal: () => void;
}) {
  return (
    <section className="detail-page">
      <a className="back-link" href="#/">
        Retour au catalogue
      </a>

      <div className="detail-hero">
        <div className="detail-hero__content">
          <p className="eyebrow">Fiche projet</p>
          <h1>{project.name}</h1>
          <p className="detail-hero__lead">{project.description}</p>

          <div className="detail-hero__actions">
            <a className="button" href={project.url} target="_blank" rel="noreferrer">
              Ouvrir la repository
            </a>
            <button className="button button--ghost" type="button" onClick={onOpenContributionModal}>
              Proposer un projet
            </button>
          </div>
        </div>

        <dl className="detail-stats">
          <div>
            <dt>Maintainer</dt>
            <dd>{project.maintainer ?? "Non renseigné"}</dd>
          </div>
          <div>
            <dt>Stars</dt>
            <dd>{formatNumber(project.stars)}</dd>
          </div>
          <div>
            <dt>Forks</dt>
            <dd>{formatNumber(project.forks)}</dd>
          </div>
          <div>
            <dt>Dernière mise à jour</dt>
            <dd>{formatDate(project.last_updated)}</dd>
          </div>
          <div>
            <dt>Licence</dt>
            <dd>{project.license}</dd>
          </div>
          <div>
            <dt>Statut</dt>
            <dd>{statusLabel(project.status)}</dd>
          </div>
        </dl>
      </div>

      <div className="detail-layout">
        <article className="detail-card">
          <h2>Objectif du projet</h2>
          <p>{project.description}</p>
        </article>

        <article className="detail-card">
          <h2>Pourquoi ce projet compte pour Madagascar</h2>
          <p>{project.madagascar_relevance}</p>
        </article>

        <article className="detail-card">
          <h2>Catégories</h2>
          <div className="tag-row">
            {getProjectCategories(project).map((category) => (
              <span className="pill" key={category}>
                {CATEGORY_LABELS[category] ?? category}
              </span>
            ))}
          </div>
        </article>

        <article className="detail-card">
          <h2>Technologies</h2>
          <div className="detail-list">
            <div>
              <strong>Langage</strong>
              <span>{project.language}</span>
            </div>
            <div>
              <strong>Framework</strong>
              <span>{project.framework ?? "Non renseigné"}</span>
            </div>
            <div>
              <strong>Chemin GitHub</strong>
              <span>{project.repository_path}</span>
            </div>
          </div>
        </article>

        <article className="detail-card">
          <h2>Public cible</h2>
          <div className="tag-row">
            {(project.target_users ?? []).map((user) => (
              <span className="pill pill--muted" key={user}>
                {user}
              </span>
            ))}
          </div>
        </article>

        <article className="detail-card">
          <h2>Notes de catalogue</h2>
          <p>{project.notes ?? "Aucune note supplémentaire pour le moment."}</p>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  const route = useHashRoute();
  const [projects, setProjects] = useState<Repository[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Repository[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isContributionModalOpen, setContributionModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCatalogue() {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.BASE_URL}data/repositories.enriched.json`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Impossible de charger le catalogue (${response.status}).`);
        }

        const payload = (await response.json()) as Repository[];
        const sortedProjects = sortByStars(payload);
        setProjects(sortedProjects);
        setFeaturedProjects(shuffleProjects(sortedProjects).slice(0, Math.min(8, sortedProjects.length)));
        setError(null);
      } catch (loadError) {
        if (!(loadError instanceof DOMException && loadError.name === "AbortError")) {
          setError(loadError instanceof Error ? loadError.message : "Erreur inconnue.");
        }
      } finally {
        setLoading(false);
      }
    }

    void loadCatalogue();

    return () => {
      controller.abort();
    };
  }, []);

  const currentProject =
    route.kind === "project" ? projects.find((project) => project.slug === route.slug) ?? null : null;

  const handleCategorySelect = (category: string) => {
    startTransition(() => {
      setSelectedCategory(category);
    });
  };

  const handleSearchChange = (value: string) => {
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="site-brand" href="#/">
          <span className="site-brand__mark">OSM</span>
          <div>
            <strong>Open Source Madagascar</strong>
            <span>Catalogue public de projets et ressources open source</span>
          </div>
        </a>

        <nav className="site-nav">
          <a href="#/">Accueil</a>
          <button className="site-nav__cta" type="button" onClick={() => setContributionModalOpen(true)}>
            Proposer un projet
          </button>
        </nav>
      </header>

      <main className="site-main">
        {isLoading ? (
          <section className="status-panel">
            <p className="eyebrow">Chargement</p>
            <h1>Le catalogue est en train d&apos;arriver.</h1>
            <p>Nous préparons la vitrine des projets indexés dans la base `repositories.json`.</p>
          </section>
        ) : null}

        {!isLoading && error ? (
          <section className="status-panel">
            <p className="eyebrow">Erreur</p>
            <h1>Le catalogue n&apos;a pas pu être chargé.</h1>
            <p>{error}</p>
          </section>
        ) : null}

        {!isLoading && !error && route.kind === "home" ? (
          <HomePage
            projects={projects}
            featuredProjects={featuredProjects}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onCategorySelect={handleCategorySelect}
            onOpenContributionModal={() => setContributionModalOpen(true)}
            onSearchChange={handleSearchChange}
          />
        ) : null}

        {!isLoading && !error && route.kind === "project" && currentProject ? (
          <ProjectDetailPage
            project={currentProject}
            onOpenContributionModal={() => setContributionModalOpen(true)}
          />
        ) : null}

        {!isLoading && !error && route.kind === "project" && !currentProject ? (
          <section className="status-panel">
            <p className="eyebrow">Introuvable</p>
            <h1>Cette fiche projet n&apos;existe pas dans le catalogue.</h1>
            <p>Le projet a peut-être été renommé, retiré ou n&apos;est pas encore indexé.</p>
            <a className="button" href="#/">
              Retour à l&apos;accueil
            </a>
          </section>
        ) : null}
      </main>

      <footer className="site-footer">
        <p>Open Source Madagascar aide à rendre les projets locaux plus visibles et plus réutilisables.</p>
        <a href="https://github.com/rrantsa/open-source-madagascar" target="_blank" rel="noreferrer">
          Voir le dépôt principal
        </a>
      </footer>

      <ContributionModal isOpen={isContributionModalOpen} onClose={() => setContributionModalOpen(false)} />
    </div>
  );
}
