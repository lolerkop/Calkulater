import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const momentOfInertiaCopyEn: CalculatorCopy = {
  ...{
  "name": "Moment of inertia calculator",
  "slug": "moment-of-inertia",
  "shortDescription": "Moment of inertia of a rod, disk, ring or sphere about an axis.",
  "seoTitle": "Moment of inertia calculator — rod, disk, ring, sphere",
  "seoDescription": "Calculate the moment of inertia of a body about an axis from mass and size for six classical shapes, with the radius of gyration.",
  "h1": "Moment of inertia calculator",
  "keywords": [
    "moment of inertia calculator",
    "disk moment of inertia",
    "rod moment of inertia",
    "radius of gyration"
  ]
},
  ...contract.en,
};
