import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-C0Vji6ye.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery({ photos }) {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: photos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "group overflow-hidden rounded-xl bg-paper text-left shadow-[0_8px_30px_rgba(43,41,38,0.06)]",
			onClick: () => setActive(i),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-photo overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.src,
					alt: p.caption ?? "",
					className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
				})
			}), p.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 py-3 font-display text-sm italic text-ink-soft",
				children: p.caption
			}) : null]
		}, `${p.src}-${i}`))
	}), active !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-overlay flex items-center justify-center bg-ink/85 p-4",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Foto ingrandita",
		onClick: () => setActive(null),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute top-5 right-5 flex size-11 items-center justify-center rounded-full bg-ivory/10 text-ivory",
			"aria-label": "Chiudi",
			onClick: () => setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: photos[active].src,
			alt: photos[active].caption ?? "",
			className: "max-h-[88vh] max-w-full rounded-lg object-contain",
			onClick: (e) => e.stopPropagation()
		})]
	}) : null] });
}
//#endregion
export { Gallery as t };
