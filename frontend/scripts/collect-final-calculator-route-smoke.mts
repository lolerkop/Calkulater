import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';
import type { CalculatorDef } from '../src/lib/types';
import type { Locale } from '../src/lib/clientI18n';

// ROOT-authorized final integration collection only, after coherent generation.
// This NEVER manufactures independent formula expectations from a compute call.
// Fixed reference/published excerpts remain separate from derived bundle parity.
if(!process.argv.includes('--after-generator'))throw Error('Run only after ROOT coherent generator GO, with --after-generator.');
const modules=await Promise.all([
 import('../src/lib/i18n'),import('../src/data/urlInventory'),import('../src/calculators/manifest.generated'),
 import('../src/data/publishedExamples'),import('../src/calculators/runtime.generated'),
 import('../src/data/calculatorEditorial'),import('../src/lib/shareLink'),
 import('../src/components/islands/calculator/validation'),import('../src/components/islands/calculator/values'),
 import('../src/components/islands/calculator/resultLocalization'),import('../src/lib/fieldVisibility'),
 import('../src/lib/fieldUnitLabel'),import('../src/lib/converterFieldUnits'),import('../src/config/site'),
]);
const [i18n,inventory,manifest,published,runtimes,editorial,links,validation,valueModule,localization,visibility,unitLabels,converterUnits,site]=modules;
const locales=['ru','en','uk','de','es'] as const;
if(JSON.stringify([...i18n.locales].sort())!==JSON.stringify([...locales].sort()))throw Error('Expected exactly5 published locales.');
const normal=(s:string)=>s.replace(/[\s\u00a0\u202f]+/g,' ').trim();
const bad=/NaN|Infinity|undefined|\[object Object\]/;
function assert(condition:unknown,message:string):asserts condition{if(!condition)throw Error(message);}
const definitions=new Map(manifest.v2Definitions.map(d=>[d.id,d]));
const rows=locales.flatMap(locale=>i18n.getCalculators(locale).map(calculator=>({locale,calculator})));
assert(rows.length===1866,`Expected1866 actual published routes, got${rows.length}`);
assert(new Set(rows.map(row=>row.calculator.id)).size===376,'Expected376 distinct engines');
assert(new Set(rows.map(row=>row.calculator.fullPath)).size===1866,'Duplicate published routes');
const inventoryRoutes=new Set(inventory.urlInventory.filter(row=>row.pageType==='calculator').map(row=>row.url));
assert(inventoryRoutes.size===1866&&rows.every(row=>inventoryRoutes.has(row.calculator.fullPath!)),'Exact URL inventory/getBy parity failed');
function query(input:Record<string,string|number|boolean>){return new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)])).toString();}
function numericPrefix(s:string):number|null{
 const m=s.trim().replace(/[\s\u00a0\u202f]/g,'').replace(',','.').match(/^[+−-]?\d+(?:\.\d+)?(?:·10\^[+−-]?\d+)?/);
 if(!m)return null;const n=Number(m[0].replaceAll('−','-').replace('·10^','e'));return Number.isFinite(n)?n:null;
}
function defaultsFor(calculator:CalculatorDef){
 const values=links.buildInitialValues(calculator.fields);
 // Pure collection has no browser today's-date initialization. Supply explicit
 // valid dates in the chosen reference query where the public field is dynamic.
 for(const field of calculator.fields)if(field.type==='date'&&String(values[field.name]??'')==='')values[field.name]=field.name==='endDate'?'2026-11-01':'2026-10-02';
 return values;
}
const output:any[]=[];const choiceNotes:any[]=[];
for(const {locale,calculator}of rows){
 const definition=definitions.get(calculator.id),runtime=runtimes.runtimeFor(calculator.id),defaults=defaultsFor(calculator);
 const candidates=[
  ...(definition?.referenceCases??[]).filter(r=>r.expectPrimary!=='—').map((r,index)=>({kind:'fixed-reference',source:`src/calculators/${calculator.id}/referenceCases.ts`,name:r.name,index,input:{...r.inputs},expected:[r.expectPrimary,...(r.expectSecondary??[]).map(s=>s.value)],primary:r.expectPrimary})),
  ...published.publishedExamples.filter(e=>e.calculatorId===calculator.id&&e.locale===locale&&e.exampleKind!=='seo').map((e,index)=>({kind:'established-published-example',source:'src/data/publishedExamples.ts + owned publishedExample',name:`published example${index+1}`,index,input:{...e.input},expected:[...e.expected],primary:undefined as string|undefined})),
 ];
 assert(candidates.length,`${calculator.id}/${locale}: no established meaningful scenario`);
 let selected:any;const rejected:any[]=[];
 for(const c of candidates){
  const direct=runtime.compute(c.input);const rendered=normal(JSON.stringify(direct));
  for(const excerpt of c.expected)assert(rendered.includes(normal(excerpt)),`${calculator.id}/${locale}/${c.name}: established fixed excerpt fails canonical compute: ${excerpt}`);
  if(c.primary!==undefined)assert(normal(direct.primary.value)===normal(c.primary),`${calculator.id}/${locale}: fixed reference primary differs`);
  if(direct.primary.value==='—'||bad.test(rendered)){rejected.push({kind:c.kind,name:c.name,reason:'Scenario declares no healthy finite result'});continue;}
  const input:Record<string,string|number|boolean>={...c.input};
  for(const field of calculator.fields)if(field.type==='date'&&!Object.hasOwn(input,field.name))input[field.name]=defaults[field.name];
  const search=query(input),values=links.readValuesFromSearch(calculator.fields,defaults,search,locale);
  const errors=validation.validateValues(calculator.id,calculator.fields,values,locale,runtime);
  if(Object.keys(errors).length){rejected.push({kind:c.kind,name:c.name,reason:'Established engine scenario falls outside the current declared form limits',errors});continue;}
  const canonical=runtime.compute(valueModule.normalizeValues(calculator.fields,values,locale));
  const canonicalText=normal(JSON.stringify(canonical));
  if(!c.expected.every(excerpt=>canonicalText.includes(normal(excerpt)))){rejected.push({kind:c.kind,name:c.name,reason:'Restored public-field defaults/URL parser do not preserve this established scenario'});continue;}
  assert(canonical.primary.value!=='—'&&!bad.test(canonicalText),`${calculator.id}/${locale}: invalid actual public scenario result`);
  const result=localization.localizeResult(canonical,locale,calculator.id,runtime);
  assert(calculator.disclaimer===undefined||(typeof calculator.disclaimer==='string'&&calculator.disclaimer.trim()),`${calculator.id}/${locale}: supplied optional form disclaimer is invalid`);
  const review=editorial.getCalculatorEditorial(calculator,locale);assert(review.method.trim()&&review.limitation.trim(),`${calculator.id}/${locale}: empty actual editorial method/limitation`);
  const excerptResults=c.expected.map(excerpt=>({canonical:excerpt,native:localization.localizeResult({primary:{label:'',value:excerpt},secondary:[]},locale,calculator.id,runtime).primary.value,provenance:'Established source literal; language presentation only uses frozen runtime phrase maps'}));
  const literalPrimary=c.primary??c.expected.find(excerpt=>normal(canonical.primary.value).startsWith(normal(excerpt)));
  // The five divisors primary references are ordered integer lists; retain
  // their exact source literal control instead of inventing a scalar prefix.
  const independentPrefix=literalPrimary===undefined||calculator.id==='divisors'?null:numericPrefix(literalPrimary);
  const fields=calculator.fields.map(field=>{
   const contextual=runtime.contextualField?runtime.contextualField(field,values,locale):field;
   const dynamic=converterUnits.withSelectedConverterInputUnit(calculator.id,contextual,calculator.fields,values,locale);
   return {source:field,staticUnit:unitLabels.fieldUnitLabel(field,locale,calculator.id),active:visibility.isFieldVisible(field,values),value:values[field.name],dynamic};
  });
  selected={id:calculator.id,locale,route:calculator.fullPath,htmlLang:i18n.localeMeta[locale].htmlLang,schemaLanguage:i18n.localeMeta[locale].localeCode,canonical:new URL(calculator.fullPath!,site.SITE.url).href,expectedTitle:calculator.seoTitle.includes(i18n.localeMeta[locale].siteName)?calculator.seoTitle:`${calculator.seoTitle} — ${i18n.localeMeta[locale].siteName}`,metadata:{description:calculator.seoDescription.trim(),h1:calculator.h1,name:calculator.name,shortDescription:calculator.shortDescription},body:calculator.seoContent,howToUse:calculator.howToUse,disclaimer:calculator.disclaimer,editorial:review,alternates:i18n.getAlternatesForCalculator(calculator.id).map(a=>({locale:a.locale,htmlLang:a.locale==='x-default'?'x-default':i18n.localeMeta[a.locale].htmlLang,href:new URL(a.href,site.SITE.url).href})),fields,scenario:{input,query:search,values,source:{kind:c.kind,path:c.source,name:c.name,index:c.index,canonicalExpected:c.expected,canonicalExpectedPrimary:c.primary??null,expectedProvenance:'Existing fixed reference/published literals; not extracted from the compute result'},fixedExpectedExcerpts:excerptResults,independentNumericPrefix:independentPrefix,result,derivedResultProvenance:'Post-generation frozen server-runtime/phrase-map integration snapshot after fixed excerpt validation; NOT an independent arithmetic oracle'},candidateSelectionNotes:rejected};
  break;
 }
 assert(selected,`${calculator.id}/${locale}: no healthy established scenario compatible with real public fields: ${JSON.stringify(rejected)}`);
 assert(selected.body&&selected.body.intro.trim()&&selected.body.howItWorks.trim()&&selected.body.example.trim()&&selected.body.tips.trim()&&selected.body.faq.length,`${calculator.id}/${locale}: empty required authored section`);
 output.push(selected);if(rejected.length)choiceNotes.push({id:calculator.id,locale,rejected});
}
function files(dir:string):string[]{return readdirSync(dir).flatMap(name=>{const path=join(dir,name);return statSync(path).isDirectory()?files(path):/\.(?:ts|tsx|astro|json|css)$/.test(name)?[path]:[];});}
const sourceFiles=files(resolve('src')).sort().map(p=>({path:relative(resolve('.'),p).replaceAll('\\','/'),sha256:createHash('sha256').update(readFileSync(p)).digest('hex')}));
const sourceDigest=createHash('sha256').update(sourceFiles.map(f=>f.path+'\0'+f.sha256+'\n').join('')).digest('hex');
const fixture={schemaVersion:1,status:'READY_FOR_ACTUAL_BROWSER__NOT_BROWSER_APPROVAL',collectedAt:new Date().toISOString(),scope:'Exact1866 actual routes/376engines,5native locales, no route exclusions. Integration characterization after established fixed reference/excerpt checks; independent arithmetic remains unit/subject proof.',expectedRouteCount:1866,expectedEngineCount:376,sourceDigest,sourceFileCount:sourceFiles.length,locales,counts:Object.fromEntries(locales.map(locale=>[locale,output.filter(row=>row.locale===locale).length])),independentNumericPrefixCount:output.filter(row=>row.scenario.independentNumericPrefix!==null).length,candidateSelectionNotes:choiceNotes,rows:output,humanReview:'NEEDS_HUMAN_REVIEW',browserStatus:'NOT_RUN'};
const path=resolve('e2e/fixtures/originality-final-calculator-route-smoke.json');mkdirSync(resolve('e2e/fixtures'),{recursive:true});writeFileSync(path,JSON.stringify(fixture,null,2)+'\n');
console.log(JSON.stringify({fixture:path,sha256:createHash('sha256').update(readFileSync(path)).digest('hex'),routes:output.length,engines:new Set(output.map(row=>row.id)).size,counts:fixture.counts,independentNumericPrefixCount:fixture.independentNumericPrefixCount,sourceDigest,sourceFileCount:sourceFiles.length,scenarioChoiceNoteCount:choiceNotes.length,browserRun:false}));
