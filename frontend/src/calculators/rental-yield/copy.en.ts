import type { CalculatorCopy } from '../../lib/platform/types';

export const rentalYieldCopyEn: CalculatorCopy = {
  name: "Rental yield calculator",
  slug: "rental-yield-calculator",
  shortDescription: "Gross and net rental yield on a property.",
  longDescription:
    "Shows what annual percentage a purchased property returns when let. The gross yield uses the full rent; the net yield subtracts annual costs — tax, insurance, maintenance and vacancy. The gap between them is usually what decides whether a purchase is worth it: a gross 6% easily becomes 4% once costs are real, and it is the net figure you compare with a deposit rate.",
  seoTitle: "Rental yield calculator — gross and net",
  seoDescription: "Calculate the gross and net rental yield of a property from its price, the rent and annual costs.",
  h1: "Rental yield calculator",
  keywords: ["rental yield calculator", "gross rental yield", "net rental yield", "property yield"],
  howToUse: ["Enter the purchase price.", "Give the rent per year or per month.", "Optionally add annual costs — the net yield then appears."],
  howItWorks: "Gross yield = annual rent ÷ price × 100. Net = (annual rent − annual costs) ÷ price × 100. Payback is the price divided by the annual income.",
  example: "A flat costing 10,000,000 let at 50,000 a month gives a gross yield of 6.00%.",
  faq: [
    { q: "How does gross yield differ from net?", a: "Gross uses the whole rent; net subtracts annual costs. It is the net figure that is worth comparing with a deposit rate." },
    { q: "What counts as annual costs?", a: "Whatever you pay every year: tax, insurance, maintenance, repairs and losses from vacant months. You decide what to include — the calculator takes the total." },
    { q: "Is property price growth included?", a: "No. Only rental income is computed. Capital appreciation is a separate component and an unpredictable one." },
    { q: "What does the payback period show?", a: "How many years of rental income repay the purchase price under unchanged conditions. It is the reciprocal of the yield." },
  ],
};
