// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const dividendYieldCopyUk: CalculatorCopy = {
  name: 'Калькулятор дивідендної дохідності',
  slug: 'dyvidendna-dokhidnist',
  shortDescription: "Річний дивіденд як частка зазначеної ціни акції.",
  seoTitle: 'Калькулятор дивідендної дохідності — дохідність у відсотках',
  seoDescription: 'Розрахунок дивідендної дохідності з річного дивіденду на акцію та ціни акції, разом із доходом на пакет.',
  h1: 'Калькулятор дивідендної дохідності',
  keywords: ['дивідендна дохідність', 'калькулятор дивідендів', 'дохідність акцій'],
  ...contractContent.uk,
};
