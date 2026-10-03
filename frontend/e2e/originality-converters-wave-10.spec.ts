import {test,expect,type Page,type Locator} from '@playwright/test';
import fixtures from '../reports/originality-converters-wave-10-browser-fixtures.json' with {type:'json'};
import {getConverterWave10MethodSources} from '../src/data/converterWave10MethodSources';
const locales=['ru','en','uk','de','es'] as const;type Locale=typeof locales[number];
const samples=[
 {id:'coordinate-convert',input:{mode:'toDecimal',deg:55,minutes:45,seconds:30,hemisphere:'N'},expected:55.7583,invalidField:'deg',invalid:'1.5',integer:true},
 {id:'number-scale-names',input:{value:25,from:'lakh',to:'million'},expected:2.5,invalidField:'value',invalid:'0',error:'Значение должно быть больше нуля'},
 {id:'paper-quantity',input:{format:'a4',grammage:80,sheets:500},expected:2.495,invalidField:'sheets',invalid:'1.5',integer:true},
 {id:'scale-model',input:{mode:'toModel',real:4350,scale:87},expected:50,invalidField:'scale',invalid:'0',error:'Знаменатель масштаба должен быть больше нуля'},
 {id:'number-to-words',input:{value:1234},expected:NaN,invalidField:'value',invalid:'1.5',integer:true},
] as const;
const words={ru:'одна тысяча двести тридцать четыре',en:'one thousand two hundred thirty four',uk:'одна тисяча двісті тридцять чотири'};
const record=(id:string,l:Locale)=>fixtures.records.find(r=>r.id===id&&r.locale===l)!;
const path=(id:string,l:Locale,input:Record<string,string|number>)=>record(id,l).url+'?'+new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)]));
function number(s:string,l:Locale){const token=s.trim().replace(/[\s\u00a0\u202f]/g,'').match(/^[+-]?\d+(?:[.,]\d+)*(?:·10\^[+-]?\d+)?/);if(!token)throw Error('Numeric prefix missing:'+s);return Number((l==='en'?token[0].replaceAll(',',''):token[0].replace(',','.')).replace('·10^','e'));}
async function primary(p:Page,l:Locale,n:number){await expect.poll(async()=>number(await p.getByTestId('calc-result-primary').innerText(),l)).toBe(n);}
async function share(p:Page){await p.evaluate(()=>(window as unknown as{con10Link:string}).con10Link='');await p.getByTestId('calc-share-btn').click();await expect.poll(()=>p.evaluate(()=>(window as unknown as{con10Link:string}).con10Link)).not.toBe('');const u=new URL(await p.evaluate(()=>(window as unknown as{con10Link:string}).con10Link));expect(u.origin).toBe(new URL(p.url()).origin);expect(u.pathname).toBe(new URL(p.url()).pathname);expect(u.hash).toBe('#calculator');return u;}
async function clean(p:Page,l:Locale){const t=(await p.getByTestId('calc-result-wrap').allTextContents()).join(' ');expect(t).not.toMatch(/NaN|Infinity|undefined/);if(['en','de','es'].includes(l))expect(t).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);expect(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);}
test.beforeEach(async({context})=>{await context.route('**/*',r=>{const u=new URL(r.request().url());return ['127.0.0.1','localhost','::1'].includes(u.hostname)||['data:','blob:'].includes(u.protocol)?r.continue():r.abort();});await context.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(t:string)=>{(window as unknown as{con10Link:string}).con10Link=t;}}}));});
for(const s of samples)for(const l of locales.filter(l=>s.id!=='number-to-words'||l==='ru'||l==='en'||l==='uk'))for(const width of[390,1365])test(`con10 ${s.id}/${l}/${width} literal numeric native error and share reload`,async({page})=>{
 await page.setViewportSize({width,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(path(s.id,l,s.input));
 const verify=async()=>s.id==='number-to-words'?expect(page.getByTestId('calc-result-primary')).toHaveText(words[l as keyof typeof words]):primary(page,l,s.expected);
 await verify();await expect(page.locator('h1')).toHaveText(record(s.id,l).h1);for(const source of getConverterWave10MethodSources(s.id,l))await expect(page.getByTestId('calculator-source-review').locator(`a[href="${source.href}"]`)).toBeVisible();await clean(page,l);
 const link=await share(page);await page.goto(link.href);await verify();await page.reload();await verify();await page.getByTestId('field-'+s.invalidField).fill(s.invalid);
 if('integer'in s){await expect(page.getByTestId('field-error-'+s.invalidField)).toBeVisible();await expect(page.getByTestId('field-'+s.invalidField)).toHaveAttribute('aria-invalid','true');await expect(page.getByTestId('calc-result')).toHaveCount(0);}
 else{await expect(page.getByTestId('calc-result-primary')).toHaveText('—');const msg=l==='ru'?s.error:(record(s.id,l).nativeErrors as Record<string,string>)[s.error];expect(msg).toBeTruthy();await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(msg);}
 await clean(page,l);await page.goto(path(s.id,l,s.input));await verify();expect(errors).toEqual([]);
});
for(const l of locales)for(const[mode,input,expected,hidden]of[
 ['toModel',{real:4350,scale:160},27.188,'model'],['toReal',{model:2.5,scale:.5},1.25,'real'],['findScale',{real:5,model:10},.5,'scale'],
]as const)test(`con10 scale/${l}/${mode} exact active inputs and enlargement`,async({page})=>{
 await page.goto(path('scale-model',l,{mode,...input}));if(mode==='findScale')await expect(page.getByTestId('calc-result-primary')).toHaveText(l==='en'?'1:0.5':'1:0,5');else await primary(page,l,expected);
 await expect(page.getByTestId('field-'+hidden)).toHaveCount(0);const link=await share(page);expect(link.searchParams.has(hidden)).toBe(false);await page.goto(link.href);await expect(page.getByTestId('field-'+hidden)).toHaveCount(0);await clean(page,l);
});
for(const l of locales)for(const[format,expected]of[['a0',39.998],['a1',19.982],['a2',9.979],['a3',4.99],['a4',2.495],['a5',1.243],['a6',.6216]]as const)test(`con10 paper/${l}/${format} independent nominal-mm area×80×500`,async({page})=>{await page.goto(path('paper-quantity',l,{format,grammage:80,sheets:500}));await primary(page,l,expected);await clean(page,l);});
for(const l of locales)test(`con10 coordinates/${l} fractional seconds and carry before presentation`,async({page})=>{
 await page.goto(path('coordinate-convert',l,{mode:'toDecimal',deg:0,minutes:0,seconds:59.5}));await primary(page,l,.0165);await page.getByTestId('field-seconds').fill('60');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await page.goto(path('coordinate-convert',l,{mode:'toDms',decimal:'12.999999999'}));await expect(page.getByTestId('calc-result-primary')).toHaveText('13° 0′ 0″');for(const f of['deg','minutes','seconds','hemisphere'])await expect(page.getByTestId('field-'+f)).toHaveCount(0);await clean(page,l);
});
for(const l of locales)test(`con10 coordinates/${l} representable tiny seconds remain nonzero`,async({page})=>{await page.goto(path('coordinate-convert',l,{mode:'toDms',decimal:'1e-10'}));await expect(page.getByTestId('calc-result-primary')).toHaveText(l==='en'?'0° 0′ 3.600·10^-7″':'0° 0′ 3,600·10^-7″');await clean(page,l);});
for(const l of locales)test(`con10 number scale/${l} unsupported option cannot become unit identity`,async({page})=>{await page.goto(path('number-scale-names',l,{value:25,from:'lakh',to:'million'}));await primary(page,l,2.5);await page.getByTestId('field-from').evaluate(e=>{const o=document.createElement('option');o.value='toString';o.textContent='unsupported QA';e.appendChild(o);});await page.getByTestId('field-from').selectOption('toString');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await clean(page,l);});
for(const[value,expected]of[[1,'one RUB 00 kopecks'],[21,'twenty one RUB 00 kopecks'],[101,'one hundred one RUB 00 kopecks'],[1001,'one thousand one RUB 00 kopecks'],[-1,'minus one RUB 00 kopecks']]as const)test(`con10 EN money/${value} explicit RUB currency`,async({page})=>{await page.goto(path('number-to-words','en',{value}));await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(expected);await clean(page,'en');});
