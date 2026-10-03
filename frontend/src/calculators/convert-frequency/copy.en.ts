import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const frequencyCopyEn: CalculatorCopy = {
  "name": "Frequency converter",
  "slug": "frequency-converter",
  "shortDescription": "Convert frequency between hertz, kilohertz, megahertz and rpm.",
  "longDescription": "Converts frequency between hertz, kilohertz, megahertz, gigahertz, millihertz and revolutions per minute. Gigahertz appear in processor and Wi-Fi specifications, rpm in motor data sheets.",
  "seoTitle": "Frequency converter — Hz, kHz, MHz, GHz, rpm",
  "seoDescription": "Convert frequency between hertz, kilohertz, megahertz, gigahertz and revolutions per minute.",
  "h1": "Frequency converter",
  "keywords": [
    "frequency converter",
    "ghz to mhz",
    "rpm"
  ],
  "howToUse": [
    "Enter the value.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "SI-prefixed units convert to hertz using their prefix factors; rotations per minute convert by division by 60.",
  "example": "Wi-Fi at 2.4 GHz is 2400 MHz, and a motor at 3000 rpm turns at 50 Hz.",
  "faq": [
    {
      "q": "How are hertz and rpm related?",
      "a": "For rotational frequency, 1 Hz = 1 revolution per second = 60 rpm. More generally, hertz counts cycles per second, which need not be rotations."
    },
    {
      "q": "Why are processors measured in gigahertz?",
      "a": "A gigahertz is a billion cycles per second — a convenient scale for modern chips."
    },
    {
      "q": "How does mHz differ from MHz?",
      "a": "Lowercase m is milli, a thousandth of a hertz; uppercase M is mega, a million hertz. A factor of a billion apart."
    },
    {
      "q": "Can frequency be converted to period?",
      "a": "Period is the reciprocal of frequency. This converter does not perform reciprocal transforms — divide one by the frequency yourself."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
