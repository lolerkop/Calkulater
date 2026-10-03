import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор паркану",
  "slug": "parkan",
  "shortDescription": "Стовпи, секції і лаги для паркану заданої довжини.",
  "seoTitle": "Калькулятор паркану: стовпи, секції і лаги",
  "seoDescription": "Порахуйте, скільки стовпів, секцій і метрів лаг забирає паркан, з урахуванням стовпів під хвіртки і справжнього кроку.",
  "h1": "Калькулятор паркану",
  "keywords": [
    "розрахунок паркану",
    "крок стовпів паркану",
    "скільки стовпів",
    "лаги для паркану"
  ]
};

export const fenceCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
