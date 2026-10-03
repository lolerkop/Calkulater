import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getEducationWave8MethodSources } from '../src/data/educationWave8MethodSources';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import before from './fixtures/originalityEducationWave8Before.json';
import { definition as gpa } from '../src/calculators/gpa/definition';
import { definition as final } from '../src/calculators/final-grade/definition';
import { definition as score } from '../src/calculators/test-score-percent/definition';
import { definition as reading } from '../src/calculators/reading-speed/definition';
import { definition as duration } from '../src/calculators/text-reading-time/definition';
import { definition as counter } from '../src/calculators/text-word-char-count/definition';

// Prepared effective-publication gate. Run after coherent snapshot wiring;
// complete source copy alone does not prove which body the route publishes.
const tools=[gpa,final,score,reading,duration,counter];
const locales=['ru','en','uk','de','es'] as const;
const minutes={ru:'мин',en:'min',uk:'хв',de:'min',es:'min'};
const pace={ru:'слов/мин',en:'words/min',uk:'слів/хв',de:'Wörter/min',es:'palabras/min'};
describe('Education6 actual30 routes, owned bodies, controls and citations',()=>{
 for(const tool of tools)for(const locale of locales)it(`${tool.id}/${locale} publishes its reviewed body and original identity`,()=>{
  const page=getCalculatorById(tool.id,locale)!;expect(page).toBeDefined();
  const authored=locale==='ru'?tool.presentation:tool.copy?.[locale];
  expect(isCompleteCalculatorCopy(authored)).toBe(true);if(!isCompleteCalculatorCopy(authored))throw new Error('Incomplete owned copy');
  const original=before.rows.find(row=>row.id===tool.id&&row.locale===locale)!;
  expect(page.fullPath).toBe(original.path);
  for(const key of ['name','h1','seoTitle','seoDescription']as const)expect(page[key]).toBe(original[key]);
  for(const key of ['longDescription','howItWorks','example','howToUse','faq']as const)expect(page[key]).toEqual(authored[key]);
  expect(page.seoContent).toEqual({intro:authored.longDescription,howItWorks:authored.howItWorks,example:authored.example,tips:authored.howToUse.join(' '),faq:authored.faq});
  expect(page.fields.map(field=>({name:field.name,type:field.type,defaultValue:field.defaultValue}))).toEqual(original.fields.map(field=>({name:field.name,type:field.type,defaultValue:field.defaultValue})));
  for(const field of page.fields){
   if(tool.id==='final-grade')expect(fieldUnitLabel(field,locale,tool.id)).toBe('%');
   if(tool.id==='reading-speed'&&field.name==='minutes')expect(fieldUnitLabel(field,locale,tool.id)).toBe(minutes[locale]);
   if(tool.id==='text-reading-time'&&['wpm','speechWpm'].includes(field.name))expect(fieldUnitLabel(field,locale,tool.id)).toBe(pace[locale]);
  }
  const sources=getEducationWave8MethodSources(tool.id,locale),editorial=getCalculatorEditorial(page,locale);
  for(const source of sources)expect(editorial.sources).toContainEqual(source);
  expect(editorial.method).toBe(authored.howItWorks);
  if(locale!=='ru')expect(JSON.stringify([page.seoContent,sources])).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u);
 });
 for(const locale of locales)it(`${locale} duration mode exposes only the active count/text field`,()=>{
  const page=getCalculatorById('text-reading-time',locale)!;
  expect(page.fields.filter(f=>['words','text'].includes(f.name)&&isFieldVisible(f,{mode:'words'})).map(f=>f.name)).toEqual(['words']);
  expect(page.fields.filter(f=>['words','text'].includes(f.name)&&isFieldVisible(f,{mode:'text'})).map(f=>f.name)).toEqual(['text']);
 });
});
