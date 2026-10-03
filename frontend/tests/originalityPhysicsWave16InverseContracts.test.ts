import {describe,expect,it} from 'vitest';
import type {CalcResult} from '../src/lib/types';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import {isFieldVisible} from '../src/lib/fieldVisibility';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import {definition as hooke} from '../src/calculators/hooke-law/definition';
import {definition as fall} from '../src/calculators/free-fall/definition';
import {definition as gravity} from '../src/calculators/gravitational-force/definition';
import {definition as pressure} from '../src/calculators/hydrostatic-pressure/definition';
import {definition as heat} from '../src/calculators/specific-heat/definition';
import {localization as l0} from '../src/calculators/hooke-law/localization';
import {localization as l1} from '../src/calculators/free-fall/localization';
import {localization as l2} from '../src/calculators/gravitational-force/localization';
import {localization as l3} from '../src/calculators/hydrostatic-pressure/localization';
import {localization as l4} from '../src/calculators/specific-heat/localization';
const defs=[hooke,fall,gravity,pressure,heat],locs=[l0,l1,l2,l3,l4];
const locales=['ru','en','uk','de','es'] as const;
const numeric=(text:string)=>{const t=text.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1])*10**Number(m[2]):parseFloat(t);};
const row=(r:CalcResult,label:string)=>r.secondary.find(x=>x.label===label)?.value??'';
const close=(text:string,n:number)=>{const x=numeric(text);expect(Number.isFinite(x)).toBe(true);if(n===0)expect(x).toBe(0);else expect(Math.abs(x/n-1)).toBeLessThan(.0006);};
const bad:unknown[]=[undefined,null,true,false,'',' ','bad','NaN','Infinity',NaN,Infinity,-Infinity,'0x10','1e-999',{},[]];
const defaults=(d:typeof defs[number])=>Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue])) as Parameters<typeof d.compute>[0];
for(const [i,d]of defs.entries()){
 for(const r of d.referenceCases??[])it(d.id+': immutable original independent reference '+r.name,()=>{const a=d.compute(r.inputs);expect(a.primary.value).toBe(r.expectPrimary);for(const s of r.expectSecondary??[])expect(a.secondary).toContainEqual(expect.objectContaining(s));});
 for(const f of d.presentation.fields.filter(f=>f.type==='number'&&isFieldVisible(f,defaults(d))))for(const [j,v]of bad.entries()){
  if(f.optional&&(v===undefined||v===''||v===' '))continue;
  it(d.id+': strict active '+f.name+'/'+j,()=>{const a=d.compute({...defaults(d),[f.name]:v} as Parameters<typeof d.compute>[0]);expect(a.primary.value).toBe('—');expect(a.secondary[0].accent).toBe('red');});
 }
 for(const locale of locales)it(d.id+'/'+locale+': native complete body and finite-input error',()=>{
  const c=locale==='ru'?d.presentation:d.copy![locale];if(!isCompleteCalculatorCopy(c))throw new Error('Incomplete owned copy');if(locale!=='ru')expect(isCompleteCalculatorCopy(c)).toBe(true);expect(c.faq).toHaveLength(4);expect(c.howToUse?.length).toBeGreaterThanOrEqual(3);expect(JSON.stringify(c.howToUse)).not.toMatch(/unitless|без единицы|без одиниці|ohne Einheit|sin unidad/);expect(c.disclaimer?.length).toBeGreaterThan(40);
  const f=d.presentation.fields.find(f=>f.type==='number'&&isFieldVisible(f,defaults(d)))!;
  const a=localizeResult(d.compute({...defaults(d),[f.name]:true}),locale,d.id,{compute:d.compute,localization:locs[i]});expect(a.primary.value).toBe('—');if(locale==='en'||locale==='de'||locale==='es')expect(JSON.stringify(a)).not.toMatch(/[А-Яа-яЁё]/);
 });
 it(d.id+': explicit physical fields without duplicate label suffix',()=>{for(const f of d.presentation.fields.filter(f=>f.type==='number')){expect(f.unit).toBeTruthy();expect(f.label).not.toMatch(/, (?:кг|м|с|м\/с²|кг\/м³|Па|К|Дж|Дж\/\(кг·К\)|Н|Н\/м)$/);}});
 if(d.presentation.fields.some(f=>f.name==='mode'))for(const v of [null,true,'no-mode','toString','__proto__',['force']])it(d.id+': unknown mode fails closed '+String(v),()=>expect(d.compute({...defaults(d),mode:v} as Parameters<typeof d.compute>[0]).primary.value).toBe('—'));
}
for(const [d,selected,active]of [[hooke,'force',['k','x']],[hooke,'extension',['k','f']],[hooke,'stiffness',['x','f']],[heat,'energy',['mass','c','dt']],[heat,'deltaT',['mass','c','q']],[heat,'mass',['c','dt','q']]] as const){
 it(d.id+': mode '+selected+' displays only known numeric parameters',()=>{const input={...defaults(d),mode:selected};expect(d.presentation.fields.filter(f=>f.type==='number'&&isFieldVisible(f,input)).map(f=>f.name).sort()).toEqual([...active].sort());const inactive=d.presentation.fields.filter(f=>f.type==='number'&&!isFieldVisible(f,input));for(const f of inactive){expect(d.compute({...input,[f.name]:'malformed hidden target'}).primary.value).not.toBe('—');for(const locale of locales)expect(d.contextualField?.(f,input,locale).unit).toBe(f.unit);}});
}
describe('Independent literals and signed inverses',()=>{
 it('holding and compression force −10N; restoring force is opposite',()=>{const a=hooke.compute({mode:'force',k:200,x:-.05});close(a.primary.value,-10);close(row(a,'Энергия пружины'),.25);const b=hooke.compute({mode:'stiffness',f:-10,x:-.05});close(b.primary.value,200);});
 it('Hooke zero deformation has zero force and energy',()=>{const a=hooke.compute({mode:'force',k:200,x:0});close(a.primary.value,0);close(row(a,'Энергия пружины'),0);});
 it('Hooke incompatible direction and undetermined rate are errors',()=>{for(const x of [0,-1])expect(hooke.compute({mode:'stiffness',x,f:10}).primary.value).toBe('—');});
 it('free fall 2m,g2 gives sqrt2seconds/sqrt8speed/4Jkg',()=>{const a=fall.compute({mode:'fromHeight',h:2,g:2,t:'ignored'});close(a.primary.value,Math.sqrt(8));close(row(a,'Время падения'),Math.SQRT2);close(row(a,'Кинетическая энергия на килограмм'),4);});
 it('elapsed time mode ignores hidden height',()=>close(fall.compute({mode:'fromTime',t:2,g:2,h:false}).primary.value,4));
 it('mutual attraction 2/3kg at2m gives G×1.5',()=>{const a=gravity.compute({m1:2,m2:3,r:2});close(a.primary.value,1.0011e-10);close(row(a,'Ускорение первого тела'),5.0055e-11);});
 it('hydrostatic optional offset zero and blank obey the same contract',()=>{for(const p0 of [undefined,'',' ',0]){const a=pressure.compute({density:1000,depth:0,p0} as Parameters<typeof pressure.compute>[0]);close(a.primary.value,0);expect(row(a,'Тип давления')).toBe('избыточное');}});
 it('pressure surface is exactly the entered pressure',()=>{const a=pressure.compute({density:1000,depth:0,p0:90000});close(a.primary.value,90000);close(row(a,'Давление столба'),0);});
 it('cooling heat and reverse mass agree with 2×3×−4=−24',()=>{close(heat.compute({mode:'energy',mass:2,c:3,dt:-4}).primary.value,-24);close(heat.compute({mode:'deltaT',mass:2,c:3,q:-24}).primary.value,-4);close(heat.compute({mode:'mass',c:3,dt:-4,q:-24}).primary.value,2);});
 it('zero heat solves zero temperature change but never a positive mass',()=>{close(heat.compute({mode:'deltaT',mass:2,c:3,q:0}).primary.value,0);expect(heat.compute({mode:'mass',c:3,dt:0,q:0}).primary.value).toBe('—');expect(heat.compute({mode:'mass',c:3,dt:2,q:0}).primary.value).toBe('—');});
});
describe('Scaled cancellation and representable finite results',()=>{
 it('spring inverse energy avoids force square overflow',()=>{const a=hooke.compute({mode:'extension',k:1e200,f:1e200});close(a.primary.value,1);close(row(a,'Энергия пружины'),5e199);});
 it('heat inverse avoids capacity-times-mass overflow',()=>close(heat.compute({mode:'deltaT',mass:1e200,c:1e200,q:1e300}).primary.value,1e-100));
 it('heat direct product cancellation preserves 3J',()=>close(heat.compute({mode:'energy',mass:1e-200,c:1e200,dt:3}).primary.value,3));
 it('free fall ratio can overflow before its finite square root',()=>{const a=fall.compute({mode:'fromHeight',h:1e200,g:1e-200});close(a.primary.value,Math.SQRT2);close(row(a,'Время падения'),Math.SQRT2*1e200);});
 it('gravity products and distance square cancel before conversion',()=>{const a=gravity.compute({m1:1e200,m2:1e200,r:1e200});close(a.primary.value,6.674e-11);close(row(a,'Ускорение первого тела'),6.674e-211);});
 it('hydrostatic density-depth cancellation avoids intermediate overflow',()=>close(pressure.compute({density:1e308,depth:1e-308,p0:0}).primary.value,9.80665));
 for(const [d,p]of [[hooke,{mode:'force',k:1e308,x:1e308}],[heat,{mode:'energy',mass:1e308,c:1e308,dt:1e308}],[fall,{mode:'fromTime',t:1e308,g:1e308}],[gravity,{m1:1e308,m2:1e308,r:1e-308}],[pressure,{density:1e308,depth:1e308,p0:0}]] as const)it(d.id+': final overflow error not Infinity/NaN',()=>expect(d.compute(p).primary.value).toBe('—'));
});
