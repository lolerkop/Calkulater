import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const humidityConvertCopyEn: CalculatorCopy = {
 ...{
  "name": "Absolute humidity calculator",
  "slug": "absolute-humidity",
  "shortDescription": "How many grams of water are in a cubic metre of air.",
  "seoTitle": "Absolute humidity calculator — grams of water per cubic metre",
  "seoDescription": "Absolute humidity in g/m³ and mixing ratio in g/kg dry air from temperature, relative humidity and local absolute pressure.",
  "h1": "Absolute humidity calculator",
  "keywords": [
    "absolute humidity",
    "mixing ratio",
    "vapour pressure",
    "air moisture"
  ]
},
 ...contract.en,
};
