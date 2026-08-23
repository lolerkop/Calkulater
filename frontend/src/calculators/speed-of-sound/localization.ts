import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { t: 'Air temperature, °C' },
    options: {},
    results: {
      'Скорость звука': 'Speed of sound', 'В километрах в час': 'In kilometres per hour',
      'Километр звук пройдёт за': 'Sound covers a kilometre in', 'За три секунды': 'In three seconds',
      'Отклонение от значения при 0 °C': 'Difference from the value at 0 °C',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м/с': 'm/s', 'км/ч': 'km/h', 'с': 's', 'м': 'm',
      'Температура вне диапазона от −80 до 80 °C': 'The temperature is outside the −80 to 80 °C range',
    },
  },
  uk: {
    fields: { t: 'Температура повітря, °C' },
    options: {},
    results: {
      'Скорость звука': 'Швидкість звуку', 'В километрах в час': 'У кілометрах за годину',
      'Километр звук пройдёт за': 'Кілометр звук подолає за', 'За три секунды': 'За три секунди',
      'Отклонение от значения при 0 °C': 'Відхилення від значення за 0 °C',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м/с': 'м/с', 'км/ч': 'км/год', 'с': 'с', 'м': 'м',
      'Температура вне диапазона от −80 до 80 °C': 'Температура поза діапазоном від −80 до 80 °C',
    },
  },
};
