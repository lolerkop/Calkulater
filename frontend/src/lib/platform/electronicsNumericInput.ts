import { fmtNumber, isIntegralNumberText } from '../format';
import { formatMeasure, formatQuantity } from './measurement';
import { add, exact, negative, number, ratio, read, times, type Dyadic } from './geometryNumericInput';

export { add, exact, negative, number, ratio, read, times, type Dyadic };
export const INPUT = 'Введите конечные числа во все активные поля';
export const MODE = 'Выберите поддерживаемый режим расчёта';
export const RANGE = 'Результат выходит за числовой диапазон; измените данные';
export const finite = (...values: number[]): boolean => values.every(Number.isFinite);
export const positive = (...values: number[]): boolean => values.every(v => Number.isFinite(v) && v > 0);
export const mode = (raw: unknown, fallback: string, supported: readonly string[]): string | null => {
  const value = raw === undefined ? fallback : raw;
  return typeof value === 'string' && supported.includes(value) ? value : null;
};
/** Integer semantics are checked before binary rounding erases a decimal fraction. */
export function integer(raw: unknown): number {
  const value = read(raw);
  if (!Number.isSafeInteger(value)) return NaN;
  if (typeof raw !== 'string') return value;
  const scientific = raw.trim().match(/^[+-]?(\d*)(?:[.,](\d*))?[eE]([+-]?\d+)$/);
  if (scientific) {
    const coefficient = scientific[1] + (scientific[2] ?? '');
    const places = (scientific[2]?.length ?? 0) - Number(scientific[3]);
    return places > 0 && /[1-9]/.test(coefficient.slice(-places)) ? NaN : value;
  }
  return isIntegralNumberText(raw) !== false ? value : NaN;
}
/** A mathematically nonzero required quantity must not silently become zero. */
export function evaluated(numerator: Dyadic, denominator: Dyadic = exact(1)): number {
  const value = ratio(numerator, denominator);
  return value === 0 && numerator.coefficient !== 0n ? NaN : value;
}
export const measure = (value: number): string => formatQuantity(value, fmtNumber);
export const fixed = (value: number, digits: number): string => value !== 0 && (Math.abs(value) < 10 ** -digits || Math.abs(value) >= 1e12)
  ? formatQuantity(value, fmtNumber) : fmtNumber(value, digits);
const bits = (n: bigint): number => n.toString(2).length;
function integerSqrt(n: bigint): bigint {
  if (n < 2n) return n;
  let q = 1n << BigInt(Math.ceil(bits(n) / 2));
  for (;;) { const next = (q + n / q) >> 1n; if (next >= q) return q; q = next; }
}
/** sqrt(n/d), rounded once on the final binary64 grid, without a floating ratio. */
export function sqrtRatio(numerator: Dyadic, denominator: Dyadic): number {
  if (numerator.coefficient < 0n || denominator.coefficient <= 0n) return NaN;
  if (!numerator.coefficient) return 0;
  let n = numerator.coefficient, d = denominator.coefficient;
  let leading = bits(n) - bits(d);
  if (leading >= 0 ? n < (d << BigInt(leading)) : (n << BigInt(-leading)) < d) leading--;
  const exponent = numerator.exponent - denominator.exponent;
  const grid = Math.max(-1074, Math.floor((leading + exponent) / 2) - 52);
  const shift = exponent - 2 * grid;
  if (shift >= 0) n <<= BigInt(shift); else d <<= BigInt(-shift);
  let q = integerSqrt(n / d);
  const midpoint = d * (2n * q + 1n) ** 2n;
  if (4n * n > midpoint || (4n * n === midpoint && (q & 1n) !== 0n)) q++;
  return Number(q) * 2 ** grid;
}
