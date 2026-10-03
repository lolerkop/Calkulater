import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const yeastConvertCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор перерахунку дріжджів",
  "slug": "pererahunok-drizhdzhiv",
  "shortDescription": "Перерахунок пресованих, сухих активних і швидкодіючих дріжджів між собою.",
  "seoTitle": "Перерахунок дріжджів — пресовані, сухі активні, швидкодіючі",
  "seoDescription": "Перерахуйте пресовані, сухі активні та швидкодіючі дріжджі між собою за масою.",
  "h1": "Калькулятор перерахунку дріжджів",
  "keywords": [
    "перерахунок дріжджів",
    "пресовані дріжджі",
    "сухі дріжджі",
    "швидкодіючі дріжджі"
  ]
},
  ...contractContent.uk,
};
