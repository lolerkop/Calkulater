import { ratio } from '../../lib/platform/geometryNumericInput';
// Storage inputs are decimal quantities. Use the round-trip decimal spelling of
// each parsed finite Number; byte prefixes are exact integers. No near-integer tolerance.
export type Fraction = { n: bigint; d: bigint };
export function decimal(value: number): Fraction {
 const [mantissa,power='0'] = value.toString().split('e');
 const [whole,fraction=''] = mantissa.split('.');
 const exponent = Number(power) - fraction.length;
 const n = BigInt(whole + fraction);
 return exponent >= 0 ? {n:n * 10n ** BigInt(exponent),d:1n} : {n,d:10n ** BigInt(-exponent)};
}
export const mul = (a:Fraction,b:Fraction):Fraction => ({n:a.n*b.n,d:a.d*b.d});
export const sub = (a:Fraction,b:Fraction):Fraction => ({n:a.n*b.d-b.n*a.d,d:a.d*b.d});
export const quotient = (a:Fraction,b:Fraction):Fraction => ({n:a.n*b.d,d:a.d*b.n});
export const finite = (a:Fraction):number => ratio({coefficient:a.n,exponent:0},{coefficient:a.d,exponent:0});
