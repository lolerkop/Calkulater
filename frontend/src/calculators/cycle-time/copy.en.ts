import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const cycleTimeCopyEn: CalculatorCopy = {
  "name": "Takt time calculator",
  "slug": "takt-time",
  "shortDescription": "How much time you may spend per unit to keep up with demand.",
  "seoTitle": "Takt time calculator — time available per unit",
  "seoDescription": "Calculate takt time from available shift time and demand, compare it with the actual cycle and read the utilisation.",
  "h1": "Takt time calculator",
  "keywords": [
    "takt time",
    "cycle time",
    "lean manufacturing",
    "line utilisation"
  ],
  ...contractContent.en,
};
