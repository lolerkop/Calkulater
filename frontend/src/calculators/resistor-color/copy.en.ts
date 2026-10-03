import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const resistorColorCopyEn: CalculatorCopy = {
  ...{
    "name": "Resistor colour code calculator",
    "slug": "resistor-color-code",
    "shortDescription": "Resistor value from its four colour bands, with the tolerance range.",
    "seoTitle": "Resistor colour code calculator — value from the bands",
    "seoDescription": "Decode a resistor from its colour bands: two digits, a multiplier and a tolerance. Shows the limits of the tolerance range in ohms.",
    "h1": "Resistor colour code calculator",
    "keywords": [
      "resistor colour code calculator",
      "resistor color bands",
      "4 band resistor calculator",
      "resistor value from colours"
    ]
  },
  ...contract.en,
};
