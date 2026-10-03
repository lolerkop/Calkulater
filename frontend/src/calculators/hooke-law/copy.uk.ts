import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const hookeLawCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор закону Гука",
  "slug": "zakon-huka",
  "shortDescription": "Сила пружини, її видовження чи жорсткість і запасена енергія.",
  "seoTitle": "Калькулятор закону Гука — сила, видовження, жорсткість пружини",
  "seoDescription": "Розрахуйте силу пружини, її видовження або жорсткість за законом Гука F = k·x, а також запасену енергію.",
  "h1": "Калькулятор закону Гука",
  "keywords": [
    "закон гука",
    "жорсткість пружини",
    "сила пружності"
  ]
},
  ...contract.uk,
};
