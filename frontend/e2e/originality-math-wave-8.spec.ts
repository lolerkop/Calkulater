import { expect, test, type Page, type Locator } from '@playwright/test';
import fixtures from '../reports/originality-math-wave-8-browser-fixtures.json' with { type: 'json' };
import { getMathWave8MethodSources } from '../src/data/mathWave8MethodSources';
// Prepared for the next coherent ROOT snapshot. No registry/runtime/compute
// imports derive expected numbers; routes/defaults are actual before fixtures.
const locales=['ru','en','uk','de','es'] as const;
type Locale=typeof locales[number];
interface Sample {id:string;input:Record<string,string|number>;expected:number|string;invalidField:string;invalid:string;fieldError?:boolean;errorKind?:string;}
const samples:readonly Sample[]=[
 {id:'binomial-probability',input:{n:10,k:3,p:.5,mode:'exactly'},expected:.1172,invalidField:'n',invalid:'2.5',fieldError:true},
 {id:'confidence-interval',input:{mean:100,sd:15,n:36,confidence:'95'},expected:'interval',invalidField:'n',invalid:'2.5',fieldError:true},
 {id:'correlation',input:{xs:'1 2 3 4 5',ys:'2 4 5 4 5'},expected:.7746,invalidField:'xs',invalid:'1 1 1 1 1',errorKind:'constant'},
 {id:'dice-probability',input:{count:2,sides:6,target:7},expected:16.67,invalidField:'count',invalid:'1.5',fieldError:true},
 {id:'probability-basic',input:{mode:'single',favourable:1,total:6},expected:.1667,invalidField:'favourable',invalid:'0.5',fieldError:true},
 {id:'quartile',input:{values:'2 4 4 5 7 9 11 12'},expected:6,invalidField:'values',invalid:'1 2 3 bad',errorKind:'list'},
 {id:'roman-numerals',input:{mode:'toRoman',arabic:1994},expected:'MCMXCIV',invalidField:'arabic',invalid:'2.5',fieldError:true},
 {id:'rounding',input:{value:2748.536,digits:2,mode:'half'},expected:2748.54,invalidField:'digits',invalid:'1.5',fieldError:true},
 {id:'sample-size',input:{confidence:'95',margin:5,proportion:50,population:500},expected:218,invalidField:'population',invalid:'0.5',fieldError:true},
 {id:'stats-descriptive',input:{values:'12\n15\n18\n21\n24',mode:'sample'},expected:18,invalidField:'values',invalid:'1 2 bad',errorKind:'list'},
 {id:'weighted-mean',input:{pairs:'5 3\n4 4\n3 2'},expected:4.1111,invalidField:'pairs',invalid:'5 0\n4 0',errorKind:'weights'},
 {id:'z-score',input:{x:80,mean:75,sd:8},expected:.625,invalidField:'sd',invalid:'0',errorKind:'sd'},
];
const integerErrors=['Введите целые числа в допустимом диапазоне','Enter integers within the supported range','Введіть цілі числа в допустимому діапазоні','Gib ganze Zahlen im unterstützten Bereich ein','Introduce enteros dentro del intervalo admitido'];
const enterNumber=['Введите число.','Enter a number.','Введіть число.','Bitte eine Zahl eingeben.','Introduce un número.'];
const resultErrors:Record<string,readonly string[]>={
 list:['Допускается не больше 10000 значений или пар и 1000000 символов; проверьте каждый числовой токен','Enter at most 10000 values or pairs and 1000000 characters; check every number','Введіть не більше 10000 значень або пар і 1000000 символів; перевірте кожне число','Gib höchstens 10000 Werte oder Paare und 1000000 Zeichen ein; prüfe jede Zahl','Introduce como máximo 10000 valores o pares y 1000000 caracteres; comprueba cada número'],
 constant:['Все значения одного из рядов совпадают — корреляция не определена','Every value in one series is identical — the correlation cannot be computed','Усі значення одного з рядів збігаються — кореляція не визначена','Alle Werte einer der Reihen sind gleich — die Korrelation ist nicht bestimmt','Todos los valores de una de las series coinciden: la correlación no está definida'],
 weights:['Сумма весов должна быть больше нуля','The sum of the weights must be greater than zero','Сума ваг має бути більшою за нуль','Die Summe der Gewichte muss größer als null sein','La suma de los pesos debe ser mayor que cero'],
 sd:['Стандартное отклонение должно быть больше нуля','The standard deviation must be greater than zero','Стандартне відхилення має бути більшим за нуль','Die Standardabweichung muss größer als null sein','La desviación típica debe ser mayor que cero'],
};
const modeErrors=['Выберите поддерживаемый режим расчёта','Select a supported calculation mode','Виберіть підтримуваний режим розрахунку','Wähle einen unterstützten Berechnungsmodus','Selecciona un modo de cálculo admitido'];
const below=['Ненулевое значение меньше числового диапазона','Nonzero value below the numeric range','Ненульове значення менше за числовий діапазон','Ein Wert ungleich null liegt unterhalb des Zahlenbereichs','Valor distinto de cero inferior al intervalo numérico'];
const dataUnits={ru:'ед. данных',en:'data unit',uk:'од. даних',de:'Dateneinheit',es:'unidad de los datos'} as const;
const dataFields:Record<string,readonly string[]>={'confidence-interval':['mean','sd'],'z-score':['x','mean','sd'],'stats-descriptive':['values'],quartile:['values'],correlation:['xs','ys']};
const record=(id:string,locale:Locale)=>fixtures.records.find(r=>r.id===id&&r.locale===locale)!;
const query=(input:Record<string,string|number>)=>new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)])).toString();
const path=(id:string,locale:Locale,input:Record<string,string|number>)=>record(id,locale).url+'?'+query(input);
function valueNumber(text:string,locale:Locale){const raw=text.trim().replace(/[\s\u00a0\u202f]/g,'').match(/^[+-]?\d+(?:[.,]\d+)*(?:·10\^[+-]?\d+)?/);if(!raw)throw new Error('Missing numeric prefix: '+text);return Number((locale==='en'?raw[0].replaceAll(',',''):raw[0].replace(',','.')).replace('·10^','e'));}
const quantity=async(locator:Locator,locale:Locale,expected:number)=>{await expect(locator).toBeVisible();await expect.poll(async()=>valueNumber(await locator.innerText(),locale)).toBe(expected);};
async function primary(page:Page,locale:Locale,expected:number|string){
 if(typeof expected==='number')return quantity(page.getByTestId('calc-result-primary'),locale,expected);
 if(expected==='interval')return expect(page.getByTestId('calc-result-primary')).toHaveText(locale==='en'?'95.1 … 104.9':'95,1 … 104,9');
 await expect(page.getByTestId('calc-result-primary')).toHaveText(expected);
}
const noInvalid=async(page:Page)=>expect((await page.getByTestId('calc-result-wrap').allTextContents()).join(' ')).not.toMatch(/NaN|Infinity|undefined/);
async function share(page:Page){await page.evaluate(()=>(window as unknown as {math8Link:string}).math8Link='');await page.getByTestId('calc-share-btn').click();await expect.poll(()=>page.evaluate(()=>(window as unknown as {math8Link?:string}).math8Link??'')).not.toBe('');const url=new URL(await page.evaluate(()=>(window as unknown as {math8Link:string}).math8Link));expect(url.origin).toBe(new URL(page.url()).origin);expect(url.pathname).toBe(new URL(page.url()).pathname);expect(url.hash).toBe('#calculator');return url;}
test.beforeEach(async({context})=>{
 await context.route('**/*',route=>{const u=new URL(route.request().url());return u.protocol==='data:'||u.protocol==='blob:'||['localhost','127.0.0.1','::1'].includes(u.hostname)?route.continue():route.abort();});
 await context.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as {math8Link:string}).math8Link=text;}}}));
});
for(const sample of samples)for(const[index,locale]of locales.entries())for(const width of[390,1365])test(`math8 ${sample.id}/${locale}/${width} independent number native invalid and actual copied link`,async({page})=>{
 await page.setViewportSize({width,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(path(sample.id,locale,sample.input));await primary(page,locale,sample.expected);
 await expect(page.locator('html')).toHaveAttribute('lang',locale);await expect(page.locator('h1')).toHaveText(record(sample.id,locale).h1);
 for(const source of getMathWave8MethodSources(sample.id,locale))await expect(page.getByTestId('calculator-source-review').locator(`a[href="${source.href}"]`)).toBeVisible();
 for(const name of dataFields[sample.id]??[]){const index=record(sample.id,locale).fields.findIndex(f=>f.name===name);await expect(page.getByTestId('calculator-fields').locator('li').nth(index)).toContainText('— '+dataUnits[locale]);}
 if(locale==='en'||locale==='de'||locale==='es')expect(await page.getByTestId('calc-result-wrap').innerText()).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 const shared=await share(page);
 for(const field of record(sample.id,locale).fields){const input=sample.input[field.name];if(input!==undefined&&input===field.defaultValue)expect(shared.searchParams.has(field.name)).toBe(false);}
 await page.goto(shared.href);await primary(page,locale,sample.expected);await page.reload();await primary(page,locale,sample.expected);
 await page.getByTestId('field-'+sample.invalidField).fill(sample.invalid);
 if(sample.fieldError){await expect(page.getByTestId('field-error-'+sample.invalidField)).toHaveText(integerErrors[index]);await expect(page.getByTestId('field-'+sample.invalidField)).toHaveAttribute('aria-invalid','true');await expect(page.getByTestId('calc-result')).toHaveCount(0);}
 else{await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(resultErrors[sample.errorKind!][index]);}
 await noInvalid(page);await page.goto(path(sample.id,locale,sample.input));await primary(page,locale,sample.expected);expect(errors).toEqual([]);
});
const rawExpected:Record<string,number|string>={'binomial-probability':.125,'confidence-interval':'smallInterval','dice-probability':6.94,'probability-basic':.5,'roman-numerals':'III',rounding:2748.536,'sample-size':3};
const rawIntegerTools=['binomial-probability','confidence-interval','dice-probability','probability-basic','roman-numerals','rounding','sample-size'];
for(const[index,locale]of locales.entries())for(const id of rawIntegerTools)test(`math8 ${id}/${locale} original decimal scientific count and default omission`,async({page})=>{
 const sample=samples.find(s=>s.id===id)!,field=sample.invalidField;
 await page.goto(path(id,locale,{...sample.input,[field]:'3.00000000000000001'}));await expect(page.getByTestId('field-error-'+field)).toHaveText(integerErrors[index]);
 await page.goto(path(id,locale,{...sample.input,[field]:'3.00000000000000001e0'}));await expect(page.getByTestId('field-error-'+field)).toHaveText(enterNumber[index]);
 await page.getByTestId('field-'+field).fill('3.0000');await expect(page.getByTestId('field-error-'+field)).toHaveCount(0);
 const expected=rawExpected[id]==='smallInterval'?(locale==='en'?'83.0259 … 116.9741':'83,0259 … 116,9741'):rawExpected[id];await primary(page,locale,expected);
 const shared=await share(page);const defaultValue=record(id,locale).fields.find(f=>f.name===field)!.defaultValue;
 expect(shared.searchParams.get(field)).toBe(defaultValue===3?null:'3');await page.goto(shared.href);await expect(page.getByTestId('field-'+field)).toHaveValue('3');
 await page.goto(path(id,locale,{...sample.input,[field]:'3.000e0'}));await expect(page.getByTestId('field-'+field)).toHaveValue('3');await expect(page.getByTestId('field-error-'+field)).toHaveCount(0);await primary(page,locale,expected);
 await noInvalid(page);
});
for(const locale of locales)for(const[mode,input,expected,active]of[
 ['single',{favourable:1,total:2},.5,['favourable','total']],['complement',{favourable2:1,total2:2},.5,['favourable2','total2']],
 ['independentBoth',{p1:.5,p2:.5},.25,['p1','p2']],['independentEither',{p3:.5,p4:.5},.75,['p3','p4']],
]as const)test(`math8 basic ${locale}/${mode} fixed probability active fields and hidden sharing`,async({page})=>{
 await page.goto(path('probability-basic',locale,{mode,...input}));await primary(page,locale,expected);
 for(const name of ['favourable','total','favourable2','total2','p1','p2','p3','p4'])await expect(page.getByTestId('field-'+name)).toHaveCount((active as readonly string[]).includes(name)?1:0);
 const shared=await share(page);for(const name of ['favourable','total','favourable2','total2','p1','p2','p3','p4'].filter(n=>!(active as readonly string[]).includes(n)))expect(shared.searchParams.has(name)).toBe(false);
 await page.goto(shared.href);await primary(page,locale,expected);await page.reload();await primary(page,locale,expected);
});
for(const[index,locale]of locales.entries()){
 test(`math8 ${locale} unsupported runtime mode yields a native error`,async({page})=>{await page.goto(path('probability-basic',locale,{mode:'single',favourable:1,total:2}));await primary(page,locale,.5);await page.getByTestId('field-mode').evaluate(select=>{const option=document.createElement('option');option.value='alien';option.textContent='unsupported local QA';select.appendChild(option);});await page.getByTestId('field-mode').selectOption('alien');await primary(page,locale,'—');await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(modeErrors[index]);await noInvalid(page);});
 test(`math8 ${locale} Roman reverse canonical and historical alias rejection`,async({page})=>{await page.goto(path('roman-numerals',locale,{mode:'toArabic',roman:'  mmmdccclxxxviii  ',arabic:999}));await primary(page,locale,3888);await expect(page.getByTestId('field-arabic')).toHaveCount(0);const shared=await share(page);expect(shared.searchParams.has('arabic')).toBe(false);await page.goto(shared.href);await primary(page,locale,3888);await page.getByTestId('field-roman').fill('IIII');await primary(page,locale,'—');await noInvalid(page);});
 test(`math8 ${locale} nonzero spread survives variance underflow`,async({page})=>{await page.goto(path('stats-descriptive',locale,{values:'1e-300 2e-300 3e-300',mode:'sample'}));await primary(page,locale,2e-300);await expect(page.getByTestId('calc-result-row-7').locator('dd')).toHaveText(below[index]);await quantity(page.getByTestId('calc-result-row-8').locator('dd'),locale,1e-300);await noInvalid(page);});
 test(`math8 ${locale} large signed difference gives finite standardized score`,async({page})=>{await page.goto(path('z-score',locale,{x:1e308,mean:-1e308,sd:1e308}));await primary(page,locale,2);await noInvalid(page);const shared=await share(page);await page.goto(shared.href);await primary(page,locale,2);});
 test(`math8 ${locale} true zero probability is distinct from malformed or underflow`,async({page})=>{await page.goto(path('probability-basic',locale,{mode:'single',favourable:0,total:6}));await primary(page,locale,0);await page.goto(path('probability-basic',locale,{mode:'independentBoth',p1:'1e-400',p2:.5}));await expect(page.getByTestId('field-error-p1')).toHaveText(enterNumber[index]);await expect(page.getByTestId('calc-result')).toHaveCount(0);await noInvalid(page);});
}
