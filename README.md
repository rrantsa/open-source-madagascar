# Open Source Madagascar

A curated list of open source projects, tools, datasets, libraries, standards, and starter kits created by Malagasy developers or useful for the Malagasy context.

The goal of this repository is to make local digital solutions easier to discover, reuse, improve, and adapt. It starts as a catalogue and aims to grow into a shared digital commons for Madagascar.

## Why This Repository Exists

Madagascar has specific digitalization needs in payments, delivery, address management, education, public services, language technology, business management, and offline-first applications. Many useful solutions already exist, but they are often scattered across repositories, organizations, and personal profiles.

This repository creates a central entry point for:

- discovering reusable projects relevant to Madagascar;
- reducing duplicated work across teams;
- identifying missing tools worth building;
- encouraging collaboration around local digital standards.

## Who This Is For

- Developers looking for reusable code, libraries, APIs, and starter kits.
- Students looking for projects to learn from or contribute to.
- Freelancers and startups trying to ship faster with local-ready components.
- SMEs, NGOs, and institutions looking for low-cost digital tools.
- Researchers and AI builders looking for Malagasy language, OCR, NLP, and open data resources.

## MVP Scope

The MVP of this repository is a structured GitHub catalogue with:

- a readable main README;
- category-based project lists;
- contribution guidelines;
- a project submission format;
- project classification and review rules;
- machine-readable repository data for future reuse.

The MVP does not yet include a full website, automated crawling, user accounts, or project scoring.

## Catalogue Stats

This section is generated from `data/repositories.json`.

<!-- STATS:START -->
- Total repositories: **20**
- Categories represented: **14 / 18**
- Repositories with known licenses: **15**
- Repositories with unknown licenses: **5**
- Repositories with unknown status: **3**

### By Category

_Counts include both primary `category` values and secondary `additional_categories` memberships._

| Category | Slug | Count |
|---|---|---:|
| Payments | `payments` | 0 |
| E-commerce | `ecommerce` | 0 |
| Delivery and Addressing | `delivery-addressing` | 4 |
| Education | `education` | 2 |
| Health | `health` | 0 |
| Agriculture | `agriculture` | 1 |
| Public Services | `public-services` | 3 |
| Mobility | `mobility` | 1 |
| Civic Tech | `civic-tech` | 1 |
| Language and AI | `language-ai` | 6 |
| Culture and History | `culture-history` | 2 |
| Meta Catalogue | `meta-catalogue` | 1 |
| Developer Tools | `developer-tools` | 3 |
| Datasets | `datasets` | 4 |
| Environment | `environment` | 1 |
| Community | `community` | 1 |
| Offline-first | `offline-first` | 2 |
| Security and Identity | `security-identity` | 0 |

### By Status

| Value | Count |
|---|---:|
| active | 6 |
| inactive | 5 |
| experimental | 4 |
| unknown | 3 |
| stable | 2 |

### By License

| Value | Count |
|---|---:|
| MIT | 9 |
| unknown | 5 |
| GPL-3.0 | 2 |
| BSD-3-Clause | 1 |
| CC0-1.0 | 1 |
| CC-BY-SA-4.0 | 1 |
| MPL-2.0 | 1 |
<!-- STATS:END -->

## Category Files

These category pages organize the catalogue by primary category while allowing related secondary categories in the machine-readable JSON data.

- [Payments](categories/payments.md)
- [E-commerce](categories/ecommerce.md)
- [Delivery and Addressing](categories/delivery-addressing.md)
- [Education](categories/education.md)
- [Health](categories/health.md)
- [Agriculture](categories/agriculture.md)
- [Public Services](categories/public-services.md)
- [Mobility](categories/mobility.md)
- [Civic Tech](categories/civic-tech.md)
- [Language and AI](categories/language-ai.md)
- [Culture and History](categories/culture-history.md)
- [Meta Catalogue](categories/meta-catalogue.md)
- [Developer Tools](categories/developer-tools.md)
- [Datasets](categories/datasets.md)
- [Environment](categories/environment.md)
- [Community](categories/community.md)
- [Offline-first](categories/offline-first.md)
- [Security and Identity](categories/security-identity.md)

## Contribution Entry Points

- Read the contribution guide in [CONTRIBUTING.md](CONTRIBUTING.md).
- Review the direction of the project in [ROADMAP.md](ROADMAP.md).
- Use the PRD in [docs/PRD_Open_Source_Madagascar.md](docs/PRD_Open_Source_Madagascar.md) as the product reference.
- Use [docs/repository-entry-format.md](docs/repository-entry-format.md) for the canonical Markdown entry format and category values.
- Use [data/repositories.schema.json](data/repositories.schema.json) for the machine-readable catalogue schema.
- Use [docs/maintainer-review-checklist.md](docs/maintainer-review-checklist.md) and [docs/label-guide.md](docs/label-guide.md) for triage and review conventions.
- Use [docs/manual-pr-validation-workflow.md](docs/manual-pr-validation-workflow.md) when running a manual Codex review of incoming pull requests.
- Propose repositories that are open source and clearly relevant to Madagascar.

## Repository Structure

The repository is intended to grow into the following structure:

```text
open-source-madagascar/
  README.md
  CONTRIBUTING.md
  CODE_OF_CONDUCT.md
  LICENSE
  ROADMAP.md

  categories/
    payments.md
    ecommerce.md
    delivery-addressing.md
    education.md
    health.md
    agriculture.md
    public-services.md
    mobility.md
    civic-tech.md
    language-ai.md
    culture-history.md
    meta-catalogue.md
    developer-tools.md
    datasets.md
    environment.md
    community.md
    offline-first.md
    security-identity.md

  data/
    repositories.json
    repositories.schema.json

  templates/
    project-submission.md
    category-template.md

  scripts/
    update_readme_stats.ps1

  docs/
    PRD_Open_Source_Madagascar.md
    repository-entry-format.md
    project-selection-criteria.md
    status-definition.md
    contribution-process.md
    maintainer-review-checklist.md
    label-guide.md
    outreach-message.md
    manual-pr-validation-workflow.md
```

## Project Principles

- Start as a catalogue.
- Evolve into a commons.
- Prefer clarity over complexity.
- Keep contribution barriers low.
- Make status, license, and local relevance visible.

## Language

The repository can evolve toward bilingual or trilingual documentation. Initial content may be written in English, French, or a mix that remains clear to the intended community.

## Current Status

The repository is in active curation mode. Core documentation, catalogue standards, contributor workflows, JSON-driven README stats, and the first 20 validated repositories are now in place. The immediate priority is to keep catalogue quality high while improving review depth, link checking, and website discovery features.






