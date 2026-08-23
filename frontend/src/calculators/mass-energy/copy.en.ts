import type { CalculatorCopy } from '../../lib/platform/types';

export const massEnergyCopyEn: CalculatorCopy = {
  name: "Mass-energy equivalence calculator",
  slug: "mass-energy-equivalence",
  shortDescription: "Rest energy of a mass from E=mc² in joules, kilowatt-hours and tonnes of TNT.",
  longDescription:
    "The most famous equation in physics answers a simple question: how much energy is locked in matter if it were converted entirely. The answer is enormous and therefore unreadable in joules — a gram of matter yields nearly nine times ten to the thirteenth. That is why kilowatt-hours and tonnes of TNT equivalent are printed alongside: they supply the scale. Mass is entered in grams, because in kilograms any everyday figure would need three zeros after the decimal point.",
  seoTitle: "E=mc² calculator — rest energy of a mass",
  seoDescription: "Calculate the rest energy of matter from E=mc² in joules, kilowatt-hours and tonnes of TNT equivalent.",
  h1: "Mass-energy equivalence calculator",
  keywords: ["E=mc2", "rest energy", "mass-energy equivalence", "TNT equivalent"],
  howToUse: [
    "Mass is entered in grams: for one kilogram type 1000.",
    "The speed of light is the exact value 299,792,458 m/s — that is the definition of the metre, not a measurement.",
    "Tonnes of TNT equivalent use 4.184 gigajoules per tonne, the standard convention.",
    "This is the full conversion of mass into energy: real reactions release only a small fraction of it.",
  ],
  howItWorks: "E = m·c², mass converted from grams to kilograms, the answer shown in exponential notation and restated in kilowatt-hours and tonnes of TNT.",
  example: "One gram of matter holds 8.988·10¹³ joules — about 25 million kilowatt-hours.",
  faq: [
    { q: "Does that mean burning a gram of matter releases this much?", a: "No. The formula gives the energy of a complete conversion of mass, and that happens in full only when matter annihilates with antimatter. Nuclear fission releases about a thousandth of the mass, chemical burning about a billionth." },
    { q: "Why is the answer shown as a power of ten?", a: "Because 89,875,517,873,681.8 joules cannot be read. Exponential notation keeps the significant digits and the order of magnitude, and here the order of magnitude is the whole point." },
    { q: "Where do the tonnes of TNT come from?", a: "One tonne of TNT equivalent is defined as 4.184 gigajoules. It is not a property of a particular explosive but a unit of comparison adopted precisely so that numbers like these can be pictured." },
    { q: "Does the formula work for a moving body?", a: "For a moving body the kinetic energy adds to the rest energy, and the total is found through the relativistic factor. What is computed here is the rest energy — the energy locked in the mass itself." },
  ],
};
