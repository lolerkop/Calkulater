import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор ваги металопрокату",
  "slug": "vaha-metaloprokatu",
  "shortDescription": "Маса кола, квадрата та смуги за розмірами перерізу й довжиною.",
  "seoTitle": "Калькулятор ваги металопрокату — коло, квадрат, смуга",
  "seoDescription": "Розрахуйте масу металопрокату: коло, квадрат або смуга за розмірами перерізу, довжиною та густиною сплаву.",
  "h1": "Калькулятор ваги металопрокату",
  "keywords": [
    "вага металопрокату",
    "вага кола сталевого",
    "погонна вага металу"
  ]
};

export const metalWeightCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
