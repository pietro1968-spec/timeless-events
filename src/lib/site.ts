export const SITE = {
  name: "Timeless Events",
  founder: "Elisabete Tavares",
  tagline: "Wedding Planner",
  city: "Milano e tutta Italia",
  email: "timelesseventstavares@gmail.com",
  phoneDisplay: "+39 375 554 4111",
  phoneHref: "tel:+393755544111",
  whatsapp: "393755544111",
  whatsappAlt: "351967720620",
  instagram: "https://www.instagram.com/timelesseventstavares",
  facebook: "https://www.facebook.com/p/Elisabete-Carreta-Tavares-61566576951521/",
  youtube: "https://www.youtube.com/@timelessevents-",
  googleReview: "https://g.page/r/CWc4scCgxzrQEAE/review",
  treeNation: "https://tree-nation.com",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/servizi", label: "Servizi" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/sostenibilita", label: "Sostenibilità" },
] as const;

export const HERO_SLIDES = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/dress-2.jpg",
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  excerpt: string;
  body: string[];
  image: string;
  gallery?: string[];
  cta?: string;
  href?: string;
  extras?: { title: string; text: string }[];
};

export const FEATURED_SERVICES: Service[] = [
  {
    slug: "catering",
    title: "Catering & Banqueting",
    short: "Scopri il servizio",
    excerpt:
      "Ricordi di gusto che raccontano storie attraverso menù raffinati, prodotti di altissima qualità e mise en place curate nei minimi dettagli.",
    body: [
      "Trasforma il catering in un’esperienza gastronomica memorabile.",
      "Specializzati in menù su misura, offriamo soluzioni italiane e internazionali, gestendo esigenze vegane, intolleranze o preferenze personalizzate.",
      "Se sognate un matrimonio perfetto, non potete trascurare il catering. È l’arte di trasformare il cibo in un’esperienza unica, che rifletta il vostro stile, il vostro gusto e il vostro amore.",
      "Che siate amanti della cucina italiana o internazionale, che preferiate un buffet o un pranzo servito, noi sapremo accontentarvi. Consulenza gratuita e senza impegno.",
    ],
    image: "/images/buffet.jpg",
    gallery: ["/images/buffet.jpg", "/images/catering.jpg", "/images/fine-dining.jpg", "/images/table-close.jpg"],
  },
  {
    slug: "location",
    title: "Location Esclusive",
    short: "Scopri le location",
    excerpt:
      "Selezioniamo ville d’epoca, dimore storiche e location panoramiche per regalare la cornice perfetta al tuo evento speciale.",
    body: [
      "Scopri le migliori location per matrimoni, eventi aziendali e cerimonie a Milano e in tutta Italia.",
      "Timeless Events collabora con le migliori location italiane e internazionali. Che tu stia organizzando un evento formale o informale, ti aiutiamo a trovare un luogo indimenticabile per i tuoi ospiti.",
      "Lago di Como, ville toscane, giardini affacciati sull’acqua, dimore storiche e scenari a Lisbona: scegliamo l’ambientazione, curiamo la decorazione e gestiamo l’evento in modo impeccabile.",
    ],
    image: "/images/ballroom.jpg",
    gallery: [
      "/images/ballroom.jpg",
      "/images/ballroom-gold.jpg",
      "/images/villa.jpg",
      "/images/italy-villa.jpg",
      "/images/como.jpg",
      "/images/lisbon.jpg",
    ],
    href: "/portfolio/location",
  },
  {
    slug: "abiti",
    title: "Abiti Sposa & Cerimonia",
    short: "Richiedi consulenza",
    excerpt:
      "Consulenza d’immagine su misura e selezione di atelier per scegliere l’abito dei tuoi sogni con stile, armonia ed eleganza.",
    body: [
      "La seta che accarezza la pelle, il pizzo che impreziosisce il corpo: un abito da sposa è una poesia in movimento.",
      "Soluzioni su misura, dallo stile classico a quello moderno, pensate per valorizzare ogni silhouette. Quando il sogno diventa seta e luce.",
      "Per lo sposo: lana, cashmere, classe senza tempo. Il tocco finale di un uomo sicuro di sé.",
      "Non solo location e dettagli: la tua wedding planner ti guiderà anche nella scelta dell’abito perfetto per il tuo giorno più bello.",
    ],
    image: "/images/dress-2.jpg",
    gallery: ["/images/dress-2.jpg", "/images/bride.jpg", "/images/groom.jpg", "/images/ceremony2.jpg"],
  },
];

export const SERVICES: Service[] = [
  ...FEATURED_SERVICES.filter((s) => s.slug !== "location"),
  {
    slug: "cerimonie",
    title: "Allestimenti Cerimonia",
    short: "Scopri",
    excerpt: "Creiamo l’atmosfera perfetta per la tua cerimonia, ambienti curati nei minimi particolari.",
    body: [
      "Dalla scenografia floreale alla logistica, ogni momento viene orchestrato perché tu viva emozioni autentiche e senza stress.",
      "Allestimenti cerimonia a Milano e in tutta Italia, pensati per ambienti sacri, civili e simbolici.",
    ],
    image: "/images/garden.jpg",
    gallery: ["/images/garden.jpg", "/images/ceremony2.jpg", "/images/bouquet.jpg", "/images/peony.jpg"],
  },
  {
    slug: "fiori",
    title: "Fiori & Floral Styling",
    short: "Il linguaggio dei fiori",
    excerpt:
      "I nostri floral stylist trasformano fiori e piante in opere d’arte che raccontano la vostra storia.",
    body: [
      "Location, bouquet e scenografie realizzate su misura, per un effetto estetico e sensoriale unico.",
      "Ogni fiore racconta una storia di bellezza, simbolo e significato. Scegli il fiore delle tue nozze e il mese del tuo matrimonio: noi ti guidiamo nel linguaggio segreto dei fiori.",
      "I fiori trasformano l’atmosfera, parlano al cuore e rendono ogni momento unico e indimenticabile.",
    ],
    image: "/images/bouquet.jpg",
    gallery: ["/images/bouquet.jpg", "/images/peony.jpg", "/images/garden.jpg", "/images/hero-1.jpg"],
  },
  {
    slug: "auto",
    title: "Auto di Lusso",
    short: "Scopri",
    excerpt: "Auto da sogno, eleganza senza tempo e un’entrata che nessuno dimenticherà.",
    body: [
      "Noleggio auto di lusso per matrimoni ed eventi. Lascia che ci occupiamo di tutto.",
      "Un’icona d’altri tempi, con fascino retrò e dettagli curati, può aggiungere un tocco cinematografico al grande giorno — come per Diana & André, trasformando ogni spostamento in un momento da ricordare.",
      "Servizio soggetto a disponibilità e logistica del percorso.",
    ],
    image: "/images/car.jpg",
    gallery: ["/images/car.jpg", "/images/couple.jpg"],
  },
  {
    slug: "bellezza",
    title: "Make-up & Bellezza",
    short: "Scopri",
    excerpt: "Look luminoso e naturale per il tuo grande giorno, con durata, eleganza e comfort.",
    body: [
      "I nostri make-up artist e hair stylist professionisti valorizzano i tuoi tratti, assicurando un make-up che resiste alle emozioni, alle foto e al ballo.",
    ],
    image: "/images/makeup.jpg",
  },
  {
    slug: "musica",
    title: "Musica & DJ",
    short: "Scopri",
    excerpt: "Gruppi live, DJ professionisti, musicisti classici o band moderne: ogni evento ha la sua colonna sonora.",
    body: [
      "Accendi la festa con performance musicali su misura, per emozionare e coinvolgere i tuoi ospiti.",
      "La disponibilità di alcuni gruppi o artisti può variare in base alla data, alla location e alla logistica tecnica.",
    ],
    image: "/images/music.jpg",
  },
  {
    slug: "video",
    title: "Video & Storytelling",
    short: "Scopri",
    excerpt: "I nostri videomaker catturano l’essenza del tuo evento in immagini emozionali.",
    body: [
      "Montaggi creativi, storytelling su misura e riprese professionali per rivivere ogni attimo con emozione.",
    ],
    image: "/images/video.jpg",
  },
  {
    slug: "battesimi",
    title: "Battesimi",
    short: "Scopri",
    excerpt: "Celebra il battesimo del tuo bambino con raffinatezza ed emozione.",
    body: [
      "Dall’allestimento alla torta, ogni dettaglio è curato per creare un giorno unico, in armonia con la tua visione e lo stile del tuo evento.",
    ],
    image: "/images/kids.jpg",
  },
  {
    slug: "comunioni",
    title: "Prime Comunioni",
    short: "Scopri",
    excerpt: "Rendi speciale il giorno della Prima Comunione del tuo bambino.",
    body: [
      "Dal coordinato all’intrattenimento, progettiamo cerimonie ed eventi eleganti, adatti alle famiglie che cercano emozione e semplicità.",
    ],
    image: "/images/ceremony2.jpg",
  },
  {
    slug: "compleanni",
    title: "Compleanni",
    short: "Scopri",
    excerpt: "Festeggia con stile, divertimento e originalità.",
    body: [
      "Progettiamo eventi tematici, allestimenti personalizzati e intrattenimento su misura per adulti e bambini, con cura su ogni dettaglio.",
    ],
    image: "/images/party.jpg",
  },
  {
    slug: "generazione-z",
    title: "Generazione Z",
    short: "Scopri",
    excerpt: "Celebrazioni libere, autentiche e contemporanee: il nostro approccio Gen Z rompe gli schemi.",
    body: [
      "Dimentica gli schemi, le regole imposte e i soliti riti. Il vostro matrimonio non deve assomigliare a quello di nessun altro.",
      "Team creativi, scelte fuori dagli stereotipi, esperienza personalizzata e piena libertà espressiva.",
    ],
    image: "/images/toast.jpg",
  },
  {
    slug: "budget",
    title: "Budget & Coordinamento",
    short: "Scopri",
    excerpt: "Pianificazione del budget, selezione fornitori e coordinamento end-to-end.",
    body: [
      "Dalla prima visione al dettaglio finale, curo ogni aspetto per regalarvi un giorno senza pensieri.",
      "Ascolto i vostri desideri per tradurli in realtà, rispettando priorità e investimento, senza rinunciare allo stile.",
    ],
    image: "/images/table-close.jpg",
  },
  {
    slug: "extra",
    title: "Servizi Extra",
    short: "Scopri",
    excerpt:
      "Animazione, dog sitter, coordinazione ospiti, wedding cake, web wedding site e molto altro.",
    body: [
      "Ogni richiesta diventa realtà grazie alle nostre soluzioni personalizzate.",
    ],
    image: "/images/cake2.jpg",
    extras: [
      {
        title: "Baby Sitter",
        text: "Per la serenità degli adulti e il sorriso dei più piccoli. Un servizio attento e affidabile, con baby sitter qualificate.",
      },
      {
        title: "Bomboniere",
        text: "Piccoli doni, grandi emozioni. Personalizzate e curate nei dettagli, per lasciare un ricordo unico.",
      },
      {
        title: "Dog-Sitter & Cat-Sitter",
        text: "Anche i vostri amici a quattro zampe meritano attenzioni speciali, con affetto e rispetto delle abitudini.",
      },
      {
        title: "Elicotteri",
        text: "Ingresso spettacolare o trasferimento esclusivo. Disponibile solo previa autorizzazione degli enti competenti e della location.",
      },
      {
        title: "Fuochi d’artificio",
        text: "Spettacoli pirotecnici personalizzati. Come per Desi e Augusto, una scintilla in più per sigillare il giorno speciale.",
      },
      {
        title: "Musicisti",
        text: "Ensemble, solisti o band selezionati per accompagnare ogni momento con emozione, stile e armonia.",
      },
      {
        title: "Photo Booth & Video Booth",
        text: "Angoli personalizzati per immortalare sorrisi, con accessori e fondali in perfetto stile evento.",
      },
      {
        title: "Rilascio colombe",
        text: "Un gesto delicato, simbolo d’amore, libertà e rinascita. Solo con operatori certificati e in contesti autorizzati.",
      },
      {
        title: "Spettacoli dal vivo",
        text: "Dai ballerini agli artisti di luce, ogni performance rende unico il tuo evento.",
      },
      {
        title: "Lanterne & Bolle",
        text: "Leggerezza, luce e poesia nell’aria. Disponibili solo in aree autorizzate e con meteo favorevole.",
      },
      {
        title: "Carrozze con cavalli",
        text: "Un tocco da fiaba per un ingresso che incanta, previa autorizzazione del luogo.",
      },
      {
        title: "Welcome Bag",
        text: "Kit di benvenuto personalizzati, anche per celiaci, intolleranze o preferenze alimentari.",
      },
      {
        title: "Relax & Beauty corner",
        text: "Momenti di benessere per sposi e ospiti: beauty corner, massaggi o ritocchi make-up.",
      },
      {
        title: "Assistenza persone fragili",
        text: "Personale dedicato per accompagnamento, comfort e supporto durante tutta la giornata.",
      },
      {
        title: "Droni Vision",
        text: "Riprese aeree emozionanti. Richiede autorizzazione ENAC e spazi aperti idonei.",
      },
      {
        title: "Libro firme digitale",
        text: "Messaggi, dediche e immagini raccolte in tempo reale o dopo l’evento.",
      },
      {
        title: "Caricaturista o ritrattista",
        text: "Ritratti o caricature dal vivo: un ricordo unico da portare a casa con il sorriso.",
      },
      {
        title: "Albero virtuale",
        text: "Per ogni coppia o ospite, un albero piantato in collaborazione con Tree-Nation. Un gesto d’amore che lascia un’impronta nel tempo.",
      },
    ],
  },
];

export function getService(slug: string) {
  if (slug === "location") {
    return FEATURED_SERVICES.find((s) => s.slug === "location");
  }
  return SERVICES.find((s) => s.slug === slug);
}

export const FLOWERS = [
  { name: "Rosa", meaning: "Amore, bellezza e promessa che sboccia ogni giorno.", months: "Tutto l’anno" },
  { name: "Peonia", meaning: "Prosperità, romanticismo e un amore pieno.", months: "Aprile – Giugno" },
  { name: "Ranuncolo", meaning: "Fascino, grazia e amore sincero.", months: "Primavera" },
  { name: "Anemone", meaning: "Rinascita, nuovi inizi e passione che resiste al tempo.", months: "Primavera" },
  { name: "Elleboro", meaning: "Resilienza e protezione silenziosa.", months: "Inverno" },
  { name: "Gardenia", meaning: "Amore puro, grazia e pace interiore.", months: "Estate" },
  { name: "Giglio", meaning: "Maestà, purezza e rinnovamento.", months: "Primavera – Estate" },
  { name: "Iris", meaning: "Saggezza, fede e nobiltà d’animo.", months: "Maggio – Giugno" },
  { name: "Girasole", meaning: "Gioia, fedeltà e vitalità.", months: "Luglio" },
  { name: "Dalia", meaning: "Eleganza, creatività e legame duraturo.", months: "Agosto – Settembre" },
  { name: "Crisantemo", meaning: "Longevità, rispetto e ottimismo.", months: "Novembre" },
  { name: "Camelia", meaning: "Amore raffinato, perfezione e costanza.", months: "Inverno" },
];

export type PortfolioAlbum = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string[];
  image: string;
  galleries: {
    title: string;
    caption?: string;
    photos: { src: string; caption: string }[];
  }[];
};

export const PORTFOLIO: PortfolioAlbum[] = [
  {
    slug: "matrimoni",
    title: "Matrimoni",
    subtitle: "Non solo foto, ma storie d’amore catturate nel tempo.",
    intro: [
      "Realizza il matrimonio dei tuoi sogni a Milano e in tutta Italia con Timeless Events.",
      "Ci occupiamo di ogni dettaglio, dall’abito alla location, per un giorno perfetto. La favola ha inizio… e questa è solo la prima pagina.",
    ],
    image: "/images/couple.jpg",
    galleries: [
      {
        title: "Diana e André",
        caption: "Fotografo Angelo Maci",
        photos: [
          { src: "/images/couple.jpg", caption: "Le mani si intrecciano, le anime si riconoscono." },
          { src: "/images/hands.jpg", caption: "Mi hai guardato come se fossi l’unica al mondo." },
          { src: "/images/dress-2.jpg", caption: "La favola ha inizio… e questa è solo la prima pagina." },
          { src: "/images/car.jpg", caption: "Eleganza senza tempo su quattro ruote." },
          { src: "/images/ceremony2.jpg", caption: "Un momento di pura pace, tra emozione e respiro." },
          { src: "/images/garden.jpg", caption: "E quando il giorno si spegne, resta la magia dell’amore." },
        ],
      },
      {
        title: "Desi & Augusto",
        photos: [
          { src: "/images/bride.jpg", caption: "Mi hai reso sposa, ma prima ancora regina del tuo cuore." },
          { src: "/images/hero-2.jpg", caption: "Quando ti ho vista… ho capito che avevo già vinto." },
          { src: "/images/toast.jpg", caption: "Questa giornata è il nostro sì al futuro, alla luce, alla vita." },
          { src: "/images/hero-3.jpg", caption: "Ci siamo detti tutto, senza bisogno di parole." },
          { src: "/images/table-close.jpg", caption: "Ogni passo verso di te era una carezza al cuore." },
          { src: "/images/rings2.jpg", caption: "Con quel sì, ho promesso di proteggerti, sorriderti, amarti." },
        ],
      },
    ],
  },
  {
    slug: "location",
    title: "Location",
    subtitle: "Non solo location, ma ambienti pensati per far vivere emozioni.",
    intro: [
      "Scopri le migliori location per matrimoni, eventi aziendali e cerimonie a Milano e in tutta Italia.",
      "Collaboriamo con ville, dimore storiche e scenari internazionali. Lago di Como, giardini sul lago, Lisbona e dimore d’epoca: scegliamo l’ambientazione e la gestiamo in modo impeccabile.",
    ],
    image: "/images/villa.jpg",
    galleries: [
      {
        title: "Ville, laghi e dimore",
        photos: [
          { src: "/images/villa.jpg", caption: "Ville d’epoca e dimore storiche, selezionate per il tuo evento." },
          { src: "/images/italy-villa.jpg", caption: "Una cornice italiana, tra luce e pietra antica." },
          { src: "/images/como.jpg", caption: "Lago di Como: il palcoscenico perfetto per un giorno speciale." },
          { src: "/images/lisbon.jpg", caption: "Lisboa: luce atlantica e romanticismo senza tempo." },
          { src: "/images/ballroom.jpg", caption: "Sale da ballo, lampadari e mise en place da sogno." },
          { src: "/images/garden.jpg", caption: "Giardini affacciati sull’acqua, tra verde e blu." },
        ],
      },
    ],
  },
  {
    slug: "eventi-aziendali",
    title: "Eventi Aziendali",
    subtitle: "Eleganza e funzionalità per conferenze, gala e team building.",
    intro: [
      "Organizza eventi aziendali a Milano e in tutta Italia con Timeless Events.",
      "Dalle conferenze agli eventi di team building, rendiamo ogni occasione unica e professionale. Ogni tavolo è una tela bianca, pronta ad accogliere il cuore dell’evento.",
    ],
    image: "/images/corporate.jpg",
    galleries: [
      {
        title: "Allestimenti corporate",
        photos: [
          { src: "/images/corporate.jpg", caption: "Design e comfort si fondono per il massimo coinvolgimento." },
          { src: "/images/tables.jpg", caption: "Eleganza e funzionalità nell’allestimento perfetto." },
          { src: "/images/venue-night.jpg", caption: "Un’atmosfera raffinata, pensata per il massimo impatto." },
          { src: "/images/toast.jpg", caption: "Un setting curato nei minimi dettagli." },
          { src: "/images/ballroom-gold.jpg", caption: "Un allestimento che trasforma ogni spazio in un’esperienza." },
          { src: "/images/fine-dining.jpg", caption: "La bellezza incontra la praticità." },
        ],
      },
    ],
  },
];

export function getAlbum(slug: string) {
  return PORTFOLIO.find((p) => p.slug === slug);
}

export const FAQS = [
  {
    q: "Dove operate?",
    a: "Timeless Events ha sede a Milano e organizza matrimoni ed eventi in tutta Italia, con location anche all’estero — dal Lago di Como a Lisbona.",
  },
  {
    q: "Con quanto anticipo conviene scrivere?",
    a: "Per un matrimonio completo consigliamo 10–18 mesi. Per battesimi, compleanni o coordinamento day-of possiamo intervenire anche con tempi più stretti, in base alla disponibilità.",
  },
  {
    q: "Offrite solo organizzazione completa?",
    a: "No. Possiamo seguirvi dalla prima visione al dettaglio finale, oppure su singoli servizi: catering, fiori, abito, location, auto, musica, video e extra.",
  },
  {
    q: "Lavorate con budget diversi?",
    a: "Sì. Ascolto i vostri desideri e li traduco in un piano realistico, senza rinunciare allo stile. Il preventivo è su misura, gratuito e senza impegno.",
  },
  {
    q: "Potete occuparvi anche di catering e intolleranze?",
    a: "Certamente. Menù italiani e internazionali, buffet o servito, con attenzione a veganismo, glutine e preferenze personalizzate.",
  },
  {
    q: "Come funziona La Foresta Timeless Events?",
    a: "In collaborazione con Tree-Nation, per ogni coppia o ospite possiamo piantare alberi veri in progetti di riforestazione. Un gesto d’amore che lascia un’impronta nel tempo.",
  },
];

export const TRENDS_2026 = {
  title: "Tendenze e consigli per i matrimoni nel 2026",
  lead: "Se sogni di sposarti nel 2026, preparati a un’esperienza piena di colore, emozione e fantasia.",
  paragraphs: [
    "Arancione, rosa corallo, blu elettrico, giallo e verde smeraldo saranno protagonisti di partecipazioni, bouquet e allestimenti.",
    "Il matrimonio diventa più intimo ed esperienziale: invitati più stretti, coinvolti attivamente, coccolati con attenzioni e sorprese.",
    "Un omaggio al passato con un tocco di modernità: ispirazioni vintage anni ’80 e ’90, velluti, cristallo, stampe geometriche. Musica folk, synth pop, disco. Foto originali, da ricordare.",
    "Il giorno si racconta in più capitoli: party after party, cambio abito e location, brunch del mattino dopo. Abiti corti o midi, gonna o corsetto, libertà di essere voi.",
  ],
};

export const ABOUT = {
  headline: "Elisabete Tavares: la tua wedding planner di fiducia a Milano e non solo.",
  kicker: "La mia storia e la visione di Timeless Events",
  portrait: "/images/planner.jpg",
  paragraphs: [
    "Mi chiamo Elisabete Tavares, fondatrice di Timeless Events, un’azienda con sede a Milano, una professionista appassionata di eventi, con 14 anni di esperienza nel settore.",
    "La mia carriera è iniziata nel mondo del catering, dove ho appreso l’importanza di ogni dettaglio e la gioia di creare eventi straordinari.",
    "Dopo anni di esperienza nel settore, ho deciso di seguire la mia passione e ho frequentato un corso da wedding planner. In seguito ho approfondito le mie competenze conseguendo il diploma di tecnico esperto nell’organizzazione di eventi.",
    "È stato un periodo di crescita e cambiamento, durante il quale ho scoperto che il mio vero amore era creare matrimoni e eventi unici.",
  ],
  traits: [
    {
      title: "Dedizione unica",
      text: "Non mi allontano mai prima della conclusione. I miei clienti sono la priorità assoluta: li sostengo in ogni fase, fino all’ultimo istante. Questo impegno costante è ciò che mi rende unica nel wedding planning.",
    },
    {
      title: "Attenzione ai dettagli",
      text: "Ogni fiore, ogni tovagliolo, ogni candela conta. Amo curare ogni aspetto dell’evento per creare un’atmosfera indimenticabile.",
    },
    {
      title: "Creatività senza limiti",
      text: "Non esistono regole fisse. Sono aperta a idee innovative e personalizzate per ogni coppia.",
    },
  ],
};

export const QUOTES = [
  {
    text: "Non organizzo solo eventi, custodisco i vostri ricordi più preziosi.",
    author: "Elisabete Tavares",
  },
  {
    text: "Mi hai guardato come se fossi l’unica al mondo. E io, lo sono.",
    author: "Diana & André",
  },
  {
    text: "Quando ti ho vista… ho capito che avevo già vinto.",
    author: "Desi & Augusto",
  },
];
