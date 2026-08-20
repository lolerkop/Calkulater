import type { CalculatorCopy } from '../../lib/platform/types';

export const inflationCopyEn: CalculatorCopy = {
  name: "Inflation calculator",
  slug: "inflation-calculator",
  shortDescription: "Purchasing power of a sum after several years, and how much is lost.",
  longDescription:
    "Shows what happens to the purchasing power of money over a chosen period. Inflation compounds rather than adding up, which is why the intuitive estimate is almost always wrong: 8% over ten years does not eat 80% of a sum but around 54%, because each year's percentage is taken from money that has already lost value. Both sides of the same factor are shown — what today's sum will be able to buy, and how much future money it would take to buy what it buys now. The rate is your assumption rather than a forecast: this calculator does not know future inflation and will not present one as known.",
  seoTitle: "Inflation calculator and purchasing power of money",
  seoDescription: "Calculate what today's sum will be worth in several years and how much of its purchasing power it will lose.",
  h1: "Inflation calculator",
  keywords: ["inflation calculator", "purchasing power", "money devaluation", "inflation over years"],
  howToUse: [
    "Enter the amount in today's money.",
    "Enter the expected annual inflation.",
    "Enter the term in years.",
    "The rate is your assumption, not a forecast.",
  ],
  howItWorks:
    "Price factor = (1 + inflation)^years. Purchasing power = amount ÷ factor. Future money needed = amount × factor. Share lost = 1 − 1 ÷ factor.",
  example: "100,000 at 8% inflation over 10 years keeps the purchasing power of only 46,319.35 — a loss of 53.68%.",
  faq: [
    { q: "Why isn't 8% over 10 years equal to 80%?", a: "Because inflation compounds rather than adding up: each year's percentage is taken from money that has already lost value. The real loss comes to about 54%, not 80%." },
    { q: "How do «purchasing power» and «the same in future money» differ?", a: "They are two sides of the same factor. The first says what today's 100,000 will buy later; the second says how many future units it would take to buy what 100,000 buys now." },
    { q: "Should I use the official index or my own estimate?", a: "Your own, preferably. An official index averages a whole basket, while personal inflation depends on what you actually buy and usually differs noticeably from the average." },
    { q: "Can I enter negative inflation?", a: "Yes, that is deflation, and purchasing power then rises. It is rare and usually accompanies a downturn, but the arithmetic holds." },
    { q: "How do I protect money from inflation?", a: "This calculation does not advise and cannot. It only shows the scale of the loss; which instruments suit you depends on your horizon, risk tolerance and circumstances." },
  ],
};
