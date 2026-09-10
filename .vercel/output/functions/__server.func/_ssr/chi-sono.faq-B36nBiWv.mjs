import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as FAQS } from "./site-D--YTEML.mjs";
import { t as PageHero } from "./page-hero-DYHTmtlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chi-sono.faq-B36nBiWv.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		kicker: "Chi sono",
		title: "Domande frequenti",
		image: "/images/table-close.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-3xl px-5 py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper",
			children: FAQS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group px-6 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer font-display text-xl text-ink marker:text-gold",
					children: f.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: f.a
				})]
			}, f.q))
		})
	})] });
}
//#endregion
export { FaqPage as component };
