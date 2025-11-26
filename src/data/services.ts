export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  background: string;
  price: string;
}
export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Drop-In Visits",
    description:
      "Short check-ins to feed, refresh water, clean litter boxes or cages, and give affection. Perfect for cats, small pets, and independent dogs.",
    icon: "/p1.svg",
    background: "/s1.svg",
    price: "$15 / hour",
  },
  {
    id: 2,
    title: "Dog Walking",
    description:
      "Daily or occasional walks adjusted to your dog’s pace and energy. Safe routes, steady movement, and friendly interaction throughout the walk.",
    icon: "/p2.svg",
    background: "/s2.svg",
    price: "$17 / hour",
  },
  {
    id: 3,
    title: "Overnight Care",
    description:
      "Overnight companionship in your home for pets needing routine, comfort, or close supervision. Great for anxious pets or those with special schedules.",
    icon: "/p3.svg",
    background: "/s3.svg",
    price: "$40 / night",
  },
  {
    id: 4,
    title: "Pet Boarding ",
    description:
      "A quiet and comfortable home space for cats and small pets like rabbits or guinea pigs. Gentle care, playtime, and a calm environment during their stay.",
    icon: "/p4.svg",
    background: "/s4.svg",
    price: "$30 / night",
  },
  {
    id: 5,
    title: "Photo Updates",
    description:
      "Regular photo and video updates so you always feel close to your pet. Stay confident and connected no matter how far you are.",
    icon: "/p5.svg",
    background: "/s1.svg",
    price: "Free",
  },
  {
    id: 6,
    title: "Special Care ",
    description:
      "Support for pets with mobility limits, anxiety, or medical routines. Patient, attentive care tailored to their comfort and individual needs.",
    icon: "/p6.svg",
    background: "/s2.svg",
    price: "$19 / hour",
  },
];
