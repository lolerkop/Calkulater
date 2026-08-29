import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'l': 'Länge, cm',
      'w': 'Breite, cm',
      'h': 'Höhe, cm',
      'limit': 'Grenze der Fluggesellschaft, cm',
    },
    results: {
      'Линейные габариты': 'Gesamtmaße',
      'Запас до предела': 'Reserve bis zur Grenze',
      'В дюймах': 'In Zoll',
      'Объём коробки': 'Rauminhalt',
      'Норма': 'Freigrenze',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'см': 'cm',
      'дюйма': 'in',
      'л': 'l',
      'проходит': 'innerhalb der Grenze',
      'превышена': 'über der Grenze',
      'Все три стороны должны быть больше нуля': 'Alle drei Seiten müssen größer als null sein',
      'Норма авиакомпании должна быть больше нуля': 'Die Grenze der Fluggesellschaft muss größer als null sein',
    },
  },
  en: {
    fields: { l: 'Length, cm', w: 'Width, cm', h: 'Height, cm', limit: 'Airline limit, cm' },
    options: {},
    results: {
      'Линейные габариты': 'Linear dimensions', 'Запас до предела': 'Margin to the limit',
      'В дюймах': 'In inches', 'Объём коробки': 'Box volume', 'Норма': 'Allowance',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'см': 'cm', 'дюйма': 'in', 'л': 'L',
      'проходит': 'within the limit', 'превышена': 'over the limit',
      'Все три стороны должны быть больше нуля': 'All three sides must be greater than zero',
      'Норма авиакомпании должна быть больше нуля': 'The airline limit must be greater than zero',
    },
  },
  uk: {
    fields: { l: 'Довжина, см', w: 'Ширина, см', h: 'Висота, см', limit: 'Норма авіакомпанії, см' },
    options: {},
    results: {
      'Линейные габариты': 'Лінійні габарити', 'Запас до предела': 'Запас до межі',
      'В дюймах': 'У дюймах', 'Объём коробки': 'Об’єм коробки', 'Норма': 'Норма',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'см': 'см', 'дюйма': 'дюйма', 'л': 'л',
      'проходит': 'проходить', 'превышена': 'перевищена',
      'Все три стороны должны быть больше нуля': 'Усі три сторони мають бути більшими за нуль',
      'Норма авиакомпании должна быть больше нуля': 'Норма авіакомпанії має бути більшою за нуль',
    },
  },
};
