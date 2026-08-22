import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'What to find', kw: 'Active power, kW', kva: 'Apparent power, kVA',
      pf: 'Power factor (cos φ)',
    },
    options: { kva: 'apparent power, kVA', kw: 'active power, kW' },
    results: {
      'Полная мощность': 'Apparent power', 'Активная мощность': 'Active power',
      'Реактивная мощность': 'Reactive power', 'Коэффициент мощности': 'Power factor',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'кВА': 'kVA', 'кВт': 'kW', 'квар': 'kvar',
      'Коэффициент мощности должен быть больше нуля': 'The power factor must be greater than zero',
      'Коэффициент мощности не может быть больше единицы': 'The power factor cannot exceed one',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', kw: 'Активна потужність, кВт', kva: 'Повна потужність, кВА',
      pf: 'Коефіцієнт потужності (cos φ)',
    },
    options: { kva: 'повну потужність, кВА', kw: 'активну потужність, кВт' },
    results: {
      'Полная мощность': 'Повна потужність', 'Активная мощность': 'Активна потужність',
      'Реактивная мощность': 'Реактивна потужність', 'Коэффициент мощности': 'Коефіцієнт потужності',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'кВА': 'кВА', 'кВт': 'кВт', 'квар': 'квар',
      'Коэффициент мощности должен быть больше нуля': 'Коефіцієнт потужності має бути більшим за нуль',
      'Коэффициент мощности не может быть больше единицы': 'Коефіцієнт потужності не може перевищувати одиницю',
    },
  },
};
