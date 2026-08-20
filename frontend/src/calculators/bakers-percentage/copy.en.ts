import type { CalculatorCopy } from '../../lib/platform/types';

export const bakersPercentageCopyEn: CalculatorCopy = {
  name: "Baker's percentage calculator",
  slug: "bakers-percentage-calculator",
  shortDescription: "Ingredient weights and dough hydration from baker's percentages of the flour.",
  longDescription:
    "In baker's notation flour is always taken as 100%, and everything else is expressed as a share of the flour rather than of the finished dough. That is why the percentages add up to more than a hundred — it is normal, not an error: at 68% hydration the dough weighs about 170% of the flour. This notation is what makes a formula portable, because it does not care whether you are mixing half a kilo or twenty. The calculator turns those percentages into grams for your own flour weight and reports hydration separately, since hydration is what decides whether the dough is stiff or slack.",
  seoTitle: "Baker's percentage calculator and dough hydration",
  seoDescription: "Convert baker's percentages into grams for your flour weight and work out the hydration of the dough.",
  h1: "Baker's percentage calculator",
  keywords: ["bakers percentage calculator", "dough hydration calculator", "bread formula", "baking percentages"],
  howToUse: [
    "Enter the flour weight — that is the 100%.",
    "Enter the remaining ingredients one per line.",
    "On each line the last number is the percentage of the flour weight.",
    "Name the liquid «water» to get a hydration figure.",
  ],
  howItWorks:
    "Ingredient weight = flour × percentage ÷ 100. Dough weight = flour + the sum of the ingredients. Hydration = water weight ÷ flour weight. Flour is not entered in the list: it has its own field and is always 100%.",
  example: "500 g of flour at 68% hydration with 2% salt and 1.2% yeast makes 856 g of dough.",
  faq: [
    { q: "Why do the percentages add up to more than 100?", a: "That is by design. They are shares of the flour, not of the dough, so flour 100% plus water 68% plus salt 2% comes to 170% — the weight of the dough relative to the flour." },
    { q: "What is hydration and what does it change?", a: "It is the ratio of water to flour. Below 60% the dough is stiff and holds its shape well, 65–75% is the usual bread range, and above 80% it spreads and wants folding rather than kneading." },
    { q: "Should flour go in the ingredient list?", a: "No. Flour has its own field and is 100% by definition. Adding it to the list as well would count it twice." },
    { q: "How do I account for a starter that already contains water?", a: "Strictly, split it into its flour and water and add each to the matching line — that is called the total formula. For home baking it is usually enough to enter the starter on one line, remembering that the true hydration is a little higher than shown." },
    { q: "Does this notation work for enriched dough?", a: "Yes. Butter, sugar, eggs and milk are written as percentages of the flour just like water. Only the ranges change: enriched dough often carries 10–20% each of fat and sugar." },
  ],
};
