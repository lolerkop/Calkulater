import { expect, it } from 'vitest';
import { isIntegralNumberText, parseLocalizedNumber } from '../src/lib/format';
import { buildCalculatorQueryString, readValuesFromSearch } from '../src/lib/shareLink';
import { validateValues } from '../src/components/islands/calculator/validation';
import type { Field } from '../src/lib/types';

const fields:Field[]=[{name:'value',label:'Value',type:'number',defaultValue:7,min:0}];
const tiny='0.'+'0'.repeat(400)+'1';
for(const locale of ['ru','en','uk','de','es']as const){
 it(`${locale}: a nonzero underflowing decimal has a visible error, exact zero remains valid`,()=>{
  expect(parseLocalizedNumber(tiny,locale)).toBe(0);
  expect(validateValues('test',fields,{value:tiny},locale)).toHaveProperty('value');
  expect(validateValues('test',fields,{value:'0.000000'},locale)).toEqual({});
  expect(validateValues('test',fields,{value:Number.MIN_VALUE},locale)).toEqual({});
 });
 it(`${locale}: query preserves an invalid underflow instead of supplying plausible zero or default7`,()=>{
  for(const raw of [tiny,'1e-999']){
   const values=readValuesFromSearch(fields,{value:7},'?'+new URLSearchParams({value:raw}),locale);
   expect(values.value).toBe(raw);expect(validateValues('test',fields,values,locale)).toHaveProperty('value');
  }
  expect(readValuesFromSearch(fields,{value:7},'?value=0e-999',locale).value).toBe(0);
  expect(readValuesFromSearch(fields,{value:7},'?value=1e-308',locale).value).toBe(1e-308);
 });
 it(`${locale}: decimal fraction rounded onto1 retains its original query text for owned integer validation`,()=>{
  const raw='1.00000000000000001';expect(parseLocalizedNumber(raw,locale)).toBe(1);
  expect(isIntegralNumberText(raw,locale)).toBe(false);
  expect(readValuesFromSearch(fields,{value:7},'?'+new URLSearchParams({value:raw}),locale).value).toBe(raw);
  expect(isIntegralNumberText('1.00000000000000000',locale)).toBe(true);
 });
 it(`${locale}: generated links preserve rejected underflow and fractional text for honest restoration`,()=>{
  for(const raw of [tiny,'1e-999','1.00000000000000001','1.00000000000000001e0','1.00000000000000001e1']){
   const query=buildCalculatorQueryString(fields,{value:raw},locale);
   expect(new URLSearchParams(query).get('value')).toBe(raw);
   expect(readValuesFromSearch(fields,{value:7},query,locale).value).toBe(raw);
  }
 });
 it(`${locale}: exact scientific integers preserve the existing numeric query contract`,()=>{
  for(const [raw,value]of[['1.00000000000000000e0',1],['1.5e1',15],['0e-999',0],['1e3',1000]]as const)
   expect(readValuesFromSearch(fields,{value:7},'?'+new URLSearchParams({value:raw}),locale).value).toBe(value);
 });
}
for(const[text,locale,expected]of[
 ['1,234','en',true],['1,234','ru',false],['1,234.000','en',true],
 ['1.234,000','de',true],['1 234,001','uk',false],['-0.000','es',true],
 ['+001.000','ru',true],['1.00000000000000001','en',false],['1e3','en',null],['1 23','en',null],
]as const)it(`accepted grammar distinguishes exact integer ${text}/${locale}`,()=>expect(isIntegralNumberText(text,locale)).toBe(expected));
