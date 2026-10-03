import { describe, expect, it } from 'vitest';
import { isCompleteCalculatorCopy, type CalculatorCopy } from '../src/lib/platform/types';
import { getMathWave8MethodSources } from '../src/data/mathWave8MethodSources';
import editorial from '../reports/originality-math-wave-8-editorial-records.json';
import { statisticsMessages } from '../src/calculators/stats-descriptive/statisticsMessages';
import { definition as d0 } from '../src/calculators/binomial-probability/definition';
import { localization as l0 } from '../src/calculators/binomial-probability/localization';
import { definition as d1 } from '../src/calculators/confidence-interval/definition';
import { localization as l1 } from '../src/calculators/confidence-interval/localization';
import { definition as d2 } from '../src/calculators/correlation/definition';
import { localization as l2 } from '../src/calculators/correlation/localization';
import { definition as d3 } from '../src/calculators/dice-probability/definition';
import { localization as l3 } from '../src/calculators/dice-probability/localization';
import { definition as d4 } from '../src/calculators/probability-basic/definition';
import { localization as l4 } from '../src/calculators/probability-basic/localization';
import { definition as d5 } from '../src/calculators/quartile/definition';
import { localization as l5 } from '../src/calculators/quartile/localization';
import { definition as d6 } from '../src/calculators/roman-numerals/definition';
import { localization as l6 } from '../src/calculators/roman-numerals/localization';
import { definition as d7 } from '../src/calculators/rounding/definition';
import { localization as l7 } from '../src/calculators/rounding/localization';
import { definition as d8 } from '../src/calculators/sample-size/definition';
import { localization as l8 } from '../src/calculators/sample-size/localization';
import { definition as d9 } from '../src/calculators/stats-descriptive/definition';
import { localization as l9 } from '../src/calculators/stats-descriptive/localization';
import { definition as d10 } from '../src/calculators/weighted-mean/definition';
import { localization as l10 } from '../src/calculators/weighted-mean/localization';
import { definition as d11 } from '../src/calculators/z-score/definition';
import { localization as l11 } from '../src/calculators/z-score/localization';
const definitions=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11];
const bundles=[l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11];
const locales=['ru','en','uk','de','es'] as const;

describe('sixty complete individually reviewed authored copies, publication remains pending',()=>{
 for(const definition of definitions) for(const locale of locales) it(`${definition.id}/${locale} owns the read actual body after corrections`,()=>{
  const body=(locale==='ru'?definition.presentation:definition.copy![locale]!) as CalculatorCopy;
  if(locale!=='ru')expect(isCompleteCalculatorCopy(body)).toBe(true);
  const record=editorial.records.find(r=>r.id===definition.id&&r.locale===locale)!;
  for(const key of ['longDescription','howItWorks','howToUse','example','faq'] as const) expect(body[key]).toEqual(record.after[key]);
  expect(body.faq!.length).toBeGreaterThanOrEqual(4);
  expect(body.howToUse!.length).toBeGreaterThan(0);
  expect(body.seoDescription!.length).toBeGreaterThanOrEqual(80);expect(body.seoDescription!.length).toBeLessThanOrEqual(180);
  // Project metadata checks are editorial gates, not Google minimum-word rules.
 });
 for(const [index,definition] of definitions.entries()) for(const locale of ['en','uk','de','es'] as const) it(`${definition.id}/${locale}: native new error and range diagnostics`,()=>{
  for(const [key,expected] of Object.entries(statisticsMessages[locale])) expect(bundles[index][locale]?.values?.[key]).toBe(expected);
 });
});
describe('method sources support bounded definitions rather than product approval',()=>{
 for(const definition of definitions) for(const locale of locales) it(`${definition.id}/${locale} has method-specific sources or an explicit convention`,()=>{
  const sources=getMathWave8MethodSources(definition.id,locale);
  if(definition.id==='roman-numerals') expect(sources).toEqual([]);
  else {
   expect(sources.length).toBeGreaterThan(0);
   for(const source of sources){expect(source.href).toMatch(/^https:\/\//);expect(source.label.length).toBeGreaterThan(12);}
  }
 });
 it('unsupported and inherited object keys do not receive invented sources',()=>{
  expect(getMathWave8MethodSources('unknown','en')).toEqual([]);expect(getMathWave8MethodSources('__proto__','en')).toEqual([]);
 });
 it('unknown locale falls back to English for a known method',()=>expect(getMathWave8MethodSources('quartile','fr')).toEqual(getMathWave8MethodSources('quartile','en')));
 it('CI sources explicitly distinguish known and unknown sigma',()=>{
  const sources=getMathWave8MethodSources('confidence-interval','en');expect(sources).toHaveLength(2);
  expect(sources[0].label).toContain('known σ');expect(sources[1].label).toContain('t method');
 });
 it('quartile source scope distinguishes type7 from boxplot hinges',()=>{
  const sources=getMathWave8MethodSources('quartile','en');expect(sources[0].label).toContain('type 7');expect(sources[1].label).toContain('hinges');
 });

 it('four numeric-list fields describe data units and correlation keeps independent X/Y units',()=>{
  expect(d9.presentation.fields.find(f=>f.name==='values')?.unit).toBe('ед. данных');
  expect(d5.presentation.fields.find(f=>f.name==='values')?.unit).toBe('ед. данных');
  expect(d2.presentation.fields.filter(f=>['xs','ys'].includes(f.name)).map(f=>f.unit)).toEqual(['ед. данных','ед. данных']);
  expect(d2.copy!.en!.howItWorks).toContain('X and Y may have different units');
  expect(d10.presentation.fields.find(f=>f.name==='pairs')?.unit).toBeUndefined();
 });
 it('five data-bearing scalar fields have explicit data units',()=>{
  expect(d1.presentation.fields.filter(f=>['mean','sd'].includes(f.name)).map(f=>f.unit)).toEqual(['ед. данных','ед. данных']);
  expect(d11.presentation.fields.filter(f=>['x','mean','sd'].includes(f.name)).map(f=>f.unit)).toEqual(['ед. данных','ед. данных','ед. данных']);
 });
});
