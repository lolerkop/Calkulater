import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Стоимость рабочего дня': 'Cost of a working day', 'Стоимость часа': 'Cost of an hour',
  'Рабочих часов в месяце': 'Working hours per month', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Стоимость рабочего дня': 'Вартість робочого дня', 'Стоимость часа': 'Вартість години',
  'Рабочих часов в месяце': 'Робочих годин на місяць', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'salary': 'Monatsgehalt',
      'days': 'Arbeitstage im Monat',
      'hours': 'Stunden je Arbeitstag',
    },
    results: {
      'Стоимость рабочего дня': 'Wert eines Arbeitstages',
      'Стоимость часа': 'Wert einer Stunde',
      'Рабочих часов в месяце': 'Arbeitsstunden im Monat',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Оклад должен быть больше нуля': 'Das Gehalt muss größer als null sein',
      'Число рабочих дней должно быть больше нуля': 'Die Zahl der Arbeitstage muss größer als null sein',
      'Число часов в дне должно быть больше нуля': 'Die Zahl der Stunden je Tag muss größer als null sein',
    },
  },
  en: {
    fields: { salary: 'Monthly salary', days: 'Working days per month', hours: 'Hours per working day' },
    options: {},
    results: RESULTS_EN,
    values: {
      'Оклад должен быть больше нуля': 'The salary must be greater than zero',
      'Число рабочих дней должно быть больше нуля': 'The number of working days must be greater than zero',
      'Число часов в дне должно быть больше нуля': 'The number of hours per day must be greater than zero',
    },
  },
  uk: {
    fields: { salary: 'Місячний оклад', days: 'Робочих днів на місяць', hours: 'Годин у робочому дні' },
    options: {},
    results: RESULTS_UK,
    values: {
      'Оклад должен быть больше нуля': 'Оклад має бути більшим за нуль',
      'Число рабочих дней должно быть больше нуля': 'Кількість робочих днів має бути більшою за нуль',
      'Число часов в дне должно быть больше нуля': 'Кількість годин у дні має бути більшою за нуль',
    },
  },
};
