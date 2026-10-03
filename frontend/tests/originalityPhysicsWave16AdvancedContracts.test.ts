import {describe,expect,it} from 'vitest';
import type {CalcResult} from '../src/lib/types';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import {definition as d0} from '../src/calculators/bernoulli/definition';
import {localization as l0} from '../src/calculators/bernoulli/localization';
import {definition as d1} from '../src/calculators/stress-strain/definition';
import {localization as l1} from '../src/calculators/stress-strain/localization';
import {definition as d2} from '../src/calculators/thin-lens/definition';
import {localization as l2} from '../src/calculators/thin-lens/localization';
import {definition as d3} from '../src/calculators/projectile-motion/definition';
import {localization as l3} from '../src/calculators/projectile-motion/localization';
import {definition as d4} from '../src/calculators/terminal-velocity/definition';
import {localization as l4} from '../src/calculators/terminal-velocity/localization';
const defs=[d0,d1,d2,d3,d4],locs=[l0,l1,l2,l3,l4],locales=['ru','en','uk','de','es'] as const;
const numeric=(text:string)=>{const t=text.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1])*10**Number(m[2]):parseFloat(t);};
const row=(r:CalcResult,label:string)=>r.secondary.find(x=>x.label===label)?.value??'';
const close=(text:string,n:number)=>{const x=numeric(text);expect(Number.isFinite(x)).toBe(true);if(n===0)expect(x).toBe(0);else expect(Math.abs(x/n-1)).toBeLessThan(.0006);};
const bad:unknown[]=[undefined,null,true,false,'',' ','bad','NaN','Infinity',NaN,Infinity,-Infinity,'0x10','1e-999',{},[]];
const defaults=(d:typeof defs[number])=>Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue])) as Parameters<typeof d.compute>[0];
const active=[['p1','v1','v2','h1','h2','rho'],['force','area','length','delta'],['f','do'],['v0','angle','h0'],['m','a','cd','rho']];
for(const [i,d]of defs.entries()){
 for(const r of d.referenceCases??[])it(d.id+': immutable independent original '+r.name,()=>{const a=d.compute(r.inputs);expect(a.primary.value).toBe(r.expectPrimary);for(const s of r.expectSecondary??[])expect(a.secondary).toContainEqual(expect.objectContaining(s));});
 for(const f of active[i])for(const [j,v]of bad.entries())it(d.id+': strict active '+f+'/'+j,()=>{const a=d.compute({...defaults(d),[f]:v} as Parameters<typeof d.compute>[0]);if(i===1&&f==='delta'&&(v===undefined||v===''||v===' ')){expect(a.primary.value).toBe('100 МПа');}else{expect(a.primary.value).toBe('—');expect(a.secondary[0].accent).toBe('red');}});
 for(const locale of locales)it(d.id+'/'+locale+': native authored body and error',()=>{const c=locale==='ru'?d.presentation:d.copy![locale];if(!isCompleteCalculatorCopy(c))throw new Error('Incomplete owned copy');expect(c.faq).toHaveLength(4);expect(c.howToUse.length).toBeGreaterThanOrEqual(3);expect(JSON.stringify(c.howToUse)).not.toMatch(/unitless|без единицы|без одиниці|ohne Einheit|sin unidad/);expect(c.disclaimer?.length).toBeGreaterThan(40);const f=d.presentation.fields.find(f=>f.type==='number')!;const a=localizeResult(d.compute({...defaults(d),[f.name]:true}),locale,d.id,{compute:d.compute,localization:locs[i]});expect(a.primary.value).toBe('—');if(locale==='en'||locale==='de'||locale==='es')expect(JSON.stringify(a)).not.toMatch(/[А-Яа-яЁё]/);});
 it(d.id+': physically explicit numeric unit',()=>{for(const f of d.presentation.fields.filter(f=>f.type==='number')){expect(f.unit).toBeTruthy();expect(f.label).not.toMatch(/, (?:кПа|м\/с|кг\/м³|Н|мм²|МПа|см|м|мм|кг|м²|°)$/);}});
}

const cast=(i:number,x:Record<string,unknown>)=>defs[i].compute(x as Parameters<typeof defs[number]['compute']>[0]);
for(const i of [1,2])for(const value of [null,true,false,'bad','constructor','__proto__',[],{}])it('closed mode '+i+'/'+String(value),()=>expect(cast(i,{...defaults(defs[i]),mode:value}).primary.value).toBe('—'));
describe('Independent analytic fixtures and signs',()=>{
 it('Bernoulli static10m elevation at density1 creates98.0665Pa',()=>{const r=d0.compute({p1:0,v1:0,h1:10,v2:0,h2:0,rho:1});close(r.primary.value,.0980665);close(row(r,'Изменение давления'),.0980665);});
 it('zero absolutepressure is formal boundary',()=>close(d0.compute({p1:0,v1:0,h1:0,v2:0,h2:0,rho:1}).primary.value,0));
 it('heightdatum may make energy sum negative while pressure remainspositive',()=>{const r=d0.compute({p1:1,v1:0,v2:0,h1:-200,h2:-200,rho:1});close(r.primary.value,1);expect(numeric(row(r,'Полный напор'))).toBeLessThan(0);});
 it('same heightshift leavesp2unchanged',()=>{const a={p1:10,v1:2,v2:3,h1:2,h2:1,rho:10};expect(d0.compute(a).primary.value).toBe(d0.compute({...a,h1:102,h2:101}).primary.value);});
 it('compression signed forceanddelta yields positiveE',()=>{const r=d1.compute({mode:'modulus',force:-100,area:10,length:20,delta:-.1});close(r.primary.value,2000);close(row(r,'Напряжение'),-10);close(row(r,'Относительная деформация'),-.005);});
 it('opposite signs cannot yield a positive modulus',()=>expect(d1.compute({mode:'modulus',force:-100,area:10,length:20,delta:.1}).primary.value).toBe('—'));
 it('zero elongation inverse forwardvalid, modulusundefined rejected',()=>{close(d1.compute({mode:'elongation',force:0,area:10,length:20,e:2000}).primary.value,0);expect(d1.compute({mode:'modulus',force:0,area:10,length:20,delta:0}).primary.value).toBe('—');});
 it('stress alone omits optional length/change; supplied malformed is error',()=>{close(d1.compute({mode:'stress',force:-10,area:2}).primary.value,-5);expect(cast(1,{mode:'stress',force:1,area:1,length:false,delta:0}).primary.value).toBe('—');});
 it('thinlens real/virtual cases',()=>{close(d2.compute({mode:'image',f:10,do:30}).primary.value,15);close(d2.compute({mode:'image',f:10,do:5}).primary.value,-10);close(d2.compute({mode:'image',f:-10,do:30}).primary.value,-7.5);});
 it('focus gives image atinfinity expliciterror not false absence',()=>{const r=d2.compute({mode:'image',f:10,do:10});expect(r.primary.value).toBe('—');expect(r.secondary[0].value).toMatch(/бесконечности/);});
 it('focalfromsignedimagethenroundtrip',()=>{close(d2.compute({mode:'focal',do:30,di:-7.5}).primary.value,-10);});
 it('projectile cardinal exactzeros preserve horizontalzeroheight formalcase',()=>{close(d3.compute({v0:10,angle:90,h0:0}).primary.value,0);const r=d3.compute({v0:10,angle:0,h0:0});close(r.primary.value,0);close(row(r,'Время полёта'),0);});
 it('very small valid angle is not threshold-clamped',()=>{const r=d3.compute({v0:20,angle:1e-13,h0:0});close(row(r,'Вертикальная составляющая'),3.490658503988659e-14);close(r.primary.value,1.423793394905e-13);});
 it('horizontal launch at height4.903325 lands after1s, range10m',()=>{const r=d3.compute({v0:10,angle:0,h0:4.903325});close(r.primary.value,10);close(row(r,'Время полёта'),1);});
 it('terminal unitmass/unitarea/density/Cd literal quadraticsolution',()=>{const r=d4.compute({m:1,a:1,rho:1,cd:1});close(r.primary.value,4.428690551393267);close(row(r,'Путь до 95 процентов'),2.327902900978337);close(row(r,'Время разгона до 95 процентов'),.8272044453);});
 it('quadruplingarea halvesvelocity',()=>{const a=numeric(d4.compute({m:1,a:1,rho:1,cd:1}).primary.value),b=numeric(d4.compute({m:1,a:4,rho:1,cd:1}).primary.value);expect(Math.abs(a/b-2)).toBeLessThan(.002);});
});
describe('No artificial intermediate overflow or cancellation',()=>{
 it('Bernoulli squares may overflowbeforetheir densityscaledresult',()=>{const r=d0.compute({p1:1,v1:1e200,v2:1e200,h1:0,h2:0,rho:1e-300});close(r.primary.value,1);close(row(r,'Динамический напор в первом сечении'),5e96);});
 it('stress full inverseproduct remainsfinite',()=>close(d1.compute({mode:'modulus',force:1e200,area:1e200,length:1e200,delta:1e200}).primary.value,1));
 it('elongation complete ratio beforeproductoverflow',()=>close(d1.compute({mode:'elongation',force:1e200,area:1e200,length:1e200,e:1e200}).primary.value,1));
 it('lensfocal sumoverflow andproductoverflow leavefinite f',()=>{const r=d2.compute({mode:'focal',do:1e308,di:1e308});close(r.primary.value,5e307);close(row(r,'Оптическая сила'),2e-306);});
 it('terminal densityareaproductunderflow beforeCd does not causefalseInfinity',()=>close(d4.compute({m:1e-200,a:1e-200,rho:1e-200,cd:1e200}).primary.value,4.428690551393267));
});
for(const [i,x]of [[0,{p1:1e308,v1:1e308,v2:0,h1:0,h2:0,rho:1e308}],[1,{mode:'elongation',force:1e308,area:1e-308,length:1e308,e:1e-308}],[2,{mode:'image',f:Number.MIN_VALUE,do:Number.MAX_VALUE}],[3,{v0:1e308,angle:45,h0:0}],[4,{m:1e308,a:1e-308,rho:1e-308,cd:1e-308}]] as const)it('requiredderived range '+i,()=>expect(cast(i,x).primary.value).toBe('—'));
for(const locale of locales)for(const i of [1,2])it('subjecterror translated '+i+'/'+locale,()=>{const input=i===1?{mode:'modulus',force:-1,area:1,length:1,delta:1}:{mode:'image',do:10,f:10};const r=localizeResult(cast(i,input),locale,defs[i].id,{compute:defs[i].compute,localization:locs[i]});expect(r.primary.value).toBe('—');if(['en','de','es'].includes(locale))expect(JSON.stringify(r)).not.toMatch(/[А-Яа-яЁё]/);});
for(const selected of ['stress','modulus','elongation'])it('stress known-only e/delta modes '+selected,()=>{const visible=defs[1].presentation.fields.filter(f=>!f.showIf||('oneOf'in f.showIf?f.showIf.oneOf?.includes(selected):f.showIf.equals===selected)).map(f=>f.name);expect(visible.includes('e')).toBe(selected==='elongation');expect(visible.includes('delta')).toBe(selected!=='elongation');for(const locale of locales){const raw={...defs[1].presentation.fields.find(f=>f.name==='area')!,unit:'mm²'};expect(defs[1].contextualField!(raw,{mode:selected},locale).unit).toBe('mm²');}});
