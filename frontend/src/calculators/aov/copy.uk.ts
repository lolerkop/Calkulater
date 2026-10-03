// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const aovCopyUk: CalculatorCopy = {
  name: 'Калькулятор середнього чека',
  slug: 'serednii-chek',
  shortDescription: 'Виторг, поділений на кількість замовлень.',
  seoTitle: 'Калькулятор середнього чека — AOV з виторгу та замовлень',
  seoDescription: 'Розрахунок середнього чека: виторг за період, поділений на кількість замовлень того самого періоду.',
  h1: 'Калькулятор середнього чека',
  keywords: ['середній чек', 'AOV', 'середній кошик'],
  ...contractContent.uk,
};
