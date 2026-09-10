import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as SITE } from "./site-D--YTEML.mjs";
import { a as Phone, c as Mail, s as MapPin } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./page-hero-DYHTmtlZ.mjs";
import { t as QuoteForm } from "./quote-form-9VknWjB-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contatti-BUIK4obS.js
var import_jsx_runtime = require_jsx_runtime();
function Contatti() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		kicker: "Contatti",
		title: "Parliamo del tuo evento",
		subtitle: "Siamo qui per aiutarti a realizzare il giorno perfetto, a Milano e in tutta Italia.",
		image: "/images/hero-1.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Hai bisogno di maggiori informazioni?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "Contattaci per organizzare il tuo evento. Elisabete ti risponde personalmente."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `mailto:${SITE.email}`,
					className: "flex items-center gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-gold" }),
						" ",
						SITE.email
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SITE.phoneHref,
					className: "flex items-center gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-gold" }),
						" ",
						SITE.phoneDisplay
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-gold" }), " Milano · tutta Italia"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `https://wa.me/${SITE.whatsapp}`,
						className: "rounded-full bg-whatsapp px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white",
						children: "WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/opinioni",
						className: "rounded-full border border-ink px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em]",
						children: "Lascia un'opinione"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { compact: true })]
	})] });
}
//#endregion
export { Contatti as component };
