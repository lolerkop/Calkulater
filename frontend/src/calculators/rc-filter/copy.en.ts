import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const rcFilterCopyEn: CalculatorCopy = {
  ...{
    "name": "RC circuit calculator",
    "slug": "rc-filter-cutoff",
    "shortDescription": "Cutoff frequency and time constant of a resistor with a capacitor.",
    "seoTitle": "RC circuit calculator — cutoff frequency and time constant",
    "seoDescription": "Calculate an RC filter's cutoff frequency and time constant from resistance and capacitance, with the capacitor's settling time.",
    "h1": "RC circuit calculator",
    "keywords": [
      "rc filter calculator",
      "cutoff frequency calculator",
      "rc time constant",
      "low pass filter calculator"
    ]
  },
  ...contract.en,
};
