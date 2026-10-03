import { describe,it,expect } from 'vitest';
import oracle from './originalityBuildingWave16Oracle.json';
import {sqrtRatio,exact,times} from '../src/calculators/rafters/buildingWave16Numeric';
import { definition as rafters } from '../src/calculators/rafters/definition';
import { definition as roofArea } from '../src/calculators/roof-area/definition';
import { definition as roofBattens } from '../src/calculators/roof-battens/definition';
import { definition as roomVolume } from '../src/calculators/room-volume/definition';
import { definition as sealant } from '../src/calculators/sealant-volume/definition';
import { definition as skirting } from '../src/calculators/skirting/definition';
import { definition as slab } from '../src/calculators/slab-foundation/definition';
import { definition as stairs } from '../src/calculators/stairs/definition';
import { definition as strip } from '../src/calculators/strip-foundation/definition';
import { definition as tank } from '../src/calculators/tank-volume/definition';
import { definition as heating } from '../src/calculators/underfloor-heating/definition';
import { definition as wood } from '../src/calculators/wood-weight/definition';
const definitions=[rafters,roofArea,roofBattens,roomVolume,sealant,skirting,slab,stairs,strip,tank,heating,wood];
const byId=Object.fromEntries(definitions.map(d=>[d.id,d]));
function parsed(text:string):{value:number,precision:number}{
 const sci=text.match(/([+-]?\d+(?:,\d+)?)·10\^([+-]?\d+)/);
 if(sci)return {value:Number(sci[1].replace(',','.')+'e'+sci[2]),precision:Math.max(Number.MIN_VALUE,Number('1e'+(Number(sci[2])-3)))};
 const token=text.match(/^[+-]?[\d\s ]+(?:,\d+)?/)?.[0]?.trim();
 if(!token)throw new Error('numeric output '+text);
 return {value:Number(token.replace(/[\s ]/g,'').replace(',','.')),precision:10**-(token.split(',')[1]?.length??0)};
}
describe('93 independent Decimal2500 physical model fixtures, never expected from compute',()=>{
 for(const f of oracle.records)it(`${f.id}: ${f.name}`,()=>{
  const result=byId[f.id].compute(Object.fromEntries(Object.entries(f.inputs)));expect(result.primary.value).not.toBe('—');
  for(const[label,expected]of Object.entries(f.expected)){
   const text=label==='primary'?result.primary.value:result.secondary.find(r=>r.label===label)?.value;
   expect(text,label).toBeDefined();const actual=parsed(text!);
   expect(Number.isFinite(actual.value),label).toBe(true);
   expect(Math.abs(actual.value-expected),`${label}: ${text}`).toBeLessThanOrEqual(actual.precision*.501+Math.abs(expected)*1e-13);
   if(expected!==0)expect(actual.value,label).not.toBe(0);
  }
 });
});
describe('final binary-grid square-root ratios, independent literal ties-even',()=>{
 for(const[k,expected]of [[1,NaN],[3,2*Number.MIN_VALUE],[5,2*Number.MIN_VALUE],[7,4*Number.MIN_VALUE]]as const)it(`sqrt((MIN·${k}/2)^2)`,()=>{
  expect(sqrtRatio(times(exact(Number.MIN_VALUE),exact(Number.MIN_VALUE),exact(k*k)),exact(4))).toBe(expected);
 });
 it('sqrt of exact ordinary ratio9/4 is1.5',()=>expect(sqrtRatio(exact(9),exact(4))).toBe(1.5));
 it('negative and zero denominator are explicit errors',()=>{expect(sqrtRatio(exact(-1),exact(1))).toBeNaN();expect(sqrtRatio(exact(1),exact(0))).toBeNaN();});
});
