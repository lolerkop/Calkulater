import { test, expect, type Page } from '@playwright/test';
import { appendFileSync, readFileSync } from 'node:fs';
import { fixture } from './helpers/calculatorRouteSmoke';

const root = new URL('../../fixes/post-audit-2026-10-05/', import.meta.url);
const oracles = JSON.parse(readFileSync(new URL('peer/boundary-oracles.json', root), 'utf8'));
const dialogPlan = JSON.parse(readFileSync(new URL('results/dialog-scope.json', root), 'utf8')) as {url:string;locale:string;engine_id:string}[];
const pluralPlan = JSON.parse(readFileSync(new URL('results/plural-scope.json', root), 'utf8')) as {route:string;locale:string}[];
const rateProof = JSON.parse(readFileSync(new URL('sources/official-rates-independent.json', root), 'utf8'));
const mdlDate = rateProof.find((r:{provider:string})=>r.provider==='bnm').date.split('.').reverse().join('-');
const locales = ['ru','en','uk','de','es'];
const categoryTranslations: Record<string,string[]> = {
  'Выраженный дефицит': ['Выраженный дефицит','Severely underweight','Виражений дефіцит ваги','Starkes Untergewicht','Delgadez severa'],
  'Недостаток веса': ['Недостаток веса','Underweight','Недостатня вага','Untergewicht','Bajo peso'],
  'Норма': ['Норма','Healthy range','Нормальний діапазон','Normalbereich','Normal'],
  'Избыточный вес': ['Избыточный вес','Overweight','Надмірна вага','Übergewicht','Sobrepeso'],
  'Ожирение I степени': ['Ожирение I степени','Obesity class I','Ожиріння I ступеня','Adipositas Grad I','Obesidad de grado I'],
  'Ожирение II степени': ['Ожирение II степени','Obesity class II','Ожиріння II ступеня','Adipositas Grad II','Obesidad de grado II'],
  'Ожирение III степени': ['Ожирение III степени','Obesity class III','Ожиріння III ступеня','Adipositas Grad III','Obesidad de grado III'],
};
const currency: Record<string,string> = {ru:'₽',en:'$',uk:'₴',de:'€',es:'€'};
function record(id:string, locale:string, route:string, scenario:string, observation:unknown) {
  if (process.env.CALCUWAY_TARGET_LEDGER) appendFileSync(process.env.CALCUWAY_TARGET_LEDGER, JSON.stringify({id,locale,route,scenario,status:'PASS',observation,at_utc:new Date().toISOString()})+'\n');
}
function row(id:string,locale:string) {
  const found=fixture.rows.find(r=>r.id===id&&r.locale===locale); if(!found)throw Error(`Missing existing route ${id}/${locale}`); return found;
}
async function open(page:Page,id:string,locale:string,inputs?:Record<string,string|number>) {
  const r=row(id,locale);const query=inputs?new URLSearchParams(Object.entries(inputs).map(([k,v])=>[k,String(v)])).toString():'';
  expect((await page.goto(r.route+(query?'?'+query:''),{waitUntil:'domcontentloaded'}))?.status()).toBe(200);
  const island=page.getByTestId(`calculator-island-${id}`); await expect(island).toBeVisible();
  await expect.poll(()=>island.locator('xpath=ancestor::astro-island[1]').getAttribute('ssr')).toBe(null);
  return r;
}
function number(text:string,locale:string) {
  const compact=text.replace(/[\s\u00a0\u202f]/g,'').replaceAll('−','-');
  const native=locale==='en'?compact.replaceAll(',',''):compact.replace(',','.');
  const prefix=native.match(/^[+-]?\d+(?:\.\d+)?(?:·10\^[+-]?\d+)?/);
  if(!prefix)throw Error(`No numeric prefix in ${text}`);return Number(prefix[0].replace('·10^','e'));
}
async function primary(page:Page,locale:string,expected:number,tolerance=0) {
  await expect.poll(async()=>Math.abs(number(await page.getByTestId('calc-result-primary').innerText(),locale)-expected)).toBeLessThanOrEqual(tolerance);
  return page.getByTestId('calc-result-primary').innerText();
}
async function helpWithout(page:Page,name:string,forbidden:string|RegExp) {
  await expect(page.getByTestId(`field-${name}`)).toBeVisible();
  const help=await page.locator(`#f-${name}-help`).allTextContents();
  expect(help.join(' ')).not.toMatch(typeof forbidden==='string'?new RegExp(forbidden):forbidden);
  return {help_present:help.length>0,help:help.join(' ')};
}
test.beforeEach(async({page})=>{
  await page.context().route('**/*',r=>new URL(r.request().url()).origin==='http://127.0.0.1:8771'?r.continue():r.abort());
  await page.setViewportSize({width:390,height:950});
});
for(const locale of locales) {
 test(`AUD-001/${locale}: all independent BMI boundary oracles and reload`,async({page})=>{
  test.setTimeout(180_000);const r=await open(page,'bmi-calculator',locale);
  for(const c of oracles.bmi_cases) {
   await page.getByTestId('field-height').fill(c.inputs.height);await page.getByTestId('field-weight').fill(c.inputs.weight);
   const expected=categoryTranslations[c.expect_category_ru][locales.indexOf(locale)];
   await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(expected);
   record('AUD-001',locale,r.route,c.label,{inputs:c.inputs,category:expected});
  }
  await open(page,r.id,locale,{height:'160',weight:'63.99999999999999999'});await page.reload();
  await expect(page.getByTestId('field-weight')).toHaveValue('63.99999999999999999');
  await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(categoryTranslations['Норма'][locales.indexOf(locale)]);
  record('AUD-001',locale,r.route,'high-precision URL reload',{category:'below 25',input:'63.99999999999999999'});
 });
 test(`AUD-002/${locale}: exact anchors, small values and algebraic neighbours`,async({page})=>{
  test.setTimeout(180_000);const r=await open(page,'convert-temperature',locale);
  for(const c of oracles.temperature_cases) {
   await page.getByTestId('field-from').selectOption(c.inputs.from);await page.getByTestId('field-to').selectOption(c.inputs.to);
   await page.getByTestId('field-value').fill(c.inputs.value);
   const expected=Number(c.expect_nearest_float);
   // The generic formatter prints four decimals or six decimals of the scientific coefficient.
   // Zero anchors are exact; small nonzero values must remain nonzero with the right sign.
   const tolerance=expected===0?0:Math.abs(expected)<0.0001?Math.abs(expected)*0.00000051:0.000051;
   const actual=await primary(page,locale,expected,tolerance);expect(Math.sign(number(actual,locale))).toBe(c.expect_sign);
   record('AUD-002',locale,r.route,c.label,{inputs:c.inputs,expected,actual,tolerance});
  }
  await open(page,r.id,locale,{value:'-459.6699999999999999',from:'f',to:'k'});await page.reload();
  await expect(page.getByTestId('field-value')).toHaveValue('-459.6699999999999999');
  expect(number(await page.getByTestId('calc-result-primary').innerText(),locale)).toBeGreaterThan(0);
  record('AUD-002',locale,r.route,'high-precision URL reload',{sign:1});
 });
 test(`AUD-003/${locale}: commission modes and sequential discount`,async({page})=>{
  for(const c of [{mode:'fromAmount',a:10000,b:2.5,want:250},{mode:'fromCommission',a:250,b:2.5,want:10000},{mode:'rate',a:10000,b:250,want:2.5}]) {
   const r=await open(page,'commission',locale,c);const actual=await primary(page,locale,c.want);
   await expect(page.getByTestId('field-label-a')).toContainText(`(${currency[locale]})`);
   await expect(page.getByTestId('field-label-b')).toContainText(`(${c.mode==='rate'?currency[locale]:'%'})`);
   expect(actual).toContain(c.mode==='rate'?'%':currency[locale]);record('AUD-003',locale,r.route,c.mode,{actual});
  }
  for(const c of [{mode:'byPercent',discountPct:20,secondDiscountPct:10,want:720},{mode:'byAmount',discountAmt:250,secondDiscountPct:10,want:675},{mode:'byPercent',discountPct:0,secondDiscountPct:0,want:1000}]) {
   const r=await open(page,'discount-calculator',locale,{price:1000,quantity:3,...c});const actual=await primary(page,locale,c.want);
   expect(actual).toContain(currency[locale]);record('AUD-003',locale,r.route,`${c.mode}, second ${c.secondDiscountPct}%`,{actual});
  }
  if(['en','uk'].includes(locale)) {
   const r=await open(page,'car-depreciation',locale);await expect(page.getByTestId('field-label-price')).not.toContainText('₽');
   await expect(page.getByTestId('field-label-price')).toContainText(currency[locale]);record('AUD-003',locale,r.route,'purchase label agrees',{label:await page.getByTestId('field-label-price').innerText()});
  }
 });
 test(`AUD-005–009/${locale}: helpers and freshness`,async({page})=>{
  const stock=await open(page,'stock-duration',locale);record('AUD-005',locale,stock.route,'reserveDays has no percent fallback',await helpWithout(page,'reserveDays','%'));
  if(['ru','uk'].includes(locale)) {
   for(const [id,names] of [['stock-duration',['stock']],['cogs',['beginInventory','endInventory']],['inventory-turnover',['avgInventory']]] as const) {
    const r=await open(page,id,locale);for(const name of names)record('AUD-005',locale,r.route,name,await helpWithout(page,name,'%'));
   }
   const inventory=await open(page,'inventory-turnover',locale,{cogs:600000,mode:'beginEnd',beginInventory:100000,endInventory:200000});await primary(page,locale,4);
   for(const name of ['beginInventory','endInventory'])record('AUD-005',locale,inventory.route,`beginEnd neighbour ${name}`,await helpWithout(page,name,'%'));
   const r=await open(page,'shipping-per-unit',locale,{shipping:1500,units:100,packaging:0});await primary(page,locale,15);
   record('AUD-006',locale,r.route,'1500 / 100',{result:15,...await helpWithout(page,'shipping',/годов|річн/)});
  }
  const manual=await open(page,'currency-exchange-fee',locale);await expect(page.getByTestId('calculator-freshness')).not.toContainText(/\d{4}-\d{2}-\d{2}/);record('AUD-008',locale,manual.route,'manual formula has no bank date',{});
  for(const id of ['usd-to-mdl','eur-to-mdl','currency-converter']) {
   const r=await open(page,id,locale);const links=page.locator('a[href="https://www.bnm.md/en/content/official-exchange-rates"]');expect(await links.count()).toBeGreaterThan(0);
   record('AUD-007',locale,r.route,'BNM source card',{href:await links.first().getAttribute('href')});
   if(id==='usd-to-mdl'){await expect(page.getByTestId('calculator-freshness')).toContainText(mdlDate);record('AUD-008',locale,r.route,'actual MDL effective date',{date:mdlDate});}
   if(id==='currency-converter'&&locale==='de'){await expect(page.getByTestId('calc-swap-currencies-btn')).toHaveText('Währungen tauschen');record('AUD-018',locale,r.route,'localized visible swap control',{});}
  }
  if(locale==='uk') {
   const rm=await open(page,'one-rep-max-calculator',locale,{weight:80,reps:5});await expect(page.getByTestId('field-label-weight')).toContainText('Робоча маса снаряда');await primary(page,locale,93.3);record('AUD-004',locale,rm.route,'80 × (1+5/30)',{display:93.3,unrounded:93+1/3});
   const emp=await open(page,'employee-cost',locale,{gross:180000,taxPct:30,overhead:25000});await primary(page,locale,259000);
    expect(number(await page.getByTestId('calc-result-row-3').locator('dd').innerText(),locale)).toBe(1.4389);record('AUD-009',locale,emp.route,'259000 / 180000',{unrounded:259000/180000,display:1.4389});
  }
 });
 test(`AUD-024–025/${locale}: localized defaults, entered names and date controls`,async({page})=>{
  const r=await open(page,'bakers-percentage',locale);const water={ru:'вода',en:'water',uk:'вода',de:'Wasser',es:'agua'}[locale]!;
  await expect(page.getByTestId('field-ingredients')).toHaveValue(new RegExp(water));await primary(page,locale,856);
  expect(await page.getByTestId('calc-result').innerText()).toContain(water);record('AUD-024',locale,r.route,'authored names and unchanged percentages',{water,total:856});
  await page.getByTestId('field-ingredients').fill('My ingredient 2');await primary(page,locale,510);expect(await page.getByTestId('calc-result').innerText()).toContain('My ingredient');
  await open(page,r.id,locale,{flour:500,ingredients:'My ingredient 2'});await page.reload();await expect(page.getByTestId('field-ingredients')).toHaveValue('My ingredient 2');record('AUD-024',locale,r.route,'user name and URL reload unchanged',{});
  const d=await open(page,'working-days-calculator',locale,{startDate:'2026-10-05',endDate:'2026-10-09',includeWeekends:'no',saturdayWorking:'no',excludedDates:''});await primary(page,locale,5);
  for(const date of ['2026-10-06','2026-10-08']) {await page.getByTestId('field-excludedDates').fill(date);await page.getByTestId('excluded-date-add').click();}
  await primary(page,locale,3);await expect(page.getByTestId('excluded-date-chip')).toHaveCount(2);record('AUD-025',locale,d.route,'two individual dates',{result:3});
  await page.getByTestId('field-excludedDates').fill('2026-10-08');await page.getByTestId('excluded-date-add').click();await expect(page.getByTestId('excluded-date-chip')).toHaveCount(2);await primary(page,locale,3);record('AUD-025',locale,d.route,'duplicate',{chips:2});
  await page.getByTestId('field-excludedDates').fill('2026-11-01');await page.getByTestId('excluded-date-add').click();await primary(page,locale,3);await expect(page.getByTestId('excluded-date-chip')).toHaveCount(3);record('AUD-025',locale,d.route,'outside interval',{result:3});
  await page.getByTestId('excluded-date-remove-2026-10-06').click();await primary(page,locale,4);record('AUD-025',locale,d.route,'remove',{result:4});
  await open(page,d.id,locale,{startDate:'2026-10-05',endDate:'2026-10-09',excludedDates:'2026-02-30'});await expect(page.getByTestId('field-error-excludedDates')).toBeVisible();record('AUD-025',locale,d.route,'invalid February 30 rejected',{});
 });
 test(`AUD-011–021/${locale}: unchanged numerical models and corrected examples`,async({page})=>{
  const quartile=await open(page,'quartile',locale,{values:'1 2 3'});await expect(page.getByTestId('calc-result-primary')).toHaveText('—');record('AUD-011',locale,quartile.route,'UI keeps minimum four; independent type7 for three = 1.5/2/2.5',{UI:'rejected'});
  const energy=await open(page,'convert-energy',locale,{value:1,from:'ev',to:'j'});await primary(page,locale,1.602176634e-19,0.000001e-19);record('AUD-015',locale,energy.route,'1 eV to joule',{exact:1.602176634e-19});
  const engine=await open(page,'engine-displacement',locale,{bore:82,stroke:86,cylinders:4});await primary(page,locale,1816.67);record('AUD-019',locale,engine.route,'geometry remains pi/4 × 82² × 86 × 4 / 1000',{cm3:1816.67});
  if(locale==='uk')for(const [base,want] of [[2,-10],[0.5,10]]){
   const logarithm=await open(page,'logarithm',locale,{mode:'custom',value:0.0009765625,base});await primary(page,locale,want);record('AUD-012',locale,logarithm.route,`positive x=2^-10, base ${base}`,{want});
   await page.getByTestId('field-value').fill('0');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');record('AUD-012',locale,logarithm.route,`zero undefined, base ${base}`,{});
  }
  const slope=await open(page,'slope',locale,{rise:-1,run:-1});await primary(page,locale,100);expect(number(await page.getByTestId('calc-result-row-0').locator('dd').innerText(),locale)).toBe(45);record('AUD-016',locale,slope.route,'two negative inputs',{percent:100,angle:45});
  const sample=await open(page,'sample-size',locale,{confidence:95,margin:5,proportion:50,population:0});await primary(page,locale,385);record('AUD-021',locale,sample.route,'normal one-proportion model',{sample:385});
  for(const [species,want] of [['cat',36],['dog-small',36],['dog-large',45]] as const){const pet=await open(page,'pet-age',locale,{years:5,species});await primary(page,locale,want);record('AUD-020',locale,pet.route,species,{want});}
  const sound=await open(page,'speed-of-sound',locale,{t:20});await primary(page,locale,343.21);expect(number(await page.getByTestId('calc-result-row-0').locator('dd').innerText(),locale)).toBe(1235.57);record('AUD-013',locale,sound.route,'20 Celsius',{mps:343.21,kph:1235.57});
  if(['de','es'].includes(locale)){const inf=await open(page,'inflation',locale,{amount:10000,ratePct:8,years:10});await primary(page,locale,4631.93);expect(await page.locator('body').innerText()).toContain('4631,93');record('AUD-014',locale,inf.route,'10000 / 1.08^10',{rounded:4631.93});}
 });
}
test('AUD-017: all sixteen historical URL/count states; distinct 404 aliases use the same asset',async({page})=>{
 test.setTimeout(180_000);
 const ledger=JSON.parse(readFileSync(new URL('AUDIT_FINDINGS_RESOLUTION.json',root),'utf8'));
 const finding=ledger.find((r:{id:string})=>r.id==='AUD-017');
 const esIds=['credit-card-payoff','debt-snowball-avalanche','ltv','payback-period'];
 for(const url of finding.observed_urls as string[]) {
  const path=new URL(url).pathname,locale=path.split('/')[1];
  if(locale==='es') {
   const r=fixture.rows.find(r=>r.locale==='es'&&r.route===path)!;expect(esIds).toContain(r.id);await open(page,r.id,'es',Object.fromEntries(new URLSearchParams(r.scenario.query)));
   const body=await page.getByTestId('calc-result').innerText();expect(body).toMatch(/(?:18(?:,00)?|26|40) meses/);expect(body).not.toMatch(/\b(?:18(?:,00)?|26|40) mes\b/);record('AUD-017',locale,path,'month result uses meses',{body});
  }else {
   const asset=path.startsWith('/uk/404')?'/uk/404.html':path;
   expect((await page.goto(asset,{waitUntil:'domcontentloaded'}))?.status()).toBe(200);
   await expect.poll(()=>page.evaluate(()=>[...document.querySelectorAll('astro-island')].every(e=>!e.hasAttribute('ssr')))).toBe(true);
   const body=(await page.locator('body').innerText()).toLowerCase().replace(/\s+/g,' ');
   const counts=[...body.matchAll(/(\d+) (инструмент(?:ов|а)?|інструмент(?:и|ів)?)/g)];expect(counts.length).toBeGreaterThan(0);
   for(const [_,digits,word] of counts){const n=Number(digits),last=n%10,teen=n%100>=11&&n%100<=14;
    const expected=locale==='ru'?(!teen&&last===1?'инструмент':!teen&&last>=2&&last<=4?'инструмента':'инструментов'):(!teen&&last===1?'інструмент':!teen&&last>=2&&last<=4?'інструменти':'інструментів');expect(word).toBe(expected);
   }
   record('AUD-017',locale,path,'all actual category/catalog/404 count forms',{local_asset:asset,counts:counts.map(x=>x[0])});
  }
 }
});
for(let offset=0;offset<pluralPlan.length;offset+=8){const group=pluralPlan.slice(offset,offset+8);
 test(`AUD-017/shared-category-group-${offset/8+1}: all changed RU/UK category counters`,async({page})=>{
  for(const item of group){expect((await page.goto(item.route,{waitUntil:'domcontentloaded'}))?.status()).toBe(200);
   const hero=page.locator('section[data-testid^="category-page-"]');await expect(hero).toBeVisible();
   const counts=[...(await hero.innerText()).toLowerCase().replace(/\s+/g,' ').matchAll(/(\d+) (инструмент(?:ов|а)?|інструмент(?:и|ів)?)/g)];expect(counts).toHaveLength(2);
   for(const [_,digits,word] of counts){const n=Number(digits),last=n%10,teen=n%100>=11&&n%100<=14;
    expect(word).toBe(item.locale==='ru'?(!teen&&last===1?'инструмент':!teen&&last>=2&&last<=4?'инструмента':'инструментов'):(!teen&&last===1?'інструмент':!teen&&last>=2&&last<=4?'інструменти':'інструментів'));
   }
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);record('AUD-017',item.locale,item.route,'both header and metadata counter; no horizontal overflow',{counts:counts.map(x=>x[0])});
  }
 });
}
for(let offset=0;offset<dialogPlan.length;offset+=12){const group=dialogPlan.slice(offset,offset+12);
 test(`AUD-018/dialog-group-${offset/12+1}: ${group.length} actually opened DE/ES warnings`,async({page})=>{
  test.setTimeout(180_000);
  for(const item of group){const r=await open(page,item.engine_id,item.locale);await page.getByTestId('calc-share-btn').click();const warning=page.getByTestId('calc-share-warning');await expect(warning).toBeVisible();
   const body=await warning.innerText();expect(body).not.toMatch(/Your inputs|Include the current|\bCancel\b|Copy link|sensitive inputs/i);
   await expect(page.getByTestId('calc-share-cancel')).toHaveText(item.locale==='de'?'Abbrechen':'Cancelar');
   record('AUD-018',item.locale,r.route,'actual warning opened',{body,confirmed:false});await page.getByTestId('calc-share-cancel').click();await expect(warning).toHaveCount(0);
  }
 });
}
