import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'r1': 'Widerstand R1, kΩ',
      'r2': 'Widerstand R2, kΩ',
      'c': 'Kondensator C, nF',
    },
    results: {
      'Частота': 'Frequenz',
      'Период': 'Periodendauer',
      'Время высокого уровня': 'High-Zeit',
      'Время низкого уровня': 'Low-Zeit',
      'Скважность': 'Tastverhältnis',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Гц': 'Hz',
      'мс': 'ms',
      '%': '%',
      'Сопротивление должно быть больше нуля': 'Der Widerstand muss größer als null sein',
      'Ёмкость должна быть больше нуля': 'Die Kapazität muss größer als null sein',
    },
  },
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
  es: {
    fields: {
      "r1": "Resistencia R1, kΩ",
      "r2": "Resistencia R2, kΩ",
      "c": "Condensador C, nF",
    },
    options: {},
    results: {
      "Частота": "Frecuencia",
      "Период": "Periodo",
      "Время высокого уровня": "Tiempo en alto",
      "Время низкого уровня": "Tiempo en bajo",
      "Скважность": "Ciclo de trabajo",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Гц": "Hz",
      "мс": "ms",
      "%": "%",
      "Сопротивление должно быть больше нуля": "La resistencia debe ser mayor que cero",
      "Ёмкость должна быть больше нуля": "La capacidad debe ser mayor que cero",
    },
  },
};
