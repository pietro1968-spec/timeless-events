import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./router-B5cfeS-2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-DYHTmtlZ.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, subtitle, image, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative overflow-hidden", compact ? "h-64 sm:h-80" : "h-[52vh] min-h-80 sm:h-[62vh]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center",
				children: [
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold",
						children: kicker
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl",
						children: title
					}),
					subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg",
						children: subtitle
					}) : null
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
