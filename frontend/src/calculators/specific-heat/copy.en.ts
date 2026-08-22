import type { CalculatorCopy } from '../../lib/platform/types';

export const specificHeatCopyEn: CalculatorCopy = {
  name: "Specific heat calculator",
  slug: "specific-heat",
  shortDescription: "How much energy it takes to heat a body: Q = c·m·ΔT.",
  longDescription:
    "Works out the heat needed to warm or cool a body, solving in three directions: energy, temperature change or mass. The temperature change is signed on purpose — cooling is as legitimate a case as heating, and negative energy means heat given up rather than a mistyped input. It differs from conduction through a layer: that page gives the heat flow through a construction in watts, this one the quantity of heat needed to warm a substance in joules. Latent heat is not included: melting and boiling consume energy while the temperature does not move at all.",
  seoTitle: "Specific heat calculator — Q = c·m·ΔT",
  seoDescription: "Calculate the heat required to warm or cool a body from its specific heat capacity, mass and temperature change.",
  h1: "Specific heat calculator",
  keywords: ["specific heat calculator", "heat energy calculator", "q = mcat calculator", "energy to heat water"],
  howToUse: [
    "Choose what you are after: the energy, the temperature change or the mass.",
    "Enter the other two together with the substance's specific heat capacity.",
    "Water is 4186, aluminium 900, steel 460, air 1005 J/(kg·K).",
    "For cooling give a negative change: the energy comes out with a minus sign.",
  ],
  howItWorks: "The heat equals specific heat capacity times mass times temperature change: Q = c·m·ΔT. A change in kelvin and in degrees Celsius is numerically the same.",
  example: "Heating two litres of water by 50 K takes 418,600 J — about 0.12 kilowatt-hours.",
  faq: [
    { q: "How is this different from conduction through a layer?", a: "That gives the heat flow through a construction in watts, driven by conductivity and thickness. This gives the heat needed to warm a substance in joules, driven by mass and heat capacity." },
    { q: "Is melting or boiling included?", a: "No. A phase change consumes heat while the temperature does not move, and this formula does not describe it. For water that is 334 kJ/kg to melt and 2260 kJ/kg to evaporate." },
    { q: "Kelvin or Celsius?", a: "For a CHANGE in temperature it makes no difference: the scales differ only in where they start, and the size of a degree is identical." },
    { q: "Why can the energy be negative?", a: "Because the body is cooling and giving up heat rather than absorbing it. The sign shows direction, not an error." },
  ],
};
