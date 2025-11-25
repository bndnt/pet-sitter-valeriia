export interface Testimonial {
  id: number;
  name: string;
  review: string;
  location: string; // City, Province
}

export const feedbacks: Testimonial[] = [
  {
    id: 1,
    name: "Émilie Bouchard",
    review:
      "Service exceptionnel! Mon chat était détendu et heureux à mon retour. Je recommande vivement!",
    location: "Montréal, QC",
  },
  {
    id: 2,
    name: "Patrick Gagnon",
    review:
      "Très professionnelle et attentionnée. Mon chien a adoré les promenades!",
    location: "Laval, QC",
  },
  {
    id: 3,
    name: "Olena Koval",
    review:
      "Amazing service! I'm from Ukraine and new to Canada — Valeriia made my cat feel safe and loved.",
    location: "Montréal, QC",
  },
  {
    id: 4,
    name: "Ihor Petrenko",
    review:
      "Very reliable and kind. My dog instantly trusted her. Highly recommended!",
    location: "Brossard, QC",
  },
  {
    id: 5,
    name: "Jessica Carter",
    review:
      "My two rabbits were so well cared for! Daily updates helped me relax while traveling.",
    location: "Montréal, QC",
  },
  {
    id: 6,
    name: "Michael Thompson",
    review:
      "Professional, punctual, and very sweet with animals. Excellent pet sitting service!",
    location: "Westmount, QC",
  },
  {
    id: 7,
    name: "Sofiia Melnyk",
    review:
      "Valeriia took great care of my elderly cat. Thank you for your patience and kindness!",
    location: "Montréal, QC",
  },
  {
    id: 8,
    name: "Yurii Bondar",
    review:
      "Great communication, daily pictures, and true care for animals. Highly recommended!",
    location: "Québec City, QC",
  },
  {
    id: 9,
    name: "Camille Tremblay",
    review:
      "J’ai été impressionnée par son professionnalisme. Mon chien était entre de très bonnes mains!",
    location: "Longueuil, QC",
  },
  {
    id: 10,
    name: "Laurent Deschamps",
    review:
      "Service impeccable! Je ferai appel à elle encore pour mes prochains voyages.",
    location: "Gatineau, QC",
  },
  {
    id: 11,
    name: "Nadiia Shevchuk",

    review: "My dog has anxiety and she handled him perfectly. Truly grateful!",
    location: "Montréal, QC",
  },
  {
    id: 12,
    name: "Alexandre Lavoie",

    review:
      "Très bonne expérience! Mon chat a reçu beaucoup d’attention et d’amour.",
    location: "Terrebonne, QC",
  },
];
