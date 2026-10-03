import { parseLocalizedNumber } from '../format';

/** Finite scalar input; lexical nonzero values cannot silently underflow to zero. */
export function readScalar(value: unknown): number {
  if (typeof value === 'number') return Number.isFinite(value) ? value : NaN;
  if (typeof value !== 'string') return NaN;
  const text = value.trim();
  if (/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)[eE][+-]?\d+$/.test(text)) {
    const n = Number(text.replace(',', '.'));
    return Number.isFinite(n) && (n !== 0 || !/[1-9]/.test(text.split(/[eE]/)[0])) ? n : NaN;
  }
  const n = parseLocalizedNumber(text);
  return n !== null && (n !== 0 || !/[1-9]/.test(text)) ? n : NaN;
}

/** Positive products/quotients with binary scaling; output is still a rounded Number. */
export function positiveRatio(numerators: readonly number[], denominators: readonly number[]): number {
  if (numerators.some(x => !Number.isFinite(x) || x < 0) || denominators.some(x => !Number.isFinite(x) || !(x > 0))) return NaN;
  if (numerators.some(x => x === 0)) return 0;
  let mantissa = 1, exponent = 0;
  for (const [factors, direction] of [[numerators, 1], [denominators, -1]] as const) {
    for (const factor of factors) {
      const e = Math.min(1023, Math.floor(Math.log2(factor)));
      const m = factor / (2 ** e);
      mantissa = direction === 1 ? mantissa * m : mantissa / m;
      exponent += direction * e;
      while (mantissa >= 2) { mantissa /= 2; exponent++; }
      while (mantissa < 1) { mantissa *= 2; exponent--; }
    }
  }
  if (exponent > 1023) return Infinity;
  if (exponent < -1075) return 0;
  return exponent < -1022
    ? (mantissa * (2 ** (exponent + 1074))) * Number.MIN_VALUE
    : mantissa * (2 ** exponent);
}
