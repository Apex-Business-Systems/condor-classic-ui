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
function u(e) {
	let t = document.getElementById(e);
	return t || (t = document.createElement("link"), t.id = e, t.rel = "stylesheet", document.head.appendChild(t)), t;
}
function d({ theme: e, skin: n, assetBasePath: r = "/classic-stylesheets" }) {
	return t(() => {
		let t = u("classic-theme-link"), i = u("classic-skin-link");
		t.href = `${r}/themes/${e}/theme.css`;
		let a = l(e, n) ? n : null;
		a ? (i.disabled = !1, i.href = `${r}/themes/${e}/skins/${a}.css`, document.documentElement.dataset.themeSkin = a, localStorage.setItem("condor.classic.skin", a)) : (i.disabled = !0, i.removeAttribute("href"), delete document.documentElement.dataset.themeSkin, localStorage.removeItem("condor.classic.skin")), document.documentElement.dataset.themeProfile = e, localStorage.setItem("condor.classic.theme", e);
	}, [
		e,
		n,
		r
	]), null;
}
//#endregion
//#region src/utils/joinClassNames.ts
function f(...e) {
	return e.filter(Boolean).join(" ");
}
//#endregion
//#region src/controls/ClassicButton.tsx
var p = e(({ children: e, className: t, type: r = "button", ...i }, a) => /* @__PURE__ */ n("button", {
	ref: a,
	type: r,
	className: f("btn", t),
	...i,
	children: e
}));
p.displayName = "ClassicButton";
//#endregion
//#region src/controls/ClassicInput.tsx
var m = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("input", {
	ref: r,
	className: f("input", e),
	...t
}));
m.displayName = "ClassicInput";
//#endregion
//#region src/controls/ClassicTextarea.tsx
var h = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("textarea", {
	ref: r,
	className: f("textarea", e),
	...t
}));
h.displayName = "ClassicTextarea";
//#endregion
//#region src/controls/ClassicSelect.tsx
var g = e(({ children: e, className: t, size: i = 1, wrapperClassName: a, ...o }, s) => /* @__PURE__ */ r("div", {
	className: f("dropdown", a),
	children: [/* @__PURE__ */ n("select", {
		ref: s,
		size: i,
		className: f("dropdown-select", t),
		...o,
		children: e
	}), /* @__PURE__ */ n("span", {
		className: "dropdown-button",
		"aria-hidden": "true"
	})]
}));
g.displayName = "ClassicSelect";
//#endregion
//#region src/controls/ClassicFieldset.tsx
function _({ legend: e, children: t, className: i, ...a }) {
	return /* @__PURE__ */ r("fieldset", {
		className: f("classic-fieldset", i),
		...a,
		children: [e ? /* @__PURE__ */ n("legend", { children: e }) : null, t]
	});
}
//#endregion
//#region src/shell/ClassicWindow.tsx
function v({ title: e, active: t = !0, children: i }) {
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
function y({ children: e }) {
	return /* @__PURE__ */ n("div", {
		className: "status-bar",
		children: e
	});
}
//#endregion
export { o as CLASSIC_DEFAULT_SKIN_BY_THEME, i as CLASSIC_THEMES, a as CLASSIC_THEME_SKINS, p as ClassicButton, _ as ClassicFieldset, m as ClassicInput, g as ClassicSelect, y as ClassicStatusBar, h as ClassicTextarea, d as ClassicThemeProvider, v as ClassicWindow, c as getDefaultSkinForTheme, s as getSkinsForTheme, l as isSkinValidForTheme };
