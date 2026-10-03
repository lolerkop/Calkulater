import { fmtNumber, isIntegralNumberText } from '../format';
import { formatMeasure, formatQuantity } from '../platform/measurement';
import { add, exact, negative, ratio, read, times, type Dyadic } from '../platform/geometryNumericInput';
export { add, exact, negative, read, times, type Dyadic };
export const INPUT = 'Введите конечные числа во все активные поля';
export const RANGE = 'Результат выходит за числовой диапазон; измените данные';
export const MODE = 'Выберите поддерживаемый режим расчёта';
export const INTEGER = 'Введите целое число в допустимом диапазоне';
export const finite = (...values: number[]) => values.every(Number.isFinite);
export const optional = (raw: unknown) => raw === undefined || typeof raw === 'string' && raw.trim() === '' ? 0 : read(raw);
export const mode = (raw: unknown, fallback: string, allowed: readonly string[]) => raw === undefined ? fallback : typeof raw === 'string' && allowed.includes(raw) ? raw : null;
export function integer(raw: unknown): number {
  const n = read(raw);
  if (!Number.isSafeInteger(n)) return NaN;
  if (typeof raw !== 'string') return n;
  const m = raw.trim().match(/^[+-]?(\d*)(?:[.,](\d*))?[eE]([+-]?\d+)$/);
  if (m) {
    const coefficient = m[1] + (m[2] ?? ''), places = (m[2]?.length ?? 0) - Number(m[3]);
    return places > 0 && /[1-9]/.test(coefficient.slice(-places)) ? NaN : n;
  }
  return isIntegralNumberText(raw) !== false ? n : NaN;
}
/** A nonzero exact numerator must not silently become a zero result. */
export function evaluated(n: Dyadic, d: Dyadic = exact(1)): number {
  const x = ratio(n, d);
  return x === 0 && n.coefficient !== 0n ? NaN : x;
}
export const measure = (x: number) => x !== 0 && (Math.abs(x) < 1e-6 || Math.abs(x) >= 1e12) ? formatQuantity(x, fmtNumber) : formatMeasure(x, fmtNumber);
/** Preserve ordinary precision; rescue only values that would display as zero. */
export const scalar = (x: number, digits: number) => x !== 0 && (Math.abs(x) < .5 * 10 ** -digits || Math.abs(x) >= 1e12) ? formatQuantity(x, fmtNumber) : fmtNumber(x, digits);
export const money = (x: number) => `${scalar(x, 2)} ₽`;
/** Purchase rounding uses shortest decimal representations of parsed finite values.
 * It preserves a true positive remainder, without recovering digits lost in parsing. */
export type Decimal = { n: bigint; d: bigint };
export function decimal(x: number): Decimal {
  const [head, exponent = '0'] = x.toString().split('e');
  const places = (head.split('.')[1]?.length ?? 0) - Number(exponent), n = BigInt(head.replace('.', ''));
  return places > 0 ? { n, d: 10n ** BigInt(places) } : { n: n * 10n ** BigInt(-places), d: 1n };
}
export const dmul = (...xs: Decimal[]): Decimal => xs.reduce((a,b) => ({ n: a.n * b.n, d: a.d * b.d }), { n: 1n, d: 1n });
const gcd = (a: bigint, b: bigint): bigint => { a = a < 0n ? -a : a; while (b) { const r = a % b; a = b; b = r; } return a; };
export const reduced = (x: Decimal): Decimal => { const g = gcd(x.n, x.d); return { n: x.n / g, d: x.d / g }; };
export const dadd = (a: Decimal, b: Decimal): Decimal => { const g = gcd(a.d, b.d); return reduced({ n: a.n * (b.d / g) + b.n * (a.d / g), d: a.d * (b.d / g) }); };
export const ddiv = (a: Decimal, b: Decimal): Decimal => reduced({ n: a.n * b.d, d: a.d * b.n });
export const dnegative = (a: Decimal): Decimal => ({ n: -a.n, d: a.d });
export function ceiling(n: Decimal, d: Decimal = decimal(1)): number {
  const top = n.n * d.d, bottom = n.d * d.n;
  if (top <= 0n || bottom <= 0n) return NaN;
  const q = (top + bottom - 1n) / bottom;
  return q <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(q) : NaN;
}
export const decimalValue = (x: Decimal) => evaluated({ coefficient: x.n, exponent: 0 }, { coefficient: x.d, exponent: 0 });
/** Positive monetary ratios are rounded half up in decimal before formatting. */
export function decimalScalar(x: Decimal, digits: number): string {
  const n = decimalValue(x);
  if (n !== 0 && (Math.abs(n) < .5 * 10 ** -digits || Math.abs(n) >= 1e12)) return scalar(n, digits);
  const scale = 10n ** BigInt(digits), sign = x.n < 0n ? -1 : 1, top = x.n < 0n ? -x.n : x.n;
  const rounded = (top * scale * 2n + x.d) / (2n * x.d);
  return fmtNumber(sign * Number(rounded) / Number(scale), digits);
}
export const decimalMoney = (x: Decimal) => `${decimalScalar(x, 2)} ₽`;
