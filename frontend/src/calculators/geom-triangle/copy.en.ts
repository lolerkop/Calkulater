import type { CalculatorCopy } from '../../lib/platform/types';

export const geomTriangleCopyEn: CalculatorCopy = {
  "name": "Triangle calculator",
  "slug": "triangle-calculator",
  "shortDescription": "Triangle area from three sides or base and height; perimeter and classification require all three sides.",
  "longDescription": "Works a triangle two ways: from three sides by Heron’s formula, or from a base and its height as half their product. Three sides are checked against the triangle inequality first — if any two do not exceed the third, the figure does not exist, and the calculator says so instead of returning a zero that reads like an answer. It also reports the kind of triangle: right, acute or obtuse.",
  "seoTitle": "Triangle calculator — area from three sides or from height",
  "seoDescription": "Triangle area from three sides or base and height; perimeter and classification require all three sides.",
  "h1": "Triangle calculator",
  "keywords": [
    "triangle calculator",
    "area of a triangle",
    "heron formula calculator",
    "triangle perimeter"
  ],
  "howToUse": [
    "Choose three sides, or a base and its corresponding perpendicular height.",
    "Enter positive lengths in one unit.",
    "In sides mode any two sides must strictly exceed the third; perimeter and angle classification are available only in that mode.",
    "Near a flat triangle a small measurement error can strongly change the area."
  ],
  "howItWorks": "First p = (a+b+c)/2, then S = √(p(p−a)(p−b)(p−c)). The four factors are p and three differences. The calculation uses the equivalent expression S = √[(a+b+c)(−a+b+c)(a−b+c)(a+b−c)/16], retaining small differences before rounding. From base a and perpendicular height h: S = ah/2. Perimeter a+b+c and classification by squared sides require all three sides.",
  "example": "A triangle with sides of 3, 4 and 5 m is right-angled: its area is 6 m² and its perimeter 12 m.",
  "faq": [
    {
      "q": "Why are some sets of sides rejected?",
      "a": "Positive area requires any two sides to sum to more than the third. With sides 1, 2 and 3 the points lie on a line: a degenerate zero-area case excluded by this calculator’s scope."
    },
    {
      "q": "What is Heron’s formula?",
      "a": "First p = (a+b+c)/2, then S = √(p(p−a)(p−b)(p−c)). The four factors are p and three differences. The calculation uses the equivalent expression S = √[(a+b+c)(−a+b+c)(a−b+c)(a+b−c)/16], retaining small differences before rounding."
    },
    {
      "q": "How is the kind of triangle decided?",
      "a": "By comparing the square of the longest side with the sum of the squares of the other two: equal means right-angled, smaller means acute, larger means obtuse."
    },
    {
      "q": "Does the height have to belong to the entered base?",
      "a": "Yes. The height must be dropped onto the base you entered, otherwise half their product is not the area of this triangle."
    },
    {
      "q": "Can base and height determine a triangle’s perimeter?",
      "a": "No. Triangles with the same base and height have the same area but may have different other sides. Base 6 and height 4 give area 12; the symmetric triangle has two sides of 5, while moving its vertex changes those sides."
    }
  ],
  "disclaimer": "Only planar triangles of positive area. Collinear sides are excluded by this calculation’s scope. Classification compares the entered numbers without a measurement tolerance; it does not certify a real object’s angle. Results are rounded."
};
