import { describe, expect, it } from 'vitest';
import { definition as charge } from '../src/calculators/battery-charge-time/definition';
import { definition as run } from '../src/calculators/battery-runtime/definition';
import { definition as pack } from '../src/calculators/battery-series-parallel/definition';
import { definition as resistor } from '../src/calculators/resistor-network/definition';
import { definition as capNet } from '../src/calculators/capacitor-network/definition';
import { definition as cap } from '../src/calculators/capacitor-basics/definition';
import { definition as kva } from '../src/calculators/kva-kw/definition';
import { definition as single } from '../src/calculators/single-phase/definition';
import { localization as chargeLoc } from '../src/calculators/battery-charge-time/localization';
import { localization as runLoc } from '../src/calculators/battery-runtime/localization';
import { localization as packLoc } from '../src/calculators/battery-series-parallel/localization';
import { localization as resistorLoc } from '../src/calculators/resistor-network/localization';
import { localization as capNetLoc } from '../src/calculators/capacitor-network/localization';
import { localization as capLoc } from '../src/calculators/capacitor-basics/localization';
import { localization as kvaLoc } from '../src/calculators/kva-kw/localization';
import { localization as singleLoc } from '../src/calculators/single-phase/localization';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { getElectronicsWave7MethodSources } from '../src/data/electronicsWave7MethodSources';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import type { CalcFunction, CalcResult } from '../src/lib/types';

const tools=[charge,run,pack,resistor,capNet,cap,kva,single];
const locs=[chargeLoc,runLoc,packLoc,resistorLoc,capNetLoc,capLoc,kvaLoc,singleLoc];
const locales=['ru','en','uk','de','es'] as const;
type Inputs=Parameters<CalcFunction>[0];
const row=(r:CalcResult,label:string)=>r.secondary.find(x=>x.label===label)?.value ?? '';
const numeric=(s:string)=>{
 const t=s.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const scientific=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);
 return scientific?Number(scientific[1])*10**Number(scientific[2]):parseFloat(t);
};
const error=(r:CalcResult)=>{expect(r.primary.value).toBe('—');expect(typeof r.primary.label).toBe('string');expect(r.secondary[0].accent).toBe('red');};
const close=(value:string,n:number,tolerance=0.00055)=>{
 const actual=numeric(value);expect(Number.isFinite(actual)).toBe(true);
 if(n===0)expect(actual).toBe(0);else expect(Math.abs(actual/n-1)).toBeLessThan(tolerance);
};
// Independently derived charge/energy balances, harmonic sums and RMS identities.
const cases:{tool:number,inputs:Inputs,active:string[],inactive?:string[],primary?:number,secondary?:[string,number][]}[]=[
 {tool:0,inputs:{capacityAh:50,currentA:10,efficiency:100},active:['capacityAh','currentA','efficiency'],secondary:[['В часах',5],['Отдано зарядным устройством',50]]},
 {tool:1,inputs:{capacity:100,voltage:12,load:200,dod:80,efficiency:90},active:['capacity','voltage','load','dod','efficiency'],primary:4.32,secondary:[['Полезная энергия',864],['Полная энергия батареи',1200]]},
 {tool:2,inputs:{cells:12,cellVoltage:3.7,cellCapacity:3.4,series:3,parallel:4},active:['cells','cellVoltage','cellCapacity','series','parallel'],primary:11.1,secondary:[['Ёмкость сборки',13.6],['Энергия',150.96]]},
 {tool:3,inputs:{mode:'series',resistances:'470 470'},active:['resistances'],primary:940},
 {tool:3,inputs:{mode:'parallel',resistances:'100 220 330'},active:['resistances'],primary:1650/29},
 {tool:4,inputs:{mode:'series',capacitances:'100 220'},active:['capacitances'],primary:68.75},
 {tool:4,inputs:{mode:'parallel',capacitances:'100 220'},active:['capacitances'],primary:320},
 {tool:5,inputs:{mode:'charge',c:100,v:-12},active:['c','v'],inactive:['q'],primary:-1200,secondary:[['Энергия поля',0.0072]]},
 {tool:5,inputs:{mode:'voltage',c:100,q:-1200},active:['c','q'],inactive:['v'],primary:-12,secondary:[['Энергия поля',0.0072]]},
 {tool:5,inputs:{mode:'capacitance',v:-12,q:-1200},active:['v','q'],inactive:['c'],primary:100,secondary:[['Энергия поля',0.0072]]},
 {tool:6,inputs:{mode:'kw',kva:5,pf:.8},active:['kva','pf'],inactive:['kw'],primary:4,secondary:[['Реактивная мощность',3]]},
 {tool:6,inputs:{mode:'kva',kw:10,pf:.8},active:['kw','pf'],inactive:['kva'],primary:12.5,secondary:[['Реактивная мощность',7.5]]},
 {tool:7,inputs:{mode:'P',voltage:230,current:8,powerFactor:.9},active:['voltage','current','powerFactor'],inactive:['power'],primary:1656,secondary:[['Полная мощность',1840],['Реактивная мощность',802.0374056119834]]},
 {tool:7,inputs:{mode:'current',voltage:230,power:1656,powerFactor:.9},active:['voltage','power','powerFactor'],inactive:['current'],primary:8,secondary:[['Полная мощность',1840],['Реактивная мощность',802.0374056119834]]},
];

describe('electronics wave7 independent contracts',()=>{
 for(const tool of tools)for(const r of tool.referenceCases??[])it(`${tool.id}: preserved ${r.name}`,()=>{
  const result=tool.compute(r.inputs);expect(result.primary.value).toBe(r.expectPrimary);
  for(const expected of r.expectSecondary??[])expect(row(result,expected.label)).toBe(expected.value);
 });
 for(const tool of tools)it(`${tool.id}: published example kept`,()=>{
  const result=tool.compute(tool.publishedExample!.inputs);
  for(const expected of tool.publishedExample!.expected)expect(JSON.stringify(result).replace(/[\u00a0\u202f]/g,' ')).toContain(expected.replace(/[\u00a0\u202f]/g,' '));
 });
 for(const c of cases){
  it(`${tools[c.tool].id}/${c.inputs.mode??'single'}: independent ordinary identity`,()=>{
   const result=tools[c.tool].compute(c.inputs);expect(result.primary.value).not.toBe('—');
   if(c.primary!==undefined)close(result.primary.value,c.primary);
   for(const [label,n]of c.secondary??[])close(row(result,label),n);
  });
  for(const name of c.active)it(`${tools[c.tool].id}/${c.inputs.mode??'single'}: strict ${name}`,()=>{
   const bad:unknown[]=[undefined,null,true,false,'',' ','NaN','Infinity',NaN,Infinity,-Infinity,'1 23','2A','0x10','1e-999'];
   for(const value of bad){
    // Lists interpret spaces as element separators; numeric/list grammars differ.
    if((name==='resistances'||name==='capacitances')&&value==='1 23')continue;
    error(tools[c.tool].compute({...c.inputs,[name]:value} as Inputs));
   }
  });
  if(c.inactive)it(`${tools[c.tool].id}/${c.inputs.mode}: unused input is irrelevant`,()=>{
   expect(tools[c.tool].compute({...c.inputs,...Object.fromEntries(c.inactive!.map(k=>[k,true]))})).toEqual(tools[c.tool].compute(c.inputs));
  });
 }
 for(const i of [3,4,5,6,7])it(`${tools[i].id}: unsupported mode is an error`,()=>{
  const c=cases.find(c=>c.tool===i)!;for(const mode of [undefined,null,true,'constructor','toString','__proto__','unknown'])error(tools[i].compute({...c.inputs,mode} as Inputs));
 });
 it('charge balance separates retained and supplied Ah',()=>{
  const result=charge.compute({capacityAh:100,currentA:10,efficiency:80});close(row(result,'В часах'),12.5);close(row(result,'Отдано зарядным устройством'),125);
 });
 it('runtime minute rounding carries into the hour',()=>{
  expect(row(run.compute({capacity:1.999,voltage:1,load:1,dod:100,efficiency:100}),'Часы и минуты')).toBe('2 ч 0 мин');
 });
 it('small fixed-precision time and energy remain nonzero',()=>{
  close(row(charge.compute({capacityAh:.001,currentA:1,efficiency:100}),'В часах'),.001);
  const r=run.compute({capacity:.001,voltage:1,load:1,dod:100,efficiency:100});close(r.primary.value,.001);close(row(r,'Полезная энергия'),.001);
 });
 it('scaled charging inversion survives intermediate overflow',()=>{
  close(row(charge.compute({capacityAh:1e300,currentA:1e300,efficiency:100}),'В часах'),1);
 });
 it('scaled runtime quotient remains finite when E/load underflows if ordered badly',()=>{
  close(run.compute({capacity:1e-200,voltage:1e200,load:1e200,dod:100,efficiency:100}).primary.value,1e-200);
 });
 for(const i of [0,1,2,5,6,7])it(`${tools[i].id}: finite input with nonrepresentable required output is an error`,()=>{
  const inputs:Inputs[]=[{capacityAh:1e308,currentA:1e-308,efficiency:100},{capacity:1e308,voltage:1e308,load:1,dod:100,efficiency:100},{cells:1,series:1,parallel:1,cellVoltage:1e308,cellCapacity:1e308},{mode:'charge',c:1e308,v:1e308},{mode:'kva',kw:1e308,pf:1e-308},{mode:'P',voltage:1e308,current:1e308,powerFactor:1}];
  error(tools[i].compute(inputs[[0,1,2,5,6,7].indexOf(i)]));
 });
 for(const tool of [resistor,capNet])it(`${tool.id}: scaled harmonic sum avoids reciprocal overflow`,()=>{
  const key=tool===resistor?'resistances':'capacitances',mode=tool===resistor?'parallel':'series';
  close(tool.compute({mode,[key]:'1e-308 1e-308'}).primary.value,5e-309);
  error(tool.compute({mode,[key]:'5e-324 5e-324'}));
 });
 for(const tool of [resistor,capNet])it(`${tool.id}: list product bounds and sum overflow`,()=>{
  const key=tool===resistor?'resistances':'capacitances',mode=tool===resistor?'series':'parallel';
  error(tool.compute({mode,[key]:'1 '.repeat(257)}));error(tool.compute({mode,[key]:' '.repeat(16385)}));error(tool.compute({mode,[key]:'1e308 1e308'}));
 });
 it('capacitor list comma grammar is explicit and preserved',()=>{
  close(capNet.compute({mode:'parallel',capacitances:'0.1; 0.1'}).primary.value,.2);
  close(capNet.compute({mode:'parallel',capacitances:'100,220'}).primary.value,320);
  error(capNet.compute({mode:'parallel',capacitances:'0,1'}));
 });
 it('resistor decimal commas remain one value',()=>close(resistor.compute({mode:'series',resistances:'4,7; 4,7'}).primary.value,9.4));
 it('pack counts are not silently floored and preserve the published 500 bound',()=>{
  const c=cases[2].inputs;for(const name of ['cells','series','parallel'])for(const value of [3.1,'3.0000000000000001',501,Number.MAX_SAFE_INTEGER+1])error(pack.compute({...c,[name]:value}));
 });
 for(const locale of locales)it(`pack raw validator/${locale}: fractions cannot round to an integer`,()=>{
  const context={locale,values:{cells:'12.00000000000000001',series:4,parallel:3},fields:pack.presentation.fields,parseNumber:Number};
  expect(pack.validate!(context).cells).toBeTruthy();expect(pack.validate!({...context,values:{cells:12,series:4,parallel:3}})).toEqual({});
 });
 it('capacitor zero charge is valid in forward modes but does not define C',()=>{
  close(cap.compute({mode:'charge',c:100,v:0}).primary.value,0);close(cap.compute({mode:'voltage',c:100,q:0}).primary.value,0);
  error(cap.compute({mode:'capacitance',v:0,q:0}));error(cap.compute({mode:'capacitance',v:12,q:-1200}));
 });
 it('capacitor doubling voltage preserves signed charge and quadruples energy',()=>{
  close(row(cap.compute({mode:'charge',c:100,v:24}),'Энергия поля'),.0288);close(cap.compute({mode:'charge',c:100,v:24}).primary.value,2400);
 });
 for(const tool of [kva,single])it(`${tool.id}: sinusoidal reactive power is stable at huge magnitudes`,()=>{
  const r=tool===kva?kva.compute({mode:'kw',kva:1e200,pf:.8}):single.compute({mode:'P',voltage:1e200,current:1,powerFactor:.8});
  close(row(r,'Реактивная мощность'),6e199);expect(JSON.stringify(r)).not.toMatch(/NaN|Infinity|10\^NaN/);
 });
 it('unity PF and zero-load boundaries are exact',()=>{
  for(const r of [kva.compute({mode:'kw',kva:5,pf:1}),single.compute({mode:'P',voltage:230,current:8,powerFactor:1})])close(row(r,'Реактивная мощность'),0);
  for(const r of [kva.compute({mode:'kw',kva:0,pf:.8}),single.compute({mode:'P',voltage:230,current:0,powerFactor:.8}),single.compute({mode:'current',voltage:230,power:0,powerFactor:.8})])close(r.primary.value,0);
  error(kva.compute({mode:'kva',kw:-10,pf:.8}));error(single.compute({mode:'P',voltage:230,current:-1,powerFactor:.8}));
 });
 for(const [tool,fieldsets]of [[cap,{charge:['mode','c','v'],voltage:['mode','c','q'],capacitance:['mode','v','q']}],[kva,{kva:['mode','kw','pf'],kw:['mode','kva','pf']}]] as const){
  for(const [mode,names]of Object.entries(fieldsets))it(`${tool.id}/${mode}: unknown stale field is hidden`,()=>{
   expect(tool.presentation.fields.filter(f=>isFieldVisible(f,{mode})).map(f=>f.name)).toEqual(names);
  });
 }
 for(const [i,tool]of tools.entries())for(const locale of locales)it(`${tool.id}/${locale}: authored body and native output contract`,()=>{
  const body=locale==='ru'?tool.presentation:tool.copy![locale]!;expect(isCompleteCalculatorCopy(body)).toBe(true);
  expect(body.faq.length).toBeGreaterThanOrEqual(tool.id==='resistor-network'?5:4);expect(body.disclaimer).toBeTruthy();
  const sources=getElectronicsWave7MethodSources(tool.id,locale);expect(sources.length).toBeGreaterThan(0);for(const source of sources)expect(source.href).toMatch(/^https:\/\//);
  for(const field of tool.presentation.fields.filter(f=>f.type==='number'))expect(field.unit).toBeTruthy();
  const c=cases.find(x=>x.tool===i)!;const runtime={compute:tool.compute,localization:locs[i]};
  const result=localizeResult(tool.compute(c.inputs),locale,tool.id,runtime);
  const invalid=localizeResult(tool.compute({...c.inputs,[c.active[0]]:true}),locale,tool.id,runtime);
  expect(invalid.primary.value).toBe('—');expect(invalid.secondary[0].accent).toBe('red');
  if(locale!=='ru'){const foreign=locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/;expect(JSON.stringify(result)).not.toMatch(foreign);expect(JSON.stringify(invalid)).not.toMatch(foreign);}
 });
});
