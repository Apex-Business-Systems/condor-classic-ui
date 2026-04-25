import { useEffect } from "react";
import type { ClassicTheme } from "./classicThemes";
import { isSkinValidForTheme } from "./classicThemes";

/**
 * Deterministic `<link>` id used for the active classic theme stylesheet.
 * Consumers may target this element for diagnostics.
 */
export const CLASSIC_THEME_LINK_ID = "classic-theme-link";

/**
 * Deterministic `<link>` id used for the active classic skin stylesheet.
 * This link is created only when a valid skin is active.
 */
export const CLASSIC_SKIN_LINK_ID = "classic-skin-link";

export const CLASSIC_THEME_STORAGE_KEY = "condor.classic.theme";
export const CLASSIC_SKIN_STORAGE_KEY = "condor.classic.skin";

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

function ensureStylesheetLink(id: string): HTMLLinkElement {
  let link = document.getElementById(id) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  return link;
}

function getStylesheetLink(id: string): HTMLLinkElement | null {
  return document.getElementById(id) as HTMLLinkElement | null;
}

function normalizeAssetBasePath(assetBasePath: string): string {
  return assetBasePath.replace(/\/+$/, "");
}

function buildThemeHref(assetBasePath: string, theme: ClassicTheme): string {
  const normalizedBasePath = normalizeAssetBasePath(assetBasePath);
  return `${normalizedBasePath}/themes/${theme}/theme.css`;
}

function buildSkinHref(assetBasePath: string, theme: ClassicTheme, skin: string): string {
  const normalizedBasePath = normalizeAssetBasePath(assetBasePath);
  return `${normalizedBasePath}/themes/${theme}/skins/${skin}.css`;
}

function resolvePreferenceStorageKeys(
  persistPreferences: ClassicThemeProviderProps["persistPreferences"]
): ClassicThemePreferenceStorageKeys | null {
  if (!persistPreferences) {
    return null;
  }

  if (persistPreferences === true) {
    return {
      theme: CLASSIC_THEME_STORAGE_KEY,
      skin: CLASSIC_SKIN_STORAGE_KEY
    };
  }

  return persistPreferences;
}

export function ClassicThemeProvider({
  theme,
  skin,
  assetBasePath = "/classic-stylesheets",
  persistPreferences = false
}: ClassicThemeProviderProps) {
  useEffect(() => {
    const preferenceStorageKeys = resolvePreferenceStorageKeys(persistPreferences);
    const themeLink = ensureStylesheetLink(CLASSIC_THEME_LINK_ID);
    const validSkin = isSkinValidForTheme(theme, skin) ? skin : null;

    themeLink.disabled = false;
    themeLink.href = buildThemeHref(assetBasePath, theme);

    if (validSkin) {
      const skinLink = ensureStylesheetLink(CLASSIC_SKIN_LINK_ID);
      skinLink.disabled = false;
      skinLink.href = buildSkinHref(assetBasePath, theme, validSkin);
      document.documentElement.dataset.themeSkin = validSkin;

      if (preferenceStorageKeys?.skin) {
        localStorage.setItem(preferenceStorageKeys.skin, validSkin);
      }
    } else {
      const skinLink = getStylesheetLink(CLASSIC_SKIN_LINK_ID);
      if (skinLink) {
        skinLink.disabled = true;
        skinLink.removeAttribute("href");
        skinLink.remove();
      }

      delete document.documentElement.dataset.themeSkin;

      if (preferenceStorageKeys?.skin) {
        localStorage.removeItem(preferenceStorageKeys.skin);
      }
    }

    document.documentElement.dataset.themeProfile = theme;

    if (preferenceStorageKeys?.theme) {
      localStorage.setItem(preferenceStorageKeys.theme, theme);
    }
  }, [theme, skin, assetBasePath, persistPreferences]);

  return null;
}
