import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор епоксидної смоли",
  "slug": "obyem-epoksydnoyi-smoly",
  "shortDescription": "Скільки смоли та затверджувача потрібно на заливку.",
  "seoTitle": "Калькулятор епоксидної смоли — витрата на заливку",
  "seoDescription": "Розрахуйте, скільки епоксидної смоли та затверджувача потрібно на заливку.",
  "h1": "Калькулятор епоксидної смоли",
  "keywords": [
    "епоксидна смола",
    "витрата смоли",
    "пропорція затверджувача"
  ]
};

export const epoxyVolumeCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
