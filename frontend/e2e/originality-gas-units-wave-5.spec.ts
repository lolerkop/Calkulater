import { expect, test } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';
import { selectedUnitConverterIds } from '../src/lib/converterFieldUnits';

function numeric(text:string,locale:string){const token=text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];if(!token)return NaN;const value=token.replace(/[\s\u00a0\u202f]/g,'').replace('−','-');return Number(locale==='en'?value.replaceAll(',',''):value.replaceAll('.','').replace(',','.'));}
const cases=[
 {id:'gas-laws',input:{mode:'p2',p1:100,v1:2,t1:300,v2:1,t2:300},expected:200,invalid:{p1:0}},
 {id:'ideal-gas-law',input:{solve:'p',n:2,tempUnit:'k',t:300,volumeUnit:'m3',v:0.05,pressureUnit:'pa'},expected:99773.55,invalid:{t:-1}},
]as const;

for(const locale of locales)for(const sample of cases){
 const calculator=getCalculatorById(sample.id,locale)!;
 for(const key of Object.keys(sample.input))if(!calculator.fields.some(f=>f.name===key))throw new Error(`${sample.id}: fixture key ${key}`);
 test(`${locale} ${sample.id}: independent gas example, method and query reload`,async({page})=>{
  const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  const query=new URLSearchParams(Object.entries(sample.input).map(([k,v])=>[k,String(v)]));
  await page.goto(`${calculator.fullPath}?${query}`);
  const primary=page.getByTestId('calc-result-primary');
  await expect.poll(async()=>numeric(await primary.innerText(),locale)).toBeCloseTo(sample.expected,2);
  await expect(page.locator('main')).toContainText(calculator.seoContent!.example);
  await expect(page.locator('main')).toContainText(calculator.seoContent!.howItWorks);
  await page.reload();await expect.poll(async()=>numeric(await primary.innerText(),locale)).toBeCloseTo(sample.expected,2);
  expect(errors).toEqual([]);
 });
 test(`${locale} ${sample.id}: meaningful domain error has native feedback`,async({page})=>{
  const query=new URLSearchParams(Object.entries({...sample.input,...sample.invalid}).map(([k,v])=>[k,String(v)]));
  await page.goto(`${calculator.fullPath}?${query}`);
  await expect.poll(async()=>await page.locator('[data-testid^="field-error-"]:visible').count()>0||(await page.getByTestId('calc-result-primary').allTextContents()).some(x=>x.trim()==='—')).toBe(true);
  if(['en','de','es'].includes(locale))await expect(page.getByTestId('calc-result')).not.toContainText(/[А-Яа-яЁё]/);
 });
}

for(const locale of locales)for(const[mode,unknown,expected]of[['p2','p2',200],['v2','v2',2],['t2','t2',150]]as const){
 test(`${locale} gas-laws ${mode}: known fields, units and ignored saved unknown match arithmetic`,async({page})=>{
  const calculator=getCalculatorById('gas-laws',locale)!;
  const query=new URLSearchParams({mode,p1:'100',v1:'2',t1:'300',p2:'100',v2:'1',t2:'300',[unknown]:'invalid'});
  await page.goto(`${calculator.fullPath}?${query}`);
  await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(expected);
  await expect(page.locator(`#f-${unknown}`)).toHaveCount(0);
  for(const name of ['p1','v1','t1','p2','v2','t2'].filter(x=>x!==unknown)){
   await expect(page.locator(`#f-${name}`)).toBeVisible();
   await expect(page.getByTestId(`field-label-${name}`)).toContainText(name.startsWith('p')?'kPa':name.startsWith('v')?'L':'K');
  }
 });
}

for(const locale of locales){
 test(`${locale} ideal gas: Celsius and litre/atmosphere selections show actual units`,async({page})=>{
  const calculator=getCalculatorById('ideal-gas-law',locale)!;
  await page.goto(`${calculator.fullPath}?solve=v&n=1&tempUnit=c&t=0&volumeUnit=l&pressureUnit=atm&p=1`);
  await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(22.414);
  await expect(page.getByTestId('field-label-t')).toContainText('(°C)');
  await expect(page.getByTestId('field-label-p')).toContainText('(atm)');
  await expect(page.locator('#f-v')).toHaveCount(0);
  await page.locator('#f-tempUnit').selectOption('k');await page.locator('#f-t').fill('273.15');
  await expect(page.getByTestId('field-label-t')).toContainText('(K)');
  await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(22.414);
 });
 test(`${locale} ideal gas: formal0K result is explicitly described`,async({page})=>{
  const calculator=getCalculatorById('ideal-gas-law',locale)!;
  await page.goto(`${calculator.fullPath}?solve=p&n=2&tempUnit=k&t=0&volumeUnit=m3&v=0.05&pressureUnit=pa`);
  await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(0);
  await expect(page.getByTestId('calc-result')).toContainText('0 K');
  if(['en','de','es'].includes(locale))await expect(page.getByTestId('calc-result')).not.toContainText(/[А-Яа-яЁё]/);
 });
 for(const[mode,unknown,expected]of[['vi','resistance',4],['vr','current',3],['ir','voltage',12]]as const)test(`${locale} Ohm ${mode}: computed quantity is hidden and saved stale value ignored`,async({page})=>{
  const calculator=getCalculatorById('ohms-law',locale)!;
  const query=new URLSearchParams({mode,voltage:'12',current:'3',resistance:'4',[unknown]:'invalid'});
  await page.goto(`${calculator.fullPath}?${query}`);
  await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(expected);
  await expect(page.locator(`#f-${unknown}`)).toHaveCount(0);
  await page.reload();await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(expected);
 });
}

// This checks actual source-unit labels in110 native hydrated forms. Identity
// conversions use the independent invariant1unit→1sameunit; the numerical
// definitions and143 legacy examples have separate subject tests.
for(const id of selectedUnitConverterIds)for(const locale of locales)test(`${locale} ${id}: selected source unit is accessible, updates and survives query reload`,async({page})=>{
 const calculator=getCalculatorById(id,locale)!;
 const sourceName=id==='convert-fuel-economy'?'fromUnit':'from',targetName=id==='convert-fuel-economy'?'toUnit':'to';
 const source=calculator.fields.find(f=>f.name===sourceName)!;
 const first=source.options![0],last=source.options!.at(-1)!;
 const query=new URLSearchParams({[sourceName]:first.value,[targetName]:first.value,value:'1'});
 await page.setViewportSize({width:390,height:900});await page.goto(`${calculator.fullPath}?${query}`);
 const value=page.locator('#f-value'),help=page.locator('#f-value-help');
 await expect(value).toHaveAttribute('aria-describedby',/f-value-help/);await expect(help).toContainText(first.label);
 await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(1);
 await page.locator(`#f-${sourceName}`).selectOption(last.value);await page.locator(`#f-${targetName}`).selectOption(last.value);
 await expect(help).toContainText(last.label);await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(1);
 await page.goto(`${calculator.fullPath}?${new URLSearchParams({[sourceName]:last.value,[targetName]:last.value,value:'1'})}`);
 await page.reload();await expect(help).toContainText(last.label);
 await expect.poll(async()=>numeric(await page.getByTestId('calc-result-primary').innerText(),locale)).toBe(1);
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);expect(overflow).toBe(false);
});
