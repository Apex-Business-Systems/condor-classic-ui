# CONDOR Classic UI Consumer Contract

Package: `@condor/classic-ui`

Private Git dependency:

```json
"@condor/classic-ui": "git+ssh://git@github.com/Apex-Business-Systems/condor-classic-ui.git#main"

Runtime stylesheet asset base:

/classic-stylesheets

Required app integration:

import '@condor/classic-ui/styles.css';

Theme provider:

import { ClassicThemeProvider } from '@condor/classic-ui';

<ClassicThemeProvider theme={activeTheme} skin={activeSkin} />

Theme URLs loaded by provider:

/classic-stylesheets/themes/{theme}/theme.css
/classic-stylesheets/themes/{theme}/skins/{skin}.css

Exported theme API:

CLASSIC_THEMES
CLASSIC_THEME_SKINS
CLASSIC_DEFAULT_SKIN_BY_THEME
getSkinsForTheme()
getDefaultSkinForTheme()
isSkinValidForTheme()
ClassicTheme
ClassicSkin

Exported control/shell API:

ClassicButton
ClassicInput
ClassicTextarea
ClassicSelect
ClassicFieldset
ClassicWindow
ClassicStatusBar

Ownership rules:

Generic classic UI primitives live here.
Product-specific workflows stay in consuming apps.
Consumers must not duplicate theme/skin lists.
Consumers must not manually inject theme/skin stylesheets if using ClassicThemeProvider.

Then copy a snapshot of this into `condor-cad` as:

```text
condor-cad/docs/CONDOR_CLASSIC_UI_CONTRACT.md