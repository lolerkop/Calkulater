import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {readFileSync,mkdirSync,writeFileSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {fixture,hydrated,checkDocument,documentSnapshot,normalize} from './helpers/calculatorRouteSmoke';
const sample=JSON.parse(readFileSync(new URL('./fixtures/targeted-finish-sample.json',import.meta.url),'utf8'))as {route:string;id:string;locale:string}[];
const evidence=resolve(process.env.CALCUWAY_EVIDENCE_DIR || 'reports/targeted-finish-2026-10-03');
const contactEmail=process.env.PUBLIC_CONTACT_EMAIL || '';
const privacyEmail=process.env.PUBLIC_PRIVACY_EMAIL || contactEmail;
const rowFor=(id:string,locale:string)=>fixture.rows.find(r=>r.id===id&&r.locale===locale)!;
test.beforeEach(async({page})=>{
 await page.context().route('**/*',route=>{const u=route.request().url();return /^(?:data:|blob:)/.test(u)||new URL(u).hostname==='127.0.0.1'?route.continue():route.abort();});
});
for(const width of [390,1365])for(const chosen of sample){
 test(`previous-sample/${width}${chosen.route}`,async({page},info)=>{
  await page.setViewportSize({width,height:950});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  const row=fixture.rows.find(r=>r.route===chosen.route);
  const response=await page.goto(chosen.route+(row?`?${row.scenario.query}`:''),{waitUntil:'domcontentloaded',timeout:25_000});expect(response?.status()).toBe(200);
  if(row){
   await hydrated(page,row);await checkDocument(page,row);
   // This resamples the shared fallback cause without auditing new models.
   const help=await page.evaluate(()=>Array.from(document.querySelectorAll('[data-testid^="field-"]')).filter(e=>e.tagName==='SELECT'||e.querySelector('button[data-testid*="-opt-"]')).map(e=>({name:e.getAttribute('data-testid')?.slice(6),text:document.getElementById(`f-${e.getAttribute('data-testid')?.slice(6)}-help`)?.textContent??''})));
   const inappropriate=help.filter(h=>!row.fields.find(f=>f.source.name===h.name)?.dynamic.help&&/целое значение|integer value|ціле значення|ganze Zahl|valor entero/i.test(h.text));expect(inappropriate).toEqual([]);
   const dom=await documentSnapshot(page);await info.attach('sample-single-copy',{body:JSON.stringify({route:row.route,width,tipsParagraphs:dom.tipCount,methodReference:dom.methodReference,independentLimit:dom.sourceDefinitions.at(-1),inappropriateChoiceHelp:inappropriate}),contentType:'application/json'});
  }else{await expect(page.locator('h1')).toHaveCount(1);expect(await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth+1)).toBe(false);}
  expect(errors).toEqual([]);
 });
}
for(const locale of ['ru','en','uk','de','es']){
 test(`privacy-and-contacts/${locale}`,async({page})=>{
  const missing={ru:'Отдельный приватный email пока не настроен',en:'A separate private email is not configured yet',uk:'Окремий приватний email ще не налаштовано',de:'Eine separate private E-Mail-Adresse ist noch nicht eingerichtet',es:'Todavía no se ha configurado un correo privado independiente'};
  await page.goto(`/${locale}/privacy/`);
  if(privacyEmail){
   await expect(page.getByTestId('privacy-contact')).toHaveText(privacyEmail);
   await expect(page.getByTestId('privacy-contact')).toHaveAttribute('href',`mailto:${privacyEmail}`);
   await expect(page.getByTestId('privacy-section-contact')).not.toContainText(missing[locale as keyof typeof missing]);
  }else{
   await expect(page.getByTestId('privacy-contact')).toHaveCount(0);
   await expect(page.getByTestId('privacy-section-contact')).toContainText(missing[locale as keyof typeof missing]);
  }
  await expect(page.getByTestId('privacy-section-contact')).toContainText('GitHub');
  await expect(page.getByTestId('privacy-infrastructure-analytics')).toContainText('Cloudflare Web Analytics');
  await expect(page.getByTestId('privacy-section-processors')).toContainText('Cloudflare');
  expect(await page.locator('a[href^="mailto:"]').count()).toBe(privacyEmail?1:0);
  await page.goto(`/${locale}/contacts/`);expect(await page.locator('a[href^="mailto:"]').count()).toBe(Number(Boolean(contactEmail))+Number(Boolean(privacyEmail)));
  if(contactEmail){
   await expect(page.getByTestId('contact-channel')).toHaveText(contactEmail);
   await expect(page.getByTestId('contact-channel')).toHaveAttribute('href',`mailto:${contactEmail}`);
  }else await expect(page.locator('main a[href^="https://github.com/"]')).toHaveCount(1);
  if(privacyEmail){
   await expect(page.getByTestId('privacy-contact-channel')).toHaveAttribute('href',`mailto:${privacyEmail}`);
   await expect(page.getByTestId('privacy-contact-unavailable')).toHaveCount(0);
  }else{
   const absent={ru:'Отдельный приватный email пока не настроен',en:'A private privacy email is not configured yet',uk:'Окрему приватну email-адресу ще не налаштовано',de:'Eine private E-Mail-Adresse für Datenschutzanfragen ist noch nicht eingerichtet',es:'Todavía no hay una dirección de correo específica para privacidad'};expect(await page.locator('main').innerText()).toContain(absent[locale as keyof typeof absent]);
  }
 });
 test(`divisors-large-fixed-reference/${locale}`,async({page})=>{
  const row=rowFor('divisors',locale);await page.goto(row.route+'?n=720720');
  await expect(page.getByTestId(`calculator-island-${row.id}`)).toBeVisible({timeout:15_000});
  await expect.poll(()=>page.locator('astro-island:has([data-testid="calculator-island-divisors"])').getAttribute('ssr'),{timeout:20_000}).toBe(null);
  const text=normalize(await page.getByTestId('calc-result-primary').innerText());
  const first40='1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22, 24, 26, 28, 30, 33, 35, 36, 39, 40, 42, 44, 45, 48, 52, 55, 56, 60, 63, 65, 66';
  expect(text.split('…')[0].trim()).toBe(first40);expect(text.split('…')[1]).toContain('200');
  const values=await page.locator('[data-testid^="calc-result-row-"] dd').allTextContents();
  expect(values.slice(0,3).map(v=>v.replace(/\D/g,''))).toEqual(['240','3249792','2529072']);
  await expect(page.getByTestId('calculator-how-to-use')).toContainText('40');
  await expect(page.getByTestId('calculator-how-to-use').locator(':scope > p')).toHaveCount(0);
 });
 test(`discount-native-currency/${locale}`,async({page})=>{
  const row=rowFor('discount-calculator',locale);await page.goto(row.route+'?'+row.scenario.query);await hydrated(page,row);await checkDocument(page,row);
  if(locale==='es'){
   const faq=page.getByTestId('calculator-faq').locator('details').last();await faq.locator('summary').click();await expect(faq).toContainText('euros');await expect(faq).not.toContainText(/rublo/i);
   await expect(page.getByTestId('field-label-price')).toContainText('€');await expect(page.getByTestId('calc-result-primary')).toContainText('€');
  }
 });
}
test('fractional-credit-years-remain-supported',async({page})=>{
 await page.goto(rowFor('credit-calculator','ru').route+'?amount=1800&term=1.5&termUnit=years&rate=0&type=annuity');
 await expect(page.getByTestId('calc-result-primary')).toHaveText('100 ₽',{timeout:10_000});
 const values=await page.locator('[data-testid^="calc-result-row-"] dd').allTextContents();expect(values).toContain('18 мес.');
 await expect(page.locator('#f-term-help')).toContainText('1,5');await expect(page.locator('#f-termUnit-help')).toHaveCount(0);
 await expect(page.getByTestId('field-term')).toHaveValue('1.5');await expect(page.getByTestId('calc-result-invalid')).toHaveCount(0);
});
test('paint-help-preserves-the-real-integer-constraint',async({page})=>{
 const row=rowFor('paint-calculator','de');await page.goto(row.route+'?'+row.scenario.query);await hydrated(page,row);await checkDocument(page,row);
 await expect(page.locator('#f-coats-help')).toContainText('positive ganze');await expect(page.locator('#f-coats-help')).not.toContainText('9007199254740991');
 // This existing UI uses text inputs and validates the source Field limits;
 // max/step HTML attributes are not its constraint mechanism.
 for(const value of ['0','1.5','9007199254740992']){await page.getByTestId('field-coats').fill(value);await expect(page.getByTestId('field-error-coats')).toBeVisible();}
 await page.getByTestId('field-coats').fill('2');await expect(page.getByTestId('field-error-coats')).toHaveCount(0);
});
const visuals=[
 {name:'01-ru-credit-term-mobile',id:'credit-calculator',locale:'ru',width:390,selector:'[data-testid="field-term"]'},
 {name:'02-de-paint-coats-desktop',id:'paint-calculator',locale:'de',width:1365,selector:'[data-testid="field-coats"]'},
 {name:'03-es-discount-faq-mobile',id:'discount-calculator',locale:'es',width:390,selector:'[data-testid="calculator-faq"]'},
 {name:'04-ru-divisors-instruction-desktop',id:'divisors',locale:'ru',width:1365,selector:'[data-testid="calculator-how-to-use"]'},
 {name:'05-en-vo2-source-mobile',id:'vo2max',locale:'en',width:390,selector:'[data-testid="calculator-source-review"]'},
 {name:'06-ru-privacy-contact-desktop',id:'',locale:'ru',width:1365,selector:'[data-testid="privacy-section-contact"]'},
];
for(const item of visuals)test(`changed-block-a11y-and-capture/${item.name}`,async({page},info)=>{
 await page.setViewportSize({width:item.width,height:950});const row=item.id?rowFor(item.id,item.locale):null;
 await page.goto(row?row.route+'?'+row.scenario.query:'/ru/privacy/');if(row)await hydrated(page,row);
 if(item.id==='discount-calculator')await page.getByTestId('calculator-faq').locator('details').last().locator('summary').click();
 const include=row?['[data-testid="calculator-how-to-use"]','[data-testid="calculator-source-review"]','[data-testid="calculator-fields"]',item.selector]:[item.selector];
 let builder=new AxeBuilder({page});for(const selector of include)builder=builder.include(selector);
 const results=await builder.withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 await info.attach('changed-block-accessibility',{body:JSON.stringify({route:row?.route??'/ru/privacy/',width:item.width,violations:results.violations,passes:results.passes.length}),contentType:'application/json'});expect(results.violations).toEqual([]);
 const region=page.locator(item.selector);await region.evaluate(e=>e.scrollIntoView({block:'center'}));
 mkdirSync(join(evidence,'screenshots'),{recursive:true});await page.screenshot({path:join(evidence,'screenshots',item.name+'.png')});
 writeFileSync(join(evidence,'screenshots',item.name+'.json'),JSON.stringify({route:row?.route??'/ru/privacy/',width:item.width,selector:item.selector,a11yViolations:results.violations.length,a11yPasses:results.passes.length},null,2));
});
