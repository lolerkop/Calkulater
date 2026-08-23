import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { area: 'Roof area in plan, m²', depth: 'Rainfall depth, mm', coeff: 'Runoff coefficient' },
    options: {},
    results: {
      'Соберётся воды': 'Water collected', 'В кубометрах': 'In cubic metres',
      'Бочек по 200 литров': 'Barrels of 200 litres', 'Собрано с квадратного метра': 'Collected per square metre',
      'Потеряно на стоке и испарении': 'Lost to runoff and evaporation',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'л': 'l', 'м³': 'm³', 'шт': 'pcs',
      'Площадь должна быть больше нуля': 'The area must be greater than zero',
      'Слой осадков должен быть больше нуля': 'The rainfall depth must be greater than zero',
      'Коэффициент стока задаётся от 0 до 1': 'The runoff coefficient runs from 0 to 1',
    },
  },
  uk: {
    fields: { area: 'Площа даху в плані, м²', depth: 'Шар опадів, мм', coeff: 'Коефіцієнт стоку' },
    options: {},
    results: {
      'Соберётся воды': 'Збереться води', 'В кубометрах': 'У кубометрах',
      'Бочек по 200 литров': 'Бочок по 200 літрів', 'Собрано с квадратного метра': 'Зібрано з квадратного метра',
      'Потеряно на стоке и испарении': 'Втрачено на стоці та випаровуванні',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'л': 'л', 'м³': 'м³', 'шт': 'шт',
      'Площадь должна быть больше нуля': 'Площа має бути більшою за нуль',
      'Слой осадков должен быть больше нуля': 'Шар опадів має бути більшим за нуль',
      'Коэффициент стока задаётся от 0 до 1': 'Коефіцієнт стоку задається від 0 до 1',
    },
  },
};
