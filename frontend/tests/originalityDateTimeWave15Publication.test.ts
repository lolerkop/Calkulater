import {describe,it,expect}from 'vitest';
import {getCalculatorById}from '../src/lib/i18n';
import {dateTimeWave15ContractContent}from '../src/data/dateTimeWave15ContractContent';
import {getDateTimeWave15MethodSources}from '../src/data/dateTimeWave15MethodSources';
import before from './fixtures/originalityDateTimeWave15Before.json';
const locales=['ru','en','uk','de','es']as const;
const ids=['age-calculator','working-days-calculator','date-shift-calculator','leap-year','sleep-time','time-duration','timezone-difference','work-hours'];
describe('Date8 actual published native contracts',()=>{
 for(const id of ids)for(const locale of locales){
  it(`${id}/${locale} route, identity, body and bounded source publication`,()=>{
   const c=getCalculatorById(id,locale)!;const p=before.pages.find((p:any)=>p.id===id&&p.locale===locale);if(!p)throw Error('Missing before page '+id+'/'+locale);expect(c).toBeDefined();expect(c.fullPath).toBe(p.path);expect(c.name).toBe(p.name);expect(c.h1).toBe(p.h1);expect(c.seoTitle).toBe(p.seoTitle);
   expect({longDescription:c.longDescription,howToUse:c.howToUse,howItWorks:c.howItWorks,example:c.example,faq:c.faq}).toEqual(dateTimeWave15ContractContent[locale][id]);
   expect(c.faq.length).toBe(Math.max(4,p.body.faq.length));expect(c.faq.length).toBeGreaterThanOrEqual(4);expect(c.seoDescription.length).toBeGreaterThanOrEqual(80);
   expect(c.fields.map(f=>[f.name,f.defaultValue])).toEqual(p.fields.map((f:any)=>[f.name,f.defaultValue]));
   const sources=getDateTimeWave15MethodSources(id,locale);expect(sources.length).toBe(id==='sleep-time'?2:['time-duration','work-hours'].includes(id)?0:1);expect(sources.every(s=>typeof s.href==='string'&&s.href.startsWith('https://'))).toBe(true);
   for(const f of c.fields){expect(f.label).toBeTruthy();if(f.help){expect(f.help).not.toMatch(/NaN|Infinity|undefined|TODO/);if(locale==='uk')expect(f.help).not.toMatch(/[ЁёЫыЭэЪъ]/);if(['en','de','es'].includes(locale))expect(f.help).not.toMatch(/[А-Яа-яЁё]/);}}
  });
  it(`${id}/${locale} visible domain and conditional-field contract`,()=>{
   const c=getCalculatorById(id,locale)!;
   if(id==='leap-year')expect(c.fields.find(f=>f.name==='year')).toMatchObject({min:1,max:9999,step:1});
   if(id==='time-duration')for(const name of['spanHour','spanMinute'])expect(c.fields.find(f=>f.name===name)?.showIf).toEqual({field:'mode',oneOf:['add','subtract']});
   if(id==='sleep-time'){expect(c.fields.find(f=>f.name==='cycles')).toMatchObject({min:1,max:12,step:1});expect(c.shortDescription).toContain('90');}
   if(id==='date-shift-calculator')for(const name of['shiftYears','shiftMonths','shiftWeeks','shiftDays'])expect(c.fields.find(f=>f.name===name)).toMatchObject({optional:true,max:Number.MAX_SAFE_INTEGER});
   if(id==='work-hours'){expect(c.fields.find(f=>f.name==='days')).toMatchObject({min:1,max:Number.MAX_SAFE_INTEGER});expect(c.fields.find(f=>f.name==='ratePerHour')?.unit).toBe(['ден. ед./ч','currency units/h','гр. од./год','Geldeinheiten/h','unidades monetarias/h'][locales.indexOf(locale)]);}
  });
 }
});
