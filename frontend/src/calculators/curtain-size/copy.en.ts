import type { CalculatorCopy } from '../../lib/platform/types';

export const curtainSizeCopyEn: CalculatorCopy = {
  name: "Curtain fabric calculator",
  slug: "curtain-size",
  shortDescription: "How much fabric curtains need at a given fullness.",
  longDescription:
    "Fabric use is driven not by curtain length but by the fullness ratio \u2014 how many times the track width of fabric you take. At one and a half the panel is nearly flat, at three it is a dense wave, and the metreage doubles between them. The gathered width is then divided by the fabric width and rounded up to whole drops: you cannot buy half a drop, and nobody seams a curtain down the middle.",
  seoTitle: "Curtain fabric calculator \u2014 from track width and fullness",
  seoDescription: "Calculate curtain fabric from track width, fullness ratio, fabric width and finished height.",
  h1: "Curtain fabric calculator",
  keywords: ["curtain fabric", "curtain fullness", "fabric quantity", "making curtains"],
  howToUse: [
    "Fullness: 1.5 is nearly flat, 2 is a normal pleat, 2.5\u20133 is a dense wave.",
    "Fabric width comes off the roll; curtain fabric is often 280\u2013300 cm.",
    "The allowance covers the bottom hem and the heading tape \u2014 usually 20\u201330 cm.",
    "For a large pattern add the repeat: matching eats up to half a metre per drop.",
  ],
  howItWorks: "Gathered width = track \u00d7 fullness; drops rounded up; fabric = drops \u00d7 (height + allowance).",
  example: "A 140 cm track at fullness 2 on 280 cm fabric needs 2.7 m.",
  faq: [
    { q: "Which fullness should I choose?", a: "One and a half gives a nearly flat panel and suits light voile on eyelets; two is a normal pleat; two and a half or more is a dense wave for heavy curtains. Consumption rises in direct proportion, which makes this the most expensive decision in the cut." },
    { q: "Why round drops up?", a: "A drop is a cut across the full roll width, and half of one cannot be bought. The surplus goes into the side hems; nobody seams a curtain down the middle." },
    { q: "Should I allow for the pattern repeat?", a: "Not for a plain fabric. For a large repeating pattern add one repeat per drop: matching eats up to half a metre." },
    { q: "Which fabric width is more economical?", a: "The one that leaves fewer offcuts. If the curtain height is less than the fabric width, fabric is sometimes railroaded \u2014 then consumption follows the height instead of the width." },
  ],
};
