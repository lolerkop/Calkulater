import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Тепловой поток': 'Heat flow', 'Плотность потока': 'Heat flux density',
  'Сопротивление слоя': 'Thermal resistance', 'Коэффициент теплопередачи': 'U-value',
  'За сутки': 'Per day', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Тепловой поток': 'Тепловий потік', 'Плотность потока': 'Густина потоку',
  'Сопротивление слоя': 'Опір шару', 'Коэффициент теплопередачи': 'Коефіцієнт тепловіддачі',
  'За сутки': 'За добу', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'area': 'Fläche, m²',
      'thickness': 'Schichtdicke, m',
      'k': 'Wärmeleitfähigkeit λ, W/(m·K)',
      'dt': 'Temperaturunterschied, K',
    },
    results: {
      'Тепловой поток': 'Wärmestrom',
      'Плотность потока': 'Wärmestromdichte',
      'Сопротивление слоя': 'Wärmedurchlasswiderstand',
      'Коэффициент теплопередачи': 'U-Wert',
      'За сутки': 'Am Tag',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Вт/(м²·К)': 'W/(m²·K)',
      'м²·К/Вт': 'm²·K/W',
      'Вт/м²': 'W/m²',
      'кВт·ч': 'kWh',
      'Вт': 'W',
      'Площадь должна быть больше нуля': 'Die Fläche muss größer als null sein',
      'Толщина слоя должна быть больше нуля': 'Die Schichtdicke muss größer als null sein',
      'Теплопроводность должна быть больше нуля': 'Die Wärmeleitfähigkeit muss größer als null sein',
    },
  },
  en: {
    fields: {
      area: 'Area, m²', thickness: 'Layer thickness, m',
      k: 'Thermal conductivity λ, W/(m·K)', dt: 'Temperature difference, K',
    },
    options: {},
    results: RESULTS_EN,
    values: {
      'Вт/(м²·К)': 'W/(m²·K)', 'м²·К/Вт': 'm²·K/W', 'Вт/м²': 'W/m²', 'кВт·ч': 'kWh', 'Вт': 'W',
      'Площадь должна быть больше нуля': 'The area must be greater than zero',
      'Толщина слоя должна быть больше нуля': 'The layer thickness must be greater than zero',
      'Теплопроводность должна быть больше нуля': 'The thermal conductivity must be greater than zero',
    },
  },
  uk: {
    fields: {
      area: 'Площа, м²', thickness: 'Товщина шару, м',
      k: 'Теплопровідність λ, Вт/(м·К)', dt: 'Перепад температур, К',
    },
    options: {},
    results: RESULTS_UK,
    values: {
      'Вт/(м²·К)': 'Вт/(м²·К)', 'м²·К/Вт': 'м²·К/Вт', 'Вт/м²': 'Вт/м²', 'кВт·ч': 'кВт·год', 'Вт': 'Вт',
      'Площадь должна быть больше нуля': 'Площа має бути більшою за нуль',
      'Толщина слоя должна быть больше нуля': 'Товщина шару має бути більшою за нуль',
      'Теплопроводность должна быть больше нуля': 'Теплопровідність має бути більшою за нуль',
    },
  },
};
