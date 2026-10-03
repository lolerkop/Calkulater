import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const electricityUsageCopyEn: CalculatorCopy = {
  ...{
  "name": "Electricity usage calculator",
  "slug": "electricity-usage-calculator",
  "shortDescription": "Kilowatt-hours an appliance uses and what that costs.",
  "seoTitle": "Electricity usage calculator — kWh and cost",
  "seoDescription": "Work out how many kilowatt-hours an appliance uses over a period and what it costs at your tariff.",
  "h1": "Electricity usage calculator",
  "keywords": [
    "electricity usage calculator",
    "kwh calculator",
    "appliance running cost"
  ]
},
  ...contractContent.en,
};
