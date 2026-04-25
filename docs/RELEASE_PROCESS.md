# Release Process

This repository uses semantic versioning and immutable Git tags for consumer installs.

## 1) Prepare the release

1. Ensure all intended API/contract changes are merged.
2. Run quality checks:
   - `npm run typecheck`
   - `npm run build`
3. Determine next semantic version:
   - Patch: backward-compatible fixes (`v0.1.1`)
   - Minor: backward-compatible features (`v0.2.0`)
   - Major: breaking changes (`v1.0.0`)

## 2) Update release artifacts

1. Update `CHANGELOG.md` with a new heading for the release version and date.
2. Include explicit notes for API/consumer-contract changes.
3. Update `docs/CONSUMER_CONTRACT.md` and `docs/consumer-contract.json` examples to the new immutable tag.

## 3) Create release tag

1. Commit release changes.
2. Create annotated tag:
   - `git tag -a vX.Y.Z -m "Release vX.Y.Z"`
3. Push commit and tag:
   - `git push origin <branch>`
   - `git push origin vX.Y.Z`

## 4) Consumer guidance

Consumers must pin to the release tag (or specific commit SHA), not a branch name:

```json
"@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#vX.Y.Z"
```

Disallowed floating refs include `#main`, `#master`, or any mutable branch reference.
