import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const cookedWeightCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор сухої та готової ваги",
  "slug": "suha-ta-hotova-vaha",
  "shortDescription": "Перерахунок сухої ваги крупи в готову й навпаки разом із калорійністю порції.",
  "seoTitle": "Калькулятор сухої та готової ваги продуктів",
  "seoDescription": "Перерахуйте суху вагу крупи в готову й навпаки, а також калорійність ста грамів готової страви за коефіцієнтом розварювання.",
  "h1": "Калькулятор сухої та готової ваги",
  "keywords": [
    "суха та готова вага",
    "коефіцієнт розварювання",
    "калорійність готової каші"
  ]
},
  ...contractContent.uk,
};
