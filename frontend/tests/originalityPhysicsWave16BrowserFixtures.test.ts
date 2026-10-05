import { postAuditCopy } from './helpers/postAuditAmendments';
import {describe,expect,it} from 'vitest';
import data from './fixtures/originality-physics-wave-16-publication.json';
import {buildInitialValues,readValuesFromSearch} from '../src/lib/shareLink';
import {fieldUnitLabel} from '../src/lib/fieldUnitLabel';
import type {Field} from '../src/lib/types';
import type {Locale} from '../src/lib/clientI18n';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import type {CalcFunction} from '../src/lib/types';
type CalcInputs=Parameters<CalcFunction>[0];
import {definition as d0} from '../src/calculators/air-density/definition';
import {definition as d1} from '../src/calculators/air-pressure-at-altitude/definition';
import {definition as d2} from '../src/calculators/bernoulli/definition';
import {definition as d3} from '../src/calculators/boiling-point/definition';
import {definition as d4} from '../src/calculators/buoyancy/definition';
import {definition as d5} from '../src/calculators/carnot/definition';
import {definition as d6} from '../src/calculators/centripetal-force/definition';
import {definition as d7} from '../src/calculators/decibel/definition';
import {definition as d8} from '../src/calculators/dew-point/definition';
import {definition as d9} from '../src/calculators/doppler/definition';
import {definition as d10} from '../src/calculators/escape-velocity/definition';
import {definition as d11} from '../src/calculators/free-fall/definition';
import {definition as d12} from '../src/calculators/gravitational-force/definition';
import {definition as d13} from '../src/calculators/heat-index/definition';
import {definition as d14} from '../src/calculators/hooke-law/definition';
import {definition as d15} from '../src/calculators/humidity-convert/definition';
import {definition as d16} from '../src/calculators/hydrostatic-pressure/definition';
import {definition as d17} from '../src/calculators/mach-number/definition';
import {definition as d18} from '../src/calculators/moment-of-inertia/definition';
import {definition as d19} from '../src/calculators/orbital-period/definition';
import {definition as d20} from '../src/calculators/pendulum/definition';
import {definition as d21} from '../src/calculators/pipe-flow/definition';
import {definition as d22} from '../src/calculators/projectile-motion/definition';
import {definition as d23} from '../src/calculators/specific-heat/definition';
import {definition as d24} from '../src/calculators/speed-of-sound/definition';
import {definition as d25} from '../src/calculators/stress-strain/definition';
import {definition as d26} from '../src/calculators/terminal-velocity/definition';
import {definition as d27} from '../src/calculators/thermal-conduction/definition';
import {definition as d28} from '../src/calculators/thin-lens/definition';
import {definition as d29} from '../src/calculators/wind-chill/definition';
import {definition as d30} from '../src/calculators/wind-power/definition';
const definitions=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28,d29,d30];
const byId=new Map(definitions.map(d=>[d.id,d]));
function numeric(s:string){const m=s.trim().replace(/[\s\u00a0\u202f]/g,'').replace(',','.').match(/^[+-]?\d+(?:\.\d+)?(?:·10\^[+-]?\d+)?/);if(!m)throw Error('No numeric value: '+s);return Number(m[0].replace('·10^','e'));}
function close(text:string,expected:number){const n=numeric(text);expect(Number.isFinite(n)).toBe(true);if(expected===0)expect(n).toBe(0);else expect(Math.abs(n/expected-1)).toBeLessThan(.0006);}
describe('Physics31 prepared browser fixtures: literal independent controls, no registry',()=>{
 for(const c of data.controls){
  const d=byId.get(c.id)!;
  it(c.id+': chosen fixed analytic normal',()=>close(d.compute(c.input as unknown as CalcInputs).primary.value,c.primary));
  it(c.id+': fixed independent default reference or analytic identity',()=>close(d.compute(data.defaults[c.id as keyof typeof data.defaults] as unknown as CalcInputs).primary.value,c.defaultPrimary));
  if(c.errorKind==='engine')it(c.id+': exact declared domain rejection',()=>{const result=d.compute({...c.input,...c.invalid} as unknown as CalcInputs);expect(result.primary.value).toBe('—');expect(result.secondary[0].value).toBe(c.errors.ru);});
 }
 for(const model of data.modes)for(const state of model.states)it(model.id+': independent signed/inverse mode '+JSON.stringify(state.input),()=>close(byId.get(model.id)!.compute(state.input as unknown as CalcInputs).primary.value,state.primary));
 for(const golden of data.pages)it(golden.id+'/'+golden.locale+': complete frozen copy incl three root metadata amendments',()=>{
  const d=byId.get(golden.id)!;const copy=golden.locale==='ru'?d.presentation:d.copy![golden.locale as 'en'|'uk'|'de'|'es'];expect(isCompleteCalculatorCopy(copy)).toBe(true);if(!isCompleteCalculatorCopy(copy))throw Error('Incomplete authored native copy');
  for(const key of ['name','slug','h1','shortDescription','seoTitle','seoDescription','longDescription','howItWorks','example','disclaimer','howToUse','faq'] as const)expect(copy[key]).toEqual(postAuditCopy(golden.id,golden.locale,golden.copy)[key]);
 });
});

it('all155 native static field descriptions preserve physical units and select/list semantics',()=>{for(const p of data.pages)for(const field of p.fields)expect(fieldUnitLabel(field as unknown as Field,p.locale as Locale,p.id)).toBe(field.staticUnit);});

// The signed mechanics model already accepted compression. This verifies that
// the declared form/URL fields now preserve those literal negative inputs too.
for(const locale of ['ru','en','uk','de','es']as const)it(`stress-strain/${locale}: signed force and delta survive query restoration`,()=>{
 const golden=data.pages.find(p=>p.id==='stress-strain'&&p.locale===locale)!;
 const fields=golden.fields as unknown as Field[];
 for(const name of ['force','delta']){expect(d25.presentation.fields.find(f=>f.name===name)!.signed).toBe(true);expect(fields.find(f=>f.name===name)!.signed).toBe(true);}
 for(const [mode,expected]of [['stress',-10],['modulus',2000],['elongation',-.1]]as const){
  const restored=readValuesFromSearch(fields,buildInitialValues(fields),`mode=${mode}&force=-100&area=10&length=20&delta=-0.1&e=2000`,locale);
  expect(restored.force).toBe(-100);expect(restored.delta).toBe(-.1);
  close(d25.compute(restored).primary.value,expected);
 }
});
