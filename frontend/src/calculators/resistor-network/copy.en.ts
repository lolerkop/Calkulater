import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const resistorNetworkCopyEn: CalculatorCopy = {
  ...{
  "name": "Resistor network calculator",
  "slug": "resistor-network-calculator",
  "shortDescription": "Total resistance of a circuit in series and in parallel.",
  "seoTitle": "Series and parallel resistor calculator",
  "seoDescription": "Calculate the total resistance of a resistor network connected in series or in parallel.",
  "h1": "Resistor network calculator",
  "keywords": [
    "resistor calculator",
    "parallel resistance",
    "series resistance",
    "total resistance"
  ]
},
  ...contractContent.en,
};
