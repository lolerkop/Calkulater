import {describe,it,expect} from 'vitest';
import {compute} from '../src/calculators/geom-parallelogram/compute';
import {definition} from '../src/calculators/geom-parallelogram/definition';
import {buildInitialValues,readValuesFromSearch} from '../src/lib/shareLink';
import {normalizeValues} from '../src/components/islands/calculator/values';
import {validateValues} from '../src/components/islands/calculator/validation';
import type {CalcFunction} from '../src/lib/types';
import oracle from '../reports/originality-final-parallelogram-range-evidence/independent-decimal2500.json';
import before from '../reports/originality-final-parallelogram-range-evidence/actual-before.json';
function quantity(text:string):number{const m=text.replace(/[\s\u00a0\u202f]/g,'').replace(',','.').match(/^[+-]?\d+(?:\.\d+)?(?:·10\^[+-]?\d+)?/);if(!m)throw Error(text);return Number(m[0].replace('·10^','e'));}
function close(text:string,expected:number){const actual=quantity(text);expect(Number.isFinite(actual)).toBe(true);expect(actual).toBeGreaterThan(0);expect(actual).toBe(expected);}
describe('Final parallelogram range amendment: independent Decimal2500 literals',()=>{
 for(const c of oracle.cases)it(c.name+': all five scaled quantities survive final conversion',()=>{
  const result=compute(c.input);close(result.primary.value,c.expectedDisplayNumeric.area);
  for(const[index,expected]of [c.expectedDisplayNumeric.perimeter,c.expectedDisplayNumeric.height,c.expectedDisplayNumeric.largeDiagonal,c.expectedDisplayNumeric.smallDiagonal].entries())close(result.secondary[index].value,expected);
 });
 for(const c of oracle.cases.slice(0,6))it(c.name+': direct scientific-string inputs preserve tiny nonzero angle',()=>{
  const result=compute({...c.input,a:String(c.input.a),b:String(c.input.b),angle:String(c.input.angle)});close(result.primary.value,c.expectedDisplayNumeric.area);close(result.secondary[3].value,c.expectedDisplayNumeric.smallDiagonal);
 });
 for(const locale of ['ru','en','uk','de','es']as const)for(const c of oracle.cases.slice(0,2))it(c.name+'/'+locale+': scientific URL restores active public inputs and finite result',()=>{
  const fields=definition.presentation.fields,query=new URLSearchParams(Object.entries(c.input).map(([k,v])=>[k,String(v)])).toString();
  const restored=readValuesFromSearch(fields,buildInitialValues(fields),query,locale);
  expect(restored.angle).toBe(Number.MIN_VALUE);expect(restored.a).toBe(c.input.a);expect(restored.b).toBe(c.input.b);
  expect(validateValues(definition.id,fields,restored,locale)).toEqual({});
  close(compute(normalizeValues(fields,restored,locale)).primary.value,c.expectedDisplayNumeric.area);
 });
 for(const c of before.ordinaryPreservationOnly)it('ordinary byte-payload retained: '+JSON.stringify(c.input),()=>expect(compute(c.input)).toEqual(c.result));
 for(const c of before.references)it('established reference retained: '+c.source.name,()=>{
  const result=compute(c.source.inputs as unknown as Parameters<CalcFunction>[0]);expect(result).toEqual(c.actual);expect(result.primary.value).toBe(c.source.expectPrimary);for(const row of c.source.expectSecondary??[])expect(result.secondary).toContainEqual(row);
 });
 for(const angle of [0,180,-Number.MIN_VALUE,true,'','bad','1e-999'])it('domain and raw invalid still rejected: '+JSON.stringify(angle),()=>expect(compute({mode:'sides',unit:'m',a:1,b:1e300,angle}).primary.value).toBe('—'));
 it('genuinely unrepresentable positive area remains an error, not falsezero',()=>{const result=compute({mode:'sides',unit:'m',a:1,b:1,angle:Number.MIN_VALUE});expect(result.primary.value).toBe('—');expect(result.secondary[0].value).toContain('числовой диапазон');});
 it('genuine full-result overflow remains an error',()=>expect(compute({mode:'sides',unit:'m',a:1e308,b:1e308,angle:Number.MIN_VALUE}).primary.value).toBe('—'));
});
