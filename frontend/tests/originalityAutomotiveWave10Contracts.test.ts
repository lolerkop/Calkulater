import { definition as d0 } from '../src/calculators/car-depreciation/definition';
import { definition as d1 } from '../src/calculators/compression-ratio/definition';
import { definition as d2 } from '../src/calculators/engine-displacement/definition';
import { definition as d3 } from '../src/calculators/fuel-consumption/definition';
import { definition as d4 } from '../src/calculators/fuel-oil-mix/definition';
import { definition as d5 } from '../src/calculators/power-to-weight/definition';
import { definition as d6 } from '../src/calculators/quarter-mile-elapsed-time/definition';
import { definition as d7 } from '../src/calculators/speed-distance-time/definition';
import { definition as d8 } from '../src/calculators/stopping-distance/definition';
import { definition as d9 } from '../src/calculators/tire-size/definition';
import { definition as d10 } from '../src/calculators/trip-cost/definition';
import { definition as d11 } from '../src/calculators/wheel-offset/definition';
import { describe, expect, it } from 'vitest';
import historical from './originalityAutomotiveWave10References.json';
const definitions=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11 ];
const byId=Object.fromEntries(definitions.map(d=>[d.id,d]));
const bases:Record<string,Record<string,any>>={"car-depreciation": {"price": 2400000, "years": 4, "ratePct": 12, "firstYearPct": 20}, "compression-ratio": {"displacement": 454.17, "chamber": 45}, "engine-displacement": {"bore": 82, "stroke": 86, "cylinders": 4}, "fuel-consumption": {"mode": "measure", "litres": 42, "distance": 560, "consumption": 7.5}, "fuel-oil-mix": {"fuel": 5, "ratio": 50}, "power-to-weight": {"power": 150, "powerUnit": "ps", "mass": 1400, "payload": 0}, "quarter-mile-elapsed-time": {"power": 150, "mass": 1300}, "speed-distance-time": {"mode": "speed", "distance": 420, "time": 5, "speed": 84}, "stopping-distance": {"speed": 90, "reaction": 1, "mu": 0.7, "grade": 0}, "tire-size": {"width": 205, "profile": 55, "diameter": 16}, "trip-cost": {"distance": 800, "consumption": 7.5, "fuelPrice": 62, "tolls": 0, "passengers": 1, "roundTrip": "no"}, "wheel-offset": {"width": 7, "offset": 35, "newOffset": 45}};
const run=(id:string,input:Record<string,any>)=>byId[id].compute(input);
const row=(r:ReturnType<typeof run>,label:string)=>r.secondary?.find(x=>x.label===label)?.value;
describe('all 62 unchanged historical numbers and explicit stopping-error clarification',()=>{
 for (const f of historical) it(`${f.id}: ${f.name}`,()=>{ const expected=structuredClone(f.expected); if(f.id==='stopping-distance'&&f.inputs.grade===-40) expected.secondary[0].value='В модели требуется положительное μ + уклон/100'; expect(run(f.id,f.inputs)).toEqual(expected); });
});
describe('strict active inputs',()=>{
 for(const [id,input] of Object.entries(bases)) for(const [field,original] of Object.entries(input)){
  if(['mode','powerUnit','roundTrip'].includes(field)) continue;
  if(id==='fuel-consumption'&&field==='consumption'||id==='speed-distance-time'&&field==='speed') continue;
  for(const bad of ['',false,true,null,NaN,Infinity,'malformed','1e-9999']) it(`${id}.${field} rejects ${String(bad)}`,()=>expect(run(id,{...input,[field]:bad}).primary.value).toBe('—'));
 }
 for(const [id,field] of [['fuel-consumption','mode'],['speed-distance-time','mode'],['power-to-weight','powerUnit'],['trip-cost','roundTrip']])
  for(const bad of ['unknown','',false,1,null]) it(`${id}.${field} rejects invalid mode ${String(bad)}`,()=>expect(run(id,{...bases[id],[field]:bad}).primary.value).toBe('—'));
 for(const [id,field] of [['car-depreciation','years'],['engine-displacement','cylinders'],['trip-cost','passengers']])
  for(const bad of [2.5,'3.00000000000000001','3.00000000000000001e0',Number.MAX_SAFE_INTEGER+1]) it(`${id}.${field} does not round fractional or unsafe integer ${bad}`,()=>expect(run(id,{...bases[id],[field]:bad}).primary.value).toBe('—'));
 it('years 31 is outside the public bounded model',()=>expect(run('car-depreciation',{...bases['car-depreciation'],years:31}).primary.value).toBe('—'));
 it('zero years preserves price and exact zero loss',()=>{const r=run('car-depreciation',{price:100,years:0,ratePct:0,firstYearPct:0});expect(r.primary.value).toBe('100,00 ₽');expect(row(r,'Потеряно в деньгах')).toBe('0,00 ₽');});
 it('zero rates are a valid conditional no-loss model',()=>expect(run('car-depreciation',{price:100,years:30,ratePct:0,firstYearPct:0}).primary.value).toBe('100,00 ₽'));
 it('fractional head count is not rounded',()=>expect(run('trip-cost',{...bases['trip-cost'],passengers:1.5}).primary.value).toBe('—'));
 it('valid negative offsets remain supported',()=>expect(run('wheel-offset',{width:7,offset:-10,newOffset:-20}).primary.value).toBe('91,6 мм'));
 it('negative nominal backspacing is a model error',()=>expect(run('wheel-offset',{width:7,offset:-200,newOffset:35}).primary.value).toBe('—'));
 for(const field of ['offset','newOffset']) it(`signed zero ${field} is valid`,()=>expect(run('wheel-offset',{...bases['wheel-offset'],[field]:0}).primary.value).not.toBe('—'));
 it('exactly zero reaction distance remains valid',()=>expect(row(run('stopping-distance',{...bases['stopping-distance'],reaction:0}),'Путь за время реакции')).toBe('0 м'));
 for(const mu of [.7,1]) it(`zero effective deceleration ${mu} is invalid`,()=>expect(run('stopping-distance',{speed:90,reaction:1,mu,grade:-100*mu}).primary.value).toBe('—'));
 it('inactive fuel consumption cannot invalidate measured consumption',()=>expect(run('fuel-consumption',{mode:'measure',litres:42,distance:560,consumption:false}).primary.value).toBe('7,50 л/100 км'));
 it('inactive litres cannot invalidate fuel requirement',()=>expect(run('fuel-consumption',{mode:'need',distance:100,consumption:7.5,litres:false}).primary.value).toBe('7,50 л'));
 for(const [mode,ignored,inputs,expected] of [['speed','speed',{distance:420,time:5},'84,00 км/ч'],['distance','distance',{speed:84,time:5},'420,00 км'],['time','time',{distance:420,speed:84},'5,0000 ч']] as const)
  it(`computed ${ignored} is not an active ${mode} input`,()=>expect(run('speed-distance-time',{mode,...inputs,[ignored]:false}).primary.value).toBe(expected));
 it('fuel kml requires a visible litres input',()=>expect(d3.presentation.fields.find(f=>f.name==='litres')?.showIf).toEqual({field:'mode',oneOf:['measure','kml']}));
 it('all three computed speed values use static visibility',()=>{for(const [name,modes] of [['distance',['speed','time']],['time',['speed','distance']],['speed',['distance','time']]])expect(d7.presentation.fields.find(f=>f.name===name)?.showIf).toEqual({field:'mode',oneOf:modes});expect(d7.contextualField).toBeUndefined();});
});
