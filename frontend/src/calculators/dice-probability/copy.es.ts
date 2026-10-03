import { mathWave8ContractContent } from './contractContent';
// Испанский копирайт калькулятора.
// Владение копирайтом объявляет доступность калькулятора в локали: без этого
// файла испанской страницы не существует. Подробный текст живёт в
// `src/data/esCalculatorContent.ts`.

import type { CalculatorCopy } from '../../lib/platform/types';

export const diceProbabilityCopyEs: CalculatorCopy = {
  name: "Calculadora de probabilidad con dados",
  slug: "probabilidad-con-dados",
  shortDescription: "Probabilidad de sacar una suma dada con varios dados iguales.",
  seoTitle: "Calculadora de probabilidad con dados — posibilidad de una suma",
  seoDescription: "Calcula la probabilidad de obtener una suma objetivo con varios dados iguales, con el número exacto de casos favorables y totales.",
  h1: "Calculadora de probabilidad con dados",
  keywords: ["probabilidad con dados", "suma de dados", "probabilidades d6", "casos favorables"],
  ...mathWave8ContractContent.es,
};
