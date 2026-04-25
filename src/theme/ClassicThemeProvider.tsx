import { useEffect } from "react";
import type { ClassicTheme } from "./classicThemes";
import { isSkinValidForTheme } from "./classicThemes";

export type ClassicThemeProviderProps = {
  theme: ClassicTheme;
  skin?: string | null;
  assetBasePath?: string;
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

export function ClassicThemeProvider({
  theme,
  skin,
  assetBasePath = "/classic-stylesheets"
}: ClassicThemeProviderProps) {
  useEffect(() => {
    const themeLink = ensureStylesheetLink("classic-theme-link");
    const skinLink = ensureStylesheetLink("classic-skin-link");

    themeLink.href = `${assetBasePath}/themes/${theme}/theme.css`;

    const validSkin = isSkinValidForTheme(theme, skin) ? skin : null;

    if (validSkin) {
      skinLink.disabled = false;
      skinLink.href = `${assetBasePath}/themes/${theme}/skins/${validSkin}.css`;
      document.documentElement.dataset.themeSkin = validSkin;
      localStorage.setItem("condor.classic.skin", validSkin);
    } else {
      skinLink.disabled = true;
      skinLink.removeAttribute("href");
      delete document.documentElement.dataset.themeSkin;
      localStorage.removeItem("condor.classic.skin");
    }

    document.documentElement.dataset.themeProfile = theme;
    localStorage.setItem("condor.classic.theme", theme);
  }, [theme, skin, assetBasePath]);

  return null;
}