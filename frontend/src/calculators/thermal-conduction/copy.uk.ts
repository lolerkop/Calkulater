import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const thermalConductionCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор теплопередачі крізь шар",
  "slug": "teploperedacha-kriz-shar",
  "shortDescription": "Тепловий потік, опір і коефіцієнт тепловіддачі шару.",
  "seoTitle": "Калькулятор теплопередачі крізь шар — потік і опір",
  "seoDescription": "Розрахуйте тепловий потік крізь шар утеплювача або стіни: опір, коефіцієнт тепловіддачі та густину потоку.",
  "h1": "Калькулятор теплопередачі крізь шар",
  "keywords": [
    "теплопередача крізь стіну",
    "термічний опір шару",
    "коефіцієнт тепловіддачі"
  ]
},
  ...contract.uk,
};
