import type { CalculatorCopy } from '../../lib/platform/types';

export const stairsCopyEn: CalculatorCopy = {
  name: "Stair rise and run calculator",
  slug: "stair-rise-run",
  shortDescription: "Step count, riser height, total run and pitch angle.",
  longDescription:
    "Lays out a stair flight: from the total rise and a maximum riser height it works out the number of risers, then recalculates the riser height back so that every step comes out identical. Uneven risers in one flight are the commonest cause of a stumble, and rounding up here is not an allowance but a requirement — rounding down would push the step above the permitted height. The comfort rule 2h + b then shows whether the flight matches a normal human stride.",
  seoTitle: "Stair rise and run calculator — steps, riser height, pitch",
  seoDescription: "Calculate a staircase: number of steps from the maximum riser height, the total run, the pitch angle and the 2h + b comfort rule.",
  h1: "Stair rise and run calculator",
  keywords: ["stair calculator", "rise and run calculator", "riser height calculator", "staircase pitch calculator"],
  howToUse: [
    "Measure the total rise — finished floor below to finished floor above.",
    "Set the tread depth your foot will land on.",
    "Give the maximum riser height, usually between 0.15 and 0.19 m.",
    "Check the comfort rule: twice the riser plus the tread should land in 0.60–0.65 m.",
  ],
  howItWorks: "Risers = total rise divided by the maximum riser height, rounded up. Riser height = total rise divided by that count. There is one tread fewer: the upper landing is not a step.",
  example: "A 2.8 m rise with a 0.18 m limit gives 16 risers of 0.175 m, 15 treads and a 4.2 m run.",
  faq: [
    { q: "Why is there one tread fewer than risers?", a: "Because the last riser lands on the upper floor, and there is no separate step there." },
    { q: "Why round the step count up?", a: "Rounding down would make the riser taller than the limit you set. That limit is a safety constraint, so it cannot be exceeded even slightly." },
    { q: "What does the 2h + b rule mean?", a: "Twice the riser height plus the tread depth. The figure roughly matches a human stride, and comfortable stairs land in 0.60–0.65 m." },
    { q: "What pitch angle is normal?", a: "For a domestic stair usually 30–40°. Steeper than 45° needs a handrail to descend, shallower than 25° simply eats floor space." },
  ],
};
