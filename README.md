# @condor/classic-ui

## Development environment

This project is tested/supported with:

- **Node.js:** `22.13.0` (see `.nvmrc`)
- **npm:** `10.x` (the npm release line bundled with Node.js 22)

If you're using `nvm`:

```bash
nvm use
npm install
```
# Condor Classic UI

`@condor/classic-ui` is the shared classic UI package for Condor applications.

## Prerequisites

- **Node.js:** `20.x` (LTS recommended)
- **npm:** `10.x` or newer

> This repository uses `package-lock.json` and CI runs with Node 20 + npm cache via `npm ci`.

## Install, Typecheck, and Build

```bash
npm ci
npm run typecheck
npm run build
```

## Consumer Integration

Consumers should use the package stylesheet export and theme provider together.

### 1) Include stylesheet

```ts
import '@condor/classic-ui/styles.css';
```

### 2) Wrap app with `ClassicThemeProvider`

```tsx
import { ClassicThemeProvider } from '@condor/classic-ui';

<ClassicThemeProvider theme={activeTheme} skin={activeSkin}>
  <App />
</ClassicThemeProvider>
```

`ClassicThemeProvider` is responsible for loading theme assets from:

- `/classic-stylesheets/themes/{theme}/theme.css`
- `/classic-stylesheets/themes/{theme}/skins/{skin}.css`

It uses deterministic link IDs:

- Theme link: `classic-theme-link`
- Skin link: `classic-skin-link`

`assetBasePath` is normalized (trailing slash removed) before URLs are assembled.

The skin link is only present for valid skins. When skin is absent/invalid, the skin link is disabled and removed.

Persistence is opt-in via `persistPreferences` (defaults to `false`):

- `false`: no localStorage writes
- `true`: writes `condor.classic.theme` and `condor.classic.skin`
- `{ theme?: string, skin?: string }`: custom localStorage keys per preference

Do not manually inject theme/skin stylesheets when using `ClassicThemeProvider`.

## SSH Git Dependency Prerequisites

Downstream repositories install this package via private Git SSH URLs, for example:

```json
"@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#v0.1.1"
```

Before running `npm ci` in downstream repos, ensure your CI/runtime has one of the following:

- **Deploy key approach:**
  - Add a read-only deploy key to `Apex-Business-Systems/condor-classic-ui`.
  - Register the matching private key in the consumer repo CI secrets.
  - Configure `ssh-agent` in CI before `npm ci`.
- **Machine user approach:**
  - Create a machine GitHub user with least-privilege read access to the dependency repo.
  - Store the user SSH private key in CI secrets.
  - Configure `known_hosts` (GitHub host key) and `ssh-agent` in CI.

Also ensure consumers pin an immutable tag or commit SHA (never a floating branch ref).
