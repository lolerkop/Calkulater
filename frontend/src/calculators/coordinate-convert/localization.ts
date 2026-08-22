import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Десятичные градусы': 'Decimal degrees', 'Градусы, минуты, секунды': 'Degrees, minutes, seconds',
  'Полушарие': 'Hemisphere', 'Только градусы и минуты': 'Degrees and minutes only',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Десятичные градусы': 'Десяткові градуси', 'Градусы, минуты, секунды': 'Градуси, хвилини, секунди',
  'Полушарие': 'Півкуля', 'Только градусы и минуты': 'Лише градуси та хвилини',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'Direction', deg: 'Degrees', minutes: 'Minutes', seconds: 'Seconds',
      hemisphere: 'Hemisphere', decimal: 'Decimal degrees',
    },
    options: {
      toDecimal: 'DMS → decimal', toDms: 'decimal → DMS',
      N: 'north or east', S: 'south or west',
    },
    results: RESULTS_EN,
    values: {
      'северное или восточное': 'north or east', 'южное или западное': 'south or west',
      'Десятичные градусы должны быть от −180 до 180': 'Decimal degrees must be between −180 and 180',
      'Градусы должны быть от 0 до 180': 'Degrees must be between 0 and 180',
      'Минуты должны быть от 0 до 59': 'Minutes must be between 0 and 59',
      'Секунды должны быть от 0 до 59': 'Seconds must be between 0 and 59',
      'Итог превышает 180 градусов': 'The result exceeds 180 degrees',
    },
  },
  uk: {
    fields: {
      mode: 'Напрям переведення', deg: 'Градуси', minutes: 'Хвилини', seconds: 'Секунди',
      hemisphere: 'Півкуля', decimal: 'Десяткові градуси',
    },
    options: {
      toDecimal: 'ГХС → десяткові', toDms: 'десяткові → ГХС',
      N: 'північна або східна', S: 'південна або західна',
    },
    results: RESULTS_UK,
    values: {
      'северное или восточное': 'північна або східна', 'южное или западное': 'південна або західна',
      'Десятичные градусы должны быть от −180 до 180': 'Десяткові градуси мають бути від −180 до 180',
      'Градусы должны быть от 0 до 180': 'Градуси мають бути від 0 до 180',
      'Минуты должны быть от 0 до 59': 'Хвилини мають бути від 0 до 59',
      'Секунды должны быть от 0 до 59': 'Секунди мають бути від 0 до 59',
      'Итог превышает 180 градусов': 'Підсумок перевищує 180 градусів',
    },
  },
};
