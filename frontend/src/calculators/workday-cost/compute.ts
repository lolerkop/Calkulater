import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Стоимость рабочего дня и часа по окладу.
//
// Число рабочих дней — обычное поле со значением по умолчанию, а не календарная
// или юридическая истина: в разных месяцах и графиках оно разное, поэтому его
// видно и его можно изменить. Никакой производственный календарь здесь не зашит.

const money = (value: number): string => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const salary = toNumber(inputs.salary);
  const days = toNumber(inputs.days);
  const hours = toNumber(inputs.hours);
  const fail = (message: string) => ({
    primary: { label: 'Стоимость рабочего дня', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(salary > 0)) return fail('Оклад должен быть больше нуля');
  if (!(days > 0)) return fail('Число рабочих дней должно быть больше нуля');
  if (!(hours > 0)) return fail('Число часов в дне должно быть больше нуля');

  const perDay = salary / days;
  return {
    primary: { label: 'Стоимость рабочего дня', value: money(perDay) },
    secondary: [
      { label: 'Стоимость часа', value: money(perDay / hours) },
      { label: 'Рабочих часов в месяце', value: fmtNumber(days * hours, 0) },
    ],
  };
};
