import {describe,expect,it} from 'vitest';
import {getCalculatorById} from '../src/lib/i18n';
import {getCalculatorEditorial} from '../src/data/calculatorEditorial';
import {getBuildingWave16MethodSources} from '../src/data/buildingWave16MethodSources';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import fixtures from '../reports/originality-building-wave-16-browser-fixtures.json';
import {definition as d0} from '../src/calculators/rafters/definition';
import {definition as d1} from '../src/calculators/roof-area/definition';
import {definition as d2} from '../src/calculators/roof-battens/definition';
import {definition as d3} from '../src/calculators/room-volume/definition';
import {definition as d4} from '../src/calculators/sealant-volume/definition';
import {definition as d5} from '../src/calculators/skirting/definition';
import {definition as d6} from '../src/calculators/slab-foundation/definition';
import {definition as d7} from '../src/calculators/stairs/definition';
import {definition as d8} from '../src/calculators/strip-foundation/definition';
import {definition as d9} from '../src/calculators/tank-volume/definition';
import {definition as d10} from '../src/calculators/underfloor-heating/definition';
import {definition as d11} from '../src/calculators/wood-weight/definition';
const tools=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11];
const locales=['ru','en','uk','de','es'] as const;
// Prepared publication gate: requires ROOT's coherent integration of the full native
// copy, bounded source helper and mL unit map. No publication/browser approval implied.
describe('BuildingWave16 sixty actual publication contracts',()=>{
 for(const tool of tools)for(const locale of locales)it(`${tool.id}/${locale} reviewed body identity fields units and bounded sources`,()=>{
  const page=getCalculatorById(tool.id,locale)!;expect(page).toBeTruthy();
  const authored=locale==='ru'?tool.presentation:tool.copy?.[locale];
  expect(isCompleteCalculatorCopy(authored)).toBe(true);if(!isCompleteCalculatorCopy(authored))throw new Error('incomplete owned copy');
  expect(page.fullPath).toBe(fixtures.records.find(r=>r.id===tool.id&&r.locale===locale)!.url);
  for(const key of ['name','slug','h1','seoTitle','seoDescription','longDescription','howItWorks','example'] as const)expect(page[key]).toEqual(authored[key]);
  expect(page.keywords).toEqual(authored.keywords);expect(page.howToUse).toEqual(authored.howToUse);expect(page.faq).toEqual(authored.faq);
  expect(page.seoContent).toEqual({intro:authored.longDescription,howItWorks:authored.howItWorks,example:authored.example,tips:authored.howToUse.join(' '),faq:authored.faq});
  expect(page.fields.map(f=>f.name)).toEqual(tool.presentation.fields.map(f=>f.name));
  for(const field of page.fields){
   const base=tool.presentation.fields.find(f=>f.name===field.name)!;
   for(const key of ['defaultValue','type','min','max','step','signed','readOnly','optional','showIf'] as const)expect(field[key]).toEqual(base[key]);
   expect(field.options?.map(o=>o.value)).toEqual(base.options?.map(o=>o.value));if(base.unit)expect(field.unit).toBeTruthy();
   if(field.unit&&(locale==='en'||locale==='de'||locale==='es'))expect(field.unit).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
  }
  if(tool.id==='sealant-volume')expect(page.fields.find(f=>f.name==='cart')!.unit).toBe({ru:'мл',en:'mL',uk:'мл',de:'ml',es:'ml'}[locale]);
  expect(page.seoDescription.length).toBeGreaterThanOrEqual(80);expect(page.seoDescription.length).toBeLessThanOrEqual(180);
  const review=getCalculatorEditorial(page,locale);expect(review.method).toBe(authored.howItWorks);expect(review.limitation.trim()).not.toBe('');
  const sources=getBuildingWave16MethodSources(tool.id,locale);expect(review.sources).toEqual(sources);
  expect(sources.length).toBe(tool.id==='wood-weight'||tool.id==='sealant-volume'?1:0);
  if(locale==='en'||locale==='de'||locale==='es')expect([page.longDescription,page.howItWorks,page.example,...page.howToUse,...page.faq.map(f=>f.q+' '+f.a),...sources.map(s=>s.label)].join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
});
