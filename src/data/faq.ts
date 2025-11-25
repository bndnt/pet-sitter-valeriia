export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "p1",
    question: "Do you take care of small pets other than cats and dogs?",
    answer:
      "Yes! I care for a variety of small animals including rabbits, guinea pigs, hamsters, and more. Each pet receives individual attention tailored to their needs.",
  },
  {
    id: "p2",
    question: "Can you handle pets with medical needs or disabilities?",
    answer:
      "Absolutely. I have experience administering medications, assisting pets with mobility issues, and providing extra comfort and supervision for pets with special needs.",
  },
  {
    id: "p3",
    question: "How often will I get updates about my pet?",
    answer:
      "I provide regular updates via photos, videos, or messages. For overnight stays or longer visits, I typically send at least one update per day, or more if requested.",
  },
  {
    id: "p4",
    question: "Do you offer services for overnight pet sitting?",
    answer:
      "Yes, I can stay at your home to keep your pets company overnight, ensuring they are comfortable and safe while you are away.",
  },
  {
    id: "p5",
    question: "How do you ensure my pet's safety?",
    answer:
      "I follow all instructions you provide, use secure enclosures if needed, supervise pets at all times, and create a calm, stress-free environment to minimize any risks.",
  },
  {
    id: "p6",
    question: "Do you provide services in Montreal only?",
    answer:
      "Yes, my pet sitting services are based in Montreal and surrounding areas. Please contact me to confirm availability in your neighborhood.",
  },
  {
    id: "p7",
    question: "Can I book multiple services at once?",
    answer:
      "Absolutely! You can combine drop-in visits, dog walking, overnight stays, and even photo updates into a single booking according to your pet`s needs.",
  },
];
