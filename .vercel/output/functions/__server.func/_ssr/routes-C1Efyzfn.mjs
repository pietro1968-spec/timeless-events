import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as HERO_SLIDES, c as QUOTES, i as FLOWERS, r as FEATURED_SERVICES, t as ABOUT, u as SITE } from "./site-D--YTEML.mjs";
import { u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ServiceCard } from "./service-card-BWvRlwnp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C1Efyzfn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [slide, setSlide] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 4500);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-[88vh] min-h-[560px] overflow-hidden text-ivory",
			children: [
				HERO_SLIDES.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "absolute inset-0 size-full object-cover transition-opacity duration-1000",
					style: { opacity: i === slide ? 1 : 0 }
				}, src)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.72rem] font-medium uppercase tracking-[0.4em] text-gold",
							children: "Wedding Planner"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl",
							children: "Timeless Events"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl italic text-gold sm:text-3xl",
							children: "Tavares"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/90 sm:text-lg",
							children: "Trasformiamo i vostri sogni in realtà senza tempo, curando ogni dettaglio con l'eleganza che meritate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/preventivo",
								className: "rounded-full bg-gold px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-deep",
								children: "Richiedi preventivo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/chi-sono",
								className: "rounded-full border border-gold/80 px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-gold hover:text-ink",
								children: "Scopri di più su di me"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ABOUT.portrait,
					alt: SITE.founder,
					className: "aspect-portrait w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold",
					children: "La fondatrice"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl leading-tight sm:text-5xl",
					children: [
						SITE.name,
						": wedding planner a ",
						SITE.city
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 font-display text-xl italic text-ink-soft",
					children: QUOTES[0].text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted",
					children: ABOUT.paragraphs[0]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: ABOUT.paragraphs[1]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/chi-sono",
					className: "mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-deep",
					children: ["Scopri di più su di me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-olive py-10 text-center text-ivory",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-3xl px-6 font-display text-xl italic sm:text-2xl",
				children: "Ogni evento è unico e indimenticabile. Esplora le nostre aree di specializzazione."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 lg:grid-cols-3",
				children: FEATURED_SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					service: s,
					featured: true
				}, s.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/servizi",
					className: "inline-flex rounded-full border border-ink px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] hover:bg-ink hover:text-ivory",
					children: "Tutti i servizi"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold",
						children: "Dillo con i fiori"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "Il linguaggio segreto dei fiori"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Scopri la nostra collezione floreale: ogni fiore racconta una storia di bellezza, simbolo e significato. I fiori trasformano l'atmosfera, parlano al cuore e rendono ogni momento unico."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid grid-cols-2 gap-3",
						children: FLOWERS.slice(0, 6).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-line bg-paper px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted",
								children: f.meaning
							})]
						}, f.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/servizi/$slug",
						params: { slug: "fiori" },
						className: "mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-deep",
						children: ["Esplora i fiori ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/bouquet.jpg",
						alt: "Allestimento floreale",
						className: "aspect-portrait w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-5xl px-5 py-20 text-center lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold",
					children: "Dicono di noi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "Le vostre recensioni"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-sm text-muted",
					children: "Dalla prima visione al dettaglio finale, curo ogni aspetto per regalarvi un giorno senza pensieri."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-3",
					children: QUOTES.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "rounded-2xl border border-line bg-paper px-6 py-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg italic leading-relaxed text-ink-soft",
							children: [
								"“",
								q.text,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold",
							children: q.author
						})]
					}, q.author))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "Sei pronto/a a fare il grande passo?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Ascolto i vostri desideri per tradurli in realtà. Insieme costruiremo l'atmosfera magica che avete sempre immaginato."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/preventivo",
							className: "mt-6 inline-flex rounded-full bg-ink px-8 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory",
							children: "Inizia da qui"
						})
					]
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
