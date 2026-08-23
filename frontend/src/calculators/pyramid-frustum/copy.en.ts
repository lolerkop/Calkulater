import type { CalculatorCopy } from '../../lib/platform/types';

export const pyramidFrustumCopyEn: CalculatorCopy = {
  name: "Pyramid frustum calculator",
  slug: "pyramid-frustum",
  shortDescription: "Volume, slant height and surfaces of a square pyramid frustum.",
  longDescription:
    "The main trap with a frustum is taking the average base area and multiplying by the height. That underestimates the answer: the formula carries a third term, the square root of the product of the areas. It is Simpson's rule, and it is exact rather than approximate, because the cross-section varies quadratically with height. The slant height comes from the difference of the half-sides: the face leans exactly as much as the top base is narrower on each side.",
  seoTitle: "Pyramid frustum calculator — volume and surfaces",
  seoDescription: "Compute the volume, slant height, lateral and total surface of a truncated pyramid with square bases.",
  h1: "Pyramid frustum calculator",
  keywords: ["pyramid frustum", "frustum volume", "slant height", "lateral surface"],
  howToUse: [
    "The bases are taken as squares: rectangular bases need a different formula.",
    "The height is measured along the axis, not along the face — the face carries the slant height, which is longer.",
    "If the top base equals the bottom one, the shape is a prism, and the calculator says so.",
    "Any unit works as long as it is the same one: the labels say centimetres, but the arithmetic does not depend on that.",
  ],
  howItWorks: "Volume h/3·(S₁ + S₂ + √(S₁·S₂)); slant height √(h² + ((a−b)/2)²); lateral area 2·(a+b)·slant height.",
  example: "A frustum with 10 and 6 cm bases and a height of 8 cm has a volume of 522.7 cm³.",
  faq: [
    { q: "Why not average the base areas and multiply by the height?", a: "Because the cross-section varies quadratically with height, not linearly. The arithmetic mean of the areas underestimates the volume; the correct formula adds the square root of their product." },
    { q: "How does slant height differ from height?", a: "The height runs along the axis, the slant height along the middle of a face from edge to edge. The slant height is always longer, and it is what the face area is computed from." },
    { q: "What about rectangular bases?", a: "The volume formula is the same with the areas taken as products of sides. The lateral surface, however, splits into two pairs of different trapezoids, and there are two slant heights." },
    { q: "Where does this shape appear?", a: "Foundation pads, hoppers and funnels, lampshades, and classical architecture from ziggurats to pedestals. The volume is for concrete, the lateral area for cladding." },
  ],
};
