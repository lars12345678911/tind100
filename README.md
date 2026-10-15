# Tind 100 – App Store information site

Public, static information site for Tind 100. It contains marketing information,
privacy information, privacy choices, support, safety information, data-source
attribution and terms in Norwegian, English, French, Spanish, German and
Simplified Chinese. The privacy pages also document the voluntary, local-first TestFlight
pilot, user-controlled report export and the publisher's raw-report retention
limit.

Current publication target: Tind 100 version 1.18.0 (build 45), updated
15 October 2026. This is a local preparation target, not confirmation that
the website or app has been published.

This repository contains a versioned, byte-identical copy of the active build 45
peak catalogue and a separate, clearly labelled historical build 41 snapshot,
each with its SHA-256 checksum under `open-data/`. The historical snapshot is
not the active build 45 catalogue.
It intentionally does **not** contain iOS source code, user data, credentials,
private correspondence, raw provenance evidence, unpublished historical
catalogues, map tile archives or build products.

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
- `/open-data/seed_peaks-v1.18.0-build45.json`
- `/open-data/seed_peaks-v1.18.0-build45.json.sha256`
- `/open-data/seed_peaks-v1.17.0-build41.json`
- `/open-data/seed_peaks-v1.17.0-build41.json.sha256`
- `/third-party-notices/`
- `/terms/`

## Content status

The publisher identity, monitored contact address and repository URL in
`assets/config.js` must be real and reviewed before public deployment. Keep the
version, build and update date in that file aligned with every HTML metadata and
no-JavaScript fallback before publishing.

Current map behavior, checked against the local candidate on 11 October 2026:
online Kartverket zoom is limited to 17. Only already-viewed, validated
Kartverket tiles at zoom 5–16 may enter the bounded, expiring local cache.
New bulk Kartverket area downloads and whole-Norway downloads are not offered;
previously saved areas remain manageable.

OSM offline maps are separate, optional regional packages. The user chooses
one area, sees its size and confirms each download; no map archive is bundled
with the app or downloaded automatically. The current catalogue contains 200
regions. Packages use source tiles through zoom 14 and can be displayed through
zoom 16; enlarging them does not add missing detail. Limits are 256 MiB per
package and 1 GiB in total. Packages can be deleted locally and are excluded
from backup, progress sync and report export. Coverage and trails can be
incomplete, and neither a downloaded map nor the viewed-map cache guarantees
safe navigation. Product limits do not replace the applicable source licences.
