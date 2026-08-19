import type { CalculatorCopy } from '../../lib/platform/types';

export const geomTrapezoidCopyEn: CalculatorCopy = {
  name: "Trapezoid calculator",
  slug: "trapezoid-calculator",
  shortDescription: "Area of a trapezoid from its two bases and height; perimeter from the legs.",
  longDescription:
    "Computes the area of a trapezoid as the half-sum of the two parallel sides times the height — the formula behind a sloped plot, a roof pitch or a hopper wall. The legs are optional: without them you get the area, with them the perimeter as well. The height here is the perpendicular distance between the bases, not the length of a leg, and that is the mistake people most often make when measuring.",
  seoTitle: "Trapezoid calculator — area and perimeter",
  seoDescription: "Calculate the area of a trapezoid from its two bases and height, and the perimeter from its legs.",
  h1: "Trapezoid calculator",
  keywords: ["trapezoid calculator", "area of a trapezoid", "trapezium area calculator"],
  howToUse: ["Choose the length unit.", "Enter both bases and the height between them.", "Add the legs if you also want the perimeter."],
  howItWorks: "S = ((a + b) ÷ 2) · h — the area equals the midline times the height; the perimeter is the sum of all four sides.",
  example: "A trapezoid with bases of 10 and 6 m and a height of 4 m has an area of 32 m² and a midline of 8 m.",
  faq: [
    { q: "Which height does the formula need?", a: "The perpendicular distance between the bases. A sloping leg is longer than the height and must not be substituted for it." },
    { q: "What is the midline?", a: "The segment joining the midpoints of the legs. It equals the half-sum of the bases, and the area is simply the midline times the height." },
    { q: "Do I have to enter the legs?", a: "No. Without them you get the area and the midline; the perimeter appears only once both legs are given." },
    { q: "Does the formula work for any trapezoid?", a: "Yes — isosceles, right-angled or irregular. All that matters is that the two entered bases are the parallel pair." },
  ],
};
