import type { CalculatorCopy } from '../../lib/platform/types';

export const quartileCopyEn: CalculatorCopy = {
  name: "Quartile and percentile calculator",
  slug: "quartile",
  shortDescription: "Quartiles, interquartile range, whisker bounds and outliers from a list of numbers.",
  longDescription:
    "The mean hides the shape of a sample; the quartiles show it. Half the values lie between the first and third quartile, and the width of that band says more about spread than a standard deviation does. The box-plot whiskers and outliers follow from the same two numbers. One subtlety matters: several definitions of a quartile exist and give different numbers on the same data — this page uses linear interpolation by position, the rule spreadsheets call PERCENTILE.INC.",
  seoTitle: "Quartile calculator — interquartile range and outliers",
  seoDescription: "Compute Q1, the median, Q3, the interquartile range, whisker bounds and the number of outliers from a list of numbers.",
  h1: "Quartile and percentile calculator",
  keywords: ["quartiles", "interquartile range", "outliers", "box plot"],
  howToUse: [
    "Separate numbers with spaces, new lines or semicolons; a comma before a space also counts as a separator.",
    "Write decimals with a comma: 2,5 is two and a half, not two values.",
    "At least four values are needed: quartiles lose their meaning on three numbers.",
    "A value beyond Q1 − 1.5·IQR or Q3 + 1.5·IQR counts as an outlier — the usual box-plot convention.",
  ],
  howItWorks: "Percentile position (n−1)·p with linear interpolation between neighbours, as in PERCENTILE.INC; whiskers at Q1 − 1.5·IQR and Q3 + 1.5·IQR.",
  example: "For the sample 2 4 4 5 7 9 11 12 the first quartile is 4, the median 6 and the third quartile 9.5.",
  faq: [
    { q: "Why do different tools give different quartiles?", a: "Because several definitions exist: some exclude the median when splitting the sample, others include it, others interpolate differently. This page uses linear interpolation by position (n−1)·p — the same as PERCENTILE.INC and NumPy by default." },
    { q: "Why is the interquartile range better than the plain range?", a: "The plain range is fixed by the two extreme values, so a single outlier inflates it entirely. The interquartile range rests on the middle of the sample and is therefore robust: add one huge number to ten and the range multiplies, while the interquartile range barely moves." },
    { q: "Why one and a half ranges for an outlier?", a: "It is Tukey's convention for the box plot. For a normal distribution less than one per cent of values fall beyond those bounds, so anything further out is worth looking at by eye." },
    { q: "What if every number is the same?", a: "Then the quartiles coincide, the interquartile range is zero and the whiskers collapse to a point. There are no outliers: no value falls outside the bounds." },
  ],
};
