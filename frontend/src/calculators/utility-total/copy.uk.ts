import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const utilityTotalCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор комунальних платежів",
  "slug": "komunalni-platezhi",
  "shortDescription": "Складає лічильникові послуги і постійні нарахування в один місячний підсумок.",
  "seoTitle": "Калькулятор комунальних платежів: лічильники, тарифи і постійна частина",
  "seoDescription": "Складіть електрику, воду і газ за показаннями і тарифами разом із постійними нарахуваннями в один місячний підсумок.",
  "h1": "Калькулятор комунальних платежів",
  "keywords": [
    "комунальні платежі",
    "підсумок комуналки за місяць",
    "вартість за показаннями",
    "рахунок за електрику воду газ"
  ]
},
  ...contractContent.uk,
};
