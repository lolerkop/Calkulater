import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const buoyancyCopyEn: CalculatorCopy = {
  ...{
  "name": "Buoyant force calculator",
  "slug": "buoyancy-force",
  "shortDescription": "Archimedes' force, the body's weight, and whether it floats.",
  "seoTitle": "Buoyant force calculator — Archimedes' principle",
  "seoDescription": "Calculate the buoyant force from body volume and fluid density, with weight, net force and displaced mass.",
  "h1": "Buoyant force calculator",
  "keywords": [
    "archimedes force",
    "buoyant force",
    "buoyancy",
    "displaced water"
  ]
},
  ...contract.en,
};
