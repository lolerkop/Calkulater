import {describe,it,expect} from 'vitest';
import {getCalculatorById} from '../src/lib/i18n';
import {getCalculatorEditorial} from '../src/data/calculatorEditorial';
import {getBuildingWave17PageCopy} from '../src/data/buildingWave17ContractContent';
import {getBuildingWave17MethodSources} from '../src/data/buildingWave17MethodSources';
import {runtimeFor} from '../src/calculators/runtime.generated';
import {localizeResult} from '../src/components/islands/calculator/resultLocalization';
import before from './fixtures/originalityBuildingWave17Before.json';
import type{BeforePage}from './fixtures/originalityBuildingWave17Types';
const pages=before.pages as unknown as BeforePage[];
const locales=['ru','en','uk','de','es'] as const;
const ids=['tile-calculator','wallpaper-calculator','paint-calculator','laminate-calculator','screed-calculator','brick-calculator'];
const moneyField:Record<string,string>={'tile-calculator':'packPrice','wallpaper-calculator':'rollPrice','paint-calculator':'canPrice','laminate-calculator':'packPrice','screed-calculator':'bagPrice','brick-calculator':'unitPrice'};
describe('Building6 effective publication and raw-input contracts',()=>{
 for(const id of ids)for(const locale of locales){
  const p=pages.find(p=>p.id===id&&p.locale===locale)!;
  it(`${id}/${locale} authored body reaches actual page with bounded sources`,()=>{
   const c=getCalculatorById(id,locale)!;expect(c.fullPath).toBe(p.path);expect(c.name).toBe(p.name);expect(c.h1).toBe(p.h1);expect(c.seoTitle).toBe(p.seoTitle);
   const authored=getBuildingWave17PageCopy(id,locale)!;
   expect({longDescription:c.longDescription,howToUse:c.howToUse,howItWorks:c.howItWorks,example:c.example,faq:c.faq}).toEqual({longDescription:authored.longDescription,howToUse:authored.howToUse,howItWorks:authored.howItWorks,example:authored.example,faq:authored.faq});
   expect(c.seoDescription).toBe(authored.seoDescription??p.seoDescription);expect(c.seoDescription.length).toBeGreaterThanOrEqual(80);expect(c.seoDescription.length).toBeLessThanOrEqual(180);
   expect(c.seoContent).toMatchObject({intro:authored.longDescription,howItWorks:authored.howItWorks,example:authored.example,faq:authored.faq});
   expect(c.fields.map(f=>[f.name,f.type,f.defaultValue,f.showIf,f.options?.map(o=>o.value)])).toEqual(p.fields.map(f=>[f.name,f.type,f.defaultValue,f.showIf,f.options?.map(o=>o.value)]));
   expect(c.faq.length).toBeGreaterThanOrEqual(4);expect(c.howItWorks.length).toBeGreaterThan(250);
   const sources=getBuildingWave17MethodSources(id,locale);expect(getCalculatorEditorial(c,locale).sources).toEqual(sources);expect(sources.length).toBe(['tile-calculator','paint-calculator','laminate-calculator','screed-calculator'].includes(id)?1:0);
   if(['en','de','es'].includes(locale))expect([c.longDescription,c.howItWorks,c.example,...c.howToUse,...c.faq.flatMap(f=>[f.q,f.a]),...c.fields.flatMap(f=>[f.label,f.unit??'',f.help??''])].join(' ')).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
  });
  it(`${id}/${locale} valid normal numeric payload, native errors and RUB price retain their meaning`,()=>{
   const runtime=runtimeFor(id),c=getCalculatorById(id,locale)!;expect(runtime.compute(p.defaults)).toEqual(p.defaultResult);
   const inputs={...p.defaults,[moneyField[id]]:100};const result=localizeResult(runtime.compute(inputs),locale,id,runtime);expect(JSON.stringify(result)).not.toMatch(/NaN|Infinity/);
   const price=c.fields.find(f=>f.name===moneyField[id])!;expect(price.unit).toContain(locale==='ru'?'₽':'RUB');expect(price.help).toBeTruthy();
   expect(result.secondary.some(r=>r.value.includes(locale==='ru'?'₽':'RUB'))).toBe(true);if(locale!=='ru')expect(JSON.stringify(result)).not.toMatch(/[₽$₴€£]/);
   const bad=localizeResult(runtime.compute({...p.defaults,...(id==='brick-calculator'?{wallLength:-1}:id==='paint-calculator'?{area:-1}:{length:-1})}),locale,id,runtime);expect(bad.primary.value).toBe('—');expect(bad.secondary[0]?.value.trim()).not.toBe('');if(['en','de','es'].includes(locale))expect(JSON.stringify(bad)).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
  });
 }
 const errorInputs:Record<string,Record<string,string|number>[]>={
  'tile-calculator':[{reserve:-1},{glueConsumption:-1},{packArea:0},{mode:'alien'},{length:'1x'},{length:1e300}],
  'wallpaper-calculator':[{pattern:-1},{height:12},{windows:1.5},{length:'1x'},{length:1e300}],
  'paint-calculator':[{coats:1.5},{canVolume:0},{mode:'room',windows:1000},{mode:'alien'},{area:'1x'},{area:1e300}],
  'laminate-calculator':[{underlayPrice:-1},{packArea:0},{length:'1x'},{length:1e300}],
  'screed-calculator':[{bagWeight:0},{mixConsumption:-1},{mode:'alien'},{length:'1x'},{length:1e300}],
  'brick-calculator':[{unitPrice:-1},{unitLength:0},{joint:-1},{openingsArea:1000},{mode:'alien'},{wallLength:'1x'},{wallLength:1e300}],
 };
 for(const id of ids)for(const locale of locales)it(`${id}/${locale} scoped error vocabulary covers every independently chosen failure`,()=>{
  const p=pages.find(p=>p.id===id&&p.locale===locale)!,runtime=runtimeFor(id);
  for(const delta of errorInputs[id]){const result=localizeResult(runtime.compute({...p.defaults,...delta}),locale,id,runtime);expect(result.primary.value).toBe('—');const message=result.secondary[0]?.value;expect(message?.trim()).not.toBe('');if(['en','de','es'].includes(locale))expect(message).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);if(locale==='uk')expect(message).not.toMatch(/[ЫыЭэЁёЪъ]/);}
 });
 for(const id of ['wallpaper-calculator','paint-calculator'])for(const locale of locales)for(const raw of ['1.5','9007199254740990.5'])it(`${id}/${locale} count fraction survives pre-normalization validation`,()=>{
  const c=getCalculatorById(id,locale)!,runtime=runtimeFor(id);const values={...Object.fromEntries(c.fields.map(f=>[f.name,f.defaultValue??''])),mode:'room',windows:raw};const errors=runtime.validate!({values,locale,fields:c.fields,parseNumber:s=>Number(s.replace(',','.'))});expect(errors.windows).toBeTruthy();if(['en','de','es'].includes(locale))expect(errors.windows).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 });
 for(const locale of locales)it(`paint/${locale} positive whole coats no arbitrary cap and hidden counters inactive`,()=>{
  const c=getCalculatorById('paint-calculator',locale)!,runtime=runtimeFor(c.id);expect(c.fields.find(f=>f.name==='coats')).toMatchObject({min:1,max:Number.MAX_SAFE_INTEGER,step:1});
  const values={...Object.fromEntries(c.fields.map(f=>[f.name,f.defaultValue??''])),mode:'manual',windows:'1.5',doors:'1.5'};expect(runtime.validate!({values,locale,fields:c.fields,parseNumber:s=>Number(s.replace(',','.'))})).toEqual({});
  expect(runtime.compute({...values,coats:5}).primary.value).not.toBe('—');
 });
});
