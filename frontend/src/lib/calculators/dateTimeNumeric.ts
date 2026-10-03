import { finiteInput, integerInput } from '../platform/strictNumericInput';

export const whole = (raw: unknown, min = 0, max = Number.MAX_SAFE_INTEGER): number | null => {
  const value = integerInput(raw);
  return value !== null && value >= min && value <= max ? value : null;
};
export const finite = finiteInput;
export const enumValue = <T extends string>(raw: unknown, allowed: readonly T[], fallback: T): T | null =>
  raw === undefined ? fallback : typeof raw === 'string' && allowed.includes(raw as T) ? raw as T : null;

/** Omitted/blank legacy shift components mean no shift; other malformed values fail. */
export const shiftWhole = (raw: unknown): number | null => raw === undefined || (typeof raw === 'string' && raw.trim() === '') ? 0 : whole(raw);

export const clock = (minutes: number): string => `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
export const wrapDay = (minutes: number): number => ((minutes % 1440) + 1440) % 1440;

/** Exact accepted decimal lexeme, rather than rounded binary value × 60. */
export function utcOffsetMinutes(raw: unknown): number | null {
  const value = finite(raw);
  if (value === null || value < -12 || value > 14) return null;
  const original = typeof raw === 'number' ? String(raw) : (raw as string).trim().replace(/\s/g, '');
  // Offsets are bounded, hence have no meaningful thousands separator. The
  // finite parser above validates localized syntax; preserve the fractional tail.
  if (!/^[+-]?\d+(?:[.,]\d+)?$/.test(original)) return null;
  const negative = original.startsWith('-');
  const [integer, tail = ''] = original.replace(/^[+-]/, '').replace(',', '.').split('.');
  const fraction = tail.replace(/0+$/, '');
  if (fraction.length > 2) return null;
  const denominator = 10n ** BigInt(fraction.length);
  const numerator = BigInt(integer + fraction) * 60n;
  if (numerator % denominator !== 0n) return null;
  const minutes = Number(numerator / denominator) * (negative ? -1 : 1);
  return minutes >= -720 && minutes <= 840 ? minutes : null;
}
