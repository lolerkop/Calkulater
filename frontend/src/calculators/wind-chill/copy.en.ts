import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const windChillCopyEn: CalculatorCopy = {
 ...{
  "name": "Wind chill calculator",
  "slug": "wind-chill",
  "shortDescription": "How much colder frost feels in wind — by the meteorological services' formula.",
  "seoTitle": "Wind chill calculator — how cold it really feels",
  "seoDescription": "Calculate how much colder it feels in wind using the Canadian and US weather service formula, with the feels-like temperature and the difference from the thermometer.",
  "h1": "Wind chill calculator",
  "keywords": [
    "wind chill calculator",
    "feels like temperature",
    "wind chill formula",
    "how cold does it feel"
  ]
},
 ...contract.en,
};
