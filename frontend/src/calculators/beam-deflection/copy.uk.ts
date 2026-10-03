import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор прогину балки",
  "slug": "progyn-balky",
  "shortDescription": "Прогин балки на двох опорах під рівномірним або зосередженим навантаженням.",
  "seoTitle": "Калькулятор прогину балки — рівномірне і зосереджене навантаження",
  "seoDescription": "Розрахуйте прогин балки за навантаженням, прольотом, модулем пружності та моментом інерції.",
  "h1": "Калькулятор прогину балки",
  "keywords": [
    "прогин балки",
    "жорсткість перекриття",
    "момент інерції перерізу"
  ]
};

export const beamDeflectionCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
