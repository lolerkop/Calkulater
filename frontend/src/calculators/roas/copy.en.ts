import type { CalculatorCopy } from '../../lib/platform/types';

export const roasCopyEn: CalculatorCopy = {
  name: "ROAS calculator",
  slug: "roas-calculator",
  shortDescription: "Return on ad spend, with ROI beside it.",
  longDescription:
    "Divides revenue by advertising spend. ROAS and ROI describe the same campaign but differ by exactly one in the multiple: four times return is three hundred percent ROI, and quoting one where the other is meant overstates or understates performance badly. Both are shown so the difference is visible.",
  seoTitle: "ROAS calculator — return on ad spend and ROI",
  seoDescription: "Calculate return on ad spend as a multiple and a percentage, with ROI and the gross-margin view shown alongside.",
  h1: "ROAS calculator",
  keywords: ["roas calculator", "return on ad spend", "roas vs roi"],
  howToUse: ["Enter the revenue the campaign produced.", "Enter what it cost to run.", "Add your gross margin for the profit view."],
  howItWorks: "ROAS = revenue ÷ spend; ROI = (revenue − spend) ÷ spend × 100.",
  example: "480 000 from 120 000 of spend is a ROAS of 4×, which is an ROI of 300 percent.",
  faq: [
    { q: "Is ROAS the same as ROI?", a: "No. ROAS divides revenue by spend; ROI divides profit by spend. They differ by exactly one in the multiple, which is why both appear here." },
    { q: "What does the margin view add?", a: "Revenue is not profit. Applying gross margin shows how much of the return actually survives the cost of goods." },
    { q: "Is a ROAS above one always good?", a: "Not necessarily. It only covers the ad spend; everything else the business pays for still has to come out of the remainder." },
    { q: "Why is zero spend rejected?", a: "Dividing by it has no value. With nothing spent there is no return on spend to speak of." },
  ],
};
