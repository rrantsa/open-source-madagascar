# Manual PR Validation Workflow

This document defines the manual validation workflow for pull requests that add or modify catalogue entries.

The goal is not to run an automatic GitHub workflow. The goal is to let a maintainer trigger a Codex review and have the AI follow a consistent validation process.

## When To Use This Workflow

Use this workflow when a pull request:

- adds a new repository entry;
- updates an existing repository entry;
- changes `data/repositories.json`;
- changes `data/repositories.schema.json`;
- changes category files or contribution standards.

## Review Inputs

Before starting the review, Codex should inspect:

- the pull request diff;
- `docs/repository-entry-format.md`;
- `docs/project-selection-criteria.md`;
- `docs/status-definition.md`;
- `docs/maintainer-review-checklist.md`;
- `data/repositories.schema.json` when JSON catalogue data is changed.

## Review Steps

1. Identify which files were changed.
2. If category files were changed, verify that each repository entry follows the canonical Markdown format.
3. Verify that category values use the canonical slugs.
4. Verify that status values use the allowed lowercase values.
5. Verify that license information is clear or explicitly marked `unknown`.
6. Verify that Madagascar relevance is explicit and concrete.
7. Check whether the repository appears to duplicate an existing entry.
8. If `data/repositories.json` changed, verify that the JSON remains valid and matches the schema.
9. Check for obvious trust and safety issues such as deceptive projects, missing reuse rights, or sensitive personal data.
10. Produce a review outcome: accept, request changes, or reject.

## Expected Codex Review Output

The review output should be short and decision-oriented.

Suggested structure:

```md
## Review Result

- Outcome: Accept | Request changes | Reject
- Summary: Short explanation

## Findings

- Finding 1
- Finding 2

## Checks Performed

- Markdown entry format
- Category and status validation
- License and relevance review
- JSON/schema validation if applicable
```

## Notes

- Prefer explicit findings over vague approval.
- If information is uncertain, say what could not be verified.
- If the pull request is acceptable but incomplete, prefer `request changes` over silent acceptance.
- This workflow can later be supported by automation, but it is currently intended for manual Codex-led review.
