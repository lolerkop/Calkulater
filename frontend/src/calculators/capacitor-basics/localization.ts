import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Заряд': 'Charge', 'Напряжение': 'Voltage', 'Ёмкость': 'Capacitance',
  'Энергия поля': 'Stored energy', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Заряд': 'Заряд', 'Напряжение': 'Напруга', 'Ёмкость': 'Ємність',
  'Энергия поля': 'Енергія поля', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'c': 'Kapazität, µF',
      'v': 'Spannung, V',
      'q': 'Ladung, µC',
    },
    options: {
      'charge': 'die Ladung',
      'voltage': 'die Spannung',
      'capacitance': 'die Kapazität',
    },
    results: {
      'Заряд': 'Ladung',
      'Напряжение': 'Spannung',
      'Ёмкость': 'Kapazität',
      'Энергия поля': 'Gespeicherte Energie',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Заряд и напряжение должны быть одного знака': 'Ladung und Spannung müssen dasselbe Vorzeichen haben',
      'мкКл': 'µC',
      'мкФ': 'µF',
      'Дж': 'J',
      'В': 'V',
      'Ёмкость должна быть больше нуля': 'Die Kapazität muss größer als null sein',
      'Напряжение не может быть нулевым: делить на него нечего': 'Die Spannung kann nicht null sein: dadurch lässt sich nicht teilen',
    },
  },
  en: {
    fields: { mode: 'What to find', c: 'Capacitance, µF', v: 'Voltage, V', q: 'Charge, µC' },
    options: { charge: 'the charge', voltage: 'the voltage', capacitance: 'the capacitance' },
    results: RESULTS_EN,
    values: {
      'Заряд и напряжение должны быть одного знака': 'The charge and the voltage must have the same sign',
      'мкКл': 'µC', 'мкФ': 'µF', 'Дж': 'J', 'В': 'V',
      'Ёмкость должна быть больше нуля': 'The capacitance must be greater than zero',
      'Напряжение не может быть нулевым: делить на него нечего': 'The voltage cannot be zero: there is nothing to divide by',
    },
  },
  uk: {
    fields: { mode: 'Що знайти', c: 'Ємність, мкФ', v: 'Напруга, В', q: 'Заряд, мкКл' },
    options: { charge: 'заряд', voltage: 'напругу', capacitance: 'ємність' },
    results: RESULTS_UK,
    values: {
      'Заряд и напряжение должны быть одного знака': 'Заряд і напруга мають бути одного знака',
      'мкКл': 'мкКл', 'мкФ': 'мкФ', 'Дж': 'Дж', 'В': 'В',
      'Ёмкость должна быть больше нуля': 'Ємність має бути більшою за нуль',
      'Напряжение не может быть нулевым: делить на него нечего': 'Напруга не може бути нульовою: ділити на неї нічого',
    },
  },
};
