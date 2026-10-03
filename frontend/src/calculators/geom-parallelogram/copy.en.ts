import type { CalculatorCopy } from '../../lib/platform/types';

export const geomParallelogramCopyEn: CalculatorCopy = {
  "name": "Parallelogram calculator",
  "slug": "parallelogram-calculator",
  "shortDescription": "Area from a base and height, or from two sides and the angle between them.",
  "longDescription": "Solves a parallelogram two ways: from a base with its height, and from two sides with the angle between them. The second mode also gives the perimeter, the height and both diagonals; the first gives only the area, because the second side does not follow from a base and a height, and a dash is shown instead of a plausible perimeter. At 0 or 180 degrees the figure collapses into a line: that input is rejected rather than returning an area of zero.",
  "seoTitle": "Parallelogram calculator — area, perimeter, diagonals",
  "seoDescription": "Calculate the area of a parallelogram from a base and height or from two sides and the angle, with the perimeter and diagonals.",
  "h1": "Parallelogram calculator",
  "keywords": [
    "parallelogram calculator",
    "area of a parallelogram",
    "parallelogram diagonals"
  ],
  "howToUse": [
    "Choose base and height, or two adjacent sides and their included angle.",
    "Measure the height perpendicular to the base.",
    "Enter the angle in degrees strictly between 0° and 180°.",
    "Lengths must be positive and share one unit; base and height alone do not determine the perimeter or diagonals."
  ],
  "howItWorks": "From base a and perpendicular height h: S = ah. From adjacent sides a, b and included angle θ: S = ab sin θ, h = b sin θ, P = 2(a+b). Enter θ in degrees. The sorted diagonals are Dmax/min = √[a²+b² ± 2ab|cos θ|]. Equivalent half-angle identities avoid losing the smaller diagonal when nearly equal squared terms are subtracted.",
  "example": "Sides of 10 and 8 cm at an angle of 30° give an area of 40 cm² and a perimeter of 36 cm.",
  "faq": [
    {
      "q": "Why is no perimeter shown in the height mode?",
      "a": "Because the second side does not follow from a base and a height: infinitely many parallelograms of different slant share the same area. Reporting a perimeter would be an invention."
    },
    {
      "q": "What happens at 90 degrees?",
      "a": "The sine is one and the parallelogram becomes a rectangle: the area is the product of the sides."
    },
    {
      "q": "Why is 180 degrees rejected?",
      "a": "At that angle the figure collapses into a line and stops being a parallelogram. An area of zero would be formally right but meaningless, so the calculator reports the problem instead."
    },
    {
      "q": "How does a parallelogram differ from a rhombus?",
      "a": "A rhombus has all sides equal. Enter the same a and b and the calculation still holds for it."
    },
    {
      "q": "Does replacing θ with 180°−θ change the parallelogram’s area?",
      "a": "No: sin(180°−θ) = sin θ. Height, perimeter and the sorted pair of diagonals also agree; the slant changes. At θ = 90° both diagonals are equal and the figure is a rectangle."
    }
  ],
  "disclaimer": "Assumes two pairs of parallel sides in one plane. Angles of 0° and 180° are excluded; a genuinely positive small angle is not treated as zero. Height and area alone do not uniquely determine inclination or the other side; results are rounded."
};
