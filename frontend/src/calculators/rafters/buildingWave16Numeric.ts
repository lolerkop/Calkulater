import { fmtNumber, isIntegralNumberText } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
import { add, exact, negative, ratio, read, times, type Dyadic } from '../../lib/platform/geometryNumericInput';
export { add, exact, negative, read, times, type Dyadic };
export const INPUT = 'Введите конечные числа во все активные поля';
export const MODE = 'Выберите поддерживаемый режим расчёта';
export const RANGE = 'Результат выходит за числовой диапазон; измените данные';
export const INTEGER = 'Введите целые числа в допустимом диапазоне';
export const finite = (...xs: number[]): boolean => xs.every(Number.isFinite);
export const mode = (raw: unknown, fallback: string, allowed: readonly string[]): string | null => {
  const value = raw === undefined ? fallback : raw;
  return typeof value === 'string' && allowed.includes(value) ? value : null;
};
export function integer(raw: unknown): number {
  const n = read(raw);
  if (!Number.isSafeInteger(n)) return NaN;
  if (typeof raw !== 'string') return n;
  const m = raw.trim().match(/^[+-]?(\d*)(?:[.,](\d*))?[eE]([+-]?\d+)$/);
  if (m) {
    const coefficient = m[1] + (m[2] ?? '');
    const places = (m[2]?.length ?? 0) - Number(m[3]);
    return places > 0 && /[1-9]/.test(coefficient.slice(-places)) ? NaN : n;
  }
  return isIntegralNumberText(raw) !== false ? n : NaN;
}
/** Complete dyadic products/ratios round once; genuine zero remains zero. */
export function evaluated(n: Dyadic, d: Dyadic = exact(1)): number {
  const x = ratio(n, d);
  return x === 0 && n.coefficient !== 0n ? NaN : x;
}
export const mul = (...xs: number[]): number => finite(...xs) ? evaluated(times(...xs.map(exact))) : NaN;
export const plus = (...xs: number[]): number => finite(...xs) ? evaluated(add(...xs.map(exact))) : NaN;
export const minus = (a: number, b: number): number => finite(a,b) ? evaluated(add(exact(a), negative(exact(b)))) : NaN;
export const quotient = (n: readonly number[], d: readonly number[]): number => finite(...n,...d) ? evaluated(times(...n.map(exact)), times(...d.map(exact))) : NaN;
export const quantity = (x: number): string => formatQuantity(x, fmtNumber);
export const scalar = (x: number, digits = 2): string => x !== 0 && (Math.abs(x) < 10 ** -digits || Math.abs(x) >= 1e12) ? quantity(x) : fmtNumber(x, digits);
/** Purchase counts use exact rational arithmetic on the shortest decimal representation of parsed finite numbers.
 * This preserves decimal stock sizes (2.5 × 1.2 = 3) without deleting a real positive remainder.
 * It does not claim to recover digits already rounded while parsing a measurement. */
export type Decimal = { n: bigint; d: bigint };
export function decimal(x: number): Decimal {
  if (!Number.isFinite(x)) throw new RangeError('finite decimal required');
  const [head, exponent = '0'] = x.toString().split('e');
  const places = (head.split('.')[1]?.length ?? 0) - Number(exponent);
  const n = BigInt(head.replace('.', ''));
  return places > 0 ? { n, d: 10n ** BigInt(places) } : { n: n * 10n ** BigInt(-places), d: 1n };
}
export const dmul = (...xs: Decimal[]): Decimal => xs.reduce((a,b)=>({n:a.n*b.n,d:a.d*b.d}),{n:1n,d:1n});
export const dadd = (a: Decimal,b: Decimal): Decimal => ({n:a.n*b.d+b.n*a.d,d:a.d*b.d});
export const dproduct = (...xs: number[]): Decimal => dmul(...xs.map(decimal));
export function ceilDecimal(n: Decimal, d: Decimal = decimal(1)): number {
  const top=n.n*d.d, bottom=n.d*d.n;
  if(top <= 0n || bottom <= 0n) return NaN;
  const result=(top+bottom-1n)/bottom;
  return result <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(result) : NaN;
}
export const reserveDecimal = (n: Decimal, pct: number): Decimal => dmul(n,dadd(decimal(100),decimal(pct)),{n:1n,d:100n});
export const reserve = (n: Dyadic, pct: number): number => evaluated(times(n,add(exact(100),exact(pct))),exact(100));

export const measure = (x: number): string => x !== 0 && (Math.abs(x) < 1e-6 || Math.abs(x) >= 1e12) ? formatQuantity(x,fmtNumber) : formatMeasure(x,fmtNumber);

export const dnegative = (x:Decimal):Decimal => ({n:-x.n,d:x.d});
export const dminus = (a:Decimal,b:Decimal):Decimal => dadd(a,dnegative(b));
export const ddivide = (a:Decimal,b:Decimal):Decimal => ({n:a.n*b.d,d:a.d*b.n});
export function floorDecimal(n:Decimal,d:Decimal=decimal(1)):number {
 const top=n.n*d.d,bottom=n.d*d.n;
 if(top<0n||bottom<=0n)return NaN;
 const result=top/bottom;
 return result<=BigInt(Number.MAX_SAFE_INTEGER)?Number(result):NaN;
}
export const reserveOnly = (n:Dyadic,pct:number):number => evaluated(times(n,exact(pct)),exact(100));
/** sqrt(n/d) rounds once on the final binary grid; no subnormal intermediate ratio. */
export function sqrtRatio(numerator:Dyadic,denominator:Dyadic):number {
 if(numerator.coefficient<0n||denominator.coefficient<=0n)return NaN;
 if(!numerator.coefficient)return 0;
 const bits=(n:bigint)=>n.toString(2).length;
 const isqrt=(n:bigint):bigint=>{if(n<2n)return n;let q=1n<<BigInt(Math.ceil(bits(n)/2));for(;;){const next=(q+n/q)>>1n;if(next>=q)return q;q=next;}};
 let n=numerator.coefficient,d=denominator.coefficient,leading=bits(n)-bits(d);
 if(leading>=0?n<(d<<BigInt(leading)):(n<<BigInt(-leading))<d)leading--;
 const grid=Math.max(-1074,Math.floor((leading+numerator.exponent-denominator.exponent)/2)-52);
 const shift=numerator.exponent-denominator.exponent-2*grid;
 if(shift>=0)n<<=BigInt(shift);else d<<=BigInt(-shift);
 let q=isqrt(n/d);const midpoint=d*(2n*q+1n)**2n;
 if(4n*n>midpoint||(4n*n===midpoint&&(q&1n)!==0n))q++;
 const value=Number(q)*2**grid;
 return value===0?NaN:value;
}
/** atan(y/x) in degrees: for a positive ratio below 1e-8 the relative
 * atan correction is < 3.4e-17. Evaluate the complete linear ratio there
 * so an intermediate atan2 underflow cannot erase a representable angle. */
export const angleDegrees=(y:number,x:number):number=>y/x<1e-8?quotient([y,180],[x,Math.PI]):Math.atan2(y,x)*180/Math.PI;
