import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      length: 'Pour length, cm', width: 'Pour width, cm', thickness: 'Layer thickness, mm',
      density: 'Mix density, g/cm³', ratio: 'Parts of resin per part of hardener',
    },
    options: {},
    results: {
      'Всего смеси': 'Total mix', 'Смолы': 'Resin', 'Отвердителя': 'Hardener',
      'Объём заливки': 'Pour volume', 'Площадь заливки': 'Pour area', 'Проверьте данные': 'Check the values',
    },
    values: {
      'кг': 'kg', 'л': 'L', 'м²': 'm²',
      'Длина заливки должна быть больше нуля': 'The pour length must be greater than zero',
      'Ширина заливки должна быть больше нуля': 'The pour width must be greater than zero',
      'Толщина слоя должна быть больше нуля': 'The layer thickness must be greater than zero',
      'Плотность смеси должна быть больше нуля': 'The mix density must be greater than zero',
      'Пропорция набора должна быть больше нуля': 'The kit ratio must be greater than zero',
    },
  },
  uk: {
    fields: {
      length: 'Довжина заливки, см', width: 'Ширина заливки, см', thickness: 'Товщина шару, мм',
      density: 'Густина суміші, г/см³', ratio: 'Частин смоли на частину затверджувача',
    },
    options: {},
    results: {
      'Всего смеси': 'Усього суміші', 'Смолы': 'Смоли', 'Отвердителя': 'Затверджувача',
      'Объём заливки': 'Об’єм заливки', 'Площадь заливки': 'Площа заливки', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'кг': 'кг', 'л': 'л', 'м²': 'м²',
      'Длина заливки должна быть больше нуля': 'Довжина заливки має бути більшою за нуль',
      'Ширина заливки должна быть больше нуля': 'Ширина заливки має бути більшою за нуль',
      'Толщина слоя должна быть больше нуля': 'Товщина шару має бути більшою за нуль',
      'Плотность смеси должна быть больше нуля': 'Густина суміші має бути більшою за нуль',
      'Пропорция набора должна быть больше нуля': 'Пропорція набору має бути більшою за нуль',
    },
  },
};
