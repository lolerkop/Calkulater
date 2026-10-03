import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const simpleInterestCopyUk: CalculatorCopy = {
  name: "Калькулятор простих відсотків",
  slug: "prosti-vidsotky",
  shortDescription: "Відсотки лише на початкову суму, в обидва боки.",
  seoTitle: "Калькулятор простих відсотків — відсотки та потрібна ставка",
  seoDescription: "Розрахунок простих відсотків на початкову суму, підсумку та ставки, потрібної для заданих відсотків.",
  h1: "Калькулятор простих відсотків",
  keywords: ["прості відсотки","калькулятор відсотків","потрібна ставка"],
  ...contractContent.uk,
};
