import { useEffect } from "react";
import type { ClassicSkin, ClassicTheme } from "./classicThemes";

export type ClassicThemeProviderProps = {
  theme: ClassicTheme;
  skin: ClassicSkin;
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
    skinLink.href = `${assetBasePath}/themes/${theme}/skins/${skin}.css`;

    document.documentElement.dataset.themeProfile = theme;
    document.documentElement.dataset.themeSkin = skin;

    localStorage.setItem("condor.classic.theme", theme);
    localStorage.setItem("condor.classic.skin", skin);
  }, [theme, skin, assetBasePath]);

  return null;
}