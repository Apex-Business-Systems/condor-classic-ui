export const CLASSIC_THEMES = [
  "win9x",
  "win3x",
  "winxp",
  "cde",
  "macos9",
  "dos"
] as const;

export type ClassicTheme = typeof CLASSIC_THEMES[number];

export const CLASSIC_THEME_SKINS = {
  win9x: [
    "95",
    "98",
    "2000",
    "brick",
    "desert",
    "eggplant",
    "lilac",
    "maple",
    "marine",
    "plum",
    "pumpkin",
    "rainy-day",
    "red-white-and-blue",
    "rose",
    "slate",
    "spruce",
    "storm",
    "teal",
    "wheat",
    "brick-2000",
    "desert-2000",
    "eggplant-2000",
    "lilac-2000",
    "maple-2000",
    "marine-2000",
    "plum-2000",
    "pumpkin-2000",
    "rainy-day-2000",
    "red-white-and-blue-2000",
    "rose-2000",
    "slate-2000",
    "spruce-2000",
    "storm-2000",
    "teal-2000",
    "wheat-2000"
  ],

  win3x: [],
  winxp: [],
  cde: [],
  macos9: [],
  dos: []
} as const satisfies Record<ClassicTheme, readonly string[]>;

export type ClassicSkin =
  (typeof CLASSIC_THEME_SKINS)[keyof typeof CLASSIC_THEME_SKINS][number];

export function getSkinsForTheme(theme: ClassicTheme): readonly string[] {
  return CLASSIC_THEME_SKINS[theme];
}

export function getDefaultSkinForTheme(theme: ClassicTheme): string | null {
  return CLASSIC_THEME_SKINS[theme][0] ?? null;
}

export function isSkinValidForTheme(theme: ClassicTheme, skin: string | null | undefined): boolean {
  if (!skin) {
    return false;
  }

  const skins: readonly string[] = CLASSIC_THEME_SKINS[theme];
  return skins.includes(skin);
}