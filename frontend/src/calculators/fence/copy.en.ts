import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Fence calculator",
  "slug": "fence",
  "shortDescription": "Posts, bays and rails for a fence of a given length.",
  "seoTitle": "Fence calculator: posts, bays and rails",
  "seoDescription": "Work out how many posts, bays and metres of rail a fence takes, including gate posts and the real spacing.",
  "h1": "Fence calculator",
  "keywords": [
    "fence calculator",
    "fence post spacing",
    "how many fence posts",
    "fence rails calculator"
  ]
};

export const fenceCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
