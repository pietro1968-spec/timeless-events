import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as QUOTES, u as SITE } from "./site-D--YTEML.mjs";
import { t as PageHero } from "./page-hero-DYHTmtlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/opinioni-B32s6MGF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "te-reviews";
function Opinioni() {
	const [reviews, setReviews] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [event, setEvent] = (0, import_react.useState)("Matrimonio");
	const [text, setText] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			setReviews(JSON.parse(localStorage.getItem(KEY) || "[]"));
		} catch {
			setReviews([]);
		}
	}, []);
	function onSubmit(e) {
		e.preventDefault();
		const next = [{
			name,
			event,
			text,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		}, ...reviews].slice(0, 30);
		localStorage.setItem(KEY, JSON.stringify(next));
		setReviews(next);
		setName("");
		setText("");
		setSaved(true);
	}
	const field = "mt-1.5 w-full rounded-lg border border-line bg-ivory px-3.5 py-2.5 text-sm outline-none focus:border-gold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		kicker: "Opinioni",
		title: "Lascia la tua esperienza",
		subtitle: "Condividi come abbiamo organizzato il tuo evento a Milano e in tutta Italia.",
		image: "/images/toast.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-5 py-16 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: QUOTES.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "rounded-xl border border-line bg-paper px-4 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-base italic",
						children: [
							"“",
							q.text,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-3 text-[0.65rem] uppercase tracking-[0.16em] text-gold",
						children: q.author
					})]
				}, q.author))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-12 rounded-2xl border border-line bg-paper p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "La tua opinione"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-medium text-ink-soft",
								children: ["Nome", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									className: field,
									value: name,
									onChange: (e) => setName(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-medium text-ink-soft",
								children: ["Evento", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: field,
									value: event,
									onChange: (e) => setEvent(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-medium text-ink-soft sm:col-span-2",
								children: ["Messaggio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									rows: 4,
									className: field,
									value: text,
									onChange: (e) => setText(e.target.value)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-5 rounded-full bg-ink px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory",
						children: "Pubblica"
					}),
					saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-olive",
						children: "Grazie. La tua recensione è visibile su questo dispositivo."
					}) : null
				]
			}),
			reviews.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 space-y-4",
				children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line bg-paper px-5 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg",
							children: r.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-gold",
							children: r.event
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: r.text
						})
					]
				}, r.createdAt))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-center text-sm text-muted",
				children: [
					"Puoi anche lasciare una recensione su",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.googleReview,
						className: "text-gold-deep underline",
						target: "_blank",
						rel: "noreferrer",
						children: "Google"
					}),
					"."
				]
			})
		]
	})] });
}
//#endregion
export { Opinioni as component };
