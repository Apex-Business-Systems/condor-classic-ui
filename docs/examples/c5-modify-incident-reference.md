# C5 Modify Incident Reference: Local Human Review Workflow

This document explains how to render and visually review `C5ModifyIncidentReference` locally.

## Purpose

- Provide a deterministic local preview for human visual validation.
- Keep package/library build behavior unchanged.
- Avoid committing binary screenshots in the repository.

## Required manual visual review profiles

Reviewers must validate both profiles in the preview harness:

1. `cde/default`
2. `win9x/2000` (closest available Win9x profile included in this package)

## Local setup and preview commands

Run these commands from the repository root:

```bash
npm install
npm run preview:c5-modify-incident-reference
```

Vite will print a local URL (typically `http://localhost:5173`). Open `/examples/c5-modify-incident-reference-preview.html` under that URL in a browser.

## How to perform the review

1. Launch the preview with `npm run preview:c5-modify-incident-reference` and open `/examples/c5-modify-incident-reference-preview.html`.
2. In the **Profile** selector, choose `cde/default` and review the entire `Modify Incident` reference screen.
3. Switch to `win9x/2000` and repeat review.
4. Confirm layout, spacing, typography, field groupings, tables, and status bar render correctly in both profiles.

## Approval protocol (explicit)

- **Codex must not commit binary screenshots** (`.png`, `.jpg`, `.jpeg`, etc.) for this workflow.
- **Human reviewers perform visual approval** by running the local preview and then:
  - commenting approval in the PR, and/or
  - manually attaching screenshots in the PR conversation if desired.

This PR/workflow documentation does **not** claim visual acceptance by automation.

## Optional quality checks

The following project checks remain available and should continue to pass:

```bash
npm run typecheck
npm run build
npm run test
npm run check:exports
```
