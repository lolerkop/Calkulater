import { fmtNumber, isIntegralNumberText } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
import { add, exact, negative, ratio, read, times, type Dyadic } from '../../lib/platform/geometryNumericInput';
export { add, exact, negative, read, times, type Dyadic };
export const INPUT = 'Введите конечные числа во все активные поля';
export const MODE = 'Выберите поддерживаемый режим расчёта';
export const RANGE = 'Результат выходит за числовой диапазон; измените данные';
export const INTEGER = 'Введите целые числа в допустимом диапазоне';
export const finite = (...xs: number[]): boolean => xs.every(Number.isFinite);
export const mode = (raw: unknown, fallback: string, allowed: readonly string[]): string | null => {
  const value = raw === undefined ? fallback : raw;
  return typeof value === 'string' && allowed.includes(value) ? value : null;
};
export function integer(raw: unknown): number {
  const n = read(raw);
  if (!Number.isSafeInteger(n)) return NaN;
  if (typeof raw !== 'string') return n;
  const m = raw.trim().match(/^[+-]?(\d*)(?:[.,](\d*))?[eE]([+-]?\d+)$/);
  if (m) {
    const coefficient = m[1] + (m[2] ?? '');
    const places = (m[2]?.length ?? 0) - Number(m[3]);
    return places > 0 && /[1-9]/.test(coefficient.slice(-places)) ? NaN : n;
  }
  return isIntegralNumberText(raw) !== false ? n : NaN;
}
/** Complete dyadic products/ratios round once; genuine zero remains zero. */
export function evaluated(n: Dyadic, d: Dyadic = exact(1)): number {
  const x = ratio(n, d);
  return x === 0 && n.coefficient !== 0n ? NaN : x;
}
export const mul = (...xs: number[]): number => evaluated(times(...xs.map(exact)));
export const plus = (...xs: number[]): number => evaluated(add(...xs.map(exact)));
export const minus = (a: number, b: number): number => evaluated(add(exact(a), negative(exact(b))));
export const quotient = (n: readonly number[], d: readonly number[]): number => evaluated(times(...n.map(exact)), times(...d.map(exact)));
export const quantity = (x: number): string => formatQuantity(x, fmtNumber);
export const scalar = (x: number, digits = 2): string => x !== 0 && (Math.abs(x) < 10 ** -digits || Math.abs(x) >= 1e12) ? quantity(x) : fmtNumber(x, digits);
/** Purchase counts use exact rational arithmetic on the shortest decimal representation of parsed finite numbers.
 * This preserves decimal stock sizes (2.5 × 1.2 = 3) without deleting a real positive remainder.
 * It does not claim to recover digits already rounded while parsing a measurement. */
export type Decimal = { n: bigint; d: bigint };
export function decimal(x: number): Decimal {
  if (!Number.isFinite(x)) throw new RangeError('finite decimal required');
  const [head, exponent = '0'] = x.toString().split('e');
  const places = (head.split('.')[1]?.length ?? 0) - Number(exponent);
  const n = BigInt(head.replace('.', ''));
  return places > 0 ? { n, d: 10n ** BigInt(places) } : { n: n * 10n ** BigInt(-places), d: 1n };
}
export const dmul = (...xs: Decimal[]): Decimal => xs.reduce((a,b)=>({n:a.n*b.n,d:a.d*b.d}),{n:1n,d:1n});
export const dadd = (a: Decimal,b: Decimal): Decimal => ({n:a.n*b.d+b.n*a.d,d:a.d*b.d});
export const dproduct = (...xs: number[]): Decimal => dmul(...xs.map(decimal));
export function ceilDecimal(n: Decimal, d: Decimal = decimal(1)): number {
  const top=n.n*d.d, bottom=n.d*d.n;
  if(top <= 0n || bottom <= 0n) return NaN;
  const result=(top+bottom-1n)/bottom;
  return result <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(result) : NaN;
}
export const reserveDecimal = (n: Decimal, pct: number): Decimal => dmul(n,dadd(decimal(100),decimal(pct)),{n:1n,d:100n});
export const reserve = (n: Dyadic, pct: number): number => evaluated(times(n,add(exact(100),exact(pct))),exact(100));

export const measure = (x: number): string => x !== 0 && (Math.abs(x) < 1e-6 || Math.abs(x) >= 1e12) ? formatQuantity(x,fmtNumber) : formatMeasure(x,fmtNumber);
