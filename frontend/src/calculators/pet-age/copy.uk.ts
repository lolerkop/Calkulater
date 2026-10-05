import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const petAgeCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор віку тварини",
  "slug": "vik-tvaryny",
  "shortDescription": "Умовний вік кота чи собаки в людських роках за ілюстративною шкалою 15/9/4/7.",
  "seoTitle": "Калькулятор віку тварини в людських роках",
  "seoDescription": "Оцінка умовного віку кота чи собаки за ілюстративною шкалою 15/9/4/7. Це не ветеринарна оцінка здоров’я чи тривалості життя.",
  "h1": "Калькулятор віку тварини",
  "keywords": [
    "вік кота",
    "вік собаки",
    "людські роки",
    "умовна вікова шкала"
  ]
},
  ...contractContent.uk,
};
