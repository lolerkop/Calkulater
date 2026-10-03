import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

const number = (value: unknown): number | null => typeof value === 'number' || typeof value === 'string' ? parseLocalizedNumber(value) : null;
const optionalNumber = (value: unknown): number | null => value === undefined || (typeof value === 'string' && value.trim() === '') ? 0 : number(value);
const money = (value: number): string => value !== 0 && (Math.abs(value) < 1e-7 || Math.abs(value) >= 1e21) ? `${formatQuantity(value, fmtNumber)} ₽` : fmtMoney(value);
const ratioText = (value: number): string => value < 1e-7 || value >= 1e21 ? formatQuantity(value, fmtNumber) : fmtNumber(value, 2);

// Revenue-based lifetime value is supplied, not a profit forecast. Counts are
// actual acquired customers, not fractional attribution credits.
export const compute: CalcFunction = (inputs) => {
  const spend = number(inputs.spend);
  const customers = number(inputs.customers);
  const ltv = optionalNumber(inputs.ltv);
  const fail = (message: string) => ({
    primary: { label: 'Стоимость привлечения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (spend === null) return fail('Расходы должны быть конечным числом');
  if (spend < 0) return fail('Расходы не могут быть отрицательными');
  if (customers === null || !Number.isSafeInteger(customers)) return fail('Число клиентов должно быть целым в допустимом диапазоне');
  if (customers <= 0) return fail('Клиентов должно быть больше нуля');
  if (ltv === null) return fail('Доход с клиента должен быть конечным числом');
  if (ltv < 0) return fail('Доход с клиента не может быть отрицательным');
  const cac = spend / customers;
  if (!Number.isFinite(cac) || (spend > 0 && cac === 0)) return fail('Результат вне допустимого диапазона');
  const ratio = ltv > 0 && cac > 0 ? ltv / cac : null;
  if (ratio !== null && (!Number.isFinite(ratio) || ratio === 0)) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Стоимость привлечения', value: money(cac) },
    secondary: [
      { label: 'Расходы за период', value: money(spend) },
      { label: 'Привлечено клиентов', value: fmtNumber(customers, 0) },
      ...(ltv > 0 ? [{ label: 'LTV к CAC', value: ratio === null ? '—' : `${ratioText(ratio)} : 1` }] : []),
    ],
    ...(ltv > 0 && cac === 0 ? { note: 'При нулевом CAC отношение не рассчитывается: деление на ноль.' } : {}),
  };
};
