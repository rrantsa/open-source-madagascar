# Contributing to Open Source Madagascar

Thank you for helping build a shared catalogue of open source resources relevant to Madagascar.

This repository exists to make useful projects easier to discover, reuse, and improve. Contributions should keep the catalogue structured, readable, and trustworthy.

## What You Can Contribute

You can contribute by:

- adding a new repository relevant to Madagascar;
- improving project descriptions or metadata;
- correcting links, licenses, statuses, or categories;
- suggesting missing categories, standards, or templates;
- improving documentation and contribution workflows.

## What We Are Looking For

A project can be listed if it meets at least one of these conditions:

- it was created by Malagasy developers;
- it is directly useful for Madagascar;
- it solves a local digitalization problem;
- it supports Malagasy language, Malagasy data, or Malagasy institutions;
- it provides reusable code, data, templates, or documentation;
- it can help SMEs, communities, schools, NGOs, public services, or local developers.

Projects should preferably have:

- a public repository;
- a clear open source license;
- a README;
- enough information to understand the purpose of the project;
- basic usage or installation information.

## Required Project Metadata

When proposing a project, include the following fields whenever possible:

- Project name
- Repository URL
- Short description
- Category
- Additional categories when the project clearly fits more than one area
- Language
- Framework or runtime
- License
- Status
- Maintainer or organization
- Target users
- Madagascar relevance
- Notes or caveats

For the exact entry layout, category slugs, and license guidance, use `docs/repository-entry-format.md`.

## Categories and Cross-Listing

- Give each repository one primary `Category`.
- If a project clearly fits more than one area, add `Additional categories` instead of duplicating the full Markdown entry across multiple category files.
- Keep one canonical Markdown entry for the repository under its primary category file.
- Mirror `Additional categories` in `data/repositories.json` as `additional_categories`.

## Status Values

Use one of these values:

- `active`: maintained and recently updated
- `experimental`: prototype or early version
- `stable`: usable and reasonably mature
- `inactive`: no recent maintenance, but still useful
- `archived`: read-only or no longer maintained
- `unknown`: status cannot be verified

Full status guidance is defined in `docs/status-definition.md`.

## Acceptance Criteria

Submissions are more likely to be accepted when they:

- are clearly open source;
- have a valid public repository link;
- have enough context for readers to understand what the project does;
- fit an existing category or motivate a clear new one;
- explain why the project matters for Madagascar;
- avoid duplicate entries already present in the catalogue.

Detailed inclusion and exclusion logic is described in `docs/project-selection-criteria.md`.

## Rejection Criteria

A submission may be rejected if:

- the project is not open source;
- no license is provided and reuse rights are unclear;
- the repository appears malicious, suspicious, or unsafe;
- the project promotes scams, misinformation, or illegal activity;
- the project has no clear Madagascar relevance;
- it is only a marketing page without usable code or data;
- it contains sensitive personal data.

## How to Submit a Repository

Use this lightweight flow:

1. Fork the repository.
2. Create a branch for your change.
3. Copy `templates/project-submission.md` into your issue or pull request, or add the entry directly to the correct category file using the standard repository entry format.
4. If relevant files already exist, place the proposal in the matching primary category file and keep the format consistent.
5. If the repository also fits other category pages, record those as `Additional categories` instead of creating duplicate full entries.
6. Open a pull request with a clear title and a short explanation of the repository's Madagascar relevance.

If you are not ready to open a pull request, you can still open an issue describing the project you want to add.

GitHub issue and pull request templates are available in `.github/` to make submissions easier.

## Pull Request Guidelines

- Keep changes focused and easy to review.
- Prefer factual descriptions over promotional wording.
- Verify links before submitting.
- Do not remove other contributors' work unless the change is clearly incorrect and you explain why.
- If license or status information is uncertain, say so explicitly instead of guessing.

## Review Principles

Maintainers will review contributions for:

- relevance;
- clarity;
- completeness of metadata;
- duplication risk;
- basic trust and safety concerns.

The goal is to keep the repository open to contributors while maintaining a useful and credible catalogue.

Maintainers can use `docs/maintainer-review-checklist.md` and `docs/label-guide.md` to keep triage consistent.

When a pull request is reviewed through Codex, maintainers should also follow `docs/manual-pr-validation-workflow.md`.
