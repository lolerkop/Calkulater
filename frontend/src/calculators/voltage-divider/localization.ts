import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'vin': 'Eingangsspannung, V',
      'r1': 'Oberer Widerstand R1, Ω',
      'r2': 'Unterer Widerstand R2, Ω',
    },
    results: {
      'Выходное напряжение': 'Ausgangsspannung',
      'Ток через делитель': 'Strom durch den Teiler',
      'Доля от входного': 'Anteil der Eingangsspannung',
      'Мощность верхнего плеча': 'Leistung im oberen Zweig',
      'Мощность нижнего плеча': 'Leistung im unteren Zweig',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'В': 'V',
      'мА': 'mA',
      'мВт': 'mW',
      'Верхнее сопротивление должно быть больше нуля': 'Der obere Widerstand muss größer als null sein',
      'Нижнее сопротивление должно быть больше нуля': 'Der untere Widerstand muss größer als null sein',
    },
  },
  en: {
    fields: {
      vin: 'Input voltage, V', r1: 'Upper resistance R1, Ω', r2: 'Lower resistance R2, Ω',
    },
    options: {},
    results: {
      'Выходное напряжение': 'Output voltage', 'Ток через делитель': 'Current through the divider',
      'Доля от входного': 'Share of the input', 'Мощность верхнего плеча': 'Power in the upper leg',
      'Мощность нижнего плеча': 'Power in the lower leg', 'Проверьте данные': 'Check the values',
    },
    values: {
      'В': 'V', 'мА': 'mA', 'мВт': 'mW',
      'Верхнее сопротивление должно быть больше нуля': 'The upper resistance must be greater than zero',
      'Нижнее сопротивление должно быть больше нуля': 'The lower resistance must be greater than zero',
    },
  },
  uk: {
    fields: {
      vin: 'Вхідна напруга, В', r1: 'Верхній опір R1, Ом', r2: 'Нижній опір R2, Ом',
    },
    options: {},
    results: {
      'Выходное напряжение': 'Вихідна напруга', 'Ток через делитель': 'Струм через дільник',
      'Доля от входного': 'Частка від вхідної', 'Мощность верхнего плеча': 'Потужність верхнього плеча',
      'Мощность нижнего плеча': 'Потужність нижнього плеча', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'В': 'В', 'мА': 'мА', 'мВт': 'мВт',
      'Верхнее сопротивление должно быть больше нуля': 'Верхній опір має бути більшим за нуль',
      'Нижнее сопротивление должно быть больше нуля': 'Нижній опір має бути більшим за нуль',
    },
  },
};
