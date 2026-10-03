import { mathWave8ContractContent } from './contractContent';
// Испанский копирайт калькулятора.
// Владение копирайтом объявляет доступность калькулятора в локали: без этого
// файла испанской страницы не существует. Подробный текст живёт в
// `src/data/esCalculatorContent.ts`.

import type { CalculatorCopy } from '../../lib/platform/types';

export const probabilityBasicCopyEs: CalculatorCopy = {
  name: "Calculadora de probabilidad",
  slug: "calculadora-de-probabilidad",
  shortDescription: "Probabilidad de un suceso, de su complementario y de dos sucesos independientes.",
  seoTitle: "Calculadora de probabilidad — casos, complementario y sucesos independientes",
  seoDescription: "Calcula la probabilidad de un suceso a partir de los casos favorables, la de su complementario y las probabilidades de dos sucesos independientes.",
  h1: "Calculadora de probabilidad",
  keywords: ["calculadora de probabilidad", "probabilidad de un suceso", "probabilidad del complementario", "sucesos independientes"],
  ...mathWave8ContractContent.es,
};
