import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = { 'Результат': 'Result', 'Исходное значение': 'Input value', 'Соотношение': 'Relationship', 'Проверьте данные': 'Check the values' };
const RESULTS_UK = { 'Результат': 'Результат', 'Исходное значение': 'Вихідне значення', 'Соотношение': 'Співвідношення', 'Проверьте данные': 'Перевірте дані' };
const ERRORS_EN = {
  'Выберите единицы из списка': 'Choose units from the list',
  'Введите конечное число': 'Enter a finite number',
  'Результат вне допустимого диапазона': 'The result is outside the supported range',
};
const ERRORS_UK = {
  'Выберите единицы из списка': 'Оберіть одиниці зі списку',
  'Введите конечное число': 'Введіть скінченне число',
  'Результат вне допустимого диапазона': 'Результат поза допустимим діапазоном',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'value': 'Volumen',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'ml': 'Milliliter (ml)',
      'cm3': 'Kubikzentimeter (cm³)',
      'l': 'Liter (l)',
      'm3': 'Kubikmeter (m³)',
      'ft3': 'Kubikfuß (ft³)',
      'galUS': 'US-Gallone (gal)',
      'galUK': 'Britische Gallone (gal)',
      'qtUS': 'US-Quart (qt)',
      'ptUS': 'US-Pint (pt)',
    },
    results: {
      'Результат': 'Ergebnis',
      'Исходное значение': 'Ausgangswert',
      'Соотношение': 'Verhältnis',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Выберите единицы из списка': 'Wähle Einheiten aus der Liste',
      'Введите конечное число': 'Trage eine endliche Zahl ein',
      'Результат вне допустимого диапазона': 'Das Ergebnis liegt außerhalb des zulässigen Bereichs',
      'мл': 'ml',
      'см³': 'cm³',
      'м³': 'm³',
      'фут³': 'ft³',
      'гал. США': 'US gal',
      'гал. брит.': 'imp gal',
      'кварта США': 'US qt',
      'пинта США': 'US pt',
    },
  },
  en: {
    fields: { value: 'Volume', from: 'From unit', to: 'To unit' },
    options: { ml: 'Millilitre (ml)', cm3: 'Cubic centimetre (cm³)', l: 'Litre (l)', m3: 'Cubic metre (m³)', ft3: 'Cubic foot (ft³)', galUS: 'US gallon (gal)', galUK: 'Imperial gallon (gal)', qtUS: 'US quart (qt)', ptUS: 'US pint (pt)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'мл': 'mL', 'см³': 'cm³', 'м³': 'm³', 'фут³': 'ft³', 'гал. США': 'US gal', 'гал. брит.': 'imp gal', 'кварта США': 'US qt', 'пинта США': 'US pt' },
  },
  uk: {
    fields: { value: 'Обʼєм', from: 'З одиниці', to: 'В одиницю' },
    options: { ml: 'Мілілітр (мл)', cm3: 'Кубічний сантиметр (см³)', l: 'Літр (л)', m3: 'Кубічний метр (м³)', ft3: 'Кубічний фут (ft³)', galUS: 'Галон США (gal)', galUK: 'Галон британський (gal)', qtUS: 'Кварта США (qt)', ptUS: 'Пінта США (pt)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'мл': 'мл', 'см³': 'см³', 'л': 'л', 'м³': 'м³', 'фут³': 'фут³', 'гал. США': 'гал. США', 'гал. брит.': 'гал. брит.', 'кварта США': 'кварта США', 'пинта США': 'пінта США' },
  },
  es: {
    fields: {
      "from": "Unidad de origen",
      "to": "Unidad de destino",
      "value": "Volumen",
    },
    options: {
      "ml": "Mililitro (ml)",
      "l": "Litro (l)",
      "cm3": "Centímetro cúbico (cm³)",
      "m3": "Metro cúbico (m³)",
      "ft3": "Pie cúbico (ft³)",
      "galUS": "Galón estadounidense (gal)",
      "galUK": "Galón imperial (gal)",
      "qtUS": "Cuarto estadounidense (qt)",
      "ptUS": "Pinta estadounidense (pt)",
    },
    results: {
      "Результат": "Resultado",
      "Исходное значение": "Valor introducido",
      "Соотношение": "Relación",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Выберите единицы из списка": "Elige las unidades de la lista",
      "Введите конечное число": "Introduce un número finito",
      "Результат вне допустимого диапазона": "El resultado queda fuera del intervalo admitido",
      "мл": "ml",
      "см³": "cm³",
      "м³": "m³",
      "фут³": "ft³",
      "гал. США": "gal EE. UU.",
      "гал. брит.": "gal imp.",
      "кварта США": "qt EE. UU.",
      "пинта США": "pt EE. UU.",
    },
  },
};
