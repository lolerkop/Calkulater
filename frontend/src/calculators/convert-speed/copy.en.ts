import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const speedCopyEn: CalculatorCopy = {
  "name": "Speed converter",
  "slug": "speed-converter",
  "shortDescription": "Convert speed between km/h, m/s, mph and knots.",
  "longDescription": "Converts speed between metres per second, kilometres per hour, miles per hour, knots and feet per second. Knots are used in sea and air navigation, miles per hour on US and UK road signs.",
  "seoTitle": "Speed converter — km/h, m/s, mph, knots",
  "seoDescription": "Convert speed between kilometres per hour, metres per second, miles per hour, knots and feet per second.",
  "h1": "Speed converter",
  "keywords": [
    "speed converter",
    "kmh to mph",
    "knots"
  ],
  "howToUse": [
    "Enter the value.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "Every unit converts through metres per second using exact factors.",
  "example": "36 km/h is exactly 10 m/s and one knot is 1.852 km/h.",
  "faq": [
    {
      "q": "What is a knot?",
      "a": "One nautical mile per hour, or 1.852 km/h. It is used in sea and air navigation."
    },
    {
      "q": "Why is 36 km/h exactly 10 m/s?",
      "a": "Divide the numerical value in km/h by 3.6 to get m/s: 36/3.6 = 10. Multiply by 3.6 for the reverse conversion; the factor follows from 1000 metres and 3600 seconds."
    },
    {
      "q": "Is the mph conversion exact?",
      "a": "Yes. The mile is defined as 1609.344 m, so one mph is exactly 0.44704 m/s."
    },
    {
      "q": "Is it useful for running?",
      "a": "Running pace is usually minutes per kilometre — there is a separate pace calculator for that."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
