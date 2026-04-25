import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import {
  CLASSIC_SKIN_LINK_ID,
  CLASSIC_THEME_LINK_ID,
  ClassicThemeProvider
} from "../src/theme/ClassicThemeProvider";
import {
  CLASSIC_THEMES,
  CLASSIC_THEME_SKINS,
  getDefaultSkinForTheme,
  isSkinValidForTheme,
  type ClassicTheme
} from "../src/theme/classicThemes";



beforeEach(() => {
  delete document.documentElement.dataset.themeProfile;
  delete document.documentElement.dataset.themeSkin;

  document.getElementById(CLASSIC_THEME_LINK_ID)?.remove();
  document.getElementById(CLASSIC_SKIN_LINK_ID)?.remove();
});
describe("ClassicThemeProvider", () => {
  it("sets data-theme-profile", () => {
    render(<ClassicThemeProvider theme="win9x" />);

    expect(document.documentElement).toHaveAttribute("data-theme-profile", "win9x");
  });

  it("sets data-theme-skin when skin is valid", () => {
    render(<ClassicThemeProvider theme="winxp" skin="silver" />);

    expect(document.documentElement).toHaveAttribute("data-theme-skin", "silver");
  });

  it("rejects invalid skin and clears skin state", () => {
    const { rerender } = render(<ClassicThemeProvider theme="winxp" skin="silver" />);
    expect(document.documentElement).toHaveAttribute("data-theme-skin", "silver");

    rerender(<ClassicThemeProvider theme="winxp" skin="not-a-valid-skin" />);

    expect(document.documentElement).not.toHaveAttribute("data-theme-skin");
  });
});

describe("classic theme skin metadata", () => {
  it("getDefaultSkinForTheme returns a valid skin for every theme", () => {
    for (const theme of CLASSIC_THEMES) {
      const defaultSkin = getDefaultSkinForTheme(theme);

      expect(defaultSkin).toBeTruthy();
      expect(isSkinValidForTheme(theme, defaultSkin)).toBe(true);
    }
  });

  it("every theme in CLASSIC_THEMES has skins and a valid default", () => {
    for (const theme of CLASSIC_THEMES) {
      const skins = CLASSIC_THEME_SKINS[theme as ClassicTheme];
      const defaultSkin = getDefaultSkinForTheme(theme);

      expect(Array.isArray(skins)).toBe(true);
      expect(skins.length).toBeGreaterThan(0);
      expect(skins).toContain(defaultSkin);
    }
  });
});
