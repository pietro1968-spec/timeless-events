import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as PORTFOLIO } from "./site-D--YTEML.mjs";
import { u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./page-hero-DYHTmtlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio.index-CqTzdZ45.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Portfolio",
		title: "I nostri matrimoni da favola e gli eventi realizzati",
		subtitle: "Esplora il portfolio di eventi organizzati a Milano e in tutta Italia.",
		image: "/images/hero-3.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-5 py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 lg:grid-cols-3",
			children: PORTFOLIO.map((album) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-2xl bg-paper shadow-[0_12px_40px_rgba(43,41,38,0.08)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/portfolio/$slug",
					params: { slug: album.slug },
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-photo overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: album.image,
							alt: album.title,
							className: "size-full object-cover"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: album.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: album.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portfolio/$slug",
							params: { slug: album.slug },
							className: "mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-deep",
							children: ["Apri la gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})
					]
				})]
			}, album.slug))
		})
	})] });
}
//#endregion
export { PortfolioIndex as component };
