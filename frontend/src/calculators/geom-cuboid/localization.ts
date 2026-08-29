import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Объём': 'Volume',
  'Площадь поверхности': 'Surface area',
  'Диагональ': 'Diagonal',
  'Сумма длин рёбер': 'Total edge length',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Объём': 'Об’єм',
  'Площадь поверхности': 'Площа поверхні',
  'Диагональ': 'Діагональ',
  'Сумма длин рёбер': 'Сума довжин ребер',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'unit': 'Längeneinheit',
      'a': 'Kante a',
      'b': 'Kante b',
      'c': 'Kante c',
    },
    options: {
      'mm': 'Millimeter',
      'cm': 'Zentimeter',
      'm': 'Meter',
    },
    results: {
      'Объём': 'Volumen',
      'Площадь поверхности': 'Oberfläche',
      'Диагональ': 'Diagonale',
      'Сумма длин рёбер': 'Kantensumme',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мм': 'mm',
      'см': 'cm',
      'м': 'm',
      'мм²': 'mm²',
      'см²': 'cm²',
      'м²': 'm²',
      'мм³': 'mm³',
      'см³': 'cm³',
      'м³': 'm³',
      'Все три ребра должны быть больше нуля': 'Alle drei Kanten müssen größer als null sein',
      'Значение слишком велико для расчёта': 'Der Wert ist zu groß für die Rechnung',
    },
  },
  en: {
    fields: { unit: 'Length unit', a: 'Edge a', b: 'Edge b', c: 'Edge c', },
    options: { mm: 'millimetres', cm: 'centimetres', m: 'metres', },
    results: RESULTS_EN,
    values: {
      'мм': 'mm',
      'см': 'cm',
      'м': 'm',
      'мм²': 'mm²',
      'см²': 'cm²',
      'м²': 'm²',
      'мм³': 'mm³',
      'см³': 'cm³',
      'м³': 'm³',
      'Все три ребра должны быть больше нуля': 'All three edges must be greater than zero',
      'Значение слишком велико для расчёта': 'The value is too large to calculate',
    },
  },
  uk: {
    fields: { unit: 'Одиниця довжини', a: 'Ребро a', b: 'Ребро b', c: 'Ребро c', },
    options: { mm: 'міліметри', cm: 'сантиметри', m: 'метри', },
    results: RESULTS_UK,
    values: {
      'мм': 'мм',
      'см': 'см',
      'м': 'м',
      'мм²': 'мм²',
      'см²': 'см²',
      'м²': 'м²',
      'мм³': 'мм³',
      'см³': 'см³',
      'м³': 'м³',
      'Все три ребра должны быть больше нуля': 'Усі три ребра мають бути більшими за нуль',
      'Значение слишком велико для расчёта': 'Значення завелике для розрахунку',
    },
  },
};
