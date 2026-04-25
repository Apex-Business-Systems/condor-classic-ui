import { forwardRef as e, useEffect as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/theme/classicThemes.ts
var i = [
	"cde",
	"macos9",
	"win3x",
	"win9x",
	"winxp"
], a = {
	cde: /* @__PURE__ */ "alpine-2.alpine-4.alpine-8.arizona-2.arizona-4.arizona-8.beige-rose-2.beige-rose-4.beige-rose-8.black-white.black.broica-2.broica-4.broica-8.cabernet-2.cabernet-4.cabernet-8.camouflage-2.camouflage-4.camouflage-8.charcoal-2.charcoal-4.charcoal-8.chocolate-2.chocolate-4.chocolate-8.cinnamon-2.cinnamon-4.cinnamon-8.clay-2.clay-4.clay-8.crimson-2.crimson-4.crimson-8.crimson.dark-gold-2.dark-gold-4.dark-gold-8.default-2.default-4.default-8.default.delphinium-2.delphinium-4.delphinium-8.desert-2.desert-4.desert-8.golden-2.golden-4.golden-8.grass-2.grass-4.grass-8.gray-scale-2.gray-scale-4.gray-scale-8.lilac-2.lilac-4.lilac-8.mustard-2.mustard-4.mustard-8.neptune-2.neptune-4.neptune-8.northern-sky-2.northern-sky-4.northern-sky-8.nutmeg-2.nutmeg-4.nutmeg-8.olive-2.olive-4.olive-8.orchid-2.orchid-4.orchid-8.pbnj-2.pbnj-4.pbnj-8.sand-2.sand-4.sand-8.santa-fe-2.santa-fe-4.santa-fe-8.savannah-2.savannah-4.savannah-8.sea-foam-2.sea-foam-4.sea-foam-8.sky-red-2.sky-red-4.sky-red-8.soft-blue-2.soft-blue-4.soft-blue-8.south-west-2.south-west-4.south-west-8.summer-2.summer-4.summer-8.tundra-2.tundra-4.tundra-8.urchin-2.urchin-4.urchin-8.wheat-2.wheat-4.wheat-8.white-black.white".split("."),
	macos9: [
		"blueberry-oxygen",
		"blueberry-union",
		"bubbles",
		"convergence",
		"default",
		"golden-poppy",
		"grape-gravity",
		"grape-mission",
		"gray-space",
		"lime-horizon",
		"lime-sharp",
		"lollipop-2",
		"lollipop-3",
		"lollipop-4",
		"lollipop-5",
		"lollipop",
		"mono-blue",
		"quantum-foam",
		"rio-azul",
		"roswell",
		"strawberry-baby",
		"strawberry-parabola",
		"sunny",
		"tangerine-fusion",
		"tangerine-melt"
	],
	win3x: [
		"3.0",
		"3.1",
		"arizona",
		"black-leather-jacket",
		"bordeaux",
		"cinnamon",
		"designer",
		"emerald-city",
		"fluorescent",
		"high-color",
		"hotdog-stand",
		"lcd-reversed-dark",
		"lcd-reversed-light",
		"lcd",
		"mahogany",
		"monochrome",
		"ocean",
		"pastel",
		"patchwork",
		"plasma-power-saver",
		"rugby",
		"the-blues",
		"tweed",
		"valentine",
		"wingtips"
	],
	win9x: /* @__PURE__ */ "2000.95.98.brick-2000.brick.desert-2000.desert.eggplant-2000.eggplant.lilac-2000.lilac.maple-2000.maple.marine-2000.marine.plum-2000.plum.pumpkin-2000.pumpkin.rainy-day-2000.rainy-day.red-white-and-blue-2000.red-white-and-blue.rose-2000.rose.slate-2000.slate.spruce-2000.spruce.storm-2000.storm.teal-2000.teal.wheat-2000.wheat".split("."),
	winxp: [
		"default",
		"olive-green",
		"silver"
	]
}, o = {
	cde: "default",
	macos9: "default",
	win3x: "3.1",
	win9x: "95",
	winxp: "default"
};
function s(e) {
	return a[e];
}
function c(e) {
	return o[e];
}
function l(e, t) {
	return t ? a[e].includes(t) : !1;
}
//#endregion
//#region src/theme/ClassicThemeProvider.tsx
var u = "classic-theme-link", d = "classic-skin-link", f = "condor.classic.theme", p = "condor.classic.skin";
function m(e) {
	let t = document.getElementById(e);
	return t || (t = document.createElement("link"), t.id = e, t.rel = "stylesheet", document.head.appendChild(t)), t;
}
function h(e) {
	return document.getElementById(e);
}
function g(e) {
	return e.replace(/\/+$/, "");
}
function _(e, t) {
	return `${g(e)}/themes/${t}/theme.css`;
}
function v(e, t, n) {
	return `${g(e)}/themes/${t}/skins/${n}.css`;
}
function y(e) {
	return e ? e === !0 ? {
		theme: f,
		skin: p
	} : e : null;
}
function b({ theme: e, skin: n, assetBasePath: r = "/classic-stylesheets", persistPreferences: i = !1 }) {
	return t(() => {
		let t = y(i), a = m(u), o = l(e, n) ? n : null;
		if (a.disabled = !1, a.href = _(r, e), o) {
			let n = m(d);
			n.disabled = !1, n.href = v(r, e, o), document.documentElement.dataset.themeSkin = o, t?.skin && localStorage.setItem(t.skin, o);
		} else {
			let e = h(d);
			e && (e.disabled = !0, e.removeAttribute("href"), e.remove()), delete document.documentElement.dataset.themeSkin, t?.skin && localStorage.removeItem(t.skin);
		}
		document.documentElement.dataset.themeProfile = e, t?.theme && localStorage.setItem(t.theme, e);
	}, [
		e,
		n,
		r,
		i
	]), null;
}
//#endregion
//#region src/utils/joinClassNames.ts
function x(...e) {
	return e.filter(Boolean).join(" ");
}
//#endregion
//#region src/controls/ClassicButton.tsx
var S = e(({ children: e, className: t, type: r = "button", ...i }, a) => /* @__PURE__ */ n("button", {
	ref: a,
	type: r,
	className: x("btn", t),
	...i,
	children: e
}));
S.displayName = "ClassicButton";
//#endregion
//#region src/controls/ClassicInput.tsx
var C = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("input", {
	ref: r,
	className: x("input", e),
	...t
}));
C.displayName = "ClassicInput";
//#endregion
//#region src/controls/ClassicTextarea.tsx
var w = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("textarea", {
	ref: r,
	className: x("textarea", e),
	...t
}));
w.displayName = "ClassicTextarea";
//#endregion
//#region src/controls/ClassicSelect.tsx
var T = e(({ children: e, className: t, size: i = 1, wrapperClassName: a, ...o }, s) => /* @__PURE__ */ r("div", {
	className: x("dropdown", a),
	children: [/* @__PURE__ */ n("select", {
		ref: s,
		size: i,
		className: x("dropdown-select", t),
		...o,
		children: e
	}), /* @__PURE__ */ n("span", {
		className: "dropdown-button",
		"aria-hidden": "true"
	})]
}));
T.displayName = "ClassicSelect";
//#endregion
//#region src/controls/ClassicFieldset.tsx
function E({ legend: e, children: t, className: i, ...a }) {
	return /* @__PURE__ */ r("fieldset", {
		className: x("classic-fieldset", i),
		...a,
		children: [e ? /* @__PURE__ */ n("legend", { children: e }) : null, t]
	});
}
//#endregion
//#region src/shell/ClassicWindow.tsx
function D({ title: e, active: t = !0, children: i }) {
	return /* @__PURE__ */ r("div", {
		className: t ? "window active" : "window",
		children: [/* @__PURE__ */ n("div", {
			className: "title-bar",
			children: /* @__PURE__ */ n("div", {
				className: "title-bar-text",
				children: e
			})
		}), /* @__PURE__ */ n("div", {
			className: "window-body",
			children: /* @__PURE__ */ n("div", {
				className: "condor-window-content",
				children: i
			})
		})]
	});
}
//#endregion
//#region src/shell/ClassicStatusBar.tsx
function O({ children: e }) {
	return /* @__PURE__ */ n("div", {
		className: "status-bar",
		children: e
	});
}
//#endregion
export { o as CLASSIC_DEFAULT_SKIN_BY_THEME, d as CLASSIC_SKIN_LINK_ID, p as CLASSIC_SKIN_STORAGE_KEY, i as CLASSIC_THEMES, u as CLASSIC_THEME_LINK_ID, a as CLASSIC_THEME_SKINS, f as CLASSIC_THEME_STORAGE_KEY, S as ClassicButton, E as ClassicFieldset, C as ClassicInput, T as ClassicSelect, O as ClassicStatusBar, w as ClassicTextarea, b as ClassicThemeProvider, D as ClassicWindow, c as getDefaultSkinForTheme, s as getSkinsForTheme, l as isSkinValidForTheme };
