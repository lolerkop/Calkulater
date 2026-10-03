import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const lcResonanceCopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор резонансної частоти LC-контуру",
    "slug": "rezonansna-chastota-lc",
    "shortDescription": "Частота коливального контуру за індуктивністю та ємністю.",
    "seoTitle": "Калькулятор резонансної частоти LC-контуру",
    "seoDescription": "Розрахуйте резонансну частоту коливального контуру за індуктивністю в мікрогенрі та ємністю в нанофарадах.",
    "h1": "Калькулятор резонансної частоти LC-контуру",
    "keywords": [
      "резонансна частота",
      "LC-контур",
      "коливальний контур"
    ]
  },
  ...contract.uk,
};
