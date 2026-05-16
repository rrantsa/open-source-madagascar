# TODO 1 - Open Source Madagascar

This checklist is derived from `docs/PRD_Open_Source_Madagascar.md` and focuses on turning the repository into the MVP described in the PRD.

## Phase 1 - Foundation

- [ ] Rewrite `README.md` with the project name, summary, vision, objectives, and repository structure.
- [ ] Add README links to every category file.
- [ ] Add a short explanation of who the repository is for.
- [ ] Add contribution entry points in the README.
- [ ] Create `CONTRIBUTING.md`.
- [ ] Document how to submit a repository.
- [ ] Document pull request steps for contributors.
- [ ] Document required metadata fields for each project entry.
- [ ] Document acceptance and rejection criteria.
- [ ] Create `CODE_OF_CONDUCT.md`.
- [ ] Create `LICENSE`.
- [ ] Create `ROADMAP.md`.
- [ ] Split the roadmap into MVP, short-term, medium-term, and long-term goals.

## Phase 2 - Repository Structure

- [ ] Create the `categories/` directory.
- [ ] Create `categories/payments.md`.
- [ ] Create `categories/ecommerce.md`.
- [ ] Create `categories/delivery-addressing.md`.
- [ ] Create `categories/education.md`.
- [ ] Create `categories/health.md`.
- [ ] Create `categories/agriculture.md`.
- [ ] Create `categories/public-services.md`.
- [ ] Create `categories/language-ai.md`.
- [ ] Create `categories/culture-history.md`.
- [ ] Create `categories/developer-tools.md`.
- [ ] Create `categories/datasets.md`.
- [ ] Create `categories/offline-first.md`.
- [ ] Create `categories/security-identity.md`.
- [ ] Create the `data/` directory.
- [ ] Create `data/repositories.json`.
- [ ] Create the `templates/` directory.
- [ ] Create `templates/project-submission.md`.
- [ ] Create `templates/category-template.md`.
- [ ] Create `docs/project-selection-criteria.md`.
- [ ] Create `docs/status-definition.md`.
- [ ] Create `docs/contribution-process.md`.

## Phase 3 - Standards and Templates

- [ ] Define the standard Markdown format for each repository entry.
- [ ] Define the JSON schema shape for repository entries.
- [ ] Add allowed status values: `active`, `experimental`, `stable`, `inactive`, `archived`, `unknown`.
- [ ] Define how to mark unknown or missing license information.
- [ ] Define category naming conventions between Markdown files and JSON values.
- [ ] Add inclusion criteria based on the PRD.
- [ ] Add exclusion criteria based on the PRD.
- [ ] Add Madagascar relevance guidance with examples.
- [ ] Add a copy-paste submission template for issues or pull requests.

## Phase 4 - Initial Catalogue Content

- [ ] Add 5 initial example repositories to validate the structure.
- [ ] Expand to 10 initial repositories across multiple categories.
- [ ] Expand to at least 20 repositories to meet the MVP target.
- [ ] Ensure each repository entry includes project name, repository URL, description, category, language, framework when available, license, status, maintainer when available, target users, Madagascar relevance, and optional notes.
- [ ] Mirror every Markdown entry inside `data/repositories.json`.
- [ ] Check that the JSON file remains valid after each batch of additions.
- [ ] Avoid duplicate project entries across categories.

## Phase 5 - Quality and Review

- [ ] Review the README for readability by both technical and semi-technical users.
- [ ] Review category files for consistent formatting.
- [ ] Review all entries for clear Madagascar relevance.
- [ ] Review all entries for open source license clarity.
- [ ] Mark unclear or unverifiable status values as `unknown`.
- [ ] Confirm no listed project violates the exclusion criteria.
- [ ] Confirm no listed project exposes sensitive personal data.

## Phase 6 - Community Readiness

- [ ] Add a GitHub issue template for project submission.
- [ ] Add a pull request template.
- [ ] Create a simple review checklist for maintainers.
- [ ] Define labels for status, category, and contribution flow.
- [ ] Prepare a short outreach message to invite contributors.

## Phase 7 - Automation and Future Work

- [ ] Add JSON validation.
- [ ] Add broken-link checking.
- [ ] Add GitHub Actions for validation workflows.
- [ ] Add searchable website planning notes.
- [ ] Plan filters by category, language, license, and status.
- [ ] Plan future badges, scoring, and project maturity indicators.

## MVP Exit Checklist

- [ ] `README.md` explains the project clearly.
- [ ] README links to all category files.
- [ ] `CONTRIBUTING.md` exists and is usable.
- [ ] `templates/project-submission.md` exists and includes all required fields.
- [ ] `data/repositories.json` exists and is valid.
- [ ] `ROADMAP.md` exists and reflects the PRD phases.
- [ ] At least 10 category files exist.
- [ ] At least 20 repositories are listed.
- [ ] Every repository entry includes status, license, and Madagascar relevance.
