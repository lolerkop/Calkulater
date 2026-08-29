import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Расход': 'Consumption', 'Нужно топлива': 'Fuel needed', 'Литров на 100 км': 'Litres per 100 km',
  'Километров на литр': 'Kilometres per litre', 'Расход на 1000 км': 'Fuel for 1000 km',
  'Пробег': 'Distance', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Расход': 'Витрата', 'Нужно топлива': 'Потрібно палива', 'Литров на 100 км': 'Літрів на 100 км',
  'Километров на литр': 'Кілометрів на літр', 'Расход на 1000 км': 'Витрата на 1000 км',
  'Пробег': 'Пробіг', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was berechnet wird',
      'litres': 'Verbrauchte Liter',
      'distance': 'Strecke, km',
      'consumption': 'Verbrauch, l/100 km',
    },
    options: {
      'measure': 'Liter je 100 km',
      'kml': 'Kilometer je Liter',
      'need': 'nötiger Kraftstoff für eine Fahrt',
    },
    results: {
      'Расход': 'Verbrauch',
      'Нужно топлива': 'Nötiger Kraftstoff',
      'Литров на 100 км': 'Liter je 100 km',
      'Километров на литр': 'Kilometer je Liter',
      'Расход на 1000 км': 'Verbrauch auf 1000 km',
      'Пробег': 'Strecke',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'л/100 км': 'l/100 km',
      'км/л': 'km/l',
      'л': 'l',
      'км': 'km',
      'Количество литров должно быть больше нуля': 'Die Zahl der Liter muss größer als null sein',
      'Пробег должен быть больше нуля': 'Die Strecke muss größer als null sein',
      'Расход должен быть больше нуля': 'Der Verbrauch muss größer als null sein',
    },
  },
  en: {
    fields: { mode: 'What to calculate', litres: 'Litres used', distance: 'Distance, km', consumption: 'Consumption, L/100 km' },
    options: { measure: 'litres per 100 km', kml: 'kilometres per litre', need: 'fuel needed for a trip' },
    results: RESULTS_EN,
    values: {
      'л/100 км': 'L/100 km', 'км/л': 'km/L', 'л': 'L', 'км': 'km',
      'Количество литров должно быть больше нуля': 'The number of litres must be greater than zero',
      'Пробег должен быть больше нуля': 'The distance must be greater than zero',
      'Расход должен быть больше нуля': 'The consumption must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Що обчислити', litres: 'Витрачено літрів', distance: 'Відстань, км', consumption: 'Витрата, л/100 км' },
    options: { measure: 'літрів на 100 км', kml: 'кілометрів на літр', need: 'потрібно палива на поїздку' },
    results: RESULTS_UK,
    values: {
      'л/100 км': 'л/100 км', 'км/л': 'км/л', 'л': 'л', 'км': 'км',
      'Количество литров должно быть больше нуля': 'Кількість літрів має бути більшою за нуль',
      'Пробег должен быть больше нуля': 'Пробіг має бути більшим за нуль',
      'Расход должен быть больше нуля': 'Витрата має бути більшою за нуль',
    },
  },
};
