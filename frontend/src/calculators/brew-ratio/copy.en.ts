import type { CalculatorCopy } from '../../lib/platform/types';

export const brewRatioCopyEn: CalculatorCopy = {
  name: "Coffee brew ratio calculator",
  slug: "coffee-brew-ratio",
  shortDescription: "How much coffee a volume of water takes at a chosen brew ratio.",
  longDescription:
    "Solves the brewing equation in any direction: the coffee dose for a volume of water, the water for a dose, or the ratio itself from a cup you have already made. The ratio is written 1:16 and means grams of coffee to millilitres of water. It differs from scaling a recipe by servings — that stretches a whole ingredient list, whereas here exactly two quantities are tied together and the inverse question, what ratio did I actually brew, is as valid as the forward one.",
  seoTitle: "Coffee brew ratio calculator — dose for a water volume",
  seoDescription: "Calculate how much coffee a given volume of water needs at 1:15, 1:16 or 1:18, or find the ratio you actually brewed.",
  h1: "Coffee brew ratio calculator",
  keywords: ["coffee brew ratio calculator", "coffee to water ratio", "how much coffee for 500ml", "pour over ratio calculator"],
  howToUse: [
    "Choose what you are solving for: the dose, the water or the ratio.",
    "Enter the two known quantities — the third turns read-only.",
    "For pour-over and filter use 1:15–1:17; for a french press 1:12–1:15.",
    "Mind the grounds line: some of the water never reaches the cup.",
  ],
  howItWorks: "Water = coffee × k, coffee = water ÷ k, k = water ÷ coffee. A millilitre of water is taken as a gram: at brewing temperature the difference is under three per cent.",
  example: "500 ml of water at a 1:16 ratio needs 31.25 g of coffee.",
  faq: [
    { q: "Which ratio should I use?", a: "Pour-over and filter usually sit at 1:15–1:17; a french press brews stronger at 1:12–1:15. The coarser the grind and the shorter the contact, the lower k goes." },
    { q: "Why is there less in the cup than water poured?", a: "Because ground coffee retains roughly two grams of water per gram of dose. The grounds line shows that loss." },
    { q: "How is this different from scaling a recipe?", a: "Scaling stretches a whole ingredient list to a new serving count. Here exactly two quantities are tied together, and either can be the unknown." },
    { q: "Grams or millilitres for water?", a: "It hardly matters: at brewing temperature a millilitre weighs about a gram, and the difference is smaller than a kitchen scale's error." },
  ],
};
