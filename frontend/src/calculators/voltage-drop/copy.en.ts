import type { CalculatorCopy } from '../../lib/platform/types';

export const voltageDropCopyEn: CalculatorCopy = {
  name: "Voltage drop calculator",
  slug: "voltage-drop",
  shortDescription: "Voltage lost along a cable run, from its length, cross-section and material.",
  longDescription:
    "Prices the loss that a long cable run costs you. Ohm's law alone will not do it: the resistance has to come from the geometry of the conductor and the resistivity of its metal, which is what this calculator adds. The multiplier differs by supply: in a single-phase circuit the current goes out and comes back along two conductors, so the run counts twice; in a balanced three-phase load there is no return conductor and the factor is the square root of three. Confusing the two is a reliable way to be wrong by half again.",
  seoTitle: "Voltage drop calculator for copper and aluminium cable",
  seoDescription: "Work out the voltage drop along a cable run from current, length, cross-section and conductor material, for single- or three-phase supply.",
  h1: "Voltage drop calculator",
  keywords: ["voltage drop calculator", "cable voltage loss", "cable size voltage drop", "copper aluminium resistance"],
  howToUse: [
    "Enter the current the line actually carries.",
    "Enter the one-way length of the run, not there and back.",
    "Enter the conductor cross-section in square millimetres.",
    "Choose the metal and the supply type.",
  ],
  howItWorks:
    "Resistance is resistivity times length divided by cross-section. The drop is that resistance times the current, times two for single-phase or the square root of three for three-phase.",
  example: "16 A over 20 m of 2.5 mm² copper on a single-phase 230 V supply drops 4.48 V, or 1.95 %.",
  faq: [
    { q: "Do I enter the length one way or both?", a: "One way. The doubling for the return conductor is already in the single-phase factor; entering the round trip would double it twice." },
    { q: "How much drop is acceptable?", a: "Common practice is to stay within 3 % for lighting and 5 % for other loads, but the binding number is whatever your local wiring rules say. This calculator gives you the figure, not the verdict." },
    { q: "Why is three-phase not simply doubled?", a: "Because in a balanced three-phase load the return currents cancel in the neutral. The line-to-line drop works out to the square root of three times one conductor's drop." },
    { q: "Does temperature matter?", a: "Yes. The resistivity here is for 20 °C; a conductor running warm resists more, so the real drop is a little larger. Treat the answer as the optimistic end." },
    { q: "Can I use this to choose a cable size?", a: "You can compare sizes with it, but sizing a cable also needs the current-carrying capacity for your installation method, which is a normative table this calculator deliberately does not carry." },
  ],
};
