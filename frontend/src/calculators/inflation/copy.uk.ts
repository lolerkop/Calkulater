import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const inflationCopyUk: CalculatorCopy = {
  "name": "Калькулятор інфляції",
  "slug": "inflyatsiya",
  "shortDescription": "Купівельна спроможність суми через кілька років і розмір втрати.",
  "seoTitle": "Калькулятор інфляції та купівельної спроможності грошей",
  "seoDescription": "Розрахуйте, скільки коштуватиме сьогоднішня сума через кілька років і яку частину купівельної спроможності вона втратить.",
  "h1": "Калькулятор інфляції",
  "keywords": [
    "калькулятор інфляції",
    "купівельна спроможність",
    "знецінення грошей"
  ],
  "resultTitle": "Калькулятор інфляції",
  ...contractContent.uk,
};
