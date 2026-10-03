import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const rmsVoltageCopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор діючої напруги",
    "slug": "diyuche-napruga",
    "shortDescription": "Перерахунок амплітудного значення, розмаху та діючої напруги для синуса, меандра й трикутника.",
    "seoTitle": "Калькулятор діючої напруги — амплітуда, розмах, RMS",
    "seoDescription": "Перерахуйте амплітудне значення, розмах і діючу напругу для синуса, меандра та трикутного сигналу.",
    "h1": "Калькулятор діючої напруги",
    "keywords": [
      "діюча напруга",
      "RMS",
      "амплітудне значення",
      "коефіцієнт амплітуди"
    ]
  },
  ...contract.uk,
};
