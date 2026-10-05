import { normalizedNumberText } from '../format';
import { ratio } from './geometryNumericInput';

export type DecimalInput = { n: bigint; d: bigint };

/** Use the existing accepted decimal grammar, before Number erases input digits.
 * Numeric callers supply their shortest decimal representation. No tolerance,
 * display rounding or additional string syntax is introduced here. */
export function decimalInput(raw: unknown): DecimalInput | null {
  const text = typeof raw === 'number' && Number.isFinite(raw) ? String(raw)
    : typeof raw === 'string' ? normalizedNumberText(raw) : null;
  if (text === null || !Number.isFinite(Number(text))) return null;
  const match = text.match(/^(-?\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/);
  if (!match) return null;
  const fraction = match[2] ?? '';
  const places = fraction.length - Number(match[3] ?? 0);
  const n = BigInt(match[1] + fraction);
  return places > 0 ? { n, d: 10n ** BigInt(places) }
    : { n: n * 10n ** BigInt(-places), d: 1n };
}

export const decimalAdd = (a: DecimalInput, b: DecimalInput): DecimalInput => ({ n: a.n * b.d + b.n * a.d, d: a.d * b.d });
export const decimalMultiply = (a: DecimalInput, b: DecimalInput): DecimalInput => ({ n: a.n * b.n, d: a.d * b.d });
export const decimalDivide = (a: DecimalInput, b: DecimalInput): DecimalInput => ({ n: a.n * b.d, d: a.d * b.n });
export const decimalLess = (a: DecimalInput, b: DecimalInput): boolean => a.n * b.d < b.n * a.d;

/** Reuse the project's final-grid rational rounding; preserve real nonzero values. */
export function decimalNumber(value: DecimalInput): number {
  const number = ratio({ coefficient: value.n, exponent: 0 }, { coefficient: value.d, exponent: 0 });
  return number === 0 && value.n !== 0n ? NaN : number;
}
