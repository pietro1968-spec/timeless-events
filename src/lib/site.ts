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
  googleReview: "https://www.google.com/maps/place//@45.6042778,9.1471772,14z/data=!3m1!4b1!4m3!3m2!1s0x67fb5f0569c8edcd:0xd03ac7a0c0b13867!12e1?entry=ttu",
  treeNation: "https://tree-nation.com",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/servizi", label: "Servizi" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/sostenibilita", label: "SostenibilitÃ " },
] as const;

export const HERO_SLIDES = [
  "/images/home-hero-01.jpg",
  "/images/home-hero-02.jpg",
  "/images/home-hero-03.jpg",
  "/images/home-hero-04.jpg",
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
      "Ricordi di gusto che raccontano storie attraverso menÃ¹ raffinati, prodotti di altissima qualitÃ  e mise en place curate nei minimi dettagli.",
    body: [
      "Trasforma il catering in unâ€™esperienza gastronomica memorabile.",
      "Specializzati in menÃ¹ su misura, offriamo soluzioni italiane e internazionali, gestendo esigenze vegane, intolleranze o preferenze personalizzate.",
      "Se sognate un matrimonio perfetto, non potete trascurare il catering. Ãˆ lâ€™arte di trasformare il cibo in unâ€™esperienza unica, che rifletta il vostro stile, il vostro gusto e il vostro amore.",
      "Che siate amanti della cucina italiana o internazionale, che preferiate un buffet o un pranzo servito, noi sapremo accontentarvi. Consulenza gratuita e senza impegno.",
    ],
    image: "/images/buffet.jpg",
    gallery: [
      "/images/buffet.jpg",
      "/images/catering.jpg",
      "/images/fine-dining.jpg",
          ],
  },
  {
    slug: "location",
    title: "Location Esclusive",
    short: "Scopri le location",
    excerpt:
      "Selezioniamo ville dâ€™epoca, dimore storiche e location panoramiche per regalare la cornice perfetta al tuo evento speciale.",
    body: [
      "Scopri le migliori location per matrimoni, eventi aziendali e cerimonie a Milano e in tutta Italia.",
      "Timeless Events collabora con le migliori location italiane e internazionali. Che tu stia organizzando un evento formale o informale, ti aiutiamo a trovare un luogo indimenticabile per i tuoi ospiti.",
      "Lago di Como, ville toscane, giardini affacciati sullâ€™acqua, dimore storiche e scenari a Lisbona: scegliamo lâ€™ambientazione, curiamo la decorazione e gestiamo lâ€™evento in modo impeccabile.",
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
      "Consulenza dâ€™immagine su misura e selezione di atelier per scegliere lâ€™abito dei tuoi sogni con stile, armonia ed eleganza.",
    body: [
      "La seta che accarezza la pelle, il pizzo che impreziosisce il corpo: un abito da sposa Ã¨ una poesia in movimento.",
      "Soluzioni su misura, dallo stile classico a quello moderno, pensate per valorizzare ogni silhouette. Quando il sogno diventa seta e luce.",
      "Per lo sposo: lana, cashmere, classe senza tempo. Il tocco finale di un uomo sicuro di sÃ©.",
      "Non solo location e dettagli: la tua wedding planner ti guiderÃ  anche nella scelta dellâ€™abito perfetto per il tuo giorno piÃ¹ bello.",
    ],
    image: "/images/dress-2.jpg",
    gallery: [
      "/images/dress-2.jpg",
      "/images/bride.jpg",
      "/images/groom.jpg",
      "/images/ceremony2.jpg",
    ],
  },
];

export const SERVICES: Service[] = [
  ...FEATURED_SERVICES.filter((s) => s.slug !== "location"),
  {
    slug: "cerimonie",
    title: "Allestimenti Cerimonia",
    short: "Scopri",
    excerpt:
      "Creiamo lâ€™atmosfera perfetta per la tua cerimonia, ambienti curati nei minimi particolari.",
    body: [
      "Dalla scenografia floreale alla logistica, ogni momento viene orchestrato perchÃ© tu viva emozioni autentiche e senza stress.",
      "Allestimenti cerimonia a Milano e in tutta Italia, pensati per ambienti sacri, civili e simbolici.",
    ],
    image: "/images/garden.jpg",
    gallery: [
      "/images/garden.jpg",
      "/images/ceremony2.jpg",
      "/images/bouquet.jpg",
      "/images/peony.jpg",
    ],
  },
  {
    slug: "fiori",
    title: "Fiori & Floral Styling",
    short: "Il linguaggio dei fiori",
    excerpt:
      "I nostri floral stylist trasformano fiori e piante in opere dâ€™arte che raccontano la vostra storia.",
    body: [
      "Location, bouquet e scenografie realizzate su misura, per un effetto estetico e sensoriale unico.",
      "Ogni fiore racconta una storia di bellezza, simbolo e significato. Scegli il fiore delle tue nozze e il mese del tuo matrimonio: noi ti guidiamo nel linguaggio segreto dei fiori.",
      "I fiori trasformano lâ€™atmosfera, parlano al cuore e rendono ogni momento unico e indimenticabile.",
    ],
    image: "/images/bouquet.jpg",
    gallery: [
      "/images/bouquet.jpg",
      "/images/peony.jpg",
      "/images/garden.jpg",
      "/images/hero-1.jpg",
    ],
  },
  {
    slug: "auto",
    title: "Auto di Lusso",
    short: "Scopri",
    excerpt:
      "Auto da sogno, eleganza senza tempo e unâ€™entrata che nessuno dimenticherÃ .",
    body: [
      "Noleggio auto di lusso per matrimoni ed eventi. Lascia che ci occupiamo di tutto.",
      "Unâ€™icona dâ€™altri tempi, con fascino retrÃ² e dettagli curati, puÃ² aggiungere un tocco cinematografico al grande giorno â€” come per Diana & AndrÃ©, trasformando ogni spostamento in un momento da ricordare.",
      "Servizio soggetto a disponibilitÃ  e logistica del percorso.",
    ],
    image: "/images/car.jpg",
    gallery: ["/images/car.jpg", "/images/couple.jpg"],
  },
  {
    slug: "bellezza",
    title: "Make-up & Bellezza",
    short: "Scopri",
    excerpt:
      "Look luminoso e naturale per il tuo grande giorno, con durata, eleganza e comfort.",
    body: [
      "I nostri make-up artist e hair stylist professionisti valorizzano i tuoi tratti, assicurando un make-up che resiste alle emozioni, alle foto e al ballo.",
    ],
    image: "/images/makeup.jpg",
  },
  {
    slug: "musica",
    title: "Musica & DJ",
    short: "Scopri",
    excerpt:
      "Gruppi live, DJ professionisti, musicisti classici o band moderne: ogni evento ha la sua colonna sonora.",
    body: [
      "Accendi la festa con performance musicali su misura, per emozionare e coinvolgere i tuoi ospiti.",
      "La disponibilitÃ  di alcuni gruppi o artisti puÃ² variare in base alla data, alla location e alla logistica tecnica.",
    ],
    image: "/images/music.jpg",
  },
  {
    slug: "video",
    title: "Video & Storytelling",
    short: "Scopri",
    excerpt:
      "I nostri videomaker catturano lâ€™essenza del tuo evento in immagini emozionali.",
    body: [
      "Montaggi creativi, storytelling su misura e riprese professionali per rivivere ogni attimo con emozione.",
    ],
    image: "/images/video.jpg",
  },
  {
    slug: "battesimi",
    title: "Battesimi",
    short: "Scopri",
    excerpt:
      "Celebra il battesimo del tuo bambino con raffinatezza ed emozione.",
    body: [
      "Dallâ€™allestimento alla torta, ogni dettaglio Ã¨ curato per creare un giorno unico, in armonia con la tua visione e lo stile del tuo evento.",
    ],
    image: "/images/kids.jpg",
  },
  {
    slug: "comunioni",
    title: "Prime Comunioni",
    short: "Scopri",
    excerpt:
      "Rendi speciale il giorno della Prima Comunione del tuo bambino.",
    body: [
      "Dal coordinato allâ€™intrattenimento, progettiamo cerimonie ed eventi eleganti, adatti alle famiglie che cercano emozione e semplicitÃ .",
    ],
    image: "/images/ceremony2.jpg",
  },
  {
    slug: "compleanni",
    title: "Compleanni",
    short: "Scopri",
    excerpt:
      "Festeggia con stile, divertimento e originalitÃ .",
    body: [
      "Progettiamo eventi tematici, allestimenti personalizzati e intrattenimento su misura per adulti e bambini, con cura su ogni dettaglio.",
    ],
    image: "/images/party.jpg",
  },
  {
    slug: "generazione-z",
    title: "Generazione Z",
    short: "Scopri",
    excerpt:
      "Celebrazioni libere, autentiche e contemporanee: il nostro approccio Gen Z rompe gli schemi.",
    body: [
      "Dimentica gli schemi, le regole imposte e i soliti riti. Il vostro matrimonio non deve assomigliare a quello di nessun altro.",
      "Team creativi, scelte fuori dagli stereotipi, esperienza personalizzata e piena libertÃ  espressiva.",
    ],
    image: "/images/toast.jpg",
  },
  {
    slug: "budget",
    title: "Budget & Coordinamento",
    short: "Scopri",
    excerpt:
      "Pianificazione del budget, selezione fornitori e coordinamento end-to-end.",
    body: [
      "Dalla prima visione al dettaglio finale, curo ogni aspetto per regalarvi un giorno senza pensieri.",
      "Ascolto i vostri desideri per tradurli in realtÃ , rispettando prioritÃ  e investimento, senza rinunciare allo stile.",
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
      "Ogni richiesta diventa realtÃ  grazie alle nostre soluzioni personalizzate.",
    ],
    image: "/images/cake2.jpg",
    extras: [
      {
        title: "Baby Sitter",
        text: "Per la serenitÃ  degli adulti e il sorriso dei piÃ¹ piccoli. Un servizio attento e affidabile, con baby sitter qualificate.",
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
        title: "Fuochi dâ€™artificio",
        text: "Spettacoli pirotecnici personalizzati. Come per Desi e Augusto, una scintilla in piÃ¹ per sigillare il giorno speciale.",
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
        text: "Un gesto delicato, simbolo dâ€™amore, libertÃ  e rinascita. Solo con operatori certificati e in contesti autorizzati.",
      },
      {
        title: "Spettacoli dal vivo",
        text: "Dai ballerini agli artisti di luce, ogni performance rende unico il tuo evento.",
      },
      {
        title: "Lanterne & Bolle",
        text: "Leggerezza, luce e poesia nellâ€™aria. Disponibili solo in aree autorizzate e con meteo favorevole.",
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
        text: "Messaggi, dediche e immagini raccolte in tempo reale o dopo lâ€™evento.",
      },
      {
        title: "Caricaturista o ritrattista",
        text: "Ritratti o caricature dal vivo: un ricordo unico da portare a casa con il sorriso.",
      },
      {
        title: "Albero virtuale",
        text: "Per ogni coppia o ospite, un albero piantato in collaborazione con Tree-Nation. Un gesto dâ€™amore che lascia unâ€™impronta nel tempo.",
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
  { name: "Amarilli", image: "/images/fiori/amarilli.jpg", months: "Inverno â€“ Primavera", meaning: "Eleganza, forza e bellezza che conquista lo sguardo." },
  { name: "Anemone", image: "/images/fiori/anemone.jpg", months: "Inverno â€“ Primavera", meaning: "Rinascita, nuovi inizi e sentimento sincero." },
  { name: "Anemoni", image: "/images/fiori/anemoni.jpg", months: "Inverno â€“ Primavera", meaning: "Delicatezza, attesa e bellezza spontanea." },
  { name: "Anthurium", image: "/images/fiori/anthurium.jpg", months: "Tutto lâ€™anno", meaning: "Passione, ospitalitÃ  e carattere contemporaneo." },
  { name: "Astilbe", image: "/images/fiori/astilbe.jpg", months: "Primavera â€“ Estate", meaning: "Grazia, delicatezza e leggerezza romantica." },
  { name: "Aster", image: "/images/fiori/astro.jpg", months: "Estate â€“ Autunno", meaning: "Eleganza, pazienza e desiderio di custodire un legame." },
  { name: "Bocca di Leone", image: "/images/fiori/bocca-di-leone.jpg", months: "Primavera â€“ Estate", meaning: "Forza, grazia e personalitÃ ." },
  { name: "Calla", image: "/images/fiori/calle.jpg", months: "Primavera â€“ Estate", meaning: "Purezza, eleganza e raffinatezza essenziale." },
  { name: "Camelia", image: "/images/fiori/camelia.jpg", months: "Inverno â€“ Primavera", meaning: "Amore raffinato, perfezione e costanza." },
  { name: "Ciclamino", image: "/images/fiori/ciclamini.jpg", months: "Autunno â€“ Inverno", meaning: "Tenerezza, sinceritÃ  e affetto discreto." },
  { name: "Crisantemo", image: "/images/fiori/crisantemo.jpg", months: "Autunno", meaning: "LongevitÃƒ , rispetto e ottimismo." },
  { name: "Dalia", image: "/images/fiori/dalia.jpg", months: "Estate â€“ Autunno", meaning: "Eleganza, creativitÃ  e legame duraturo." },
  { name: "Delphinium", image: "/images/fiori/delphinium.jpg", months: "Estate", meaning: "Armonia, leggerezza e apertura verso il futuro." },
  { name: "Elleboro", image: "/images/fiori/ellebori.jpg", months: "Inverno", meaning: "Resilienza, protezione e bellezza silenziosa." },
  { name: "Fiordaliso", image: "/images/fiori/fiordaliso.jpg", months: "Primavera â€“ Estate", meaning: "SemplicitÃ , delicatezza e fedeltÃ ." },
  { name: "Fiori di ciliegio", image: "/images/fiori/fiori-di-ciliegio.jpg", months: "Primavera", meaning: "Rinascita, bellezza effimera e nuovi inizi." },
  { name: "Fresia", image: "/images/fiori/fresia.jpg", months: "Inverno â€“ Primavera", meaning: "Grazia, amicizia e profumo delicato." },
  { name: "Gardenia", image: "/images/fiori/gardenie.jpg", months: "Primavera â€“ Estate", meaning: "Amore puro, grazia e serenitÃ ." },
  { name: "Garofano", image: "/images/fiori/garofano.jpg", months: "Primavera â€“ Estate", meaning: "Affetto, devozione e amore duraturo." },
  { name: "Gelsomino", image: "/images/fiori/gelsomino.jpg", months: "Primavera â€“ Estate", meaning: "Amore, sensualitÃ  e delicatezza profumata." },
  { name: "Gerbera", image: "/images/fiori/gerbera.jpg", months: "Primavera â€“ Autunno", meaning: "Gioia, energia e spontaneitÃ ." },
  { name: "Gerbere", image: "/images/fiori/gerbere.jpg", months: "Primavera â€“ Autunno", meaning: "Allegria, vitalitÃ  e colore." },
  { name: "Giacinto", image: "/images/fiori/giacinto.jpg", months: "Inverno â€“ Primavera", meaning: "Costanza, bellezza e affetto sincero." },
  { name: "Giglio", image: "/images/fiori/giglio.jpg", months: "Primavera â€“ Estate", meaning: "Purezza, maestÃ  e rinnovamento." },
  { name: "Girasole", image: "/images/fiori/girasole.jpg", months: "Estate", meaning: "Gioia, fedeltÃ  e vitalitÃ ." },
  { name: "Gladiolo", image: "/images/fiori/gladiolo.jpg", months: "Estate", meaning: "Forza, sinceritÃ  e carattere." },
  { name: "Gypsophila", image: "/images/fiori/gypsophila.jpg", months: "Primavera â€“ Estate", meaning: "Purezza, delicatezza e amore eterno." },
  { name: "Iris", image: "/images/fiori/iris.jpg", months: "Primavera â€“ Estate", meaning: "Saggezza, fede e nobiltÃ  dâ€™animo." },
  { name: "Lavanda", image: "/images/fiori/lavanda.jpg", months: "Estate", meaning: "SerenitÃ , armonia e memoria profumata." },
  { name: "Lilla", image: "/images/fiori/lilla.jpg", months: "Primavera", meaning: "Primo amore, nostalgia e delicatezza." },
  { name: "Lisianthus", image: "/images/fiori/lisianthus.jpg", months: "Estate â€“ Autunno", meaning: "Eleganza, apprezzamento e sensibilitÃ ." },
  { name: "Margherita", image: "/images/fiori/margherita.jpg", months: "Primavera â€“ Estate", meaning: "SemplicitÃ , purezza e gioia autentica." },
  { name: "Mimosa", image: "/images/fiori/mimosa.jpg", months: "Inverno â€“ Primavera", meaning: "SolaritÃ , sensibilitÃ  e forza gentile." },
  { name: "Mughetto", image: "/images/fiori/mughetto.jpg", months: "Primavera", meaning: "Purezza, felicitÃ  e rinnovamento." },
  { name: "Narciso", image: "/images/fiori/narciso.jpg", months: "Inverno â€“ Primavera", meaning: "Rinascita, luce e nuova stagione." },
  { name: "Orchidea", image: "/images/fiori/orchidea.jpg", months: "Tutto lâ€™anno", meaning: "Raffinatezza, bellezza rara e sensualitÃ ." },
  { name: "Ortensia", image: "/images/fiori/ortensie.jpg", months: "Estate", meaning: "Abbondanza, gratitudine e sentimento profondo." },
  { name: "Papavero", image: "/images/fiori/papaveri.jpg", months: "Primavera â€“ Estate", meaning: "LibertÃ , delicatezza e bellezza spontanea." },
  { name: "Peonia", image: "/images/fiori/peonia.jpg", months: "Primavera â€“ Inizio Estate", meaning: "ProsperitÃ , romanticismo e amore pieno." },
  { name: "Pisello odoroso", image: "/images/fiori/pisello-odoroso.jpg", months: "Primavera â€“ Estate", meaning: "Grazia, delicatezza e piacere di stare insieme." },
  { name: "Ranuncolo", image: "/images/fiori/ranuncolo.jpg", months: "Inverno â€“ Primavera", meaning: "Fascino, grazia e amore sincero." },
  { name: "Ranuncoli", image: "/images/fiori/ranuncoli.jpg", months: "Inverno â€“ Primavera", meaning: "Leggerezza, colore e romanticismo." },
  { name: "Rosa", image: "/images/fiori/rosa.jpg", months: "Tutto lâ€™anno", meaning: "Amore, bellezza e promessa che sboccia ogni giorno." },
  { name: "Stella di Natale", image: "/images/fiori/stella-di-natale.jpg", months: "Inverno", meaning: "Calore, festa e atmosfera luminosa." },
  { name: "Tulipano", image: "/images/fiori/tulipano.jpg", months: "Primavera", meaning: "Amore sincero, eleganza e rinnovamento." },
  { name: "Viola", image: "/images/fiori/viola.jpg", months: "Inverno â€“ Primavera", meaning: "Modestia, sensibilitÃ  e affetto discreto." },
  { name: "Vischio", image: "/images/fiori/vischio.jpg", months: "Inverno", meaning: "Fortuna, protezione e buon auspicio." },
  { name: "Zinnia", image: "/images/fiori/zinnia.jpg", months: "Estate â€“ Autunno", meaning: "Affetto duraturo, vivacitÃ  e memoria felice." },
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
    subtitle: "Non solo foto, ma storie dâ€™amore catturate nel tempo.",
    intro: [
      "Realizza il matrimonio dei tuoi sogni a Milano e in tutta Italia con Timeless Events.",
      "Ci occupiamo di ogni dettaglio, dallâ€™abito alla location, per un giorno perfetto. La favola ha inizioâ€¦ e questa Ã¨ solo la prima pagina.",
    ],
    image: "/images/diana-andre-01.jpg",
    galleries: [
      {
        title: "Diana e AndrÃ©",
        caption: "Fotografo Angelo Maci",
        photos: [
          {
            src: "/images/diana-andre-01.jpg",
            caption: "Le mani si intrecciano, le anime si riconoscono.",
          },
          {
            src: "/images/diana-andre-02.jpg",
            caption: "Mi hai guardato come se fossi lâ€™unica al mondo.",
          },
          {
            src: "/images/diana-andre-03.jpg",
            caption: "La favola ha inizioâ€¦ e questa Ã¨ solo la prima pagina.",
          },
          {
            src: "/images/diana-andre-04.jpg",
            caption: "Eleganza senza tempo su quattro ruote.",
          },
          {
            src: "/images/diana-andre-05.jpg",
            caption: "Un momento di pura pace, tra emozione e respiro.",
          },
          {
            src: "/images/diana-andre-06.jpg",
            caption: "E quando il giorno si spegne, resta la magia dellâ€™amore.",
          },
        ],
      },
      {
        title: "Desi & Augusto",
        photos: [
          {
            src: "/images/desi-augusto-01.jpg",
            caption: "Mi hai reso sposa, ma prima ancora regina del tuo cuore.",
          },
          {
            src: "/images/desi-augusto-02.jpg",
            caption: "Quando ti ho vistaâ€¦ ho capito che avevo giÃ  vinto.",
          },
          {
            src: "/images/desi-augusto-03.jpg",
            caption: "Questa giornata Ã¨ il nostro sÃ¬ al futuro, alla luce, alla vita.",
          },
          {
            src: "/images/desi-augusto-04.jpg",
            caption: "Ci siamo detti tutto, senza bisogno di parole.",
          },
          {
            src: "/images/desi-augusto-05.jpg",
            caption: "Ogni passo verso di te era una carezza al cuore.",
          },
          {
            src: "/images/desi-augusto-06.jpg",
            caption: "Con quel sÃ¬, ho promesso di proteggerti, sorriderti, amarti.",
          },
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
      "Collaboriamo con ville, dimore storiche e scenari internazionali. Lago di Como, giardini sul lago, Lisbona e dimore dâ€™epoca: scegliamo lâ€™ambientazione e la gestiamo in modo impeccabile.",
    ],
    image: "/images/villa.jpg",
    galleries: [
      {
        title: "Ville, laghi e dimore",
        photos: [
          {
            src: "/images/villa.jpg",
            caption: "Ville dâ€™epoca e dimore storiche, selezionate per il tuo evento.",
          },
          {
            src: "/images/italy-villa.jpg",
            caption: "Una cornice italiana, tra luce e pietra antica.",
          },
          {
            src: "/images/como.jpg",
            caption: "Lago di Como: il palcoscenico perfetto per un giorno speciale.",
          },
          {
            src: "/images/lisbon.jpg",
            caption: "Lisboa: luce atlantica e romanticismo senza tempo.",
          },
          {
            src: "/images/ballroom.jpg",
            caption: "Sale da ballo, lampadari e mise en place da sogno.",
          },
          {
            src: "/images/garden.jpg",
            caption: "Giardini affacciati sullâ€™acqua, tra verde e blu.",
          },
        ],
      },
    ],
  },
  {
    slug: "eventi-aziendali",
    title: "Eventi Aziendali",
    subtitle: "Eleganza e funzionalitÃ  per conferenze, gala e team building.",
    intro: [
      "Organizza eventi aziendali a Milano e in tutta Italia con Timeless Events.",
      "Dalle conferenze agli eventi di team building, rendiamo ogni occasione unica e professionale. Ogni tavolo Ã¨ una tela bianca, pronta ad accogliere il cuore dellâ€™evento.",
    ],
    image: "/images/corporate.jpg",
    galleries: [
      {
        title: "Allestimenti corporate",
        photos: [
          {
            src: "/images/corporate.jpg",
            caption: "Design e comfort si fondono per il massimo coinvolgimento.",
          },
          {
            src: "/images/tables.jpg",
            caption: "Eleganza e funzionalitÃ  nellâ€™allestimento perfetto.",
          },
          {
            src: "/images/venue-night.jpg",
            caption: "Unâ€™atmosfera raffinata, pensata per il massimo impatto.",
          },
          {
            src: "/images/toast.jpg",
            caption: "Un setting curato nei minimi dettagli.",
          },
          {
            src: "/images/ballroom-gold.jpg",
            caption: "Un allestimento che trasforma ogni spazio in unâ€™esperienza.",
          },
          {
            src: "/images/fine-dining.jpg",
            caption: "La bellezza incontra la praticitÃ .",
          },
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
    a: "Timeless Events ha sede a Milano e organizza matrimoni ed eventi in tutta Italia, con location anche allâ€™estero â€” dal Lago di Como a Lisbona.",
  },
  {
    q: "Con quanto anticipo conviene scrivere?",
    a: "Per un matrimonio completo consigliamo 10â€“18 mesi. Per battesimi, compleanni o coordinamento day-of possiamo intervenire anche con tempi piÃ¹ stretti, in base alla disponibilitÃ .",
  },
  {
    q: "Offrite solo organizzazione completa?",
    a: "No. Possiamo seguirvi dalla prima visione al dettaglio finale, oppure su singoli servizi: catering, fiori, abito, location, auto, musica, video e extra.",
  },
  {
    q: "Lavorate con budget diversi?",
    a: "SÃ¬. Ascolto i vostri desideri e li traduco in un piano realistico, senza rinunciare allo stile. Il preventivo Ã¨ su misura, gratuito e senza impegno.",
  },
  {
    q: "Potete occuparvi anche di catering e intolleranze?",
    a: "Certamente. MenÃ¹ italiani e internazionali, buffet o servito, con attenzione a veganismo, glutine e preferenze personalizzate.",
  },
  {
    q: "Come funziona La Foresta Timeless Events?",
    a: "In collaborazione con Tree-Nation, per ogni coppia o ospite possiamo piantare alberi veri in progetti di riforestazione. Un gesto dâ€™amore che lascia unâ€™impronta nel tempo.",
  },
];

export const TRENDS_2026 = {
  title: "Tendenze e consigli per i matrimoni nel 2026",
  lead: "Se sogni di sposarti nel 2026, preparati a unâ€™esperienza piena di colore, emozione e fantasia.",
  paragraphs: [
    "Arancione, rosa corallo, blu elettrico, giallo e verde smeraldo saranno protagonisti di partecipazioni, bouquet e allestimenti.",
    "Il matrimonio diventa piÃ¹ intimo ed esperienziale: invitati piÃ¹ stretti, coinvolti attivamente, coccolati con attenzioni e sorprese.",
    "Un omaggio al passato con un tocco di modernitÃ : ispirazioni vintage anni â€™80 e â€™90, velluti, cristallo, stampe geometriche. Musica folk, synth pop, disco. Foto originali, da ricordare.",
    "Il giorno si racconta in piÃ¹ capitoli: party after party, cambio abito e location, brunch del mattino dopo. Abiti corti o midi, gonna o corsetto, libertÃ  di essere voi.",
  ],
};

export const ABOUT = {
  headline: "La tua wedding planner di fiducia.",
  kicker: "La mia storia e la visione di Timeless Events",
  portrait: "/images/fondatrice.jpg",
  paragraphs: [
    "Mi chiamo Elisabete Tavares, fondatrice di Timeless Events, unâ€™azienda con sede a Milano, una professionista appassionata di eventi, con 14 anni di esperienza nel settore.",
    "La mia carriera Ã¨ iniziata nel mondo del catering, dove ho appreso lâ€™importanza di ogni dettaglio e la gioia di creare eventi straordinari.",
    "Dopo anni di esperienza nel settore, ho deciso di seguire la mia passione e ho frequentato un corso da wedding planner. In seguito ho approfondito le mie competenze conseguendo il diploma di tecnico esperto nellâ€™organizzazione di eventi.",
    "Ãˆ stato un periodo di crescita e cambiamento, durante il quale ho scoperto che il mio vero amore era creare matrimoni e eventi unici.",
  ],
  traits: [
    {
      title: "Dedizione unica",
      text: "Non mi allontano mai prima della conclusione. I miei clienti sono la prioritÃ  assoluta: li sostengo in ogni fase, fino allâ€™ultimo istante. Questo impegno costante Ã¨ ciÃ² che mi rende unica nel wedding planning.",
    },
    {
      title: "Attenzione ai dettagli",
      text: "Ogni fiore, ogni tovagliolo, ogni candela conta. Amo curare ogni aspetto dellâ€™evento per creare unâ€™atmosfera indimenticabile.",
    },
    {
      title: "CreativitÃ  senza limiti",
      text: "Non esistono regole fisse. Sono aperta a idee innovative e personalizzate per ogni coppia.",
    },
  ],
};

export const QUOTES = [
  {
    text: "Non organizzo solo eventi, custodisco i vostri ricordi piÃ¹ preziosi.",
    author: "Elisabete Tavares",
    event: "Fondatrice Timeless Events",
    stars: 5,
  },
  {
    text: "Mi hai guardato come se fossi lâ€™unica al mondo. Elisabete ha curato ogni dettaglio rendendo la nostra giornata una vera favola.",
    author: "Diana & AndrÃ©",
    event: "Matrimonio",
    stars: 5,
  },
  {
    text: "Quando ti ho vistaâ€¦ ho capito che avevo giÃ  vinto. Un'organizzazione impeccabile dall'inizio alla fine.",
    author: "Desi & Augusto",
    event: "Matrimonio",
    stars: 5,
  },
];

