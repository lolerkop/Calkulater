import {describe,expect,it} from 'vitest';
import type {CalcFunction,CalcResult} from '../src/lib/types';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import {isFieldVisible} from '../src/lib/fieldVisibility';
import {getElectronicsWave12MethodSources} from '../src/data/electronicsWave12MethodSources';
import {definition as d0} from '../src/calculators/coaxial-cable-impedance/definition';
import {localization as l0} from '../src/calculators/coaxial-cable-impedance/localization';
import {definition as d1} from '../src/calculators/headphone-power/definition';
import {localization as l1} from '../src/calculators/headphone-power/localization';
import {definition as d2} from '../src/calculators/inverter-power/definition';
import {localization as l2} from '../src/calculators/inverter-power/localization';
import {definition as d3} from '../src/calculators/lc-resonance/definition';
import {localization as l3} from '../src/calculators/lc-resonance/localization';
import {definition as d4} from '../src/calculators/led-resistor/definition';
import {localization as l4} from '../src/calculators/led-resistor/localization';
import {definition as d5} from '../src/calculators/ne555-timer-astable/definition';
import {localization as l5} from '../src/calculators/ne555-timer-astable/localization';
import {definition as d6} from '../src/calculators/rc-filter/definition';
import {localization as l6} from '../src/calculators/rc-filter/localization';
import {definition as d7} from '../src/calculators/resistor-color/definition';
import {localization as l7} from '../src/calculators/resistor-color/localization';
import {definition as d8} from '../src/calculators/rms-voltage/definition';
import {localization as l8} from '../src/calculators/rms-voltage/localization';
import {definition as d9} from '../src/calculators/transformer-ratio/definition';
import {localization as l9} from '../src/calculators/transformer-ratio/localization';
import {definition as d10} from '../src/calculators/voltage-divider/definition';
import {localization as l10} from '../src/calculators/voltage-divider/localization';
const tools=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10];
const locs=[l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10];

const locales=['ru','en','uk','de','es'] as const;
type Inputs=Parameters<CalcFunction>[0];
const numeric=(text:string)=>{const t=text.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1])*10**Number(m[2]):parseFloat(t);};
const row=(r:CalcResult,label:string)=>r.secondary.find(x=>x.label===label)?.value??'';
const close=(text:string,expected:number,tolerance=0.00055)=>{const n=numeric(text);expect(Number.isFinite(n)).toBe(true);if(expected===0)expect(n).toBe(0);else expect(Math.abs(n/expected-1)).toBeLessThan(tolerance);};
const error=(r:CalcResult)=>{expect(r.primary.value).toBe('—');expect(r.secondary[0].accent).toBe('red');};
const defaults=(i:number):Inputs=>{const values:Inputs={};for(const field of tools[i].presentation.fields)if(field.defaultValue!==undefined)values[field.name]=field.defaultValue;return values;};

const bad:unknown[]=[undefined,null,true,false,'',' ','NaN','Infinity',NaN,Infinity,-Infinity,'1 23','0x10','3W','1e-999',[],{}];
for(let i=0;i<tools.length;i++)for(const f of tools[i].presentation.fields.filter(f=>(f.type==='number'||f.type==='select')&&isFieldVisible(f,defaults(i)))){
 const input=defaults(i);for(const [k,value]of bad.entries())it(tools[i].id+': reject active '+f.name+'/'+k,()=>{if(value===undefined&&['mode','wave','currentUnit'].includes(f.name))return;error(tools[i].compute({...input,[f.name]:value} as Inputs));});
}
for(const [i,input]of [
[0,{dIn:1,dOut:1,eps:1}],[0,{dIn:1,dOut:2,eps:.5}],[1,{sensitivity:100,impedance:0,power:1}],[1,{sensitivity:100,impedance:1,power:0}],
[2,{outputPower:1,efficiency:100.01,batteryVoltage:12}],[2,{outputPower:1,efficiency:0,batteryVoltage:12}],
[3,{l:0,c:1}],[3,{l:1,c:0}],[4,{supplyVoltage:2,forwardVoltage:2,current:1,currentUnit:'ma'}],
[5,{r1:0,r2:1,c:1}],[6,{r:1e200,c:1e200}],[7,{b1:4.5,b2:7,mult:2,tol:5}],[7,{b1:4,b2:7,mult:2.5,tol:5}],
[7,{b1:4,b2:7,mult:2,tol:3}],[7,{b1:'4.0000000000000001',b2:7,mult:2,tol:5}],
[8,{mode:'peak',wave:'sine',value:0}],[8,{mode:'rms',wave:'sine',value:1e308}],
[9,{mode:'secondaryVoltage',n1:'9007199254740991.1',n2:1,v1:220,i1:2}],
[9,{mode:'secondaryVoltage',n1:1.5,n2:1,v1:220,i1:2}],[9,{mode:'turnsRatio',v1:220,v2:12,i1:-1}],
[10,{vin:1,r1:0,r2:1}],[10,{vin:1e308,r1:1e-308,r2:1e-308}]
] as [number,Inputs][])it(tools[i].id+': domain/range '+JSON.stringify(input),()=>error(tools[i].compute(input)));
for(const key of ['mode','wave','currentUnit'])for(const value of ['__proto__','constructor','toString','unknown',null,['sine'],{}])it('strict selectable '+key+'/'+JSON.stringify(value),()=>{const i=key==='mode'?9:key==='wave'?8:4;error(tools[i].compute({...defaults(i),[key]:value} as Inputs));});
for(const locale of locales)it('transformer/'+locale+': raw fractional turns rejected before UI rounding, inactive turns ignored',()=>{
 const values={...defaults(9),n1:'9007199254740991.1'};const errors=d9.validate!({values,locale,fields:d9.presentation.fields,parseNumber:(s:string)=>Number(s)} as Parameters<NonNullable<typeof d9.validate>>[0]);expect(errors.n1).toBeTruthy();
 expect(d9.validate!({values:{...values,mode:'turnsRatio'},locale,fields:d9.presentation.fields,parseNumber:(s:string)=>Number(s)} as Parameters<NonNullable<typeof d9.validate>>[0])).toEqual({});
});
for(const locale of locales)it('LED/'+locale+': source unit follows explicit dropdown and invalid selection gets no unit',()=>{const f=d4.presentation.fields.find(f=>f.name==='current')!;expect(d4.contextualField!(f,{currentUnit:'ma'},locale).unit).toBe(locale==='ru'||locale==='uk'?'мА':'mA');expect(d4.contextualField!(f,{currentUnit:'a'},locale).unit).toBe(locale==='ru'||locale==='uk'?'А':'A');expect(d4.contextualField!(f,{currentUnit:'bad'},locale).unit).toBeUndefined();});
for(const mode of ['secondaryVoltage','turnsRatio'])it('transformer:'+mode+' visible inputs preserve correct known set',()=>{const fields=d9.presentation.fields.filter(f=>f.type==='number'&&isFieldVisible(f,{mode})).map(f=>f.name);expect(fields).toEqual(mode==='secondaryVoltage'?['n1','n2','v1','i1']:['v1','v2','i1']);});
for(let i=0;i<tools.length;i++)it(tools[i].id+': each numeric field has an explicit fixed or contextual unit',()=>{for(const f of tools[i].presentation.fields.filter(f=>f.type==='number')){const context=tools[i].contextualField?.(f,defaults(i),'en')??f;expect(context.unit).toBeTruthy();expect(context.label).not.toMatch(/, (?:V|W|A|Ω|В|Вт|А|Ом|мА|мВт|кОм|нФ|мкГн|мм)$/);}});
