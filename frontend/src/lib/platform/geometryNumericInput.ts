import { fmtNumber, parseLocalizedNumber } from '../format';
import { formatMeasure } from './measurement';

/** Bounded arithmetic on the actual finite binary inputs, not arbitrary decimal precision. */
export type Dyadic = { coefficient: bigint; exponent: number };
const view = new DataView(new ArrayBuffer(8));
export function exact(value: number): Dyadic {
  view.setFloat64(0, value);
  const high = view.getUint32(0), low = view.getUint32(4), encoded = (high >>> 20) & 0x7ff;
  let coefficient = (BigInt(high & 0xfffff) << 32n) | BigInt(low);
  if (encoded) coefficient |= 1n << 52n;
  return { coefficient: high >>> 31 ? -coefficient : coefficient, exponent: encoded ? encoded - 1075 : -1074 };
}
export function add(...values: Dyadic[]): Dyadic {
  const exponent = Math.min(...values.map(v => v.exponent));
  return { coefficient: values.reduce((sum, v) => sum + (v.coefficient << BigInt(v.exponent - exponent)), 0n), exponent };
}
export function times(...values: Dyadic[]): Dyadic {
  return { coefficient: values.reduce((p, v) => p * v.coefficient, 1n), exponent: values.reduce((p, v) => p + v.exponent, 0) };
}
export const scale = (value: Dyadic, exponent: number): Dyadic => ({ ...value, exponent: value.exponent + exponent });
export const negative = (value: Dyadic): Dyadic => ({ ...value, coefficient: -value.coefficient });
const abs = (n: bigint): bigint => n < 0n ? -n : n;
const bits = (n: bigint): number => n.toString(2).length;
function roundedRatio(n: bigint, d: bigint, shift: number): bigint {
  if (shift >= 0) n <<= BigInt(shift); else d <<= BigInt(-shift);
  const q = n / d, r = n % d;
  return 2n * r > d || (2n * r === d && (q & 1n) !== 0n) ? q + 1n : q;
}
export function ratio(numerator: Dyadic, denominator: Dyadic): number {
  if (!denominator.coefficient) return NaN;
  if (!numerator.coefficient) return 0;
  const n = abs(numerator.coefficient), d = abs(denominator.coefficient);
  let leading = bits(n) - bits(d);
  if (leading >= 0 ? n < (d << BigInt(leading)) : (n << BigInt(-leading)) < d) leading--;
  const exponent = numerator.exponent - denominator.exponent;
  const grid = Math.max(-1074, leading + exponent - 52);
  const q = roundedRatio(n, d, exponent - grid);
  return ((numerator.coefficient < 0n) !== (denominator.coefficient < 0n) ? -1 : 1) * Number(q) * 2 ** grid;
}
export const number = (value: Dyadic): number => ratio(value, { coefficient: 1n, exponent: 0 });
function integerSqrt(value: bigint): bigint {
  if (value < 2n) return value;
  let current = 1n << BigInt(Math.ceil(bits(value) / 2));
  for (;;) { const next = (current + value / current) >> 1n; if (next >= current) return current; current = next; }
}
/** Square root rounded directly onto its final binary grid; no floating intermediate product. */
export function sqrt(value: Dyadic): number {
  if (value.coefficient < 0n) return NaN;
  if (!value.coefficient) return 0;
  const leading = Math.floor((bits(value.coefficient) - 1 + value.exponent) / 2);
  const grid = Math.max(-1074, leading - 52), shift = value.exponent - 2 * grid;
  const n = shift >= 0 ? value.coefficient << BigInt(shift) : value.coefficient;
  const d = shift >= 0 ? 1n : 1n << BigInt(-shift);
  let q = integerSqrt(n / d);
  const midpoint = d * (2n * q + 1n) ** 2n;
  if (4n * n > midpoint || (4n * n === midpoint && (q & 1n) !== 0n)) q++;
  return Number(q) * 2 ** grid;
}
export function read(raw: unknown): number {
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : NaN;
  if (typeof raw !== 'string') return NaN;
  const text = raw.trim();
  if (/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)[eE][+-]?\d+$/.test(text)) {
    const value = Number(text.replace(',', '.'));
    return Number.isFinite(value) && (value !== 0 || !/[1-9]/.test(text.split(/[eE]/)[0])) ? value : NaN;
  }
  const value = parseLocalizedNumber(text);
  return value !== null && (value !== 0 || !/[1-9]/.test(text)) ? value : NaN;
}
export const valid = (...values: number[]): boolean => values.every(v => Number.isFinite(v) && v > 0);
export const unit = (raw: unknown): string | null => raw === 'mm' ? 'мм' : raw === 'cm' ? 'см' : raw === 'm' ? 'м' : null;
export const product = (...values: number[]): number => values.every(Number.isFinite) ? number(times(...values.map(exact))) : NaN;
export const sum = (...values: number[]): number => values.every(Number.isFinite) ? number(add(...values.map(exact))) : NaN;
/** Preserve ordinary geometry precision, rescue only genuine small/huge nonzero values. */
export function dim(value: number): string {
  if (value !== 0 && (Math.abs(value) < 1e-7 || Math.abs(value) >= 1e12)) {
    const [mantissa, exponent] = value.toExponential(3).split('e');
    return `${mantissa.replace('.', ',')}·10^${Number(exponent)}`;
  }
  return formatMeasure(value, fmtNumber);
}
export const INPUT = 'Введите конечные числа во все активные поля';
export const MODE = 'Выберите поддерживаемый режим расчёта';
export const UNIT = 'Выберите миллиметры, сантиметры или метры';
export const RANGE = 'Результат выходит за числовой диапазон; измените масштаб фигуры';
