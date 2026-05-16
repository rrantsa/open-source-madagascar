# Contribution Process

This document describes the lightweight contribution flow for Open Source Madagascar.

## Goal

Keep contributions easy while maintaining a readable and trustworthy catalogue.

## Basic Flow

1. Identify a project that fits the repository mission.
2. Gather the minimum metadata needed to describe it clearly.
3. Use `templates/project-submission.md` if submitting through an issue or pull request discussion.
4. Place the entry in the correct category file using the standard format from `docs/repository-entry-format.md`.
5. Mirror the same project in `data/repositories.json` using `data/repositories.schema.json`.
6. Open a pull request with a short explanation of the project's relevance to Madagascar.

## Maintainer Review Focus

- Is the project open source?
- Is the category appropriate?
- Is the metadata complete enough to be useful?
- Is the Madagascar relevance clear?
- Does the submission avoid duplication and obvious safety issues?

## Contributor Tips

- Prefer clarity over promotional wording.
- Explicitly mark uncertainty instead of guessing.
- Keep submissions narrowly scoped and easy to review.
- Use canonical category slugs and allowed status values exactly as documented.
- Use `unknown` for unverifiable license or status values instead of guessing.

## Notes

This file complements `docs/repository-entry-format.md`, `docs/project-selection-criteria.md`, and `data/repositories.schema.json`.

Maintainers can pair this process with `docs/maintainer-review-checklist.md` and `docs/label-guide.md`.
