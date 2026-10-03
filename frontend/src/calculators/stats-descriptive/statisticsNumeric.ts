import { fmtNumber, isIntegralNumberText } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';
import { add, exact, negative, number, ratio, read, times, type Dyadic } from '../../lib/platform/geometryNumericInput';

// Exact operations apply to the finite binary64 inputs. Text lists are bounded;
// this is not an arbitrary-precision decimal input API.
export { add, exact, negative, number, ratio, read, times, type Dyadic };
export const INPUT = 'Введите конечные числа во все активные поля';
export const INTEGER = 'Введите целые числа в допустимом диапазоне';
export const MODE = 'Выберите поддерживаемый режим расчёта';
export const RANGE = 'Результат выходит за числовой диапазон; измените данные';
export const LIMIT = 'Допускается не больше 10000 значений или пар и 1000000 символов';
export const ABOVE = 'Вне числового диапазона';
export const BELOW = 'Ненулевое значение меньше числового диапазона';
export const MAX_ITEMS = 10000;
export const tokens = (raw: string): string[] => raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);
export function list(raw: unknown): number[] | null {
  if (typeof raw !== 'string' || raw.length > 1000000) return null;
  const parts = tokens(raw);
  if (!parts.length || parts.length > MAX_ITEMS) return null;
  const values = parts.map(read);
  return values.every(Number.isFinite) ? values : null;
}
export function integer(raw: unknown): number {
  const value = read(raw);
  if (!Number.isSafeInteger(value)) return NaN;
  if (typeof raw !== 'string') return value;
  const scientific = raw.trim().match(/^[+-]?(\d*)(?:[.,](\d*))?[eE]([+-]?\d+)$/);
  if (scientific) {
    const coefficient = (scientific[1] + (scientific[2] ?? ''));
    const places = (scientific[2]?.length ?? 0) - Number(scientific[3]);
    return places > 0 && /[1-9]/.test(coefficient.slice(-places)) ? NaN : value;
  }
  return isIntegralNumberText(raw) !== false ? value : NaN;
}
export const mode = (raw: unknown, fallback: string, supported: readonly string[]): string | null => {
  const value = raw === undefined ? fallback : raw;
  return typeof value === 'string' && supported.includes(value) ? value : null;
};
export const nonzeroFinite = (value: number, source: Dyadic): boolean => Number.isFinite(value) && (value !== 0 || source.coefficient === 0n);
export function stat(value: number): string {
  if (!Number.isFinite(value)) return ABOVE;
  if (value !== 0 && (Math.abs(value) < 0.0001 || Math.abs(value) >= 1e12)) {
    const [mantissa, exponent] = value.toExponential(3).split('e');
    return `${mantissa.replace('.', ',')}·10^${Number(exponent)}`;
  }
  return formatStatistic(value, fmtNumber);
}
export function measure(value: number): string {
  return value !== 0 && (Math.abs(value) < 0.0001 || Math.abs(value) >= 1e12) ? stat(value) : formatMeasure(value, fmtNumber);
}
export function shown(value: Dyadic, denominator: Dyadic = exact(1), display = stat): string {
  const result = ratio(value, denominator);
  return !Number.isFinite(result) ? ABOVE : result === 0 && value.coefficient !== 0n ? BELOW : display(result);
}
export const sum = (values: readonly number[]): Dyadic => values.reduce((s, x) => add(s, exact(x)), exact(0));
export function moments(values: readonly number[]): { sum: Dyadic; centered: Dyadic } {
  const total = sum(values), squares = values.reduce((s, x) => add(s, times(exact(x), exact(x))), exact(0));
  return { sum: total, centered: add(times(exact(values.length), squares), negative(times(total, total))) };
}
export function interpolation(sorted: readonly number[], probability: number): Dyadic {
  const position = (sorted.length - 1) * probability, low = Math.floor(position), fraction = position - low;
  return add(times(exact(sorted[low]), exact(1 - fraction)), times(exact(sorted[Math.ceil(position)]), exact(fraction)));
}
export const interpolated = (sorted: readonly number[], probability: number): number => number(interpolation(sorted, probability));
const abs = (n: bigint): bigint => n < 0n ? -n : n;
const bits = (n: bigint): number => n.toString(2).length;
function integerSqrt(value: bigint): bigint {
  if (value < 2n) return value;
  let current = 1n << BigInt(Math.ceil(bits(value) / 2));
  for (;;) { const next = (current + value / current) >> 1n; if (next >= current) return current; current = next; }
}
/** sqrt(n/d), rounded once directly to its final normal/subnormal grid. */
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
  if (4n * n > midpoint || (4n * n === midpoint && (q & 1n))) q++;
  return Number(q) * 2 ** grid;
}
export function fraction(value: Dyadic, denominator: Dyadic = exact(1)): [bigint, bigint] {
  let n = value.coefficient, d = denominator.coefficient;
  const shift = value.exponent - denominator.exponent;
  if (shift >= 0) n <<= BigInt(shift); else d <<= BigInt(-shift);
  return d < 0n ? [-n, -d] : [n, d];
}
export function ceiling(value: Dyadic, denominator: Dyadic): bigint {
  const [n, d] = fraction(value, denominator);
  return n / d + (n % d > 0n ? 1n : 0n);
}
export const exactInt = (n: bigint): string => new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(n);
export const compare = (a: Dyadic, b: Dyadic): number => {
  const coefficient = add(a, negative(b)).coefficient;
  return coefficient < 0n ? -1 : coefficient > 0n ? 1 : 0;
};
export const magnitude = (value: Dyadic): Dyadic => ({ ...value, coefficient: abs(value.coefficient) });
