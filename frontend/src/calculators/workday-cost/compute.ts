import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, integer, validOutput } from '../../lib/platform/scalarInputDisplay';
import { formatMeasure } from '../../lib/platform/measurement';

// Стоимость рабочего дня и часа по окладу.
//
// Число рабочих дней — обычное поле со значением по умолчанию, а не календарная
// или юридическая истина: в разных месяцах и графиках оно разное, поэтому его
// видно и его можно изменить. Никакой производственный календарь здесь не зашит.

const money = (value: number): string => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const salary = toNumber(inputs.salary);
  const days = integer(inputs.days);
  const hours = toNumber(inputs.hours);
  const fail = (message: string) => ({
    primary: { label: 'Стоимость рабочего дня', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (salary === null || hours === null) return fail('Введите корректные числовые данные');
  if (days === null) return fail('Количество должно быть целым в допустимом диапазоне');

  if (!(salary > 0)) return fail('Оклад должен быть больше нуля');
  if (!(days > 0)) return fail('Число рабочих дней должно быть больше нуля');
  if (!(hours > 0)) return fail('Число часов в дне должно быть больше нуля');
  if (days > 31 || hours > 24) return fail('Рабочий месяц ограничен 31 днём, а день — 24 часами');

  const perDay = salary / days;
  const perHour = perDay / hours;
  const monthlyHours = days * hours;
  if (![perDay, perHour, monthlyHours].every(v => validOutput(v, true))) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Стоимость рабочего дня', value: money(perDay) },
    secondary: [
      { label: 'Стоимость часа', value: money(perHour) },
      { label: 'Рабочих часов в месяце', value: formatMeasure(monthlyHours, fmtNumber) },
    ],
  };
};
