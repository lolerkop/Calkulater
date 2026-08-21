import type { CalculatorCopy } from '../../lib/platform/types';

export const waistRatioCopyEn: CalculatorCopy = {
  name: "Waist ratio calculator",
  slug: "waist-ratio",
  shortDescription: "Waist-to-height and waist-to-hip ratios, with the band they fall in.",
  longDescription:
    "Both ratios are dimensionless, so the units do not matter as long as the measurements are taken the same way. The band comes from waist-to-height rather than waist-to-hip: the first compares across people of different heights, while the second depends more on build. The boundary at half your height is the best known and the simplest of the guidelines — waist under half your height — and it is exactly where the healthy band ends and the increased one begins.",
  seoTitle: "Waist-to-height and waist-to-hip ratio calculator",
  seoDescription: "Work out your waist-to-height and waist-to-hip ratios and see which band the first one falls in.",
  h1: "Waist ratio calculator",
  keywords: ["waist to height ratio", "waist to hip ratio", "WHtR calculator", "waist measurement health"],
  howToUse: [
    "Measure the waist at the narrowest point, breathing out normally.",
    "Measure the hip at the widest point.",
    "Enter your height measured without shoes.",
    "Read the waist-to-height ratio: under 0.5 is the healthy band.",
  ],
  howItWorks:
    "Waist-to-height is the waist divided by the height. Waist-to-hip is the waist divided by the hip. The band is taken from the first: under 0.4 below usual, under 0.5 healthy, under 0.6 increased, above that high.",
  example: "An 84 cm waist at 178 cm of height gives 0.4719 — inside the healthy band.",
  faq: [
    { q: "Where exactly is the waist measured?", a: "At the narrowest point between the ribs and the hips, breathing out but not holding it in. Measuring at the navel instead gives a larger number and a different answer." },
    { q: "Why waist-to-height rather than BMI?", a: "Because it notices where the weight sits. Two people of the same BMI can have very different waists, and the waist is the part that the research associates with risk." },
    { q: "Does the half-your-height rule really hold at any height?", a: "It is a guideline, not a law, and it works better in the middle of the height range than at the extremes. That is why the exact ratio is shown next to the band." },
    { q: "What is waist-to-hip for then?", a: "It describes shape rather than size and is used in its own right, with different thresholds for men and women. It is shown here as a number, without a verdict." },
    { q: "Does this replace a doctor?", a: "No. It is one number among many, and no ratio can tell you anything a measurement tape cannot see." },
  ],
};
