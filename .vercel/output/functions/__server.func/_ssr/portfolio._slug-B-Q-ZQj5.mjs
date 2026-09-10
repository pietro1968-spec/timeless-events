import { b as require_jsx_runtime, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as getAlbum } from "./site-D--YTEML.mjs";
import { r as Route$2 } from "./router-B5cfeS-2.mjs";
import { t as PageHero } from "./page-hero-DYHTmtlZ.mjs";
import { t as QuoteForm } from "./quote-form-9VknWjB-.mjs";
import { t as Gallery } from "./gallery-C0Vji6ye.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio._slug-B-Q-ZQj5.js
var import_jsx_runtime = require_jsx_runtime();
function AlbumPage() {
	const { slug } = Route$2.useParams();
	const album = getAlbum(slug);
	if (!album) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Portfolio",
			title: album.title,
			subtitle: album.subtitle,
			image: album.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-5 py-12 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 text-base leading-relaxed text-ink-soft",
				children: album.intro.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
			})
		}),
		album.galleries.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-10 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: g.title
				}),
				g.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: g.caption
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { photos: g.photos })
				})
			]
		}, g.title)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-5 py-16 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
		})
	] });
}
//#endregion
export { AlbumPage as component };
