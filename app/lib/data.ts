export const CONFIG = {
  name: "Il Gallo",
  tagline: "Osteria • Cucina italiana • Carne alla brace",
  description:
    "Un'osteria dove la qualità della materia prima e il calore dell'ospitalità si incontrano. Un'esperienza elegante e conviviale, nel cuore di Stradella.",
  phone: "0383123456",
  phoneFormatted: "0383 123456",
  address: "Via Parea, 3",
  city: "Stradella (PV)",
  mapLink: "https://www.google.com/maps?q=Via+Parea+3+Stradella",
  googleRating: "4.5",
  googleReviews: 268,
  openingHours: [
    { day: "Lunedì", lunch: "12:00–14:00", dinner: "19:30–22:00" },
    { day: "Martedì", lunch: "Chiuso", dinner: "Chiuso" },
    { day: "Mercoledì", lunch: "12:00–14:00", dinner: "19:30–22:00" },
    { day: "Giovedì", lunch: "12:00–14:00", dinner: "19:30–22:00" },
    { day: "Venerdì", lunch: "12:00–14:00", dinner: "19:30–22:00" },
    { day: "Sabato", lunch: "12:00–14:00", dinner: "19:30–22:00" },
    { day: "Domenica", lunch: "12:00–14:00", dinner: "19:30–22:00" },
  ],
};

export const MENU_ITEMS = [
  {
    id: "antipasti",
    title: "Antipasti",
    icon: "🧀",
    items: [
      { name: "Selezione di salumi e formaggi", desc: "Misto di salumi tipici e formaggi stagionati", price: "€14" },
      { name: "Crostini misti", desc: "Crostini con fegatini, funghi e pomodoro", price: "€10" },
      { name: "Carpaccio di manzo", desc: "Con rucola, grana e scaglie di tartufo", price: "€16" },
    ],
  },
  {
    id: "primi",
    title: "Primi Piatti",
    icon: "🍝",
    items: [
      { name: "Ravioli del Gallo", desc: "Ravioli ripieni di ricotta e spinaci, burro e salvia", price: "€15" },
      { name: "Pappardelle al cinghiale", desc: "Pasta fresca con ragù di cinghiale", price: "€17" },
      { name: "Tagliatelle al tartufo", desc: "Tagliatelle fresche, tartufo nero e burro fuso", price: "€20" },
    ],
  },
  {
    id: "secondi",
    title: "Secondi e Grigliate",
    icon: "🥩",
    items: [
      { name: "Fiorentina alla brace", desc: "Bistecca di manzo Chianina, cotta a legna", price: "€35" },
      { name: "Ossobuco", desc: "Ossobuco di vitello, gremolada e risotto", price: "€22" },
      { name: "Grigliata mista di carne", desc: "Tagli di manzo, maiale e salsiccia", price: "€28" },
    ],
  },
];

export const REVIEWS = [
  {
    name: "Alessandro Maggi",
    date: "2 mesi fa",
    rating: 5,
    text: "Ottimo trovato benissimo. Fiorentina e un Montefalco riserva 2021: tutto Ottimo. Anche il dolce pera al vino rosso con gelato.",
  },
  {
    name: "Fabio Costaldi",
    date: "4 mesi fa",
    rating: 5,
    text: "Location molto carina e curata. Cibo di alta qualità. Buon rapporto qualità/prezzo. Esperienza assolutamente da ripetere.",
  },
  {
    name: "Angelo Francione",
    date: "8 anni fa",
    rating: 5,
    text: "Cucina italiana di livello, servizio attento e atmosfera elegante. Un ristorante che merita assolutamente una visita a Stradella.",
  },
];
