import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const slopeCopyUk: CalculatorCopy = {
  name: "Калькулятор ухилу",
  slug: "ukhyl",
  seoTitle: "Калькулятор ухилу: відсотки, градуси та довжина",
  h1: "Калькулятор ухилу",
  keywords: ["калькулятор ухилу", "ухил у відсотках", "кут нахилу", "пандус"],
  ...contractContent.uk,
};
