import type { CalculatorCopy } from '../../lib/platform/types';

export const beltLengthCopyEn: CalculatorCopy = {
  name: "Belt length calculator",
  slug: "belt-length",
  shortDescription: "Belt length from centre distance and pulley diameters.",
  longDescription:
    "The length of an open belt drive is two straight runs, half the circumference of each pulley, and a small correction for the fact that unequal pulleys make the runs non-parallel. With equal pulleys the correction vanishes and the formula collapses to \"two centre distances plus one circumference\". The wrap angle on the small pulley is shown separately: it is what limits transmissible torque, and with very unequal diameters the belt starts to slip.",
  seoTitle: "Belt length calculator \u2014 from centre distance and pulleys",
  seoDescription: "Calculate belt length from the centre distance and the diameters of two pulleys, with wrap angle and speed ratio.",
  h1: "Belt length calculator",
  keywords: ["belt length", "belt drive", "centre distance", "pulley wrap angle"],
  howToUse: [
    "Use pitch diameters \u2014 measured at the belt centreline, not the outer rim of the pulley.",
    "The order of the diameters does not matter: the calculation finds the smaller pulley itself.",
    "A wrap angle below 120\u00b0 risks slipping \u2014 add an idler.",
    "For a V-belt pick the nearest standard length, usually rounding up.",
  ],
  howItWorks: "L = 2C + \u03c0(D\u2081+D\u2082)/2 + (D\u2082\u2212D\u2081)\u00b2/(4C).",
  example: "Pulleys of 100 and 200 mm at a 300 mm centre distance need a 1079.08 mm belt.",
  faq: [
    { q: "Why the correction for unequal diameters?", a: "With unequal pulleys the straight runs sit at an angle rather than parallel, so they are longer than the plain centre distance. The correction accounts for that; with equal diameters it vanishes." },
    { q: "Why is a small wrap angle a problem?", a: "A belt transmits force by friction, which grows with wrap angle. Below roughly 120\u00b0 there is not enough grip, the belt slips and heats \u2014 then you add an idler or move the shafts further apart." },
    { q: "What if no standard length matches?", a: "Take the next size up and take up the slack with the centre distance, which is almost always adjustable. That is why drives are built with slides or a tensioner." },
    { q: "Does this work for a toothed belt?", a: "The length is computed the same way, but a toothed belt must be a whole number of pitches. There you pick a tooth count from the standard range rather than a length." },
  ],
};
