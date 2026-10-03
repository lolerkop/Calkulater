import type { CalcFunction } from '../../lib/types';
import { displayNumber as text, displayMoney as money } from '../../lib/platform/financeDisplay';
import { number, optionalNumber } from '../../lib/platform/scalarInputDisplay';
import { divideRate } from '../../lib/platform/financeMath';

// Keep the mental shortcut and its independently derived compound-growth time.
const years = (value: number) => `${text(value)} лет`;
export const compute: CalcFunction = (inputs) => {
  const rate = number(inputs.rate);
  const amount = optionalNumber(inputs.amount);
  const fail = (message: string) => ({
    primary: { label: 'Удвоение по правилу 72', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (rate === null || amount === null) return fail('Введите корректные числовые данные');
  if (!(rate > 0)) return fail('Ставка должна быть больше нуля');
  if (amount < 0) return fail('Сумма не может быть отрицательной');
  const i = divideRate(rate, 100);
  if (i === null) return fail('Результат вне допустимого диапазона');
  const approx = 72 / rate;
  const exact = Math.LN2 / Math.log1p(i);
  const gap = Math.abs(approx - exact);
  const doubled = amount * 2;
  if (![approx, exact, gap, doubled].every(Number.isFinite) || approx <= 0 || exact <= 0) return fail('Результат вне допустимого диапазона');
  const secondary = [
    { label: 'Точный срок удвоения', value: years(exact) },
    { label: 'Расхождение правила', value: years(gap) },
    { label: 'Ставка', value: `${text(rate)}% годовых` },
  ];
  if (amount > 0) secondary.push({ label: 'Сумма после удвоения', value: money(doubled) });
  return { primary: { label: 'Удвоение по правилу 72', value: years(approx) }, secondary };
};
