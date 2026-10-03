import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const geomSectorCopyUk: CalculatorCopy = {
  name: "Калькулятор сектора кола",
  slug: "sektor-kola",
  seoTitle: "Калькулятор сектора кола — площа, дуга, хорда",
  h1: "Калькулятор сектора кола",
  keywords: ["сектор кола", "площа сектора", "довжина дуги"],
  ...contractContent.uk,
};
