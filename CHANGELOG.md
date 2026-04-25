# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project follows semantic versioning.

## v0.1.1 - 2026-04-25

### Changed
- Consumer contract now requires immutable install refs (semantic tag or commit SHA) and explicitly disallows floating branch refs.
- Consumer contract examples now pin installs to `#v0.1.1` instead of `#main`.
- Added a documented release workflow that requires semantic tags and changelog updates per release.

### Contract/API Notes
- No runtime API symbol changes in this release.
- Consumer installation contract changed: consumers must use an immutable Git reference.
