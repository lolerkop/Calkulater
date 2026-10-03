import type { CalcFunction } from '../../lib/types';
import { displayNumber as text, displayMoney as money } from '../../lib/platform/financeDisplay';
import { number } from '../../lib/platform/scalarInputDisplay';
import { formatMeasure } from '../../lib/platform/measurement';

// Coverage and readiness are capped at the user's goal, not at total holdings.
export const compute: CalcFunction = (inputs) => {
  const monthlyExpenses = number(inputs.monthlyExpenses);
  const months = number(inputs.months);
  const saved = number(inputs.saved);
  const fail = (message: string) => ({
    primary: { label: 'Цель подушки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (monthlyExpenses === null || months === null || saved === null) return fail('Введите корректные числовые данные');
  if (!(monthlyExpenses > 0)) return fail('Месячные расходы должны быть больше нуля');
  if (!(months >= 1)) return fail('Запас должен быть не меньше одного месяца');
  if (saved < 0) return fail('Накопленное не может быть отрицательным');
  const target = monthlyExpenses * months;
  if (!Number.isFinite(target) || target <= 0) return fail('Результат вне допустимого диапазона');
  const ready = saved >= target ? 100 : (saved / target) * 100;
  const covered = saved >= target ? months : saved / monthlyExpenses;
  const gap = Math.max(0, target - saved);
  if (![ready, covered, gap].every(Number.isFinite) || (saved > 0 && (ready <= 0 || covered <= 0))) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Цель подушки', value: money(target) },
    secondary: [
      { label: 'Не хватает', value: money(gap), accent: saved >= target ? 'green' : 'red' },
      { label: 'Уже покрыто месяцев', value: formatMeasure(covered, text) },
      { label: 'Готовность', value: `${text(ready)}%` },
    ],
  };
};
