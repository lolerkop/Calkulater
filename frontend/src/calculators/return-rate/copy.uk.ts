// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const returnRateCopyUk: CalculatorCopy = {
  name: 'Калькулятор частки повернень',
  slug: 'chastka-povernen',
  shortDescription: 'Яка частка замовлень повернулася.',
  seoTitle: 'Калькулятор частки повернень — відсоток повернутих замовлень',
  seoDescription: "Розрахуйте частку унікальних повернутих замовлень в одній групі та доповнення до 100%. Повернення й знаменник мають належати тим самим замовленням.",
  h1: 'Калькулятор частки повернень',
  keywords: ['частка повернень', 'відсоток повернень', 'повернення в e-commerce'],
  ...contractContent.uk,
};
