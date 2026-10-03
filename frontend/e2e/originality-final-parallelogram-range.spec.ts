import {test,expect,type Page,type Locator} from '@playwright/test';
const routes={ru:'/ru/geometry/parallelogram/',en:'/en/geometry/parallelogram-calculator/',uk:'/uk/heometriya/paralelohram/',de:'/de/geometrie/parallelogramm-rechner/',es:'/es/geometria/calculadora-de-paralelogramo/'};
// Literal rounded controls from independent exact-binary Decimal2500 geometry,
// kept here without importing the tested compute or current result snapshots.
const samples=[
 {a:'1',b:'1e300',angle:'5e-324',area:8.623072240921982e-26,rows:[2e300,8.623072240921982e-26,1e300,1e300]},
 {a:'1e150',b:'1e150',angle:'5e-324',area:8.623072240921981e-26,rows:[4e150,8.623072240921982e-176,2e150,8.623072240921982e-176]},
];
function number(text:string,locale:string){const clean=text.replace(/[\s\u00a0\u202f]/g,'');const native=locale==='en'?clean.replaceAll(',',''):clean.replace(',','.');const token=native.match(/^[+-]?\d+(?:\.\d+)?(?:·10\^[+-]?\d+)?/)?.[0];return token?Number(token.replace('·10^','e')):NaN;}
async function close(loc:Locator,locale:string,expected:number){await expect.poll(async()=>{const actual=number(await loc.innerText(),locale);return Number.isFinite(actual)&&actual>0?Math.abs(actual/expected-1):Infinity;}).toBeLessThan(.0006);}
async function check(page:Page,locale:string,sample:typeof samples[number]){
 await close(page.getByTestId('calc-result-primary'),locale,sample.area);
 await expect(page.getByTestId('calc-result-primary')).toContainText(locale==='en'?'8.623·10^-26':'8,623·10^-26');
 await expect(page.getByTestId('calc-result-primary')).toContainText(locale==='ru'||locale==='uk'?'м²':'m²');
 await expect(page.getByTestId('field-angle')).toHaveValue('5e-324');await expect(page.getByTestId('field-unit')).toHaveValue('m');await expect(page.getByTestId('field-mode')).toHaveValue('sides');await expect(page.getByTestId('field-h')).toHaveCount(0);
 for(const[i,expected]of sample.rows.entries())await close(page.getByTestId(`calc-result-row-${i}`).locator('dd'),locale,expected);
 await expect(page.locator('[data-testid^="field-error-"]')).toHaveCount(0);await expect(page.getByTestId('calc-result-invalid')).toHaveCount(0);await expect(page.getByTestId('calc-result')).not.toContainText(/NaN|Infinity|undefined|\[object Object\]/);
 for(const name of ['a','b'])await expect(page.getByTestId(`field-label-${name}`)).toContainText(locale==='ru'||locale==='uk'?'(м)':'(m)');await expect(page.getByTestId('field-label-angle')).toContainText('(°)');
}
for(const[locale,path]of Object.entries(routes))for(const width of[390,1365])test(`parallelogram/${locale}/${width}: scaled MIN angle survives both unequal/equal models and share/reload`,async({page})=>{
 await page.setViewportSize({width,height:950});await page.context().route('**/*',route=>{const url=route.request().url();if(/^(?:data:|blob:)/.test(url)||['localhost','127.0.0.1','::1','[::1]'].includes(new URL(url).hostname))return route.continue();return route.abort();});
 await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as Window&{parallelogramShare?:string}).parallelogramShare=text;}}}));
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 for(const sample of samples){
  const q=new URLSearchParams({unit:'m',mode:'sides',a:sample.a,b:sample.b,angle:sample.angle});const response=await page.goto(`${path}?${q}`);expect(response?.status()).toBe(200);
  const island=page.getByTestId('calculator-island-geom-parallelogram');await expect(island).toBeVisible();await expect.poll(()=>island.locator('xpath=ancestor::astro-island[1]').getAttribute('ssr')).toBe(null);await check(page,locale,sample);
  await page.reload();await check(page,locale,sample);
  await page.evaluate(()=>{(window as Window&{parallelogramShare?:string}).parallelogramShare='';});await page.getByTestId('calc-share-btn').click();await expect.poll(()=>page.evaluate(()=>(window as Window&{parallelogramShare?:string}).parallelogramShare??'')).not.toBe('');
  const shared=await page.evaluate(()=>(window as Window&{parallelogramShare?:string}).parallelogramShare!);expect(new URL(shared).pathname).toBe(path);expect(Number(new URL(shared).searchParams.get('angle'))).toBe(Number.MIN_VALUE);expect(new URL(shared).searchParams.has('h')).toBe(false);await page.goto(shared);await check(page,locale,sample);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
 }
 // Existing ordinary branch remains the same40/36 case after tiny input recovery.
 await page.goto(`${path}?unit=m&mode=sides&a=10&b=8&angle=30`);await expect(page.getByTestId('calc-result-primary')).toHaveText(locale==='ru'||locale==='uk'?'40 м²':'40 m²');await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(locale==='ru'||locale==='uk'?'36 м':'36 m');expect(errors).toEqual([]);
});
