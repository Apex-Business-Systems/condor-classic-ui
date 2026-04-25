# CONDOR Classic UI Consumer Contract

Package: `@condor/classic-ui`

Private Git dependency (immutable tag):

```json
"@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#v0.1.1"
```

Consumer `package.json` must reference a specific immutable version (semantic tag or commit SHA), never a floating branch ref like `#main`.

Runtime stylesheet asset base:

`/classic-stylesheets`

Required app integration:

```ts
import '@condor/classic-ui/styles.css';
```

Theme provider:

```tsx
import { ClassicThemeProvider } from '@condor/classic-ui';

<ClassicThemeProvider theme={activeTheme} skin={activeSkin} />
```

Theme URLs loaded by provider:

- `/classic-stylesheets/themes/{theme}/theme.css`
- `/classic-stylesheets/themes/{theme}/skins/{skin}.css`

## Hosting classic-stylesheets

Theme and skin CSS files are **not** bundled into this package output. They originate from the consumer app's `classic-stylesheets` dependency (currently `^2.1.3` in this repo).

### Source of truth

- Dependency: `classic-stylesheets`
- Source directory in consumer installs: `node_modules/classic-stylesheets/themes`
- Runtime URL contract expected by `ClassicThemeProvider`: `/classic-stylesheets/themes/...`

### Consumer pipeline requirements (build/deploy)

Every consuming app must copy the `themes` directory from `node_modules/classic-stylesheets` into its own static hosting output under `classic-stylesheets/themes`.

Examples by stack:

- **Vite**: copy into `public/classic-stylesheets/themes` before build (or via static copy plugin).
- **Next.js**: copy into `public/classic-stylesheets/themes` during `postinstall`, `build`, or Docker image build.
- **Webpack/custom static host**: copy into final static assets root at `classic-stylesheets/themes`.
- **CDN deploy**: publish the folder so URLs resolve at `<asset-origin>/classic-stylesheets/themes/...`.

### Cache headers and path conventions

- Path prefix should remain stable and lowercase: `/classic-stylesheets/themes/...`.
- Keep paths deterministic; avoid adding hash segments to directory names expected by runtime URL construction.
- Recommended cache headers:
  - `Cache-Control: public, max-age=31536000, immutable` for versioned deployments where file contents are pinned by app version.
  - `Cache-Control: public, max-age=300` (or equivalent short TTL) if mutable assets can change without deploy version bump.
- Ensure the same prefix is used in all environments (local, staging, production), or set `assetBasePath` explicitly.

## Non-default assetBasePath integration example

Use `assetBasePath` when stylesheets are hosted on a CDN or under a non-root path.

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

With the config above, runtime requests resolve to:

- `https://cdn.example.com/assets/classic-stylesheets/themes/{theme}/theme.css`
- `https://cdn.example.com/assets/classic-stylesheets/themes/{theme}/skins/{skin}.css`

## Consumer preflight validation (before runtime)

Run a preflight check in CI/CD to validate your deployed static files are reachable before users load the app.

### Option A: shell script preflight

```bash
#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://localhost:3000}"
THEME="${2:-win9x}"
SKIN="${3:-default}"
ASSET_BASE="${4:-/classic-stylesheets}"

THEME_URL="${BASE_URL%/}${ASSET_BASE}/themes/${THEME}/theme.css"
SKIN_URL="${BASE_URL%/}${ASSET_BASE}/themes/${THEME}/skins/${SKIN}.css"

for url in "$THEME_URL" "$SKIN_URL"; do
  echo "Checking $url"
  code="$(curl -sS -o /dev/null -w '%{http_code}' "$url")"
  if [ "$code" -lt 200 ] || [ "$code" -ge 400 ]; then
    echo "ERROR: $url returned HTTP $code"
    exit 1
  fi
done

echo "classic-stylesheets preflight passed"
```

Example usage:

```bash
./check-classic-stylesheets.sh https://app.example.com win9x standard https://cdn.example.com/assets/classic-stylesheets
```

### Option B: checklist (if scripts are restricted)

- Verify deployed path exists: `/classic-stylesheets/themes/<theme>/theme.css`.
- Verify deployed path exists: `/classic-stylesheets/themes/<theme>/skins/<skin>.css`.
- Verify both URLs return HTTP 2xx or 304.
- Verify `Cache-Control` header matches your policy.
- Verify `assetBasePath` matches the host/path where the files are published.

Exported theme API:

- CLASSIC_THEMES
- CLASSIC_THEME_SKINS
- CLASSIC_DEFAULT_SKIN_BY_THEME
- getSkinsForTheme()
- getDefaultSkinForTheme()
- isSkinValidForTheme()
- ClassicTheme
- ClassicSkin

Exported control/shell API:

- ClassicButton
- ClassicInput
- ClassicTextarea
- ClassicSelect
- ClassicFieldset
- ClassicWindow
- ClassicStatusBar

Ownership rules:

- Generic classic UI primitives live here.
- Product-specific workflows stay in consuming apps.
- Consumers must not duplicate theme/skin lists.
- Consumers must not manually inject theme/skin stylesheets if using `ClassicThemeProvider`.

Release/versioning requirements:

- Releases are cut with semantic version tags (for example: `v0.1.1`, `v0.2.0`, `v1.0.0`).
- Consumers must install using a specific tag (or commit SHA if a tag is unavailable).
- Every release must include a `CHANGELOG.md` entry documenting API/contract changes.
- Detailed release procedure lives in `docs/RELEASE_PROCESS.md`.

Then copy a snapshot of this into `condor-cad` as:

```text
condor-cad/docs/CONDOR_CLASSIC_UI_CONTRACT.md
```
