import {describe,expect,it} from 'vitest';
import type {CalcResult} from '../src/lib/types';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import {definition as escape} from '../src/calculators/escape-velocity/definition';
import {definition as orbit} from '../src/calculators/orbital-period/definition';
import {definition as inertia} from '../src/calculators/moment-of-inertia/definition';
import {definition as pipe} from '../src/calculators/pipe-flow/definition';
import {definition as layer} from '../src/calculators/thermal-conduction/definition';
import {localization as l0} from '../src/calculators/escape-velocity/localization';
import {localization as l1} from '../src/calculators/orbital-period/localization';
import {localization as l2} from '../src/calculators/moment-of-inertia/localization';
import {localization as l3} from '../src/calculators/pipe-flow/localization';
import {localization as l4} from '../src/calculators/thermal-conduction/localization';
const defs=[escape,orbit,inertia,pipe,layer],locs=[l0,l1,l2,l3,l4],locales=['ru','en','uk','de','es'] as const;
const numeric=(text:string)=>{const t=text.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1])*10**Number(m[2]):parseFloat(t);};
const row=(r:CalcResult,label:string)=>r.secondary.find(x=>x.label===label)?.value??'';
const close=(text:string,n:number)=>{const x=numeric(text);expect(Number.isFinite(x)).toBe(true);if(n===0)expect(x).toBe(0);else expect(Math.abs(x/n-1)).toBeLessThan(.0006);};
const bad:unknown[]=[undefined,null,true,false,'',' ','bad','NaN','Infinity',NaN,Infinity,-Infinity,'0x10','1e-999',{},[]];
const defaults=(d:typeof defs[number])=>Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue])) as Parameters<typeof d.compute>[0];
for(const [i,d]of defs.entries()){
 for(const r of d.referenceCases??[])it(d.id+': immutable independent original '+r.name,()=>{const a=d.compute(r.inputs);expect(a.primary.value).toBe(r.expectPrimary);for(const s of r.expectSecondary??[])expect(a.secondary).toContainEqual(expect.objectContaining(s));});
 for(const f of d.presentation.fields.filter(f=>f.type==='number'))for(const [j,v]of bad.entries())it(d.id+': strict finite '+f.name+'/'+j,()=>{const a=d.compute({...defaults(d),[f.name]:v} as Parameters<typeof d.compute>[0]);expect(a.primary.value).toBe('—');expect(a.secondary[0].accent).toBe('red');});
 for(const locale of locales)it(d.id+'/'+locale+': native authored body and error',()=>{const c=locale==='ru'?d.presentation:d.copy![locale];if(!isCompleteCalculatorCopy(c))throw new Error('Incomplete owned copy');expect(c.faq).toHaveLength(4);expect(c.howToUse.length).toBeGreaterThanOrEqual(3);expect(JSON.stringify(c.howToUse)).not.toMatch(/unitless|без единицы|без одиниці|ohne Einheit|sin unidad/);expect(c.disclaimer?.length).toBeGreaterThan(40);const f=d.presentation.fields.find(f=>f.type==='number')!;const a=localizeResult(d.compute({...defaults(d),[f.name]:true}),locale,d.id,{compute:d.compute,localization:locs[i]});expect(a.primary.value).toBe('—');if(locale==='en'||locale==='de'||locale==='es')expect(JSON.stringify(a)).not.toMatch(/[А-Яа-яЁё]/);});
 it(d.id+': physically explicit numeric unit',()=>{for(const f of d.presentation.fields.filter(f=>f.type==='number')){expect(f.unit).toBeTruthy();expect(f.label).not.toMatch(/, (?:×10²⁴ кг|кг|м|мм|км|м²|К|Вт\/\(м·К\)|м³\/ч)$/);}});
}
for(const shape of [null,true,'other','constructor','__proto__',['disk']])it('inertia malformed/prototype shape '+String(shape),()=>expect(inertia.compute({shape,m:1,r:1} as Parameters<typeof inertia.compute>[0]).primary.value).toBe('—'));
describe('Independent physical identities',()=>{
 it('escape mass1×10²⁴kg radius1000km literal speeds and gravity',()=>{const a=escape.compute({mass24:1,radiusKm:1000});close(a.primary.value,11553.614153155713);close(row(a,'Первая космическая скорость'),8169.638914909275);close(row(a,'Ускорение свободного падения'),66.743);});
 it('orbit 1×10²⁴kg,1000km literal769.08972019s',()=>{const a=orbit.compute({mass24:1,radiusKm:1000});close(a.primary.value,769.0897201971823);close(row(a,'Оборотов в сутки'),112.34059919283334);});
 for(const [shape,n]of [['rod-center',1/12],['rod-end',1/3],['disk',.5],['ring',1],['sphere-solid',.4],['sphere-hollow',2/3]] as const)it('uniform shape '+shape+' withm12,size1',()=>close(inertia.compute({shape,m:12,r:1}).primary.value,12*n));
 it('pipe innerdiameter1000mm,flow900πm³h means 1m/s',()=>{const a=pipe.compute({flow:900*Math.PI,diameter:1000});close(a.primary.value,1);close(row(a,'Площадь сечения'),250000*Math.PI);});
 it('doubling bore at fixed flow quarters mean speed',()=>{const a=numeric(pipe.compute({flow:1,diameter:100}).primary.value),b=numeric(pipe.compute({flow:1,diameter:200}).primary.value);expect(Math.abs(a/b-4)).toBeLessThan(.004);});
 it('thermal signed flow reversal and24h same conditions',()=>{const a=layer.compute({area:2,thickness:.5,k:1,dt:-3});close(a.primary.value,-12);close(row(a,'За сутки'),-.288);close(row(a,'Сопротивление слоя'),.5);close(row(a,'Коэффициент теплопередачи'),2);});
 it('zero temperature difference gives zero flow but positive layer resistance',()=>{const a=layer.compute({area:2,thickness:.5,k:1,dt:0});close(a.primary.value,0);close(row(a,'Сопротивление слоя'),.5);});
});
describe('Complete products and square roots at extreme finite scales',()=>{
 it('escape remains finite when kg-scaled mass cannot fit in binary64',()=>{const a=escape.compute({mass24:1e300,radiusKm:1e300});close(a.primary.value,365357.3593072954);close(row(a,'Ускорение свободного падения'),6.6743e-293);});
 it('orbital cube need not fit if the final period does',()=>{const a=orbit.compute({mass24:1e300,radiusKm:1e300});close(a.primary.value,2.432075240844699e298);close(row(a,'Орбитальная скорость'),258346.6663225984);});
 it('inertia radius does not divide tiny mass into huge inertia',()=>{const a=inertia.compute({shape:'disk',m:1e-200,r:1e200});close(a.primary.value,5e199);close(row(a,'Радиус инерции'),7.071067811865475e199);});
 it('pipe litres-per-minute avoids numerator overflow',()=>{const a=pipe.compute({flow:1e307,diameter:1e150});close(a.primary.value,3536776513.1532297);close(row(a,'Расход в литрах в минуту'),1.6666666666666666e308);});
 it('thermal conductivity×delta product may overflow before division',()=>{const a=layer.compute({area:1,thickness:1e200,k:1e200,dt:1e200});close(a.primary.value,1e200);close(row(a,'Сопротивление слоя'),1);});
});
