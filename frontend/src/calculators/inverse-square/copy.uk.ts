import type { CalculatorCopy } from '../../lib/platform/types';
import { inverseSquareContractContent } from './contractContent';

export const inverseSquareCopyUk: CalculatorCopy = {
  name: "Калькулятор закону обернених квадратів",
  slug: "zakon-obernenyh-kvadrativ",
  shortDescription: "Як спадає інтенсивність з відстанню від точкового джерела.",
  seoTitle: "Калькулятор закону обернених квадратів — інтенсивність і відстань",
  seoDescription: "Розрахуйте зміну лінійної інтенсивності або освітленості з відстанню від точкового джерела за законом обернених квадратів.",
  h1: "Калькулятор закону обернених квадратів",
  keywords: ["закон обернених квадратів", "інтенсивність і відстань", "освітленість"],
  ...inverseSquareContractContent.uk,
};
