import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const specificHeatCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор теплоти нагрівання",
  "slug": "pytoma-teployemnist",
  "shortDescription": "Скільки енергії потрібно, щоб нагріти тіло: Q = c·m·ΔT.",
  "seoTitle": "Калькулятор теплоти нагрівання — Q = c·m·ΔT",
  "seoDescription": "Розрахуйте кількість теплоти на нагрівання чи охолодження тіла за питомою теплоємністю, масою та перепадом температури.",
  "h1": "Калькулятор теплоти нагрівання",
  "keywords": [
    "питома теплоємність",
    "кількість теплоти",
    "нагрівання води енергія"
  ]
},
  ...contract.uk,
};
