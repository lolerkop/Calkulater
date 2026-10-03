import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const waterHeatingCopyEn: CalculatorCopy = {
  ...{
  "name": "Water heating time calculator",
  "slug": "water-heating-time",
  "shortDescription": "How long it takes to heat water at a given power.",
  "seoTitle": "Water heating time calculator — tank, element, kettle",
  "seoDescription": "Calculate water heating time from volume, start and target temperature, heater power and efficiency.",
  "h1": "Water heating time calculator",
  "keywords": [
    "water heating time",
    "tank heater power",
    "heating water",
    "kilowatt hours to heat"
  ]
},
  ...contractContent.en,
};
