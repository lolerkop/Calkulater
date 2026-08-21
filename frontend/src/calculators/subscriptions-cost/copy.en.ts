import type { CalculatorCopy } from '../../lib/platform/types';

export const subscriptionsCostCopyEn: CalculatorCopy = {
  name: "Subscriptions cost calculator",
  slug: "subscriptions-cost",
  shortDescription: "Brings monthly and yearly subscriptions to one comparable monthly figure.",
  longDescription:
    "Puts every subscription on the same footing by dividing its price by the number of months it covers. Each line is a name, a price and a period in months, and the period is a number rather than a word because a default value has no localisation path — «12» reads the same everywhere while «yearly» would leak one language into another. The yearly total is computed from the unrounded monthly sum: rounding an intermediate figure and then multiplying by twelve is a reliable way to disagree with yourself by a few units.",
  seoTitle: "Subscriptions cost calculator: monthly and yearly in one figure",
  seoDescription: "Add up streaming, cloud storage and other subscriptions with different billing periods into one monthly and yearly cost.",
  h1: "Subscriptions cost calculator",
  keywords: ["subscriptions cost calculator", "monthly subscription total", "yearly subscription cost", "compare subscription plans"],
  howToUse: [
    "Enter one subscription per line: name, price and period in months.",
    "Monthly billing is 1, yearly is 12, quarterly is 3.",
    "The name may be several words: «cloud storage 1990 12».",
    "Read the monthly figure — that is what makes the plans comparable.",
  ],
  howItWorks:
    "Each line contributes price ÷ months. Their sum is the monthly cost, and twelve times that sum is the yearly cost.",
  example: "299 monthly, 1,990 yearly and 169 monthly come to 633.83 a month.",
  faq: [
    { q: "Why is the period a number and not «monthly» or «yearly»?", a: "Because the default value of a field is the same in every language. A number reads identically in all three; a word would have to be Russian, English or Ukrainian and would be wrong in the other two." },
    { q: "How do I enter a quarterly plan?", a: "As 3 months. Any period works — a two-year plan is 24." },
    { q: "Why is the yearly figure not twelve times the rounded month?", a: "Because rounding first and multiplying afterwards drifts. The yearly total comes from the exact monthly sum, so the two figures agree." },
    { q: "Does it account for a free trial?", a: "Not directly. Enter the price you will actually be charged; a trial at zero is accepted and simply contributes nothing." },
    { q: "Is the cheapest monthly plan always the cheapest?", a: "Per month, yes — that is exactly what this comparison shows. Whether a yearly plan you stop using after two months was cheaper is a different question." },
  ],
};
