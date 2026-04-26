import type { ClassicTheme } from "./classicThemes";
/**
 * Deterministic `<link>` id used for the active classic theme stylesheet.
 * Consumers may target this element for diagnostics.
 */
export declare const CLASSIC_THEME_LINK_ID = "classic-theme-link";
/**
 * Deterministic `<link>` id used for the active classic skin stylesheet.
 * This link is created only when a valid skin is active.
 */
export declare const CLASSIC_SKIN_LINK_ID = "classic-skin-link";
export declare const CLASSIC_THEME_STORAGE_KEY = "condor.classic.theme";
export declare const CLASSIC_SKIN_STORAGE_KEY = "condor.classic.skin";
export type ClassicThemePreferenceStorageKeys = {
    theme?: string;
    skin?: string;
};
export type ClassicThemeProviderProps = {
    theme: ClassicTheme;
    skin?: string | null;
    assetBasePath?: string;
    /**
     * Controls localStorage persistence for selected theme/skin.
     *
     * - `false` (default): do not write/remove any localStorage keys.
     * - `true`: persist to built-in keys (`condor.classic.theme`, `condor.classic.skin`).
     * - object: persist using custom keys (omit a key to disable that write).
     */
    persistPreferences?: boolean | ClassicThemePreferenceStorageKeys;
};
export declare function ClassicThemeProvider({ theme, skin, assetBasePath, persistPreferences }: ClassicThemeProviderProps): null;
//# sourceMappingURL=ClassicThemeProvider.d.ts.map