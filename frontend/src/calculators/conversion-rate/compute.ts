import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

const number = (value: unknown): number | null => typeof value === 'number' || typeof value === 'string' ? parseLocalizedNumber(value) : null;
const optionalNumber = (value: unknown): number | null => value === undefined || (typeof value === 'string' && value.trim() === '') ? 0 : number(value);

// Conversions are visits with at least one chosen action, counted once per visit.
// Repeat events and fractional attribution credits are outside this contract.
export const compute: CalcFunction = (inputs) => {
  const visitors = number(inputs.visitors);
  const conversions = number(inputs.conversions);
  const cost = optionalNumber(inputs.cost);
  const fail = (message: string) => ({
    primary: { label: 'Конверсия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (visitors === null || !Number.isSafeInteger(visitors)) return fail('Число визитов должно быть целым в допустимом диапазоне');
  if (!(visitors > 0)) return fail('Число визитов должно быть больше нуля');
  if (conversions === null || !Number.isSafeInteger(conversions)) return fail('Число конверсий должно быть целым в допустимом диапазоне');
  if (conversions < 0) return fail('Число конверсий не может быть отрицательным');
  if (conversions > visitors) return fail('Конверсий не может быть больше, чем визитов');
  if (cost === null) return fail('Бюджет должен быть конечным числом');
  if (cost < 0) return fail('Бюджет не может быть отрицательным');
  const percent = (conversions / visitors) * 100;
  const cpa = conversions > 0 && cost > 0 ? cost / conversions : null;
  if (cpa !== null && (!Number.isFinite(cpa) || !(cpa > 0))) return fail('Результат вне допустимого диапазона');
  const money = (value: number): string => `${value < 1e-7 || value >= 1e21 ? formatQuantity(value, fmtNumber) : fmtNumber(value, 2)} ₽`;
  return {
    primary: { label: 'Конверсия', value: `${percent > 0 && percent < 1e-7 ? formatQuantity(percent, fmtNumber) : fmtNumber(percent, 2)}%` },
    secondary: [
      { label: 'Конверсий', value: fmtNumber(conversions, 0) },
      { label: 'Визитов', value: fmtNumber(visitors, 0) },
      ...(cpa !== null ? [{ label: 'Цена конверсии', value: money(cpa) }] : []),
      ...(conversions > 0 ? [{ label: 'Визитов на одну конверсию', value: formatMeasure(visitors / conversions, fmtNumber) }] : []),
    ],
  };
};
