import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'revenue': 'Umsatz aus der Kampagne',
      'spend': 'Kosten der Kampagne',
    },
    results: {
      'ROI рекламы': 'Werbe-ROI',
      'ROAS': 'ROAS',
      'Прибыль кампании': 'Gewinn der Kampagne',
      'Расходы на кампанию': 'Kosten der Kampagne',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Расходы на кампанию должны быть больше нуля': 'Die Kosten der Kampagne müssen größer als null sein',
    },
  },
  en: {
    fields: { revenue: 'Revenue from the campaign', spend: 'Campaign spend' },
    results: { 'ROI рекламы': 'Advertising ROI', 'ROAS': 'ROAS', 'Прибыль кампании': 'Campaign profit', 'Расходы на кампанию': 'Campaign spend', 'Проверьте данные': 'Check the values' },
    values: { 'Расходы на кампанию должны быть больше нуля': 'Campaign spend must be greater than zero' },
  },
  uk: {
    fields: { revenue: 'Виторг від кампанії', spend: 'Витрати на кампанію' },
    results: { 'ROI рекламы': 'ROI реклами', 'ROAS': 'ROAS', 'Прибыль кампании': 'Прибуток кампанії', 'Расходы на кампанию': 'Витрати на кампанію', 'Проверьте данные': 'Перевірте дані' },
    values: { 'Расходы на кампанию должны быть больше нуля': 'Витрати на кампанію мають бути більшими за нуль' },
  },
};
