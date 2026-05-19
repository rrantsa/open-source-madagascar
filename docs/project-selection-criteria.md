# Project Selection Criteria

This document explains the baseline logic for deciding whether a project belongs in Open Source Madagascar.

## Inclusion Principles

A project can be listed if it meets at least one of these conditions:

- it is directly useful in Madagascar;
- it addresses a Madagascar-specific digitalization problem;
- it supports Malagasy language, Malagasy data, or Malagasy institutions;
- it provides reusable code, data, templates, or documentation with practical local value.

## Madagascar Relevance Guidance

The repository should prefer projects whose local value is concrete and explainable.

Strong relevance examples:

- a payment integration for mobile money used in Madagascar;
- a tool that models regions, districts, communes, fokontany, or local address patterns;
- a Malagasy OCR, NLP, translation, or speech project;
- a school, clinic, NGO, SME, or public-service tool adapted to local workflows;
- an offline-first application suited to unstable connectivity.

Weak relevance examples:

- a generic project with no clear local adaptation;
- a repository that only happens to be used by one Malagasy developer with no Madagascar-specific purpose;
- a broad software collection with no documented local applicability.

## Preferred Signals

Projects are easier to accept when they also have:

- a public repository;
- a readable README;
- a clear open source license;
- enough setup or usage information to understand the project;
- enough visible context to verify its purpose.

## Rejection Signals

A project should not be listed if:

- it is not open source;
- reuse rights are unclear and no license is provided;
- it appears malicious, deceptive, or unsafe;
- it has no credible Madagascar relevance;
- it is only a marketing page without reusable code or data;
- it contains sensitive personal data.

## License Handling

- Prefer repositories with clear open source licenses.
- If the license cannot be verified, mark it as `unknown` and explain the uncertainty in the entry notes.
- A missing or unclear license is a warning sign and may justify rejection if reuse rights remain ambiguous.

## Notes

Use this document together with `docs/repository-entry-format.md` and `docs/status-definition.md`.
