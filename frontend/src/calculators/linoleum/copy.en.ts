import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Linoleum calculator",
  "slug": "linoleum",
  "shortDescription": "Running metres of roll flooring for a room, with strips, seams and offcut.",
  "seoTitle": "Linoleum calculator: running metres, strips and seams",
  "seoDescription": "Work out how many running metres of linoleum a room takes, how many strips and seams that means, and how much offcut is left.",
  "h1": "Linoleum calculator",
  "keywords": [
    "linoleum calculator",
    "roll flooring metres",
    "vinyl flooring calculator",
    "flooring seams"
  ]
};

export const linoleumCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
