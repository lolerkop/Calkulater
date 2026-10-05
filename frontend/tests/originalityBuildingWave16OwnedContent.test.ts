import { postAuditCopy } from './helpers/postAuditAmendments';
import {describe,it,expect} from 'vitest';
import {isCompleteCalculatorCopy,type CalculatorCopy} from '../src/lib/platform/types';
import {parseLocalizedNumber} from '../src/lib/format';
import {getBuildingWave16MethodSources} from '../src/data/buildingWave16MethodSources';
import {buildingWave16Messages} from '../src/calculators/rafters/buildingWave16Messages';
import editorial from '../reports/originality-building-wave-16-editorial-records.json';
import before from './originalityBuildingWave16MetadataBefore.json';
import {definition as d0} from '../src/calculators/rafters/definition';
import {localization as l0} from '../src/calculators/rafters/localization';
import {definition as d1} from '../src/calculators/roof-area/definition';
import {localization as l1} from '../src/calculators/roof-area/localization';
import {definition as d2} from '../src/calculators/roof-battens/definition';
import {localization as l2} from '../src/calculators/roof-battens/localization';
import {definition as d3} from '../src/calculators/room-volume/definition';
import {localization as l3} from '../src/calculators/room-volume/localization';
import {definition as d4} from '../src/calculators/sealant-volume/definition';
import {localization as l4} from '../src/calculators/sealant-volume/localization';
import {definition as d5} from '../src/calculators/skirting/definition';
import {localization as l5} from '../src/calculators/skirting/localization';
import {definition as d6} from '../src/calculators/slab-foundation/definition';
import {localization as l6} from '../src/calculators/slab-foundation/localization';
import {definition as d7} from '../src/calculators/stairs/definition';
import {localization as l7} from '../src/calculators/stairs/localization';
import {definition as d8} from '../src/calculators/strip-foundation/definition';
import {localization as l8} from '../src/calculators/strip-foundation/localization';
import {definition as d9} from '../src/calculators/tank-volume/definition';
import {localization as l9} from '../src/calculators/tank-volume/localization';
import {definition as d10} from '../src/calculators/underfloor-heating/definition';
import {localization as l10} from '../src/calculators/underfloor-heating/localization';
import {definition as d11} from '../src/calculators/wood-weight/definition';
import {localization as l11} from '../src/calculators/wood-weight/localization';
const definitions=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11];
const bundles=[l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11];
const locales=['ru','en','uk','de','es']as const;
describe('60 owned native bodies and inherited published examples, identity, defaults',()=>{
 for(const tool of definitions)for(const locale of locales)it(`${tool.id}/${locale}: reviewed exact body and retained identity`,()=>{
  const body=(locale==='ru'?tool.presentation:tool.copy![locale]!)as CalculatorCopy;
  const record=editorial.records.find(r=>r.id===tool.id&&r.locale===locale)!;
  const old=before.find(r=>r.id===tool.id&&r.locale===locale)!;
  expect(isCompleteCalculatorCopy(body)).toBe(true);
  for(const key of ['longDescription','howItWorks','howToUse','example','faq','disclaimer']as const)expect(body[key]).toEqual(postAuditCopy(tool.id,locale,record.after as Record<string,unknown>)[key]);
  for(const key of ['name','slug','h1','seoTitle','shortDescription','keywords']as const)expect(body[key]).toEqual(old.metadata[key]);
  if(tool.id==='stairs'&&locale==='de')expect(body.seoDescription).toContain('gewählter Maximalsteigung');else expect(body.seoDescription).toBe(old.metadata.seoDescription);
  expect(body.seoDescription!.length).toBeGreaterThanOrEqual(80);expect(body.seoDescription!.length).toBeLessThanOrEqual(180);
  expect(body.example).toBe(record.before.example);
  expect(body.faq!.map(f=>f.q)).toEqual(record.before.faq.map(f=>f.q));
  expect(Object.fromEntries(tool.presentation.fields.map(f=>[f.name,f.defaultValue??'']))).toEqual(old.defaults);
  if(locale==='en'||locale==='de'||locale==='es')expect([body.longDescription,body.howItWorks,body.example,...body.howToUse!,...body.faq!.map(f=>f.q+' '+f.a)].join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
 for(const[i,tool]of definitions.entries())for(const locale of ['en','uk','de','es']as const)it(`${tool.id}/${locale}: new errors and explanations owned`,()=>{
  for(const[key,text]of Object.entries(buildingWave16Messages[locale]))expect(bundles[i][locale]?.values?.[key]).toBe(text);
 });
});
describe('bounded primary methods and truthful fixed field units',()=>{
 for(const tool of definitions)for(const locale of locales)it(`${tool.id}/${locale}: appropriate actually read source only`,()=>{
  const sources=getBuildingWave16MethodSources(tool.id,locale);
  if(['wood-weight','sealant-volume'].includes(tool.id)){expect(sources).toHaveLength(1);expect(sources[0].href).toMatch(/^https:\/\//);expect(sources[0].label.length).toBeGreaterThan(20);}else expect(sources).toEqual([]);
 });
 it('unknown/prototype IDs have no citation',()=>{for(const id of ['other','__proto__','constructor'])expect(getBuildingWave16MethodSources(id,'en')).toEqual([]);});
 it('unsupported locale uses the reviewed English source label',()=>expect(getBuildingWave16MethodSources('wood-weight','fr')).toEqual(getBuildingWave16MethodSources('wood-weight','en')));
 it('all physical numbers have unit metadata, opening count stays unitless',()=>{
  expect(definitions.flatMap(d=>d.presentation.fields.filter(f=>f.type==='number'&&!f.unit).map(f=>`${d.id}.${f.name}`))).toEqual(['skirting.doors']);
  expect(d1.presentation.fields.find(f=>f.name==='angle')!.unit).toBe('°');expect(d1.presentation.fields.find(f=>f.name==='angle')!.max).toBe(90);
  expect(d4.presentation.fields.find(f=>f.name==='cart')!.unit).toBe('мл');
 });
 for(const locale of locales)it(`tank/${locale}: dynamic dimensions follow real selected shape`,()=>{
  const len=d9.presentation.fields.find(f=>f.name==='len')!,diameter=d9.presentation.fields.find(f=>f.name==='d')!,ctx=d9.contextualField!;
  expect(ctx(len,{shape:'capsule'},locale).help).toBeTruthy();expect(ctx(len,{shape:'capsule'},locale).label).not.toBe(ctx(len,{shape:'vertical-cylinder'},locale).label);
  expect(ctx(diameter,{shape:'rect'},locale).label).not.toBe(ctx(diameter,{shape:'vertical-cylinder'},locale).label);
  expect(ctx(len,{},locale)).toEqual(ctx(len,{shape:'vertical-cylinder'},locale));
  for(const bad of ['alien','',true])expect(ctx(len,{shape:bad},locale)).toBe(len);
  expect(ctx(len,{shape:'capsule'},locale).unit).toBe('м');
 });
 it('the wood source is explicitly not validation of the inherited density constants',()=>{expect(getBuildingWave16MethodSources('wood-weight','en')[0].label).toContain('not verification');expect(d11.copy!.en!.howItWorks).toContain('volume change');expect(d11.copy!.en!.howItWorks).toContain('not a physical maximum');});
 it('continuous battens volume and concrete-only reserve remain explicit',()=>{expect(d2.copy!.en!.howItWorks).toContain('continuous');expect(d2.copy!.en!.faq![2].a).toContain('0.48');expect(d6.copy!.en!.howItWorks).toContain('only to concrete');expect(d6.copy!.en!.faq![0].a).toContain('does not reach');});
 it('310mL/10x10mm coverage is 3.1m in the Ukrainian visible answer',()=>expect((d4.copy!.uk! as CalculatorCopy).faq![2].a).toContain('3,1 м'));
});
describe('whole opening count native validation occurs before Number erases a fraction',()=>{
 for(const locale of locales)it(`skirting/${locale}: exact raw whole-number contract`,()=>{
  const key='Введите целые числа в допустимом диапазоне';const text=locale==='ru'?key:buildingWave16Messages[locale][key];
  const context=(raw:string)=>({values:{doors:raw},locale,fields:d5.presentation.fields,parseNumber:(s:string)=>parseLocalizedNumber(s,locale)});
  for(const raw of ['3.00000000000000001','9007199254740991.1'])expect(d5.validate!(context(raw)).doors).toBe(text);
  for(const raw of ['3','3.0000','3e0',''])expect(d5.validate!(context(raw))).toEqual({});
  // The existing form parser rejects scientific grammar itself; a null parse stays with shared validation.
  expect(d5.validate!(context('3.00000000000000001e0'))).toEqual({});
  expect(d5.compute({length:5,width:4,doors:'3.00000000000000001e0',doorWidth:.9,plank:2.5,waste:0}).primary.value).toBe('—');
 });
});
