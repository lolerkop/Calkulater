import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const ledResistorCopyEn: CalculatorCopy = {
  ...{
    "name": "LED resistor calculator",
    "slug": "led-resistor-calculator",
    "shortDescription": "Series resistor for an LED, with the power it will dissipate.",
    "seoTitle": "LED resistor calculator — series resistor and power",
    "seoDescription": "Calculate the series resistor for an LED from supply voltage, forward voltage and current, with resistor power dissipation.",
    "h1": "LED resistor calculator",
    "keywords": [
      "led resistor calculator",
      "led series resistor",
      "current limiting resistor"
    ]
  },
  ...contract.en,
};
