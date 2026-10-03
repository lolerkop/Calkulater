import type { CalculatorCopy } from '../../lib/platform/types';
import { relativityDilationContractContent } from './contractContent';

export const relativityDilationCopyUk: CalculatorCopy = {
  name: "Калькулятор сповільнення часу",
  slug: "spovilnennya-chasu",
  shortDescription: "Множник Лоренца, сповільнення часу та скорочення довжини.",
  seoTitle: "Калькулятор сповільнення часу — множник Лоренца",
  seoDescription: "Розрахуйте множник Лоренца, сповільнення часу та скорочення довжини за часткою швидкості світла.",
  h1: "Калькулятор сповільнення часу",
  keywords: ["сповільнення часу", "множник Лоренца", "теорія відносності"],
  ...relativityDilationContractContent.uk,
};
