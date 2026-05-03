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
//#region src/shell/ClassicDesktop.tsx
var D = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("main", {
	ref: r,
	className: x("desktop", e),
	...t
}));
D.displayName = "ClassicDesktop";
//#endregion
//#region src/shell/ClassicWindow.tsx
var O = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("section", {
	ref: r,
	className: x("window", e),
	...t
}));
O.displayName = "ClassicWindow";
//#endregion
//#region src/shell/ClassicWindowFrame.tsx
var k = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", {
	ref: r,
	className: x("window-frame", e),
	...t
}));
k.displayName = "ClassicWindowFrame";
//#endregion
//#region src/shell/ClassicWindowBody.tsx
var A = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", {
	ref: r,
	className: x("window-body", e),
	...t
}));
A.displayName = "ClassicWindowBody";
//#endregion
//#region src/shell/ClassicTitleBar.tsx
var j = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("header", {
	ref: r,
	className: x("title-bar", e),
	...t
}));
j.displayName = "ClassicTitleBar";
//#endregion
//#region src/shell/ClassicStatusBar.tsx
var M = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("footer", {
	ref: r,
	className: x("status-bar", e),
	...t
}));
M.displayName = "ClassicStatusBar";
//#endregion
//#region src/shell/ClassicPanel.tsx
var N = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("section", {
	ref: r,
	className: x("panel", e),
	...t
}));
N.displayName = "ClassicPanel";
//#endregion
//#region src/shell/ClassicMenuBar.tsx
var P = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("nav", {
	ref: r,
	className: x("menu-bar", e),
	...t
}));
P.displayName = "ClassicMenuBar";
//#endregion
//#region src/shell/ClassicMenu.tsx
var F = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("ul", {
	ref: r,
	className: x("menu", e),
	...t
}));
F.displayName = "ClassicMenu";
//#endregion
//#region src/shell/ClassicMenuItem.tsx
var I = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("li", {
	ref: r,
	className: x("menu-item", e),
	...t
}));
I.displayName = "ClassicMenuItem";
//#endregion
//#region src/shell/ClassicMenuStrip.tsx
var L = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("ul", {
	ref: r,
	className: x("menu-strip", e),
	...t
}));
L.displayName = "ClassicMenuStrip";
//#endregion
//#region src/table/ClassicDetailedTable.tsx
var R = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("table", {
	ref: r,
	className: x("detailed-table", e),
	...t
}));
R.displayName = "ClassicDetailedTable";
//#endregion
//#region src/table/ClassicDetailedTableHead.tsx
var z = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("thead", {
	ref: r,
	className: x("detailed-table-head", e),
	...t
}));
z.displayName = "ClassicDetailedTableHead";
//#endregion
//#region src/table/ClassicDetailedTableBody.tsx
var B = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("tbody", {
	ref: r,
	className: x("detailed-table-body", e),
	...t
}));
B.displayName = "ClassicDetailedTableBody";
//#endregion
//#region src/table/ClassicDetailedTableCell.tsx
var V = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("td", {
	ref: r,
	className: x("detailed-table-cell", e),
	...t
}));
V.displayName = "ClassicDetailedTableCell";
//#endregion
//#region src/table/ClassicDetailedTableHeaderCell.tsx
var H = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("th", {
	ref: r,
	className: x("detailed-table-header-cell", e),
	...t
}));
H.displayName = "ClassicDetailedTableHeaderCell";
//#endregion
//#region src/dialog/ClassicDialog.tsx
var U = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("dialog", {
	ref: r,
	className: x("dialog", e),
	...t
}));
U.displayName = "ClassicDialog";
//#endregion
//#region src/dialog/ClassicDialogTitle.tsx
var W = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("h2", {
	ref: r,
	className: x("dialog-title", e),
	...t
}));
W.displayName = "ClassicDialogTitle";
//#endregion
//#region src/dialog/ClassicDialogBody.tsx
var G = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", {
	ref: r,
	className: x("dialog-body", e),
	...t
}));
G.displayName = "ClassicDialogBody";
//#endregion
//#region src/dialog/ClassicDialogActions.tsx
var K = e(({ className: e, ...t }, r) => /* @__PURE__ */ n("footer", {
	ref: r,
	className: x("dialog-actions", e),
	...t
}));
K.displayName = "ClassicDialogActions";
//#endregion
//#region src/examples/C5ModifyIncidentReference.tsx
var q = [
	{
		time: "09:17:35",
		actor: "1432 (Dispatch)",
		body: "C12 is on scene.",
		kind: "dispatch"
	},
	{
		time: "09:16:03",
		actor: "1432 (Dispatch)",
		body: "Keypad reports: Front Door Contact - OPEN.",
		kind: "dispatch"
	},
	{
		time: "09:15:48",
		actor: "SYSTEM",
		body: "ALARM: BURGLAR ALARM · Zone: Front Door Contact",
		kind: "system"
	},
	{
		time: "09:15:42",
		actor: "SYSTEM",
		body: "Incident INC-1 created.",
		kind: "system"
	},
	{
		time: "09:15:42",
		actor: "1432 (Dispatch)",
		body: "100 Main St",
		kind: "dispatch"
	}
], J = [
	[
		"09:15:42",
		"SYSTEM",
		"CAD",
		"Incident created by 1432"
	],
	[
		"09:15:48",
		"FIELD",
		"1432",
		"Call received from Acme Security"
	],
	[
		"09:16:03",
		"COMMENT",
		"1432",
		"Panel reports front door contact open"
	],
	[
		"09:17:21",
		"UNIT",
		"E201",
		"Unit enroute"
	],
	[
		"09:17:35",
		"UNIT",
		"C12",
		"Unit on scene"
	],
	[
		"09:19:11",
		"HAZARD",
		"SYSTEM",
		"Premise Hazard: Caution note available"
	]
], Y = [
	{
		id: "E201",
		status: "ENROUTE",
		context: "ETA 02:14",
		category: "enroute"
	},
	{
		id: "E204",
		status: "ON SCENE",
		context: "ARR 09:17:03",
		category: "scene"
	},
	{
		id: "C12",
		status: "ON SCENE",
		context: "ARR 09:17:35",
		category: "scene"
	},
	{
		id: "M7",
		status: "STANDBY",
		context: "HOLDING",
		category: "standby"
	}
];
function X() {
	return /* @__PURE__ */ r(O, {
		className: "c5-modify-incident",
		"aria-label": "Modify Incident reference window",
		children: [
			/* @__PURE__ */ n(j, { children: /* @__PURE__ */ n("div", {
				className: "title-bar-text",
				children: "Modify Incident"
			}) }),
			/* @__PURE__ */ n(k, { children: /* @__PURE__ */ r(A, {
				className: "c5-body",
				children: [
					/* @__PURE__ */ r("section", {
						className: "c5-summary",
						"aria-label": "Incident summary",
						children: [
							/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("strong", { children: "INCIDENT TYPE:" }), " Alarm"] }),
							/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("strong", { children: "LOCATION 1:" }), " 100 Main St"] }),
							/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("strong", { children: "LOCATION 2:" }), " Suite 200"] }),
							/* @__PURE__ */ r("div", { children: [
								/* @__PURE__ */ n("strong", { children: "STATUS:" }),
								" ",
								/* @__PURE__ */ n("span", {
									className: "c5-active",
									children: "ACTIVE"
								})
							] }),
							/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("strong", { children: "DISPOSITION:" }), " N/A"] })
						]
					}),
					/* @__PURE__ */ r("section", {
						className: "c5-hazard",
						children: [/* @__PURE__ */ n("strong", { children: "Premise Hazard:" }), " Caution note available"]
					}),
					/* @__PURE__ */ r("main", {
						className: "c5-columns",
						children: [/* @__PURE__ */ r("section", {
							className: "c5-left",
							children: [
								/* @__PURE__ */ n(E, {
									legend: "Incident Details",
									children: /* @__PURE__ */ r("div", {
										className: "c5-grid2",
										children: [
											/* @__PURE__ */ r("label", { children: ["Incident Type ", /* @__PURE__ */ n(T, {
												defaultValue: "Alarm",
												children: /* @__PURE__ */ n("option", { children: "Alarm" })
											})] }),
											/* @__PURE__ */ r("label", { children: ["Summary ", /* @__PURE__ */ n(C, { defaultValue: "Commercial Burglar Alarm" })] }),
											/* @__PURE__ */ r("label", { children: ["Location 1 ", /* @__PURE__ */ n(C, { defaultValue: "100 Main St" })] }),
											/* @__PURE__ */ r("label", { children: ["Location 2 ", /* @__PURE__ */ n(C, { defaultValue: "Suite 200" })] }),
											/* @__PURE__ */ r("label", { children: ["City ", /* @__PURE__ */ n(C, { defaultValue: "Riverview" })] }),
											/* @__PURE__ */ r("label", { children: ["Caller Name ", /* @__PURE__ */ n(C, { defaultValue: "Acme Security" })] })
										]
									})
								}),
								/* @__PURE__ */ r(E, {
									legend: "Attached Units",
									children: [/* @__PURE__ */ r("div", {
										className: "c5-units-strip",
										children: [
											/* @__PURE__ */ r("label", { children: ["Dispatch Unit ", /* @__PURE__ */ n(C, {
												"aria-label": "Dispatch Unit",
												placeholder: "Dispatch Unit"
											})] }),
											/* @__PURE__ */ n(S, {
												type: "button",
												children: "Attach"
											}),
											/* @__PURE__ */ n(S, {
												type: "button",
												children: "Recommendations..."
											})
										]
									}), /* @__PURE__ */ n("div", {
										className: "c5-unit-list",
										role: "list",
										"aria-label": "Attached units",
										children: Y.map((e) => /* @__PURE__ */ r("div", {
											role: "listitem",
											className: `c5-unit-token c5-unit-${e.category}`,
											children: [
												/* @__PURE__ */ n("span", {
													className: "c5-unit-id",
													children: e.id
												}),
												/* @__PURE__ */ n("span", {
													className: "c5-unit-status",
													children: e.status
												}),
												/* @__PURE__ */ n("span", {
													className: "c5-unit-context",
													children: e.context
												})
											]
										}, e.id))
									})]
								}),
								/* @__PURE__ */ n(E, {
									legend: "Activity",
									className: "c5-activity-fieldset",
									children: /* @__PURE__ */ n("div", {
										className: "c5-scroll c5-activity-scroll",
										children: /* @__PURE__ */ r(R, { children: [/* @__PURE__ */ n(z, { children: /* @__PURE__ */ r("tr", { children: [
											/* @__PURE__ */ n(H, { children: "Time" }),
											/* @__PURE__ */ n(H, { children: "Type" }),
											/* @__PURE__ */ n(H, { children: "Source" }),
											/* @__PURE__ */ n(H, { children: "Event" })
										] }) }), /* @__PURE__ */ n(B, { children: J.map((e) => /* @__PURE__ */ n("tr", { children: e.map((e) => /* @__PURE__ */ n(V, { children: e }, e)) }, e.join("-"))) })] })
									})
								})
							]
						}), /* @__PURE__ */ r("section", {
							className: "c5-right",
							children: [/* @__PURE__ */ n(E, {
								legend: "Comments",
								className: "c5-comments-fieldset",
								children: /* @__PURE__ */ n("div", {
									className: "c5-scroll c5-comments-scroll",
									children: /* @__PURE__ */ r(R, { children: [/* @__PURE__ */ n(z, { children: /* @__PURE__ */ r("tr", { children: [
										/* @__PURE__ */ n(H, { children: "Time" }),
										/* @__PURE__ */ n(H, { children: "Source" }),
										/* @__PURE__ */ n(H, { children: "Comment" })
									] }) }), /* @__PURE__ */ n(B, { children: q.map((e) => /* @__PURE__ */ r("tr", { children: [
										/* @__PURE__ */ n(V, { children: e.time }),
										/* @__PURE__ */ n(V, { children: e.actor }),
										/* @__PURE__ */ n(V, { children: e.body })
									] }, `${e.time}-${e.actor}`)) })] })
								})
							}), /* @__PURE__ */ r(E, {
								legend: "New Comment",
								className: "c5-new-comment-fieldset",
								children: [/* @__PURE__ */ n(w, {
									"aria-label": "New Comment",
									rows: 7
								}), /* @__PURE__ */ r("div", {
									className: "c5-actions",
									children: [/* @__PURE__ */ n(S, {
										type: "button",
										children: "Clear"
									}), /* @__PURE__ */ n(S, {
										type: "button",
										children: "Submit"
									})]
								})]
							})]
						})]
					})
				]
			}) }),
			/* @__PURE__ */ r(M, { children: [
				/* @__PURE__ */ n("p", {
					className: "status-bar-field",
					children: "Status: N/A"
				}),
				/* @__PURE__ */ n("p", {
					className: "status-bar-field",
					children: "Last Update: 05/23/2026 09:22:34"
				}),
				/* @__PURE__ */ n("p", {
					className: "status-bar-field",
					children: "Timer: 00:10:11"
				})
			] })
		]
	});
}
//#endregion
export { X as C5ModifyIncidentReference, o as CLASSIC_DEFAULT_SKIN_BY_THEME, d as CLASSIC_SKIN_LINK_ID, p as CLASSIC_SKIN_STORAGE_KEY, i as CLASSIC_THEMES, u as CLASSIC_THEME_LINK_ID, a as CLASSIC_THEME_SKINS, f as CLASSIC_THEME_STORAGE_KEY, S as ClassicButton, D as ClassicDesktop, R as ClassicDetailedTable, B as ClassicDetailedTableBody, V as ClassicDetailedTableCell, z as ClassicDetailedTableHead, H as ClassicDetailedTableHeaderCell, U as ClassicDialog, K as ClassicDialogActions, G as ClassicDialogBody, W as ClassicDialogTitle, E as ClassicFieldset, C as ClassicInput, F as ClassicMenu, P as ClassicMenuBar, I as ClassicMenuItem, L as ClassicMenuStrip, N as ClassicPanel, T as ClassicSelect, M as ClassicStatusBar, w as ClassicTextarea, b as ClassicThemeProvider, j as ClassicTitleBar, O as ClassicWindow, A as ClassicWindowBody, k as ClassicWindowFrame, c as getDefaultSkinForTheme, s as getSkinsForTheme, l as isSkinValidForTheme };
