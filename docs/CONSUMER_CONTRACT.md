# CONDOR Classic UI Consumer Contract

This document defines the integration contract for downstream consumers of `@condor/classic-ui`.

> **Private-consumer note:** If Codex cannot access this repository from a downstream/private environment, snapshot/copy this contract into your own project docs and treat that copy as your local source of truth.

## Package identity

- **Package name:** `@condor/classic-ui`
- **Distribution model:** private Git dependency
- **Contract type:** runtime + API + ownership boundary for classic UI primitives and theming

## Private Git dependency

Consumers must pin an immutable ref (semantic version tag or commit SHA). Do **not** use floating branch refs such as `#main`.

```json
{
  "dependencies": {
    "@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#v0.1.1"
  }
}
```

## Runtime asset requirements

Theme and skin CSS files are not bundled into package runtime output. They are expected at runtime under a static URL prefix.

- **Default runtime asset base:** `/classic-stylesheets`
- **Theme URL pattern:** `/classic-stylesheets/themes/{theme}/theme.css`
- **Skin URL pattern:** `/classic-stylesheets/themes/{theme}/skins/{skin}.css`

## Required consumer setup

1. Install and pin `@condor/classic-ui` to an immutable version.
2. Ensure `classic-stylesheets/themes` is copied into your deployed static assets.
3. Import the package stylesheet in your application shell.
4. Wrap app content with `ClassicThemeProvider`.

```ts
// app-entry.ts
import '@condor/classic-ui/styles.css';
```

```bash
# Example build step: copy runtime themes into public assets
mkdir -p public/classic-stylesheets
cp -R node_modules/classic-stylesheets/themes public/classic-stylesheets/themes
```

## Theme provider usage

Use `ClassicThemeProvider` to load theme + skin stylesheets and apply runtime theme context.

Accepted `theme` values: `cde`, `macos9`, `win3x`, `win9x`, `winxp`.

```tsx
import { ClassicThemeProvider } from '@condor/classic-ui';

export function AppThemeShell({ theme, skin, children }) {
  return (
    <ClassicThemeProvider theme={theme} skin={skin}>
      {children}
    </ClassicThemeProvider>
  );
}
```

Use `assetBasePath` when hosting styles on a CDN or non-root path:

```tsx
import { ClassicThemeProvider } from '@condor/classic-ui';

export function AppThemeShell({ theme, skin, children }) {
  return (
    <ClassicThemeProvider
      theme={theme}
      skin={skin}
      assetBasePath="https://cdn.example.com/assets/classic-stylesheets"
    >
      {children}
    </ClassicThemeProvider>
  );
}
```


### Runtime behavior contract

- Provider-managed stylesheet link IDs are deterministic:
  - Theme: `classic-theme-link`
  - Skin: `classic-skin-link`
- `assetBasePath` is normalized by trimming trailing `/` before href construction.
- Theme href is always updated on `theme`/`assetBasePath` changes.
- Skin href is updated only when `skin` is valid for the active theme.
- If skin is invalid or absent, the skin `<link>` is disabled and removed.
- localStorage persistence is opt-in through `persistPreferences` (default: `false`).
  - `true` uses built-in keys `condor.classic.theme` and `condor.classic.skin`.
  - Object form (`{ theme?: string; skin?: string }`) allows custom keys or per-key opt-out.

## Theme/skin registry API

Consumers should rely on exported registry APIs rather than duplicating theme/skin data.

- `CLASSIC_THEMES`
- `CLASSIC_THEME_SKINS`
- `CLASSIC_DEFAULT_SKIN_BY_THEME`
- `getSkinsForTheme()`
- `getDefaultSkinForTheme()`
- `isSkinValidForTheme()`
- `ClassicTheme` (type)
- `ClassicSkin` (type)

```ts
import {
  getDefaultSkinForTheme,
  getSkinsForTheme,
  isSkinValidForTheme,
} from '@condor/classic-ui';

const theme = 'win9x';
const skins = getSkinsForTheme(theme);
const defaultSkin = getDefaultSkinForTheme(theme);
const safeSkin = isSkinValidForTheme(theme, 'standard') ? 'standard' : defaultSkin;

console.log({ theme, skins, defaultSkin, safeSkin });
```

## Exported controls

Current control exports include:

- `ClassicButton`
- `ClassicInput`
- `ClassicTextarea`
- `ClassicSelect`
- `ClassicFieldset`

```tsx
import {
  ClassicButton,
  ClassicFieldset,
  ClassicInput,
  ClassicSelect,
  ClassicTextarea,
} from '@condor/classic-ui';

export function ExampleForm() {
  return (
    <ClassicFieldset legend="Preferences">
      <ClassicInput placeholder="Name" />
      <ClassicSelect defaultValue="95">
        <option value="95">Windows 95</option>
        <option value="98">Windows 98</option>
      </ClassicSelect>
      <ClassicTextarea placeholder="Notes" />
      <ClassicButton>Save</ClassicButton>
    </ClassicFieldset>
  );
}
```

## Exported shell/layout primitives

Current shell/layout exports include:

- `ClassicWindow`
- `ClassicStatusBar`

```tsx
import { ClassicStatusBar, ClassicWindow } from '@condor/classic-ui';

export function ExampleWindow() {
  return (
    <ClassicWindow title="System Console">
      <div>Ready.</div>
      <ClassicStatusBar>Connected</ClassicStatusBar>
    </ClassicWindow>
  );
}
```

## Ownership boundary

- This package owns generic classic UI components, theming contracts, and theme/skin registry APIs.
- Product-specific workflows and domain logic stay in consuming applications.
- Consumers must not duplicate hard-coded theme/skin matrices that are already exported.
- If using `ClassicThemeProvider`, consumers must not manually inject theme/skin stylesheet URLs in parallel.

## Examples

### Minimal app integration

```tsx
import React from 'react';
import {
  ClassicButton,
  ClassicThemeProvider,
  getDefaultSkinForTheme,
} from '@condor/classic-ui';
import '@condor/classic-ui/styles.css';

export function App() {
  const theme = 'win9x';
  const skin = getDefaultSkinForTheme(theme);

  return (
    <ClassicThemeProvider theme={theme} skin={skin}>
      <ClassicButton>Launch</ClassicButton>
    </ClassicThemeProvider>
  );
}
```

### Preflight URL check (CI/CD)

```bash
#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://app.example.com}"
THEME="${2:-win9x}"
SKIN="${3:-default}"
ASSET_BASE="${4:-/classic-stylesheets}"

THEME_URL="${BASE_URL%/}${ASSET_BASE}/themes/${THEME}/theme.css"
SKIN_URL="${BASE_URL%/}${ASSET_BASE}/themes/${THEME}/skins/${SKIN}.css"

for url in "$THEME_URL" "$SKIN_URL"; do
  code="$(curl -sS -o /dev/null -w '%{http_code}' "$url")"
  if [ "$code" -lt 200 ] || [ "$code" -ge 400 ]; then
    echo "ERROR: $url returned HTTP $code"
    exit 1
  fi
  echo "OK: $url ($code)"
done
```

## Known limitations

- Runtime theme/skin CSS assets are external and must be deployed by consumers.
- Incorrect or missing static asset publishing causes runtime theming failures.
- Asset hosting paths must remain consistent with provider URL construction (or use `assetBasePath`).
- This contract assumes consumers can resolve private Git dependencies in build environments.

## CAD integration notes

Use this exact dependency in `condor-cad/package.json`:

```json
{
  "dependencies": {
    "@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#v0.1.1"
  }
}
```

- Maintain a local copy of this contract in CAD docs.
- Recommended target path: `condor-cad/docs/CONDOR_CLASSIC_UI_CONTRACT.md`.
- Update the CAD-side snapshot whenever this contract changes.
- Keep `@condor/classic-ui` pinned to an immutable Git tag/SHA in CAD `package.json`.
