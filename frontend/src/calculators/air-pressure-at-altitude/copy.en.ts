import type { CalculatorCopy } from '../../lib/platform/types';

export const airPressureAtAltitudeCopyEn: CalculatorCopy = {
  name: "Air pressure at altitude calculator",
  slug: "air-pressure-at-altitude",
  shortDescription: "Atmospheric pressure, temperature and air density at a given altitude.",
  longDescription:
    "Pressure does not fall linearly with height: half the mass of the atmosphere lies below five and a half kilometres. At the summit of Everest less than a third of sea-level pressure remains — the oxygen fraction is the same twenty-one per cent, but the same breath holds three times fewer molecules, and that is altitude sickness. The calculation follows the international standard atmosphere, and the density is derived from the resulting pressure and temperature rather than taken from a separate fit.",
  seoTitle: "Air pressure at altitude calculator",
  seoDescription: "Compute atmospheric pressure, temperature and air density at any altitude from the international standard atmosphere.",
  h1: "Air pressure at altitude calculator",
  keywords: ["atmospheric pressure", "pressure at altitude", "standard atmosphere", "air density"],
  howToUse: [
    "Altitude is measured from sea level; depressions take a negative value down to −430 m.",
    "The 11,000 m upper bound is the tropopause, above which the temperature stops falling linearly.",
    "The standard atmosphere sets 15 °C and 101.325 kPa at sea level with a lapse of 6.5 degrees per kilometre.",
    "Real weather differs from the standard by a few per cent — use a measured pressure for precise work.",
  ],
  howItWorks: "p = 101325·(1 − 0.0065·h/288.15)^(g·M/(R·L)); the temperature falls linearly by 6.5 °C per kilometre; density comes from the gas law.",
  example: "At two kilometres the pressure is 79.5 kPa, about 78 per cent of sea level.",
  faq: [
    { q: "Why does pressure not fall in proportion to height?", a: "Because air is compressible: the lower layers are squeezed by those above and are therefore denser. The rate of decrease is proportional to the pressure itself, and that relationship gives an exponential rather than a straight line." },
    { q: "Does the oxygen fraction change with altitude?", a: "No, it stays near twenty-one per cent up to very great heights. What changes is the number of molecules in the same volume — which is exactly why oxygen runs short while its percentage does not." },
    { q: "Why is the upper bound eleven kilometres?", a: "That is the tropopause. Below it the temperature falls roughly linearly; above it holds nearly constant near −56.5 °C and the linear model stops working." },
    { q: "How does this compare with a barometer?", a: "A barometer shows the actual pressure, while this gives the standard value for that altitude. The few per cent between them is what forecasters call the pressure tendency." },
  ],
};
