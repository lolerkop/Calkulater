import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'v': 'Geschwindigkeit, km/h',
      't': 'Lufttemperatur, °C',
    },
    results: {
      'Число Маха': 'Mach-Zahl',
      'Скорость звука': 'Schallgeschwindigkeit',
      'Режим': 'Bereich',
      'Скорость в метрах в секунду': 'Geschwindigkeit in Metern je Sekunde',
      'Скорость звука в километрах в час': 'Schallgeschwindigkeit in km/h',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м/с': 'm/s',
      'км/ч': 'km/h',
      'дозвуковой': 'Unterschall',
      'околозвуковой': 'Transschall',
      'сверхзвуковой': 'Überschall',
      'гиперзвуковой': 'Hyperschall',
      'Скорость не может быть отрицательной': 'Die Geschwindigkeit kann nicht negativ sein',
      'Температура вне диапазона от −80 до 80 °C': 'Die Temperatur liegt außerhalb des Bereichs von −80 bis 80 °C',
    },
  },
  en: {
    fields: { v: 'Speed, km/h', t: 'Air temperature, °C' },
    options: {},
    results: {
      'Число Маха': 'Mach number', 'Скорость звука': 'Speed of sound', 'Режим': 'Regime',
      'Скорость в метрах в секунду': 'Speed in metres per second',
      'Скорость звука в километрах в час': 'Speed of sound in km/h',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м/с': 'm/s', 'км/ч': 'km/h',
      'дозвуковой': 'subsonic', 'околозвуковой': 'transonic',
      'сверхзвуковой': 'supersonic', 'гиперзвуковой': 'hypersonic',
      'Скорость не может быть отрицательной': 'The speed cannot be negative',
      'Температура вне диапазона от −80 до 80 °C': 'The temperature is outside the −80 to 80 °C range',
    },
  },
  uk: {
    fields: { v: 'Швидкість, км/год', t: 'Температура повітря, °C' },
    options: {},
    results: {
      'Число Маха': 'Число Маха', 'Скорость звука': 'Швидкість звуку', 'Режим': 'Режим',
      'Скорость в метрах в секунду': 'Швидкість у метрах за секунду',
      'Скорость звука в километрах в час': 'Швидкість звуку в км/год',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м/с': 'м/с', 'км/ч': 'км/год',
      'дозвуковой': 'дозвуковий', 'околозвуковой': 'навколозвуковий',
      'сверхзвуковой': 'надзвуковий', 'гиперзвуковой': 'гіперзвуковий',
      'Скорость не может быть отрицательной': 'Швидкість не може бути відʼємною',
      'Температура вне диапазона от −80 до 80 °C': 'Температура поза діапазоном від −80 до 80 °C',
    },
  },
};
