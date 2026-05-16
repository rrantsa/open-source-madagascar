# Repository Entry Format

This document defines the standard Markdown format and naming conventions for repository entries in Open Source Madagascar.

## Canonical Markdown Entry Format

Use this structure inside category files:

```md
### Project Name

- Repository: https://github.com/example/project-name
- Description: Short explanation of what the project does.
- Category: payments
- Language: TypeScript
- Framework: Node.js
- License: MIT
- Status: active
- Maintainer: Example Maintainer
- Target users: Developers, SMEs, e-commerce teams
- Madagascar relevance: Explains the local problem solved or why the project matters in Madagascar.
- Notes: Optional additional context.
```

## Required Fields

Every repository entry should include:

- `Project Name`
- `Repository`
- `Description`
- `Category`
- `Language`
- `License`
- `Status`
- `Madagascar relevance`

## Recommended Fields

Add these when the information is available:

- `Framework`
- `Maintainer`
- `Target users`
- `Notes`

## Canonical Category Values

The category value in Markdown and JSON should match one of these slugs exactly:

| Category Slug | Category File |
|---|---|
| `payments` | `categories/payments.md` |
| `ecommerce` | `categories/ecommerce.md` |
| `delivery-addressing` | `categories/delivery-addressing.md` |
| `education` | `categories/education.md` |
| `health` | `categories/health.md` |
| `agriculture` | `categories/agriculture.md` |
| `public-services` | `categories/public-services.md` |
| `language-ai` | `categories/language-ai.md` |
| `culture-history` | `categories/culture-history.md` |
| `developer-tools` | `categories/developer-tools.md` |
| `datasets` | `categories/datasets.md` |
| `offline-first` | `categories/offline-first.md` |
| `security-identity` | `categories/security-identity.md` |

## Status Values

Use only these lowercase values:

- `active`
- `experimental`
- `stable`
- `inactive`
- `archived`
- `unknown`

Detailed meaning is defined in `docs/status-definition.md`.

## License Guidance

- Prefer a standard SPDX-style license identifier such as `MIT`, `Apache-2.0`, or `GPL-3.0`.
- If a repository does not clearly state a reusable open source license, do not guess.
- When license information cannot be verified, use `unknown` and explain the uncertainty in `Notes`.
- Projects with `unknown` licenses should be reviewed carefully before acceptance.

## Madagascar Relevance Guidance

The `Madagascar relevance` field should explain the local reason the project belongs here. Strong examples include:

- support for Malagasy language processing or datasets;
- support for mobile money or local payment workflows;
- support for local administrative units such as regions, districts, communes, or fokontany;
- offline-first or low-connectivity behavior suited to local infrastructure constraints;
- direct usefulness to Malagasy schools, SMEs, NGOs, institutions, or communities.

Good example:

```md
- Madagascar relevance: Helps merchants integrate mobile money payment flows commonly used in Madagascar.
```

Weak example:

```md
- Madagascar relevance: Could maybe be useful locally.
```

## Formatting Notes

- Keep descriptions factual and short.
- Prefer one entry per repository.
- Avoid promotional wording.
- If a field is unknown, mark it explicitly rather than inventing data.
