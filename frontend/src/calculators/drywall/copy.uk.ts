import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор гіпсокартону",
  "slug": "gipsokarton-ua",
  "shortDescription": "Листи, профіль і саморізи для гіпсокартонної стіни чи стелі.",
  "seoTitle": "Калькулятор гіпсокартону: листи, профіль і саморізи",
  "seoDescription": "Порахуйте, скільки листів гіпсокартону, метрів профілю і саморізів потрібно стіні чи стелі з урахуванням шарів і запасу.",
  "h1": "Калькулятор гіпсокартону",
  "keywords": [
    "розрахунок гіпсокартону",
    "листи гіпсокартону",
    "крок профілю",
    "саморізи для гіпсокартону"
  ]
};

export const drywallCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
