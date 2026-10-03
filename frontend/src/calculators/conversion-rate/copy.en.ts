import type { CalculatorCopy } from '../../lib/platform/types';

export const conversionRateCopyEn: CalculatorCopy = {
  "name": "Conversion rate calculator",
  "slug": "conversion-rate-calculator",
  "shortDescription": "Share of visits with a target action and cost per converting visit.",
  "seoTitle": "Conversion rate calculator and cost per conversion",
  "seoDescription": "Calculate the conversion rate from visits to target actions, the cost per conversion and visits per conversion.",
  "h1": "Conversion rate calculator",
  "keywords": [
    "conversion rate calculator",
    "website conversion",
    "cost per conversion",
    "CPA"
  ],
  "longDescription": "This calculator measures the share of visits with at least one chosen target action. Each visit enters the numerator at most once, so the result ranges from 0 to 100%. This differs from an event count: two orders during one visit still represent one converting visit. A positive budget also gives the cost of one such visit, and the reciprocal gives average visits per conversion. That average describes the observed sample and does not guarantee the next sale.",
  "howItWorks": "Conversion rate (%) = visits with the chosen action ÷ all visits × 100. Here conversions mean converting visits, not all repeated events. With a positive conversion count, visits per conversion = all visits ÷ converting visits. If a positive budget is also given, cost per conversion = budget ÷ converting visits. At zero conversions the rate is 0%, and both rows requiring that denominator are omitted. A blank budget or 0 omits the money row.",
  "howToUse": [
    "Use visit sessions from the same sample and period; unique users and page views are different denominators.",
    "Count visits with at least one chosen action, no more than once per visit. Both counts must be whole numbers from 0 to 9,007,199,254,740,991, with a positive total visit count.",
    "Do not enter all repeated events or fractional attribution credits as converting visits.",
    "The optional budget must be nonnegative and match the sample. The currency symbol is local display formatting, with no exchange rate. Compare results using consistent goals and traffic sources."
  ],
  "example": "240 converting visits out of 8,000 give 240 ÷ 8,000 × 100 = 3.00%. A budget of 60,000 gives 60,000 ÷ 240 = 250.00 per conversion; visits per conversion = 8,000 ÷ 240 ≈ 33.333. Zero conversions from 5,000 visits gives 0.00%, with no cost or reciprocal rate.",
  "faq": [
    {
      "q": "How does this conversion rate differ from CTR?",
      "a": "CTR divides ad clicks by impressions. This rate uses site visits as the denominator and visits with the chosen action as the numerator. Clicks, sessions, users and page views are not interchangeable."
    },
    {
      "q": "Can all orders or multiple goals per visit be counted?",
      "a": "For the share of successful visits, combine goals and deduplicate each visit. Total events divided by visits can exceed 100%, but that is a different metric outside this form’s scope."
    },
    {
      "q": "Why are cost and reciprocal rate absent at zero conversions?",
      "a": "Both would require division by zero. A zero rate with a positive visit count remains valid. A budget of 0 means the money calculation is omitted here; it does not display a free conversion."
    },
    {
      "q": "Do 33.333 visits guarantee a sale?",
      "a": "No. This is the reciprocal of an observed rate: 100 ÷ 3 ≈ 33.333. Using it for a plan assumes an unchanged probability; the calculator provides no forecast or confidence interval."
    },
    {
      "q": "How should 3% be compared with an earlier period?",
      "a": "Keep the goal, visit counting, traffic mix and observation window consistent. A lower rate does not prove the site broke: conversions can rise when traffic increases. No universal industry benchmark is applied."
    }
  ],
  "disclaimer": "Observed share of converting visits and conditional unit cost. No forecast, statistical significance assessment or currency exchange."
};
