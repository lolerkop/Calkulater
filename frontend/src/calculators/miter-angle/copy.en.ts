import type { CalculatorCopy } from '../../lib/platform/types';

export const miterAngleCopyEn: CalculatorCopy = {
  name: "Miter angle calculator",
  slug: "miter-angle",
  shortDescription: "The cut angle for joining two pieces at a corner.",
  longDescription:
    "Each piece is cut at half the corner angle — but that is not the number you set on the saw. A mitre saw's scale reads from the crosscut, that is from 90°, so the complement goes on it. At a right angle the two numbers happen to coincide at 45°, and that is exactly what misleads people: at a 135° corner you cut 67.5° but set 22.5° on the saw. Both figures get their own row so they cannot be swapped.",
  seoTitle: "Miter angle calculator — mitred joint",
  seoDescription: "Calculate the cut angle for skirting or trim at a mitred joint: half the corner angle and the value for the mitre saw scale.",
  h1: "Miter angle calculator",
  keywords: ["miter angle", "mitred joint", "mitre saw", "trim cut angle"],
  howToUse: [
    "Measure the actual wall angle with a protractor: in real rooms a right angle is rarely exactly right.",
    "The mitre saw scale takes the \"saw setting from 90°\" row, not the cut angle itself.",
    "The two pieces are cut mirrored: one to the left, one to the right of the same setting.",
    "Crown moulding sitting at a tilt also needs a bevel angle — a flat cut by this formula will leave a gap.",
  ],
  howItWorks: "Cut angle = corner angle / 2; the saw is set to 90° − cut angle.",
  example: "A 90° corner gives the classic mitre: a 45° cut, and 45° on the saw too.",
  faq: [
    { q: "Why is the saw number different?", a: "A mitre saw's scale measures the deviation from the crosscut, that is from 90°. A 67.5° cut means turning the saw 22.5° off square. At a 90° corner both numbers are 45°, and that coincidence is what gets memorised wrongly." },
    { q: "Why does the cut not meet in a real corner?", a: "Because walls are rarely at a true 90°. Even two degrees out leaves a visible gap on wide skirting — which is why the angle is measured on site rather than taken off a drawing." },
    { q: "Does this cover crown moulding?", a: "Only for a flat cut. Crown sits tilted to both surfaces and needs a compound cut — the mitre angle together with a bevel angle on the saw." },
    { q: "What about a very sharp corner?", a: "The cut comes out long and thin, and the edge crumbles. Below roughly 30° the mitre is usually replaced by a cover piece, or the stock is cut oversize and fitted by hand." },
  ],
};
