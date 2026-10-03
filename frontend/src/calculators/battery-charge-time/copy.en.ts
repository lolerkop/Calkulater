import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const batteryChargeTimeCopyEn: CalculatorCopy = {
  ...{
  "name": "Battery charge time calculator",
  "slug": "battery-charge-time-calculator",
  "shortDescription": "How long a battery takes to charge at a given current.",
  "seoTitle": "Battery charge time calculator — hours from capacity and current",
  "seoDescription": "Calculate battery charging time from the capacity in amp-hours, the charger current and the charging efficiency.",
  "h1": "Battery charge time calculator",
  "keywords": [
    "battery charge time calculator",
    "how long to charge a battery",
    "charging time from amp hours"
  ]
},
  ...contractContent.en,
};
