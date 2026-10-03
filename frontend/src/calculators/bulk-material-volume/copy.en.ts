import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Bulk material calculator",
  "slug": "bulk-material-volume",
  "shortDescription": "Volume and mass of gravel, sand or screenings for a base layer.",
  "seoTitle": "Bulk material calculator — volume and mass of a base layer",
  "seoDescription": "Calculate the volume and mass of gravel, sand or screenings for a base layer from the area, layer thickness and bulk density.",
  "h1": "Bulk material calculator",
  "keywords": [
    "gravel calculator",
    "how much sand for a base",
    "bulk material volume calculator",
    "aggregate calculator"
  ]
};

export const bulkMaterialVolumeCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
