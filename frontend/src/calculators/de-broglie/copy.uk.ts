import type { CalculatorCopy } from '../../lib/platform/types';
import { deBroglieContractContent } from './contractContent';

export const deBroglieCopyUk: CalculatorCopy = {
  name: "Калькулятор довжини хвилі де Бройля",
  slug: "dovzhyna-hvyli-de-broylya",
  shortDescription: "Довжина хвилі частинки за її масою та швидкістю.",
  seoTitle: "Калькулятор довжини хвилі де Бройля — за масою та швидкістю",
  seoDescription: "Розрахуйте довжину хвилі де Бройля за масою та швидкістю частинки, з імпульсом, кінетичною енергією та часткою швидкості світла.",
  h1: "Калькулятор довжини хвилі де Бройля",
  keywords: ["довжина хвилі де Бройля", "хвиля електрона", "стала Планка"],
  ...deBroglieContractContent.uk,
};
