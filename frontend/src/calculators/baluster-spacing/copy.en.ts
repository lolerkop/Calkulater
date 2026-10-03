import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Baluster spacing calculator",
  "slug": "baluster-spacing",
  "shortDescription": "How many balusters a run takes at a maximum permitted gap.",
  "seoTitle": "Baluster spacing calculator — count from the maximum gap",
  "seoDescription": "Calculate how many balusters a run needs from the baluster width and the maximum permitted gap, with the actual gap and pitch.",
  "h1": "Baluster spacing calculator",
  "keywords": [
    "baluster spacing calculator",
    "spindle spacing calculator",
    "railing gap calculator",
    "how many balusters"
  ]
};

export const balusterSpacingCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
