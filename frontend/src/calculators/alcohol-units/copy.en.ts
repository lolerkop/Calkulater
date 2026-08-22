import type { CalculatorCopy } from '../../lib/platform/types';

export const alcoholUnitsCopyEn: CalculatorCopy = {
  name: "Alcohol units calculator",
  slug: "alcohol-units",
  shortDescription: "How much pure alcohol and how many standard units a serving holds.",
  longDescription:
    "Converts a serving of a drink into pure alcohol and into standard units. The unit definition is entered by hand because it differs by country: ten grams in the UK and Australia, fourteen in the US, twelve in France — hard-coding one would pass a local convention off as physics. This counts what was in the glass, not how drunk anyone is: blood alcohol concentration depends on body mass, sex, drinking pace and what is in the stomach, and none of those enter here.",
  seoTitle: "Alcohol units calculator — standard units and pure alcohol",
  seoDescription: "Calculate how much pure alcohol and how many standard units a drink contains from its volume and strength.",
  h1: "Alcohol units calculator",
  keywords: ["alcohol units calculator", "standard drink calculator", "pure alcohol calculator", "units in a glass of wine"],
  howToUse: [
    "Enter the serving volume in millilitres.",
    "Give the strength from the label.",
    "Set your country's unit definition: 10 g in the UK, 14 g in the US.",
    "For several servings add the units of each.",
  ],
  howItWorks: "Pure alcohol by volume = volume × strength ÷ 100. By mass = that volume × 0.789 g/ml, the density of ethanol. Units = mass divided by the unit definition.",
  example: "A 150 ml glass of 12% wine holds 18 ml of alcohol, 14.2 g by mass — 1.42 standard units at a 10 g definition.",
  faq: [
    { q: "Why enter the unit definition myself?", a: "Because it differs: 10 g in the UK and Australia, 14 g in the US, 12 g in France. There is no single physical value here — it is a public-health convention." },
    { q: "Does this show intoxication?", a: "No. Blood alcohol depends on body mass, sex, drinking pace and food. This works out only how much alcohol the drink contained." },
    { q: "Why do mass and volume of alcohol differ?", a: "Because ethanol is lighter than water: its density is 0.789 g/ml. Eighteen millilitres of alcohol weigh about fourteen grams." },
    { q: "How do I count a whole evening?", a: "Add the units of each serving. This covers one serving, and they add up directly." },
  ],
};
