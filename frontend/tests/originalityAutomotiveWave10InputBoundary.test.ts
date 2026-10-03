import { describe, expect, it } from 'vitest';
import { definition as car } from '../src/calculators/car-depreciation/definition';
import { definition as engine } from '../src/calculators/engine-displacement/definition';
import { definition as trip } from '../src/calculators/trip-cost/definition';
import { definition as fuel } from '../src/calculators/fuel-consumption/definition';
import { definition as speed } from '../src/calculators/speed-distance-time/definition';
import { automotiveMessages } from '../src/calculators/engine-displacement/automotiveMessages';
import { validateValues } from '../src/components/islands/calculator/validation';
import { parseLocalizedNumber } from '../src/lib/format';
import { readValuesFromSearch, buildCalculatorQueryString } from '../src/lib/shareLink';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import type { CalculatorDefinitionV2, CalculatorFormValues } from '../src/lib/platform/types';
const locales=['ru','en','uk','de','es'] as const;
const defaults=(d:CalculatorDefinitionV2):CalculatorFormValues=>Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue??'']));
const errors=(d:CalculatorDefinitionV2,v:CalculatorFormValues,locale:typeof locales[number])=>validateValues(d.id,d.presentation.fields,v,locale,{compute:d.compute,validate:d.validate});
const own=(d:CalculatorDefinitionV2,v:CalculatorFormValues,locale:typeof locales[number])=>d.validate!({values:v,fields:d.presentation.fields,locale,parseNumber:text=>parseLocalizedNumber(text,locale)});
const INTEGER='Введите целые числа в допустимом диапазоне';
for(const locale of locales) for(const [tool,field] of [[car,'years'],[engine,'cylinders'],[trip,'passengers']] as const){
 const native=locale==='ru'?INTEGER:automotiveMessages[locale][INTEGER];const point=locale==='en'?'.':',';
 it(`${tool.id}/${locale}/${field} rejects original fractional text and preserves shared query`,()=>{
  const state={...defaults(tool),[field]:`3${point}00000000000000001`};expect(errors(tool,state,locale)[field]).toBe(native);
  const query=buildCalculatorQueryString(tool.presentation.fields,state,locale);const restored=readValuesFromSearch(tool.presentation.fields,defaults(tool),query,locale);
  expect(restored[field]).toBe(state[field]);expect(errors(tool,restored,locale)[field]).toBe(native);
 });
 it(`${tool.id}/${locale}/${field} allows zero fractional tail but no unsafe integers`,()=>{
  expect(own(tool,{...defaults(tool),[field]:`3${point}00000000000000000`},locale)).toEqual({});
  expect(own(tool,{...defaults(tool),[field]:`9007199254740991${point}1`},locale)[field]).toBe(native);
 });
 it(`${tool.id}/${locale}/${field} retains near-integer scientific query rather than rounding`,()=>{
  const raw='3.00000000000000001e0';const v=readValuesFromSearch(tool.presentation.fields,defaults(tool),`?${new URLSearchParams({[field]:raw})}`,locale);expect(v[field]).toBe(raw);expect(errors(tool,v,locale)[field]).toBeTruthy();
 });
 it(`${tool.id}/${locale}/${field} does not turn boolean or malformed data into integer`,()=>{
  for(const value of [false,true,'bad'])expect(errors(tool,{...defaults(tool),[field]:value},locale)[field]).toBeTruthy();
  expect(own(tool,{...defaults(tool),[field]:'-'},locale)).toEqual({});
 });
}
describe('real owned visibility also controls validation and share state',()=>{
 for(const locale of locales) for(const [mode,active] of [['measure',['litres','distance']],['kml',['litres','distance']],['need',['distance','consumption']]] as const)
  it(`fuel/${locale}/${mode} only activates required numeric fields`,()=>{
   const v={...defaults(fuel),mode};expect(fuel.presentation.fields.filter(f=>f.type==='number'&&isFieldVisible(f,v)).map(f=>f.name).sort()).toEqual([...active].sort());
   for(const f of active)expect(errors(fuel,{...v,[f]:'bad'},locale)[f]).toBeTruthy();
   const ignored=mode==='need'?'litres':'consumption';expect(errors(fuel,{...v,[ignored]:'bad'},locale)[ignored]).toBeUndefined();
  });
 for(const locale of locales) for(const [mode,active] of [['speed',['distance','time']],['distance',['time','speed']],['time',['distance','speed']]] as const)
  it(`speed/${locale}/${mode} does not expose a stale computed input`,()=>{
   const v={...defaults(speed),mode};expect(speed.presentation.fields.filter(f=>f.type==='number'&&isFieldVisible(f,v)).map(f=>f.name).sort()).toEqual([...active].sort());
   const ignored=mode==='speed'?'speed':mode==='distance'?'distance':'time';const query=buildCalculatorQueryString(speed.presentation.fields,{...v,[ignored]:'bad'},locale);expect(new URLSearchParams(query).has(ignored)).toBe(false);expect(errors(speed,{...v,[ignored]:'bad'},locale)[ignored]).toBeUndefined();
  });
});

describe('car fractional rates below100 stay reachable with exact strict endpoint',()=>{
 for(const locale of locales) for(const field of ['ratePct','firstYearPct']) {
  it(`car/${locale}/${field} accepts99.5 and rejects100`,()=>{
   const point=locale==='en'?'.':',';const state={...defaults(car),[field]:`99${point}5`};
   expect(errors(car,state,locale)).toEqual({});expect(car.compute({...defaults(car),[field]:99.5}).primary.value).not.toBe('—');
   expect(car.presentation.fields.find(f=>f.name===field)?.max).toBeUndefined();
   expect(car.compute({...defaults(car),[field]:100}).primary.value).toBe('—');
   const boundary=errors(car,{...defaults(car),[field]:100},locale)[field];expect(boundary).toContain('100');expect(boundary).toBeTruthy();
  });
 }
});
