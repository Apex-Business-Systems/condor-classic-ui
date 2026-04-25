import { useEffect as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/theme/classicThemes.ts
var r = [
	"win9x",
	"win3x",
	"winxp",
	"cde",
	"macos9",
	"dos"
], i = {
	win9x: /* @__PURE__ */ "95.98.2000.brick.desert.eggplant.lilac.maple.marine.plum.pumpkin.rainy-day.red-white-and-blue.rose.slate.spruce.storm.teal.wheat.brick-2000.desert-2000.eggplant-2000.lilac-2000.maple-2000.marine-2000.plum-2000.pumpkin-2000.rainy-day-2000.red-white-and-blue-2000.rose-2000.slate-2000.spruce-2000.storm-2000.teal-2000.wheat-2000".split("."),
	win3x: ["default"],
	winxp: ["default"],
	cde: ["default"],
	macos9: ["default"],
	dos: ["default"]
};
function a(e) {
	return i[e];
}
function o(e) {
	return i[e][0];
}
function s(e, t) {
	return i[e].includes(t);
}
//#endregion
//#region src/theme/ClassicThemeProvider.tsx
function c(e) {
	let t = document.getElementById(e);
	return t || (t = document.createElement("link"), t.id = e, t.rel = "stylesheet", document.head.appendChild(t)), t;
}
function l({ theme: t, skin: n, assetBasePath: r = "/classic-stylesheets" }) {
	return e(() => {
		let e = c("classic-theme-link"), i = c("classic-skin-link");
		e.href = `${r}/themes/${t}/theme.css`, i.href = `${r}/themes/${t}/skins/${n}.css`, document.documentElement.dataset.themeProfile = t, document.documentElement.dataset.themeSkin = n, localStorage.setItem("condor.classic.theme", t), localStorage.setItem("condor.classic.skin", n);
	}, [
		t,
		n,
		r
	]), null;
}
//#endregion
//#region src/controls/ClassicButton.tsx
function u({ children: e, type: n = "button", ...r }) {
	return /* @__PURE__ */ t("button", {
		type: n,
		...r,
		children: e
	});
}
//#endregion
//#region src/controls/ClassicInput.tsx
function d(e) {
	return /* @__PURE__ */ t("input", { ...e });
}
//#endregion
//#region src/controls/ClassicTextarea.tsx
function f(e) {
	return /* @__PURE__ */ t("textarea", { ...e });
}
//#endregion
//#region src/controls/ClassicSelect.tsx
function p({ children: e, size: r = 1, ...i }) {
	return /* @__PURE__ */ n("div", {
		className: "dropdown",
		children: [/* @__PURE__ */ t("select", {
			size: r,
			...i,
			children: e
		}), /* @__PURE__ */ t("div", { className: "dropdown-button" })]
	});
}
//#endregion
//#region src/controls/ClassicFieldset.tsx
function m({ legend: e, children: r, className: i, ...a }) {
	return /* @__PURE__ */ n("fieldset", {
		className: ["padding", i].filter(Boolean).join(" "),
		...a,
		children: [e ? /* @__PURE__ */ t("legend", { children: e }) : null, r]
	});
}
//#endregion
//#region src/shell/ClassicWindow.tsx
function h({ title: e, active: r = !0, children: i }) {
	return /* @__PURE__ */ n("div", {
		className: r ? "window active" : "window",
		children: [/* @__PURE__ */ t("div", {
			className: "title-bar",
			children: /* @__PURE__ */ t("div", {
				className: "title-bar-text",
				children: e
			})
		}), /* @__PURE__ */ t("div", {
			className: "window-body",
			children: i
		})]
	});
}
//#endregion
//#region src/shell/ClassicStatusBar.tsx
function g({ children: e }) {
	return /* @__PURE__ */ t("div", {
		className: "status-bar",
		children: e
	});
}
//#endregion
export { r as CLASSIC_THEMES, i as CLASSIC_THEME_SKINS, u as ClassicButton, m as ClassicFieldset, d as ClassicInput, p as ClassicSelect, g as ClassicStatusBar, f as ClassicTextarea, l as ClassicThemeProvider, h as ClassicWindow, o as getDefaultSkinForTheme, a as getSkinsForTheme, s as isSkinValidForTheme };
