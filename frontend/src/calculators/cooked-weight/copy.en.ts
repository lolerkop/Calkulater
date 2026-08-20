import type { CalculatorCopy } from '../../lib/platform/types';

export const cookedWeightCopyEn: CalculatorCopy = {
  name: "Raw to cooked weight calculator",
  slug: "raw-to-cooked-weight-calculator",
  shortDescription: "Convert dry grain weight to cooked and back, along with the calories per portion.",
  longDescription:
    "Grains absorb water and meat loses it, and the conversion is needed in both directions precisely because packet calories are quoted for the dry product while a portion is weighed cooked. Hence the second half of the calculation: calories per hundred grams of the finished dish, which for boiled rice is well under half the figure on the packet. Using the packet figure against a cooked portion roughly doubles the count — the single most common mistake in calorie tracking. The expansion factor is entered by hand, since it depends on the grain, the water and the cooking time.",
  seoTitle: "Raw to cooked weight calculator for food",
  seoDescription: "Convert dry grain weight to cooked weight and back, and find the calories per hundred grams of the finished dish.",
  h1: "Raw to cooked weight calculator",
  keywords: ["raw to cooked weight calculator", "cooked rice calories", "expansion factor food", "dry weight to cooked"],
  howToUse: [
    "Choose which weight you know: the dry one or the cooked one.",
    "Enter that weight in grams.",
    "Set the expansion factor: about 2.5 for rice, 2.2 for buckwheat, below 1 for meat.",
    "Enter the calories from the packet — they refer to the dry product.",
  ],
  howItWorks:
    "Cooked weight = dry weight × factor, and the reverse divides. Calories are counted from the dry weight, because water adds none, and calories per hundred grams cooked follow by dividing by the cooked weight.",
  example: "200 g of dry rice makes 500 g cooked: 700 kcal in total and only 140 kcal per 100 g of the finished dish.",
  faq: [
    { q: "Why are cooked calories lower than the packet says?", a: "Because water adds no calories but does add weight. Boiled rice carries roughly 140 kcal per hundred grams against 350 when dry." },
    { q: "Which expansion factor should I use?", a: "As a guide: rice and pasta around 2.5, buckwheat 2.2, oats up to 3. Meat is below 1 because it shrinks. These are estimates, which is why the value is entered by hand." },
    { q: "Does this work for meat?", a: "Yes — enter a factor below one, for example 0.65 for a third of the weight lost. The reverse mode then shows how much raw meat a portion needs." },
    { q: "Do oil and sauces matter?", a: "They carry their own calories and are not part of this calculation. Count them separately and add them to the total." },
    { q: "What if I cook it longer than usual?", a: "Raise the factor: the grain absorbs more water, the cooked weight rises, and calories per hundred grams fall." },
  ],
};
