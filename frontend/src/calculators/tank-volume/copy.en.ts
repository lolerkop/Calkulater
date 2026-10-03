import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Tank volume calculator",
  "slug": "tank-volume",
  "shortDescription": "Full tank volume and the volume held at a given level.",
  "seoTitle": "Tank volume calculator — cylinder, horizontal tank, barrel",
  "seoDescription": "Calculate the full volume of a tank and the volume held at a given level for vertical, horizontal, rectangular and capsule shapes.",
  "h1": "Tank volume calculator",
  "keywords": [
    "tank volume calculator",
    "horizontal tank volume",
    "how many litres in a barrel",
    "tank capacity"
  ]
};
export const tankVolumeCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
