import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор напруження згину балки",
  "slug": "napruha-zgynu-balky",
  "shortDescription": "Напруження згину за моментом і формою перерізу балки.",
  "seoTitle": "Калькулятор напруження згину балки — момент опору",
  "seoDescription": "Розрахуйте напруження згину в балці за згинальним моментом і формою перерізу.",
  "h1": "Калькулятор напруження згину балки",
  "keywords": [
    "напруження згину",
    "момент опору",
    "розрахунок балки"
  ]
};

export const beamStressCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
