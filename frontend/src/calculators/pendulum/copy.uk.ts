import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const pendulumCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор періоду маятника",
  "slug": "period-mayatnyka",
  "shortDescription": "Період коливань математичного маятника за довжиною підвісу.",
  "seoTitle": "Калькулятор періоду маятника — за довжиною підвісу",
  "seoDescription": "Розрахуйте період і частоту коливань математичного маятника за довжиною підвісу.",
  "h1": "Калькулятор періоду маятника",
  "keywords": [
    "період маятника",
    "математичний маятник",
    "частота коливань"
  ]
},
  ...contract.uk,
};
