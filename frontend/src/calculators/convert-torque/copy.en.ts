import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const torqueCopyEn: CalculatorCopy = {
  "name": "Torque converter",
  "slug": "torque-converter",
  "shortDescription": "Convert torque between N·m, kgf·m and pound-force feet.",
  "longDescription": "Converts torque between newton metres, kilonewton metres, newton centimetres, kilogram-force metres, pound-force feet, pound-force inches and ounce-force inches.",
  "seoTitle": "Torque converter — N·m, kgf·m, lbf·ft",
  "seoDescription": "Convert torque between newton metres, kilogram-force metres, pound-force feet and pound-force inches.",
  "h1": "Torque converter",
  "keywords": [
    "torque converter",
    "nm to lb-ft",
    "tightening torque"
  ],
  "howToUse": [
    "Enter the value.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "Every unit converts through the newton metre using exact force and length factors.",
  "example": "A tightening torque of 100 N·m is about 73.76 pound-force feet.",
  "faq": [
    {
      "q": "How is torque different from force?",
      "a": "Torque is force times lever arm, so its unit is compound: a newton multiplied by a metre."
    },
    {
      "q": "Is the pound-force foot conversion exact?",
      "a": "The factor follows from the international pound, international foot and standard g₀: 1 lbf·ft ≈ 1.3558179483314 N·m. The definitions are exact, but this decimal and the displayed result are rounded."
    },
    {
      "q": "What is an ounce-force inch?",
      "a": "A small US unit for precision mechanics: one sixteenth of a pound-force inch."
    },
    {
      "q": "Can torque be converted to energy?",
      "a": "No. A newton metre of torque and a joule of energy share dimensions but are different quantities."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
