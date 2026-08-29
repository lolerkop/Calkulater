import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'begin': 'Anfangswert',
      'end': 'Endwert',
      'years': 'Zahl der Jahre',
    },
    results: {
      'Среднегодовой рост': 'Jährliche Wachstumsrate',
      'Общий рост за срок': 'Gesamtwachstum über den Zeitraum',
      'Множитель': 'Faktor',
      'Начальная стоимость': 'Anfangswert',
      'Конечная стоимость': 'Endwert',
      'Срок': 'Jahre',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Начальная стоимость должна быть больше нуля': 'Der Anfangswert muss größer als null sein',
      'Конечная стоимость должна быть больше нуля': 'Der Endwert muss größer als null sein',
      'Срок должен быть больше нуля': 'Die Zahl der Jahre muss größer als null sein',
    },
  },
  en: {
    fields: { begin: 'Starting value', end: 'Ending value', years: 'Number of years' },
    results: {
      'Среднегодовой рост': 'Annual growth rate',
      'Общий рост за срок': 'Total growth over the period',
      'Множитель': 'Multiple',
      'Начальная стоимость': 'Starting value',
      'Конечная стоимость': 'Ending value',
      'Срок': 'Years',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Начальная стоимость должна быть больше нуля': 'The starting value must be greater than zero',
      'Конечная стоимость должна быть больше нуля': 'The ending value must be greater than zero',
      'Срок должен быть больше нуля': 'The number of years must be greater than zero',
    },
  },
  uk: {
    fields: { begin: 'Початкова вартість', end: 'Кінцева вартість', years: 'Кількість років' },
    results: {
      'Среднегодовой рост': 'Середньорічне зростання',
      'Общий рост за срок': 'Загальне зростання за строк',
      'Множитель': 'Множник',
      'Начальная стоимость': 'Початкова вартість',
      'Конечная стоимость': 'Кінцева вартість',
      'Срок': 'Строк',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Начальная стоимость должна быть больше нуля': 'Початкова вартість має бути більшою за нуль',
      'Конечная стоимость должна быть больше нуля': 'Кінцева вартість має бути більшою за нуль',
      'Срок должен быть больше нуля': 'Строк має бути більшим за нуль',
    },
  },
};
