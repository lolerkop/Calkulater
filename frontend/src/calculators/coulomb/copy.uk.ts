import type { CalculatorCopy } from '../../lib/platform/types';
import { coulombContractContent } from './contractContent';

export const coulombCopyUk: CalculatorCopy = {
  name: "Калькулятор закону Кулона",
  slug: "zakon-kulona",
  shortDescription: "Сила взаємодії двох точкових зарядів.",
  seoTitle: "Калькулятор закону Кулона — сила взаємодії зарядів",
  seoDescription: "Розрахуйте силу взаємодії двох точкових зарядів за законом Кулона, з напруженістю поля та потенціальною енергією у вакуумі.",
  h1: "Калькулятор закону Кулона",
  keywords: ["закон Кулона", "сила взаємодії зарядів", "електростатика"],
  ...coulombContractContent.uk,
};
