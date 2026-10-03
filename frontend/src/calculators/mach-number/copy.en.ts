import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const machNumberCopyEn: CalculatorCopy = {
 ...{
  "name": "Mach number calculator",
  "slug": "mach-number",
  "shortDescription": "Mach number from speed and air temperature, with the flight regime named.",
  "seoTitle": "Mach number calculator — speed of sound and flight regime",
  "seoDescription": "Mach number from speed relative to air and temperature in an approximate dry-air model, with sound speed and broad regime classification.",
  "h1": "Mach number calculator",
  "keywords": [
    "Mach number",
    "speed of sound",
    "sound barrier",
    "supersonic"
  ]
},
 ...contract.en,
};
