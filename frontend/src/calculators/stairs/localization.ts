import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Подступенков': 'Risers', 'Высота подступенка': 'Riser height', 'Проступей': 'Treads',
  'Длина марша': 'Total run', 'Угол наклона': 'Pitch angle',
  'Формула удобства 2h + b': 'Comfort rule 2h + b', 'Оценка шага': 'Stride verdict',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Подступенков': 'Підсхідців', 'Высота подступенка': 'Висота підсхідця', 'Проступей': 'Проступів',
  'Длина марша': 'Довжина маршу', 'Угол наклона': 'Кут нахилу',
  'Формула удобства 2h + b': 'Формула зручності 2h + b', 'Оценка шага': 'Оцінка кроку',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'rise_total': 'Gesamte Geschosshöhe, m',
      'tread': 'Auftrittstiefe, m',
      'max_riser': 'Höchste Steigungshöhe, m',
    },
    results: {
      'Подступенков': 'Steigungen',
      'Высота подступенка': 'Steigungshöhe',
      'Проступей': 'Auftritte',
      'Длина марша': 'Lauflänge',
      'Угол наклона': 'Neigungswinkel',
      'Формула удобства 2h + b': 'Schrittmaßregel 2h + b',
      'Оценка шага': 'Beurteilung des Schrittmaßes',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'шт': 'Stk',
      'м': 'm',
      'в норме': 'im Bereich',
      'вне нормы 0,60–0,65 м': 'außerhalb des Bereichs 0,60–0,65 m',
      'Общий подъём должен быть больше нуля': 'Die Geschosshöhe muss größer als null sein',
      'Проступь должна быть больше нуля': 'Die Auftrittstiefe muss größer als null sein',
      'Предельная высота ступени должна быть больше нуля': 'Die höchste Steigungshöhe muss größer als null sein',
    },
  },
  en: {
    fields: {
      rise_total: 'Total rise, m', tread: 'Tread depth, m', max_riser: 'Maximum riser height, m',
    },
    options: {},
    results: RESULTS_EN,
    values: {
      'шт': 'pcs', 'м': 'm',
      'в норме': 'within range', 'вне нормы 0,60–0,65 м': 'outside the 0.60–0.65 m range',
      'Общий подъём должен быть больше нуля': 'The total rise must be greater than zero',
      'Проступь должна быть больше нуля': 'The tread depth must be greater than zero',
      'Предельная высота ступени должна быть больше нуля': 'The maximum riser height must be greater than zero',
    },
  },
  uk: {
    fields: {
      rise_total: 'Загальний підйом, м', tread: 'Проступ (глибина сходинки), м',
      max_riser: 'Гранична висота сходинки, м',
    },
    options: {},
    results: RESULTS_UK,
    values: {
      'шт': 'шт', 'м': 'м',
      'в норме': 'у нормі', 'вне нормы 0,60–0,65 м': 'поза нормою 0,60–0,65 м',
      'Общий подъём должен быть больше нуля': 'Загальний підйом має бути більшим за нуль',
      'Проступь должна быть больше нуля': 'Проступ має бути більшим за нуль',
      'Предельная высота ступени должна быть больше нуля': 'Гранична висота сходинки має бути більшою за нуль',
    },
  },
};
