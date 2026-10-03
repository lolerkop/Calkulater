import type { CalculatorCopy } from '../../lib/platform/types';

export const geomSquareCopyEn: CalculatorCopy = {
  "name": "Square calculator",
  "slug": "square-calculator",
  "shortDescription": "Area, perimeter and diagonal of a square from any one of them.",
  "longDescription": "Solves a square from whichever value you happen to have: the side, the area or the perimeter. All four quantities come back together, so a floor area of 49 m² immediately tells you the 7 m wall it runs along and the 9.9 m diagonal you would measure across it. The length unit is chosen once and never converted — the area is simply reported in its square.",
  "seoTitle": "Square calculator — area, perimeter, diagonal",
  "seoDescription": "Calculate the area, perimeter and diagonal of a square from its side, area or perimeter.",
  "h1": "Square calculator",
  "keywords": [
    "square calculator",
    "area of a square",
    "perimeter of a square",
    "square diagonal"
  ],
  "howToUse": [
    "Choose the square’s side, area or perimeter as the known value.",
    "Lengths use the selected unit and area uses its square.",
    "Enter a positive value.",
    "To change cm² to m², divide the area by 10,000 before entering it; selecting metres alone does not convert it."
  ],
  "howItWorks": "S = a², P = 4a and d = a√2. In inverse modes a = √S or a = P/4, then the other dimensions follow. Area uses the square of the selected length unit.",
  "example": "A square room with a 5 m side has an area of 25 m², a perimeter of 20 m and a diagonal of 7.071 m.",
  "faq": [
    {
      "q": "Can I enter the area instead of the side?",
      "a": "Yes. Choose the area mode and the side is recovered as its square root, then the perimeter and diagonal follow from it."
    },
    {
      "q": "Why is the area shown in squared units?",
      "a": "Because that is what an area is. If you entered centimetres, the area is in square centimetres — multiplying by a linear factor to change unit would be wrong."
    },
    {
      "q": "Is a zero side accepted?",
      "a": "No. A square with no side is not a figure, so the calculator reports the problem instead of returning a plausible zero."
    },
    {
      "q": "How is the diagonal found?",
      "a": "By the Pythagorean theorem across two equal sides, which reduces to d = a√2."
    },
    {
      "q": "What changes when I double a square’s side?",
      "a": "Perimeter and diagonal double, while area becomes four times as large: (2a)² = 4a². A factor applied to length therefore has a different effect on area."
    }
  ],
  "disclaimer": "The model assumes four equal sides and four right angles. Area alone does not prove that a plot is square. Results are rounded; a degenerate square with a zero side is outside this calculator’s scope."
};
