import type { CalculatorCopy } from '../../lib/platform/types';

export const finalGradeCopyEn: CalculatorCopy = {
  name: "Final grade calculator",
  slug: "final-grade-calculator",
  shortDescription: "The exam mark you need to reach a target final grade.",
  longDescription:
    "Works backwards from the grade you want: the current mark contributes its share, the exam contributes the rest, and the difference is what the exam has to deliver. A result above one hundred is an answer rather than an error — it says the target is out of reach with one exam, and the number tells you by how much.",
  seoTitle: "Final grade calculator — the exam mark you need",
  seoDescription: "Work out the exam mark needed to reach a target final grade from your current standing and the exam weight.",
  h1: "Final grade calculator",
  keywords: ["final grade calculator", "exam mark needed", "grade weight"],
  howToUse: ["Enter your current grade as a percentage.", "Enter the final grade you are aiming for.", "Enter how much the exam weighs."],
  howItWorks: "Required mark = (target − current × (1 − weight)) ÷ weight, with the weight as a fraction.",
  example: "At 78 percent with an exam worth 30 percent, reaching 85 would need 101.33 — more than the exam can give.",
  faq: [
    { q: "What does exam weight mean?", a: "The share the exam takes in the final grade. The rest comes from work already done, and the two add up to one hundred percent." },
    { q: "Why can the answer exceed one hundred?", a: "Because the target is no longer reachable with that single exam. The figure is kept so you can see how large the shortfall is." },
    { q: "Is the current grade a percentage?", a: "Yes. If your course marks out of a different scale, convert it first — the calculation works in percent throughout." },
    { q: "Does this convert to a letter grade?", a: "No. Letter scales differ by school and country, and without a reference table any conversion would be invented." },
  ],
};
