import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { r1: 'Resistor R1, kΩ', r2: 'Resistor R2, kΩ', c: 'Capacitor C, nF' },
    options: {},
    results: {
      'Частота': 'Frequency', 'Период': 'Period', 'Время высокого уровня': 'High time',
      'Время низкого уровня': 'Low time', 'Скважность': 'Duty cycle',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Гц': 'Hz', 'мс': 'ms', '%': '%',
      'Сопротивление должно быть больше нуля': 'The resistance must be greater than zero',
      'Ёмкость должна быть больше нуля': 'The capacitance must be greater than zero',
    },
  },
  uk: {
    fields: { r1: 'Резистор R1, кОм', r2: 'Резистор R2, кОм', c: 'Конденсатор C, нФ' },
    options: {},
    results: {
      'Частота': 'Частота', 'Период': 'Період', 'Время высокого уровня': 'Час високого рівня',
      'Время низкого уровня': 'Час низького рівня', 'Скважность': 'Шпаруватість',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Гц': 'Гц', 'мс': 'мс', '%': '%',
      'Сопротивление должно быть больше нуля': 'Опір має бути більшим за нуль',
      'Ёмкость должна быть больше нуля': 'Ємність має бути більшою за нуль',
    },
  },
};
