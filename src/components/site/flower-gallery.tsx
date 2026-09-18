import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Flower = {
  name: string;
  image: string;
  months: string;
  meaning: string;
};

type FlowerInfo = {
  months: string;
  description: string;
  colors: string;
  atmosphere: string;
  idealFor: string;
};

const FLOWER_INFO: Record<string, FlowerInfo> = {
  Amarilli: {
    months: "Inverno - Primavera",
    description:
      "Un fiore scenografico e raffinato, perfetto quando si desidera una presenza floreale importante senza rinunciare all'eleganza.",
    colors: "Bianco, rosso, rosa, bordeaux",
    atmosphere: "Elegante, sofisticata e contemporanea",
    idealFor: "Centrotavola importanti, composizioni scenografiche e bouquet",
  },
  Anemone: {
    months: "Inverno - Primavera",
    description:
      "Delicato ma deciso, l'anemone unisce petali leggeri e un centro molto grafico. Dona carattere alle composizioni romantiche.",
    colors: "Bianco, rosa, rosso, viola",
    atmosphere: "Romantica, delicata e raffinata",
    idealFor: "Bouquet da sposa, composizioni primaverili e dettagli eleganti",
  },
  Anemoni: {
    months: "Inverno - Primavera",
    description:
      "Gli anemoni creano movimento e contrasto grazie al loro centro scuro e ai petali luminosi.",
    colors: "Bianco, rosa, rosso, viola",
    atmosphere: "Artistica, romantica e naturale",
    idealFor: "Bouquet, piccoli arrangiamenti e composizioni miste",
  },
  Anthurium: {
    months: "Tutto l'anno",
    description:
      "Dalla forma essenziale e contemporanea, l'anthurium e ideale per chi cerca un linguaggio floreale moderno e distintivo.",
    colors: "Bianco, rosso, rosa, verde",
    atmosphere: "Contemporanea, audace e minimale",
    idealFor: "Allestimenti moderni, eventi aziendali e composizioni grafiche",
  },
  Astilbe: {
    months: "Primavera - Estate",
    description:
      "Leggera e vaporosa, l'astilbe aggiunge movimento e una texture delicata alle composizioni floreali.",
    colors: "Bianco, rosa, rosso, lilla",
    atmosphere: "Leggera, romantica e naturale",
    idealFor: "Bouquet ariosi, matrimoni garden e composizioni delicate",
  },
  Aster: {
    months: "Estate - Autunno",
    description:
      "Piccolo fiore dalla forma stellata, l'aster porta freschezza e leggerezza, soprattutto nelle composizioni di fine estate.",
    colors: "Bianco, rosa, lilla, viola",
    atmosphere: "Fresca, spontanea e romantica",
    idealFor: "Bouquet naturali, composizioni campestri e dettagli floreali",
  },
  "Bocca di Leone": {
    months: "Primavera - Estate",
    description:
      "I suoi steli verticali danno struttura e movimento alle composizioni, creando un effetto elegante e dinamico.",
    colors: "Bianco, rosa, giallo, arancio, rosso",
    atmosphere: "Elegante, vivace e scenografica",
    idealFor: "Allestimenti verticali, bouquet e grandi composizioni",
  },
  Calla: {
    months: "Primavera - Estate",
    description:
      "La calla e sinonimo di eleganza essenziale. La sua silhouette pulita funziona magnificamente negli allestimenti contemporanei.",
    colors: "Bianco, crema, giallo, rosa, bordeaux",
    atmosphere: "Minimalista, elegante e sofisticata",
    idealFor: "Bouquet moderni, cerimonie e composizioni essenziali",
  },
  Camelia: {
    months: "Inverno - Primavera",
    description:
      "Petali compatti e raffinati rendono la camelia una scelta preziosa per atmosfere romantiche e sofisticate.",
    colors: "Bianco, rosa, rosso",
    atmosphere: "Raffinata, romantica e preziosa",
    idealFor: "Matrimoni eleganti, bouquet e dettagli floreali",
  },
  Ciclamino: {
    months: "Autunno - Inverno",
    description:
      "Un fiore delicato dalla forma particolare, capace di aggiungere colore e personalita alle composizioni invernali.",
    colors: "Bianco, rosa, fucsia, rosso",
    atmosphere: "Delicata, intima e luminosa",
    idealFor: "Eventi invernali e piccoli dettagli floreali",
  },
  Crisantemo: {
    months: "Autunno",
    description:
      "Ricco di forme e varieta, il crisantemo puo assumere un aspetto estremamente sofisticato nelle composizioni contemporanee.",
    colors: "Bianco, crema, giallo, rosa, rosso, verde",
    atmosphere: "Ricca, elegante e versatile",
    idealFor: "Centrotavola, grandi composizioni e decorazioni stagionali",
  },
  Dalia: {
    months: "Estate - Autunno",
    description:
      "La dalia offre una struttura ricca e geometrica, con una presenza scenografica particolarmente adatta ai bouquet importanti.",
    colors: "Bianco, rosa, rosso, arancio, bordeaux, viola",
    atmosphere: "Opulenta, elegante e romantica",
    idealFor: "Bouquet, centrotavola e allestimenti scenografici",
  },
  Delphinium: {
    months: "Estate",
    description:
      "Gli steli slanciati del delphinium creano verticalita e leggerezza, dando profondita alle composizioni.",
    colors: "Blu, azzurro, bianco, rosa, lilla",
    atmosphere: "Aristocratica, fresca e leggera",
    idealFor: "Composizioni verticali, matrimoni estivi e bouquet",
  },
  Elleboro: {
    months: "Inverno",
    description:
      "Fiorisce nei mesi freddi ed e apprezzato per il suo aspetto naturale e sofisticato, perfetto per matrimoni invernali.",
    colors: "Bianco, crema, verde, rosa, porpora",
    atmosphere: "Naturale, sofisticata e invernale",
    idealFor: "Matrimoni invernali, bouquet e composizioni botaniche",
  },
  Fiordaliso: {
    months: "Primavera - Estate",
    description:
      "Il fiordaliso porta un tocco spontaneo e romantico, particolarmente bello nelle composizioni ispirate ai giardini.",
    colors: "Blu, azzurro, bianco, rosa",
    atmosphere: "Naturale, fresca e poetica",
    idealFor: "Matrimoni country chic, bouquet e composizioni campestri",
  },
  "Fiori di ciliegio": {
    months: "Primavera",
    description:
      "I delicati rami fioriti evocano la primavera e creano un'atmosfera eterea e molto scenografica.",
    colors: "Bianco, rosa chiaro, rosa",
    atmosphere: "Eterea, poetica e contemporanea",
    idealFor: "Cerimonie primaverili, installazioni e fondali floreali",
  },
  Fresia: {
    months: "Inverno - Primavera",
    description:
      "La fresia e apprezzata per i suoi fiori delicati e il profumo elegante, perfetta per composizioni leggere.",
    colors: "Bianco, giallo, rosa, lilla, viola",
    atmosphere: "Fresca, elegante e romantica",
    idealFor: "Bouquet, boutonnieres e composizioni profumate",
  },
  Gardenia: {
    months: "Primavera - Estate",
    description:
      "Bianca, profumata e raffinata, la gardenia dona un'impronta lussuosa e romantica.",
    colors: "Bianco, crema",
    atmosphere: "Lussuosa, romantica e sofisticata",
    idealFor: "Bouquet da sposa, dettagli raffinati e cerimonie eleganti",
  },
  Garofano: {
    months: "Primavera - Estate",
    description:
      "Il garofano e estremamente versatile e, nelle varieta moderne, puo diventare sorprendentemente elegante.",
    colors: "Bianco, rosa, rosso, pesca, bordeaux",
    atmosphere: "Elegante, romantica e versatile",
    idealFor: "Bouquet, centrotavola e grandi composizioni",
  },
  Gelsomino: {
    months: "Primavera - Estate",
    description:
      "Piccoli fiori dal profumo intenso, ideali per aggiungere un elemento delicato e sensoriale agli allestimenti.",
    colors: "Bianco",
    atmosphere: "Romantica, profumata e intima",
    idealFor: "Dettagli floreali, bouquet e decorazioni delicate",
  },
  Gerbera: {
    months: "Primavera - Autunno",
    description:
      "Solare e grafica, la gerbera porta energia e colore, con un aspetto molto pulito e contemporaneo.",
    colors: "Bianco, rosa, rosso, arancio, giallo",
    atmosphere: "Solare, allegra e contemporanea",
    idealFor: "Eventi colorati, bouquet e composizioni moderne",
  },
  Gerbere: {
    months: "Primavera - Autunno",
    description:
      "Le gerbere sono perfette per creare composizioni vivaci e luminose, soprattutto quando si desidera giocare con il colore.",
    colors: "Bianco, rosa, rosso, arancio, giallo",
    atmosphere: "Vivace, luminosa e gioiosa",
    idealFor: "Matrimoni estivi, feste e allestimenti pieni di colore",
  },
  Giacinto: {
    months: "Inverno - Primavera",
    description:
      "Il giacinto e riconoscibile per la sua forma compatta e il profumo intenso, ideale per atmosfere primaverili.",
    colors: "Bianco, rosa, blu, lilla, viola",
    atmosphere: "Romantica, fresca e profumata",
    idealFor: "Matrimoni primaverili, bouquet e piccoli centrotavola",
  },
  Giglio: {
    months: "Primavera - Estate",
    description:
      "Imponente e raffinato, il giglio porta una forte presenza scenografica e un linguaggio floreale elegante.",
    colors: "Bianco, rosa, arancio, giallo",
    atmosphere: "Maestosa, elegante e luminosa",
    idealFor: "Cerimonie, grandi composizioni e bouquet importanti",
  },
  Girasole: {
    months: "Estate",
    description:
      "Il girasole porta immediatamente luce e allegria. E ideale per eventi informali, estivi e pieni di personalita.",
    colors: "Giallo, arancio, marrone",
    atmosphere: "Solare, spontanea e gioiosa",
    idealFor: "Matrimoni estivi, eventi country e composizioni naturali",
  },
  Gladiolo: {
    months: "Estate",
    description:
      "Lo stelo verticale del gladiolo crea eleganti linee architettoniche e una forte presenza nelle composizioni.",
    colors: "Bianco, rosa, rosso, giallo, arancio, viola",
    atmosphere: "Decisa, elegante e scenografica",
    idealFor: "Grandi allestimenti, composizioni verticali e cerimonie",
  },
  Gypsophila: {
    months: "Primavera - Estate",
    description:
      "Con i suoi piccoli fiori nuvolati, la gypsophila dona leggerezza e un effetto etereo alle composizioni.",
    colors: "Bianco, rosa",
    atmosphere: "Eterea, romantica e delicata",
    idealFor: "Bouquet, archi floreali e decorazioni romantiche",
  },
  Iris: {
    months: "Primavera - Estate",
    description:
      "L'iris ha una forma inconfondibile e una palette elegante, ideale per composizioni dal carattere sofisticato.",
    colors: "Blu, viola, bianco, giallo",
    atmosphere: "Elegante, intensa e sofisticata",
    idealFor: "Bouquet, composizioni artistiche e dettagli raffinati",
  },
  Lavanda: {
    months: "Estate",
    description:
      "Profumata e riconoscibile, la lavanda richiama immediatamente paesaggi mediterranei e atmosfere rilassate.",
    colors: "Lilla, viola, blu",
    atmosphere: "Mediterranea, rilassata e romantica",
    idealFor: "Matrimoni all'aperto, bouquet, segnaposto e dettagli rustici chic",
  },
  Lilla: {
    months: "Primavera",
    description:
      "I grappoli di piccoli fiori del lilla creano volume e un profumo delicato, con un'estetica molto romantica.",
    colors: "Lilla, viola, bianco, rosa",
    atmosphere: "Romantica, profumata e sofisticata",
    idealFor: "Bouquet primaverili, centrotavola e composizioni garden",
  },
  Lisianthus: {
    months: "Estate - Autunno",
    description:
      "Elegante e delicato, il lisianthus ricorda una rosa aperta e offre una grande versatilita negli allestimenti.",
    colors: "Bianco, crema, rosa, lilla, viola",
    atmosphere: "Raffinata, romantica e morbida",
    idealFor: "Bouquet da sposa, centrotavola e composizioni eleganti",
  },
  Margherita: {
    months: "Primavera - Estate",
    description:
      "La margherita esprime semplicita e naturalezza ed e perfetta per un'estetica fresca e spontanea.",
    colors: "Bianco, giallo",
    atmosphere: "Spontanea, luminosa e naturale",
    idealFor: "Matrimoni garden, country chic e composizioni informali",
  },
  Mimosa: {
    months: "Inverno - Primavera",
    description:
      "I piccoli fiori gialli della mimosa portano luce e morbidezza alle composizioni di fine inverno.",
    colors: "Giallo",
    atmosphere: "Solare, morbida e delicata",
    idealFor: "Eventi primaverili, dettagli floreali e composizioni luminose",
  },
  Mughetto: {
    months: "Primavera",
    description:
      "Piccolo e profumatissimo, il mughetto e uno dei fiori piu delicati e raffinati per il bouquet da sposa.",
    colors: "Bianco",
    atmosphere: "Pura, romantica e sofisticata",
    idealFor: "Bouquet da sposa, boutonnieres e dettagli preziosi",
  },
  Narciso: {
    months: "Inverno - Primavera",
    description:
      "Luminoso e primaverile, il narciso dona freschezza e un tocco spontaneo alle composizioni.",
    colors: "Bianco, giallo",
    atmosphere: "Luminosa, fresca e primaverile",
    idealFor: "Matrimoni primaverili, bouquet e piccoli centrotavola",
  },
  Orchidea: {
    months: "Tutto l'anno",
    description:
      "L'orchidea e una scelta raffinata e contemporanea, capace di creare un'atmosfera lussuosa senza risultare eccessiva.",
    colors: "Bianco, rosa, viola, giallo, verde",
    atmosphere: "Lussuosa, esotica e contemporanea",
    idealFor: "Eventi eleganti, hotel, ricevimenti e installazioni moderne",
  },
  Ortensia: {
    months: "Estate",
    description:
      "Le grandi infiorescenze dell'ortensia creano volume e morbidezza, diventando protagoniste di bouquet e centrotavola.",
    colors: "Bianco, rosa, azzurro, blu, verde, viola",
    atmosphere: "Romantica, ricca e sofisticata",
    idealFor: "Bouquet, centrotavola e grandi composizioni",
  },
  Papavero: {
    months: "Primavera - Estate",
    description:
      "Il papavero introduce un elemento leggero e spontaneo, perfetto per composizioni dal carattere naturale.",
    colors: "Rosso, arancio, rosa, bianco",
    atmosphere: "Libera, naturale e artistica",
    idealFor: "Matrimoni all'aperto, composizioni campestri e installazioni",
  },
  Peonia: {
    months: "Primavera - Inizio Estate",
    description:
      "La peonia e uno dei fiori piu amati per i matrimoni grazie alla sua forma piena, morbida e profondamente romantica.",
    colors: "Bianco, rosa, corallo, rosso",
    atmosphere: "Romantica, lussuosa e morbida",
    idealFor: "Bouquet da sposa, centrotavola e allestimenti eleganti",
  },
  "Pisello odoroso": {
    months: "Primavera - Estate",
    description:
      "Delicato e leggermente mosso, il pisello odoroso dona un effetto naturale e sofisticato ai bouquet.",
    colors: "Bianco, rosa, lilla, viola, pesca",
    atmosphere: "Poetica, leggera e romantica",
    idealFor: "Bouquet da sposa, composizioni garden e dettagli delicati",
  },
  Ranuncolo: {
    months: "Inverno - Primavera",
    description:
      "Il ranuncolo ha una forma piena e ordinata che ricorda una piccola peonia, con un'eleganza molto versatile.",
    colors: "Bianco, giallo, arancio, rosa, rosso",
    atmosphere: "Romantica, raffinata e luminosa",
    idealFor: "Bouquet, centrotavola e composizioni primaverili",
  },
  Ranuncoli: {
    months: "Inverno - Primavera",
    description:
      "I ranuncoli permettono di creare composizioni ricche di colore ma allo stesso tempo leggere e raffinate.",
    colors: "Bianco, giallo, arancio, rosa, rosso",
    atmosphere: "Vivace, romantica e raffinata",
    idealFor: "Bouquet, centrotavola e matrimoni primaverili",
  },
  Rosa: {
    months: "Tutto l'anno",
    description:
      "La rosa e il grande classico del linguaggio floreale, capace di adattarsi a stili estremamente diversi, dal minimal al piu scenografico.",
    colors: "Bianco, crema, rosa, rosso, pesca, giallo, bordeaux",
    atmosphere: "Romantica, elegante e senza tempo",
    idealFor: "Bouquet, cerimonie, centrotavola e qualsiasi stile di matrimonio",
  },
  "Stella di Natale": {
    months: "Inverno",
    description:
      "La stella di Natale dona immediatamente calore e atmosfera alle composizioni della stagione invernale.",
    colors: "Rosso, bianco, crema, rosa",
    atmosphere: "Calda, festiva ed elegante",
    idealFor: "Eventi invernali, Natale e decorazioni festive",
  },
  Tulipano: {
    months: "Primavera",
    description:
      "Con la sua forma pulita e contemporanea, il tulipano e perfetto per composizioni eleganti ma non convenzionali.",
    colors: "Bianco, rosa, rosso, giallo, arancio, viola",
    atmosphere: "Contemporanea, fresca ed elegante",
    idealFor: "Bouquet moderni, centrotavola e matrimoni primaverili",
  },
  Viola: {
    months: "Inverno - Primavera",
    description:
      "Piccola e delicata, la viola porta un tocco poetico e discreto alle composizioni floreali.",
    colors: "Viola, bianco, giallo, blu",
    atmosphere: "Delicata, poetica e intima",
    idealFor: "Piccoli dettagli, bouquet naturali e composizioni primaverili",
  },
  Vischio: {
    months: "Inverno",
    description:
      "Il vischio e legato alla tradizione invernale e porta con se un'immagine naturale e festiva.",
    colors: "Verde, bianco",
    atmosphere: "Naturale, festiva e invernale",
    idealFor: "Decorazioni invernali, eventi natalizi e dettagli botanici",
  },
  Zinnia: {
    months: "Estate - Autunno",
    description:
      "Colorata e resistente, la zinnia offre un aspetto vivace e spontaneo, ideale per eventi estivi e autunnali.",
    colors: "Rosa, arancio, rosso, giallo, bianco, viola",
    atmosphere: "Vivace, solare e spontanea",
    idealFor: "Matrimoni estivi, composizioni colorate e ricevimenti all'aperto",
  },
};

function getFlowerInfo(flower: Flower): FlowerInfo {
  return (
    FLOWER_INFO[flower.name] ?? {
      months: "Stagionalita variabile",
      description: flower.meaning,
      colors: "Colori vari",
      atmosphere: "Elegante e naturale",
      idealFor: "Bouquet e composizioni floreali",
    }
  );
}

export function FlowerGallery({ flowers }: { flowers: Flower[] }) {
  const [active, setActive] = useState<number | null>(null);

  const isOpen = active !== null;

  const showPrevious = () => {
    if (active === null || flowers.length === 0) return;

    setActive((current) => {
      if (current === null) return null;
      return current > 0 ? current - 1 : flowers.length - 1;
    });
  };

  const showNext = () => {
    if (active === null || flowers.length === 0) return;

    setActive((current) => {
      if (current === null) return null;
      return current < flowers.length - 1 ? current + 1 : 0;
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {flowers.map((flower, index) => {
          const info = getFlowerInfo(flower);

          return (
            <button
              key={`${flower.name}-${flower.image}`}
              type="button"
              onClick={() => setActive(index)}
              className="group overflow-hidden rounded-2xl border border-line bg-paper text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={flower.image}
                  alt={flower.name}
                  loading="lazy"
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${flower.name === 'Anemone' ? 'object-[13%_center]' : 'object-center'}`}
                />
              </div>

              <div className="px-5 py-5">
                <h3 className="font-display text-2xl text-ink">
                  {flower.name}
                </h3>

                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                  {info.months}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {info.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 p-3 backdrop-blur-sm sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Galleria dei fiori"
          onClick={() => setActive(null)}
        >
          <div
            className="relative mx-auto flex min-h-full w-full max-w-6xl flex-col items-center justify-center py-4 sm:py-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Chiudi galleria"
              onClick={() => setActive(null)}
              className="fixed right-4 top-4 z-30 rounded-full bg-black/70 p-2 text-white transition hover:bg-black/90 sm:absolute"
            >
              <X className="size-6" />
            </button>

            <div className="mb-3 text-sm tracking-wide text-white/80">
              {active + 1} / {flowers.length}
            </div>

            <div className="relative flex w-full items-center justify-center">
              <button
                type="button"
                aria-label="Fiore precedente"
                onClick={showPrevious}
                className="absolute left-1 z-10 rounded-full bg-black/65 p-2.5 text-white transition hover:bg-black/90 sm:left-3 sm:p-3"
              >
                <ChevronLeft className="size-6 sm:size-7" />
              </button>

              <img
                src={flowers[active].image}
                alt={flowers[active].name}
                className="max-h-[48vh] max-w-[78vw] rounded-lg object-contain shadow-2xl sm:max-h-[52vh] sm:max-w-[76vw]"
              />

              <button
                type="button"
                aria-label="Fiore successivo"
                onClick={showNext}
                className="absolute right-1 z-10 rounded-full bg-black/65 p-2.5 text-white transition hover:bg-black/90 sm:right-3 sm:p-3"
              >
                <ChevronRight className="size-6 sm:size-7" />
              </button>
            </div>

            {(() => {
              const flower = flowers[active];
              const info = getFlowerInfo(flower);

              return (
                <div className="mt-4 w-full max-w-4xl text-center text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                    
                  </p>

                  <h2 className="mt-1 font-display text-3xl sm:text-4xl text-amber-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    {flower.name}
                  </h2>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60 sm:text-xs">
                    {info.months}
                  </p>

                  <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
                    {info.description}
                  </p>

                  <div className="mx-auto mt-4 grid max-w-3xl gap-2 text-left sm:grid-cols-3">
                    <div className="rounded-xl bg-white/10 px-3 py-2.5">
                      <p className="text-[9px] uppercase tracking-[0.16em] text-white/50">
                        Colori
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/90 sm:text-sm">
                        {info.colors}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 px-3 py-2.5">
                      <p className="text-[9px] uppercase tracking-[0.16em] text-white/50">
                        Atmosfera
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/90 sm:text-sm">
                        {info.atmosphere}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 px-3 py-2.5">
                      <p className="text-[9px] uppercase tracking-[0.16em] text-white/50">
                        Ideale per
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/90 sm:text-sm">
                        {info.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        </div>
      ) : null}
    </>
  );
}



















