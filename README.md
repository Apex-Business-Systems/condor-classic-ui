# Warning for Humans
Unless you've been instructed to specifically use `@condor/classic-ui`, turn back now. Seriously. This should be a private repo but I am too lazy to do some automation tasks with Github deploy keys so... here it is... Good luck... Stay away...

If you want to use this, use https://nielssp.github.io/classic-stylesheets.

# License

This repository is public for deployment convenience only.

This is not open-source software. No license is granted for public use, redistribution, modification, hosting, deployment, or incorporation into other projects. See `/LICENSE`.

Issues, pull requests, forks, and third-party use are not solicited.


# @condor/classic-ui

`@condor/classic-ui` is a **private shared framework** used by Condor applications to provide reusable “classic UI” primitives and styling infrastructure.

## Purpose and Scope

This package owns generic, reusable UI building blocks and cross-app theming mechanics (for example: providers, shared controls, and style contracts).

- ✅ Keep **generic primitives** in this repository.
- 🚫 Keep **app-specific workflows/business flows** in consuming applications.

## Install from Private Git (SSH)

Consumers install this package from the private repository via SSH URL and a pinned tag (or commit SHA):

```json
{
  "dependencies": {
    "@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#v0.1.1"
  }
}
```

> Use immutable refs (`#vX.Y.Z` or a commit SHA), not floating branches.

## App-Server SSH Access Requirement

Because installation uses a private Git SSH dependency, any environment that runs `npm install`/`npm ci` (developer machine, CI runner, app server image/build job) must have:

- SSH key material with read access to `Apex-Business-Systems/condor-classic-ui`
- `ssh-agent` configured (or equivalent key loading)
- GitHub host key trust configured in `known_hosts`

Without SSH access, dependency installation will fail.

## Required Consumer Integration

### 1) Import required CSS

```ts
import '@condor/classic-ui/styles.css';
```

### 2) Serve theme assets from required path

Classic theme/skin assets must be served at:

- `/classic-stylesheets/...`

Example concrete paths:

- `/classic-stylesheets/themes/{theme}/theme.css`
- `/classic-stylesheets/themes/{theme}/skins/{skin}.css`

### 3) Minimal React integration (`ClassicThemeProvider`)

`theme` must be one of: `cde`, `macos9`, `win3x`, `win9x`, `winxp`.

```tsx
import React from 'react';
import { ClassicThemeProvider } from '@condor/classic-ui';
import '@condor/classic-ui/styles.css';

export function Root() {
  return (
    <ClassicThemeProvider theme="win9x" skin="95">
      <App />
    </ClassicThemeProvider>
  );
}
```

## Example Controls Usage

```tsx
import React from 'react';
import { ClassicButton, ClassicInput } from '@condor/classic-ui';

export function ExampleControls() {
  return (
    <div>
      <ClassicInput name="account" placeholder="Account" />
      <ClassicButton>Continue</ClassicButton>
    </div>
  );
}
```

> Names above represent typical control consumption; use the exports defined by the current package version in `src/index.ts`.

## Ownership Boundary

To keep this package stable and reusable:

- Put **design-system primitives** and **theme infrastructure** here.
- Keep **feature orchestration**, **domain logic**, and **screen-level workflows** in consuming repos.

## Release and Tagging Guidance

1. Ensure local checks pass (for example: typecheck/build/tests as applicable).
2. Update changelog and version metadata as needed.
3. Create a release commit.
4. Tag the release (`vX.Y.Z`) and push tag.
5. Consumers pin that tag in `package.json`.

### `v0.1.1` process

Once checks pass for the first consumable release:

```bash
git tag v0.1.1
git push origin v0.1.1
```

Then consumers can reference:

```json
"@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#v0.1.1"
```


## CAD integration notes

Use this exact dependency in `condor-cad/package.json`:

```json
{
  "dependencies": {
    "@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#v0.1.1"
  }
}
```
