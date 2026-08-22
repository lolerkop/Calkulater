import type { CalculatorCopy } from '../../lib/platform/types';

export const debtSnowballAvalancheCopyEn: CalculatorCopy = {
  name: "Debt payoff calculator — snowball and avalanche",
  slug: "debt-snowball-avalanche",
  shortDescription: "Order and term for paying off several debts: snowball or avalanche.",
  longDescription:
    "Works by month-by-month simulation rather than a closed formula, because a debt that closes frees its minimum payment and passes it to the next one — that feedback cannot be written as a single expression. Each month interest accrues, minimum payments go out, and everything spare goes to one target debt: snowball aims at the smallest balance, avalanche at the highest rate. Avalanche always costs less in interest, snowball delivers a closed debt sooner, and the table names both outcomes debt by debt.",
  seoTitle: "Debt payoff calculator — snowball vs avalanche",
  seoDescription: "Calculate the term and interest of paying off several debts by the snowball or avalanche method, with the closing order and interest on each.",
  h1: "Debt payoff calculator",
  keywords: ["debt payoff calculator", "debt snowball", "debt avalanche", "multiple debt payoff"],
  howToUse: [
    "One debt per line: name, balance, annual rate and minimum payment.",
    "The name may be several words — the numbers are read from the end of the line.",
    "Spare money is what you are willing to pay above the minimums.",
    "Compare both strategies on the same debts: the difference shows up in the interest.",
  ],
  howItWorks: "Month-by-month simulation: interest, minimum payments, and everything spare to one target debt by the chosen strategy.",
  example: "Debts of 40,000 at 12% and 200,000 at 26% with 4,000 spare clear in 26 months by avalanche and 27 by snowball.",
  faq: [
    { q: "Which strategy costs less?", a: "Avalanche: it attacks the highest rate, so the interest paid is always lower or equal. Snowball closes the first debt sooner, and for many people that matters more than a few thousand." },
    { q: "Why simulate month by month instead of using a formula?", a: "Because a debt that closes frees its minimum payment, which then joins the next debt. That feedback cannot be expressed in a closed formula — only step by step." },
    { q: "What if the minimum payment does not cover the interest?", a: "That debt never clears: the balance grows faster than you pay. The calculation says so plainly instead of showing an endless term." },
    { q: "Are new card purchases included?", a: "No. The simulation assumes you stop borrowing. Keep spending on the card and the term moves out, and no strategy compensates for that." },
  ],
};
