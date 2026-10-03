import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const roastTimeCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор часу запікання",
  "slug": "chas-zapikannya",
  "shortDescription": "Скільки тримати м'ясо в духовці за масою та нормою на кілограм.",
  "seoTitle": "Калькулятор часу запікання — хвилини за масою та нормою",
  "seoDescription": "Розрахуйте час запікання м'яса чи птиці: постійна частина, норма хвилин на кілограм та відпочинок після духовки.",
  "h1": "Калькулятор часу запікання",
  "keywords": [
    "час запікання",
    "скільки запікати індичку",
    "хвилин на кілограм м'яса"
  ]
},
  ...contractContent.uk,
};
