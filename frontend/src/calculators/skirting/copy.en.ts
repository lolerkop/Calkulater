import type { CalculatorCopy } from '../../lib/platform/types';

export const skirtingCopyEn: CalculatorCopy = {
  name: "Skirting board calculator",
  slug: "skirting-board",
  shortDescription: "Skirting length around a room, less doorways, cut into planks.",
  longDescription:
    "Skirting follows the perimeter rather than the area, and both common mistakes sit on either side of that. The first is forgetting to deduct the doorways and buying too much. The second, and the costlier one, is deducting them and leaving no allowance: every corner eats length in the mitre cut, and on a room with five corners that shows. Planks are rounded up, because a shop will not sell half of one.",
  seoTitle: "Skirting board calculator — length and number of planks",
  seoDescription: "Work out the skirting length from the room dimensions, less doorways, with a cutting allowance and the number of planks.",
  h1: "Skirting board calculator",
  keywords: ["skirting board", "skirting length", "baseboard", "plank cutting"],
  howToUse: [
    "Measure along the walls rather than the floor: skirting runs against the walls.",
    "Doorways are deducted in full: there is no skirting under a door frame.",
    "A 5 per cent allowance suits a rectangular room; allow 10 for a complicated outline.",
    "Add alcoves and projections to the length or width by hand: the calculator assumes a rectangle.",
  ],
  howItWorks: "Perimeter 2·(length+width) less doorways, multiplied by the allowance; planks are rounded up to whole pieces.",
  example: "A 5.2×3.4 room with two 0.9 m doorways needs 16.17 m of skirting — seven 2.5 m planks.",
  faq: [
    { q: "Why an allowance if the perimeter is known exactly?", a: "Every internal and external corner is cut at forty-five degrees and part of the plank goes into the mitre. On a rectangular room that is about five per cent; with alcoves it is twice as much." },
    { q: "Should doorways be deducted?", a: "Yes — skirting is not fitted under a door frame. If you have an opening without a frame, do not deduct it: set zero doorways and add its width back." },
    { q: "How do I handle an irregular room?", a: "Add the perimeter by hand and enter half of it as the length and the other half as the width: the calculator doubles the sum of the sides anyway." },
    { q: "Should I count skirting behind furniture?", a: "Usually yes: skirting is often fitted behind built-in units so the joint stays covered if things are moved. If you are certain it is not needed, deduct that length as an extra doorway." },
  ],
};
