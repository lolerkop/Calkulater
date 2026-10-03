import { mathWave8ContractContent } from './contractContent';
// Испанский копирайт калькулятора.
// Владение копирайтом объявляет доступность калькулятора в локали: без этого
// файла испанской страницы не существует. Подробный текст живёт в
// `src/data/esCalculatorContent.ts`.

import type { CalculatorCopy } from '../../lib/platform/types';

export const zScoreCopyEs: CalculatorCopy = {
  name: "Calculadora de puntuación z",
  slug: "puntuacion-z",
  shortDescription: "A cuántas desviaciones típicas de la media se sitúa un valor.",
  seoTitle: "Calculadora de puntuación z — valor tipificado",
  seoDescription: "Calcula la puntuación z de un valor a partir de la media y la desviación típica: z = (x − μ) / σ.",
  h1: "Calculadora de puntuación z",
  keywords: ["calculadora de puntuación z", "puntuación típica", "valor tipificado", "sigmas respecto a la media"],
  ...mathWave8ContractContent.es,
};
