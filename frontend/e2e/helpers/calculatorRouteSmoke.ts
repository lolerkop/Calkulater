import {expect,type Page} from '@playwright/test';
import {readFileSync} from 'node:fs';
// Exact full-site integration gate. The fixture keeps established fixed literal
// references separately from derived current bundle/phrase-map parity. This is
// not an independent replacement for the subject arithmetic unit evidence.
interface Field {name:string;label:string;type:string;unit?:string;help?:string;readOnly?:boolean;options?:{value:string;label:string}[];}
interface Result {primary:{label:string;value:string};secondary:{label:string;value:string;href?:string}[];table?:{title?:string;columns:string[];rows:string[][];note?:string};note?:string;}
interface Row {id:string;locale:string;route:string;htmlLang:string;schemaLanguage:string;canonical:string;expectedTitle:string;metadata:{description:string;h1:string;name:string;shortDescription:string};body:{intro:string;howItWorks:string;example:string;tips:string;faq:{q:string;a:string}[]};howToUse:string[];disclaimer?:string;editorial:{heading:string;method:string;limitation:string;sources:{label:string;href?:string}[];reviewedAt?:string};alternates:{htmlLang:string;href:string}[];fields:{source:Field;staticUnit:string;active:boolean;value:string|number|boolean;dynamic:Field}[];scenario:{query:string;result:Result;independentNumericPrefix:number|null;source:{expectedProvenance:string;canonicalExpected:string[];canonicalExpectedPrimary:string|null;kind:string;path:string};derivedResultProvenance:string};}
interface Fixture {status:string;expectedRouteCount:number;expectedEngineCount:number;locales:string[];counts:Record<string,number>;sourceDigest:string;rows:Row[];independentNumericPrefixCount:number;}
const fixture=JSON.parse(readFileSync(new URL('../fixtures/originality-final-calculator-route-smoke.json',import.meta.url),'utf8'))as Fixture;
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
 expect(fixture.status).toBe('READY_FOR_ACTUAL_BROWSER__NOT_BROWSER_APPROVAL');
 expect(fixture.expectedRouteCount).toBe(1866);expect(fixture.expectedEngineCount).toBe(376);
 expect(fixture.independentNumericPrefixCount).toBe(1823);expect(fixture.rows.filter(r=>r.scenario.independentNumericPrefix!==null)).toHaveLength(1823);expect(fixture.rows.filter(r=>r.id==='divisors')).toHaveLength(5);
 expect(fixture.rows).toHaveLength(1866);expect(new Set(fixture.rows.map(r=>r.route)).size).toBe(1866);
 expect(new Set(fixture.rows.map(r=>r.id)).size).toBe(376);expect([...fixture.locales].sort()).toEqual([...locales].sort());
 expect(fixture.counts).toEqual({ru:376,en:373,uk:373,de:372,es:372});
 for(const row of fixture.rows){expect(row.scenario.source.canonicalExpected.length).toBeGreaterThan(0);expect(row.scenario.source.expectedProvenance).toContain('not extracted from the compute');expect(row.scenario.derivedResultProvenance).toContain('NOT an independent arithmetic oracle');}
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
 expect(dom.staticFields).toHaveLength(row.fields.length);for(const[f,i]of row.fields.map((f,i)=>[f,i]as const)){expect(normalize(dom.staticFields[i].label)).toBe(normalize(f.source.label));expect(normalize(dom.staticFields[i].text)).toBe(normalize(`${f.source.label} — ${f.staticUnit}${f.source.help?`. ${f.source.help}`:''}`));}
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

export { fixture, normalize, assertScope, hydrated, documentSnapshot, checkDocument, checkFields, checkResult };
export type { Row };
