import type { CalculatorCopy } from '../../lib/platform/types';

export const idealWeightCopyEn: CalculatorCopy = {
  name: "Ideal weight calculator",
  slug: "ideal-weight",
  shortDescription: "Four named formulas for ideal body weight, plus the healthy BMI range.",
  longDescription:
    "All four formulas are built the same way: a base weight at five feet plus an allowance for every inch above it, which is why the height is converted to inches — that is part of how they work, not decoration. None of them is more correct than the others: they disagree by several kilograms and all descend from mid-twentieth-century statistics. So all four are shown, along with their average, and beside them the healthy weight range from BMI, which is the only one of the five that comes as an interval rather than a point. A single number here would look like a precision that does not exist.",
  seoTitle: "Ideal weight calculator: Devine, Robinson, Miller, Hamwi",
  seoDescription: "See the ideal body weight by four classic formulas and the healthy BMI range for your height.",
  h1: "Ideal weight calculator",
  keywords: ["ideal weight calculator", "Devine formula", "ideal body weight", "healthy weight for height"],
  howToUse: [
    "Choose your sex — every formula has different constants for each.",
    "Enter your height in centimetres.",
    "Compare the four results: their spread is the honest uncertainty.",
    "Read the BMI range as the interval the formulas are estimating a point inside.",
  ],
  howItWorks:
    "Each formula takes a base weight and adds a per-inch allowance for every inch of height above five feet. The BMI range is 18.5 and 24.9 multiplied by height in metres squared.",
  example: "A man of 180 cm gets 74.99 kg by Devine and 71.52 by Miller, averaging 74.12 kg.",
  faq: [
    { q: "Which of the four results is the answer?", a: "None of them alone. They were fitted to different populations for different purposes — Devine for drug dosing, not for health advice — and their disagreement is the point of showing all four." },
    { q: "Why does the BMI range not match the formulas?", a: "Because it answers a different question. The formulas estimate one weight; the range says which weights are unremarkable for your height. A healthy person can sit anywhere in it." },
    { q: "Do the formulas account for muscle?", a: "No. None of them knows anything about you but your height, which is why a lean, muscular person will exceed all four and be perfectly healthy." },
    { q: "Why is there no option beyond male and female?", a: "Because the published formulas define only two constant sets. Inventing a third would be making up numbers, and the calculator does not do that." },
    { q: "Is this the same as a BMI calculator?", a: "No. BMI takes your actual weight and classifies it. This one goes the other way: from height alone to a weight the formulas would expect." },
  ],
};
