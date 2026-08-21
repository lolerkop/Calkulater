import type { CalculatorCopy } from '../../lib/platform/types';

export const convertCookingWeightCopyEn: CalculatorCopy = {
  name: "Cooking weight converter",
  slug: "cooking-weight-converter",
  shortDescription: "Cups, spoons and millilitres into grams — and back — for a chosen product.",
  longDescription:
    "Converts kitchen volume into weight, which needs the product as well as the number: a cup of flour and a cup of honey differ by nearly three times. The densities are a small table owned by this calculator, and the one it used is always printed as its own line — a number without its density would be a number you cannot check. The cup here is the metric 240 ml, said out loud rather than assumed, because an American cup is 236.6 ml and quiet disagreement between the two is exactly how recipes go wrong.",
  seoTitle: "Cooking weight converter: cups and spoons to grams",
  seoDescription: "Convert cups, tablespoons and millilitres into grams for flour, sugar, honey and other products, and back again.",
  h1: "Cooking weight converter",
  keywords: ["cups to grams", "cooking weight converter", "tablespoon to grams", "volume to weight cooking"],
  howToUse: [
    "Choose the product — density is what makes volume into weight.",
    "Choose the unit you are measuring in.",
    "Enter the amount.",
    "Switch the direction if you have grams and need volume.",
  ],
  howItWorks:
    "The amount is turned into millilitres by the unit factor and multiplied by the density of the product. In the other direction grams are divided by the density and then converted back into the chosen unit.",
  example: "One metric cup of flour at 0.53 g/ml is 127.2 g.",
  faq: [
    { q: "Why does the product matter?", a: "Because weight per millilitre is a property of the substance. A cup of water is 240 g, a cup of flour is about 127 g and a cup of honey is about 341 g." },
    { q: "How exact are the densities?", a: "They are conventional kitchen values, and the calculator shows the one it used. Dry goods vary with how they were poured: spooned, scooped or packed flour can differ by a quarter." },
    { q: "Which cup is used?", a: "The metric one, 240 ml. If your recipe is American, its cup is 236.6 ml — about 1.4 % less, which matters for baking and not for soup." },
    { q: "Can I convert grams back into cups?", a: "Yes, switch the direction. The same density is used, so converting there and back returns the original number." },
    { q: "Why not just use a scale?", a: "Do, if you have one. This is for recipes written in cups when you have grams, or the other way round." },
  ],
};
