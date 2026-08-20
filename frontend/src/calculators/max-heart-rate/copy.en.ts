import type { CalculatorCopy } from '../../lib/platform/types';

export const maxHeartRateCopyEn: CalculatorCopy = {
  name: "Maximum heart rate calculator",
  slug: "maximum-heart-rate-calculator",
  shortDescription: "Estimated maximum heart rate and training zone boundaries from heart rate reserve.",
  longDescription:
    "Estimates maximum heart rate from age and lays out the training zones. Several formulas exist and they diverge noticeably: «220 − age» is the simplest but systematically overstates the figure for older people and understates it for younger ones, while the Tanaka formula is built on measurements and has a different slope. The choice is left to you, because five to seven beats shifts every zone boundary. When a resting rate is supplied the zones follow the Karvonen method — computed from heart rate reserve rather than straight from the maximum, which lifts the lower zones appreciably.",
  seoTitle: "Maximum heart rate calculator with training zones",
  seoDescription: "Estimate your maximum heart rate from age and calculate training zone boundaries from heart rate reserve using the Karvonen method.",
  h1: "Maximum heart rate calculator",
  keywords: ["maximum heart rate calculator", "heart rate zones", "karvonen formula", "heart rate reserve"],
  howToUse: [
    "Enter your age in whole years.",
    "Choose a formula: the classic one is simpler, Tanaka is closer for adults.",
    "Measure your resting heart rate in the morning before getting up and enter it.",
    "Use the zone table: lower zones for steady work, upper ones for intervals.",
  ],
  howItWorks:
    "Maximum heart rate is estimated from age by the chosen formula. Heart rate reserve = maximum minus resting rate. A zone boundary = resting rate + a share of the reserve; without a resting rate the reserve equals the maximum and zones become straight shares of it.",
  example: "At 35 the «220 − age» formula gives 185, and with a resting rate of 60 the aerobic zone runs from 148 to 160 beats.",
  faq: [
    { q: "How accurate is an age-based estimate?", a: "It is a population average rather than a measurement: individual variation reaches ten to twelve beats either way. The exact figure comes from a graded exercise test." },
    { q: "Which formula should I choose?", a: "«220 − age» is better known but overstates the result for older people. Tanaka rests on later measurements, and Gulati was derived from a female cohort." },
    { q: "Why does resting heart rate matter?", a: "It lets zones be computed from heart rate reserve rather than from the maximum. For a trained person with a low resting rate the zones shift noticeably, and without it the lower bounds come out too low." },
    { q: "How do I measure resting heart rate?", a: "In the morning, immediately on waking, lying down, before getting up or having coffee. An average over three or four days works well." },
    { q: "Can I train by these zones without preparation?", a: "The calculation is a reference point, not a training plan. With heart or blood-pressure problems, or after a long break, agree your training load with a doctor." },
  ],
};
