import type { CalculatorCopy } from '../../lib/platform/types';

export const abvAlcoholCopyEn: CalculatorCopy = {
  name: "ABV from gravity calculator",
  slug: "abv-from-gravity",
  shortDescription: "Alcohol strength from original and final gravity.",
  longDescription:
    "Yeast turns sugar into alcohol and the gravity falls: sugar is heavier than water, alcohol lighter. The gravity drop is the measure of fermented sugar, and the factor converts it into alcohol by volume. Attenuation is shown alongside \u2014 what share of the sugar actually went \u2014 which explains why two worts of equal original gravity can yield drinks of different strength and different sweetness.",
  seoTitle: "ABV from gravity calculator \u2014 beer, wine, mead",
  seoDescription: "Calculate alcohol by volume from original and final gravity, with the apparent attenuation.",
  h1: "ABV from gravity calculator",
  keywords: ["abv from gravity", "original gravity", "final gravity", "apparent attenuation"],
  howToUse: [
    "Read gravity with a hydrometer at its calibration temperature, or apply a correction.",
    "Take the original gravity before pitching yeast and the final one once fermentation has stopped.",
    "The 131.25 factor is the most common; methods in use range from 129 to 135.",
    "This does not apply after distillation \u2014 there strength is measured with an alcoholmeter.",
  ],
  howItWorks: "ABV = (original gravity \u2212 final gravity) \u00d7 factor.",
  example: "A wort of 1.050 fermented to 1.010 gives 5.25 % and 80 % attenuation.",
  faq: [
    { q: "Why does gravity fall during fermentation?", a: "Sugar dissolved in water makes it heavier, while alcohol is lighter than water. Yeast swaps the first for the second, so gravity falls twice over \u2014 and that fall is what reveals how much alcohol was made." },
    { q: "What does attenuation tell me?", a: "What share of the original sugar has fermented. Eighty per cent is a normal beer result; lower means residual sweetness, higher means the drink came out dry." },
    { q: "Why do the factors differ?", a: "The relationship between gravity drop and strength is not linear, and each method approximates it its own way. At ordinary gravities the spread is small, but on strong worts it reaches half a per cent." },
    { q: "Is a temperature correction needed?", a: "Yes. A hydrometer is calibrated for one temperature, usually 20 \u00b0C. Reading a warm wort gives a low value and therefore a wrong strength." },
  ],
};
