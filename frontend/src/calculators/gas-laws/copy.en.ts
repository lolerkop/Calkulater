import type { CalculatorCopy } from '../../lib/platform/types';

export const gasLawsCopyEn: CalculatorCopy = {
  name: "Combined gas law calculator",
  slug: "combined-gas-law",
  shortDescription: "A gas moving between two states: p₁V₁/T₁ = p₂V₂/T₂.",
  longDescription:
    "Works out how one and the same portion of gas moves from a first state to a second under the combined gas law. The difference from the ideal gas equation is simple: that page describes a single state through the amount of substance and the gas constant, whereas here the amount cancels — both states hold the same gas — and only a ratio of three quantities is left. Boyle's, Charles's and Gay-Lussac's laws all fall out of this formula when one quantity is held constant.",
  seoTitle: "Combined gas law calculator — p₁V₁/T₁ = p₂V₂/T₂",
  seoDescription: "Calculate the pressure, volume or temperature of a gas moving between two states with the combined gas law.",
  h1: "Combined gas law calculator",
  keywords: ["combined gas law calculator", "boyle's law calculator", "charles law calculator", "p1v1 t1 p2v2 t2"],
  howToUse: [
    "Choose which quantity of the second state you are looking for.",
    "Enter the pressure, volume and temperature of the first state.",
    "Fill in the two known quantities of the second state.",
    "Give temperatures in kelvin: add 273.15 to a Celsius reading.",
  ],
  howItWorks: "For a fixed portion of gas the ratio p·V/T stays constant, so p₁V₁/T₁ = p₂V₂/T₂. The unknown is expressed from that equality.",
  example: "Two litres at 100 kPa and 300 K, compressed to one litre at the same temperature, come to 200 kPa.",
  faq: [
    { q: "How is this different from the ideal gas equation?", a: "That one describes a single state through the amount of substance and the gas constant. This one describes a transition between two states of the same portion, and the amount cancels out." },
    { q: "Why kelvin only?", a: "Because the formula uses a ratio of temperatures. In Celsius the zero point is arbitrary, and at zero degrees the denominator would vanish." },
    { q: "Where are Boyle's and Charles's laws here?", a: "They are special cases. Hold the temperature constant and you get Boyle's law; hold the pressure and you get Charles's law." },
    { q: "Does it hold for a real gas?", a: "As an approximation yes, at moderate pressures and well away from condensation. Compressed gases and those near liquefaction deviate noticeably." },
  ],
};
