// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const differenceAbsRelCopyUk: CalculatorCopy = {
  name: 'Абсолютна та відносна різниця',
  slug: 'abs-rel-riznytsya',
  shortDescription: 'Наскільки відрізняються два значення — в одиницях і у відсотках.',
  seoTitle: 'Калькулятор абсолютної та відносної різниці',
  seoDescription: "Знайдіть різницю двох значень зі знаком і відносну різницю до модуля початкової бази. Від’ємна база допустима; за нуля відносний відсоток не визначений.",
  h1: 'Абсолютна та відносна різниця',
  keywords: ['абсолютна різниця', 'відносна різниця', 'різниця у відсотках'],
  ...contractContent.uk,
};
