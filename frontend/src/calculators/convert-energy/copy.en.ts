import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const energyCopyEn: CalculatorCopy = {
  "name": "Energy converter",
  "slug": "energy-converter",
  "shortDescription": "Convert energy between joules, kilowatt-hours, calories and BTU.",
  "longDescription": "Converts energy between joules, kilojoules, megajoules, watt-hours, kilowatt-hours, calories, kilocalories, BTU and electronvolts. Kilowatt-hours appear on electricity bills, kilocalories on food labels, BTU on heating and air-conditioning equipment.",
  "seoTitle": "Energy converter — joules, kWh, calories, BTU",
  "seoDescription": "Convert energy between joules, kilowatt-hours, calories, kilocalories, BTU and electronvolts.",
  "h1": "Energy converter",
  "keywords": [
    "energy converter",
    "kwh to joules",
    "calories to joules"
  ],
  "howToUse": [
    "Enter the value.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "Every unit converts through the joule using exact defined factors.",
  "example": "One kilowatt-hour is exactly 3,600,000 joules, and one kilocalorie is exactly 4184 joules.",
  "faq": [
    {
      "q": "Why is a kilowatt-hour 3,600,000 joules?",
      "a": "A watt is one joule per second, so a kilowatt for one hour is 1000 × 3600 joules."
    },
    {
      "q": "Is a food calorie the same as a calorie here?",
      "a": "A food \"Calorie\" is a kilocalorie. Pick kcal for nutrition labels, cal for the small thermochemical calorie of 4.184 J."
    },
    {
      "q": "Which BTU is used?",
      "a": "The International Table BTU: 1 BTU = 1055.05585262 J. A thermochemical BTU is a different unit, about 1054.350 J; temperature-specific definitions also differ. Check the definition in your source."
    },
    {
      "q": "Why is the electronvolt shown in exponential form?",
      "a": "It is about 1.6 × 10⁻¹⁹ joules, so positional notation would need nineteen leading zeros."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
