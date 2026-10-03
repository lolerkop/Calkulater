import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const centripetalForceCopyEn: CalculatorCopy = {
  ...{
  "name": "Centripetal force calculator",
  "slug": "centripetal-force-calculator",
  "shortDescription": "Centripetal force, acceleration, angular velocity and period of revolution.",
  "seoTitle": "Centripetal force calculator — circular motion",
  "seoDescription": "Calculate centripetal force from mass, speed and radius, along with centripetal acceleration, angular velocity and the period of revolution.",
  "h1": "Centripetal force calculator",
  "keywords": [
    "centripetal force calculator",
    "circular motion",
    "angular velocity",
    "period of revolution"
  ]
},
  ...contract.en,
};
