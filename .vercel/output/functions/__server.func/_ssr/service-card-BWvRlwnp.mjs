import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Shirt, l as Landmark, n as UtensilsCrossed, u as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-card-BWvRlwnp.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	catering: UtensilsCrossed,
	location: Landmark,
	abiti: Shirt
};
function ServiceCard({ service, featured }) {
	const Icon = ICONS[service.slug];
	const isLocation = service.slug === "location";
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: featured ? "aspect-photo" : "aspect-wide",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: service.image,
			alt: service.title,
			className: "size-full object-cover transition-transform duration-500 hover:scale-105"
		})
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col overflow-hidden rounded-2xl bg-paper shadow-[0_12px_40px_rgba(43,41,38,0.08)]",
		children: [isLocation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/portfolio/$slug",
			params: { slug: "location" },
			className: "block overflow-hidden",
			children: inner
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/servizi/$slug",
			params: { slug: service.slug },
			className: "block overflow-hidden",
			children: inner
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-6 pt-6 pb-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "flex items-center gap-3 font-display text-2xl text-ink",
					children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-6 shrink-0 text-gold",
						strokeWidth: 1.4
					}) : null, service.title]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
					children: service.excerpt
				}),
				isLocation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/portfolio/$slug",
					params: { slug: "location" },
					className: "mt-6 inline-flex items-center gap-2 text-nav font-semibold uppercase tracking-[0.2em] text-gold-deep hover:text-gold",
					children: [service.short, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/servizi/$slug",
					params: { slug: service.slug },
					className: "mt-6 inline-flex items-center gap-2 text-nav font-semibold uppercase tracking-[0.2em] text-gold-deep hover:text-gold",
					children: [service.short, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})
			]
		})]
	});
}
//#endregion
export { ServiceCard as t };
