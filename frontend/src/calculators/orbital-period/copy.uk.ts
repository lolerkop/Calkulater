import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const orbitalPeriodCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор періоду обертання по орбіті",
  "slug": "period-obertannya-po-orbiti",
  "shortDescription": "Період обертання супутника за масою центрального тіла та радіусом орбіти.",
  "seoTitle": "Калькулятор періоду обертання — супутник і геостаціонар",
  "seoDescription": "Розрахуйте період і швидкість кругової орбіти малого супутника за масою центрального тіла та радіусом у моделі одного джерела тяжіння.",
  "h1": "Калькулятор періоду обертання по орбіті",
  "keywords": [
    "період обертання",
    "орбітальна швидкість",
    "геостаціонарна орбіта"
  ]
},
  ...contract.uk,
};
