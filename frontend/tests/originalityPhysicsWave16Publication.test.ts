import { postAuditCopy } from './helpers/postAuditAmendments';
import { describe, expect, it } from 'vitest';
import fixtureJson from './fixtures/originality-physics-wave-16-publication.json';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getPhysicsWave16MethodSources } from '../src/data/physicsWave16MethodSources';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import type { Field } from '../src/lib/types';

type Locale = 'ru'|'en'|'uk'|'de'|'es';
type Copy = {name:string;slug:string;h1:string;shortDescription:string;seoTitle:string;seoDescription:string;longDescription:string;howItWorks:string;example:string;howToUse:string[];faq:{q:string;a:string}[];disclaimer:string};
interface PageGolden {id:string;locale:Locale;route:string;copy:Copy;fields:(Field & {staticUnit:string})[];sources:{href:string;label:string}[];}
interface ModeGolden {id:string;field:string;states:{input:Record<string,string|number>;primary:number;active:string[]}[];}
const fixture = fixtureJson as unknown as {pages:PageGolden[];modes:ModeGolden[];locales:Locale[];defaults:Record<string,Record<string,string|number>>};
// Prepared against frozen authored31. This imports the actual publication path
// intentionally: ROOT must integrate copy priority, six unit aliases and sources
// and regenerate before running it. Source equality alone is not SSR approval.
describe('Physics31: all155 effective published native bodies, routes, fields and bounded sources',()=>{
 for (const golden of fixture.pages) it(`${golden.id}/${golden.locale}: actual authored content and dimensional contract`,()=>{
  const actual=getCalculatorById(golden.id,golden.locale);expect(actual).toBeDefined();if(!actual)throw new Error('Missing published physics route');
  expect(actual.fullPath).toBe(golden.route);
  for(const key of ['name','slug','h1','shortDescription','seoTitle','seoDescription','longDescription','howItWorks','example','disclaimer'] as const)expect(actual[key]).toBe(postAuditCopy(golden.id,golden.locale,golden.copy)[key]);
  expect(actual.seoDescription.length).toBeGreaterThanOrEqual(80);expect(actual.seoDescription.length).toBeLessThanOrEqual(180); // Existing internal metadata guard, not a Google word rule.
  expect(actual.howToUse).toEqual(postAuditCopy(golden.id,golden.locale,golden.copy).howToUse);expect(actual.faq).toEqual(postAuditCopy(golden.id,golden.locale,golden.copy).faq);
  expect(actual.seoContent).toEqual({intro:postAuditCopy(golden.id,golden.locale,golden.copy).longDescription,howItWorks:postAuditCopy(golden.id,golden.locale,golden.copy).howItWorks,example:postAuditCopy(golden.id,golden.locale,golden.copy).example,tips:postAuditCopy(golden.id,golden.locale,golden.copy).howToUse.join(' '),faq:postAuditCopy(golden.id,golden.locale,golden.copy).faq});
  expect(actual.fields.map(f=>f.name)).toEqual(golden.fields.map(f=>f.name));
  for(const [index,field]of actual.fields.entries()){
   const expected=golden.fields[index];
   for(const key of ['label','type','defaultValue','signed','min','max','optional','step','showIf','unit','options'] as const)expect(field[key]).toEqual(expected[key]);
   expect(fieldUnitLabel(field,golden.locale,golden.id)).toBe(expected.staticUnit);
  }
  expect(getPhysicsWave16MethodSources(golden.id,golden.locale)).toEqual(golden.sources);
  const editorial=getCalculatorEditorial(actual,golden.locale);expect(editorial.method).toBe(postAuditCopy(golden.id,golden.locale,golden.copy).howItWorks);expect(editorial.limitation).toContain(postAuditCopy(golden.id,golden.locale,golden.copy).disclaimer);
  for(const source of golden.sources)expect(editorial.sources).toContainEqual(source);
  expect(golden.sources.length).toBeGreaterThan(0);
  if(['en','de','es'].includes(golden.locale))expect(JSON.stringify([actual.fields,golden.sources,actual.disclaimer])).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
});
describe('Physics31: actual known-field visibility and source allowlist boundaries',()=>{
 it('exact155 identities,31 canonical IDs and32 source assignments',()=>{
  expect(fixture.pages).toHaveLength(155);const ru=fixture.pages.filter(p=>p.locale==='ru');expect(new Set(ru.map(p=>p.id)).size).toBe(31);expect(ru.reduce((n,p)=>n+p.sources.length,0)).toBe(32);expect(new Set(fixture.pages.map(p=>p.route)).size).toBe(155);
 });
 for(const locale of fixture.locales)for(const model of fixture.modes)it(`${model.id}/${locale}: only known active inputs in every supported mode`,()=>{
  const actual=getCalculatorById(model.id,locale)!;
  for(const state of model.states){
   const values={...fixture.defaults[model.id],...state.input};
   expect(actual.fields.filter(f=>f.name!==model.field&&isFieldVisible(f,values)).map(f=>f.name).sort()).toEqual([...state.active].sort());
  }
 });
 for(const locale of fixture.locales)it(`${locale}: unknown unreviewed/prototype IDs receive no decorative source`,()=>{
  for(const id of ['unreviewed-physics','constructor','toString','__proto__'])expect(getPhysicsWave16MethodSources(id,locale)).toEqual([]);
 });
});
