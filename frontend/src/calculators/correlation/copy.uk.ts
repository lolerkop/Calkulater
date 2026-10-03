import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const correlationCopyUk: CalculatorCopy = {
  name: "Калькулятор кореляції",
  slug: "korelyatsiya",
  shortDescription: "Коефіцієнт кореляції Пірсона для двох рядів і рівняння лінії регресії.",
  seoTitle: "Калькулятор кореляції Пірсона для двох рядів",
  seoDescription: "Розрахуйте коефіцієнт кореляції Пірсона, коефіцієнт детермінації, коваріацію та рівняння лінії регресії за двома рядами значень.",
  h1: "Калькулятор кореляції",
  keywords: ["коефіцієнт кореляції", "кореляція Пірсона", "лінія регресії"],
  ...mathWave8ContractContent.uk,
};
