// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const dayOfWeekCopyUk: CalculatorCopy = {
  name: 'Калькулятор дня тижня',
  slug: 'den-tyzhnya',
  shortDescription: 'На який день тижня припадає дата.',
  seoTitle: 'Калькулятор дня тижня — день тижня для будь-якої дати',
  seoDescription: "Дізнайтеся день тижня григоріанської дати, день року, номер і рік тижня ISO. Вихідний позначає суботу й неділю без державних свят.",
  h1: 'Калькулятор дня тижня',
  keywords: ['день тижня', 'який був день', 'калькулятор дня тижня'],
  ...contractContent.uk,
};
