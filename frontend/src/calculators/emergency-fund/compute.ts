import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Финансовая подушка: цель в месяцах расходов и путь к ней.
//
//   цель            = месячные расходы × месяцев запаса
//   не хватает      = цель − накоплено, но не меньше нуля
//   покрыто месяцев = накоплено / расходы, но не больше цели
//
// Подушка измеряется МЕСЯЦАМИ, а не суммой: полмиллиона — это полгода
// спокойствия при расходах 85 000 и меньше двух месяцев при расходах 300 000.
// Именно поэтому цель задаётся месяцами, а сумма из неё выводится, а не
// наоборот.
//
// Готовность и покрытие ограничены целью сверху: накопив больше нужного, вы
// не получаете «сто двадцать процентов подушки» — вы получаете подушку и
// свободные деньги, которым место в другом расчёте.
export const compute: CalcFunction = (inputs) => {
  const monthlyExpenses = toNumber(inputs.monthlyExpenses);
  const months = toNumber(inputs.months);
  const saved = toNumber(inputs.saved);

  const fail = (message: string) => ({
    primary: { label: 'Цель подушки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(monthlyExpenses > 0)) return fail('Месячные расходы должны быть больше нуля');
  if (!(months >= 1)) return fail('Запас должен быть не меньше одного месяца');
  if (saved < 0) return fail('Накопленное не может быть отрицательным');

  const target = monthlyExpenses * months;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
  const ready = Math.min((saved / target) * 100, 100);

  return {
    primary: { label: 'Цель подушки', value: money(target) },
    secondary: [
      { label: 'Не хватает', value: money(Math.max(0, target - saved)), accent: saved >= target ? 'green' : 'red' },
      { label: 'Уже покрыто месяцев', value: formatMeasure(Math.min(saved / monthlyExpenses, months), fmtNumber) },
      { label: 'Готовность', value: `${fmtNumber(ready, 2)}%` },
    ],
  };
};
