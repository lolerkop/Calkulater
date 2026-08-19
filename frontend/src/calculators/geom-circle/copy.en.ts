import type { CalculatorCopy } from '../../lib/platform/types';

export const geomCircleCopyEn: CalculatorCopy = {
  name: "Circle calculator",
  slug: "circle-calculator",
  shortDescription: "Area, circumference, diameter and radius from any one of them.",
  longDescription:
    "Solves a circle from whatever you happen to know: radius, diameter, circumference or area. That matters more than it sounds — a pipe or barrel is usually specified by diameter, a flower bed by the length of its edging, and a blank by its area, and each case runs a different way by hand. π is taken at full precision rather than as 3.14, so the circumference does not drift in the third digit.",
  seoTitle: "Circle calculator — area, circumference, radius, diameter",
  seoDescription: "Calculate the area of a circle, its circumference, radius or diameter from any known value.",
  h1: "Circle calculator",
  keywords: ["circle calculator", "area of a circle", "circumference calculator", "radius from area"],
  howToUse: ["Choose the length unit.", "Say which value you know.", "Enter it and read the other three."],
  howItWorks: "S = πr², C = 2πr and d = 2r; the radius comes from the circumference as r = C ÷ 2π and from the area as r = √(S ÷ π).",
  example: "A circle of radius 3 m has an area of 28.274 m² and a circumference of 18.85 m.",
  faq: [
    { q: "Which value of π is used?", a: "The full machine value, not 3.14. With a radius of a few metres the difference already shows up in centimetres of circumference." },
    { q: "How do radius and diameter differ on input?", a: "The diameter is twice the radius, so swapping them changes the area fourfold. That is exactly why the input mode is chosen explicitly." },
    { q: "Can I get the radius from the area?", a: "Yes — choose the area mode; the radius is the square root of the area divided by π." },
    { q: "What does circumference mean here?", a: "The length of the closed line around the edge of the circle — what you would measure with a tape around a pipe or a barrel." },
  ],
};
