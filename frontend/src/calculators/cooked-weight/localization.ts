import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was du kennst',
      'raw': 'Trockengewicht, g',
      'cooked': 'Kochgewicht, g',
      'factor': 'Quellfaktor',
      'kcalPer100Raw': 'kcal je 100 g trocken',
    },
    options: {
      'rawToCooked': 'Trockengewicht — Kochgewicht suchen',
      'cookedToRaw': 'Kochgewicht — Trockengewicht suchen',
    },
    results: {
      'Готовый вес': 'Kochgewicht',
      'Сухой вес': 'Trockengewicht',
      'Коэффициент разварки': 'Quellfaktor',
      'Калорий всего': 'Kalorien insgesamt',
      'Ккал на 100 г готового': 'kcal je 100 g gekocht',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'г': 'g',
      'ккал': 'kcal',
      'Коэффициент должен быть больше нуля': 'Der Faktor muss größer als null sein',
      'Калорийность не может быть отрицательной': 'Der Kaloriengehalt kann nicht negativ sein',
      'Сухой вес должен быть больше нуля': 'Das Trockengewicht muss größer als null sein',
      'Готовый вес должен быть больше нуля': 'Das Kochgewicht muss größer als null sein',
    },
  },
  en: {
    fields: {
      "mode": "What you know",
      "raw": "Dry weight, g",
      "cooked": "Cooked weight, g",
      "factor": "Expansion factor",
      "kcalPer100Raw": "Kcal per 100 g dry",
    },
    options: {
      "rawToCooked": "dry weight — find cooked",
      "cookedToRaw": "cooked weight — find dry",
    },
    results: {
      "Готовый вес": "Cooked weight",
      "Сухой вес": "Dry weight",
      "Коэффициент разварки": "Expansion factor",
      "Калорий всего": "Calories in total",
      "Ккал на 100 г готового": "Kcal per 100 g cooked",
      "Проверьте данные": "Check the values",
    },
    values: {
      "г": "g",
      "ккал": "kcal",
      "Коэффициент должен быть больше нуля": "The factor must be greater than zero",
      "Калорийность не может быть отрицательной": "Calories cannot be negative",
      "Сухой вес должен быть больше нуля": "The dry weight must be greater than zero",
      "Готовый вес должен быть больше нуля": "The cooked weight must be greater than zero",
    },
  },
  uk: {
    fields: {
      "mode": "Що відомо",
      "raw": "Суха вага, г",
      "cooked": "Готова вага, г",
      "factor": "Коефіцієнт розварювання",
      "kcalPer100Raw": "Ккал на 100 г сухого",
    },
    options: {
      "rawToCooked": "суха вага — знайти готову",
      "cookedToRaw": "готова вага — знайти суху",
    },
    results: {
      "Готовый вес": "Готова вага",
      "Сухой вес": "Суха вага",
      "Коэффициент разварки": "Коефіцієнт розварювання",
      "Калорий всего": "Калорій усього",
      "Ккал на 100 г готового": "Ккал на 100 г готової страви",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "г": "г",
      "ккал": "ккал",
      "Коэффициент должен быть больше нуля": "Коефіцієнт має бути більшим за нуль",
      "Калорийность не может быть отрицательной": "Калорійність не може бути від'ємною",
      "Сухой вес должен быть больше нуля": "Суха вага має бути більшою за нуль",
      "Готовый вес должен быть больше нуля": "Готова вага має бути більшою за нуль",
    },
  },
  es: {
    fields: {
      "mode": "Qué conoces",
      "raw": "Peso en seco, g",
      "cooked": "Peso cocinado, g",
      "factor": "Factor de absorción",
      "kcalPer100Raw": "Kcal por 100 g en seco",
    },
    options: {
      "rawToCooked": "peso en seco — hallar el cocinado",
      "cookedToRaw": "peso cocinado — hallar el seco",
    },
    results: {
      "Готовый вес": "Peso cocinado",
      "Сухой вес": "Peso en seco",
      "Коэффициент разварки": "Factor de absorción",
      "Калорий всего": "Calorías en total",
      "Ккал на 100 г готового": "Kcal por 100 g cocinado",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "г": "g",
      "ккал": "kcal",
      "Коэффициент должен быть больше нуля": "El factor debe ser mayor que cero",
      "Калорийность не может быть отрицательной": "Las calorías no pueden ser negativas",
      "Сухой вес должен быть больше нуля": "El peso en seco debe ser mayor que cero",
      "Готовый вес должен быть больше нуля": "El peso cocinado debe ser mayor que cero",
    },
  },
};
