import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-DYHTmtlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/promozioni-Dx2ducSU.js
var import_jsx_runtime = require_jsx_runtime();
function Promozioni() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		kicker: "Promozioni",
		title: "Offerte speciali per il tuo evento",
		subtitle: "Approfitta delle iniziative Timeless Events per matrimoni, compleanni e molto altro.",
		image: "/images/peony.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-3xl px-5 py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "overflow-hidden rounded-2xl border border-line bg-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/forest.jpg",
				alt: "La Foresta",
				className: "aspect-banner w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold",
						children: "La tua Foresta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl",
						children: "Un albero per ogni amore che cresce"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Includi la riforestazione Tree-Nation nel tuo evento: un dono per gli ospiti e per il pianeta."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sostenibilita",
						className: "mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory",
						children: "Scopri La Foresta"
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Promozioni as component };
