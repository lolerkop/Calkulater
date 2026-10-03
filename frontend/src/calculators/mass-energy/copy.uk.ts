import type { CalculatorCopy } from '../../lib/platform/types';
import { massEnergyContractContent } from './contractContent';

export const massEnergyCopyUk: CalculatorCopy = {
  name: "Калькулятор енергії спокою E=mc²",
  slug: "energiya-spokoyu",
  shortDescription: "Енергія спокою маси за формулою E=mc² у джоулях, кіловат-годинах і тоннах тротилу.",
  seoTitle: "Калькулятор E=mc² — енергія спокою маси",
  seoDescription: "Розрахуйте енергію спокою речовини за формулою E=mc² у джоулях, кіловат-годинах і тоннах тротилового еквіваленту.",
  h1: "Калькулятор енергії спокою E=mc²",
  keywords: ["E=mc2", "енергія спокою", "еквівалентність маси та енергії", "тротиловий еквівалент"],
  ...massEnergyContractContent.uk,
};
