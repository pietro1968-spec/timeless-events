import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as SITE } from "./site-D--YTEML.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-form-9VknWjB-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EVENT_TYPES = [
	"Matrimonio",
	"Battesimo",
	"Comunione",
	"Compleanno",
	"Evento aziendale",
	"Altro"
];
var empty = {
	name: "",
	email: "",
	phone: "",
	eventType: "Matrimonio",
	date: "",
	city: "",
	guests: "",
	message: ""
};
function QuoteForm({ compact }) {
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [sent, setSent] = (0, import_react.useState)(false);
	function update(key, value) {
		setFields((f) => ({
			...f,
			[key]: value
		}));
	}
	function onSubmit(e) {
		e.preventDefault();
		const payload = {
			...fields,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		const prev = JSON.parse(localStorage.getItem("te-quotes") || "[]");
		localStorage.setItem("te-quotes", JSON.stringify([payload, ...prev].slice(0, 20)));
		setSent(true);
		const body = [
			`Nome: ${fields.name}`,
			`Email: ${fields.email}`,
			`Telefono: ${fields.phone}`,
			`Evento: ${fields.eventType}`,
			`Data: ${fields.date || "da definire"}`,
			`Città / location: ${fields.city}`,
			`Ospiti: ${fields.guests}`,
			"",
			fields.message
		].join("\n");
		window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Preventivo ${fields.eventType} — ${fields.name}`)}&body=${encodeURIComponent(body)}`;
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-paper px-6 py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl text-ink",
				children: "Richiesta pronta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted",
				children: [
					"Si è aperto il tuo programma di posta per inviare il messaggio a ",
					SITE.email,
					". Puoi anche scriverci su WhatsApp."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `https://wa.me/${SITE.whatsapp}`,
				className: "mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory",
				children: "Apri WhatsApp"
			})
		]
	});
	const fieldClass = "mt-1.5 w-full rounded-lg border border-line bg-ivory px-3.5 py-2.5 text-sm text-ink outline-none transition-shadow focus:border-gold focus:shadow-[0_0_0_3px_rgba(196,163,90,0.18)]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-2xl border border-line bg-paper p-6 sm:p-8",
		children: [
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold",
						children: "Preventivo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl",
						children: "Raccontaci il tuo evento"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Risposta personale, senza impegno."
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium tracking-wide text-ink-soft",
						children: ["Nome e cognome", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							className: fieldClass,
							value: fields.name,
							onChange: (e) => update("name", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium tracking-wide text-ink-soft",
						children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							className: fieldClass,
							value: fields.email,
							onChange: (e) => update("email", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium tracking-wide text-ink-soft",
						children: ["Telefono", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							className: fieldClass,
							value: fields.phone,
							onChange: (e) => update("phone", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium tracking-wide text-ink-soft",
						children: ["Tipo di evento", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: fields.eventType,
							onChange: (e) => update("eventType", e.target.value),
							children: EVENT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium tracking-wide text-ink-soft",
						children: ["Data prevista", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							className: fieldClass,
							value: fields.date,
							onChange: (e) => update("date", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium tracking-wide text-ink-soft",
						children: ["Città / location", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							value: fields.city,
							onChange: (e) => update("city", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium tracking-wide text-ink-soft sm:col-span-2",
						children: ["Numero ospiti", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							value: fields.guests,
							onChange: (e) => update("guests", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium tracking-wide text-ink-soft sm:col-span-2",
						children: ["Messaggio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 5,
							className: fieldClass,
							value: fields.message,
							onChange: (e) => update("message", e.target.value)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "mt-6 w-full rounded-full bg-ink py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-olive-dark sm:w-auto sm:px-8",
				children: "Invia richiesta"
			})
		]
	});
}
//#endregion
export { QuoteForm as t };
