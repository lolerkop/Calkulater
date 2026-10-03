import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Skirting board calculator",
  "slug": "skirting-board",
  "shortDescription": "Skirting length around a room, less doorways, cut into planks.",
  "seoTitle": "Skirting board calculator — length and number of planks",
  "seoDescription": "Work out the skirting length from the room dimensions, less doorways, with a cutting allowance and the number of planks.",
  "h1": "Skirting board calculator",
  "keywords": [
    "skirting board",
    "skirting length",
    "baseboard",
    "plank cutting"
  ]
};
export const skirtingCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
