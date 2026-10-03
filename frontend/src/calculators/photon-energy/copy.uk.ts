import type { CalculatorCopy } from '../../lib/platform/types';
import { photonEnergyContractContent } from './contractContent';

export const photonEnergyCopyUk: CalculatorCopy = {
  name: "Калькулятор енергії фотона",
  slug: "energiya-fotona",
  shortDescription: "Енергія і частота фотона за довжиною хвилі.",
  seoTitle: "Калькулятор енергії фотона — за довжиною хвилі",
  seoDescription: "Розрахуйте енергію фотона в джоулях і електронвольтах, частоту та хвильове число за довжиною хвилі у вакуумі.",
  h1: "Калькулятор енергії фотона",
  keywords: ["енергія фотона", "стала Планка", "довжина хвилі світла"],
  ...photonEnergyContractContent.uk,
};
