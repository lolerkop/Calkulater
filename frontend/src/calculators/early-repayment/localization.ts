import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
