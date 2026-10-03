import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const weekNumberCopyUk: CalculatorCopy = {
  name: "Калькулятор номера тижня",
  slug: "kalkulyator-nomera-tyzhnya",
  shortDescription: "ISO-тиждень і порядковий день для наявної григоріанської дати.",
  seoTitle: "Калькулятор номера тижня — ISO-тиждень і день року",
  seoDescription: "Знайдіть ISO-тиждень, ISO-рік, порядковий день і залишок днів для григоріанських дат 0001–9999 років.",
  h1: "Калькулятор номера тижня",
  keywords: ["номер тижня","iso тиждень","день року"],
  ...contractContent.uk,
};
