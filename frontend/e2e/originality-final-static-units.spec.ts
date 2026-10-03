import {test,expect,type Page} from '@playwright/test';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
// All396 affected published native routes: SSR static-caption integration plus
// retained C4D body/field/healthy fixed-query result/reload characterization.
// No expected number is recomputed from the candidate engine. This does not
// replace the independent subject arithmetic tests or claim a second width on
// every route. Currency20 belongs to the separate unchanged40-case specification.
interface Field {name:string;label:string;type:string;unit?:string;help?:string;readOnly?:boolean;options?:{value:string;label:string}[];}
interface Result {primary:{label:string;value:string};secondary:{label:string;value:string;href?:string}[];table?:{title?:string;columns:string[];rows:string[][];note?:string};note?:string;}
interface Row {id:string;locale:string;route:string;htmlLang:string;schemaLanguage:string;canonical:string;expectedTitle:string;metadata:{description:string;h1:string;name:string;shortDescription:string};body:{intro:string;howItWorks:string;example:string;tips:string;faq:{q:string;a:string}[]};howToUse:string[];disclaimer?:string;editorial:{heading:string;method:string;limitation:string;sources:{label:string;href?:string}[];reviewedAt?:string};alternates:{htmlLang:string;href:string}[];fields:{source:Field;staticUnit:string;active:boolean;value:string|number|boolean;dynamic:Field}[];scenario:{query:string;result:Result;independentNumericPrefix:number|null;source:{expectedProvenance:string;canonicalExpected:string[];canonicalExpectedPrimary:string|null;kind:string;path:string};derivedResultProvenance:string};}
interface Fixture {status:string;expectedRouteCount:number;expectedEngineCount:number;locales:string[];counts:Record<string,number>;sourceDigest:string;rows:Row[];independentNumericPrefixCount:number;}
type CaptionContract={type:string;captions:Record<string,string>};
const baselineText=readFileSync(new URL('../reports/originality-final-before-currency-unit/frontend__e2e__fixtures__originality-final-calculator-route-smoke.json',import.meta.url),'utf8');
const captionText=readFileSync(new URL('../reports/originality-final-static-unit-caption-contract.json',import.meta.url),'utf8');
const curationText=readFileSync(new URL('../reports/originality-final-static-unit-curation.json',import.meta.url),'utf8');
const fixture=JSON.parse(baselineText)as Fixture;
const caption=JSON.parse(captionText)as {contracts:Record<string,Record<string,CaptionContract>>;curationSourceSHA256:string};
const curation=JSON.parse(curationText)as {revise:{id:string;field:string;publishedRows:{locale:string;route:string}[]}[]};
const hash=(text:string)=>createHash('sha256').update(text).digest('hex');
// Retain archived numeric/caption contracts, update only current presentation.
const current=JSON.parse(readFileSync(new URL('./fixtures/originality-final-calculator-route-smoke.json',import.meta.url),'utf8'))as Fixture;
const currentByRoute=new Map(current.rows.map(row=>[row.route,row]));
const affectedRows=fixture.rows.filter(row=>Object.hasOwn(caption.contracts,row.id)).map(row=>{
 const presentation=currentByRoute.get(row.route)!;
 return {...row,expectedTitle:presentation.expectedTitle,metadata:presentation.metadata,body:presentation.body,howToUse:presentation.howToUse,editorial:presentation.editorial,fields:row.fields.map(field=>{
  const actual=presentation.fields.find(f=>f.source.name===field.source.name)!;
  return {...field,source:{...field.source,help:actual.source.help},dynamic:{...field.dynamic,help:actual.dynamic.help}};
 })};
});
const screenshotRoutes=new Map([
 ['en/brew-ratio','en-brew-ratio-ml-per-g'],
 ['uk/credit-calculator','uk-credit-term-months-years'],
 ['de/molarity','de-molarity-selected-volume'],
 ['es/recipe-cost','es-recipe-ingredients-quantity-price'],
 ['ru/time-duration','ru-clock-hour-minute-fields'],
 ['en/commission','en-commission-mode-money-percent'],
]);
function expectedStaticUnit(row:Row,field:Row['fields'][number]){
 const owned=caption.contracts[row.id]?.[field.source.name];
 if(!owned)return field.staticUnit;
 expect(owned.type).toBe(field.source.type);
 expect(field.source.unit).toBeUndefined();
 return owned.captions[row.locale];
}
const normalize=(s:string)=>s.replace(/[\s\u00a0\u202f]+/g,' ').trim();
const bad=/NaN|Infinity|undefined|\[object Object\]/;
const locales=['ru','en','uk','de','es'];
function numericPrefix(text:string,locale:string):number|null{
 const s=text.replace(/[\s\u00a0\u202f]/g,'');
 const native=locale==='en'?s.replaceAll(',',''):s.replace(',','.');
 const match=native.match(/^[+−-]?\d+(?:\.\d+)?(?:·10\^[+−-]?\d+)?/);
 if(!match)return null;const n=Number(match[0].replaceAll('−','-').replace('·10^','e'));return Number.isFinite(n)?n:null;
}
function assertScope(){
 expect(hash(baselineText)).toBe('c957f613883d99369b5d481bd9896df0078100ff0e98fce598c76c3ec55e5ee2');
 expect(hash(curationText)).toBe('b6a3bd40f10e8faa5c4a049bb6e726a7aa31c8b381efb7dfff6970af6731f786');
 expect(hash(captionText)).toBe('cbc3d188b5c1ab888c308944faa182a050a30568a155dd50e6550b03cfe9ddd1');
 expect(caption.curationSourceSHA256).toBe(hash(curationText));
 expect(fixture.rows).toHaveLength(1866);expect(fixture.expectedEngineCount).toBe(376);
 expect(affectedRows).toHaveLength(396);expect(new Set(affectedRows.map(row=>row.route)).size).toBe(396);
 expect(new Set(affectedRows.map(row=>row.id)).size).toBe(80);
 expect(curation.revise).toHaveLength(155);expect(curation.revise.flatMap(row=>row.publishedRows)).toHaveLength(771);
 expect(affectedRows.reduce((n,row)=>n+row.fields.filter(field=>Object.hasOwn(caption.contracts[row.id],field.source.name)).length,0)).toBe(771);
 expect(affectedRows.some(row=>['currency-converter','usd-to-eur','eur-to-mdl','usd-to-mdl'].includes(row.id))).toBe(false);
 expect(affectedRows.map(row=>row.route).sort()).toEqual([...new Set(curation.revise.flatMap(row=>row.publishedRows.map(row=>row.route)))].sort());
 expect(Object.fromEntries(locales.map(locale=>[locale,affectedRows.filter(row=>row.locale===locale).length]))).toEqual({ru:80,en:79,uk:79,de:79,es:79});
 for(const row of affectedRows){expect(row.scenario.source.canonicalExpected.length).toBeGreaterThan(0);expect(row.scenario.source.expectedProvenance).toContain('not extracted from the compute');expect(row.scenario.derivedResultProvenance).toContain('NOT an independent arithmetic oracle');}
}
async function hydrated(page:Page,row:Row){
 const island=page.getByTestId(`calculator-island-${row.id}`);await expect(island).toBeVisible({timeout:15_000});
 const host=island.locator('xpath=ancestor::astro-island[1]');await expect(host).toHaveCount(1);
 // SSR HTML alone is not a successful interactive smoke. Astro removes ssr
 // only when the real client component has taken over the server markup.
 await expect.poll(()=>host.getAttribute('ssr'),{timeout:20_000}).toBe(null);
 await expect(page.getByTestId('calc-result-primary')).toHaveText(row.scenario.result.primary.value,{timeout:10_000});
 // The early-input journal must be gone after normal URL restoration too,
 // including routes where no pre-hydration input event ever occurred.
 const calculator=page.locator('#calculator');await expect(calculator).toHaveCount(1);
 const journalLifecycle=await calculator.evaluate(root=>({
  journalPresent:'__calcuwayInputJournal' in root,
  scripts:Array.from(root.querySelectorAll('script[src="/input-journal.js"]')).map(script=>({
   src:script.getAttribute('src'),type:script.getAttribute('type'),async:script.hasAttribute('async'),defer:script.hasAttribute('defer'),
  })),
 }));
 expect(journalLifecycle.scripts).toEqual([{src:'/input-journal.js',type:null,async:false,defer:false}]);
 expect(journalLifecycle.journalPresent).toBe(false);
}
async function documentSnapshot(page:Page){return page.evaluate(()=>{
 const txt=(e:Element|null)=>e?.textContent??'';
 const all=(s:string)=>Array.from(document.querySelectorAll(s));
 const support=document.querySelector('[data-testid="calculator-support"] > div');
 const sources=document.querySelector('[data-testid="calculator-source-review"]');
 const result=document.querySelector('[data-testid="calc-result-wrap"]');
 const primary=document.querySelector('[data-testid="calc-result-primary"]');
 return {lang:document.documentElement.lang,title:document.title,path:location.pathname,
  description:document.querySelector('meta[name="description"]')?.getAttribute('content'),canonical:document.querySelector('link[rel="canonical"]')?.getAttribute('href'),robots:document.querySelector('meta[name="robots"]')?.getAttribute('content'),
  alternates:all('link[rel="alternate"][hreflang]').map(a=>({htmlLang:a.getAttribute('hreflang'),href:a.getAttribute('href')})),
  h1s:all('h1').map(txt),disclaimerParagraphs:all('[data-testid^="calculator-island-"] form > p').map(txt),disclaimer:txt(document.querySelector('[data-testid^="calculator-island-"] form > p:last-of-type')),shortDescription:txt(document.querySelector('[data-testid^="calculator-page-"] > div > p')),
  intro:txt(support?.querySelector(':scope > p:not([data-testid="locale-specific-notice"])')??null),
  details:all('[data-testid="calculator-details"] .content-card > p').map(txt),
  staticFields:all('[data-testid="calculator-fields"] li').map(e=>({label:txt(e.querySelector('strong')),text:txt(e)})),
  howToUse:all('[data-testid="calculator-how-to-use"] li').map(e=>({text:txt(e),id:e.id})),tips:txt(document.querySelector('[data-testid="calculator-how-to-use"] > p')),tipCount:all('[data-testid="calculator-how-to-use"] > p').length,
  faq:all('[data-testid="calculator-faq"] details').map(e=>({q:txt(e.querySelector('summary > span')),a:txt(e.querySelector('p'))})),
  sourceHeading:txt(sources?.querySelector('h2')??null),sourceDefinitions:Array.from(sources?.querySelectorAll('dd')??[]).map(txt),sourceLinks:Array.from(sources?.querySelectorAll('a[href]:not([data-testid="method-section-link"])')??[]).map(a=>({label:txt(a),href:a.getAttribute('href')})),
  methodReference:sources?.querySelector('[data-testid="method-section-link"]')?{href:sources.querySelector('[data-testid="method-section-link"]')!.getAttribute('href'),text:txt(sources.querySelector('[data-testid="method-section-link"]'))}:null,
  schemas:all('script[type="application/ld+json"]').map(e=>JSON.parse(e.textContent??'{}')),
  result:{primary:{value:txt(primary),label:txt(primary?.parentElement?.querySelector(':scope > div')??null)},secondary:Array.from(result?.querySelectorAll('[data-testid^="calc-result-row-"]')??[]).map(e=>({label:txt(e.querySelector('dt')),value:txt(e.querySelector('dd')),href:e.querySelector('dd a')?.getAttribute('href')??null})),table:result?.querySelector('table')?{title:txt(result.querySelector('caption')),columns:Array.from(result.querySelectorAll('thead th')).map(txt),rows:Array.from(result.querySelectorAll('tbody tr')).map(e=>Array.from(e.querySelectorAll('td')).map(txt)),note:txt(result.querySelector('[data-testid="calc-result-table-note"]'))}:null,text:txt(result)},
  invalidFields:all('[data-testid^="field-error-"]').map(txt),invalidResult:document.querySelector('[data-testid="calc-result-invalid"]')!==null,emptyResult:document.querySelector('[data-testid="calc-result-empty"]')!==null,
  pageOverflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1};
 });}
async function checkFields(page:Page,row:Row){
 const actual=await page.evaluate(()=>Array.from(document.querySelectorAll('[data-testid^="field-"]')).filter(e=>!/-fieldset$|-opt-|^field-(?:label|error)-/.test(e.getAttribute('data-testid')??'')).map(e=>{
  const testId=e.getAttribute('data-testid')!;const name=testId.slice('field-'.length);
  const input=e as HTMLInputElement;const label=document.querySelector(`[data-testid="field-label-${name}"]`)??document.querySelector(`label[for="f-${name}"]`);
  const describedBy=e.getAttribute('aria-describedby')??'';
  const help=document.getElementById(`f-${name}-help`);
  const options=Array.from(e.querySelectorAll('option')).map(o=>({value:(o as HTMLOptionElement).value,label:o.textContent??''}));
  const toggles=Array.from(e.querySelectorAll('button[data-testid]')).map(b=>({value:b.getAttribute('data-testid')!.split('-opt-')[1],label:b.textContent??'',pressed:b.getAttribute('aria-pressed')}));
  return {name,value:input.value,checked:input.checked,disabled:input.disabled,label:label?.textContent??'',describedBy,help:help?.textContent??null,options,toggles,excludedDates:name==='excludedDates'?Array.from(document.querySelectorAll('[data-testid="excluded-date-chip"] > span')).map(e=>e.textContent??''):null};
 }));
 const active=row.fields.filter(f=>f.active);expect(actual.map(f=>f.name).sort()).toEqual(active.map(f=>f.source.name).sort());
 for(const field of active){const f=actual.find(x=>x.name===field.source.name)!;const source=field.dynamic;
  // Checkbox helper text is nested inside its label in the real renderer.
  const label=source.label+(source.unit&&source.type!=='checkbox'&&source.name!=='excludedDates'?` (${source.unit})`:'');
  if(source.type==='checkbox')expect(normalize(f.label)).toContain(normalize(label));else expect(normalize(f.label)).toBe(normalize(label));
  if(source.name==='excludedDates'){expect(f.value).toBe('');expect(f.excludedDates).toEqual(String(field.value??'').split(/[,;\n]+/).map(v=>v.trim()).filter(Boolean));}
  else if(source.type==='checkbox')expect(f.checked).toBe(Boolean(field.value));
  else if(source.type==='toggle'){expect(f.toggles.map(x=>({value:x.value,label:normalize(x.label)}))).toEqual(source.options?.map(x=>({value:x.value,label:normalize(x.label)})));expect(f.toggles.filter(x=>x.pressed==='true').map(x=>x.value)).toEqual([String(field.value)]);}
  else expect(f.value).toBe(String(field.value??''));
  if(source.type==='select'){expect(f.options.map(x=>({value:x.value,label:normalize(x.label)}))).toEqual(source.options?.map(x=>({value:x.value,label:normalize(x.label)})));expect(f.disabled).toBe(Boolean(source.readOnly));}
  if(source.help&&source.name!=='excludedDates'){expect(normalize(f.help??'')).toBe(normalize(source.help));expect(f.describedBy.split(' ')).toContain(`f-${source.name}-help`);}
  for(const id of f.describedBy.split(' ').filter(Boolean))expect(await page.locator(`[id="${id}"]`).count()).toBe(1);
 }
}
function checkResult(actual:Awaited<ReturnType<typeof documentSnapshot>>['result'],row:Row){
 const result=row.scenario.result;
 expect({label:normalize(actual.primary.label),value:normalize(actual.primary.value)}).toEqual({label:normalize(result.primary.label),value:normalize(result.primary.value)});
 expect(actual.secondary.map(r=>({label:normalize(r.label),value:normalize(r.value),href:r.href}))).toEqual(result.secondary.map(r=>({label:normalize(r.label),value:normalize(r.value),href:r.href??null})));
 if(result.table){expect(actual.table).not.toBeNull();expect(actual.table!.columns.map(normalize)).toEqual(result.table.columns.map(normalize));expect(actual.table!.rows.map(r=>r.map(normalize))).toEqual(result.table.rows.map(r=>r.map(normalize)));if(result.table.title)expect(normalize(actual.table!.title)).toBe(normalize(result.table.title));expect(normalize(actual.table!.note)).toBe(normalize(result.table.note??''));}else expect(actual.table).toBeNull();
 if(result.note)expect(normalize(actual.text)).toContain(normalize(result.note));expect(actual.text).not.toMatch(bad);
 if(row.id==='divisors'){
  // This established fixed-reference primary is an ordered list, not a scalar.
  // n=36: (1+2+4)(1+3+9)=91, with (2+1)(2+1)=9 divisors.
  expect(row.scenario.independentNumericPrefix).toBeNull();
  expect(row.scenario.source.kind).toBe('fixed-reference');
  expect(row.scenario.source.canonicalExpectedPrimary).toBe('1, 2, 3, 4, 6, 9, 12, 18, 36');
  expect(row.scenario.source.canonicalExpected).toEqual(['1, 2, 3, 4, 6, 9, 12, 18, 36','9','91']);
  expect(normalize(actual.primary.value)).toBe(row.scenario.source.canonicalExpectedPrimary);
  expect(actual.secondary.slice(0,2).map(r=>normalize(r.value))).toEqual(['9','91']);
 }
 if(row.scenario.independentNumericPrefix!==null)expect(numericPrefix(actual.primary.value,row.locale)).toBe(row.scenario.independentNumericPrefix);
}
async function checkDocument(page:Page,row:Row){
 const dom=await documentSnapshot(page);expect(dom.lang).toBe(row.htmlLang);expect(dom.path).toBe(row.route);expect(dom.title).toBe(row.expectedTitle);expect(dom.description).toBe(row.metadata.description);expect(dom.canonical).toBe(row.canonical);expect(dom.robots).toContain('index,follow');expect(dom.robots).not.toContain('noindex');
 expect(dom.h1s.map(normalize)).toEqual([normalize(row.metadata.h1)]);expect(normalize(dom.shortDescription)).toBe(normalize(row.metadata.shortDescription));expect(dom.alternates).toEqual(row.alternates.map(a=>({htmlLang:a.htmlLang,href:a.href})));
 expect(normalize(dom.intro)).toBe(normalize(row.body.intro));expect(dom.details.map(normalize)).toEqual([row.body.howItWorks,row.body.example].map(normalize));
 expect(dom.staticFields).toHaveLength(row.fields.length);for(const[f,i]of row.fields.map((f,i)=>[f,i]as const)){expect(normalize(dom.staticFields[i].label)).toBe(normalize(f.source.label));expect(normalize(dom.staticFields[i].text)).toBe(normalize(`${f.source.label} — ${expectedStaticUnit(row,f)}${f.source.help?`. ${f.source.help}`:''}`));}
 const steps=row.howToUse.filter(s=>s.trim());expect(dom.howToUse.map(s=>({...s,text:normalize(s.text)}))).toEqual(steps.map((s,i)=>({text:normalize(`— ${s}`),id:`step-${i+1}`})));const independentTip=normalize(row.body.tips)!==normalize(steps.join(' '));expect(normalize(dom.tips)).toBe(independentTip?normalize(row.body.tips):'');expect(dom.tipCount).toBe(independentTip?1:0);expect(dom.faq.map(x=>({q:normalize(x.q),a:normalize(x.a)}))).toEqual(row.body.faq.map(x=>({q:normalize(x.q),a:normalize(x.a)})));
 expect(normalize(dom.sourceHeading)).toBe(normalize(row.editorial.heading));if(normalize(row.editorial.method)===normalize(row.body.howItWorks)){expect(dom.methodReference?.href).toBe('#details');expect(dom.methodReference?.text.trim()).not.toBe('');expect(normalize(dom.sourceDefinitions[0])).toBe(normalize(dom.methodReference!.text));expect(await page.locator('[id="details"]').count()).toBe(1);}else{expect(dom.methodReference).toBeNull();expect(normalize(dom.sourceDefinitions[0])).toBe(normalize(row.editorial.method));}expect(normalize(dom.sourceDefinitions.at(-1)??'')).toBe(normalize(row.editorial.limitation));expect(dom.sourceLinks.map(x=>({label:normalize(x.label),href:x.href}))).toEqual(row.editorial.sources.filter(s=>s.href).map(s=>({label:normalize(s.label),href:s.href!})));
 if(row.editorial.reviewedAt)await expect(page.locator('[data-testid="calculator-source-review"] time')).toHaveAttribute('datetime',row.editorial.reviewedAt);
 const faq=dom.schemas.find(s=>s['@type']==='FAQPage');expect(faq?.mainEntity?.map((f:{name:string;acceptedAnswer:{text:string}})=>({q:normalize(f.name),a:normalize(f.acceptedAnswer.text)}))).toEqual(row.body.faq.map(x=>({q:normalize(x.q),a:normalize(x.a)})));
 const how=dom.schemas.find(s=>s['@type']==='HowTo');expect(how?.step?.map((s:{text:string})=>normalize(s.text))).toEqual(steps.map(normalize));
 for(const step of how?.step??[]){expect(new URL(step.url).pathname).toBe(row.route);expect(await page.locator(`[id="${new URL(step.url).hash.slice(1)}"]`).count()).toBe(1);}
 const app=dom.schemas.find(s=>s['@type']==='WebApplication');expect(app?.name).toBe(row.metadata.name);expect(app?.url).toBe(row.canonical);expect(app?.inLanguage).toBe(row.schemaLanguage);
 for(const segment of [dom.h1s[0],dom.intro,...dom.details,...(independentTip?[dom.tips]:[]),...dom.faq.flatMap(f=>[f.q,f.a]),...dom.sourceDefinitions]){expect(segment.trim()).not.toBe('');expect(segment).not.toMatch(bad);}
 if(row.disclaimer===undefined){expect(dom.disclaimerParagraphs).toEqual([]);expect(dom.disclaimer).toBe('');}else{expect(typeof row.disclaimer).toBe('string');expect(row.disclaimer.trim()).not.toBe('');expect(dom.disclaimerParagraphs).toHaveLength(1);expect(normalize(dom.disclaimer)).toBe(normalize(row.disclaimer));}
 expect(dom.invalidFields).toEqual([]);expect(dom.invalidResult).toBe(false);expect(dom.emptyResult).toBe(false);expect(dom.pageOverflow).toBe(false);checkResult(dom.result,row);await checkFields(page,row);
}
const chunkSize=40;
for(let chunk=0;chunk<10;chunk++){
 const batch=affectedRows.slice(chunk*chunkSize,(chunk+1)*chunkSize);
 test(`static-units/part${chunk+1}: ${batch.length} affected native routes, reviewed captions and retained fixed-query contracts`,async({page},info)=>{
  test.setTimeout(450_000);assertScope();
  await page.context().route('**/*',route=>{const url=route.request().url();if(/^(?:data:|blob:)/.test(url)||['localhost','127.0.0.1','::1','[::1]'].includes(new URL(url).hostname))return route.continue();return route.abort();});
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  const outcomes:{route:string;id:string;locale:string;width:number;status:string;phase:string;message?:string}[]=[];
  for(const[index,row]of batch.entries()){
   const capture=screenshotRoutes.get(`${row.locale}/${row.id}`);
   const width=capture?390:((chunk*chunkSize+index)%2===0?390:1365);
   await page.setViewportSize({width,height:950});
   let phase='navigation';const errorStart=errors.length;let raw:unknown=null;
   try{
    const response=await page.goto(row.route+`?${row.scenario.query}`,{waitUntil:'domcontentloaded',timeout:25_000});expect(response?.status()).toBe(200);expect(new URL(page.url()).pathname).toBe(row.route);
    phase='actual hydration';await hydrated(page,row);phase='native document/static units/unchanged controls/fixed-source result';await checkDocument(page,row);
    const first=await documentSnapshot(page);
    raw={staticFields:first.staticFields,primary:first.result.primary,secondary:first.result.secondary,invalidFields:first.invalidFields,pageOverflow:first.pageOverflow};
    if(capture){
     phase='selected mobile static-field region capture';
     const section=page.getByTestId('calculator-fields');
     await section.evaluate(element=>element.scrollIntoView({block:'center',inline:'nearest'}));
     await expect(section).toBeVisible();
     await info.attach(`static-units-${capture}`,{body:await section.screenshot(),contentType:'image/png'});
    }
    phase='query reload';await page.reload({waitUntil:'domcontentloaded',timeout:25_000});await hydrated(page,row);await checkDocument(page,row);
    expect(errors.slice(errorStart)).toEqual([]);
    outcomes.push({route:row.route,id:row.id,locale:row.locale,width,status:'PASS',phase:'actual static captions/native document/hydrated controls/retained literal result/query reload'});
   }catch(error){outcomes.push({route:row.route,id:row.id,locale:row.locale,width,status:'FAIL',phase,message:error instanceof Error?error.message:String(error)});}
   await info.attach(`static-unit-route-${chunk+1}-${index+1}-${row.locale}-${row.id}`,{body:JSON.stringify({
    scope:'SSR-caption integration and retained fixed-query characterization; not a new independent mathematical oracle',
    baselineSourceDigest:fixture.sourceDigest,baselineFixtureSHA256:hash(baselineText),captionContractSHA256:hash(captionText),
    route:row.route,id:row.id,locale:row.locale,width,query:row.scenario.query,
    fixedSource:row.scenario.source,expectedUnits:row.fields.map(field=>({field:field.source.name,unit:expectedStaticUnit(row,field),changed:Object.hasOwn(caption.contracts[row.id],field.source.name)})),
    observed:raw,outcome:outcomes.at(-1),pageErrors:errors.slice(errorStart),
   },null,2),contentType:'application/json'});
  }
  await info.attach(`static-units-part${chunk+1}`,{body:JSON.stringify({
   scope:'All396 affected published native routes; one alternated width per route, six selected mobile field regions',
   baselineSourceDigest:fixture.sourceDigest,captionContractSHA256:hash(captionText),planned:batch.length,visited:outcomes.length,outcomes,
  },null,2),contentType:'application/json'});
  expect(outcomes).toHaveLength(batch.length);
  expect(outcomes.filter(row=>row.status==='FAIL'),JSON.stringify(outcomes.filter(row=>row.status==='FAIL'),null,2)).toEqual([]);
 });
}
