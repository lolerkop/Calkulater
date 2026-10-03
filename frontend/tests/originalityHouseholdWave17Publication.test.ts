import {expect,it} from 'vitest';
import fixture from './fixtures/originalityHouseholdWave17Publication.json';
import {getCalculatorById} from '../src/lib/i18n';
import {getCalculatorEditorial} from '../src/data/calculatorEditorial';
import {getHouseholdWave17MethodSources} from '../src/data/householdWave17MethodSources';
import {runtimeFor} from '../src/calculators/runtime.generated';
import {fieldUnitLabel} from '../src/lib/fieldUnitLabel';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import type {Locale} from '../src/lib/clientI18n';
import type {Field} from '../src/lib/types';
import type {CalculatorFormValues,CalculatorLocaleBundle} from '../src/lib/platform/types';
// Literal field-unit contract; locale order is ru/en/uk/de/es.
const unitLocales=['ru','en','uk','de','es'];
const nativeUnits:Record<string,string[]>={
 'см':['см','cm','см','cm','cm'], '1':['1','1','1','1','1'], '%':['%','%','%','%','%'],
 'г':['г','g','г','g','g'], 'ч':['ч','h','год','h','h'], 'Вт':['Вт','W','Вт','W','W'],
 '₽':['₽','$','₴','€','€'], '₽/кВт·ч':['₽/кВт·ч','$/kWh','₴/кВт·год','€/kWh','€/kWh'],
 '₽/ч':['₽/ч','$/h','₴/год','€/h','€/h'], '₽/ночь':['₽/ночь','$/night','₴/ніч','€/Nacht','€/noche'],
 '₽/(чел.·день)':['₽/(чел.·день)','$/person/day','₴/особу/день','€/Person/Tag','€/persona/día'],
 'дней':['дней','days','днів','Tage','días'], 'ночей':['ночей','nights','ночей','Nächte','noches'],
 'чел.':['чел.','people','осіб','Personen','personas'],
 'выбранная единица':['выбранная единица','selected unit','обрана одиниця','gewählte Einheit','unidad elegida'],
 'общая единица':['общая единица','same chosen unit','спільна одиниця','gleiche gewählte Einheit','misma unidad elegida'],
 'общая единица/сутки':['общая единица/сутки','same unit/day','спільна одиниця/добу','gleiche Einheit/Tag','misma unidad/día'],
};
for(const p of fixture.pages){const locale=p.locale as Locale;
 it(p.id+'/'+p.locale+': all actual public body, metadata, paths and bounded sources match frozen owned copy',()=>{
  const actual=getCalculatorById(p.id,locale);expect(actual).toBeDefined();if(!actual)throw new Error('Missing public calculator');
  expect(actual.fullPath).toBe(p.path);
  for(const key of ['name','slug','h1','shortDescription','seoTitle','seoDescription'] as const)expect(actual[key]).toBe(p[key]);
  for(const key of ['longDescription','howToUse','howItWorks','example','faq','disclaimer'] as const)expect(actual[key]).toEqual(p.body[key]);
  expect(actual.seoContent).toEqual({intro:p.body.longDescription,howItWorks:p.body.howItWorks,example:p.body.example,tips:p.body.howToUse.join(' '),faq:p.body.faq});
  const editorial=getCalculatorEditorial(actual,locale);expect(editorial.method).toBe(p.body.howItWorks);expect(editorial.limitation).toContain(p.body.disclaimer);
  expect(getHouseholdWave17MethodSources(p.id,locale).map(s=>s.href)).toEqual(p.sources);expect(editorial.sources.map(s=>s.href)).toEqual(p.sources);
 });
 it(p.id+'/'+p.locale+': actual field names/defaults/native labels/units and runtime source hooks agree',()=>{
  const actual=getCalculatorById(p.id,locale)!;const runtime=runtimeFor(p.id);const source=fixture.source.find(d=>d.id===p.id)!;
  const bundle=(source.localization as unknown as Record<string,CalculatorLocaleBundle>)[p.locale];
  const values=p.defaults as unknown as CalculatorFormValues;expect(actual.fields.map(f=>f.name)).toEqual(p.canonicalFields.map(f=>f.name));
  for(const [i,f]of actual.fields.entries()){
   const b=p.canonicalFields[i] as unknown as Field;for(const k of ['name','type','defaultValue','min','max','step','optional','showIf','signed','readOnly'] as const)expect(f[k]).toEqual(b[k]);
   expect(f.options?.map(o=>o.value)).toEqual(b.options?.map(o=>o.value));
   expect(f.label).toBe(p.locale==='ru'?b.label:bundle.fields?.[f.name]??b.label);
   if(f.type==='number'){expect(nativeUnits[b.unit??'']).toBeDefined();expect(f.unit).toBe(nativeUnits[b.unit??''][unitLocales.indexOf(p.locale)]);expect(fieldUnitLabel(f,locale,p.id)).toBe(f.unit);}
   const contextual=runtime.contextualField?.(f,values,locale)??f;
   if(['en','de','es'].includes(p.locale)){expect(JSON.stringify([f.label,f.unit,f.options])).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);expect(JSON.stringify([contextual.label,contextual.unit,contextual.help])).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);}
  }
  expect(Boolean(runtime.contextualField)).toBe(['price-per-unit','stock-duration','print-3d-cost','trip-budget'].includes(p.id));expect(Boolean(runtime.validate)).toBe(['tip','trip-budget'].includes(p.id));
  const result=localizeResult(runtime.compute(p.id==='subscriptions-cost'?{items:'Streaming 299 1\nCloud 1990 12\nMusic 169 1'}:values),locale,p.id,runtime);expect(result).toEqual(p.sourceLocalizedResult);
 });
}
it('exact public coverage45/9/five native locales',()=>{expect(fixture.pages).toHaveLength(45);expect(new Set(fixture.pages.map(p=>p.id)).size).toBe(9);expect(new Set(fixture.pages.map(p=>p.path)).size).toBe(45);});
