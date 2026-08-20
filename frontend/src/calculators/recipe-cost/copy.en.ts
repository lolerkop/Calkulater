import type { CalculatorCopy } from '../../lib/platform/types';

export const recipeCostCopyEn: CalculatorCopy = {
  name: "Recipe cost calculator",
  slug: "recipe-cost-calculator",
  shortDescription: "Cost of a dish from its ingredient list, and the price of a single serving.",
  longDescription:
    "Builds the cost of a dish from a list of ingredients and divides it by the number of servings. Each line is a name, a quantity and a unit price, and the last two numbers are read as quantity and price while everything before them counts as the name — so «plain flour 0.5 45» parses correctly even with spaces in the name. A line without a price is rejected rather than filled with a zero: a substituted price would quietly understate the cost and the mistake would look plausible. The table shows what each ingredient contributes, and usually one of them turns out to carry almost the whole cost.",
  seoTitle: "Recipe cost calculator and cost per serving",
  seoDescription: "Work out the cost of a dish from a list of ingredients with prices and see what a single serving costs.",
  h1: "Recipe cost calculator",
  keywords: ["recipe cost calculator", "cost per serving", "food cost calculator", "dish cost breakdown"],
  howToUse: [
    "Enter ingredients one per line.",
    "On each line the last two numbers are the quantity and the unit price.",
    "The name may be several words: «plain flour 0.5 45».",
    "Enter how many servings the recipe makes.",
  ],
  howItWorks:
    "Each line costs quantity × price. Their sum is divided by the number of servings. Quantity and price come from the last two numbers on the line; the name is everything before them.",
  example: "Three ingredients totalling 220.90 across four servings come to 55.23 per serving.",
  faq: [
    { q: "Which units should the quantity use?", a: "Any, as long as the price is per the same unit. If the price is per kilogram, enter the quantity in kilograms: 0.5 rather than 500." },
    { q: "What if the name contains spaces?", a: "Nothing special: the last two numbers are read as quantity and price, and everything before them is the name. «Plain white flour 0.5 45» parses correctly." },
    { q: "Why is a line without a price rejected?", a: "Because a substituted price would understate the cost silently. Stopping the calculation is better than showing a plausible but wrong number." },
    { q: "Are gas, electricity and labour included?", a: "No — only the cost of the food. Energy used for cooking is a separate calculator." },
    { q: "How do I account for spices used in tiny amounts?", a: "Enter the real amount the recipe uses: 0.005 kg of salt at the price per kilogram gives a correct, if small, contribution." },
  ],
};
