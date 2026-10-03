import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор ваги труби",
  "slug": "vaga-truby",
  "shortDescription": "Маса труби за зовнішнім діаметром, товщиною стінки, довжиною та густиною матеріалу.",
  "seoTitle": "Калькулятор ваги труби — за діаметром, стінкою та довжиною",
  "seoDescription": "Розрахуйте масу сталевої або пластикової труби за зовнішнім діаметром, товщиною стінки, довжиною та густиною матеріалу.",
  "h1": "Калькулятор ваги труби",
  "keywords": [
    "вага труби",
    "маса труби",
    "погонний метр труби",
    "внутрішній діаметр"
  ]
};

export const pipeWeightCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
