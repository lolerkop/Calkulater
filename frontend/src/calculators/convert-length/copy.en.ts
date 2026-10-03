import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const lengthCopyEn: CalculatorCopy = {
  "name": "Length converter",
  "slug": "length-converter",
  "shortDescription": "Convert between metric and imperial length units.",
  "longDescription": "Converts length between metric and imperial units: millimetres, centimetres, metres, kilometres, inches, feet, yards, miles and nautical miles. Unit factors are exactly defined; calculation and result display have finite precision.",
  "seoTitle": "Length converter — metres, feet, inches, miles",
  "seoDescription": "Convert length between metres, centimetres, kilometres, inches, feet, yards, miles and nautical miles.",
  "h1": "Length converter",
  "keywords": [
    "length converter",
    "metres to feet",
    "inches to cm"
  ],
  "howToUse": [
    "Enter the value.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "Every unit has an exact factor to the metre, and conversion goes through that base.",
  "example": "1 inch is exactly 2.54 cm, and 1 mile is exactly 1609.344 m.",
  "faq": [
    {
      "q": "Are imperial conversions exact?",
      "a": "This uses international definitions: 1 inch = 0.0254 m and 1 foot = 0.3048 m. The defining factors are exact, but the numerical display is rounded. The historical US survey foot is not included."
    },
    {
      "q": "What is a nautical mile?",
      "a": "Exactly 1852 metres, used in sea and air navigation. It is longer than the statute mile of 1609.344 m."
    },
    {
      "q": "Does the converter work both ways?",
      "a": "Yes. Swap the source and target unit and the conversion runs in the opposite direction."
    },
    {
      "q": "Why does the same unit return the value unchanged?",
      "a": "Converting a unit to itself skips the base entirely, so no floating-point drift is introduced."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
