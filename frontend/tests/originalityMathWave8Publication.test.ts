import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getMathWave8MethodSources } from '../src/data/mathWave8MethodSources';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import report from '../reports/originality-math-wave-8.json';
import { definition as d0 } from '../src/calculators/binomial-probability/definition';
import { definition as d1 } from '../src/calculators/confidence-interval/definition';
import { definition as d2 } from '../src/calculators/correlation/definition';
import { definition as d3 } from '../src/calculators/dice-probability/definition';
import { definition as d4 } from '../src/calculators/probability-basic/definition';
import { definition as d5 } from '../src/calculators/quartile/definition';
import { definition as d6 } from '../src/calculators/roman-numerals/definition';
import { definition as d7 } from '../src/calculators/rounding/definition';
import { definition as d8 } from '../src/calculators/sample-size/definition';
import { definition as d9 } from '../src/calculators/stats-descriptive/definition';
import { definition as d10 } from '../src/calculators/weighted-mean/definition';
import { definition as d11 } from '../src/calculators/z-score/definition';
// Prepared publication gate: execute only after ROOT source/priority/unit wiring
// and coherent generation. Full authored copy is not proof of effective output.
// No compute function derives a numerical expectation in this test.
const tools=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11];
const locales=['ru','en','uk','de','es'] as const;
const dataFields: Record<string,readonly string[]>={
 'confidence-interval':['mean','sd'],'z-score':['x','mean','sd'],
 'stats-descriptive':['values'],quartile:['values'],correlation:['xs','ys'],
};
const dataUnit={ru:'ед. данных',en:'data unit',uk:'од. даних',de:'Dateneinheit',es:'unidad de los datos'} as const;
describe('MathWave8 sixty actual published bodies, metadata, fields and bounded source integration',()=>{
 for(const tool of tools)for(const locale of locales)it(`${tool.id}/${locale}: effective page equals frozen authored model`,()=>{
  const page=getCalculatorById(tool.id,locale);if(!page)throw new Error('missing public page');
  const authored=locale==='ru'?tool.presentation:tool.copy?.[locale];
  expect(isCompleteCalculatorCopy(authored)).toBe(true);if(!isCompleteCalculatorCopy(authored))throw new Error('incomplete authored copy');
  const before=report.editorial.perUrlDecisions.find(r=>r.id===tool.id&&r.locale===locale)!;
  expect(page.fullPath).toBe(before.url);
  for(const key of ['name','slug','h1','seoTitle','seoDescription','longDescription','howItWorks','example'] as const)expect(page[key]).toBe(authored[key]);
  expect(page.keywords).toEqual(authored.keywords);expect(page.howToUse).toEqual(authored.howToUse);expect(page.faq).toEqual(authored.faq);
  expect(page.seoContent).toEqual({intro:authored.longDescription,howItWorks:authored.howItWorks,example:authored.example,tips:authored.howToUse.join(' '),faq:authored.faq});
  // Existing metadata bounds belong to project QA, not Google word quotas.
  expect(page.seoDescription.length).toBeGreaterThanOrEqual(80);expect(page.seoDescription.length).toBeLessThanOrEqual(180);
  expect(page.fields.map(field=>field.name)).toEqual(tool.presentation.fields.map(field=>field.name));
  for(const field of page.fields){
   const original=tool.presentation.fields.find(f=>f.name===field.name)!;
   for(const key of ['defaultValue','type','signed','min','max','step','optional','readOnly','showIf'] as const)expect(field[key]).toEqual(original[key]);
   expect(field.options?.map(option=>option.value)).toEqual(original.options?.map(option=>option.value));
   if(dataFields[tool.id]?.includes(field.name)){expect(field.unit).toBe(dataUnit[locale]);expect(fieldUnitLabel(field,locale,tool.id)).toBe(dataUnit[locale]);}
  }
  const editorial=getCalculatorEditorial(page,locale);expect(editorial.method).toBe(authored.howItWorks);expect(editorial.limitation.trim()).not.toBe('');
  const sources=getMathWave8MethodSources(tool.id,locale);
  if(tool.id==='roman-numerals')expect(sources).toEqual([]);
  else{expect(sources.length).toBeGreaterThan(0);for(const source of sources)expect(editorial.sources).toContainEqual(source);}
  if(locale==='en'||locale==='de'||locale==='es')expect([page.longDescription,page.howItWorks,page.example,...page.howToUse,...page.faq.map(f=>f.q+' '+f.a),...sources.map(s=>s.label)].join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 }
 );
});
