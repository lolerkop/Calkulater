import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const timer555CopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор автоколивального таймера NE555",
    "slug": "taymer-ne555",
    "shortDescription": "Частота, період і шпаруватість мультивібратора на NE555 за двома резисторами та конденсатором.",
    "seoTitle": "Калькулятор NE555 — частота, період і шпаруватість",
    "seoDescription": "Розрахуйте частоту, період, часи високого й низького рівня та шпаруватість автоколивального таймера NE555.",
    "h1": "Калькулятор автоколивального таймера NE555",
    "keywords": [
      "NE555",
      "мультивібратор",
      "шпаруватість",
      "генератор імпульсів"
    ]
  },
  ...contract.uk,
};
