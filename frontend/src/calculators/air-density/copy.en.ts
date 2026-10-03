import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const airDensityCopyEn: CalculatorCopy = {
 ...{
  "name": "Air density calculator",
  "slug": "air-density",
  "shortDescription": "Density of moist air from temperature, pressure and humidity.",
  "seoTitle": "Air density calculator — from temperature, pressure and humidity",
  "seoDescription": "Calculate the density of moist air from temperature, atmospheric pressure and relative humidity.",
  "h1": "Air density calculator",
  "keywords": [
    "air density",
    "moist air",
    "saturation pressure",
    "standard atmosphere"
  ]
},
 ...contract.en,
};
