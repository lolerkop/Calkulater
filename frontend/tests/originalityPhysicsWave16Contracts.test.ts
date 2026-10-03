import {describe,expect,it} from 'vitest';
import type {CalcResult} from '../src/lib/types';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import {definition as d0} from '../src/calculators/buoyancy/definition';
import {definition as d1} from '../src/calculators/carnot/definition';
import {definition as d2} from '../src/calculators/centripetal-force/definition';
import {definition as d3} from '../src/calculators/doppler/definition';
import {definition as d4} from '../src/calculators/pendulum/definition';
import {localization as l0} from '../src/calculators/buoyancy/localization';
import {localization as l1} from '../src/calculators/carnot/localization';
import {localization as l2} from '../src/calculators/centripetal-force/localization';
import {localization as l3} from '../src/calculators/doppler/localization';
import {localization as l4} from '../src/calculators/pendulum/localization';
const definitions=[d0,d1,d2,d3,d4],localizations=[l0,l1,l2,l3,l4];
const locales=['ru','en','uk','de','es'] as const;
const numeric=(text:string)=>{const t=text.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1])*10**Number(m[2]):parseFloat(t);};
const row=(r:CalcResult,label:string)=>r.secondary.find(x=>x.label===label)?.value??'';
const close=(text:string,expected:number)=>{const actual=numeric(text);expect(Number.isFinite(actual)).toBe(true);if(expected===0)expect(actual).toBe(0);else expect(Math.abs(actual/expected-1)).toBeLessThan(.0006);};
const bad:unknown[]=[undefined,null,true,false,'',' ','oops','NaN','Infinity',NaN,Infinity,-Infinity,'0x10','1e-999',{},[]];
for(let i=0;i<definitions.length;i++){
 const d=definitions[i];const defaults=Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue])) as Parameters<typeof d.compute>[0];
 for(const r of d.referenceCases??[])it(d.id+': retain independent original ref '+r.name,()=>{const actual=d.compute(r.inputs);expect(actual.primary.value).toBe(r.expectPrimary);for(const s of r.expectSecondary??[])expect(actual.secondary).toContainEqual(expect.objectContaining(s));});
 for(const f of d.presentation.fields.filter(f=>f.type==='number'))for(const [n,v]of bad.entries())it(d.id+': strict active '+f.name+'/'+n,()=>{const result=d.compute({...defaults,[f.name]:v} as Parameters<typeof d.compute>[0]);expect(result.primary.value).toBe('—');expect(result.secondary[0].accent).toBe('red');});
 for(const locale of locales)it(d.id+'/'+locale+': complete authored native contract and finite-error rendering',()=>{
  const copy=locale==='ru'?d.presentation:d.copy![locale];if(!isCompleteCalculatorCopy(copy))throw new Error('Incomplete owned copy');expect(copy.faq).toHaveLength(4);if(locale!=='ru')expect(isCompleteCalculatorCopy(copy)).toBe(true);expect(copy.disclaimer?.length).toBeGreaterThan(40);expect(copy.howToUse?.length).toBeGreaterThanOrEqual(3);expect(JSON.stringify(copy.howToUse)).not.toMatch(/unitless|без единицы|без одиниці|ohne Einheit|sin unidad/);
  const field=d.presentation.fields.find(f=>f.type==='number')!;const result=localizeResult(d.compute({...defaults,[field.name]:true}),locale,d.id,{compute:d.compute,localization:localizations[i]});
  expect(result.primary.value).toBe('—');if(locale!=='ru'&&locale!=='uk')expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁё]/);
 });
 it(d.id+': explicit physical numeric units',()=>{for(const f of d.presentation.fields.filter(f=>f.type==='number')){expect(f.unit).toBeTruthy();expect(f.label).not.toMatch(/, (?:кг|м|м³|м\/с|м\/с²|кг\/м³|Гц|К)$/);}});
}
describe('Independent ordinary physics literals',()=>{
 it('buoyancy: 2 litres, 3 kg body',()=>{const r=d0.compute({volume:.002,rhoFluid:1000,mass:3});close(r.primary.value,19.6133);close(row(r,'Равнодействующая'),-9.80665);expect(row(r,'Поведение в жидкости')).toBe('тонет');});
 it('buoyancy: the represented displaced mass drives exactly balanced weight',()=>{const r=d0.compute({volume:.015,rhoFluid:1000,mass:15});expect(row(r,'Равнодействующая')).toBe('0 Н');expect(row(r,'Поведение в жидкости')).toBe('нейтральная плавучесть');});
 it('Carnot: half of 1000 J at 600/300 K',()=>{const r=d1.compute({tHot:600,tCold:300});close(r.primary.value,50);close(row(r,'Полезная работа из 1000 Дж тепла'),500);close(row(r,'Отдано холодильнику'),500);});
 it('circular motion: 4 kg,3 m/s,2 m',()=>{const r=d2.compute({m:4,v:3,r:2});close(r.primary.value,18);close(row(r,'Центростремительное ускорение'),4.5);close(row(r,'Период обращения'),4.188790204786391);});
 it('circular motion: speed0 has no period',()=>{const r=d2.compute({m:4,v:0,r:2});expect(r.primary.value).toBe('0 Н');expect(r.secondary.some(x=>x.label==='Период обращения')).toBe(false);});
 it('Doppler: source approach and equal observer recession cancel',()=>{const r=d3.compute({f:100,c:10,vSource:2,vObserver:-2});expect(r.primary.value).toBe('100 Гц');expect(row(r,'Сдвиг частоты')).toBe('0 Гц');});
 it('Doppler: source2 with c10 gives frequency ratio10/8',()=>{const r=d3.compute({f:100,c:10,vSource:2,vObserver:0});close(r.primary.value,125);close(row(r,'Относительный сдвиг'),25);});
 it('pendulum: L4,g1 gives fullperiod4π',()=>{const r=d4.compute({length:4,g:1});close(r.primary.value,12.566370614359172);close(row(r,'Частота'),.07957747154594767);});
});
for(const [d,input]of [[d2,{m:2,v:-3,r:2}],[d3,{f:440,c:343,vSource:20,vObserver:-400}],[d3,{f:440,c:343,vSource:-343,vObserver:0}],[d1,{tHot:300,tCold:300}]] as const)it(d.id+': declared model boundary '+JSON.stringify(input),()=>expect(d.compute(input).primary.value).toBe('—'));
describe('Scaled products and nonzero final quantities',()=>{
 it('buoyancy: density product cancels before multiplication by g',()=>{const r=d0.compute({volume:1e-308,rhoFluid:1e308,mass:.5});close(r.primary.value,9.80665);close(row(r,'Равнодействующая'),4.903325);});
 it('centripetal: finite force survives unrepresentable speed square',()=>{const r=d2.compute({m:1e-200,v:1e200,r:1e200});close(r.primary.value,1);close(row(r,'Центростремительное ускорение'),1e200);});
 it('pendulum: finite root survives L/g overflow',()=>{const r=d4.compute({length:1e200,g:1e-200});close(r.primary.value,6.283185307179586e200);});
 it('Carnot: one binary ulp of positive temperature difference does not become zero',()=>{const r=d1.compute({tHot:1.0000000000000002,tCold:1});close(r.primary.value,2.2204460492503126e-14);close(row(r,'Полезная работа из 1000 Дж тепла'),2.2204460492503126e-13);});
});
