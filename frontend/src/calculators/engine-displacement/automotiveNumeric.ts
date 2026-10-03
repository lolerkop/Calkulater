import { fmtNumber, isIntegralNumberText } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { add, exact, negative, number, ratio, read, scale, times, type Dyadic } from '../../lib/platform/geometryNumericInput';

export { add, exact, negative, number, ratio, read, times, type Dyadic };
export const INPUT = 'Введите конечные числа во все активные поля';
export const MODE = 'Выберите поддерживаемый режим расчёта';
export const RANGE = 'Результат выходит за числовой диапазон; измените данные';
export const INTEGER = 'Введите целые числа в допустимом диапазоне';
export const mode = (raw: unknown, fallback: string, supported: readonly string[]): string | null => {
  const value = raw === undefined ? fallback : raw;
  return typeof value === 'string' && supported.includes(value) ? value : null;
};
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
export const finite = (...values: number[]): boolean => values.every(Number.isFinite);
export const positive = (...values: number[]): boolean => values.every(v => Number.isFinite(v) && v > 0);
export const optional = (raw: unknown): number => raw === undefined ? 0 : read(raw);
/** Round once after the complete ratio, preserving a true zero but rejecting positive underflow. */
export function evaluated(numerator: Dyadic, denominator: Dyadic = exact(1)): number {
  const value = ratio(numerator, denominator);
  return value === 0 && numerator.coefficient !== 0n ? NaN : value;
}
export const mul = (...values: number[]): number => evaluated(times(...values.map(exact)));
export const plus = (...values: number[]): number => evaluated(add(...values.map(exact)));
export const minus = (a: number, b: number): number => evaluated(add(exact(a), negative(exact(b))));
export const quotient = (numerator: readonly number[], denominator: readonly number[]): number =>
  evaluated(times(...numerator.map(exact)), times(...denominator.map(exact)));
/** Keep established display precision; use scientific notation when fixed decimals would hide a nonzero. */
export const scalar = (value: number, digits = 2): string => value !== 0 && (Math.abs(value) < 10 ** -digits || Math.abs(value) >= 1e12)
  ? formatQuantity(value, fmtNumber) : fmtNumber(value, digits);
export const measure = (value: number): string => formatQuantity(value, fmtNumber);
/** The cube root can be finite even when the ratio itself is outside binary64. */
export function cubeRootRatio(n: Dyadic, d: Dyadic): number {
  if (n.coefficient <= 0n || d.coefficient <= 0n) return NaN;
  const direct = ratio(n, d);
  // Subnormal ratios have already lost relative precision before cbrt.
  if (Number.isFinite(direct) && direct >= 2 ** -1022) return Math.cbrt(direct);
  const en = n.coefficient.toString(2).length - 1 + n.exponent;
  const ed = d.coefficient.toString(2).length - 1 + d.exponent;
  const exponent = en - ed, third = Math.floor(exponent / 3);
  const mantissa = ratio(scale(n, -en), scale(d, -ed));
  const root = Math.cbrt(mantissa * 2 ** (exponent - 3 * third));
  return evaluated(times(exact(root), { coefficient: 1n, exponent: third }));
}
