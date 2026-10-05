import { postAuditCopy } from './helpers/postAuditAmendments';
import { describe, expect, it } from 'vitest';
import { definition as d0 } from '../src/calculators/car-depreciation/definition';
import { localization as l0 } from '../src/calculators/car-depreciation/localization';
import { definition as d1 } from '../src/calculators/compression-ratio/definition';
import { localization as l1 } from '../src/calculators/compression-ratio/localization';
import { definition as d2 } from '../src/calculators/engine-displacement/definition';
import { localization as l2 } from '../src/calculators/engine-displacement/localization';
import { definition as d3 } from '../src/calculators/fuel-consumption/definition';
import { localization as l3 } from '../src/calculators/fuel-consumption/localization';
import { definition as d4 } from '../src/calculators/fuel-oil-mix/definition';
import { localization as l4 } from '../src/calculators/fuel-oil-mix/localization';
import { definition as d5 } from '../src/calculators/power-to-weight/definition';
import { localization as l5 } from '../src/calculators/power-to-weight/localization';
import { definition as d6 } from '../src/calculators/quarter-mile-elapsed-time/definition';
import { localization as l6 } from '../src/calculators/quarter-mile-elapsed-time/localization';
import { definition as d7 } from '../src/calculators/speed-distance-time/definition';
import { localization as l7 } from '../src/calculators/speed-distance-time/localization';
import { definition as d8 } from '../src/calculators/stopping-distance/definition';
import { localization as l8 } from '../src/calculators/stopping-distance/localization';
import { definition as d9 } from '../src/calculators/tire-size/definition';
import { localization as l9 } from '../src/calculators/tire-size/localization';
import { definition as d10 } from '../src/calculators/trip-cost/definition';
import { localization as l10 } from '../src/calculators/trip-cost/localization';
import { definition as d11 } from '../src/calculators/wheel-offset/definition';
import { localization as l11 } from '../src/calculators/wheel-offset/localization';
const definitions=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11 ];
const bundles=[l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11 ];
const locales=['ru','en','uk','de','es'] as const;

import { isCompleteCalculatorCopy, type CalculatorCopy } from '../src/lib/platform/types';
import { getAutomotiveWave10MethodSources } from '../src/data/automotiveWave10MethodSources';
import { automotiveMessages } from '../src/calculators/engine-displacement/automotiveMessages';
import editorial from '../reports/originality-automotive-wave-10-editorial-records.json';
import before from './originalityAutomotiveWave10MetadataBefore.json';
describe('60 individually reviewed complete native copies and unchanged identity',()=>{
 for(const tool of definitions) for(const locale of locales) it(`${tool.id}/${locale}: actual reviewed body and preserved metadata`,()=>{
  const body=(locale==='ru'?tool.presentation:tool.copy![locale]!) as CalculatorCopy;
  if(locale!=='ru')expect(isCompleteCalculatorCopy(body)).toBe(true);
  const record=editorial.records.find(r=>r.id===tool.id&&r.locale===locale)!;
  for(const key of ['longDescription','howItWorks','howToUse','example','faq'] as const)expect(body[key]).toEqual(postAuditCopy(tool.id,locale,record.after)[key]);
  const old=before.find(r=>r.id===tool.id&&r.locale===locale)!;
  for(const key of ['name','slug','h1','seoTitle','shortDescription','keywords'] as const)expect(body[key]).toEqual(old.metadata[key]);
  const amendedDescription=tool.id==='fuel-consumption'&&locale==='uk'?'Розрахуйте витрату пального в л/100 км або км/л за літрами й пробігом, а також потрібний об’єм для заданого маршруту.':tool.id==='tire-size'&&locale==='de'?old.metadata.seoDescription?.replace('Abrolldurchmesser','Außendurchmesser'):old.metadata.seoDescription;
  expect(body.seoDescription).toBe(amendedDescription);
  expect(body.seoDescription!.length).toBeGreaterThanOrEqual(80);expect(body.seoDescription!.length).toBeLessThanOrEqual(180);
  expect(Object.fromEntries(tool.presentation.fields.map(f=>[f.name,f.defaultValue??'']))).toEqual(old.defaults);
  expect(body.example).toBeTruthy(); expect(body.faq!.length).toBeGreaterThanOrEqual(4);
 });
 for(const [index,tool] of definitions.entries()) for(const locale of ['en','uk','de','es'] as const) it(`${tool.id}/${locale} owns native new diagnostics`,()=>{
  for(const [key,value] of Object.entries(automotiveMessages[locale]))expect(bundles[index][locale]?.values?.[key]).toBe(value);
 });
});
describe('source scope and actual field-unit contracts',()=>{
 for(const tool of definitions) for(const locale of locales) it(`${tool.id}/${locale} supplies bounded primary method or explicit own algebra`,()=>{
  const s=getAutomotiveWave10MethodSources(tool.id,locale);
  if(['car-depreciation','engine-displacement','trip-cost'].includes(tool.id))expect(s).toEqual([]);
  else{expect(s.length).toBeGreaterThan(0);for(const source of s){expect(source.href).toMatch(/^https:\/\//);expect(source.label).toBeTruthy();}}
 });
 it('unknown tool has no sources',()=>expect(getAutomotiveWave10MethodSources('unknown','ru')).toEqual([]));
 it('unknown language falls back to real English labels',()=>expect(getAutomotiveWave10MethodSources('tire-size','fr')).toEqual(getAutomotiveWave10MethodSources('tire-size','en')));
 it('quarter-mile citation supports units only and no calibration claim',()=>{const s=getAutomotiveWave10MethodSources('quarter-mile-elapsed-time','en');expect(s).toHaveLength(1);expect(s[0].label).toContain('units');expect(s[0].label).toContain('rounded');expect(d6.copy!.en!.longDescription).toContain('original calibration has not been verified');expect(d6.copy!.en!.howItWorks).toContain('5.825');});
 it('four-stroke mixture exception has an actual manufacturer source',()=>expect(getAutomotiveWave10MethodSources('fuel-oil-mix','en').some(s=>s.label.includes('4-MIX'))).toBe(true));
 it('tire method promises nominal geometry rather than rolling measurement',()=>expect(d9.copy!.en!.howItWorks).toContain('nominal unloaded'));
 it('wheel default flange allowance is explicitly nominal',()=>expect(d11.copy!.en!.howItWorks).toContain('assumes 0.5 inch'));
 it('stopping model discloses the linear grade approximation',()=>expect(d8.copy!.en!.howItWorks).toContain('not an exact inclined-plane'));
 it('fuel kml litres and all dimensional fields are annotated',()=>{
  const absent=definitions.flatMap(d=>d.presentation.fields.filter(f=>f.type==='number'&&!f.unit).map(f=>`${d.id}.${f.name}`));
  expect(absent).toEqual(['fuel-oil-mix.ratio','stopping-distance.mu','trip-cost.passengers']);
 });
 for(const locale of locales) it(`power contextual units ${locale} are selected without guessing invalid enums`,()=>{
  const field=d5.presentation.fields.find(f=>f.name==='power')!;
  const ctx=d5.contextualField!;
  expect(ctx(field,{powerUnit:'ps'},locale).unit).toBe('PS');expect(ctx(field,{powerUnit:'kw'},locale).unit).toBe('kW');
  expect(ctx(field,{powerUnit:'ps'},locale).help).toContain('735');
  for(const invalid of ['unknown','',false])expect(ctx(field,{powerUnit:invalid},locale)).toBe(field);
 });
 for(const locale of ['en','uk','de','es'] as const) it(`quarter-mile ${locale} has mechanical hp in label and secondary`,()=>{expect(bundles[6][locale]?.fields?.power).toContain('hp');expect(bundles[6][locale]?.values?.['л.с./т']).toMatch(/^hp\//);});
});
