import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'amount': 'Betrag, €',
      'fromPeriod': 'Zeitraum des Betrags',
      'toPeriod': 'Umrechnen in',
    },
    options: {
      'hour': 'je Stunde',
      'day': 'je Tag',
      'week': 'je Woche',
      'month': 'je Monat',
      'year': 'je Jahr',
    },
    results: {
      'Зарплата за выбранный период': 'Gehalt für den gewählten Zeitraum',
      'В час': 'Je Stunde',
      'В день': 'Je Tag',
      'В месяц': 'Je Monat',
      'В год': 'Je Jahr',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Сумма должна быть больше нуля': 'Der Betrag muss größer als null sein',
      'Выберите период из списка': 'Wähle einen Zeitraum aus der Liste',
    },
  },
  en: {
    fields: {
      amount: 'Amount, ₽',
      fromPeriod: 'Period of the amount',
      toPeriod: 'Convert to',
    },
    options: { hour: 'per hour', day: 'per day', week: 'per week', month: 'per month', year: 'per year' },
    results: {
      'Зарплата за выбранный период': 'Salary for the chosen period',
      'В час': 'Per hour',
      'В день': 'Per day',
      'В месяц': 'Per month',
      'В год': 'Per year',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Сумма должна быть больше нуля': 'The amount must be greater than zero',
      'Выберите период из списка': 'Choose a period from the list',
    },
  },
  uk: {
    fields: {
      amount: 'Сума, ₽',
      fromPeriod: 'Період суми',
      toPeriod: 'Перевести в',
    },
    options: { hour: 'на годину', day: 'на день', week: 'на тиждень', month: 'на місяць', year: 'на рік' },
    results: {
      'Зарплата за выбранный период': 'Зарплата за обраний період',
      'В час': 'На годину',
      'В день': 'На день',
      'В месяц': 'На місяць',
      'В год': 'На рік',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Сумма должна быть больше нуля': 'Сума має бути більшою за нуль',
      'Выберите период из списка': 'Оберіть період зі списку',
    },
  },
};
