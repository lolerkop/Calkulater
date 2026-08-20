import type { CalculatorCopy } from '../../lib/platform/types';

export const timeValueMoneyCopyEn: CalculatorCopy = {
  name: "Time value of money calculator",
  slug: "time-value-of-money-calculator",
  shortDescription: "Future value of a sum, and discounting future money back to today.",
  longDescription:
    "Computes both sides of the same factor (1 + i)ⁿ: future value multiplies the sum by it, present value divides. That second mode is discounting — the answer to «what is a sum promised in a few years worth today» — and the site had no such calculation. The effective annual rate is shown as its own row on purpose: a nominal 12% compounded monthly is really 12.68% a year, and offers with different compounding frequencies cannot be compared on their nominal rates. Most advertising comparisons rest on exactly that gap.",
  seoTitle: "Time value of money calculator: FV and PV",
  seoDescription: "Calculate the future value of a sum or discount future money back to today, allowing for the compounding frequency.",
  h1: "Time value of money calculator",
  keywords: ["time value of money", "discounting calculator", "future value", "present value"],
  howToUse: [
    "Choose whether to compute future or present value.",
    "Enter the amount, the rate and the term.",
    "Choose how often interest is compounded.",
    "For discounting, enter the future amount.",
  ],
  howItWorks:
    "Factor = (1 + i)ⁿ, where i is the rate per period and n the number of periods. Future value = amount × factor; present value = amount ÷ factor. Effective annual rate = (1 + i)^m − 1.",
  example: "100,000 at 12% a year compounded monthly becomes 181,669.67 after five years.",
  faq: [
    { q: "What is discounting?", a: "Bringing future money back to today. Half a million in eight years at 9% is worth about 250,933 now — which is what it makes sense to pay for such a promise." },
    { q: "Why is the effective rate higher than the nominal one?", a: "Because interest is added more than once a year and starts earning on itself. A nominal 12% compounded monthly works out at 12.68% a year." },
    { q: "How is this different from a compound interest calculator?", a: "That one models a deposit growing with regular top-ups. Here there is a single sum and two directions in time — forward and back — with no contributions." },
    { q: "Which rate should I discount at?", a: "The return you could realistically get from an alternative investment of similar risk. That is the price of giving up the money today." },
    { q: "Is the result nominal or real?", a: "Nominal: inflation is not accounted for here. For a real figure, use a rate net of inflation, or work out purchasing power separately." },
  ],
};
