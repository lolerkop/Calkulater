import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const petFoodCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор корму для тварини",
  "slug": "korm-dlya-tvaryny",
  "shortDescription": "Добова норма корму за масою, множником потреби та калорійністю.",
  "seoTitle": "Калькулятор корму для тварини: добова норма",
  "seoDescription": "Розрахунок добової норми корму для кота чи собаки за масою тіла, множником енергопотреби та калорійністю корму.",
  "h1": "Калькулятор корму для тварини",
  "keywords": [
    "норма корму",
    "скільки корму собаці",
    "енергопотреба тварини",
    "RER"
  ]
},
  ...contractContent.uk,
};
