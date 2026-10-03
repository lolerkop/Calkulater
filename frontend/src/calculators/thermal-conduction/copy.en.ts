import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const thermalConductionCopyEn: CalculatorCopy = {
  ...{
  "name": "Thermal conduction calculator",
  "slug": "thermal-conduction-layer",
  "shortDescription": "Heat flow, thermal resistance and U-value of a single layer.",
  "seoTitle": "Thermal conduction calculator — heat flow and resistance",
  "seoDescription": "Calculate the heat flow through a layer of insulation or wall: thermal resistance, U-value and heat flux density.",
  "h1": "Thermal conduction calculator",
  "keywords": [
    "thermal conduction calculator",
    "u value calculator",
    "thermal resistance calculator",
    "heat loss through a wall"
  ]
},
  ...contract.en,
};
