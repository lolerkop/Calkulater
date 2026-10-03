import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Room volume calculator",
  "slug": "room-volume-calculator",
  "shortDescription": "Volume of a room from its dimensions or floor area.",
  "seoTitle": "Room volume calculator — cubic metres from dimensions",
  "seoDescription": "Calculate room volume in cubic metres from dimensions or floor area, plus perimeter and wall area.",
  "h1": "Room volume calculator",
  "keywords": [
    "room volume",
    "cubic metres",
    "wall area"
  ]
};
export const roomVolumeCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
