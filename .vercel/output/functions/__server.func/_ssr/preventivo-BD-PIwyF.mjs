import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-DYHTmtlZ.mjs";
import { t as QuoteForm } from "./quote-form-9VknWjB-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/preventivo-BD-PIwyF.js
var import_jsx_runtime = require_jsx_runtime();
function Preventivo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		kicker: "Preventivo",
		title: "Raccontaci il tuo giorno",
		subtitle: "Consulenza gratuita e senza impegno. Ogni evento è progettato su misura.",
		image: "/images/ballroom.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-3xl px-5 py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
	})] });
}
//#endregion
export { Preventivo as component };
