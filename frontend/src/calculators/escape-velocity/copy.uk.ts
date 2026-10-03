import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const escapeVelocityCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор другої космічної швидкості",
  "slug": "druga-kosmichna-shvydkist",
  "shortDescription": "Швидкість відходу від планети за її масою та радіусом.",
  "seoTitle": "Калькулятор другої космічної швидкості — за масою та радіусом",
  "seoDescription": "Розрахуйте швидкості відриву й колової орбіти в ньютонівській сферичній моделі за масою та відстанню від центра.",
  "h1": "Калькулятор другої космічної швидкості",
  "keywords": [
    "друга космічна швидкість",
    "перша космічна швидкість",
    "швидкість втечі"
  ]
},
  ...contract.uk,
};
