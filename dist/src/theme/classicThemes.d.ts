export declare const CLASSIC_THEMES: readonly ["win9x", "win3x", "winxp", "cde", "macos9", "dos"];
export type ClassicTheme = typeof CLASSIC_THEMES[number];
export declare const CLASSIC_THEME_SKINS: {
    readonly win9x: readonly ["95", "98", "2000", "brick", "desert", "eggplant", "lilac", "maple", "marine", "plum", "pumpkin", "rainy-day", "red-white-and-blue", "rose", "slate", "spruce", "storm", "teal", "wheat", "brick-2000", "desert-2000", "eggplant-2000", "lilac-2000", "maple-2000", "marine-2000", "plum-2000", "pumpkin-2000", "rainy-day-2000", "red-white-and-blue-2000", "rose-2000", "slate-2000", "spruce-2000", "storm-2000", "teal-2000", "wheat-2000"];
    readonly win3x: readonly [];
    readonly winxp: readonly [];
    readonly cde: readonly [];
    readonly macos9: readonly [];
    readonly dos: readonly [];
};
export type ClassicSkin = (typeof CLASSIC_THEME_SKINS)[keyof typeof CLASSIC_THEME_SKINS][number];
export declare function getSkinsForTheme(theme: ClassicTheme): readonly string[];
export declare function getDefaultSkinForTheme(theme: ClassicTheme): string | null;
export declare function isSkinValidForTheme(theme: ClassicTheme, skin: string | null | undefined): boolean;
//# sourceMappingURL=classicThemes.d.ts.map