import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const probabilityBasicCopyUk: CalculatorCopy = {
  name: "Калькулятор ймовірності",
  slug: "ymovirnist",
  shortDescription: "Ймовірність події, протилежної події та двох незалежних подій.",
  seoTitle: "Калькулятор ймовірності — результати, протилежна та незалежні події",
  seoDescription: "Обчисліть ймовірність події за кількістю сприятливих результатів, ймовірність протилежної події та двох незалежних подій.",
  h1: "Калькулятор ймовірності",
  keywords: ["калькулятор ймовірності", "ймовірність події"],
  ...mathWave8ContractContent.uk,
};
