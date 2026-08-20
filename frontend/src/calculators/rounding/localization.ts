import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      value: 'Value to round',
      digits: 'Decimal places',
      mode: 'Rounding direction',
    },
    options: { half: 'to the nearest', down: 'down (floor)', up: 'up (ceiling)' },
    results: {
      'Округлённое значение': 'Rounded value',
      'Исходное значение': 'Original value',
      'Разница': 'Difference',
      'Знаков': 'Decimal places',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Число знаков не может быть отрицательным': 'The number of decimal places cannot be negative',
      'Больше десяти знаков не поддерживается': 'More than ten decimal places is not supported',
    },
  },
  uk: {
    fields: {
      value: 'Число для округлення',
      digits: 'Десяткових знаків',
      mode: 'Напрям округлення',
    },
    options: { half: 'до найближчого', down: 'вниз (підлога)', up: 'вгору (стеля)' },
    results: {
      'Округлённое значение': 'Округлене значення',
      'Исходное значение': 'Початкове значення',
      'Разница': 'Різниця',
      'Знаков': 'Знаків',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Число знаков не может быть отрицательным': 'Кількість знаків не може бути від’ємною',
      'Больше десяти знаков не поддерживается': 'Понад десять знаків не підтримується',
    },
  },
};
