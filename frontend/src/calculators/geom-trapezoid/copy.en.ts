import type { CalculatorCopy } from '../../lib/platform/types';

export const geomTrapezoidCopyEn: CalculatorCopy = {
  "name": "Trapezoid calculator",
  "slug": "trapezoid-calculator",
  "shortDescription": "Area of a trapezoid from its two bases and height; perimeter from the legs.",
  "longDescription": "Computes the area of a trapezoid as the half-sum of the two parallel sides times the height — the formula behind a sloped plot, a roof pitch or a hopper wall. The legs are optional: without them you get the area, with them the perimeter as well. The height here is the perpendicular distance between the bases, not the length of a leg, and that is the mistake people most often make when measuring.",
  "seoTitle": "Trapezoid calculator — area and perimeter",
  "seoDescription": "Calculate the area of a trapezoid from its two bases and height, and the perimeter from its legs.",
  "h1": "Trapezoid calculator",
  "keywords": [
    "trapezoid calculator",
    "area of a trapezoid",
    "trapezium area calculator"
  ],
  "howToUse": [
    "Enter the two parallel bases and their perpendicular separation in one unit.",
    "For area alone leave both legs blank or zero.",
    "For perimeter enter both positive legs, consistent with the bases and height.",
    "A dimension on a slope must be measured in the plane of the figure rather than as its projection."
  ],
  "howItWorks": "S = ((a + b) ÷ 2) · h — the area equals the midline times the height; the perimeter is the sum of all four sides.",
  "example": "Bases 10 and 6 m with height 4 m give a midline of 8 m and area 32 m². Without the legs the perimeter is unknown. A separate consistent example has bases 8 and 2 m, height 4 m and legs 5 m each: midline 5 m, area 20 m², perimeter 20 m.",
  "faq": [
    {
      "q": "Which height does the formula need?",
      "a": "The perpendicular distance between the lines containing the bases. A leg is no shorter than the height; in a right trapezoid one leg may equal it. That equality does not make the whole trapezoid degenerate."
    },
    {
      "q": "What is the midline?",
      "a": "The segment joining the midpoints of the legs. It equals the half-sum of the bases, and the area is simply the midline times the height."
    },
    {
      "q": "Do I have to enter the legs?",
      "a": "No. Two blank or zero legs mean that perimeter is not requested; area and midline remain available. Perimeter needs both positive legs, no shorter than the height and geometrically consistent with the bases. A missing leg is not inferred automatically."
    },
    {
      "q": "Does the formula work for any trapezoid?",
      "a": "Yes — isosceles, right-angled or irregular. All that matters is that the two entered bases are the parallel pair."
    },
    {
      "q": "Why are bases 10 and 6, height 4 and legs 5 and 5 rejected?",
      "a": "For an isosceles trapezoid each leg’s horizontal projection is (10−6)/2 = 2. At height 4 the leg must be √20 ≈ 4.472, not 5. Legs 5 and 5 do fit bases 8 and 2 and height 4, with projections of 3."
    }
  ],
  "disclaimer": "Planar convex figure with parallel bases and positive height; equal bases are accepted as a parallelogram. The leg consistency check allows only calculation rounding, not construction tolerances. Area excludes extra material allowance."
};
