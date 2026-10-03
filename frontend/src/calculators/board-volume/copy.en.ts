import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Board volume calculator",
  "slug": "board-volume-calculator",
  "shortDescription": "Volume of timber, of a single board, and boards per cubic metre.",
  "seoTitle": "Board volume calculator — cubic metres of timber",
  "seoDescription": "Calculate the volume of boards in cubic metres from length and section, the volume of one board and boards per cubic metre.",
  "h1": "Board volume calculator",
  "keywords": [
    "board volume calculator",
    "timber volume",
    "boards per cubic metre",
    "lumber calculator"
  ]
};

export const boardVolumeCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
