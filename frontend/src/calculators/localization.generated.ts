// СГЕНЕРИРОВАНО. Не редактировать руками.
// Локализация калькуляторов V2, размеченная по (локаль, калькулятор, ключ).
// Ключи вроде `mode` или `amount` встречаются у многих калькуляторов, поэтому
// плоская карта по имени ключа здесь невозможна by construction.
// Перегенерировать: npm run calculators:generate

import type { ScopedLocalization } from '../lib/platform/types';

import { localization as loc_budget_50_30_20 } from './budget-50-30-20/localization';
import { localization as loc_cagr } from './cagr/localization';
import { localization as loc_calories_from_macros } from './calories-from-macros/localization';
import { localization as loc_commission } from './commission/localization';
import { localization as loc_room_volume } from './room-volume/localization';
import { localization as loc_savings_rate } from './savings-rate/localization';
import { localization as loc_time_duration } from './time-duration/localization';
import { localization as loc_week_number } from './week-number/localization';

export const v2Localization: ScopedLocalization = {
  en: {
    'budget-50-30-20': loc_budget_50_30_20.en ?? {},
    'cagr': loc_cagr.en ?? {},
    'calories-from-macros': loc_calories_from_macros.en ?? {},
    'commission': loc_commission.en ?? {},
    'room-volume': loc_room_volume.en ?? {},
    'savings-rate': loc_savings_rate.en ?? {},
    'time-duration': loc_time_duration.en ?? {},
    'week-number': loc_week_number.en ?? {},
  },
  uk: {
    'budget-50-30-20': loc_budget_50_30_20.uk ?? {},
    'cagr': loc_cagr.uk ?? {},
    'calories-from-macros': loc_calories_from_macros.uk ?? {},
    'commission': loc_commission.uk ?? {},
    'room-volume': loc_room_volume.uk ?? {},
    'savings-rate': loc_savings_rate.uk ?? {},
    'time-duration': loc_time_duration.uk ?? {},
    'week-number': loc_week_number.uk ?? {},
  },
};
