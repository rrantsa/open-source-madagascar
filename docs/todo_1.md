# TODO 1 - Open Source Madagascar

This checklist is derived from `docs/PRD_Open_Source_Madagascar.md` and focuses on turning the repository into the MVP described in the PRD.

## Progress Rule

- [x] Update this todo file whenever a phase is completed.

## Phase 1 - Foundation

- [x] Rewrite `README.md` with the project name, summary, vision, objectives, and repository structure.
- [x] Add README links to every category file.
- [x] Add a short explanation of who the repository is for.
- [x] Add contribution entry points in the README.
- [x] Create `CONTRIBUTING.md`.
- [x] Document how to submit a repository.
- [x] Document pull request steps for contributors.
- [x] Document required metadata fields for each project entry.
- [x] Document acceptance and rejection criteria.
- [x] Create `CODE_OF_CONDUCT.md`.
- [x] Create `LICENSE`.
- [x] Create `ROADMAP.md`.
- [x] Split the roadmap into MVP, short-term, medium-term, and long-term goals.

Phase 1 status: Completed on 2026-05-16.

## Phase 2 - Repository Structure

- [x] Create the `categories/` directory.
- [x] Create `categories/payments.md`.
- [x] Create `categories/ecommerce.md`.
- [x] Create `categories/delivery-addressing.md`.
- [x] Create `categories/education.md`.
- [x] Create `categories/health.md`.
- [x] Create `categories/agriculture.md`.
- [x] Create `categories/public-services.md`.
- [x] Create `categories/language-ai.md`.
- [x] Create `categories/culture-history.md`.
- [x] Create `categories/developer-tools.md`.
- [x] Create `categories/datasets.md`.
- [x] Create `categories/offline-first.md`.
- [x] Create `categories/security-identity.md`.
- [x] Create the `data/` directory.
- [x] Create `data/repositories.json`.
- [x] Create the `templates/` directory.
- [x] Create `templates/project-submission.md`.
- [x] Create `templates/category-template.md`.
- [x] Create `docs/project-selection-criteria.md`.
- [x] Create `docs/status-definition.md`.
- [x] Create `docs/contribution-process.md`.

Phase 2 status: Completed on 2026-05-16.

## Phase 3 - Standards and Templates

- [x] Define the standard Markdown format for each repository entry.
- [x] Define the JSON schema shape for repository entries.
- [x] Add allowed status values: `active`, `experimental`, `stable`, `inactive`, `archived`, `unknown`.
- [x] Define how to mark unknown or missing license information.
- [x] Define category naming conventions between Markdown files and JSON values.
- [x] Add inclusion criteria based on the PRD.
- [x] Add exclusion criteria based on the PRD.
- [x] Add Madagascar relevance guidance with examples.
- [x] Add a copy-paste submission template for issues or pull requests.

Phase 3 status: Completed on 2026-05-16.

## Phase 4 - Initial Catalogue Content

- [x] Add 5 initial example repositories to validate the structure.
- [x] Expand to 10 initial repositories across multiple categories.
- [ ] Expand to at least 20 repositories to meet the MVP target.
- [x] Ensure each repository entry includes project name, repository URL, description, category, language, framework when available, license, status, maintainer when available, target users, Madagascar relevance, and optional notes.
- [x] Mirror every Markdown entry inside `data/repositories.json`.
- [x] Check that the JSON file remains valid after each batch of additions.
- [x] Avoid duplicate project entries across categories.

Phase 4 status: Expanded to 16 repositories on 2026-05-17.

## Phase 5 - Quality and Review

- [ ] Review the README for readability by both technical and semi-technical users.
- [ ] Review category files for consistent formatting.
- [ ] Review all entries for clear Madagascar relevance.
- [ ] Review all entries for open source license clarity.
- [ ] Mark unclear or unverifiable status values as `unknown`.
- [ ] Confirm no listed project violates the exclusion criteria.
- [ ] Confirm no listed project exposes sensitive personal data.

## Phase 6 - Community Readiness

- [x] Add a GitHub issue template for project submission.
- [x] Add a pull request template.
- [x] Create a simple review checklist for maintainers.
- [x] Define labels for status, category, and contribution flow.
- [x] Prepare a short outreach message to invite contributors.

Phase 6 status: Completed on 2026-05-16.

## Phase 7 - Automation and Future Work

- [x] Generate README catalogue stats from `data/repositories.json`.
- [ ] Add JSON validation.
- [ ] Add broken-link checking.
- [ ] Add GitHub Actions for validation workflows.
- [ ] Add searchable website planning notes.
- [ ] Plan filters by category, language, license, and status.
- [ ] Plan future badges, scoring, and project maturity indicators.

## MVP Exit Checklist

- [x] `README.md` explains the project clearly.
- [x] README links to all category files.
- [x] `CONTRIBUTING.md` exists and is usable.
- [x] `templates/project-submission.md` exists and includes all required fields.
- [x] `data/repositories.json` exists and is valid.
- [x] `ROADMAP.md` exists and reflects the PRD phases.
- [x] At least 10 category files exist.
- [ ] At least 20 repositories are listed.
- [x] Every repository entry includes status, license, and Madagascar relevance.
