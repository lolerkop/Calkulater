import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { r: 'Resistance, Ω', c: 'Capacitance, nF' },
    options: {},
    results: {
      'Частота среза': 'Cutoff frequency', 'Постоянная времени': 'Time constant',
      'Заряд почти до конца': 'Charge nearly complete', 'Сопротивление': 'Resistance',
      'Ёмкость': 'Capacitance', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Гц': 'Hz', 'с': 's', 'Ом': 'Ω', 'нФ': 'nF',
      'Сопротивление должно быть больше нуля': 'The resistance must be greater than zero',
      'Ёмкость должна быть больше нуля': 'The capacitance must be greater than zero',
    },
  },
  uk: {
    fields: { r: 'Опір, Ом', c: 'Ємність, нФ' },
    options: {},
    results: {
      'Частота среза': 'Частота зрізу', 'Постоянная времени': 'Стала часу',
      'Заряд почти до конца': 'Заряд майже до кінця', 'Сопротивление': 'Опір',
      'Ёмкость': 'Ємність', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Гц': 'Гц', 'с': 'с', 'Ом': 'Ом', 'нФ': 'нФ',
      'Сопротивление должно быть больше нуля': 'Опір має бути більшим за нуль',
      'Ёмкость должна быть больше нуля': 'Ємність має бути більшою за нуль',
    },
  },
};
