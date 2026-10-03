import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Sealant volume calculator",
  "slug": "sealant-volume",
  "shortDescription": "Sealant needed for a joint of a given section, and how many cartridges that is.",
  "seoTitle": "Sealant calculator — volume and number of cartridges",
  "seoDescription": "Work out the sealant needed from the width, depth and length of the joint, with the number of cartridges and metres per cartridge.",
  "h1": "Sealant volume calculator",
  "keywords": [
    "sealant volume",
    "sealant cartridge",
    "joint section",
    "silicone sealant"
  ]
};
export const sealantVolumeCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
