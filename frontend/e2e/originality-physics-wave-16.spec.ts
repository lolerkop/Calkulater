import { expect, test, type Locator, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
const fixtureJson=JSON.parse(readFileSync(new URL('./fixtures/originality-physics-wave-16.json',import.meta.url),'utf8'));

type Locale='ru'|'en'|'uk'|'de'|'es';
type Input=Record<string,string|number>;
interface FieldGolden {name:string;label:string;type:string;unit?:string;staticUnit:string;defaultValue:string|number;showIf?:{field:string;equals?:string;oneOf?:string[]};options?:{value:string;label:string}[];}
interface PageGolden {id:string;locale:Locale;route:string;expectedTitle:string;copy:{h1:string;shortDescription:string;seoTitle:string;seoDescription:string;longDescription:string;howItWorks:string;example:string;howToUse:string[];faq:{q:string;a:string}[];disclaimer:string};fields:FieldGolden[];sources:{href:string;label:string}[];}
interface Control {id:string;input:Input;primary:number;defaultPrimary:number;proofField:string;invalid:Input;errorKind:'field'|'engine';errors:Record<Locale,string>;}
interface Mode {id:string;field:string;states:{input:Input;primary:number;active:string[]}[];}
const fixture=fixtureJson as unknown as {pages:PageGolden[];controls:Control[];modes:Mode[];locales:Locale[];defaults:Record<string,Input>;modeErrors:Record<string,Record<Locale,string>>;decibelHelp:Record<Locale,string>;emptyListErrors:Record<Locale,string>;listLimitErrors:Record<Locale,string>};
const enterNumber:Record<Locale,string>={ru:'Введите число.',en:'Enter a number.',uk:'Введіть число.',de:'Bitte eine Zahl eingeben.',es:'Introduce un número.'};
const errorLabel:Record<Locale,string>={ru:'Проверьте данные',en:'Check the values',uk:'Перевірте дані',de:'Prüfe die Werte',es:'Revisa los datos'};
const golden=(id:string,locale:Locale)=>{const p=fixture.pages.find(p=>p.id===id&&p.locale===locale);if(!p)throw Error('Missing reviewed public route');return p;};
const active=(field:FieldGolden,values:Input)=>!field.showIf||(field.showIf.oneOf?field.showIf.oneOf.includes(String(values[field.showIf.field])):field.showIf.equals===values[field.showIf.field]);
const query=(input:Input)=>new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)])).toString();
const dd=(page:Page,index:number)=>page.getByTestId(`calc-result-row-${index}`).locator('dd');
function numberPrefix(text:string,locale:Locale){
 const value=text.trim().replace(/[\s\u00a0\u202f]/g,'');
 const m=value.match(/^[+−-]?\d+(?:[.,]\d+)*(?:·10\^[+−-]?\d+)?/);if(!m)throw Error(`Expected a finite numeric quantity, got ${text}`);
 const normalized=(locale==='en'?m[0].replaceAll(',',''):m[0].replace(',','.')).replaceAll('−','-').replace('·10^','e');
 const n=Number(normalized);if(!Number.isFinite(n))throw Error('Invalid numeric quantity: '+text);return n;
}
async function quantity(locator:Locator,locale:Locale,expected:number){
 await expect(locator).toBeVisible();if(expected===0)await expect.poll(async()=>numberPrefix(await locator.innerText(),locale)).toBe(0);else await expect.poll(async()=>Math.abs(numberPrefix(await locator.innerText(),locale)/expected-1)).toBeLessThan(.0006);
}
async function noInvalidNumber(page:Page){expect((await page.getByTestId('calc-result-wrap').allTextContents()).join(' ')).not.toMatch(/NaN|Infinity|undefined/);}
async function visit(page:Page,id:string,locale:Locale,input:Input={}){await page.goto(golden(id,locale).route+(Object.keys(input).length?'?'+query(input):''));await expect(page.getByTestId(`calculator-island-${id}`)).toBeVisible();}
async function readable(page:Page,width:number){
 const size=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));expect(size.client).toBe(width);expect(size.scroll).toBeLessThanOrEqual(width+1);
 const row=page.getByTestId('calc-result-row-0'),label=await row.locator('dt').boundingBox(),value=await row.locator('dd').boundingBox();expect(label).not.toBeNull();expect(value).not.toBeNull();
 if(width===390){expect(label!.width).toBeGreaterThanOrEqual(240);expect(value!.width).toBeGreaterThanOrEqual(240);expect(value!.y).toBeGreaterThanOrEqual(label!.y+label!.height-1);}
 else{expect(label!.width).toBeGreaterThanOrEqual(140);expect(value!.width).toBeGreaterThanOrEqual(160);expect(label!.x+label!.width).toBeLessThanOrEqual(value!.x+1);}
 const fits=await row.evaluate(e=>e.scrollWidth<=e.clientWidth+1);expect(fits).toBe(true);
}
async function bodyAndUnits(page:Page,p:PageGolden,values:Input){
 await expect(page).toHaveTitle(p.expectedTitle);await expect(page.locator('meta[name="description"]')).toHaveAttribute('content',p.copy.seoDescription);
 await expect(page.getByTestId('calculator-h1')).toHaveText(p.copy.h1);
 const canonical=await page.locator('link[rel="canonical"]').getAttribute('href');expect(canonical).not.toBeNull();expect(new URL(canonical!).pathname).toBe(p.route);expect(new URL(canonical!).search).toBe('');
 await expect(page.getByTestId(`calculator-page-${p.id}`).locator('p')).toHaveText(p.copy.shortDescription);
 await expect(page.getByTestId('calculator-support').locator('p').first()).toHaveText(p.copy.longDescription);
 const details=page.getByTestId('calculator-details').locator('.content-card p');await expect(details.nth(0)).toHaveText(p.copy.howItWorks);await expect(details.nth(1)).toHaveText(p.copy.example);
 const steps=page.getByTestId('calculator-how-to-use').locator('li');await expect(steps).toHaveCount(p.copy.howToUse.length);
 for(const[index,step]of p.copy.howToUse.entries())await expect(steps.nth(index)).toHaveText('— '+step);
 const rows=page.getByTestId('calculator-fields').locator('li');await expect(rows).toHaveCount(p.fields.length);
 for(const[index,field]of p.fields.entries()){
  await expect(rows.nth(index).locator('strong')).toHaveText(field.label);await expect(rows.nth(index)).toContainText('— '+field.staticUnit);
  const control=page.getByTestId(`field-${field.name}`);
  if(active(field,values)){
   await expect(control).toBeVisible();await expect(page.getByTestId(`field-label-${field.name}`)).toHaveText(field.label+(field.unit?' ('+field.unit+')':''));
   if(field.options)for(const option of field.options)await expect(control.locator(`option[value="${option.value}"]`)).toHaveText(option.label);
  }else await expect(control).toHaveCount(0);
 }
 const sources=page.getByTestId('calculator-source-review');await expect(sources.locator('dd').first()).toHaveText(p.copy.howItWorks);await expect(sources.locator('dd').last()).toContainText(p.copy.disclaimer);
 for(const source of p.sources)await expect(sources.locator(`a[href="${source.href}"]`)).toHaveText(source.label);
 const faq=page.getByTestId('calculator-faq').locator('details');await expect(faq).toHaveCount(p.copy.faq.length);
 for(const[index,item]of p.copy.faq.entries()){await expect(faq.nth(index).locator('summary span').first()).toHaveText(item.q);await faq.nth(index).locator('summary').click();await expect(faq.nth(index).locator('p')).toHaveText(item.a);}
 const blocks=await page.locator('script[type="application/ld+json"]').allTextContents();
 const schemas=blocks.flatMap(s=>{const value=JSON.parse(s);return Array.isArray(value)?value:[value];});
 const faqSchema=schemas.find(s=>s['@type']==='FAQPage');expect(faqSchema?.mainEntity.map((x:{name:string;acceptedAnswer:{text:string}})=>({q:x.name,a:x.acceptedAnswer.text}))).toEqual(p.copy.faq);
 const how=schemas.find(s=>s['@type']==='HowTo');expect(how?.step.map((x:{text:string})=>x.text)).toEqual(p.copy.howToUse);
 await noInvalidNumber(page);
}
test.beforeEach(async({context,page})=>{
 await context.route('**/*',route=>{const url=new URL(route.request().url());return ['data:','blob:'].includes(url.protocol)||['localhost','127.0.0.1','::1'].includes(url.hostname)?route.continue():route.abort();});
 await page.addInitScript(()=>{Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as{copiedPhysicsLink:string}).copiedPhysicsLink=text;}}});});
});
for(const c of fixture.controls)for(const locale of fixture.locales)for(const width of[390,1365])test(`${c.id}/${locale}/${width}: literal result, full native copy/schema/units and strict declared domain`,async({page})=>{
 await page.setViewportSize({width,height:900});const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 await visit(page,c.id,locale,c.input);await quantity(page.getByTestId('calc-result-primary'),locale,c.primary);await bodyAndUnits(page,golden(c.id,locale),{...fixture.defaults[c.id],...c.input});await readable(page,width);
 await page.reload();await quantity(page.getByTestId('calc-result-primary'),locale,c.primary);
 for(const[field,value]of Object.entries(c.invalid))await page.getByTestId(`field-${field}`).fill(String(value));
 if(c.errorKind==='field'){
  await expect(page.getByTestId(`field-error-${Object.keys(c.invalid)[0]}`)).toHaveText(c.errors[locale]);await expect(page.getByTestId('calc-result-invalid')).toBeVisible();await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
 }else{await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(page.getByTestId('calc-result-row-0').locator('dt')).toHaveText(errorLabel[locale]);await expect(dd(page,0)).toHaveText(c.errors[locale]);await readable(page,width);}
 await noInvalidNumber(page);expect(errors).toEqual([]);
});
for(const c of fixture.controls)for(const locale of fixture.locales)test(`${c.id}/${locale}: raw blank/malformed input, active-only share, query reload and defaults`,async({page})=>{
 await page.setViewportSize({width:390,height:900});await visit(page,c.id,locale,c.input);await quantity(page.getByTestId('calc-result-primary'),locale,c.primary);
 await page.getByTestId('calc-share-btn').click();await expect.poll(()=>page.evaluate(()=>(window as unknown as{copiedPhysicsLink?:string}).copiedPhysicsLink??'')).not.toBe('');
 const shared=await page.evaluate(()=>(window as unknown as{copiedPhysicsLink:string}).copiedPhysicsLink),url=new URL(shared),p=golden(c.id,locale);expect(url.pathname).toBe(p.route);
 const values={...fixture.defaults[c.id],...c.input};
 for(const field of p.fields){if(!active(field,values)||String(values[field.name])===String(field.defaultValue))expect(url.searchParams.has(field.name)).toBe(false);else expect(url.searchParams.get(field.name)).toBe(String(values[field.name]));}
 await page.goto(shared);await quantity(page.getByTestId('calc-result-primary'),locale,c.primary);await page.reload();await quantity(page.getByTestId('calc-result-primary'),locale,c.primary);
 for(const bad of['','abc','1e-999']){
  await page.getByTestId(`field-${c.proofField}`).fill(bad);
  if(c.id==='decibel'){
   await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(dd(page,0)).toHaveText(bad===''?fixture.emptyListErrors[locale]:c.errors[locale]);
  }else{await expect(page.getByTestId(`field-error-${c.proofField}`)).toHaveText(enterNumber[locale]);await expect(page.getByTestId('calc-result-invalid')).toBeVisible();await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);}
  await noInvalidNumber(page);
 }
 await visit(page,c.id,locale);await quantity(page.getByTestId('calc-result-primary'),locale,c.defaultPrimary);
 for(const field of p.fields.filter(f=>active(f,fixture.defaults[c.id])))await expect(page.getByTestId(`field-${field.name}`)).toHaveValue(String(field.defaultValue));
 await page.evaluate(()=>{(window as unknown as{copiedPhysicsLink:string}).copiedPhysicsLink='';});await page.getByTestId('calc-share-btn').click();await expect.poll(()=>page.evaluate(()=>(window as unknown as{copiedPhysicsLink:string}).copiedPhysicsLink)).not.toBe('');
 const defaultShared=await page.evaluate(()=>(window as unknown as{copiedPhysicsLink:string}).copiedPhysicsLink);expect(new URL(defaultShared).search).toBe('');
 await page.goto(defaultShared);await quantity(page.getByTestId('calc-result-primary'),locale,c.defaultPrimary);await noInvalidNumber(page);
});
for(const model of fixture.modes)for(const locale of fixture.locales)test(`${model.id}/${locale}: every supported enum state, hidden targets and unknown-mode boundary`,async({page})=>{
 await page.setViewportSize({width:390,height:900});const p=golden(model.id,locale);
 for(const state of model.states){
  await visit(page,model.id,locale,state.input);await quantity(page.getByTestId('calc-result-primary'),locale,state.primary);
  for(const field of p.fields.filter(f=>f.name!==model.field))await expect(page.getByTestId(`field-${field.name}`)).toHaveCount(state.active.includes(field.name)?1:0);
  await page.getByTestId('calc-share-btn').click();await expect.poll(()=>page.evaluate(()=>(window as unknown as{copiedPhysicsLink?:string}).copiedPhysicsLink??'')).not.toBe('');
  const shared=await page.evaluate(()=>(window as unknown as{copiedPhysicsLink:string}).copiedPhysicsLink);for(const field of p.fields.filter(f=>f.showIf&&!state.active.includes(f.name)))expect(new URL(shared).searchParams.has(field.name)).toBe(false);
  await page.goto(shared);await quantity(page.getByTestId('calc-result-primary'),locale,state.primary);
 }
 const first=model.states[0];await visit(page,model.id,locale,{...fixture.defaults[model.id],[model.field]:'alien'});
 await expect(page.getByTestId(`field-${model.field}`)).toHaveValue(String(fixture.defaults[model.id][model.field]));const c=fixture.controls.find(c=>c.id===model.id)!;await quantity(page.getByTestId('calc-result-primary'),locale,c.defaultPrimary);
 await visit(page,model.id,locale,first.input);const select=page.getByTestId(`field-${model.field}`);await select.evaluate(element=>{const option=document.createElement('option');option.value='alien';option.textContent='unsupported fixture';element.appendChild(option);});await select.selectOption('alien');
 await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(dd(page,0)).toHaveText(fixture.modeErrors[model.id][locale]);await noInvalidNumber(page);
});
for(const locale of fixture.locales){
 test(`decibel/${locale}: common-unit ratio help is associated with fields; two distinct mode grammars`,async({page})=>{
  await visit(page,'decibel',locale,{mode:'ratio',kind:'amplitude',p1:1,p2:2});await quantity(page.getByTestId('calc-result-primary'),locale,6.020599913279624);
  for(const name of['p1','p2']){const field=page.getByTestId(`field-${name}`);await expect(field).toHaveAttribute('aria-describedby',`f-${name}-help`);await expect(page.locator(`#f-${name}-help`)).toHaveText(fixture.decibelHelp[locale]);}
  await page.getByTestId('field-kind').selectOption('power');await quantity(page.getByTestId('calc-result-primary'),locale,3.010299956639812);
  await page.getByTestId('field-mode').selectOption('sum');await page.getByTestId('field-levels').fill('80,80');await quantity(page.getByTestId('calc-result-primary'),locale,83.010299956639812);await expect(dd(page,0)).toHaveText('2');
  await page.getByTestId('field-levels').fill('80.5;80.5');await quantity(page.getByTestId('calc-result-primary'),locale,83.510299956639812);await expect(dd(page,0)).toHaveText('2');
  await page.getByTestId('field-levels').fill('80 '.repeat(10001));await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(dd(page,0)).toHaveText(fixture.listLimitErrors[locale]);await noInvalidNumber(page);
  await visit(page,'decibel',locale,{mode:'ratio',kind:'power',p1:1,p2:2});const kind=page.getByTestId('field-kind');await kind.evaluate(element=>{const option=document.createElement('option');option.value='alien';option.textContent='unsupported fixture';element.appendChild(option);});await kind.selectOption('alien');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(dd(page,0)).toHaveText(fixture.modeErrors.decibel[locale]);
 });
 test(`signed/zero/${locale}: compression, cooling, zero speed and saturation retain physical meanings`,async({page})=>{
  await visit(page,'stress-strain',locale,{mode:'modulus',force:-100,area:10,length:20,delta:-.1});await quantity(page.getByTestId('calc-result-primary'),locale,2000);await page.reload();await quantity(page.getByTestId('calc-result-primary'),locale,2000);
  await visit(page,'stress-strain',locale,{mode:'elongation',force:-100,area:10,length:20,e:2000});await quantity(page.getByTestId('calc-result-primary'),locale,-.1);await page.reload();await quantity(page.getByTestId('calc-result-primary'),locale,-.1);
  await visit(page,'centripetal-force',locale,{m:4,v:0,r:2});await quantity(page.getByTestId('calc-result-primary'),locale,0);await expect(page.getByTestId('calc-result-wrap').locator('dt')).toHaveCount(2); // acceleration and angular velocity; no finite orbital period.
  await visit(page,'hooke-law',locale,{mode:'force',k:200,x:0});await quantity(page.getByTestId('calc-result-primary'),locale,0);await quantity(dd(page,0),locale,0);
  await visit(page,'specific-heat',locale,{mode:'deltaT',mass:2,c:3,q:0});await quantity(page.getByTestId('calc-result-primary'),locale,0);
  await visit(page,'wind-power',locale,{d:3,v:0,rho:1.225,cp:16/27});await quantity(page.getByTestId('calc-result-primary'),locale,0);
  await visit(page,'humidity-convert',locale,{t:20,rh:0,pressure:1013.25});await quantity(page.getByTestId('calc-result-primary'),locale,0);await quantity(dd(page,0),locale,0);await noInvalidNumber(page);
 });
 test(`extreme/${locale}: recoverable products and tiny positive logarithmic correction survive reload`,async({page})=>{
  await visit(page,'decibel',locale,{mode:'sum',levels:'0 -1000'});await quantity(dd(page,2),locale,4.342944819032518e-100);
  await page.reload();await quantity(dd(page,2),locale,4.342944819032518e-100);
  await visit(page,'thermal-conduction',locale,{area:1,thickness:1e200,k:1e200,dt:1e200});await quantity(page.getByTestId('calc-result-primary'),locale,1e200);
  await visit(page,'mach-number',locale,{v:1e-300,t:20});await quantity(page.getByTestId('calc-result-primary'),locale,8.093899938638711e-304);await page.reload();await quantity(page.getByTestId('calc-result-primary'),locale,8.093899938638711e-304);await noInvalidNumber(page);
 });
}
