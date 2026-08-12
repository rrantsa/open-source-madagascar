# Developer Tools

This category will list open source libraries, templates, testing tools, deployment helpers, and other resources useful to builders in the Madagascar ecosystem.

## Included Projects

### Pocketenv

- Repository: https://github.com/pocketenv-io/pocketenv
- Description: Open sandbox runtime for agents and humans that provides portable development environments across multiple backend providers.
- Category: developer-tools
- Language: TypeScript
- Framework: Multi-backend sandbox CLI and SDK platform
- License: MPL-2.0
- Status: experimental
- Maintainer: pocketenv-io
- Target users: Developers, AI builders, platform engineers, teams sharing development environments
- Madagascar relevance: The repository was identified as being built by Malagasy developers, which makes it a relevant developer tool contribution from the local ecosystem and a reusable building block for Madagascar-based software teams.
- Notes: The README describes Pocketenv as a universal sandbox runtime for agents and humans and explicitly warns that it is still in early development, so `experimental` is the safest catalogue status.

### mi-saina

- Repository: https://github.com/raantss18/mi-saina
- Description: Local AI coding assistant with shell access, file management, web search, semantic memory, and a web UI built to run fully on-device through Ollama.
- Category: developer-tools
- Additional categories: offline-first
- Language: Python and TypeScript
- Framework: FastAPI, Next.js, Ollama, and SQLite-backed semantic memory
- License: unknown
- Status: experimental
- Maintainer: raantss18
- Target users: Developers, AI builders, Linux power users, offline local-AI users
- Madagascar relevance: The repository appears to be built by a Malagasy developer and is explicitly designed to run fully locally, which makes it a useful developer tool for Madagascar-based builders who need low-connectivity-friendly and privacy-preserving AI workflows.
- Notes: The public repository was created on 2026-06-03 and shows visible activity on 2026-06-04. The README describes `mi-saina` as a local Claude Code-style assistant built around Ollama, but no reusable open source license file or license metadata was present during review, so the catalogue keeps the license as `unknown`. The small commit history and early setup-oriented scope make `experimental` the safest status.

### MikeaOS

- Repository: https://github.com/tantelyorion/mikea-os
- Description: From-scratch x86_64 operating system project with a custom bootloader, freestanding C kernel, shell, filesystem, executable format, and early package manager.
- Category: developer-tools
- Additional categories: education
- Language: C and x86_64 Assembly
- Framework: Freestanding x86_64 OS with custom bootloader, MKFS filesystem, MKX executable format, and MPM package manager
- License: GPL-3.0
- Status: experimental
- Maintainer: tantelyorion
- Target users: Systems programmers, low-level developers, computer science students, OS hobbyists
- Madagascar relevance: The repository appears to be built by a Malagasy developer and provides a substantial from-scratch operating system codebase that can serve as a reusable learning and experimentation resource for systems programming communities in Madagascar.
- Notes: GitHub shows a public GPL-3.0 license and a visible commit on 2026-08-11. The README is detailed but also documents major current limits, including text-mode-only UI, non-persistent filesystem state across reboots, no Ring 3 isolation, and an in-memory package manager, so `experimental` is the safest catalogue status.
