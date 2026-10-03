import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const heatIndexCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор індексу спеки",
  "slug": "indeks-speky",
  "shortDescription": "Навчальний індекс спеки за регресією без додаткових поправок.",
  "seoTitle": "Калькулятор індексу спеки — відчутна температура і вологість",
  "seoDescription": "Дев’ятичленна регресія Ротфуша без додаткових поправок NWS: індекс спеки, різниця з температурою й категорії за шкалою °F.",
  "h1": "Калькулятор індексу спеки",
  "keywords": [
    "індекс спеки",
    "відчутна температура",
    "вологість і спека"
  ]
},
 ...contract.uk,
};
