import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRhombusCopyEn: CalculatorCopy = {
  name: "Rhombus calculator",
  slug: "rhombus-calculator",
  shortDescription: "Area, side, perimeter and height of a rhombus from its two diagonals.",
  longDescription:
    "Works out a rhombus from its two diagonals — the most common way to describe one, because diagonals are easy to measure and angles are not. The diagonals of a rhombus cross at right angles and bisect each other, so the side is the hypotenuse of a right triangle with legs d₁/2 and d₂/2, and the area is half their product. The height follows from the area as h = S/a, with no need to know any angle. A rhombus with equal diagonals is a square, and the calculator handles that case without special-casing.",
  seoTitle: "Rhombus calculator: area, side and perimeter",
  seoDescription: "Calculate the area, side, perimeter and height of a rhombus from its two diagonals.",
  h1: "Rhombus calculator",
  keywords: ["rhombus calculator", "area of a rhombus", "side of a rhombus", "rhombus perimeter"],
  howToUse: [
    "Choose the length unit.",
    "Measure both diagonals — they meet at right angles.",
    "Enter their values.",
    "The side, perimeter and height follow at once.",
  ],
  howItWorks:
    "Area S = d₁·d₂/2. The side a = √((d₁/2)² + (d₂/2)²), because the diagonals bisect each other at right angles. Perimeter P = 4a and height h = S/a.",
  example: "A rhombus with diagonals of 6 and 8 cm has an area of 24 cm², a side of 5 cm and a height of 4.8 cm.",
  faq: [
    { q: "Why is the area half the product of the diagonals?", a: "The diagonals cut the rhombus into four right triangles with legs d₁/2 and d₂/2. Their combined area comes to d₁·d₂/2." },
    { q: "How does a rhombus differ from a parallelogram?", a: "All four sides of a rhombus are equal, while a parallelogram only has equal opposite sides. That is why two diagonals define a rhombus uniquely and a parallelogram not at all." },
    { q: "What if the diagonals are equal?", a: "You get a square — a rhombus with right angles. The calculation does not change: the side works out to d/√2 and the height equals the side." },
    { q: "Can I use a side and an angle instead?", a: "Mathematically yes, but this calculator wants diagonals. In practice they are easier to obtain: an angle needs a protractor, a diagonal only a ruler." },
    { q: "Why is the height smaller than the side?", a: "The height is the distance between two parallel sides, while the side itself runs at a slant. They would coincide only for a square standing on its side, that is at a right angle." },
  ],
};
