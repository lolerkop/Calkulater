// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const revenuePerEmployeeCopyUk: CalculatorCopy = {
  name: 'Калькулятор виторгу на співробітника',
  slug: 'vytorh-na-spivrobitnyka',
  shortDescription: "Річний виторг, поділений на цілу кількість працівників.",
  seoTitle: 'Калькулятор виторгу на співробітника — продуктивність праці',
  seoDescription: "Розрахуйте річний виторг на працівника за річним виторгом і цілою чисельністю. Місячний рядок ділить річний показник на 12; дробові FTE не підтримуються.",
  h1: 'Калькулятор виторгу на співробітника',
  keywords: ['виторг на співробітника', 'продуктивність праці', 'ефективність штату'],
  ...contractContent.uk,
};
