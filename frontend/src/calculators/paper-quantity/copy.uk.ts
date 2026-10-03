import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const paperQuantityCopyUk: CalculatorCopy = {
  name: "Калькулятор ваги та кількості паперу",
  slug: "vaga-i-kilkist-paperu",
  shortDescription: "Маса пачки за форматом, щільністю та кількістю аркушів.",
  seoTitle: "Калькулятор ваги паперу — за форматом і щільністю",
  seoDescription: "Оцініть масу паперу за номінальним форматом A0–A6, граматурою та кількістю аркушів; упаковку й вологість зважуйте окремо.",
  h1: "Калькулятор ваги та кількості паперу",
  keywords: ["вага паперу", "щільність паперу", "формат A4"],
  ...contractContent.uk
};
