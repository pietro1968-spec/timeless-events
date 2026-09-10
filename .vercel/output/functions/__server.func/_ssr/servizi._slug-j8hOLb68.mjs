import { b as require_jsx_runtime, v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as FLOWERS, p as getService } from "./site-D--YTEML.mjs";
import { n as Route } from "./router-B5cfeS-2.mjs";
import { t as PageHero } from "./page-hero-DYHTmtlZ.mjs";
import { t as QuoteForm } from "./quote-form-9VknWjB-.mjs";
import { t as Gallery } from "./gallery-C0Vji6ye.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servizi._slug-j8hOLb68.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const { slug } = Route.useParams();
	const service = getService(slug);
	if (!service) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Servizi",
			title: service.title,
			subtitle: service.excerpt,
			image: service.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-5 py-16 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 text-base leading-relaxed text-ink-soft",
					children: service.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
				}),
				slug === "fiori" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-3 sm:grid-cols-2",
					children: FLOWERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-paper px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: f.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-wider text-gold",
								children: f.months
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: f.meaning
							})
						]
					}, f.name))
				}) : null,
				service.extras ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2",
					children: service.extras.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-line bg-paper px-5 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: e.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: e.text
						})]
					}, e.title))
				}) : null,
				slug === "extra" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm",
					children: [
						"Scopri anche",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sostenibilita",
							className: "text-gold-deep underline",
							children: "La Foresta Timeless Events"
						}),
						", l'iniziativa Tree-Nation."
					]
				}) : null
			]
		}),
		service.gallery?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 pb-8 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { photos: service.gallery.map((src) => ({ src })) })
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-5 py-16 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
		})
	] });
}
//#endregion
export { ServicePage as component };
