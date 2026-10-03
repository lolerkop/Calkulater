import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const heatingPowerCopyEn: CalculatorCopy = {
  ...{
  "name": "Heating power calculator",
  "slug": "heating-power-calculator",
  "shortDescription": "Heater or radiator power from room volume and a specific heat requirement.",
  "seoTitle": "Heating power calculator for a room",
  "seoDescription": "Calculate the heating power a room needs from its volume, the specific heat requirement and the number of windows — in kilowatts and watts.",
  "h1": "Heating power calculator",
  "keywords": [
    "heating power calculator",
    "radiator size calculator",
    "heater power for a room",
    "kw needed to heat a room"
  ]
},
  ...contractContent.en,
};
