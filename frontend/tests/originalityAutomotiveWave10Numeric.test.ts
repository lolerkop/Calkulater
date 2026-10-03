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
describe('independent arithmetic and recoverable numerical boundaries',()=>{
 const fixed:[string,Record<string,any>,string][]=[
 ['car-depreciation',{price:1000,years:3,ratePct:10,firstYearPct:20},'648,00 ₽'],
 ['compression-ratio',{displacement:400,chamber:50},'9'],
 ['engine-displacement',{bore:100,stroke:100,cylinders:1},'785,4 см³'],
 ['fuel-consumption',{mode:'measure',litres:40,distance:500},'8,00 л/100 км'],
 ['fuel-consumption',{mode:'kml',litres:40,distance:500},'12,50 км/л'],
 ['fuel-consumption',{mode:'need',distance:500,consumption:8},'40,00 л'],
 ['fuel-oil-mix',{fuel:1,ratio:50},'20 мл'],
 ['power-to-weight',{power:100,powerUnit:'kw',mass:1000,payload:0},'100,00 кВт/т'],
 ['speed-distance-time',{mode:'distance',speed:60,time:1.5},'90,00 км'],
 ['speed-distance-time',{mode:'time',distance:120,speed:60},'2,0000 ч'],
 ['tire-size',{width:200,profile:50,diameter:10},'454 мм'],
 ['trip-cost',{distance:100,consumption:10,fuelPrice:2,tolls:5,passengers:5,roundTrip:'yes'},'45,00 ₽'],
 ['wheel-offset',{width:8,offset:0,newOffset:10},'114,3 мм'],
 ['fuel-consumption',{mode:'need',distance:Number.MIN_VALUE,consumption:100},'4,941·10^-324 л'],
 ['fuel-oil-mix',{fuel:1e307,ratio:100},'1,000·10^308 мл'],
 ['fuel-oil-mix',{fuel:Number.MIN_VALUE,ratio:100},'4,941·10^-323 мл'],
 ['power-to-weight',{power:1e308,powerUnit:'ps',mass:1e308,payload:0},'735,50 кВт/т'],
 ];
 for(const [id,inputs,expected] of fixed) it(`${id} independently fixed ${JSON.stringify(inputs)}`,()=>expect(run(id,inputs).primary.value).toBe(expected));
 it('round-trip tolls are added once and shared across five people',()=>expect(row(run('trip-cost',{distance:100,consumption:10,fuelPrice:2,tolls:5,passengers:5,roundTrip:'yes'}),'На человека')).toBe('9,00 ₽'));
 it('rounded minutes carry to the next hour',()=>expect(row(run('speed-distance-time',{mode:'time',distance:1.999,speed:1}),'Время в пути')).toBe('2 ч 0 мин'));
 it('tiny positive loss cannot become an exact no-loss row',()=>expect(row(run('car-depreciation',{price:1,years:1,ratePct:0,firstYearPct:1e-20}),'Потеряно в деньгах')).toBe('1,000·10^-22 ₽'));
 const errors:[string,Record<string,any>][]=[
 ['compression-ratio',{displacement:1e308,chamber:1e308}],
 ['engine-displacement',{bore:1e308,stroke:1e308,cylinders:1}],
 ['fuel-consumption',{mode:'need',distance:Number.MIN_VALUE,consumption:1}],
 ['fuel-oil-mix',{fuel:1e308,ratio:20}],
 ['power-to-weight',{power:Number.MIN_VALUE,powerUnit:'ps',mass:1e308,payload:0}],
 ['quarter-mile-elapsed-time',{power:1e308,mass:Number.MIN_VALUE}],
 ['speed-distance-time',{mode:'distance',speed:Number.MIN_VALUE,time:.1}],
 ['stopping-distance',{speed:Number.MIN_VALUE,reaction:0,mu:.7,grade:0}],
 ['tire-size',{width:Number.MIN_VALUE,profile:1,diameter:Number.MIN_VALUE}],
 ['trip-cost',{distance:Number.MIN_VALUE,consumption:1,fuelPrice:1,passengers:1,roundTrip:'no'}],
 ['wheel-offset',{width:1e308,offset:0,newOffset:0}],
 ['car-depreciation',{price:Number.MIN_VALUE,years:1,ratePct:0,firstYearPct:90}],
 ];
 for(const [id,inputs] of errors) it(`${id} fails closed for unrepresentable nonzero output`,()=>{const r=run(id,inputs);expect(r.primary.value).toBe('—');expect(JSON.stringify(r)).not.toMatch(/Infinity|NaN/);expect(r.secondary?.[0].accent).toBe('red');});
 for(const [mode,inputs] of [['speed',{distance:0,time:1}],['distance',{speed:0,time:1}],['distance',{speed:1,time:0}],['time',{distance:0,speed:1}]] as const)
  it(`speed model exact zero ${mode} ${JSON.stringify(inputs)} is meaningful`,()=>expect(run('speed-distance-time',{mode,...inputs}).primary.value).not.toBe('—'));
});

import independent from './originalityAutomotiveWave10Oracle.json';
import {cubeRootRatio, exact, times} from '../src/calculators/engine-displacement/automotiveNumeric';
describe('60 independent Decimal80 fixtures for all twelve models',()=>{
 for(const fixture of independent.fixtures) it(`${fixture.id}: ${fixture.formula} ${JSON.stringify(fixture.inputs)}`,()=>{
  const text=run(fixture.id,fixture.inputs).primary.value;expect(text).not.toBe('—');
  const token=text.match(/^[+−-]?[\d\u00a0\u202f ]+(?:,\d+)?(?:·10\^[+−-]?\d+)?/)![0].trim();
  const parts=token.split('·10^');const observed=Number(parts[0].replace(/[\s\u00a0\u202f]/g,'').replace(',','.'))*(parts.length===2?10**Number(parts[1]):1);
  const expected=Number(fixture.expectedDecimal80);const decimals=parts[0].split(',')[1]?.length??0;
  const displayHalfUnit=parts.length===2?Math.abs(expected)*.00051:.500001*10**-decimals;
  expect(Math.abs(observed-expected)).toBeLessThanOrEqual(displayHalfUnit+Math.abs(expected)*1e-14);
 });
});
describe('cube root keeps a representable answer outside an intermediate ratio range',()=>{
 for(const value of [1e-300,1e-200,1e200,1e300]) it(`independent cube identity ${value}`,()=>{
  const answer=cubeRootRatio(times(exact(value),exact(value),exact(value)),exact(1));
  expect(answer/value).toBeCloseTo(1,13);
 });
});

describe('independent Decimal110 peer subnormal-ratio regression',()=>{
 it('quarter mile does not cube-root an already rounded subnormal ratio',()=>{
  // Peer oracle operates on exact binary inputs at Decimal110 precision.
  // Exact speed mph3.873507824681670e−106; km/h6.233806576604498e−106.
  const result=run('quarter-mile-elapsed-time',{power:1e-300,mass:1e23});
  expect(result.primary.value).toBe('3,519·10^108 с');
  expect(row(result,'Скорость на финише в милях в час')).toBe('3,874·10^-106 миль/ч');
  expect(row(result,'Скорость на финише')).toBe('6,234·10^-106 км/ч');
  // Analytic invariant of this declared preset, allowing shown3digit rounding.
  const observed=(text:string)=>Number(text.split(' ')[0].replace(',','.').replace('·10^','e'));
  expect(Math.abs((observed(result.primary.value)*observed(row(result,'Скорость на финише в милях в час') as string))/1363.05-1)).toBeLessThan(.001);
 });
 it('private cube ratio rescales a finite rounded subnormal root at the final step',()=>{
  const numerator=times(exact(Number.MIN_VALUE),exact(Number.MIN_VALUE),exact(Number.MIN_VALUE));
  expect(cubeRootRatio(numerator,exact(2))).toBe(Number.MIN_VALUE);
 });
});

describe('independent recoverable complete products from baseline probes',()=>{
 it('engine bore squared overflow is avoidable in the complete volume',()=>expect(run('engine-displacement',{bore:1e150,stroke:1e-150,cylinders:4}).primary.value).toBe('3,142·10^147 см³'));
 it('large braking square cancels the large model deceleration',()=>expect(run('stopping-distance',{speed:1e200,reaction:0,mu:1e200,grade:0}).primary.value).toBe('3,934·10^197 м'));
 it('large tire profile product is divided before the final rounded geometry',()=>expect(run('tire-size',{width:1e307,profile:10,diameter:1}).primary.value).toBe('2,000·10^306 мм'));
});
