import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'gross': 'Bruttogehalt, €',
      'taxPct': 'Arbeitgeberbeiträge, %',
      'overhead': 'Gemeinkosten je Zeitraum, €',
    },
    results: {
      'Полная стоимость сотрудника': 'Vollkosten des Mitarbeiters',
      'Взносы': 'Beiträge',
      'Оклад': 'Bruttogehalt',
      'Накладные': 'Gemeinkosten',
      'Множитель к окладу': 'Faktor zum Gehalt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Оклад должен быть больше нуля': 'Das Gehalt muss größer als null sein',
      'Ставка взносов не может быть отрицательной': 'Der Beitragssatz kann nicht negativ sein',
      'Накладные расходы не могут быть отрицательными': 'Die Gemeinkosten können nicht negativ sein',
    },
  },
  en: {
    fields: {
      gross: 'Gross salary, ₽',
      taxPct: 'Employer contributions, %',
      overhead: 'Overhead per period, ₽',
    },
    results: {
      'Полная стоимость сотрудника': 'Total cost of the employee',
      'Взносы': 'Contributions',
      'Оклад': 'Gross salary',
      'Накладные': 'Overhead',
      'Множитель к окладу': 'Multiple of salary',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Оклад должен быть больше нуля': 'The salary must be greater than zero',
      'Ставка взносов не может быть отрицательной': 'The contribution rate cannot be negative',
      'Накладные расходы не могут быть отрицательными': 'Overhead cannot be negative',
    },
  },
  uk: {
    fields: {
      gross: 'Оклад, ₽',
      taxPct: 'Внески роботодавця, %',
      overhead: 'Накладні витрати за період, ₽',
    },
    results: {
      'Полная стоимость сотрудника': 'Повна вартість співробітника',
      'Взносы': 'Внески',
      'Оклад': 'Оклад',
      'Накладные': 'Накладні',
      'Множитель к окладу': 'Множник до окладу',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Оклад должен быть больше нуля': 'Оклад має бути більшим за нуль',
      'Ставка взносов не может быть отрицательной': 'Ставка внесків не може бути від’ємною',
      'Накладные расходы не могут быть отрицательными': 'Накладні витрати не можуть бути від’ємними',
    },
  },
};
