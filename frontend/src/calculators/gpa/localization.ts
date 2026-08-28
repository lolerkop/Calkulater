import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "grades": "Grades: one per line, weight after a space" },
    options: {},
    results: {
      "Средний балл": "Grade point average",
      "Сумма кредитов": "Total weight",
      "Сумма произведений": "Sum of products",
      "Предметов": "Subjects",
      "Простое среднее": "Unweighted mean",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Введите хотя бы одну оценку": "Enter at least one grade",
      "Оценка не может быть отрицательной": "A grade cannot be negative",
      "Вес предмета должен быть больше нуля": "The subject weight must be greater than zero",
    },
  },
  uk: {
    fields: { "grades": "Оцінки: по одній у рядку, через пробіл вага" },
    options: {},
    results: {
      "Средний балл": "Середній бал",
      "Сумма кредитов": "Сума кредитів",
      "Сумма произведений": "Сума добутків",
      "Предметов": "Предметів",
      "Простое среднее": "Просте середнє",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Введите хотя бы одну оценку": "Введіть хоча б одну оцінку",
      "Оценка не может быть отрицательной": "Оцінка не може бути від'ємною",
      "Вес предмета должен быть больше нуля": "Вага предмета має бути більшою за нуль",
    },
  },
  de: {
      fields: {
        'grades': 'Noten: eine je Zeile, Gewicht nach einem Leerzeichen',
      },
      options: {},
      results: {
        'Средний балл': 'Notendurchschnitt',
        'Сумма кредитов': 'Summe der Gewichte',
        'Сумма произведений': 'Summe der Produkte',
        'Предметов': 'Fächer',
        'Простое среднее': 'Ungewichtetes Mittel',
        'Проверьте данные': 'Prüfe die Werte',
      },
      values: {
        'Введите хотя бы одну оценку': 'Gib mindestens eine Note ein',
        'Оценка не может быть отрицательной': 'Eine Note darf nicht negativ sein',
        'Вес предмета должен быть больше нуля': 'Das Gewicht eines Fachs muss größer als null sein',
      },
  },
};
