import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRhombusCopyEn: CalculatorCopy = {
  "name": "Rhombus calculator",
  "slug": "rhombus-calculator",
  "shortDescription": "Area, side, perimeter and height of a rhombus from its two diagonals.",
  "longDescription": "Calculates a rhombus’s area, side, perimeter and height from its two complete diagonals. The diagonals of a rhombus cross at right angles and bisect each other, so the side is the hypotenuse of a right triangle with legs d₁/2 and d₂/2, and the area is half their product. The height follows from the area as h = S/a, with no need to know any angle. A rhombus with equal diagonals is a square, and the calculator handles that case without special-casing.",
  "seoTitle": "Rhombus calculator: area, side and perimeter",
  "seoDescription": "Calculate the area, side, perimeter and height of a rhombus from its two diagonals.",
  "h1": "Rhombus calculator",
  "keywords": [
    "rhombus calculator",
    "area of a rhombus",
    "side of a rhombus",
    "rhombus perimeter"
  ],
  "howToUse": [
    "Check that the figure is a rhombus with four equal sides.",
    "Enter the full lengths of both diagonals, not their halves, in one unit.",
    "The area uses that unit squared.",
    "Compare height with side length: height is no greater than the side and equals it for a square."
  ],
  "howItWorks": "Area S = d₁·d₂/2. The side a = √((d₁/2)² + (d₂/2)²), because the diagonals bisect each other at right angles. Perimeter P = 4a and height h = S/a.",
  "example": "A rhombus with diagonals of 6 and 8 cm has an area of 24 cm², a side of 5 cm and a height of 4.8 cm.",
  "faq": [
    {
      "q": "Why is the area half the product of the diagonals?",
      "a": "The diagonals cut the rhombus into four right triangles with legs d₁/2 and d₂/2. Their combined area comes to d₁·d₂/2."
    },
    {
      "q": "How does a rhombus differ from a parallelogram?",
      "a": "A rhombus is a parallelogram with four equal sides. Every parallelogram has equal opposite sides, but adjacent sides may differ. Two diagonal lengths determine a rhombus up to position; a general parallelogram needs the angle between its diagonals or other information as well."
    },
    {
      "q": "What if the diagonals are equal?",
      "a": "You get a square — a rhombus with right angles. The calculation does not change: the side works out to d/√2 and the height equals the side."
    },
    {
      "q": "Can I use a side and an angle instead?",
      "a": "Mathematically yes, but this calculator wants diagonals. In practice they are easier to obtain: an angle needs a protractor, a diagonal only a ruler."
    },
    {
      "q": "Why is the height smaller than the side?",
      "a": "The height is the distance between two parallel sides, while the side itself runs at a slant. They would coincide only for a square standing on its side, that is at a right angle."
    },
    {
      "q": "Are perpendicular diagonals enough for every rhombus formula?",
      "a": "No. They must also bisect each other and all four sides must be equal. Another quadrilateral with perpendicular diagonals may have the same area formula, but √((d₁/2)²+(d₂/2)²) for its side and 4a for its perimeter are not generally valid."
    }
  ],
  "disclaimer": "Diagonals are assumed perpendicular and to bisect each other, as they do in a rhombus. Two diagonal lengths do not determine an arbitrary quadrilateral this way. All dimensions must be positive; results are rounded."
};
