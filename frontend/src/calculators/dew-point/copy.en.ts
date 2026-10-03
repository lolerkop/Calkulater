import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const dewPointCopyEn: CalculatorCopy = {
 ...{
  "name": "Dew point calculator",
  "slug": "dew-point",
  "shortDescription": "The temperature at which air of this humidity starts giving up moisture.",
  "seoTitle": "Dew point calculator — from temperature and humidity",
  "seoDescription": "Calculate the dew point from air temperature and relative humidity, with the spread below the current temperature and the value in degrees Fahrenheit.",
  "h1": "Dew point calculator",
  "keywords": [
    "dew point calculator",
    "condensation calculator",
    "humidity dew point",
    "when does condensation form"
  ]
},
 ...contract.en,
};
