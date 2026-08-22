import type { CalculatorCopy } from '../../lib/platform/types';

export const numberScaleNamesCopyEn: CalculatorCopy = {
  name: "Lakh and crore converter",
  slug: "lakh-crore-converter",
  shortDescription: "Convert between lakh, crore and the familiar thousands and millions.",
  longDescription:
    "The South Asian system does not count in threes: after the thousand comes the lakh, a hundred thousand, and after that the crore, ten million. So two crore is not two million but twenty, and 1,00,00,000 groups its digits differently from the familiar 10,000,000. The converter works both ways and shows the quantity in units, in lakh and in crore at once, so the order of magnitude is visible whole.",
  seoTitle: "Lakh and crore to million — number scale converter",
  seoDescription: "Convert lakh and crore into thousands, millions and billions and back, with the value shown in three scales at once.",
  h1: "Lakh and crore converter",
  keywords: ["lakh to million", "crore converter", "indian number system", "lakh crore calculator"],
  howToUse: [
    "Enter the number and pick the scale it is written in.",
    "Pick the scale you want it converted to.",
    "The units, lakh and crore rows show the same quantity three ways at once.",
    "Very large and very small results are shown in exponent notation.",
  ],
  howItWorks: "Each scale is a multiplier over the unit: thousand 10³, lakh 10⁵, million 10⁶, crore 10⁷, billion 10⁹.",
  example: "25 lakh is 2.5 million, that is 2,500,000.",
  faq: [
    { q: "How much is one crore?", a: "Ten million. The crore follows the lakh, which is a hundred thousand, so one crore holds exactly a hundred lakh." },
    { q: "Why are the digits grouped differently?", a: "Because after the first group of three the digits go in pairs: 1,00,00,000 is one crore. Western notation groups everything in threes." },
    { q: "Where are these names used?", a: "In India, Pakistan, Bangladesh, Nepal and Sri Lanka — in news, property prices and financial reports. Meeting them in a text, it is easy to be out by an order of magnitude." },
    { q: "Why does one unit in lakh show an exponent?", a: "One unit is 0.00001 lakh, and the platform switches to exponent notation below 10⁻⁴ so that the value does not round away to zero." },
  ],
};
