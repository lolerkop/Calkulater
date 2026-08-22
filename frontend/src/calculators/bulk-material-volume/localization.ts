import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Нужно материала': 'Material required', 'Чистый объём': 'Net volume', 'Масса': 'Mass',
  'Мешков по 25 кг': 'Bags of 25 kg', 'Площадь основания': 'Base area',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Нужно материала': 'Потрібно матеріалу', 'Чистый объём': "Чистий об'єм", 'Масса': 'Маса',
  'Мешков по 25 кг': 'Мішків по 25 кг', 'Площадь основания': 'Площа основи',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      length: 'Area length, m', width: 'Area width, m', depth: 'Layer thickness, cm',
      density: 'Bulk density, t/m³', waste: 'Compaction allowance, %',
    },
    options: {},
    results: RESULTS_EN,
    values: {
      'м³': 'm³', 'м²': 'm²', 'шт': 'pcs', 'т': 't',
      'Длина и ширина должны быть больше нуля': 'The length and width must be greater than zero',
      'Толщина слоя должна быть больше нуля': 'The layer thickness must be greater than zero',
      'Насыпная плотность должна быть больше нуля': 'The bulk density must be greater than zero',
      'Запас должен быть от 0 до 50 %': 'The allowance must be between 0 and 50%',
    },
  },
  uk: {
    fields: {
      length: 'Довжина майданчика, м', width: 'Ширина майданчика, м', depth: 'Товщина шару, см',
      density: 'Насипна густина, т/м³', waste: 'Запас на усадку, %',
    },
    options: {},
    results: RESULTS_UK,
    values: {
      'м³': 'м³', 'м²': 'м²', 'шт': 'шт', 'т': 'т',
      'Длина и ширина должны быть больше нуля': 'Довжина та ширина мають бути більшими за нуль',
      'Толщина слоя должна быть больше нуля': 'Товщина шару має бути більшою за нуль',
      'Насыпная плотность должна быть больше нуля': 'Насипна густина має бути більшою за нуль',
      'Запас должен быть от 0 до 50 %': 'Запас має бути від 0 до 50 %',
    },
  },
};
