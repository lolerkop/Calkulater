import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRegularPolygonCopyEn: CalculatorCopy = {
  name: "Regular polygon calculator",
  slug: "regular-polygon-calculator",
  shortDescription: "Area, perimeter, apothem and angles of a regular polygon.",
  longDescription:
    "Works a regular polygon — equal sides and equal angles: a hexagonal tile, an octagonal gazebo, a triangular or pentagonal plot. The number of sides must be a whole number and at least three: two segments cannot enclose a polygon, and a fractional side count has no meaning. The interior angle is reported in degrees even though the area uses a tangent in radians — the two measures must never be mixed up.",
  seoTitle: "Regular polygon calculator — area and perimeter",
  seoDescription: "Calculate the area, perimeter, apothem and interior angle of a regular polygon from the number of sides and the side length.",
  h1: "Regular polygon calculator",
  keywords: ["regular polygon calculator", "hexagon area calculator", "pentagon area", "apothem calculator"],
  howToUse: ["Choose the length unit.", "Enter the number of sides — a whole number, at least three.", "Enter the side length and read the area."],
  howItWorks: "S = n · a² ÷ (4 · tan(π ÷ n)), P = n · a and the apothem is m = a ÷ (2 · tan(π ÷ n)); the interior angle is (n − 2) · 180° ÷ n.",
  example: "A regular hexagon with a side of 2 cm has an area of 10.392 cm² and an interior angle of 120°.",
  faq: [
    { q: "Why can I not enter two sides?", a: "Two segments cannot enclose a figure: a polygon starts at three sides, and that is a definition rather than a limit of the calculator." },
    { q: "What is the apothem?", a: "The distance from the centre to the middle of a side — the radius of the inscribed circle. It is the handy number for checking whether the shape fits an opening." },
    { q: "Why must the side count be a whole number?", a: "A side either exists or it does not; half a side is meaningless for a polygon, so a fractional value is rejected." },
    { q: "What unit is the angle in?", a: "Degrees. Internally the area uses a tangent of radians, but the reported angle is converted to the familiar degrees." },
  ],
};
