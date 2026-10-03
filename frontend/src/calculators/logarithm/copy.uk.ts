// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const logarithmCopyUk: CalculatorCopy = {
  name: 'Калькулятор логарифма',
  slug: 'kalkulyator-logaryfma',
  shortDescription: 'Десятковий, натуральний і логарифм за будь-якою основою.',
  seoTitle: 'Калькулятор логарифма — за основою 10, e та довільною',
  seoDescription: 'Обчисліть логарифм за основою 10, e або будь-якою іншою, з перевіркою області визначення.',
  h1: 'Калькулятор логарифма',
  keywords: ['калькулятор логарифма', 'логарифм за основою 2', 'натуральний логарифм'],
  ...contractContent.uk,
};
