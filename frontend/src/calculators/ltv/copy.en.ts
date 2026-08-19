import type { CalculatorCopy } from '../../lib/platform/types';

export const ltvCopyEn: CalculatorCopy = {
  name: "LTV calculator",
  slug: "ltv-calculator",
  shortDescription: "Customer lifetime value from lifetime or churn.",
  longDescription:
    "Multiplies revenue per period by how long a customer stays and by gross margin. The lifetime is either given directly or derived from churn as one divided by its share. Many conventions for LTV exist; this one is stated plainly rather than assumed, so the number can be compared with the way your own team computes it.",
  seoTitle: "LTV calculator — customer lifetime value",
  seoDescription: "Calculate customer lifetime value from revenue per period, churn or lifetime and gross margin, with the LTV to CAC ratio.",
  h1: "LTV calculator",
  keywords: ["ltv calculator", "customer lifetime value", "ltv to cac"],
  howToUse: ["Choose whether you know the lifetime or the churn.", "Enter revenue per period and gross margin.", "Add acquisition cost for the LTV to CAC ratio."],
  howItWorks: "LTV = revenue per period × lifetime × margin; with churn, the lifetime is one divided by the churn share.",
  example: "1200 a month at 5 percent monthly churn gives a 20-month lifetime and an LTV of 24 000.",
  faq: [
    { q: "Why does churn give the lifetime?", a: "If a fixed share leaves each period, the average stay is one divided by that share. Five percent monthly churn averages twenty months." },
    { q: "Should margin be included?", a: "If you want profit rather than revenue, yes. Leaving it at one hundred percent gives the revenue-based figure instead." },
    { q: "What is a healthy LTV to CAC ratio?", a: "That depends on the business and payback period, so no target is shown. The ratio is given for you to judge against your own economics." },
    { q: "Why is zero churn rejected?", a: "It would mean no customer ever leaves, making the lifetime infinite and the value meaningless." },
  ],
};
