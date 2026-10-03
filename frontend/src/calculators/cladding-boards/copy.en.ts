import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Cladding boards calculator",
  "slug": "cladding-boards",
  "shortDescription": "How many boards a wall takes once the overlap is accounted for.",
  "seoTitle": "Cladding boards calculator — board count with overlap",
  "seoDescription": "Calculate how many cladding boards a wall needs: effective width after the overlap, a cutting allowance and the linear metres required.",
  "h1": "Cladding boards calculator",
  "keywords": [
    "cladding boards calculator",
    "how many boards for a wall",
    "shiplap calculator",
    "board and batten calculator"
  ]
};

export const claddingBoardsCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
