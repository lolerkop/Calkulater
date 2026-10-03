// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const shippingPerUnitCopyUk: CalculatorCopy = {
  name: 'Калькулятор доставки на одиницю',
  slug: 'dostavka-na-odynytsyu',
  shortDescription: 'Скільки логістика додає до собівартості одного товару.',
  seoTitle: 'Калькулятор доставки на одиницю — логістика на товар',
  seoDescription: 'Розрахунок вартості доставки на одиницю з вартості доставки, кількості одиниць і необов’язкового пакування.',
  h1: 'Калькулятор доставки на одиницю',
  keywords: ['доставка на одиницю', 'логістика на товар', 'вартість доставки'],
  ...contractContent.uk,
};
