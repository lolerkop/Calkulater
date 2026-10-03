import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const powerCopyEn: CalculatorCopy = {
  "name": "Power converter",
  "slug": "power-converter",
  "shortDescription": "Convert power between watts, kilowatts and both kinds of horsepower.",
  "longDescription": "Converts power between watts, kilowatts, megawatts, mechanical horsepower, metric horsepower and BTU per hour. Mechanical and metric horsepower are different units — this converter keeps them apart instead of averaging them.",
  "seoTitle": "Power converter — watts, kilowatts, horsepower, BTU/h",
  "seoDescription": "Convert power between watts, kilowatts, megawatts, mechanical and metric horsepower and BTU per hour.",
  "h1": "Power converter",
  "keywords": [
    "power converter",
    "kw to hp",
    "horsepower"
  ],
  "howToUse": [
    "Enter the value.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "Every unit converts through the watt using defined factors.",
  "example": "100 kW is about 136 metric horsepower, or about 134 mechanical horsepower.",
  "faq": [
    {
      "q": "Why are there two kinds of horsepower?",
      "a": "Mechanical horsepower is 550 ft·lbf/s = 745.6999 W; metric horsepower is 75 kgf·m/s = 735.49875 W exactly. They differ by about 1.4%."
    },
    {
      "q": "Which one do car specifications use?",
      "a": "Check the definition in the specification: mechanical hp and metric PS are different units. Country or language alone does not select one; kW can be converted to either explicitly."
    },
    {
      "q": "What is BTU per hour used for?",
      "a": "Heating and air-conditioning capacity. One kilowatt is about 3412 BTU/h."
    },
    {
      "q": "Is a kilowatt-hour a unit of power?",
      "a": "No, it is energy — power multiplied by time. Use the energy converter for kilowatt-hours."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
