import type { CalculatorCopy } from '../../lib/platform/types';

export const geomTriangleCopyEn: CalculatorCopy = {
  name: "Triangle calculator",
  slug: "triangle-calculator",
  shortDescription: "Area and perimeter of a triangle from three sides or from base and height.",
  longDescription:
    "Works a triangle two ways: from three sides by Heron’s formula, or from a base and its height as half their product. Three sides are checked against the triangle inequality first — if any two do not exceed the third, the figure does not exist, and the calculator says so instead of returning a zero that reads like an answer. It also reports the kind of triangle: right, acute or obtuse.",
  seoTitle: "Triangle calculator — area from three sides or from height",
  seoDescription: "Calculate the area and perimeter of a triangle from three sides using Heron’s formula, or from base and height.",
  h1: "Triangle calculator",
  keywords: ["triangle calculator", "area of a triangle", "heron formula calculator", "triangle perimeter"],
  howToUse: ["Choose the length unit.", "Say whether you know three sides or a base and its height.", "Enter the values and read the area."],
  howItWorks: "From three sides the area is Heron’s S = √(p(p−a)(p−b)(p−c)) with p the semi-perimeter; from base and height it is S = ½ · a · h.",
  example: "A triangle with sides of 3, 4 and 5 m is right-angled: its area is 6 m² and its perimeter 12 m.",
  faq: [
    { q: "Why are some sets of sides rejected?", a: "Three segments form a triangle only when any two of them are longer than the third. Sides of 1, 2 and 3 lie on a straight line — there is no figure, so it has no area at all rather than an area of zero." },
    { q: "What is Heron’s formula?", a: "A way to find the area from three sides without angles or heights: compute the semi-perimeter, then take the square root of the product of four differences." },
    { q: "How is the kind of triangle decided?", a: "By comparing the square of the longest side with the sum of the squares of the other two: equal means right-angled, smaller means acute, larger means obtuse." },
    { q: "Does the height have to belong to the entered base?", a: "Yes. The height must be dropped onto the base you entered, otherwise half their product is not the area of this triangle." },
  ],
};
