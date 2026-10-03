import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const timer555CopyEn: CalculatorCopy = {
  ...{
    "name": "NE555 astable timer calculator",
    "slug": "ne555-astable-timer",
    "shortDescription": "Frequency, period and duty cycle of an NE555 multivibrator from two resistors and a capacitor.",
    "seoTitle": "NE555 calculator — frequency, period and duty cycle",
    "seoDescription": "Calculate the frequency, period, high and low times and duty cycle of an NE555 astable multivibrator.",
    "h1": "NE555 astable timer calculator",
    "keywords": [
      "NE555",
      "astable multivibrator",
      "duty cycle",
      "pulse generator"
    ]
  },
  ...contract.en,
};
