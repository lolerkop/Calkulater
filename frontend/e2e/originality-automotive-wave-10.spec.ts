import {test,expect,type Page,type Locator} from '@playwright/test';
import fixtures from '../reports/originality-automotive-wave-10-browser-fixtures.json' with {type:'json'};
import {getAutomotiveWave10MethodSources} from '../src/data/automotiveWave10MethodSources';
// Independent literal numbers; no tested compute, registry or result builder imports.
// Await a coherent ROOT snapshot for execution. Source cards support bounded methods.
const locales=['ru','en','uk','de','es'] as const;
type Locale=typeof locales[number];
type Sample={id:string;input:Record<string,string|number>;expected:number;invalidField:string;invalid:string;integer?:boolean;errorKey?:string};
const samples:Sample[]=[
{id:'car-depreciation',input:{price:1000,years:3,ratePct:10,firstYearPct:20},expected:648,invalidField:'years',invalid:'2.5',integer:true},
{id:'compression-ratio',input:{displacement:400,chamber:50},expected:9,invalidField:'chamber',invalid:'0',errorKey:'Объём камеры сгорания должен быть больше нуля'},
{id:'engine-displacement',input:{bore:100,stroke:100,cylinders:1},expected:785.4,invalidField:'cylinders',invalid:'2.5',integer:true},
{id:'fuel-consumption',input:{mode:'measure',litres:40,distance:500},expected:8,invalidField:'litres',invalid:'0',errorKey:'Количество литров должно быть больше нуля'},
{id:'fuel-oil-mix',input:{fuel:1,ratio:50},expected:20,invalidField:'fuel',invalid:'0',errorKey:'Объём топлива должен быть больше нуля'},
{id:'power-to-weight',input:{power:100,powerUnit:'kw',mass:1000,payload:0},expected:100,invalidField:'mass',invalid:'0',errorKey:'Масса должна быть больше нуля'},
{id:'quarter-mile-elapsed-time',input:{power:150,mass:1300},expected:15.572,invalidField:'power',invalid:'0',errorKey:'Мощность должна быть больше нуля'},
{id:'speed-distance-time',input:{mode:'speed',distance:120,time:2},expected:60,invalidField:'time',invalid:'0',errorKey:'Время должно быть больше нуля'},
{id:'stopping-distance',input:{speed:90,reaction:1,mu:.7,grade:0},expected:70.523,invalidField:'speed',invalid:'0',errorKey:'Скорость должна быть больше нуля'},
{id:'tire-size',input:{width:200,profile:50,diameter:10},expected:454,invalidField:'width',invalid:'0',errorKey:'Ширина шины должна быть больше нуля'},
{id:'trip-cost',input:{distance:100,consumption:10,fuelPrice:2,tolls:5,passengers:5,roundTrip:'yes'},expected:45,invalidField:'passengers',invalid:'1.5',integer:true},
{id:'wheel-offset',input:{width:8,offset:0,newOffset:10},expected:114.3,invalidField:'width',invalid:'0',errorKey:'Ширина диска должна быть больше нуля'},
];
const integerErrors=['Введите целые числа в допустимом диапазоне','Enter whole numbers within the supported range','Введіть цілі числа в допустимому діапазоні','Gib ganze Zahlen im unterstützten Bereich ein','Introduce números enteros dentro del intervalo admitido'];
const modeErrors=['Выберите поддерживаемый режим расчёта','Choose a supported calculation mode','Виберіть підтримуваний режим розрахунку','Wähle einen unterstützten Berechnungsmodus','Elige un modo de cálculo compatible'];
const enterNumber=['Введите число.','Enter a number.','Введіть число.','Bitte eine Zahl eingeben.','Introduce un número.'];
const record=(id:string,locale:Locale)=>fixtures.records.find(r=>r.id===id&&r.locale===locale)!;
const path=(id:string,locale:Locale,input:Record<string,string|number>)=>record(id,locale).url+'?'+new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)]));
function number(text:string,locale:Locale){const token=text.trim().replace(/[\s\u00a0\u202f]/g,'').match(/^[+-]?\d+(?:[.,]\d+)*(?:·10\^[+-]?\d+)?/);if(!token)throw new Error('No numeric prefix: '+text);return Number((locale==='en'?token[0].replaceAll(',',''):token[0].replace(',','.')).replace('·10^','e'));}
const quantity=async(loc:Locator,locale:Locale,expected:number)=>{await expect(loc).toBeVisible();await expect.poll(async()=>number(await loc.innerText(),locale)).toBe(expected);};
const primary=(page:Page,locale:Locale,expected:number)=>quantity(page.getByTestId('calc-result-primary'),locale,expected);
const noInvalid=async(page:Page)=>expect((await page.getByTestId('calc-result-wrap').allTextContents()).join(' ')).not.toMatch(/NaN|Infinity|undefined/);
async function share(page:Page){await page.evaluate(()=>(window as unknown as {auto10Link:string}).auto10Link='');await page.getByTestId('calc-share-btn').click();await expect.poll(()=>page.evaluate(()=>(window as unknown as {auto10Link?:string}).auto10Link??'')).not.toBe('');const url=new URL(await page.evaluate(()=>(window as unknown as {auto10Link:string}).auto10Link));expect(url.origin).toBe(new URL(page.url()).origin);expect(url.pathname).toBe(new URL(page.url()).pathname);expect(url.hash).toBe('#calculator');return url;}
test.beforeEach(async({context})=>{
 await context.route('**/*',route=>{const u=new URL(route.request().url());return u.protocol==='data:'||u.protocol==='blob:'||['localhost','127.0.0.1','::1'].includes(u.hostname)?route.continue():route.abort();});
 await context.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as {auto10Link:string}).auto10Link=text;}}}));
});
for(const sample of samples)for(const[index,locale]of locales.entries())for(const width of[390,1365])test(`auto10 ${sample.id}/${locale}/${width} independent number native invalid and copied link`,async({page})=>{
 await page.setViewportSize({width,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(path(sample.id,locale,sample.input));await primary(page,locale,sample.expected);
 await expect(page.locator('h1')).toHaveText(record(sample.id,locale).h1);await expect(page.locator('html')).toHaveAttribute('lang',locale);
 for(const source of getAutomotiveWave10MethodSources(sample.id,locale))await expect(page.getByTestId('calculator-source-review').locator(`a[href="${source.href}"]`)).toBeVisible();
 if(locale==='en'||locale==='de'||locale==='es')expect(await page.getByTestId('calc-result-wrap').innerText()).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 const link=await share(page);for(const field of record(sample.id,locale).fields)if(sample.input[field.name]!==undefined&&sample.input[field.name]===field.defaultValue)expect(link.searchParams.has(field.name)).toBe(false);
 await page.goto(link.href);await primary(page,locale,sample.expected);await page.reload();await primary(page,locale,sample.expected);
 await page.getByTestId('field-'+sample.invalidField).fill(sample.invalid);
 if(sample.integer){await expect(page.getByTestId('field-error-'+sample.invalidField)).toHaveText(integerErrors[index]);await expect(page.getByTestId('field-'+sample.invalidField)).toHaveAttribute('aria-invalid','true');await expect(page.getByTestId('calc-result')).toHaveCount(0);}
 else{await expect(page.getByTestId('calc-result-primary')).toHaveText('—');const expected=(record(sample.id,locale).nativeErrors as Record<string,string>)[sample.errorKey!];expect(expected).not.toBe('');await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(expected);}
 await noInvalid(page);await page.goto(path(sample.id,locale,sample.input));await primary(page,locale,sample.expected);expect(errors).toEqual([]);
});
for(const locale of locales)for(const[mode,input,expected,active]of[
 ['measure',{litres:40,distance:500},8,['litres','distance']],['kml',{litres:40,distance:500},12.5,['litres','distance']],['need',{distance:500,consumption:8},40,['distance','consumption']],
]as const)test(`auto10 fuel/${locale}/${mode} actual active input visibility and share`,async({page})=>{
 await page.goto(path('fuel-consumption',locale,{mode,...input}));await primary(page,locale,expected);for(const name of ['litres','distance','consumption'])await expect(page.getByTestId('field-'+name)).toHaveCount((active as readonly string[]).includes(name)?1:0);
 const link=await share(page);const ignored=mode==='need'?'litres':'consumption';expect(link.searchParams.has(ignored)).toBe(false);await page.goto(link.href);await primary(page,locale,expected);
});
for(const locale of locales)for(const[mode,input,expected,active]of[
 ['speed',{distance:120,time:2},60,['distance','time']],['distance',{speed:60,time:2},120,['time','speed']],['time',{distance:120,speed:60},2,['distance','speed']],
]as const)test(`auto10 speed/${locale}/${mode} only two known inputs and hidden sharing`,async({page})=>{
 await page.goto(path('speed-distance-time',locale,{mode,...input}));await primary(page,locale,expected);for(const name of ['distance','time','speed'])await expect(page.getByTestId('field-'+name)).toHaveCount((active as readonly string[]).includes(name)?1:0);
 const link=await share(page);expect(link.searchParams.has(mode==='speed'?'speed':mode==='time'?'time':'distance')).toBe(false);await page.goto(link.href);await primary(page,locale,expected);await page.reload();await primary(page,locale,expected);
});
for(const locale of locales)for(const[field,expected]of[['ratePct',.02],['firstYearPct',4.05]]as const)test(`auto10 car/${locale}/${field} reachable99.5 with native exclusive100`,async({page})=>{
 const sample=samples[0];await page.goto(path(sample.id,locale,{...sample.input,[field]:99.5}));await primary(page,locale,expected);const link=await share(page);await page.goto(link.href);await primary(page,locale,expected);await page.getByTestId('field-'+field).fill('100');await expect(page.getByTestId('field-error-'+field)).toContainText('100');await expect(page.getByTestId('field-'+field)).toHaveAttribute('aria-invalid','true');if(locale==='en'||locale==='de'||locale==='es')expect(await page.getByTestId('field-error-'+field).innerText()).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);await expect(page.getByTestId('calc-result')).toHaveCount(0);await noInvalid(page);
});
for(const[index,locale]of locales.entries())for(const[id,field,expected]of[['car-depreciation','years',648],['engine-displacement','cylinders',2356.19],['trip-cost','passengers',45]]as const)test(`auto10 ${id}/${locale} original lexical integer before and after query reload`,async({page})=>{
 const sample=samples.find(s=>s.id===id)!;await page.goto(path(id,locale,{...sample.input,[field]:'3.00000000000000001'}));await expect(page.getByTestId('field-error-'+field)).toHaveText(integerErrors[index]);await page.goto(path(id,locale,{...sample.input,[field]:'3.00000000000000001e0'}));await expect(page.getByTestId('field-error-'+field)).toHaveText(enterNumber[index]);await page.getByTestId('field-'+field).fill('3.0000');await expect(page.getByTestId('field-error-'+field)).toHaveCount(0);await primary(page,locale,expected);const link=await share(page);await page.goto(link.href);await expect(page.getByTestId('field-'+field)).toHaveValue('3');await primary(page,locale,expected);await noInvalid(page);
});
for(const[index,locale]of locales.entries())for(const[id,field]of[['fuel-consumption','mode'],['speed-distance-time','mode'],['power-to-weight','powerUnit']]as const)test(`auto10 ${id}/${locale} unsupported runtime enum fails closed`,async({page})=>{
 const s=samples.find(s=>s.id===id)!;await page.goto(path(id,locale,s.input));await primary(page,locale,s.expected);await page.getByTestId('field-'+field).evaluate(select=>{const option=document.createElement('option');option.value='alien';option.textContent='unsupported local QA';select.appendChild(option);});await page.getByTestId('field-'+field).selectOption('alien');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(modeErrors[index]);await noInvalid(page);
});
// roundTrip is a button toggle: exercise its real UI and the URL enum boundary.
// Unsupported URL options are discarded by readValuesFromSearch; direct runtime
// rejection of unsupported roundTrip remains in the owned contract unit tests.
for(const locale of locales)test(`auto10 trip-cost/${locale} toggle round trip and unsupported query fallback`,async({page})=>{
 const input={distance:100,consumption:10,fuelPrice:2,tolls:5,passengers:5};
 await page.goto(path('trip-cost',locale,{...input,roundTrip:'alien'}));await primary(page,locale,25);
 const no=page.getByTestId('field-roundTrip-opt-no'),yes=page.getByTestId('field-roundTrip-opt-yes');
 await expect(no).toHaveAttribute('aria-pressed','true');await expect(yes).toHaveAttribute('aria-pressed','false');
 await yes.click();await primary(page,locale,45);await expect(yes).toHaveAttribute('aria-pressed','true');
 const roundLink=await share(page);expect(roundLink.searchParams.get('roundTrip')).toBe('yes');await page.goto(roundLink.href);await primary(page,locale,45);await page.reload();await primary(page,locale,45);
 await no.click();await primary(page,locale,25);await expect(no).toHaveAttribute('aria-pressed','true');await expect(yes).toHaveAttribute('aria-pressed','false');
 const oneWayLink=await share(page);expect(oneWayLink.searchParams.has('roundTrip')).toBe(false);await page.goto(oneWayLink.href);await primary(page,locale,25);await page.reload();await primary(page,locale,25);await noInvalid(page);
});
for(const locale of locales)test(`auto10 ${locale} horsepower distinction and declared dimensional field units`,async({page})=>{
 await page.setViewportSize({width:390,height:900});const s=samples.find(s=>s.id==='power-to-weight')!;await page.goto(path(s.id,locale,s.input));await primary(page,locale,100);await expect(page.getByTestId('field-power')).toHaveAttribute('aria-describedby',/help/);await page.getByTestId('field-powerUnit').selectOption('ps');await primary(page,locale,73.55);await expect(page.locator('[id$="power-help"]')).toContainText('735');
 await page.goto(path('quarter-mile-elapsed-time',locale,{power:150,mass:1300}));await primary(page,locale,15.572);await expect(page.getByTestId('calculator-fields')).toContainText('hp');
 await page.goto(path('tire-size',locale,{width:200,profile:50,diameter:10}));await primary(page,locale,454);const rimUnit={ru:'дюйм',en:'in',uk:'дюйм',de:'in',es:'in'}[locale];await expect(page.getByTestId('calculator-fields').locator('li').nth(2)).toContainText('— '+rimUnit);await noInvalid(page);
});

for(const locale of locales)test(`auto10 quarter/${locale} subnormal intermediate preserves finite trap speed`,async({page})=>{
 await page.goto(path('quarter-mile-elapsed-time',locale,{power:'1e-300',mass:'1e23'}));await primary(page,locale,3.519e108);
 await quantity(page.getByTestId('calc-result-row-0').locator('dd'),locale,6.234e-106);
 await quantity(page.getByTestId('calc-result-row-3').locator('dd'),locale,3.874e-106);
 await noInvalid(page);const link=await share(page);await page.goto(link.href);await quantity(page.getByTestId('calc-result-row-0').locator('dd'),locale,6.234e-106);
});
