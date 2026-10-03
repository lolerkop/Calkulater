import {describe,expect,it} from 'vitest';
import {getCalculatorById} from '../src/lib/i18n';
import {getCalculatorEditorial} from '../src/data/calculatorEditorial';
import {getAutomotiveWave10MethodSources} from '../src/data/automotiveWave10MethodSources';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import fixtures from '../reports/originality-automotive-wave-10-browser-fixtures.json';
import {definition as d0} from '../src/calculators/car-depreciation/definition';
import {definition as d1} from '../src/calculators/compression-ratio/definition';
import {definition as d2} from '../src/calculators/engine-displacement/definition';
import {definition as d3} from '../src/calculators/fuel-consumption/definition';
import {definition as d4} from '../src/calculators/fuel-oil-mix/definition';
import {definition as d5} from '../src/calculators/power-to-weight/definition';
import {definition as d6} from '../src/calculators/quarter-mile-elapsed-time/definition';
import {definition as d7} from '../src/calculators/speed-distance-time/definition';
import {definition as d8} from '../src/calculators/stopping-distance/definition';
import {definition as d9} from '../src/calculators/tire-size/definition';
import {definition as d10} from '../src/calculators/trip-cost/definition';
import {definition as d11} from '../src/calculators/wheel-offset/definition';
const tools=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11 ];
const locales=['ru','en','uk','de','es'] as const;
// Prepared gate only: ROOT must wire complete native copy, source helper and units
// and generate a coherent snapshot before executing actual getBy assertions.
describe('AutomotiveWave10 sixty actual publication contracts',()=>{
 for(const tool of tools)for(const locale of locales)it(`${tool.id}/${locale} actual body metadata fields and sources match reviewed model`,()=>{
  const page=getCalculatorById(tool.id,locale)!;expect(page).toBeTruthy();
  const authored=locale==='ru'?tool.presentation:tool.copy?.[locale];expect(isCompleteCalculatorCopy(authored)).toBe(true);if(!isCompleteCalculatorCopy(authored))throw new Error('incomplete owned copy');
  expect(page.fullPath).toBe(fixtures.records.find(r=>r.id===tool.id&&r.locale===locale)!.url);
  for(const key of ['name','slug','h1','seoTitle','seoDescription','longDescription','howItWorks','example'] as const)expect(page[key]).toEqual(authored[key]);
  expect(page.keywords).toEqual(authored.keywords);expect(page.howToUse).toEqual(authored.howToUse);expect(page.faq).toEqual(authored.faq);
  expect(page.seoContent).toEqual({intro:authored.longDescription,howItWorks:authored.howItWorks,example:authored.example,tips:authored.howToUse.join(' '),faq:authored.faq});
  expect(page.fields.map(f=>f.name)).toEqual(tool.presentation.fields.map(f=>f.name));
  for(const field of page.fields){const base=tool.presentation.fields.find(f=>f.name===field.name)!;for(const key of ['defaultValue','type','min','max','step','signed','readOnly','optional','showIf'] as const)expect(field[key]).toEqual(base[key]);expect(field.options?.map(o=>o.value)).toEqual(base.options?.map(o=>o.value));if(base.unit)expect(field.unit).toBeTruthy();}
  expect(page.seoDescription.length).toBeGreaterThanOrEqual(80);expect(page.seoDescription.length).toBeLessThanOrEqual(180);
  const review=getCalculatorEditorial(page,locale);expect(review.method).toBe(authored.howItWorks);expect(review.limitation.trim()).not.toBe('');
  const sources=getAutomotiveWave10MethodSources(tool.id,locale);for(const source of sources)expect(review.sources).toContainEqual(source);
  if(locale==='en'||locale==='de'||locale==='es')expect([page.longDescription,page.howItWorks,page.example,...page.howToUse,...page.faq.map(f=>f.q+' '+f.a),...sources.map(s=>s.label)].join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
});
