import { isIntegralNumberText } from '../lib/format';
import { readScalar } from '../lib/platform/scaledPositiveRatio';
export { readScalar, positiveRatio } from '../lib/platform/scaledPositiveRatio';
function integralText(value:string|number):boolean {
 if(typeof value==='number')return Number.isInteger(value);
 const match=value.trim().match(/^[+-]?(\d*)(?:[.,](\d*))?[eE]([+-]?\d+)$/);
 if(!match)return isIntegralNumberText(value)!==false;
 const digits=match[1]+(match[2]??''),removed=(match[2]?.length??0)-Number(match[3]);
 return removed<=0 || (removed>=digits.length ? !/[1-9]/.test(digits) : !/[1-9]/.test(digits.slice(-removed)));
}
export function whole(value: unknown): number {
 const n=readScalar(value);
 return Number.isSafeInteger(n) && (typeof value==='number'||typeof value==='string') && integralText(value) ? n : NaN;
}
export function option(value: unknown, fallback: string, allowed: readonly string[]): string | null {
 const v=value===undefined?fallback:value;
 return typeof v==='string'&&allowed.includes(v)?v:null;
}
export const finitePositive=(n:number)=>Number.isFinite(n)&&n>0;
