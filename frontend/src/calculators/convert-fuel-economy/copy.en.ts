import type { CalculatorCopy } from '../../lib/platform/types';

export const convertFuelEconomyCopyEn: CalculatorCopy = {
  name: "Fuel economy converter",
  slug: "fuel-economy-converter",
  shortDescription: "Convert fuel economy between L/100 km, km/L and miles per gallon.",
  longDescription:
    "Converts fuel economy between four units. What makes this one different is that the relationship is INVERSE: the more litres per hundred kilometres, the fewer miles per gallon, so an ordinary multiplier will not do — doubling the litres halves the distance per gallon. Everything is routed through L/100 km rather than a table of pairs: with four units such a table would cost sixteen entries, any of which could drift out of step with the rest. The US and imperial gallons differ by almost a quarter, so American and British mpg appear as separate rows — confusing them is a 20% error.",
  seoTitle: "Fuel economy converter: L/100 km, km/L and mpg",
  seoDescription: "Convert fuel economy between litres per 100 km, kilometres per litre and miles per gallon in both US and UK measure.",
  h1: "Fuel economy converter",
  keywords: ["fuel economy converter", "l/100km to mpg", "mpg to litres", "fuel consumption converter"],
  howToUse: [
    "Enter the consumption figure.",
    "Choose the unit it is given in.",
    "Choose the unit you want.",
    "The other three are shown alongside for comparison.",
  ],
  howItWorks:
    "Every unit is routed through L/100 km. Kilometres per litre are inversely related: 100 ÷ value. Miles per gallon convert as 100 × gallon volume ÷ (value × 1.609344). A US gallon is 3.785411784 L and an imperial gallon 4.54609 L.",
  example: "A consumption of 8 L/100 km is 12.5 km/L, 29.402 mpg (US) and 35.31 mpg (UK).",
  faq: [
    { q: "Why can't I just multiply by a factor?", a: "Because the relationship is inverse rather than proportional. Litres per hundred kilometres rise as miles per gallon fall, so the conversion goes through a division and no constant multiplier between them exists." },
    { q: "How do US and UK mpg differ?", a: "By the size of the gallon: the American one is 3.785 L and the imperial 4.546 L. That is nearly a quarter, so the same car «does» 30 mpg in the US and 36 mpg in Britain." },
    { q: "Which unit is used where?", a: "Litres per 100 km are standard in continental Europe, kilometres per litre in parts of Asia and Latin America, and miles per gallon in the US and the UK." },
    { q: "Is a lower number better or worse?", a: "It depends on the unit, and that is the usual source of confusion. For litres per 100 km lower is better; for kilometres per litre and miles per gallon higher is better." },
    { q: "Why does going from 10 to 9 L/100 km save more than 6 to 5?", a: "Because of that inverse relationship: an equal step in litres yields a different fuel saving in mpg. It is also why improving a thirsty car pays back faster than the same improvement on an economical one." },
  ],
};
