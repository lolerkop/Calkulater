import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Расход топлива': 'Fuel used',
  'Расход в час': 'Consumption per hour',
  'Стоимость топлива': 'Fuel cost',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Расход топлива': 'Витрата пального',
  'Расход в час': 'Витрата на годину',
  'Стоимость топлива': 'Вартість пального',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'load': 'Last, kW',
      'sfc': 'Spezifischer Verbrauch, l/kWh',
      'hours': 'Laufzeit, h',
      'price': 'Kraftstoffpreis je Liter',
    },
    results: {
      'Расход топлива': 'Kraftstoffverbrauch',
      'Расход в час': 'Verbrauch je Stunde',
      'Стоимость топлива': 'Kraftstoffkosten',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ' л/ч': ' l/h',
      ' л': ' l',
      'Нагрузка должна быть больше нуля': 'Die Last muss größer als null sein',
      'Удельный расход должен быть больше нуля': 'Der spezifische Verbrauch muss größer als null sein',
      'Время работы должно быть больше нуля': 'Die Laufzeit muss größer als null sein',
    },
  },
  en: {
    fields: { load: 'Load, kW', sfc: 'Specific consumption, L/kWh', hours: 'Running time, h', price: 'Fuel price per litre', },
    options: { },
    results: RESULTS_EN,
    values: {
      ' л/ч': ' L/h',
      ' л': ' L',
      'Нагрузка должна быть больше нуля': 'The load must be greater than zero',
      'Удельный расход должен быть больше нуля': 'The specific consumption must be greater than zero',
      'Время работы должно быть больше нуля': 'The running time must be greater than zero',
    },
  },
  uk: {
    fields: { load: 'Навантаження, кВт', sfc: 'Питома витрата, л/кВт·год', hours: 'Час роботи, год', price: 'Ціна пального за літр', },
    options: { },
    results: RESULTS_UK,
    values: {
      ' л/ч': ' л/год',
      ' л': ' л',
      'Нагрузка должна быть больше нуля': 'Навантаження має бути більшим за нуль',
      'Удельный расход должен быть больше нуля': 'Питома витрата має бути більшою за нуль',
      'Время работы должно быть больше нуля': 'Час роботи має бути більшим за нуль',
    },
  },
};
