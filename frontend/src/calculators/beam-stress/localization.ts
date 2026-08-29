import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'moment': 'Biegemoment, N·m',
      'section': 'Querschnitt',
      'b': 'Breite des Querschnitts, mm',
      'h': 'Höhe des Querschnitts, mm',
      'd': 'Durchmesser, mm',
    },
    options: {
      'rect': 'Rechteck',
      'circle': 'Kreis',
    },
    results: {
      'Напряжение изгиба': 'Biegespannung',
      'Момент сопротивления': 'Widerstandsmoment',
      'Изгибающий момент': 'Biegemoment',
      'Сечение': 'Querschnitt',
      'Определяющий размер сечения': 'Maßgebendes Querschnittsmaß',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'МПа': 'MPa',
      'Н·м': 'N·m',
      'мм³': 'mm³',
      'мм': 'mm',
      'прямоугольник': 'Rechteck',
      'круг': 'Kreis',
      'Изгибающий момент должен быть больше нуля': 'Das Biegemoment muss größer als null sein',
      'Диаметр должен быть больше нуля': 'Der Durchmesser muss größer als null sein',
      'Ширина сечения должна быть больше нуля': 'Die Breite des Querschnitts muss größer als null sein',
      'Высота сечения должна быть больше нуля': 'Die Höhe des Querschnitts muss größer als null sein',
    },
  },
  en: {
    fields: {
      moment: 'Bending moment, N·m', section: 'Cross-section', b: 'Section width, mm',
      h: 'Section height, mm', d: 'Diameter, mm',
    },
    options: { rect: 'rectangle', circle: 'circle' },
    results: {
      'Напряжение изгиба': 'Bending stress', 'Момент сопротивления': 'Section modulus',
      'Изгибающий момент': 'Bending moment', 'Сечение': 'Cross-section',
      'Определяющий размер сечения': 'Governing section size', 'Проверьте данные': 'Check the values',
    },
    values: {
      'МПа': 'MPa', 'Н·м': 'N·m', 'мм³': 'mm³', 'мм': 'mm',
      'прямоугольник': 'rectangle', 'круг': 'circle',
      'Изгибающий момент должен быть больше нуля': 'The bending moment must be greater than zero',
      'Диаметр должен быть больше нуля': 'The diameter must be greater than zero',
      'Ширина сечения должна быть больше нуля': 'The section width must be greater than zero',
      'Высота сечения должна быть больше нуля': 'The section height must be greater than zero',
    },
  },
  uk: {
    fields: {
      moment: 'Згинальний момент, Н·м', section: 'Переріз', b: 'Ширина перерізу, мм',
      h: 'Висота перерізу, мм', d: 'Діаметр, мм',
    },
    options: { rect: 'прямокутник', circle: 'коло' },
    results: {
      'Напряжение изгиба': 'Напруження згину', 'Момент сопротивления': 'Момент опору',
      'Изгибающий момент': 'Згинальний момент', 'Сечение': 'Переріз',
      'Определяющий размер сечения': 'Визначальний розмір перерізу', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'МПа': 'МПа', 'Н·м': 'Н·м', 'мм³': 'мм³', 'мм': 'мм',
      'прямоугольник': 'прямокутник', 'круг': 'коло',
      'Изгибающий момент должен быть больше нуля': 'Згинальний момент має бути більшим за нуль',
      'Диаметр должен быть больше нуля': 'Діаметр має бути більшим за нуль',
      'Ширина сечения должна быть больше нуля': 'Ширина перерізу має бути більшою за нуль',
      'Высота сечения должна быть больше нуля': 'Висота перерізу має бути більшою за нуль',
    },
  },
};
