import{describe,it,expect}from 'vitest';
import{getCalculatorById}from '../src/lib/i18n';
import{getCalculatorEditorial}from '../src/data/calculatorEditorial';
import{getFinanceWave11MethodSources}from '../src/data/financeWave11MethodSources';
import{getElectronicsWave12MethodSources}from '../src/data/electronicsWave12MethodSources';
import{getDateTimeWave15MethodSources}from '../src/data/dateTimeWave15MethodSources';
import{validateValues}from '../src/components/islands/calculator/validation';
import{runtimeFor}from '../src/calculators/runtime.generated';
import{localizeResult}from '../src/components/islands/calculator/resultLocalization';
import fixture from '../reports/originality-wave-8-tail-browser-fixtures.json';
const locales=['ru','en','uk','de','es']as const;
describe('Wave8 remaining32 actual publication contracts',()=>{
 it('VAT information date is optional but malformed nonblank dates fail',()=>{const c=getCalculatorById('vat-calculator','ru')!;const values=Object.fromEntries(c.fields.map(f=>[f.name,f.defaultValue??'']));expect(c.fields.find(f=>f.name==='operationDate')?.optional).toBe(true);expect(validateValues(c.id,c.fields,{...values,operationDate:''},'ru').operationDate).toBeUndefined();expect(validateValues(c.id,c.fields,{...values,operationDate:'2026-02-30'},'ru').operationDate).toBeTruthy();});
 for(const p of fixture.actualPageRecords)it(`${p.id}/${p.locale} effective native body and source cards`,()=>{const locale=p.locale as typeof locales[number];const c=getCalculatorById(p.id,locale);expect(c).toBeTruthy();if(!c)throw Error(p.id);expect(c.fullPath).toBe(p.url);expect(c.h1).toBe(p.h1);expect(c.name).toBe(p.name);expect({longDescription:c.longDescription,howToUse:c.howToUse,howItWorks:c.howItWorks,example:c.example,faq:c.faq}).toEqual(p.body);expect(c.seoContent).toMatchObject({intro:p.body.longDescription,howItWorks:p.body.howItWorks,example:p.body.example,faq:p.body.faq});expect(c.faq.length).toBeGreaterThanOrEqual(4);const sources=(p.group==='finance'?getFinanceWave11MethodSources:p.group==='electronics'?getElectronicsWave12MethodSources:getDateTimeWave15MethodSources)(p.id,locale);expect(getCalculatorEditorial(c,locale).sources).toEqual(sources);if(['en','de','es'].includes(locale))for(const f of c.fields){const x=runtimeFor(c.id).contextualField?.(f,Object.fromEntries(c.fields.map(f=>[f.name,f.defaultValue??''])),locale)??f;expect([x.label,x.unit,x.help].filter(Boolean).join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);}});
 for(const locale of locales)it(`work-hours/${locale} nominal money suffix preserves pay and no currency conversion`,()=>{const runtime=runtimeFor('work-hours');const result=localizeResult(runtime.compute({startHour:9,startMin:0,endHour:18,endMin:0,breakMin:60,days:21,ratePerHour:500}),locale,'work-hours',runtime);expect(result.secondary.at(-1)?.value).toContain(['ден. ед.','currency units','гр. од.','Geldeinheiten','unidades monetarias'][locales.indexOf(locale)]);expect(result.secondary.at(-1)?.value).not.toMatch(/[₽$₴€£]/);expect(result.secondary.at(-1)?.value.replace(/[^0-9]/g,'')).toBe('8400000');});
});
