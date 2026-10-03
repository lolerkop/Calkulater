import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Калькулятор обʼєму приміщення",
  "slug": "kalkulyator-obyemu-prymishchennya",
  "shortDescription": "Обʼєм кімнати за розмірами або площею підлоги.",
  "seoTitle": "Калькулятор обʼєму приміщення — кубометри за розмірами",
  "seoDescription": "Розрахунок обʼєму кімнати в кубометрах за розмірами або площею, а також периметр і площа стін.",
  "h1": "Калькулятор обʼєму приміщення",
  "keywords": [
    "обʼєм приміщення",
    "кубометри",
    "площа стін"
  ]
};
export const roomVolumeCopyUk:CalculatorCopy={...metadata,...buildingWave16ContractContent.uk};
