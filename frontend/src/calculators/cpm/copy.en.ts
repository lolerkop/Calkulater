import type { CalculatorCopy } from '../../lib/platform/types';

export const cpmCopyEn: CalculatorCopy = {
  name: "CPM calculator",
  slug: "cpm-calculator",
  shortDescription: "Cost per thousand impressions, in any direction.",
  longDescription:
    "Divides the budget by impressions and multiplies by a thousand, or works backwards to find the impressions a budget buys. The denominator is what separates CPM from the metrics beside it: CPC divides by clicks and CPA by actions, and the formulas look alike enough that swapping them produces a plausible wrong number.",
  seoTitle: "CPM calculator — cost per thousand impressions",
  seoDescription: "Calculate CPM from budget and impressions, or work backwards to the impressions or budget a given CPM implies.",
  h1: "CPM calculator",
  keywords: ["cpm calculator", "cost per thousand impressions", "advertising cpm"],
  howToUse: ["Choose which value you need.", "Enter the two you already know.", "Read the result and the cost of a single impression."],
  howItWorks: "CPM = budget ÷ impressions × 1000; the other two directions rearrange the same relation.",
  example: "45 000 spent on 1 200 000 impressions is a CPM of 37.50.",
  faq: [
    { q: "What counts as a good CPM?", a: "It depends on the placement and the audience, so no benchmark is shown. Compare against your own campaigns instead." },
    { q: "How is CPM different from CPC?", a: "The denominator. CPM divides by thousands of impressions; CPC divides by clicks." },
    { q: "Can the budget be zero?", a: "Yes, and CPM is then zero. Free placement is a real case rather than an input error." },
    { q: "Are impressions the same as reach?", a: "No. Impressions count views, including repeats to the same person; reach counts people." },
  ],
};
