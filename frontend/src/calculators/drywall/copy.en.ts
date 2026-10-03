import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Drywall calculator",
  "slug": "drywall",
  "shortDescription": "Sheets, profile and screws for a plasterboard wall or ceiling.",
  "seoTitle": "Drywall calculator: sheets, profile and screws",
  "seoDescription": "Work out how many plasterboard sheets, metres of profile and screws a wall or ceiling needs, including layers and allowance.",
  "h1": "Drywall calculator",
  "keywords": [
    "drywall calculator",
    "plasterboard sheets",
    "metal stud spacing",
    "drywall screws count"
  ]
};

export const drywallCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
