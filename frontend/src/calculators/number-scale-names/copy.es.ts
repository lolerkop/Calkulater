import { contractContent } from './contractContent';
// Испанский копирайт калькулятора.
// Владение копирайтом объявляет доступность калькулятора в локали: без этого
// файла испанской страницы не существует. Подробный текст живёт в
// `src/data/esCalculatorContent.ts`.

import type { CalculatorCopy } from '../../lib/platform/types';

export const numberScaleNamesCopyEs: CalculatorCopy = {
  name: "Conversor de lakh y crore",
  slug: "conversor-lakh-crore",
  shortDescription: "Convierte entre lakh, crore y los miles y millones habituales.",
  seoTitle: "De lakh y crore a millones — conversor de escalas numéricas",
  seoDescription: "Convierte lakh y crore a miles, millones y miles de millones y al revés, con el valor mostrado en tres escalas a la vez.",
  h1: "Conversor de lakh y crore",
  keywords: ["lakh a millones", "conversor de crore", "sistema numérico indio", "lakh crore"],
  ...contractContent.es
};
