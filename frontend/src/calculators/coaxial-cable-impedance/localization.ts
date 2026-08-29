import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'dIn': 'Durchmesser des Innenleiters, mm',
      'dOut': 'Innendurchmesser des Schirms, mm',
      'eps': 'Relative Permittivität des Dielektrikums',
    },
    results: {
      'Волновое сопротивление': 'Wellenwiderstand',
      'Ёмкость на метр': 'Kapazität je Meter',
      'Коэффициент укорочения': 'Verkürzungsfaktor',
      'Задержка на метр': 'Laufzeit je Meter',
      'Отношение диаметров': 'Verhältnis der Durchmesser',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Ом': 'Ω',
      'пФ/м': 'pF/m',
      'нс/м': 'ns/m',
      'Диаметр жилы должен быть больше нуля': 'Der Durchmesser des Innenleiters muss größer als null sein',
      'Внешний диаметр должен быть больше нуля': 'Der Durchmesser des Schirms muss größer als null sein',
      'Диэлектрическая проницаемость не может быть меньше единицы': 'Die relative Permittivität kann nicht unter eins liegen',
      'Внешний диаметр должен быть больше внутреннего': 'Der Durchmesser des Schirms muss größer sein als der des Innenleiters',
    },
  },
  en: {
    fields: {
      dIn: 'Centre conductor diameter, mm', dOut: 'Inner diameter of the shield, mm',
      eps: 'Relative permittivity of the dielectric',
    },
    options: {},
    results: {
      'Волновое сопротивление': 'Characteristic impedance', 'Ёмкость на метр': 'Capacitance per metre',
      'Коэффициент укорочения': 'Velocity factor', 'Задержка на метр': 'Delay per metre',
      'Отношение диаметров': 'Diameter ratio', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Ом': 'Ω', 'пФ/м': 'pF/m', 'нс/м': 'ns/m',
      'Диаметр жилы должен быть больше нуля': 'The conductor diameter must be greater than zero',
      'Внешний диаметр должен быть больше нуля': 'The shield diameter must be greater than zero',
      'Диэлектрическая проницаемость не может быть меньше единицы': 'The relative permittivity cannot be below one',
      'Внешний диаметр должен быть больше внутреннего': 'The shield diameter must exceed the conductor diameter',
    },
  },
  uk: {
    fields: {
      dIn: 'Діаметр центральної жили, мм', dOut: 'Внутрішній діаметр обплетення, мм',
      eps: 'Діелектрична проникність ізоляції',
    },
    options: {},
    results: {
      'Волновое сопротивление': 'Хвильовий опір', 'Ёмкость на метр': 'Ємність на метр',
      'Коэффициент укорочения': 'Коефіцієнт укорочення', 'Задержка на метр': 'Затримка на метр',
      'Отношение диаметров': 'Відношення діаметрів', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Ом': 'Ом', 'пФ/м': 'пФ/м', 'нс/м': 'нс/м',
      'Диаметр жилы должен быть больше нуля': 'Діаметр жили має бути більшим за нуль',
      'Внешний диаметр должен быть больше нуля': 'Зовнішній діаметр має бути більшим за нуль',
      'Диэлектрическая проницаемость не может быть меньше единицы': 'Діелектрична проникність не може бути меншою за одиницю',
      'Внешний диаметр должен быть больше внутреннего': 'Зовнішній діаметр має бути більшим за внутрішній',
    },
  },
};
