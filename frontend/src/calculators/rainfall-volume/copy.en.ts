import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const rainfallVolumeCopyEn: CalculatorCopy = {
  ...{
  "name": "Rainwater harvesting calculator",
  "slug": "rainwater-harvesting",
  "shortDescription": "How much water a roof collects from a given amount of rain.",
  "seoTitle": "Rainwater harvesting calculator — water from a roof",
  "seoDescription": "Work out how many litres a roof of a given area collects from rainfall, allowing for the runoff coefficient and the number of barrels.",
  "h1": "Rainwater harvesting calculator",
  "keywords": [
    "rainwater harvesting",
    "water from a roof",
    "runoff coefficient",
    "water barrel"
  ]
},
  ...contractContent.en,
};
