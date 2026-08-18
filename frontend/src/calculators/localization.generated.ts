// СГЕНЕРИРОВАНО. Не редактировать руками.
// Локализация калькуляторов V2, размеченная по (локаль, калькулятор, ключ).
// Ключи вроде `mode` или `amount` встречаются у многих калькуляторов, поэтому
// плоская карта по имени ключа здесь невозможна by construction.
// Перегенерировать: npm run calculators:generate

import type { ScopedLocalization } from '../lib/platform/types';

import { localization as loc_budget_50_30_20 } from './budget-50-30-20/localization';
import { localization as loc_commission } from './commission/localization';
import { localization as loc_savings_rate } from './savings-rate/localization';

export const v2Localization: ScopedLocalization = {
  en: {
    'budget-50-30-20': loc_budget_50_30_20.en ?? {},
    'commission': loc_commission.en ?? {},
    'savings-rate': loc_savings_rate.en ?? {},
  },
  uk: {
    'budget-50-30-20': loc_budget_50_30_20.uk ?? {},
    'commission': loc_commission.uk ?? {},
    'savings-rate': loc_savings_rate.uk ?? {},
  },
};
