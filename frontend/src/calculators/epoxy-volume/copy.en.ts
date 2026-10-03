import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Epoxy resin calculator",
  "slug": "epoxy-resin-volume",
  "shortDescription": "How much resin and hardener a pour needs.",
  "seoTitle": "Epoxy resin calculator — how much for a pour",
  "seoDescription": "Calculate how much epoxy resin and hardener a pour needs from its dimensions and layer thickness.",
  "h1": "Epoxy resin calculator",
  "keywords": [
    "epoxy resin",
    "resin quantity",
    "hardener ratio",
    "river table pour"
  ]
};

export const epoxyVolumeCopyEn: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.en,
};
