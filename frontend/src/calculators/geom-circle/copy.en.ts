import type { CalculatorCopy } from '../../lib/platform/types';

export const geomCircleCopyEn: CalculatorCopy = {
  "name": "Circle calculator",
  "slug": "circle-calculator",
  "shortDescription": "Area, circumference, diameter and radius from any one of them.",
  "longDescription": "Solves a circle from whatever you happen to know: radius, diameter, circumference or area. That matters more than it sounds — a pipe or barrel is usually specified by diameter, a flower bed by the length of its edging, and a blank by its area, and each case runs a different way by hand. Math.PI ≈ 3.141592653589793 is used: a machine approximation of π, rather than the exact infinite number or 3.14. At r = 3 m, using 3.14 would reduce circumference by about 9.56 mm; final results are rounded.",
  "seoTitle": "Circle calculator — area, circumference, radius, diameter",
  "seoDescription": "Calculate the area of a circle, its circumference, radius or diameter from any known value.",
  "h1": "Circle calculator",
  "keywords": [
    "circle calculator",
    "area of a circle",
    "circumference calculator",
    "radius from area"
  ],
  "howToUse": [
    "Choose one length unit.",
    "In area mode enter its square: cm² for centimetres.",
    "Choose the known quantity and fill only the visible field.",
    "Radius, diameter and circumference must be positive; changing the unit does not convert the entered number."
  ],
  "howItWorks": "S = πr², C = 2πr and d = 2r; the radius comes from the circumference as r = C ÷ 2π and from the area as r = √(S ÷ π).",
  "example": "A circle of radius 3 m has an area of 28.274 m² and a circumference of 18.85 m.",
  "faq": [
    {
      "q": "Which value of π is used?",
      "a": "Math.PI ≈ 3.141592653589793 is used: a machine approximation of π, rather than the exact infinite number or 3.14. At r = 3 m, using 3.14 would reduce circumference by about 9.56 mm; final results are rounded."
    },
    {
      "q": "How do radius and diameter differ on input?",
      "a": "The diameter is twice the radius, so swapping them changes the area fourfold. That is exactly why the input mode is chosen explicitly."
    },
    {
      "q": "Can I get the radius from the area?",
      "a": "Yes — choose the area mode; the radius is the square root of the area divided by π."
    },
    {
      "q": "What does circumference mean here?",
      "a": "The length of the closed line around the edge of the circle — what you would measure with a tape around a pipe or a barrel."
    },
    {
      "q": "How do I convert a circle’s area between cm² and m²?",
      "a": "1 m = 100 cm, so 1 m² = 10,000 cm². For example, 100 cm² = 0.01 m². Selecting metres changes the interpretation of the number; it does not convert it."
    }
  ],
  "disclaimer": "Planar circle with positive area. π and results are numerical approximations; a pipe’s outside diameter does not give its internal cross-sectional area. An error appears if all required results cannot be represented numerically."
};
