import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRightTriangleCopyEn: CalculatorCopy = {
  "name": "Right triangle calculator",
  "slug": "right-triangle-calculator",
  "shortDescription": "Hypotenuse, leg, area and perimeter by the Pythagorean theorem.",
  "longDescription": "Completes a right triangle in either direction: two legs give the hypotenuse, a leg plus the hypotenuse gives the other leg. The second mode is the stricter one — the hypotenuse must be longer than the leg, otherwise the value under the root turns negative and the result stops existing. This is the calculation behind the builder’s 3-4-5 trick for checking a square corner.",
  "seoTitle": "Right triangle calculator — hypotenuse and leg",
  "seoDescription": "Find the hypotenuse from two legs or the missing leg from the hypotenuse, plus the area and perimeter of a right triangle.",
  "h1": "Right triangle calculator",
  "keywords": [
    "right triangle calculator",
    "pythagorean theorem calculator",
    "find the hypotenuse",
    "find the missing leg"
  ],
  "howToUse": [
    "Choose two legs, or one leg and the hypotenuse.",
    "The legs meet at a right angle; the hypotenuse lies opposite it.",
    "Use positive lengths in one unit.",
    "In the inverse mode the hypotenuse must be strictly longer than the known leg.",
    "Use a different calculation for a general triangle."
  ],
  "howItWorks": "a² + b² = c², so c = √(a² + b²) and b = √(c² − a²). The area of a right triangle is half the product of its legs.",
  "example": "Legs of 3 and 4 m give a hypotenuse of 5 m, an area of 6 m² and a perimeter of 12 m.",
  "faq": [
    {
      "q": "Why can the hypotenuse not equal a leg?",
      "a": "The hypotenuse is the longest side of a right triangle. If they were equal the other leg would be zero and the triangle would collapse into a segment."
    },
    {
      "q": "What is the 3-4-5 rule?",
      "a": "A layout trick: mark 3 and 4 units along two sides, and if the diagonal measures exactly 5 the angle between them is square. It is a special case of the Pythagorean theorem."
    },
    {
      "q": "How is the area calculated?",
      "a": "As half the product of the legs: they are perpendicular, so one acts as the base and the other as the height."
    },
    {
      "q": "Can the hypotenuse be shorter than a leg?",
      "a": "No. Such a set does not describe a triangle, and the calculator says so rather than returning the root of a negative number."
    },
    {
      "q": "Why do measurements matter when the hypotenuse nearly equals a leg?",
      "a": "The other leg is b = √((c−a)(c+a)). A small difference c−a can have a large relative measurement error. Rounding c and a to the same value creates a degenerate case; keep the original measurement precision."
    }
  ],
  "disclaimer": "A right angle is an assumption of the model; two lengths do not establish it. Zero-area cases are excluded. A rounded answer does not replace checking angles, tolerances and measurement accuracy."
};
