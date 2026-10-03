import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const batteryRuntimeCopyEn: CalculatorCopy = {
  ...{
  "name": "Battery runtime calculator",
  "slug": "battery-runtime-calculator",
  "shortDescription": "How long a battery lasts under a given load.",
  "seoTitle": "Battery runtime calculator — hours from capacity and load",
  "seoDescription": "Estimate how long a battery will run a load from its capacity, voltage, depth of discharge and conversion efficiency.",
  "h1": "Battery runtime calculator",
  "keywords": [
    "battery runtime calculator",
    "battery life hours",
    "amp hours to watt hours"
  ]
},
  ...contractContent.en,
};
