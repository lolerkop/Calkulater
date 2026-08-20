import type { CalculatorCopy } from '../../lib/platform/types';

export const correlationCopyEn: CalculatorCopy = {
  name: "Correlation coefficient calculator",
  slug: "correlation-coefficient-calculator",
  shortDescription: "Pearson correlation for two series, together with the regression line.",
  longDescription:
    "Computes the Pearson correlation coefficient for two series and derives the least-squares line along with it. The coefficient measures only the strength and sign of a LINEAR relationship: for a parabolic dependence it can come out near zero even though the relationship is exact. Series of different lengths are rejected rather than truncated — pairs are formed by position, and silently dropping a tail would compute the correlation of the wrong data. If every value in one series is identical the coefficient has no meaning, and the calculation says so instead of reporting zero.",
  seoTitle: "Pearson correlation coefficient calculator",
  seoDescription: "Calculate the Pearson correlation coefficient, coefficient of determination, covariance and regression line from two series of values.",
  h1: "Correlation coefficient calculator",
  keywords: ["correlation coefficient calculator", "pearson correlation", "regression line", "coefficient of determination"],
  howToUse: [
    "Paste the first series: values separated by spaces, commas or line breaks.",
    "Paste the second series — it must hold the same number of values.",
    "Read the coefficient: it lies between −1 and 1.",
    "The slope and intercept define the line that best fits the data.",
  ],
  howItWorks:
    "Deviations from the mean are computed for each series. The coefficient is the sum of the products of deviations divided by the root of the product of their squared sums. The slope is that same sum of products divided by the squared sum for X.",
  example: "Series 1, 2, 3, 4, 5 against 2, 4, 5, 4, 5 give a coefficient of 0.7746 and a line of slope 0.6.",
  faq: [
    { q: "What does a coefficient of 0.77 mean?", a: "A marked positive linear relationship: as one series rises the other tends to rise too. One would mean an exact straight line, minus one an exact inverse." },
    { q: "Does correlation prove causation?", a: "No. A relationship may be explained by a third factor or by coincidence. The coefficient measures how two series move together, not whether one drives the other." },
    { q: "Why are series of different lengths rejected?", a: "Because pairs are formed by position. Truncating the longer series would compute the correlation of the wrong data without saying so." },
    { q: "What if every value in a series is identical?", a: "The coefficient cannot be computed: the denominator becomes zero. Reporting zero would claim «no relationship» where the question itself makes no sense." },
    { q: "How do I enter decimal values?", a: "With a comma, as in «1,5 2,5». A comma only separates values when followed by a space, so the fractional part is not lost." },
  ],
};
