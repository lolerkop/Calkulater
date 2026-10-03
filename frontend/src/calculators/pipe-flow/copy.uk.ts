import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const pipeFlowCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор швидкості потоку в трубі",
  "slug": "shvydkist-potoku-v-trubi",
  "shortDescription": "Швидкість води в трубі за витратою та внутрішнім діаметром.",
  "seoTitle": "Калькулятор швидкості потоку в трубі — за витратою і діаметром",
  "seoDescription": "Розрахуйте швидкість води в трубі за витратою в кубометрах за годину та внутрішнім діаметром.",
  "h1": "Калькулятор швидкості потоку в трубі",
  "keywords": [
    "швидкість потоку в трубі",
    "витрата води",
    "внутрішній діаметр труби"
  ]
},
  ...contract.uk,
};
