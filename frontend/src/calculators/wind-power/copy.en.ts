import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const windPowerCopyEn: CalculatorCopy = {
 ...{
  "name": "Wind power calculator",
  "slug": "wind-power",
  "shortDescription": "Power in the wind and the power a rotor can extract, against the Betz limit.",
  "seoTitle": "Wind power calculator — power in the wind and turbine output",
  "seoDescription": "Instantaneous mechanical rotor power, exact Betz limit 16/27 and energy over 24 hours at unchanged conditions.",
  "h1": "Wind power calculator",
  "keywords": [
    "wind power",
    "wind turbine",
    "Betz limit",
    "swept area"
  ]
},
 ...contract.en,
};
