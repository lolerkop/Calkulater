import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const voltageDividerCopyEn: CalculatorCopy = {
  ...{
    "name": "Voltage divider calculator",
    "slug": "voltage-divider",
    "shortDescription": "Output voltage, current and per-leg power of a two-resistor divider.",
    "seoTitle": "Voltage divider calculator — output, current and leg power",
    "seoDescription": "Calculate a two-resistor voltage divider's output voltage, current and per-leg power dissipation from the input voltage and resistor values.",
    "h1": "Voltage divider calculator",
    "keywords": [
      "voltage divider calculator",
      "resistor divider",
      "drop voltage with resistors",
      "divider output voltage"
    ]
  },
  ...contract.en,
};
