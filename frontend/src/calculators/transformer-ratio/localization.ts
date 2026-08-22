import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'What to find', n1: 'Primary turns', n2: 'Secondary turns',
      v1: 'Primary voltage, V', v2: 'Required secondary voltage, V', i1: 'Primary current, A',
    },
    options: { secondaryVoltage: 'secondary voltage', turnsRatio: 'turns ratio' },
    results: {
      'Вторичное напряжение': 'Secondary voltage', 'Отношение витков': 'Turns ratio',
      'Вторичный ток': 'Secondary current', 'Мощность': 'Power', 'Тип': 'Type',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'В': 'V', 'А': 'A', 'Вт': 'W',
      'повышающий': 'step-up', 'понижающий': 'step-down', 'разделительный': 'isolating',
      'Первичное напряжение должно быть больше нуля': 'The primary voltage must be greater than zero',
      'Первичный ток не может быть отрицательным': 'The primary current cannot be negative',
      'Вторичное напряжение должно быть больше нуля': 'The secondary voltage must be greater than zero',
      'Число витков первичной обмотки должно быть больше нуля': 'The primary turns must be greater than zero',
      'Число витков вторичной обмотки должно быть больше нуля': 'The secondary turns must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', n1: 'Витків первинної обмотки', n2: 'Витків вторинної обмотки',
      v1: 'Первинна напруга, В', v2: 'Потрібна вторинна напруга, В', i1: 'Первинний струм, А',
    },
    options: { secondaryVoltage: 'вторинну напругу', turnsRatio: 'відношення витків' },
    results: {
      'Вторичное напряжение': 'Вторинна напруга', 'Отношение витков': 'Відношення витків',
      'Вторичный ток': 'Вторинний струм', 'Мощность': 'Потужність', 'Тип': 'Тип',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'В': 'В', 'А': 'А', 'Вт': 'Вт',
      'повышающий': 'підвищувальний', 'понижающий': 'знижувальний', 'разделительный': 'розділовий',
      'Первичное напряжение должно быть больше нуля': 'Первинна напруга має бути більшою за нуль',
      'Первичный ток не может быть отрицательным': 'Первинний струм не може бути відʼємним',
      'Вторичное напряжение должно быть больше нуля': 'Вторинна напруга має бути більшою за нуль',
      'Число витков первичной обмотки должно быть больше нуля': 'Кількість витків первинної обмотки має бути більшою за нуль',
      'Число витков вторичной обмотки должно быть больше нуля': 'Кількість витків вторинної обмотки має бути більшою за нуль',
    },
  },
};
