import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const escapeVelocityCopyEn: CalculatorCopy = {
  ...{
  "name": "Escape velocity calculator",
  "slug": "escape-velocity",
  "shortDescription": "The speed needed to leave a planet, from its mass and radius.",
  "seoTitle": "Escape velocity calculator — from mass and radius",
  "seoDescription": "Calculate escape and circular-orbit speeds in a Newtonian spherical-body model from mass and centre distance, with gravitational acceleration.",
  "h1": "Escape velocity calculator",
  "keywords": [
    "escape velocity calculator",
    "orbital velocity",
    "planet gravity",
    "escape speed"
  ]
},
  ...contract.en,
};
