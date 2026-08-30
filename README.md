# Tind 100 – App Store information site

Public, static information site for Tind 100. It contains marketing information,
privacy information, privacy choices, support, safety information, data-source
attribution and terms in Norwegian, English, Spanish, German and Simplified
Chinese.

Current publication target: Tind 100 version 1.17.0 (build 41), updated
29 August 2026.

This repository contains one versioned, byte-identical public copy of the
active build 41 peak catalogue and its SHA-256 checksum under `open-data/`.
It intentionally does **not** contain iOS source code, user data, credentials,
private correspondence, raw provenance evidence, historical catalogues, map
tile archives or build products.

The website is publicly readable but is not released under an open-source or
open-content licence. See `LICENSE`.

## Local preview

Serve the repository root with any static HTTP server and open `index.html`.
No build step, package manager, analytics or external JavaScript dependency is
required.

## Publishing

The site is designed for GitHub Pages from the `main` branch and repository
root. The stable App Store URLs are:

- `/privacy/`
- `/support/`
- `/privacy-choices/`
- `/safety/`
- `/data-sources/`
- `/open-data/`
- `/open-data/seed_peaks-v1.17.0-build41.json`
- `/open-data/seed_peaks-v1.17.0-build41.json.sha256`
- `/third-party-notices/`
- `/terms/`

## Content status

The publisher identity, monitored contact address and repository URL in
`assets/config.js` must be real and reviewed before public deployment. Keep the
version, build and update date in that file aligned with every HTML metadata and
no-JavaScript fallback before publishing.
