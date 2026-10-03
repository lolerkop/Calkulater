import {test,expect,type Page,type Locator} from '@playwright/test';
import fixtures from '../reports/originality-building-wave-13-browser-fixtures.json' with {type:'json'};
import {getBuildingWave13MethodSources} from '../src/data/buildingWave13MethodSources';
// Independent analytic literal fixtures; no registry, compute or result builder imports.
// Prepared only. ROOT must run against a coherent generated snapshot.
const locales=['ru','en','uk','de','es']as const;
type Locale=typeof locales[number];
type Sample={id:string;input:Record<string,string|number>;expected:number;default:number;invalidField:string;errorKey:string;integer?:boolean};
const samples:Sample[]=[
 {id:'air-exchange',input:{area:20,height:2.7,ach:3},expected:162,default:162,invalidField:'area',errorKey:'Площадь помещения должна быть больше нуля'},
 {id:'baluster-spacing',input:{run:300,baluster_width:40,max_gap:130},expected:1,default:21,invalidField:'run',errorKey:'Пролёт должен быть больше нуля'},
 {id:'beam-deflection',input:{scheme:'uniform',load:2,span:3,e:10,inertia:1000},expected:21.094,default:21.094,invalidField:'span',errorKey:'Пролёт должен быть больше нуля'},
 {id:'beam-stress',input:{moment:6000,section:'rect',b:100,h:200},expected:9,default:6.75,invalidField:'moment',errorKey:'Изгибающий момент должен быть больше нуля'},
 {id:'board-volume',input:{length:2,width:100,thickness:20,count:5,pricePerM3:1000},expected:.02,default:1.125,invalidField:'count',errorKey:'Введите целые числа в допустимом диапазоне',integer:true},
 {id:'bulk-material-volume',input:{length:2,width:3,depth:10,density:2,waste:10},expected:.66,default:2.1,invalidField:'length',errorKey:'Длина и ширина должны быть больше нуля'},
 {id:'cladding-boards',input:{wall_area:10,board_len:2,board_width:.2,overlap:.02,waste:0},expected:28,default:65,invalidField:'wall_area',errorKey:'Площадь стены должна быть больше нуля'},
 {id:'concrete',input:{mode:'slab',length:2,width:3,thickness:.1,waste:10},expected:.66,default:5.04,invalidField:'length',errorKey:'Все размеры плиты должны быть больше нуля'},
 {id:'drywall',input:{area:3,sheetLength:2.5,sheetWidth:1.2,layers:1,profileStep:.6,waste:0},expected:1,default:15,invalidField:'area',errorKey:'Площадь должна быть больше нуля'},
 {id:'epoxy-volume',input:{length:100,width:50,thickness:5,density:1.1,ratio:2},expected:2.75,default:2.75,invalidField:'density',errorKey:'Плотность смеси должна быть больше нуля'},
 {id:'fence',input:{length:10,span:3,height:2,rails:2,gates:0},expected:5,default:18,invalidField:'length',errorKey:'Длина забора должна быть больше нуля'},
 {id:'insulation',input:{area:1.0000001,thickness:100,slabArea:1,perPack:1},expected:.1,default:6,invalidField:'area',errorKey:'Площадь должна быть больше нуля'},
 {id:'linoleum',input:{length:5,width:3.5,rollWidth:3,reserve:5},expected:10.5,default:10.5,invalidField:'length',errorKey:'Размеры комнаты должны быть больше нуля'},
 {id:'metal-weight',input:{shape:'flat',a:10,b:20,length:1,density:1},expected:.2,default:14.797,invalidField:'b',errorKey:'Вторая сторона полосы должна быть больше нуля'},
 {id:'miter-angle',input:{corner:60},expected:30,default:45,invalidField:'corner',errorKey:'Угол стыка должен быть больше 0 и меньше 180 градусов'},
 {id:'pile-foundation',input:{count:1,diameter:1,depth:1,grillageLength:0,grillageWidth:0,grillageHeight:0,waste:0},expected:.7854,default:6.979,invalidField:'diameter',errorKey:'Диаметр и глубина сваи должны быть больше нуля'},
 {id:'pipe-weight',input:{d:10,wall:1,len:1,rho:1000},expected:.0283,default:61.555,invalidField:'d',errorKey:'Наружный диаметр должен быть больше нуля'},
 {id:'plaster',input:{mode:'area',area:20,thickness:10,consumption:.85,bagWeight:30},expected:170,default:1700,invalidField:'area',errorKey:'Площадь должна быть больше нуля'},
];
const record=(id:string,locale:Locale)=>fixtures.records.find(r=>r.id===id&&r.locale===locale)!;
const path=(id:string,locale:Locale,input:Record<string,string|number>)=>record(id,locale).url+'?'+new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)]));
function number(text:string,locale:Locale){const token=text.trim().replace(/[\s\u00a0\u202f]/g,'').match(/^[+-]?\d+(?:[.,]\d+)*(?:·10\^[+-]?\d+)?/);if(!token)throw new Error('No numeric prefix: '+text);return Number((locale==='en'?token[0].replaceAll(',',''):token[0].replace(',','.')).replace('·10^','e'));}
const quantity=async(loc:Locator,locale:Locale,expected:number)=>{await expect(loc).toBeVisible();await expect.poll(async()=>number(await loc.innerText(),locale)).toBe(expected);};
const primary=(page:Page,locale:Locale,expected:number)=>quantity(page.getByTestId('calc-result-primary'),locale,expected);
const noInvalid=async(page:Page)=>expect((await page.getByTestId('calc-result-wrap').allTextContents()).join(' ')).not.toMatch(/NaN|Infinity|undefined/);
const native=(id:string,locale:Locale,key:string)=>{if(locale==='ru')return key;const error=(record(id,locale).errors as Record<string,string>)[key];expect(error,'owned native error: '+key).toBeTruthy();return error;};
async function share(page:Page){await page.evaluate(()=>(window as unknown as {building13Link:string}).building13Link='');await page.getByTestId('calc-share-btn').click();await expect.poll(()=>page.evaluate(()=>(window as unknown as {building13Link?:string}).building13Link??'')).not.toBe('');const u=new URL(await page.evaluate(()=>(window as unknown as {building13Link:string}).building13Link));expect(u.origin).toBe(new URL(page.url()).origin);expect(u.pathname).toBe(new URL(page.url()).pathname);expect(u.hash).toBe('#calculator');return u;}
test.beforeEach(async({context})=>{
 await context.route('**/*',route=>{const u=new URL(route.request().url());return u.protocol==='data:'||u.protocol==='blob:'||['localhost','127.0.0.1','::1'].includes(u.hostname)?route.continue():route.abort();});
 await context.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as {building13Link:string}).building13Link=text;}}}));
});
for(const sample of samples)for(const[index,locale]of locales.entries())test(`building13 ${sample.id}/${locale} literal native query share reload and invalid`,async({page})=>{
 await page.setViewportSize({width:index%2?1365:390,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(path(sample.id,locale,sample.input));await primary(page,locale,sample.expected);
 await expect(page.locator('h1')).toHaveText(record(sample.id,locale).h1);await expect(page.locator('html')).toHaveAttribute('lang',locale);
 for(const source of getBuildingWave13MethodSources(sample.id,locale))await expect(page.getByTestId('calculator-source-review').locator(`a[href="${source.href}"]`)).toBeVisible();
 if(locale==='en'||locale==='de'||locale==='es')expect(await page.getByTestId('calc-result-wrap').innerText()).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 const link=await share(page);for(const field of record(sample.id,locale).fields)if(sample.input[field.name]!==undefined&&sample.input[field.name]===field.defaultValue)expect(link.searchParams.has(field.name)).toBe(false);
 await page.goto(link.href);await primary(page,locale,sample.expected);await page.reload();await primary(page,locale,sample.expected);
 await page.getByTestId('field-'+sample.invalidField).fill(sample.integer?'2.5':'0');
 if(sample.integer){await expect(page.getByTestId('field-error-'+sample.invalidField)).toHaveText(native(sample.id,locale,sample.errorKey));await expect(page.getByTestId('field-'+sample.invalidField)).toHaveAttribute('aria-invalid','true');await expect(page.getByTestId('calc-result')).toHaveCount(0);}
 else{await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(native(sample.id,locale,sample.errorKey));}
 await noInvalid(page);expect(errors).toEqual([]);
});
for(const sample of samples)for(const[index,locale]of locales.entries())test(`building13 ${sample.id}/${locale} genuine defaults omit defaults and preserve values`,async({page})=>{
 await page.setViewportSize({width:index%2?390:1365,height:900});await page.goto(record(sample.id,locale).url);await primary(page,locale,sample.default);const link=await share(page);expect([...link.searchParams]).toEqual([]);await page.goto(link.href);await primary(page,locale,sample.default);await noInvalid(page);
});
for(const locale of locales)for(const[scheme,expected]of[['uniform',21.094],['point',11.25]]as const)test(`building13 beam/${locale}/${scheme} real load unit and no guessed invalid unit`,async({page})=>{
 await page.goto(path('beam-deflection',locale,{scheme,load:2,span:3,e:10,inertia:1000}));await primary(page,locale,expected);
 const unit=locale==='ru'||locale==='uk'?(scheme==='uniform'?'кН/м':'кН'):(scheme==='uniform'?'kN/m':'kN');await expect(page.getByTestId('field-label-load')).toContainText('('+unit+')');await expect(page.getByTestId('field-load')).toHaveAttribute('aria-describedby',/help/);
 await expect(page.getByTestId('calculator-fields')).toContainText({ru:'кН/м или кН',en:'kN/m or kN',uk:'кН/м або кН',de:'kN/m oder kN',es:'kN/m o kN'}[locale]);
});
const concreteInputs={length:2,width:3,thickness:.1,perimeter:10,stripWidth:.2,depth:.5,sectionArea:.1,height:2,count:3,waste:10};
for(const locale of locales)for(const[mode,expected,active]of[
 ['slab',.66,['length','width','thickness']],['strip',1.1,['perimeter','stripWidth','depth']],['columns',.66,['sectionArea','height','count']],
]as const)test(`building13 concrete/${locale}/${mode} active geometry and truthful sharing`,async({page})=>{
 await page.goto(path('concrete',locale,{mode,...concreteInputs}));await primary(page,locale,expected);
 for(const field of Object.keys(concreteInputs).filter(k=>k!=='waste'))await expect(page.getByTestId('field-'+field)).toHaveCount((active as readonly string[]).includes(field)?1:0);
 const link=await share(page);for(const field of Object.keys(concreteInputs).filter(k=>k!=='waste'&&!(active as readonly string[]).includes(k)))expect(link.searchParams.has(field)).toBe(false);await page.goto(link.href);await primary(page,locale,expected);
});
for(const locale of locales)for(const[shape,expected]of[['round',.0785],['square',.1],['flat',.2]]as const)test(`building13 metal/${locale}/${shape} known section active inputs`,async({page})=>{
 await page.goto(path('metal-weight',locale,{shape,a:10,b:20,length:1,density:1}));await primary(page,locale,expected);await expect(page.getByTestId('field-b')).toHaveCount(shape==='flat'?1:0);const link=await share(page);if(shape!=='flat')expect(link.searchParams.has('b')).toBe(false);await page.goto(link.href);await primary(page,locale,expected);
});
for(const locale of locales)for(const[section,patch,expected]of[['rect',{moment:6000,b:100,h:200},9],['circle',{moment:3141.592653589793,d:100},32]]as const)test(`building13 stress/${locale}/${section} exact section scope`,async({page})=>{
 await page.goto(path('beam-stress',locale,{section,...patch}));await primary(page,locale,expected);await expect(page.getByTestId('field-d')).toHaveCount(section==='circle'?1:0);await expect(page.getByTestId('field-b')).toHaveCount(section==='rect'?1:0);const link=await share(page);for(const f of(section==='circle'?['b','h']:['d']))expect(link.searchParams.has(f)).toBe(false);await page.goto(link.href);await primary(page,locale,expected);
});
for(const locale of locales)for(const[mode,patch]of[['area',{area:20}],['dimensions',{length:5,height:4}]]as const)test(`building13 plaster/${locale}/${mode} coefficient per millimetre and active fields`,async({page})=>{
 await page.goto(path('plaster',locale,{mode,...patch,thickness:10,consumption:.85,bagWeight:30}));await primary(page,locale,170);await quantity(page.getByTestId('calc-result-row-0').locator('dd'),locale,6);await expect(page.getByTestId('field-area')).toHaveCount(mode==='area'?1:0);const link=await share(page);for(const f of(mode==='area'?['length','height']:['area']))expect(link.searchParams.has(f)).toBe(false);await page.goto(link.href);await primary(page,locale,170);
});
for(const locale of locales)for(const[id,field,key]of[['beam-deflection','scheme','Выберите поддерживаемый режим расчёта'],['beam-stress','section','Выберите поддерживаемый режим расчёта'],['concrete','mode','Выберите поддерживаемый режим расчёта'],['plaster','mode','Выберите поддерживаемый режим расчёта'],['metal-weight','shape','Выберите форму сечения из списка']]as const)test(`building13 ${id}/${locale} unknown enum never adopts a real model`,async({page})=>{
 const s=samples.find(s=>s.id===id)!;await page.goto(path(id,locale,s.input));await primary(page,locale,s.expected);await page.getByTestId('field-'+field).evaluate(select=>{const o=document.createElement('option');o.value='alien';o.textContent='unsupported local QA';select.appendChild(o);});await page.getByTestId('field-'+field).selectOption('alien');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(native(id,locale,key));await noInvalid(page);
});
for(const locale of locales)for(const[id,field]of[['board-volume','count'],['concrete','count'],['drywall','layers'],['fence','rails'],['fence','gates'],['insulation','perPack'],['pile-foundation','count']]as const)test(`building13 ${id}.${field}/${locale} lexical fractional count query remains invalid`,async({page})=>{
 const s=samples.find(s=>s.id===id)!;await page.goto(path(id,locale,{...s.input,...(id==='concrete'?{mode:'columns',sectionArea:.1,height:2}:{}),[field]:'3.00000000000000001'}));await expect(page.getByTestId('field-error-'+field)).toHaveText(native(id,locale,'Введите целые числа в допустимом диапазоне'));await expect(page.getByTestId('calc-result')).toHaveCount(0);await noInvalid(page);
});
for(const[index,locale]of locales.entries())test(`building13 tiny raw measurement/${locale} cannot become valid zero`,async({page})=>{
 await page.goto(path('air-exchange',locale,{area:'1e-9999',height:2.7,ach:3}));await expect(page.getByTestId('field-error-area')).toHaveText(['Введите число.','Enter a number.','Введіть число.','Bitte eine Zahl eingeben.','Introduce un número.'][index]);await expect(page.getByTestId('calc-result')).toHaveCount(0);await noInvalid(page);
});
for(const locale of locales)test(`building13 ${locale} independently corrected pitch layers decimal ceilings and fixed currency`,async({page})=>{
 await page.goto(path('baluster-spacing',locale,{run:3000,baluster_width:40,max_gap:100}));await primary(page,locale,21);await quantity(page.getByTestId('calc-result-row-1').locator('dd'),locale,138.18);
 await page.goto(path('drywall',locale,{area:75,sheetLength:3,sheetWidth:1.2,layers:2,profileStep:.4,waste:5}));await primary(page,locale,44);await quantity(page.getByTestId('calc-result-row-4').locator('dd'),locale,2640);
 await page.goto(path('insulation',locale,{area:1.0000001,thickness:100,slabArea:1,perPack:1}));await primary(page,locale,.1);await quantity(page.getByTestId('calc-result-row-0').locator('dd'),locale,2);
 await page.goto(path('board-volume',locale,samples.find(s=>s.id==='board-volume')!.input));await primary(page,locale,.02);await quantity(page.getByTestId('calc-result-row-2').locator('dd'),locale,20);await expect(page.getByTestId('calc-result-row-2').locator('dd')).toContainText(locale==='ru'?'₽':'RUB');await expect(page.getByTestId('field-label-pricePerM3')).toContainText(locale==='ru'?'₽/м³':'RUB/m³');await noInvalid(page);
});
for(const locale of locales)test(`building13 miter/${locale} fractional planar angle and excluded180`,async({page})=>{
 await page.goto(path('miter-angle',locale,{corner:2.5}));await primary(page,locale,1.25);await quantity(page.getByTestId('calc-result-row-0').locator('dd'),locale,88.75);await page.getByTestId('field-corner').fill('180');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(native('miter-angle',locale,'Угол стыка должен быть больше 0 и меньше 180 градусов'));await noInvalid(page);
});
