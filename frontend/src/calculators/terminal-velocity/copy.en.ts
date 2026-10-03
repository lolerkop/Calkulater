import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const terminalVelocityCopyEn: CalculatorCopy = {
 ...{
  "name": "Terminal velocity calculator",
  "slug": "terminal-velocity",
  "shortDescription": "Terminal velocity in air with the time and distance needed to reach it.",
  "seoTitle": "Terminal velocity calculator — falling speed in air",
  "seoDescription": "Calculate terminal velocity from mass, frontal area and drag coefficient, plus the time and distance from rest to 95% of that limit.",
  "h1": "Terminal velocity calculator",
  "keywords": [
    "terminal velocity",
    "air resistance",
    "drag coefficient",
    "free fall"
  ]
},
 ...contract.en,
};
