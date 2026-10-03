import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const leverageCopyUk: CalculatorCopy = {
  "name": "Калькулятор кредитного плеча",
  "slug": "kredytne-plege",
  "shortDescription": "Розмір позиції, ціна ліквідації та запас до неї.",
  "seoTitle": "Калькулятор кредитного плеча та ціни ліквідації",
  "seoDescription": "Розрахунок розміру позиції з плечем, ціни ліквідації та відсотка падіння до неї за заставою, плечем і підтримувальною маржею.",
  "h1": "Калькулятор кредитного плеча",
  "keywords": [
    "кредитне плече",
    "ціна ліквідації",
    "розмір позиції",
    "підтримувальна маржа"
  ],
  ...contractContent.uk,
};
