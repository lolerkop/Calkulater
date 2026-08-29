import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'base': 'Grundgröße',
      'ratio': 'Verhältnis der Skala',
      'stepsUp': 'Stufen über der Grundgröße',
      'stepsDown': 'Stufen unter der Grundgröße',
    },
    results: {
      'Наибольший размер': 'Größte Größe',
      'Наименьший размер': 'Kleinste Größe',
      'Ступеней': 'Stufen',
      'База': 'Grundgröße',
      'Ступени шкалы': 'Stufen der Skala',
      'Ступень': 'Stufe',
      'Размер': 'Größe',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Показаны первые 12 ступеней шкалы.': 'Gezeigt werden die ersten 12 Stufen der Skala.',
      'Базовый размер должен быть больше нуля': 'Die Grundgröße muss größer als null sein',
      'Отношение шкалы должно быть больше единицы': 'Das Verhältnis der Skala muss größer als eins sein',
      'Число ступеней не может быть отрицательным': 'Die Zahl der Stufen kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      base: 'Base size',
      ratio: 'Scale ratio',
      stepsUp: 'Steps up from the base',
      stepsDown: 'Steps down from the base',
    },
    results: {
      'Наибольший размер': 'Largest size',
      'Наименьший размер': 'Smallest size',
      'Ступеней': 'Steps',
      'База': 'Base',
      'Ступени шкалы': 'Scale steps',
      'Ступень': 'Step',
      'Размер': 'Size',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Показаны первые 12 ступеней шкалы.': 'The first 12 steps of the scale are shown.',
      'Базовый размер должен быть больше нуля': 'The base size must be greater than zero',
      'Отношение шкалы должно быть больше единицы': 'The scale ratio must be greater than one',
      'Число ступеней не может быть отрицательным': 'The number of steps cannot be negative',
    },
  },
  uk: {
    fields: {
      base: 'Базовий розмір',
      ratio: 'Відношення шкали',
      stepsUp: 'Ступенів угору від бази',
      stepsDown: 'Ступенів униз від бази',
    },
    results: {
      'Наибольший размер': 'Найбільший розмір',
      'Наименьший размер': 'Найменший розмір',
      'Ступеней': 'Ступенів',
      'База': 'База',
      'Ступени шкалы': 'Ступені шкали',
      'Ступень': 'Ступінь',
      'Размер': 'Розмір',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Показаны первые 12 ступеней шкалы.': 'Показано перші 12 ступенів шкали.',
      'Базовый размер должен быть больше нуля': 'Базовий розмір має бути більшим за нуль',
      'Отношение шкалы должно быть больше единицы': 'Відношення шкали має бути більшим за одиницю',
      'Число ступеней не может быть отрицательным': 'Кількість ступенів не може бути від’ємною',
    },
  },
};
