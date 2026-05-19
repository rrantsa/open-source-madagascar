# PRD — Open Source Madagascar Repository

## 1. Product Name

**Open Source Madagascar**  
Alternative names:

- **Awesome Open Source MG**
- **Open Source MG**
- **Digital Commons MG**
- **Rakitra Open Source MG**

## 2. Product Summary

**Open Source Madagascar** is a curated repository that lists, classifies, documents, and promotes open source projects useful for the Malagasy context.

The repository aims to become a central entry point for discovering reusable digital tools, libraries, datasets, standards, and starter kits that can help accelerate digitalization in Madagascar.

The first version will be a GitHub repository containing a structured catalogue of existing repositories. Later versions may include a website, contribution workflow, data files, project scoring, and community-maintained standards.

---

## 3. Problem Statement

Madagascar faces several digitalization challenges:

- many local businesses still rely on manual processes;
- software adapted to Malagasy realities is limited;
- purchasing power is low, making custom software expensive;
- many developers solve similar problems separately;
- local tools, datasets, and standards are scattered or hard to find;
- payment, delivery, administration, language, and offline-first needs are often specific to Madagascar.

At the same time, AI-assisted development can reduce the cost of creating software. This creates an opportunity to build and share open source tools adapted to the Malagasy market.

The current missing piece is a **central, curated, and community-driven index** of such projects.

---

## 4. Vision

Create a shared digital commons for Madagascar: a place where developers, entrepreneurs, students, organizations, and communities can find and contribute reusable open source tools adapted to local needs.

Long-term, the project should help reduce the cost of digitalization in Madagascar by encouraging reuse, collaboration, and local standards.

---

## 5. Objectives

### Primary Objective

Create a GitHub repository that lists open source projects relevant to Madagascar in a structured, readable, and maintainable way.

### Secondary Objectives

- Make Malagasy and Madagascar-oriented open source projects easier to discover.
- Encourage collaboration between developers.
- Identify missing tools that should be built.
- Promote reusable standards for Malagasy-specific problems.
- Help non-technical users discover useful software.
- Provide a foundation for a future website or API.

---

## 6. Target Users

| User Type | Need |
|---|---|
| Malagasy developers | Discover reusable code, libraries, datasets, and projects |
| Students | Find projects to learn from or contribute to |
| Freelancers | Reuse tools to reduce project delivery time |
| Startups | Build faster with local-ready components |
| SMEs | Discover free or low-cost digital tools |
| NGOs and associations | Find open source tools for field operations |
| Public/local institutions | Identify reusable digital public goods |
| Researchers | Access datasets and language resources |
| AI builders | Find Malagasy language, OCR, and NLP resources |

---

## 7. Scope

## In Scope — MVP

The MVP will include:

- a main `README.md`;
- a clear project description;
- a list of categories;
- curated lists of repositories;
- contribution guidelines;
- submission template;
- project classification rules;
- basic project metadata;
- license information when available;
- status information: active, experimental, inactive, archived;
- relevance criteria for Madagascar.

## Out of Scope — MVP

The MVP will not yet include:

- a full website;
- automated repository crawling;
- user accounts;
- project ranking algorithm;
- package hosting;
- code hosting for all projects;
- governance board;
- certification process;
- official legal validation of listed software;
- full security audit of listed repositories.

---

## 8. Core Concept

The project starts as a **meta-repository**.

It does not initially contain all the code. Instead, it lists and organizes links to other repositories.

Example:

```md
## Payment

### MVola API Wrapper

- Repository: https://github.com/example/mvola-api-wrapper
- Description: Unofficial wrapper for integrating MVola payments.
- Language: TypeScript
- License: MIT
- Status: Experimental
- Relevance: Useful for e-commerce and local payment workflows in Madagascar.
```

Later, the repository can also host:

- templates;
- standards;
- datasets;
- starter kits;
- documentation;
- reference implementations.

---

## 9. Product Structure

Recommended initial structure:

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
    language-ai.md
    culture-history.md
    developer-tools.md
    datasets.md
    offline-first.md

  data/
    repositories.json

  templates/
    project-submission.md
    category-template.md

  docs/
    project-selection-criteria.md
    status-definition.md
    contribution-process.md
```

---

## 10. Categories

The repository should classify projects into the following categories.

| Category | Description |
|---|---|
| Payments | Mobile money, banking, payment verification, checkout |
| E-commerce | Online shops, catalogues, local checkout, WhatsApp commerce |
| Delivery and Addressing | Address formats, GPS, delivery management, local location systems |
| Business Management | POS, invoicing, stock, small business tools |
| Education | School management, attendance, grades, learning resources |
| Health | Clinic, pharmacy, patient records, appointment tools |
| Agriculture | Cooperatives, harvest tracking, market prices, livestock |
| Public Services | Fokontany, commune, certificates, citizen services |
| Language and AI | Malagasy NLP, OCR, translation, speech-to-text, datasets |
| Culture and History | Archives, local history, heritage, photo collections |
| Developer Tools | Libraries, templates, testing, deployment, design systems |
| Open Data | Administrative divisions, maps, public datasets |
| Offline-first | Sync, local storage, low-connectivity tools |
| Security and Identity | KYC, consent, audit logs, document verification |

---

## 11. Repository Entry Format

Each listed project should follow a consistent format.

```md
### Project Name

- Repository: https://github.com/example/project-name
- Description: Short explanation of what the project does.
- Category: Payments
- Language: TypeScript
- Framework: Node.js
- License: MIT
- Status: Active
- Maintainer: Organization or person
- Target users: Developers, SMEs, e-commerce platforms
- Madagascar relevance: Supports mobile money payment workflows used locally.
- Notes: Optional extra context.
```

---

## 12. JSON Data Format

To make the catalogue reusable later by a website or API, every project should also be added to `data/repositories.json`.

Example:

```json
[
  {
    "name": "mg-address-parser",
    "url": "https://github.com/example/mg-address-parser",
    "description": "Parser and normalizer for Malagasy-style addresses using region, district, commune, fokontany, neighborhood and local landmarks.",
    "category": "delivery-addressing",
    "language": "TypeScript",
    "framework": "Node.js",
    "license": "MIT",
    "status": "experimental",
    "maintainer": "Example Maintainer",
    "target_users": ["developers", "ecommerce", "delivery-services"],
    "madagascar_relevance": "Helps manage local address structures where formal street addresses are incomplete.",
    "tags": ["madagascar", "address", "delivery", "fokontany", "gps"]
  }
]
```

---

## 13. Project Status Definitions

| Status | Meaning |
|---|---|
| Active | Maintained and recently updated |
| Experimental | Prototype or early version |
| Stable | Usable and reasonably mature |
| Inactive | No recent maintenance, but still useful |
| Archived | Read-only or no longer maintained |
| Unknown | Status cannot be verified yet |

---

## 14. Inclusion Criteria

A project can be listed if it meets at least one of the following criteria:

1. It is directly useful for Madagascar.
2. It solves a local digitalization problem.
3. It supports Malagasy language, Malagasy data, or Malagasy institutions.
4. It provides reusable code, data, templates, or documentation.
5. It can help SMEs, communities, schools, NGOs, public services, or local developers.

The project should preferably have:

- a public repository;
- a clear license;
- a README;
- basic installation or usage instructions;
- enough information to understand its purpose.

---

## 15. Exclusion Criteria

A project should not be listed if:

- it is not open source;
- no license is provided and reuse rights are unclear;
- it is malicious or suspicious;
- it promotes scams, misinformation, or illegal activities;
- it has no clear relevance to Madagascar or Malagasy users;
- it is only a private commercial landing page without usable code;
- it contains sensitive personal data.

---

## 16. Key Features — MVP

### Feature 1 — Main Catalogue

**Description**  
The repository must provide a readable catalogue of projects grouped by category.

**Acceptance Criteria**

- The `README.md` explains the purpose of the project.
- The README links to all category files.
- Each category file contains a list of repositories.
- Each repository has at least name, link, description, language, license, status, and relevance.

---

### Feature 2 — Contribution Guide

**Description**  
Contributors must understand how to add a project.

**Acceptance Criteria**

- A `CONTRIBUTING.md` file exists.
- It explains how to submit a repository.
- It explains how to create a pull request.
- It defines required project metadata.
- It explains acceptance and rejection criteria.

---

### Feature 3 — Submission Template

**Description**  
Contributors should have a ready-to-use template.

**Acceptance Criteria**

- A file `templates/project-submission.md` exists.
- The template includes all required fields.
- The template can be copied into a GitHub issue or pull request.

---

### Feature 4 — JSON Catalogue

**Description**  
The repository should include machine-readable data.

**Acceptance Criteria**

- A `data/repositories.json` file exists.
- Each repository entry follows a consistent schema.
- The JSON is valid.
- The JSON can later be used by a website or API.

---

### Feature 5 — Roadmap

**Description**  
The project should show future direction.

**Acceptance Criteria**

- A `ROADMAP.md` file exists.
- It includes MVP, short-term, medium-term, and long-term goals.
- It identifies possible future features such as website, search, scoring, and standards.

---

## 17. Future Features

### Version 2

- GitHub Pages website.
- Searchable catalogue.
- Filters by category, language, license, and status.
- Project badges.
- Better JSON schema.
- Automated validation of repository entries.
- Issue template for project submission.
- Pull request template.
- GitHub Actions for checking broken links and JSON validity.

### Version 3

- Dedicated website.
- API endpoint.
- Project scoring system.
- Community voting.
- Maintainer profiles.
- “Needs contributors” label.
- “Good first issue” discovery.
- Map of open source contributors in Madagascar.
- Project maturity index.

### Version 4

- Official open source organization.
- Community-maintained starter kits.
- Local standards for payment, address, invoices, and public data.
- Partnerships with universities, tech communities, NGOs, and public institutions.

---

## 18. Success Metrics

| Metric | MVP Target |
|---|---|
| Listed repositories | 20+ |
| Categories created | 10+ |
| Contributors | 3+ |
| Valid JSON entries | 100% |
| Project submission template | Available |
| Contribution guide | Available |
| GitHub stars | 50+ initial community target |
| Pull requests from outside maintainer | At least 2 |
| Issues submitted | At least 5 |

Long-term metrics:

- number of active contributors;
- number of listed projects;
- number of projects built from identified gaps;
- number of universities or communities using the repository;
- number of reusable standards created;
- number of starter kits produced.

---

## 19. Non-Functional Requirements

### Maintainability

The repository must be easy to update through pull requests.

### Readability

The content must be understandable by both technical and semi-technical users.

### Transparency

Each project must clearly display its status, license, and relevance.

### Reusability

Data should be structured so it can later power a website or API.

### Multilingual Readiness

The initial language can be French, English, or bilingual. Long-term, the project should support:

- French;
- Malagasy;
- English.

### Low Barrier to Contribution

Contributors should be able to submit a project without complex tooling.

---

## 20. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Repository becomes unmaintained | Keep structure simple, recruit maintainers early |
| Too many low-quality submissions | Define clear inclusion criteria |
| Legal ambiguity around licenses | Require license field and mark unknown licenses clearly |
| Becomes a random list | Use categories, metadata, and review process |
| No contributors | Start with a strong README, social posts, and community outreach |
| Duplicate entries | Add JSON validation and review checklist |
| Broken links | Add automated link checker later |
| Projects are not truly relevant to Madagascar | Require “Madagascar relevance” field |

---

## 21. Initial Roadmap

### Phase 1 — Foundation

- Create README.
- Create category structure.
- Create contribution guide.
- Create submission template.
- Add JSON catalogue.
- Add 5 to 10 initial example repositories.

### Phase 2 — Curation

- Add at least 20 repositories.
- Improve categories.
- Add status definitions.
- Add project selection criteria.
- Invite contributors.

### Phase 3 — Automation

- Add GitHub issue templates.
- Add pull request template.
- Add JSON schema validation.
- Add broken link checker.
- Add GitHub Actions.

### Phase 4 — Website

- Generate a simple static website from `repositories.json`.
- Add search and filters.
- Deploy with GitHub Pages.
- Add project detail pages.

### Phase 5 — Community

- Create maintainer roles.
- Add governance document.
- Launch public call for contributions.
- Partner with developer communities, universities, and tech groups.

---

## 22. Recommended First Issues

```md
- [ ] Create README.md
- [ ] Create CONTRIBUTING.md
- [ ] Create CODE_OF_CONDUCT.md
- [ ] Create ROADMAP.md
- [ ] Create categories/payments.md
- [ ] Create categories/ecommerce.md
- [ ] Create categories/delivery-addressing.md
- [ ] Create categories/language-ai.md
- [ ] Create categories/datasets.md
- [ ] Create data/repositories.json
- [ ] Create templates/project-submission.md
- [ ] Add first 10 repositories
- [ ] Define project status labels
- [ ] Define inclusion and exclusion criteria
- [ ] Create GitHub issue template for project submission
```

---

## 23. Suggested README Opening

```md
# Open Source Madagascar

A curated list of open source projects, tools, datasets, libraries, and starter kits useful for the Malagasy context.

The goal of this repository is to make local digital solutions easier to discover, reuse, improve, and adapt.

Madagascar has specific needs in payment, delivery, address management, education, public services, language technology, business management, and offline-first applications. This project aims to collect and organize open source resources that can help reduce the cost of digitalization.
```

---

## 24. Product Principle

The project should follow this principle:

> Start as a catalogue. Evolve into a commons.

The first mission is not to build everything.  
The first mission is to **make visible what already exists**, then use that visibility to identify what should be built next.
