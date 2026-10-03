// Exact bounded products/differences of finite IEEE-754 inputs. This preserves
// their signs and cancellation before rounding, not arbitrary decimal precision.
export type Dyadic = { coefficient: bigint; exponent: number };
const view = new DataView(new ArrayBuffer(8));
function dyadic(value: number): Dyadic {
  view.setFloat64(0, value);
  const high = view.getUint32(0), low = view.getUint32(4);
  const encoded = (high >>> 20) & 0x7ff;
  let coefficient = (BigInt(high & 0xfffff) << 32n) | BigInt(low);
  if (encoded) coefficient |= 1n << 52n;
  if (high >>> 31) coefficient = -coefficient;
  return { coefficient, exponent: encoded ? encoded - 1075 : -1074 };
}
/** Round an exact positive integer ratio, once, to nearest with ties to even. */
function roundedRatio(numerator: bigint, denominator: bigint, binaryShift: number): bigint {
  if (binaryShift >= 0) numerator <<= BigInt(binaryShift);
  else denominator <<= BigInt(-binaryShift);
  const quotient = numerator / denominator, remainder = numerator % denominator;
  const twiceRemainder = 2n * remainder;
  return twiceRemainder > denominator || (twiceRemainder === denominator && (quotient & 1n))
    ? quotient + 1n : quotient;
}
function absolute(value: bigint): bigint { return value < 0n ? -value : value; }
function bitLength(value: bigint): number { return value.toString(2).length; }
function represented(coefficient: bigint, gridExponent: number, negative: boolean): number {
  if (coefficient === 0n) return 0;
  // The rounded coefficient has at most 53 significant bits (a carry may
  // produce 2^53, which is also exact). The grid itself is ≥2^-1074.
  return (negative ? -1 : 1) * Number(coefficient) * 2 ** gridExponent;
}
export function asNumber(value: Dyadic): number {
  if (value.coefficient === 0n) return 0;
  const magnitude = absolute(value.coefficient);
  const leadingExponent = bitLength(magnitude) - 1 + value.exponent;
  const gridExponent = Math.max(-1074, leadingExponent - 52);
  // Subnormals must be rounded directly onto the 2^-1074 grid. Rounding
  // first to 53 bits and then scaling would cause a second rounding.
  const rounded = roundedRatio(magnitude, 1n, value.exponent - gridExponent);
  return represented(rounded, gridExponent, value.coefficient < 0n);
}
export function differenceOfProducts(a: number, b: number, c: number, d: number, multiplier = 1): Dyadic {
  const aa = dyadic(a), bb = dyadic(b), cc = dyadic(c), dd = dyadic(d);
  const first = { coefficient: aa.coefficient * bb.coefficient, exponent: aa.exponent + bb.exponent };
  const second = { coefficient: cc.coefficient * dd.coefficient * BigInt(multiplier), exponent: cc.exponent + dd.exponent };
  const exponent = Math.min(first.exponent, second.exponent);
  return { coefficient: (first.coefficient << BigInt(first.exponent - exponent))
    - (second.coefficient << BigInt(second.exponent - exponent)), exponent };
}
export function divideDyadics(numerator: Dyadic, denominator: Dyadic): number {
  if (denominator.coefficient === 0n) return NaN;
  if (numerator.coefficient === 0n) return 0;
  const n = absolute(numerator.coefficient), d = absolute(denominator.coefficient);
  let ratioLeadingExponent = bitLength(n) - bitLength(d);
  const belowPower = ratioLeadingExponent >= 0
    ? n < (d << BigInt(ratioLeadingExponent))
    : (n << BigInt(-ratioLeadingExponent)) < d;
  if (belowPower) ratioLeadingExponent -= 1;
  const exponent = numerator.exponent - denominator.exponent;
  const gridExponent = Math.max(-1074, ratioLeadingExponent + exponent - 52);
  // Round the exact rational ratio on its final grid. Neither numerator nor
  // denominator is first converted to a rounded floating-point head.
  const rounded = roundedRatio(n, d, exponent - gridExponent);
  return represented(rounded, gridExponent, (numerator.coefficient < 0n) !== (denominator.coefficient < 0n));
}
