import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'flow': 'Durchfluss, m³/h',
      'diameter': 'Innendurchmesser, mm',
    },
    results: {
      'Скорость потока': 'Strömungsgeschwindigkeit',
      'Площадь сечения': 'Querschnittsfläche',
      'Расход в литрах в секунду': 'Durchfluss in Litern je Sekunde',
      'Расход в литрах в минуту': 'Durchfluss in Litern je Minute',
      'Внутренний диаметр': 'Innendurchmesser',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м/с': 'm/s',
      'мм²': 'mm²',
      'л/с': 'l/s',
      'л/мин': 'l/min',
      'мм': 'mm',
      'Расход должен быть больше нуля': 'Der Durchfluss muss größer als null sein',
      'Внутренний диаметр должен быть больше нуля': 'Der Innendurchmesser muss größer als null sein',
    },
  },
  en: {
    fields: { flow: 'Flow rate, m³/h', diameter: 'Inner diameter, mm' },
    options: {},
    results: {
      'Скорость потока': 'Flow velocity', 'Площадь сечения': 'Cross-section area',
      'Расход в литрах в секунду': 'Flow in litres per second',
      'Расход в литрах в минуту': 'Flow in litres per minute',
      'Внутренний диаметр': 'Inner diameter', 'Проверьте данные': 'Check the values',
    },
    values: {
      'м/с': 'm/s', 'мм²': 'mm²', 'л/с': 'L/s', 'л/мин': 'L/min', 'мм': 'mm',
      'Расход должен быть больше нуля': 'The flow rate must be greater than zero',
      'Внутренний диаметр должен быть больше нуля': 'The inner diameter must be greater than zero',
    },
  },
  uk: {
    fields: { flow: 'Витрата, м³/год', diameter: 'Внутрішній діаметр, мм' },
    options: {},
    results: {
      'Скорость потока': 'Швидкість потоку', 'Площадь сечения': 'Площа перерізу',
      'Расход в литрах в секунду': 'Витрата в літрах за секунду',
      'Расход в литрах в минуту': 'Витрата в літрах за хвилину',
      'Внутренний диаметр': 'Внутрішній діаметр', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м/с': 'м/с', 'мм²': 'мм²', 'л/с': 'л/с', 'л/мин': 'л/хв', 'мм': 'мм',
      'Расход должен быть больше нуля': 'Витрата має бути більшою за нуль',
      'Внутренний диаметр должен быть больше нуля': 'Внутрішній діаметр має бути більшим за нуль',
    },
  },
};
