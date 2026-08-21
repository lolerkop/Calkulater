import type { CalculatorCopy } from '../../lib/platform/types';

export const caloriesPerServingCopyEn: CalculatorCopy = {
  name: "Calories per serving calculator",
  slug: "calories-per-serving",
  shortDescription: "Calories of a whole dish and of one serving, from the ingredient list.",
  longDescription:
    "Adds up the calories of a dish from its ingredients and divides them by the number of servings. Each line is a name, a weight in grams and the calories per 100 grams, and the last two numbers are read as weight and calories while everything before them counts as the name — so «plain flour 300 364» parses correctly even with spaces in the name. A line without calories is rejected rather than filled with a zero: a substituted zero would understate the dish quietly. The table shows what each ingredient contributes, and one of them usually turns out to carry most of it.",
  seoTitle: "Calories per serving calculator from an ingredient list",
  seoDescription: "Work out the calories of a dish from its ingredients and see how many calories one serving contains.",
  h1: "Calories per serving calculator",
  keywords: ["calories per serving", "recipe calorie calculator", "dish calories", "calories from ingredients"],
  howToUse: [
    "Enter ingredients one per line.",
    "On each line the last two numbers are the weight in grams and the calories per 100 g.",
    "The name may be several words: «plain flour 300 364».",
    "Enter how many servings the dish makes.",
  ],
  howItWorks:
    "Each line contributes grams ÷ 100 × calories per 100 g. Their sum is the calories of the dish and is divided by the number of servings.",
  example: "Flour, butter and sugar totalling 2,390 kcal across four servings come to 597 kcal per serving.",
  faq: [
    { q: "Where do I find calories per 100 g?", a: "On the package: nutrition labels state energy per 100 g. Use that number as it is; the calculator scales it by the weight you enter." },
    { q: "Does cooking change the result?", a: "Water evaporates but calories do not. Enter the raw weights of the ingredients — the dish will have fewer grams after cooking but the same calories." },
    { q: "Why is a line without calories rejected?", a: "Because a substituted zero would understate the dish silently. Stopping is better than showing a plausible but wrong number." },
    { q: "Can I mix grams and millilitres?", a: "Enter grams. For water-like liquids millilitres and grams are close enough, but for oil or honey they are not — weigh them or convert first." },
    { q: "Is this the same as a macros calculator?", a: "No. This one sums the calories of what you actually put in the pot. A macros calculator splits a daily allowance into protein, fat and carbohydrate." },
  ],
};
