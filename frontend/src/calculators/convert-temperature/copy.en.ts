import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const temperatureCopyEn: CalculatorCopy = {
  "name": "Temperature converter",
  "slug": "temperature-converter",
  "shortDescription": "Convert between Celsius, Fahrenheit, Kelvin and Rankine.",
  "longDescription": "Converts temperature between Celsius, Fahrenheit, Kelvin and Rankine. Temperature scales are offset from one another rather than simple multiples, which is why converting by multiplication alone gives the wrong answer.",
  "seoTitle": "Temperature converter — Celsius, Fahrenheit, Kelvin",
  "seoDescription": "Convert temperature between Celsius, Fahrenheit, Kelvin and Rankine with exact scale anchors.",
  "h1": "Temperature converter",
  "keywords": [
    "temperature converter",
    "celsius to fahrenheit",
    "kelvin"
  ],
  "howToUse": [
    "Enter the temperature.",
    "Pick the source scale.",
    "Pick the target scale."
  ],
  "howItWorks": "Every scale converts through kelvin using a factor and an offset.",
  "example": "0 °C is 32 °F, and 100 °C is 212 °F.",
  "faq": [
    {
      "q": "Why can temperature not be converted by a single factor?",
      "a": "Celsius and Fahrenheit start at different points, so a conversion needs both a scale factor and an offset. Only Kelvin and Rankine share the absolute zero point."
    },
    {
      "q": "Where do Celsius and Fahrenheit meet?",
      "a": "At −40. It is the only temperature where both scales read the same number."
    },
    {
      "q": "What is Rankine?",
      "a": "An absolute scale using Fahrenheit-sized degrees: 0 °Ra is absolute zero and 491.67 °Ra is the freezing point of water."
    },
    {
      "q": "Can I enter temperatures below absolute zero?",
      "a": "The algebraic conversion accepts finite values even below 0 K. Such a value does not represent an ordinary physical temperature below absolute zero: 0 K = −273.15 °C = −459.67 °F. The tool does not validate thermodynamic applicability."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
