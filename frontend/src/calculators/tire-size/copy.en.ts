import type { CalculatorCopy } from '../../lib/platform/types';

export const tireSizeCopyEn: CalculatorCopy = {
  name: "Tire size calculator",
  slug: "tire-size-calculator",
  shortDescription: "Overall diameter, sidewall height and revolutions per kilometre from a tire code.",
  longDescription:
    "Reads a code like 205/55 R16, whose three numbers are written in different units — and that is the whole calculation. The width is in millimetres, the profile is a percentage of that width, and the rim diameter is in inches. The middle figure is therefore not a height: 55 on a 205-wide tire means 112.75 mm, and reading it as millimetres is out by a factor of two. The overall diameter is the rim plus two sidewalls, top and bottom, and from it follow the circumference and the revolutions per kilometre used to compare sizes and estimate speedometer error.",
  seoTitle: "Tire size calculator — diameter and revolutions",
  seoDescription: "Calculate a tire's overall diameter, sidewall height, circumference and revolutions per kilometre from its size code.",
  h1: "Tire size calculator",
  keywords: ["tire size calculator", "tire diameter calculator", "sidewall height", "revolutions per km tire"],
  howToUse: [
    "Enter the first number of the code — the tire width in millimetres.",
    "Enter the second number — the profile as a percentage of the width, not in millimetres.",
    "Enter the rim diameter in inches, the figure after the R.",
    "Compare the overall diameter against another size.",
  ],
  howItWorks:
    "Sidewall = width × profile ÷ 100. Overall diameter = rim diameter × 25.4 + two sidewalls. Circumference = π × overall diameter, and revolutions per kilometre = a million divided by it.",
  example: "A 205/55 R16 tire has a 112.75 mm sidewall and a 631.9 mm overall diameter — 503.73 revolutions per kilometre.",
  faq: [
    { q: "Why is the middle figure not a height in millimetres?", a: "Because it is a percentage of the width. On a 205/55 tire the sidewall is 55% of 205, that is 112.75 mm rather than 55 mm." },
    { q: "Why does the sidewall count twice?", a: "The overall diameter runs through the centre of the wheel, and there is sidewall both below and above the rim. Two sidewall heights are therefore added to the rim diameter." },
    { q: "What are revolutions per kilometre for?", a: "They compare sizes: if a new tire turns fewer times per kilometre, the speedometer will start reading low and so will the odometer." },
    { q: "How do I estimate speedometer error?", a: "Compare revolutions per kilometre for the old and the new size — the percentage difference is roughly the error in the indicated speed." },
    { q: "Is deflection under load included?", a: "No, the calculation is geometric and gives the unloaded diameter. Under the weight of the car the rolling radius is a few millimetres smaller." },
  ],
};
