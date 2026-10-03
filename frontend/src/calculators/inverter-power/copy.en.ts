import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const inverterPowerCopyEn: CalculatorCopy = {
  ...{
    "name": "Inverter power calculator",
    "slug": "inverter-power-calculator",
    "shortDescription": "Battery draw of an inverter from its output power and efficiency.",
    "seoTitle": "Inverter power calculator — input power and battery current",
    "seoDescription": "Work out the input power, battery current and losses of an inverter from its output power, efficiency and battery voltage.",
    "h1": "Inverter power calculator",
    "keywords": [
      "inverter power calculator",
      "inverter current draw",
      "inverter efficiency"
    ]
  },
  ...contract.en,
};
