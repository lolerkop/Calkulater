import { describe, expect, it } from 'vitest';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { definition as gpa } from '../src/calculators/gpa/definition';
import { definition as final } from '../src/calculators/final-grade/definition';
import { definition as score } from '../src/calculators/test-score-percent/definition';
import { definition as reading } from '../src/calculators/reading-speed/definition';
import { definition as duration } from '../src/calculators/text-reading-time/definition';
import { definition as counter } from '../src/calculators/text-word-char-count/definition';
import { localization as gpaLocale } from '../src/calculators/gpa/localization';
import { localization as finalLocale } from '../src/calculators/final-grade/localization';
import { localization as scoreLocale } from '../src/calculators/test-score-percent/localization';
import { localization as readingLocale } from '../src/calculators/reading-speed/localization';
import { localization as durationLocale } from '../src/calculators/text-reading-time/localization';
import { localization as counterLocale } from '../src/calculators/text-word-char-count/localization';
import before from './fixtures/originalityEducationWave8Before.json';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { validateValues } from '../src/components/islands/calculator/validation';
import { buildCalculatorQueryString, readValuesFromSearch } from '../src/lib/shareLink';
import { getEducationWave8MethodSources } from '../src/data/educationWave8MethodSources';
const tools=[gpa,final,score,reading,duration,counter];
const bundles=[gpaLocale,finalLocale,scoreLocale,readingLocale,durationLocale,counterLocale];
const locales=['ru','en','uk','de','es']as const;
const defaults=(index:number)=>Object.fromEntries(tools[index].presentation.fields.map(f=>[f.name,f.defaultValue??'']));
const runtime=(index:number)=>({compute:tools[index].compute,validate:tools[index].validate,contextualField:tools[index].contextualField,localization:bundles[index]});
const forbidden=(locale:string)=>locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u;
describe('30 actual before identities retained with independently authored body',()=>{
 for(const item of before.rows)it(`${item.id}/${item.locale}: identity and FAQ coverage`,()=>{
  const tool=tools.find(t=>t.id===item.id)!;
  const copy=item.locale==='ru'?tool.presentation:tool.copy![item.locale as 'en'|'uk'|'de'|'es']!;
  expect(isCompleteCalculatorCopy(copy)).toBe(true);if(!isCompleteCalculatorCopy(copy))throw new Error('Incomplete owned editorial body');
  for(const key of ['name','h1','seoTitle','seoDescription']as const)expect(copy[key],key).toBe(item[key]);
  expect(item.path.endsWith('/'+copy.slug+'/')).toBe(true);
  expect(copy.faq).toHaveLength(item.faqCount);expect(copy.longDescription?.length).toBeGreaterThan(40);
  expect(copy.howItWorks).toBeTruthy();expect(copy.example).toBeTruthy();expect(copy.howToUse?.length).toBeGreaterThan(0);
  expect(tool.presentation.fields.map(f=>({name:f.name,type:f.type,defaultValue:f.defaultValue}))).toEqual(item.fields.map(f=>({name:f.name,type:f.type,defaultValue:f.defaultValue})));
  if(item.locale!=='ru')expect(JSON.stringify([copy.longDescription,copy.howToUse,copy.howItWorks,copy.example,copy.faq])).not.toMatch(forbidden(item.locale));
 });
});
describe('native success, numeric-domain feedback and compound time units',()=>{
 for(const[index,tool]of tools.entries())for(const locale of locales){
  it(`${tool.id}/${locale}: default results have native labels and valid numbers`,()=>{
   const raw=tool.compute(defaults(index));expect(raw.primary.value).not.toBe('—');
   const result=localizeResult(raw,locale,tool.id,runtime(index));expect(JSON.stringify(result)).not.toMatch(/NaN|Infinity|undefined/);
   if(locale!=='ru')expect(JSON.stringify(result)).not.toMatch(forbidden(locale));
  });
  it(`${tool.id}/${locale}: malformed active input has native feedback`,()=>{
   const key=tool.id==='gpa'?'grades':tool.id==='final-grade'?'current':tool.id==='test-score-percent'?'total':tool.id==='reading-speed'?'minutes':tool.id==='text-reading-time'?'wpm':'text';
   const result=localizeResult(tool.compute({...defaults(index),[key]:true}as never),locale,tool.id,runtime(index));
   expect(result.primary.value).toBe('—');if(locale!=='ru')expect(JSON.stringify(result)).not.toMatch(forbidden(locale));
  });
 }
 it('Ukrainian two-hour book duration remains hours',()=>{
  const result=localizeResult(reading.compute({words:150,minutes:149.5,bookWords:120}),'uk',reading.id,runtime(3));
  expect(result.secondary.find(r=>r.label==='Час на книгу')?.value).toBe('2 год 0 хв');
 });
 for(const locale of ['en','uk','de','es']as const)it(`${locale}: overflowing auxiliary GPA rows stay native while the mean is finite`,()=>{
  const result=localizeResult(gpa.compute({grades:'1e308 1e308\n1e308 1e308'}),locale,gpa.id,runtime(0));
  expect(result.primary.value).not.toBe('—');expect(JSON.stringify(result)).not.toMatch(forbidden(locale));
 });
});
describe('three actual raw-count hooks preserve fractions before normalization',()=>{
 for(const[index,names]of [[2,['correct','total']],[3,['words','bookWords']],[4,['words']]]as const){
  const tool=tools[index];
  for(const locale of locales)for(const name of names){
   it(`${tool.id}/${locale}/${name}: a nonzero fractional tail stays invalid through a copied URL`,()=>{
    const raw={...defaults(index),[name]:locale==='en'?'3.00000000000000001':'3,00000000000000001'};
    const errors=validateValues(tool.id,tool.presentation.fields,raw,locale,runtime(index));expect(errors[name]).toBeTruthy();
    if(locale!=='ru')expect(errors[name]).not.toMatch(forbidden(locale));
    const query=buildCalculatorQueryString(tool.presentation.fields,raw,locale),restored=readValuesFromSearch(tool.presentation.fields,defaults(index),query,locale);
    expect(restored[name]).toBe(raw[name]);expect(validateValues(tool.id,tool.presentation.fields,restored,locale,runtime(index))[name]).toBe(errors[name]);
   });
   it(`${tool.id}/${locale}/${name}: safe integer text is accepted and unsafe counts are refused`,()=>{
    const good={...defaults(index),[name]:name==='total'?20:3};
    expect(validateValues(tool.id,tool.presentation.fields,good,locale,runtime(index))).toEqual({});
    expect(validateValues(tool.id,tool.presentation.fields,{...good,[name]:9007199254740992},locale,runtime(index))[name]).toBeTruthy();
   });
  }
 }
 for(const locale of locales)it(`${locale}: inactive word count is excluded from text-mode validation and sharing`,()=>{
  const values={...defaults(4),mode:'text',words:'3.5',text:'größer résumé español З’їж м’яких'};
  expect(validateValues(duration.id,duration.presentation.fields,values,locale,runtime(4))).toEqual({});
  expect(new URLSearchParams(buildCalculatorQueryString(duration.presentation.fields,values,locale)).has('words')).toBe(false);
 });
});
describe('bounded primary references support only the documented claims',()=>{
 for(const tool of tools)for(const locale of locales)it(`${tool.id}/${locale}: citation scope`,()=>{
  const sources=getEducationWave8MethodSources(tool.id,locale);
  const expected=tool.id==='gpa'?1:tool.id==='text-reading-time'?1:tool.id==='text-word-char-count'?2:0;
  expect(sources).toHaveLength(expected);for(const source of sources){expect(source.href).toMatch(/^https:\/\/(registrar\.illinois\.edu|developer\.mozilla\.org)\//);expect(source.label).toBeTruthy();if(locale!=='ru')expect(source.label).not.toMatch(forbidden(locale));}
 });
});
