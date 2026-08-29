import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'amount': 'Darlehenssumme, €',
      'rate': 'Jahreszins, %',
      'years': 'Laufzeit, Jahre',
      'extra': 'Sondertilgung je Monat, €',
    },
    results: {
      'Экономия на процентах': 'Ersparte Zinsen',
      'Платёж по графику': 'Rate nach Plan',
      'Платежей вместо графика': 'Tatsächlich geleistete Raten',
      'Платежей по графику': 'Raten nach Plan',
      'Всего выплат': 'Insgesamt gezahlt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Сумма кредита должна быть больше нуля': 'Die Darlehenssumme muss größer als null sein',
      'Ставка не может быть отрицательной': 'Der Zinssatz kann nicht negativ sein',
      'Срок должен быть больше нуля': 'Die Laufzeit muss größer als null sein',
      'Доплата не может быть отрицательной': 'Die Sondertilgung kann nicht negativ sein',
      'Платёж с доплатой не покрывает проценты — долг не уменьшается': 'Die Rate deckt die Zinsen nicht, die Schuld sinkt also nie',
    },
  },
  en: {
    fields: {
      amount: 'Loan amount, ₽',
      rate: 'Annual rate, %',
      years: 'Term, years',
      extra: 'Extra payment per month, ₽',
    },
    results: {
      'Экономия на процентах': 'Interest saved',
      'Платёж по графику': 'Scheduled payment',
      'Платежей вместо графика': 'Payments actually made',
      'Платежей по графику': 'Payments scheduled',
      'Всего выплат': 'Total paid',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Сумма кредита должна быть больше нуля': 'The loan amount must be greater than zero',
      'Ставка не может быть отрицательной': 'The rate cannot be negative',
      'Срок должен быть больше нуля': 'The term must be greater than zero',
      'Доплата не может быть отрицательной': 'The extra payment cannot be negative',
      'Платёж с доплатой не покрывает проценты — долг не уменьшается': 'The payment does not cover the interest, so the debt never falls',
    },
  },
  uk: {
    fields: {
      amount: 'Сума кредиту, ₽',
      rate: 'Річна ставка, %',
      years: 'Строк, років',
      extra: 'Доплата щомісяця, ₽',
    },
    results: {
      'Экономия на процентах': 'Економія на відсотках',
      'Платёж по графику': 'Платіж за графіком',
      'Платежей вместо графика': 'Платежів фактично',
      'Платежей по графику': 'Платежів за графіком',
      'Всего выплат': 'Усього виплат',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Сумма кредита должна быть больше нуля': 'Сума кредиту має бути більшою за нуль',
      'Ставка не может быть отрицательной': 'Ставка не може бути від’ємною',
      'Срок должен быть больше нуля': 'Строк має бути більшим за нуль',
      'Доплата не может быть отрицательной': 'Доплата не може бути від’ємною',
      'Платёж с доплатой не покрывает проценты — долг не уменьшается': 'Платіж не покриває відсотки, тож борг не зменшується',
    },
  },
};
