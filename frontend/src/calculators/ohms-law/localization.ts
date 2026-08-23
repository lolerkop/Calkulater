import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Результат': 'Result', 'Сопротивление': 'Resistance', 'Ток': 'Current',
  'Напряжение': 'Voltage', 'Мощность': 'Power', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Результат': 'Результат', 'Сопротивление': 'Опір', 'Ток': 'Струм',
  'Напряжение': 'Напруга', 'Мощность': 'Потужність', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'Known pair', voltage: 'Voltage, V', current: 'Current, A', resistance: 'Resistance, ohm' },
    options: {
      vi: 'voltage and current', vr: 'voltage and resistance', ir: 'current and resistance',
    },
    results: RESULTS_EN,
    values: {
      'Ом': 'Ω', 'В': 'V', 'А': 'A', 'Вт': 'W', '(вычисляется)': '(computed)',
      'Значения не могут быть отрицательными': 'The values cannot be negative',
      'Ток должен быть больше нуля, иначе сопротивление не определено': 'The current must be greater than zero, otherwise the resistance is undefined',
      'Сопротивление должно быть больше нуля, иначе ток не определён': 'The resistance must be greater than zero, otherwise the current is undefined',
    },
  },
  uk: {
    fields: { mode: 'Відома пара', voltage: 'Напруга, В', current: 'Струм, А', resistance: 'Опір, Ом' },
    options: {
      vi: 'напруга і струм', vr: 'напруга і опір', ir: 'струм і опір',
    },
    results: RESULTS_UK,
    values: {
      'Ом': 'Ом', 'В': 'В', 'А': 'А', 'Вт': 'Вт', '(вычисляется)': '(обчислюється)',
      'Значения не могут быть отрицательными': 'Значення не можуть бути від’ємними',
      'Ток должен быть больше нуля, иначе сопротивление не определено': 'Струм має бути більшим за нуль, інакше опір не визначений',
      'Сопротивление должно быть больше нуля, иначе ток не определён': 'Опір має бути більшим за нуль, інакше струм не визначений',
    },
  },
};
