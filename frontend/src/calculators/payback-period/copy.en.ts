import type { CalculatorCopy } from '../../lib/platform/types';

export const paybackPeriodCopyEn: CalculatorCopy = {
  name: "Payback period calculator",
  slug: "payback-period",
  shortDescription: "How long an investment takes to pay for itself.",
  longDescription:
    "The simple payback period divides the investment by the annual cash flow, and it always looks optimistic because it ignores the time value of money. The discounted period works differently: the present values shrink, so the period is found by accumulation. The gap between them is the price of waiting \u2014 at a ten per cent rate a five-year payback becomes nearly seven.",
  seoTitle: "Payback period calculator \u2014 simple and discounted",
  seoDescription: "Calculate the payback period of an investment from the annual cash flow, with discounting at a given rate.",
  h1: "Payback period calculator",
  keywords: ["payback period", "discounted payback", "cash flow", "investment appraisal"],
  howToUse: [
    "Use net cash flow: revenue less costs, but without deducting the investment itself.",
    "Set the discount rate to zero if you only want the simple period.",
    "This assumes a level flow. If it varies by year, split the problem into periods.",
    "Payback says nothing about profit AFTER payback \u2014 it is not a measure of return.",
  ],
  howItWorks: "Simple = investment / cash flow; discounted by accumulating flow/(1+r)\u1d4f.",
  example: "A million at a flow of three hundred thousand pays back in 3.333 years.",
  faq: [
    { q: "What is wrong with simple payback?", a: "It treats a rouble five years out as equal to one today. On a short project the difference is small; on a long one it matters: at ten per cent a five-year payback becomes nearly seven." },
    { q: "Why can a high rate mean no payback at all?", a: "The discounted flows form a shrinking series whose sum is finite: flow divided by rate. If that is below the investment, accumulation never catches up \u2014 the calculation says so rather than iterating for a thousand years." },
    { q: "Does payback replace a return figure?", a: "No. It shows when the money comes back but nothing about what the project earns afterwards. Two projects with the same payback can differ several times over in total profit." },
    { q: "What discount rate should I use?", a: "Usually the cost of capital: the borrowing rate or the required return. For a rough figure people take inflation plus a risk premium \u2014 here it is a field, not a built-in assumption." },
  ],
};
