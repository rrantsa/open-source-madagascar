# Offline-first

This category will list open source projects focused on synchronization, local storage, resilience under poor connectivity, and low-bandwidth usage patterns.

### Notebook App Flutter MVP

- Repository: https://github.com/rrantsa/notebook_app_flutter_mvp
- Description: Flutter desktop notebook and photobook application that stores notes locally, attaches images, and exports printable PDF books.
- Category: offline-first
- Language: Dart
- Framework: Flutter, SQLite, and PDF tooling
- License: MIT
- Status: active
- Maintainer: rrantsa
- Target users: Personal users, families, students, small print studios
- Madagascar relevance: The project uses a local-first workflow with on-device SQLite storage and offline PDF export, which suits low-connectivity environments and practical documentation needs in Madagascar.
- Notes: The README documents recent Windows releases up to `v1.6.0`, and the repository shows visible activity on 2026-04-08. The README also states `MIT License`, although a standalone `LICENSE` file was not present in the default branch during review.

### Ny Baiboly DIEM v1.2

- Repository: https://github.com/dieudonne261/Ny-Baiboly-DIEM-v1.2
- Description: Expo and React Native mobile Bible application for Malagasy readers with bundled offline scripture access on Android.
- Category: offline-first
- Language: TypeScript
- Framework: Expo, React Native, and SQLite
- License: unknown
- Status: active
- Maintainer: dieudonne261
- Target users: Malagasy readers, church communities, students, offline mobile users
- Madagascar relevance: The application is written for Malagasy readers and explicitly prioritizes offline access, which makes it a strong fit for low-connectivity mobile usage patterns common in Madagascar.
- Notes: The public repository shows recent visible activity on 2026-04-24 and includes a shipped APK plus SQLite-backed app code, so `active` is reasonable. No reusable open source license file or license field was present during review, so the catalogue keeps the license as `unknown`.

### YT Downloader

- Repository: https://github.com/JulienPrince/youtube-dowloader-for-macbook
- Description: Minimal macOS desktop application for downloading YouTube videos and audio through `yt-dlp` and `ffmpeg`.
- Category: offline-first
- Language: Swift
- Framework: SwiftUI macOS app using `yt-dlp` and `ffmpeg`
- License: MIT
- Status: experimental
- Maintainer: JulienPrince
- Target users: macOS users, personal users, students, creators
- Madagascar relevance: Downloading videos and audio for later viewing fits low-connectivity usage in Madagascar, where people often need to save content while connected and watch it offline later.
- Notes: The README clearly documents the app, build flow, and MIT license, but the repository appears to be an early single-repository app with a first visible commit on 2026-04-17, so `experimental` is the safest status. A standalone `LICENSE` file was not present during review even though the README explicitly states MIT.
