import type { CalculatorCopy } from '../../lib/platform/types';

export const geomConeCopyEn: CalculatorCopy = {
  name: "Cone calculator",
  slug: "cone-calculator",
  shortDescription: "Volume, slant height and surface area of a cone from radius and height.",
  longDescription:
    "Works a cone — the shape of a sand pile, a funnel, a hopper or a tent roof. Besides the volume it gives the slant height: the distance along the slope from the apex to the rim, which is what you need for cutting cladding, whereas the height is the vertical from apex to centre. Those two are the ones people mix up, and the gap is real: at radius 3 and height 4 the slant is 5.",
  seoTitle: "Cone calculator — volume, slant height, surface area",
  seoDescription: "Calculate the volume of a cone, its slant height and its lateral and total surface area from radius and height.",
  h1: "Cone calculator",
  keywords: ["cone calculator", "volume of a cone", "slant height calculator", "cone surface area"],
  howToUse: ["Choose the length unit.", "Enter the base radius and the vertical height.", "Read the volume, slant height and surfaces."],
  howItWorks: "V = π · r² · h ÷ 3, the slant height is l = √(r² + h²), the lateral surface is πrl and the total is πr(r + l).",
  example: "A cone of radius 3 m and height 4 m has a slant height of 5 m and a volume of 37.699 m³.",
  faq: [
    { q: "How does the slant height differ from the height?", a: "The height is the vertical from apex to the centre of the base; the slant is the sloping line from apex to the rim. The slant is always longer, and it is the one you need for cutting cladding." },
    { q: "Why is a cone a third of a cylinder?", a: "Because a cone with the same base and height occupies exactly one third of that cylinder — a classic result of solid geometry." },
    { q: "How do I measure a sand pile?", a: "Measure the radius at the base and the height at the centre. The pile is treated as an ideal cone, so the real volume will be slightly smaller." },
    { q: "What does the total surface include?", a: "The lateral surface plus the circular base. For an open funnel only the lateral part applies." },
  ],
};
