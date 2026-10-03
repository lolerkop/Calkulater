import {describe,expect,it} from 'vitest';
import {getCalculatorById} from '../src/lib/i18n';
import {getCalculatorEditorial} from '../src/data/calculatorEditorial';
import {getBuildingWave13MethodSources} from '../src/data/buildingWave13MethodSources';
import {isCompleteCalculatorCopy} from '../src/lib/platform/types';
import fixtures from '../reports/originality-building-wave-13-browser-fixtures.json';
import {definition as d0} from '../src/calculators/air-exchange/definition';
import {definition as d1} from '../src/calculators/baluster-spacing/definition';
import {definition as d2} from '../src/calculators/beam-deflection/definition';
import {definition as d3} from '../src/calculators/beam-stress/definition';
import {definition as d4} from '../src/calculators/board-volume/definition';
import {definition as d5} from '../src/calculators/bulk-material-volume/definition';
import {definition as d6} from '../src/calculators/cladding-boards/definition';
import {definition as d7} from '../src/calculators/concrete/definition';
import {definition as d8} from '../src/calculators/drywall/definition';
import {definition as d9} from '../src/calculators/epoxy-volume/definition';
import {definition as d10} from '../src/calculators/fence/definition';
import {definition as d11} from '../src/calculators/insulation/definition';
import {definition as d12} from '../src/calculators/linoleum/definition';
import {definition as d13} from '../src/calculators/metal-weight/definition';
import {definition as d14} from '../src/calculators/miter-angle/definition';
import {definition as d15} from '../src/calculators/pile-foundation/definition';
import {definition as d16} from '../src/calculators/pipe-weight/definition';
import {definition as d17} from '../src/calculators/plaster/definition';
const tools=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17];
const locales=['ru','en','uk','de','es'] as const;
// Prepared gate only: ROOT must wire complete native copy, source helper and nine missing/composite units
// and generate a coherent snapshot before executing actual getBy assertions.
describe('BuildingWave13 ninety actual publication contracts',()=>{
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
  const sources=getBuildingWave13MethodSources(tool.id,locale);expect(review.sources).toEqual(sources);
  for(const field of page.fields){if(field.unit&&(locale==='en'||locale==='de'||locale==='es'))expect(field.unit).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);}
  const price=page.fields.find(f=>f.name==='pricePerM3');if(price&&locale!=='ru')expect(price.unit).toBe('RUB/m³');
  if(tool.id==='beam-deflection')expect(page.fields.find(f=>f.name==='load')!.unit).toBe({ru:'кН/м или кН',en:'kN/m or kN',uk:'кН/м або кН',de:'kN/m oder kN',es:'kN/m o kN'}[locale]);
  if(locale==='en'||locale==='de'||locale==='es')expect([page.longDescription,page.howItWorks,page.example,...page.howToUse,...page.faq.map(f=>f.q+' '+f.a),...sources.map(s=>s.label)].join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
});
