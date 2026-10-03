import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const contributionMarginCopyUk: CalculatorCopy = {
  name: "Калькулятор маржинального доходу",
  slug: "marzhynalnyi-dokhid",
  shortDescription: "Скільки лишається від ціни після змінних витрат.",
  seoTitle: "Калькулятор маржинального доходу — маржа на одиницю та її частка",
  seoDescription: "Розрахунок маржинального доходу на одиницю, його частки в ціні та маржі на заданий обсяг.",
  h1: "Калькулятор маржинального доходу",
  keywords: ["маржинальний дохід","маржа на одиницю","юніт-економіка"],
  ...contractContent.uk,
};
