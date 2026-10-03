import { expect, test, type Page } from '@playwright/test';
import { getCalculatorById } from '../src/lib/i18n';
import { getMathWave6MethodSources } from '../src/data/mathWave6MethodSources';
// Expected literals are analytic fixtures: signed arithmetic/geometric sums,
// exact recurrence, integer factorization, binomial coefficients and cross-products.
// Compute functions are never called to construct a browser expectation.
const locales=['ru','en','uk','de','es'] as const;
type Locale=typeof locales[number];
// The share action writes to the clipboard; it does not change the current URL.
// Capture that browser boundary locally and prevent external telemetry during QA.
test.beforeEach(async({page})=>{
 await page.route('**/*',route=>{
  const url=new URL(route.request().url());
  return ['127.0.0.1','localhost'].includes(url.hostname)||url.protocol==='data:'?route.continue():route.abort();
 });
 await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as {math6CopiedLink:string}).math6CopiedLink=text;}}}));
});
const copiedLink=async(page:Page)=>{
 await page.evaluate(()=>(window as unknown as {math6CopiedLink:string}).math6CopiedLink='');
 await page.getByTestId('calc-share-btn').click();
 await expect.poll(()=>page.evaluate(()=>(window as unknown as {math6CopiedLink?:string}).math6CopiedLink??'')).not.toBe('');
 const url=new URL(await page.evaluate(()=>(window as unknown as {math6CopiedLink:string}).math6CopiedLink));
 expect(url.origin).toBe(new URL(page.url()).origin);expect(url.pathname).toBe(new URL(page.url()).pathname);expect(url.hash).toBe('#calculator');
 return url;
};
const samples=[
 {id:'arithmetic-progression',input:{a1:100,d:-7,n:15},expected:'2',field:'n',kind:'integer'},
 {id:'geometric-progression',input:{a1:-2,r:.5,n:3},expected:'-0,5',english:'-0.5',field:'n',kind:'text'},
 {id:'fibonacci',input:{n:78},expected:'5527939700884757',field:'n',kind:'integer'},
 {id:'divisors',input:{n:36},expected:'1,2,3,4,6,9,12,18,36',field:'n',kind:'text'},
 {id:'prime-factorization',input:{n:360},expected:'360=2³·3²·5',field:'n',kind:'text'},
 {id:'combinatorics',input:{n:60,k:30,mode:'combinations',repetition:'no'},expected:'118264581564861424',field:'n',kind:'integer'},
 {id:'ratio',input:{parts:'1,5:2,5',total:80},expected:'1,5:2,5',english:'1.5:2.5',field:'parts',kind:'text'},
 {id:'proportion',input:{find:'c',a:4,b:6,d:21,c:'ignored'},expected:'14',field:'a',kind:'integer'},
] as const;
const query=(values:Record<string,string|number>)=>new URLSearchParams(Object.entries(values).map(([k,v])=>[k,String(v)])).toString();
const path=(id:string,locale:Locale,input:Record<string,string|number>)=>getCalculatorById(id,locale)!.fullPath+'?'+query(input);
const primary=async(page:Page,expected:string,integer=false)=>{
 await expect(page.getByTestId('calc-result-primary')).toBeVisible();
 await expect.poll(async()=>{const value=(await page.getByTestId('calc-result-primary').innerText()).replace(/\s/g,'');return integer?value.replace(/,/g,''):value;}).toBe(expected);
};
for(const locale of locales)for(const sample of samples)for(const width of [390,1365])test(`math6 ${sample.id}/${locale}/${width} independent number native page share reload`,async({page})=>{
 await page.setViewportSize({width,height:900});
 await page.goto(path(sample.id,locale,sample.input));
 const expected=locale==='en'&&'english'in sample?sample.english:sample.expected;
 await primary(page,expected,sample.kind==='integer');
 await expect(page.locator('html')).toHaveAttribute('lang',locale);
 await expect(page.locator('h1')).toHaveText(getCalculatorById(sample.id,locale)!.h1);
 for(const source of getMathWave6MethodSources(sample.id,locale))await expect(page.locator(`a[href="${source.href}"]`).first()).toBeVisible();
 if(sample.id==='proportion')await expect(page.getByTestId('field-c')).toHaveCount(0);
 const foreign=locale==='uk'?/[ЁёЫыЭэЪъ]/:/[А-Яа-яЁё]/;
 if(locale!=='ru')expect((await page.getByTestId('calc-result-wrap').allTextContents()).join(' ')).not.toMatch(foreign);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 const shared=await copiedLink(page);
 // A copied link omits values equal to the calculator's actual defaults.
 const primaryField=getCalculatorById(sample.id,locale)!.fields.find(field=>field.name===sample.field)!;
 if(sample.input[sample.field]===primaryField.defaultValue)expect(shared.searchParams.has(sample.field)).toBe(false);
 else expect(shared.searchParams.get(sample.field)).toBe(String(sample.input[sample.field]));
 if(sample.id==='proportion')expect(shared.searchParams.has('c')).toBe(false);
 // Default-valued fields are deliberately absent from the copied URL.
 for(const field of getCalculatorById(sample.id,locale)!.fields){
  const input=(sample.input as Record<string,string|number>)[field.name];
  if(input===field.defaultValue)expect(shared.searchParams.has(field.name)).toBe(false);
 }
 await page.goto(shared.href);await primary(page,expected,sample.kind==='integer');
 await page.reload();await primary(page,expected,sample.kind==='integer');
});
for(const locale of locales)for(const sample of samples)test(`math6 ${sample.id}/${locale} invalid active data cannot return a plausible number`,async({page})=>{
 const changes=sample.id==='ratio'?{parts:'2:0'}:sample.id==='proportion'?{b:0}:{n:0};
 await page.goto(path(sample.id,locale,{...sample.input,...changes}));
 if(['arithmetic-progression','geometric-progression','fibonacci','divisors','prime-factorization'].includes(sample.id)){
  await expect(page.getByTestId('field-error-n')).toBeVisible();
  await expect(page.getByTestId('field-n')).toHaveAttribute('aria-invalid','true');
  await expect(page.getByTestId('calc-result')).toHaveCount(0);
 }else await expect(page.getByTestId('calc-result-primary')).toHaveText('—');
 const text=(await page.getByTestId('calc-result-wrap').allTextContents()).join(' ');expect(text).not.toMatch(/NaN|Infinity/);
 await page.goto(path(sample.id,locale,sample.input));await primary(page,locale==='en'&&'english'in sample?sample.english:sample.expected,sample.kind==='integer');
});
const integers=['arithmetic-progression','geometric-progression','fibonacci','divisors','prime-factorization','combinatorics'];
for(const locale of locales)for(const id of integers)test(`math6 ${id}/${locale} original decimal and scientific whole-count lexemes`,async({page})=>{
 const sample=samples.find(x=>x.id===id)!;
 await page.goto(path(id,locale,{...sample.input,n:'3.00000000000000001'}));
 await expect(page.getByTestId('field-error-n')).toBeVisible();
 await expect(page.getByTestId('field-n')).toHaveAttribute('aria-invalid','true');
 // Scientific URL values are normalized by the URL boundary; scientific
 // text is deliberately outside the locale grammar of a directly typed field.
 await page.goto(path(id,locale,{...sample.input,n:'3.00000000000000001e0'}));
 await expect(page.getByTestId('field-error-n')).toBeVisible();
 await expect(page.getByTestId('field-n')).toHaveAttribute('aria-invalid','true');
 await page.getByTestId('field-n').fill('3.0000');await expect(page.getByTestId('field-error-n')).toHaveCount(0);
 if(id==='combinatorics')await page.getByTestId('field-k').fill('2');
 await expect(page.getByTestId('calc-result-primary')).not.toHaveText('—');
 if(id==='combinatorics')await primary(page,'3',true);
 const shared=await copiedLink(page);expect(shared.searchParams.get('n')).toBe('3');
 await page.goto(shared.href);await expect(page.getByTestId('field-n')).toHaveValue('3');
 await page.reload();await expect(page.getByTestId('field-n')).toHaveValue('3');
 if(id==='combinatorics')await primary(page,'3',true);
 await page.goto(path(id,locale,{...sample.input,n:'3.000e0',...(id==='combinatorics'?{k:2}:{})}));
 await expect(page.getByTestId('field-n')).toHaveValue('3');await expect(page.getByTestId('field-error-n')).toHaveCount(0);
 await expect(page.getByTestId('calc-result-primary')).not.toHaveText('—');
 if(id==='combinatorics')await primary(page,'3',true);
});
for(const locale of locales)for(const [mode,repetition,expected] of [['combinations','no','10'],['permutations','no','20'],['combinations','yes','15'],['permutations','yes','25']] as const)test(`math6 counting ${locale}/${mode}/${repetition} independently chosen five choose two`,async({page})=>{
 await page.goto(path('combinatorics',locale,{mode,repetition,n:5,k:2}));await primary(page,expected,true);
});
for(const locale of locales)for(const find of ['a','b','c','d'])test(`math6 proportion ${locale}/${find} hidden unknown and fixed cross-product`,async({page})=>{
 const all={a:2,b:3,c:4,d:6};const expected=String(all[find as keyof typeof all]);
 await page.goto(path('proportion',locale,{find,...all,[find]:'malformed ignored'}));await primary(page,expected,true);
 await expect(page.getByTestId('field-'+find)).toHaveCount(0);
 const shared=await copiedLink(page);expect(shared.searchParams.has(find)).toBe(false);
 await page.goto(shared.href);await primary(page,expected,true);
 await page.reload();await primary(page,expected,true);
});
