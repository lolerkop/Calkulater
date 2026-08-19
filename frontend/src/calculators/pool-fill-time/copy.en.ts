import type { CalculatorCopy } from '../../lib/platform/types';

export const poolFillTimeCopyEn: CalculatorCopy = {
  name: "Pool fill time calculator",
  slug: "pool-fill-time-calculator",
  shortDescription: "How long a pool takes to fill at a known flow rate.",
  longDescription:
    "Takes the volume — given directly, or from the dimensions of a rectangular or round pool — converts it to litres and divides by the flow. Exactly three shapes are supported, the ones that actually come up; an arbitrary basin will not fit here, and the calculator does not pretend otherwise.",
  seoTitle: "Pool fill time calculator — hours from volume and flow",
  seoDescription: "Work out how long a pool takes to fill from its volume or dimensions and the flow rate of the water supply.",
  h1: "Pool fill time calculator",
  keywords: ["pool fill time calculator", "how long to fill a pool", "pool volume litres"],
  howToUse: ["Choose whether you know the volume or the dimensions.", "Enter the figures for that shape.", "Enter the flow rate and pick its unit."],
  howItWorks: "Volume in cubic metres becomes litres by multiplying by a thousand; the time is that divided by the flow per minute.",
  example: "A 32 m³ pool at 20 litres per minute takes 1600 minutes, or about 26.7 hours.",
  faq: [
    { q: "Where do I find the flow rate?", a: "Fill a bucket of known volume and time it. A garden hose and a mains supply differ by several times, so measuring beats guessing." },
    { q: "Should I measure the depth I actually fill to?", a: "Yes. Pools are rarely filled to the brim, and the water line is what determines the volume." },
    { q: "Are other shapes supported?", a: "No, only a known volume, a rectangle and a circle. An oval or freeform basin would need a geometry the calculator does not have." },
    { q: "Does the flow stay constant in practice?", a: "Rarely. Pressure drops as demand rises elsewhere, so treat the result as a lower bound on the time." },
  ],
};
