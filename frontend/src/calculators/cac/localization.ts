import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Стоимость привлечения': 'Customer acquisition cost', 'Расходы за период': 'Spend for the period',
  'Привлечено клиентов': 'Customers acquired', 'LTV к CAC': 'LTV to CAC',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Стоимость привлечения': 'Вартість залучення', 'Расходы за период': 'Витрати за період',
  'Привлечено клиентов': 'Залучено клієнтів', 'LTV к CAC': 'LTV до CAC',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { spend: 'Marketing and sales spend', customers: 'Customers acquired', ltv: 'Average revenue per customer' },
    results: RESULTS_EN,
    values: {
      'Число клиентов должно быть целым': 'The number of customers must be a whole number',
      'Клиентов должно быть больше нуля': 'There must be at least one customer',
      'Расходы не могут быть отрицательными': 'Spend cannot be negative',
    },
  },
  uk: {
    fields: { spend: 'Витрати на маркетинг і продажі', customers: 'Залучено клієнтів', ltv: 'Середній дохід із клієнта' },
    results: RESULTS_UK,
    values: {
      'Число клиентов должно быть целым': 'Кількість клієнтів має бути цілою',
      'Клиентов должно быть больше нуля': 'Клієнтів має бути більше нуля',
      'Расходы не могут быть отрицательными': 'Витрати не можуть бути від’ємними',
    },
  },
  de: {
      fields: {
        'spend': 'Ausgaben für Marketing und Vertrieb',
        'customers': 'Gewonnene Kunden',
        'ltv': 'Durchschnittlicher Umsatz je Kunde',
      },
      options: {},
      results: {
        'Стоимость привлечения': 'Kundenakquisekosten',
        'Расходы за период': 'Ausgaben der Periode',
        'Привлечено клиентов': 'Gewonnene Kunden',
        'LTV к CAC': 'LTV zu CAC',
        'Проверьте данные': 'Prüfe die Werte',
      },
      values: {
        'Число клиентов должно быть целым': 'Die Kundenzahl muss eine ganze Zahl sein',
        'Клиентов должно быть больше нуля': 'Es muss mindestens ein Kunde sein',
        'Расходы не могут быть отрицательными': 'Die Ausgaben dürfen nicht negativ sein',
      },
  },
};
