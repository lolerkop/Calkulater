import { expect,it } from 'vitest';
import baseline from './fixtures/originalityHouseholdWave17Before.json';
import type { Locale } from '../src/lib/clientI18n';
import type { CalculatorClientRuntime } from '../src/lib/platform/runtime';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import type { CalculatorFormValues } from '../src/lib/platform/types';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { parseLocalizedNumber } from '../src/lib/format';
import { definition as curtain } from '../src/calculators/curtain-size/definition';
import { definition as luggage } from '../src/calculators/luggage-linear/definition';
import { definition as frame } from '../src/calculators/picture-frame-mat/definition';
import { definition as price } from '../src/calculators/price-per-unit/definition';
import { definition as print } from '../src/calculators/print-3d-cost/definition';
import { definition as stock } from '../src/calculators/stock-duration/definition';
import { definition as subs } from '../src/calculators/subscriptions-cost/definition';
import { definition as tip } from '../src/calculators/tip/definition';
import { definition as trip } from '../src/calculators/trip-budget/definition';
import { localization as curtainL } from '../src/calculators/curtain-size/localization';
import { localization as luggageL } from '../src/calculators/luggage-linear/localization';
import { localization as frameL } from '../src/calculators/picture-frame-mat/localization';
import { localization as priceL } from '../src/calculators/price-per-unit/localization';
import { localization as printL } from '../src/calculators/print-3d-cost/localization';
import { localization as stockL } from '../src/calculators/stock-duration/localization';
import { localization as subsL } from '../src/calculators/subscriptions-cost/localization';
import { localization as tipL } from '../src/calculators/tip/localization';
import { localization as tripL } from '../src/calculators/trip-budget/localization';
import { getHouseholdWave17MethodSources } from '../src/data/householdWave17MethodSources';
const rows=[{d:curtain,l:curtainL},{d:luggage,l:luggageL},{d:frame,l:frameL},{d:price,l:priceL},{d:print,l:printL},{d:stock,l:stockL},{d:subs,l:subsL},{d:tip,l:tipL},{d:trip,l:tripL}];
const locales=['ru','en','uk','de','es'] as const;
const labels:Record<string,string>={'Ширина в сборке':'Ширина ткани до сборки','Норма':'По введённому пределу','Размер рамы':'Внешний размер паспарту','Соотношение сторон рамы':'Соотношение сторон паспарту','Себестоимость печати':'Стоимость печати с наценкой'};
for(const{d,l}of rows){
 const b=baseline.source.find(b=>b.id===d.id)!;
 const defaults=Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue!])) as CalculatorFormValues;
 it(d.id+': snapshot defaults/published inputs/reference numbers kept',()=>{expect(defaults).toEqual(b.defaults);expect(d.publishedExample).toEqual(b.publishedExample);expect(d.referenceCases?.map(r=>({...r,expectSecondary:r.expectSecondary?.map(x=>({...x,label:Object.entries(labels).find(([,v])=>v===x.label)?.[0]??x.label}))}))).toEqual(b.references);});
 it(d.id+': every numeric field declares its physical/count unit',()=>{for(const f of d.presentation.fields.filter(f=>f.type==='number'))expect(f.unit).toBeTruthy();});
 it(d.id+': original default numerical payload unchanged with declared label amendments',()=>{const original=JSON.parse(JSON.stringify(b.defaultResult),(k,v)=>k==='label'&&labels[v]?labels[v]:v);expect(d.compute(defaults)).toEqual(original);});
 for(const locale of locales){
  const before=baseline.pages.find(p=>p.id===d.id&&p.locale===locale)!;
  const c=locale==='ru'?d.presentation:d.copy![locale]!;if(!isCompleteCalculatorCopy(c))throw new Error('Full owned copy required');
  it(d.id+'/'+locale+': full body, identities, FAQs and safe metadata',()=>{expect(before.path.endsWith('/'+c.slug+'/')).toBe(true);expect(c.name).toBe(before.name);expect(c.h1).toBe(before.h1);expect(c.seoTitle).toBe(before.seoTitle);expect(c.faq?.map(f=>f.q)).toEqual(before.questions);expect(c.seoDescription.length).toBeGreaterThanOrEqual(80);expect(c.seoDescription.length).toBeLessThanOrEqual(180);expect(c.longDescription?.length).toBeGreaterThan(100);expect(c.howItWorks?.length).toBeGreaterThan(80);expect(c.example?.length).toBeGreaterThan(50);expect(c.howToUse?.length).toBeGreaterThanOrEqual(3);expect(c.disclaimer?.length).toBeGreaterThan(30);if(['en','de','es'].includes(locale))expect(JSON.stringify([c.longDescription,c.howToUse,c.howItWorks,c.example,c.faq,c.disclaimer])).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);});
  it(d.id+'/'+locale+': actual localizeResult uses native subject labels and active-input error',()=>{const runtime:CalculatorClientRuntime={compute:d.compute,localization:l};const values=d.id==='subscriptions-cost'?{items:'Music 499 1\nCloud 149 1\nFitness 12000 12'}:defaults;const r=localizeResult(d.compute(values),locale,d.id,runtime);if(['en','de','es'].includes(locale))expect(JSON.stringify(r)).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);const key=d.presentation.fields.find(f=>f.type==='number')?.name??'items';const invalid=localizeResult(d.compute({...defaults,[key]:false}),locale,d.id,runtime);expect(invalid.primary.value).toBe('—');if(['en','de','es'].includes(locale))expect(JSON.stringify(invalid)).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);if(locale==='uk')expect(invalid.secondary[0].value).toMatch(/Введіть/);});
  it(d.id+'/'+locale+': bounded source labels are native and only useful IDs carry links',()=>{const s=getHouseholdWave17MethodSources(d.id,locale);expect(s.length).toBe(d.id==='luggage-linear'?3:d.id==='print-3d-cost'?1:0);for(const x of s)expect(x.href).toMatch(/^https:\/\//);if(['en','de','es'].includes(locale))expect(JSON.stringify(s)).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);});
 }
}
for(const locale of locales){
 for(const u of ['kg','l','pcs'])it('price selected '+u+'/'+locale+' native unit exact',()=>{const field=price.presentation.fields.find(f=>f.name==='amount')!;const expected={kg:['кг','kg','кг','kg','kg'],l:['л','L','л','L','L'],pcs:['шт','pcs','шт','Stück','piezas']}[u]!;expect(price.contextualField!(field,{unit:u},locale).unit).toBe(expected[locales.indexOf(locale)]);expect(price.contextualField!({...field,unit:'L'},{unit:'bad'},locale).unit).toBeUndefined();expect(price.contextualField!({...field,unit:'L'},{unit:false},locale).unit).toBeUndefined();});
 for(const d of [stock,print,trip])it(d.id+'/'+locale+': contextual hook preserves unrelated already-localized unit',()=>{const f={...d.presentation.fields[0],name:'unrelated',unit:'native-unit'};expect(d.contextualField!(f,{},locale)).toEqual(f);const fields=d.presentation.fields.map(f=>d.contextualField!(f,{},locale));if(['en','de','es'].includes(locale))for(const f of fields.filter(f=>d.id==='stock-duration'||['kwhPrice','wearPerHour','nights','days','people','hotelPerNight','foodPerDayPerPerson'].includes(f.name)))expect(f.unit??'').not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);});
 for(const d of [tip,trip])for(const key of d.id==='tip'?['people']:['people','nights'])it(d.id+'/'+locale+': raw '+key+' remains whole before binary rounding',()=>{const v=Object.fromEntries(d.presentation.fields.map(f=>[f.name,f.defaultValue!])) as CalculatorFormValues;const run=(raw:string|number|boolean)=>d.validate!({values:{...v,[key]:raw},locale:locale as Locale,fields:d.presentation.fields,parseNumber:(s:string)=>parseLocalizedNumber(s,locale)});expect(run(locale==='en'?'1.00000000000000001':'1,00000000000000001')).toHaveProperty(key);expect(run(false)).toHaveProperty(key);expect(run(2)).toEqual({});});
}
it('unknown source id fails closed',()=>expect(getHouseholdWave17MethodSources('toString','en')).toEqual([]));
