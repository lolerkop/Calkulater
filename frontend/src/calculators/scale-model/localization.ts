import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Размер модели': 'Model size', 'Размер натуры': 'Real size', 'Масштаб': 'Scale',
  'Отношение натуры к модели': 'Original to model length ratio',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Размер модели': 'Розмір моделі', 'Размер натуры': 'Розмір натури', 'Масштаб': 'Масштаб',
  'Отношение натуры к модели': 'Відношення натури до моделі',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'real': 'Maß am Original, mm',
      'model': 'Maß am Modell, mm',
      'scale': 'Nenner des Maßstabs, 1:N',
    },
    options: {
      'toModel': 'das Modellmaß',
      'toReal': 'das Maß am Original',
      'findScale': 'der Maßstab',
    },
    results: {
      'Размер модели': 'Maß am Modell',
      'Размер натуры': 'Maß am Original',
      'Масштаб': 'Maßstab',
      'Отношение натуры к модели': 'Verhältnis Original zu Modell',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      "Выберите режим расчёта": "Wähle einen Berechnungsmodus",
      "Результат вне числового диапазона": "Das Ergebnis liegt außerhalb des Zahlenbereichs",

      'мм': 'mm',
      'Знаменатель масштаба должен быть больше нуля': 'Der Nenner des Maßstabs muss größer als null sein',
      'Размер модели должен быть больше нуля': 'Das Maß am Modell muss größer als null sein',
      'Размер натуры должен быть больше нуля': 'Das Maß am Original muss größer als null sein',
    },
  },
  en: {
    fields: {
      mode: 'What to find', real: 'Real size, mm', model: 'Model size, mm',
      scale: 'Scale denominator, 1:N',
    },
    options: { toModel: 'model size', toReal: 'real size', findScale: 'scale' },
    results: RESULTS_EN,
    values: {
      "Выберите режим расчёта": "Choose a calculation mode",
      "Результат вне числового диапазона": "The result is outside the numeric range",

      'мм': 'mm',
      'Знаменатель масштаба должен быть больше нуля': 'The scale denominator must be greater than zero',
      'Размер модели должен быть больше нуля': 'The model size must be greater than zero',
      'Размер натуры должен быть больше нуля': 'The real size must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', real: 'Розмір натури, мм', model: 'Розмір моделі, мм',
      scale: 'Знаменник масштабу, 1:N',
    },
    options: { toModel: 'розмір моделі', toReal: 'розмір натури', findScale: 'масштаб' },
    results: RESULTS_UK,
    values: {
      "Выберите режим расчёта": "Виберіть режим розрахунку",
      "Результат вне числового диапазона": "Результат поза числовим діапазоном",

      'мм': 'мм',
      'Знаменатель масштаба должен быть больше нуля': 'Знаменник масштабу має бути більшим за нуль',
      'Размер модели должен быть больше нуля': 'Розмір моделі має бути більшим за нуль',
      'Размер натуры должен быть больше нуля': 'Розмір натури має бути більшим за нуль',
    },
  },
  es: {
    fields: {
      "mode": "Qué hallar",
      "real": "Medida real, mm",
      "model": "Medida de la maqueta, mm",
      "scale": "Denominador de la escala, 1:N",
    },
    options: {
      "toModel": "la medida de la maqueta",
      "toReal": "la medida real",
      "findScale": "la escala",
    },
    results: {
      "Размер модели": "Medida de la maqueta",
      "Размер натуры": "Medida real",
      "Масштаб": "Escala",
      "Отношение натуры к модели": "Relación entre original y maqueta",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Выберите режим расчёта": "Elige un modo de cálculo",
      "Результат вне числового диапазона": "El resultado está fuera del rango numérico",

      "мм": "mm",
      "Знаменатель масштаба должен быть больше нуля": "El denominador de la escala debe ser mayor que cero",
      "Размер модели должен быть больше нуля": "La medida de la maqueta debe ser mayor que cero",
      "Размер натуры должен быть больше нуля": "La medida real debe ser mayor que cero",
    },
  },
};
