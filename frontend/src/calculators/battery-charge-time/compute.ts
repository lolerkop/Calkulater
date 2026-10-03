import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';
import { positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { formatQuantity } from '../../lib/platform/measurement';
const fixed = (n: number, digits: number) => n > 0 && (n < 0.5 * 10 ** -digits || n >= 1e12) ? formatQuantity(n, fmtNumber) : fmtNumber(n, digits);
const duration = (hours: number) => {
  if (hours < 1 / 120 || hours >= 1e12) return formatQuantity(hours, fmtNumber) + ' ч';
  const minutes = Math.round(hours * 60);
  return fmtInt(Math.floor(minutes / 60)) + ' ч ' + (minutes % 60) + ' мин';
};
export const compute: CalcFunction = (inputs) => {
  const capacity = read(inputs.capacityAh), current = read(inputs.currentA), efficiency = read(inputs.efficiency);
  const fail = (message: string) => ({ primary: { label: 'Время зарядки', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![capacity, current, efficiency].every(Number.isFinite)) return fail(INPUT);
  if (!(capacity > 0)) return fail('Ёмкость должна быть больше нуля');
  if (!(current > 0)) return fail('Ток зарядки должен быть больше нуля');
  if (!(efficiency >= 1 && efficiency <= 100)) return fail('КПД должен быть от 1 до 100 %');
  // η is retained charge / supplied charge, not an energy efficiency.
  const hours = positiveRatio([capacity, 100], [current, efficiency]);
  const supplied = positiveRatio([capacity, 100], [efficiency]);
  if (![hours, supplied].every(n => Number.isFinite(n) && n > 0)) return fail(RANGE);
  return { primary: { label: 'Время зарядки', value: duration(hours) }, secondary: [
    { label: 'В часах', value: fixed(hours, 2) + ' ч' },
    { label: 'Передано в батарею', value: fixed(capacity, 2) + ' А·ч' },
    { label: 'Отдано зарядным устройством', value: fixed(supplied, 2) + ' А·ч' },
  ] };
};
