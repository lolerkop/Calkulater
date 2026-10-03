import {test,expect,type Page,type Locator} from '@playwright/test';
import fixtures from '../reports/originality-building-wave-16-browser-fixtures.json' with {type:'json'};
import {getBuildingWave16MethodSources} from '../src/data/buildingWave16MethodSources';
// Literal independent geometry fixtures, not results obtained from the tested engines.
// Prepared only: ROOT must execute against a coherent generated snapshot.
const locales=['ru','en','uk','de','es']as const;
type Locale=typeof locales[number];
type Sample={id:string;input:Record<string,string|number>;expected:number;default:number;invalidField:string;errorKey:string};
const samples:Sample[]=[
 {id:'rafters',input:{span:6,rise:4,overhang:0},expected:5,default:5.165,invalidField:'span',errorKey:'Пролёт должен быть больше нуля'},
 {id:'roof-area',input:{mode:'shed',length:3,width:4,slopeMode:'degrees',angle:0},expected:12,default:92.376,invalidField:'length',errorKey:'Размеры основания должны быть больше нуля'},
 {id:'roof-battens',input:{area:10,step:.5,battenLength:6,sectionWidth:50,sectionHeight:50,waste:0},expected:20,default:188.57,invalidField:'area',errorKey:'Площадь крыши должна быть больше нуля'},
 {id:'room-volume',input:{mode:'dimensions',length:2,width:3,height:4},expected:24,default:54,invalidField:'height',errorKey:'Высота должна быть больше нуля'},
 {id:'sealant-volume',input:{width:2,depth:3,length:10,cart:60,waste:0},expected:60,default:475.2,invalidField:'width',errorKey:'Ширина шва должна быть больше нуля'},
 {id:'skirting',input:{length:3,width:4,doors:0,doorWidth:0,plank:2,waste:0},expected:14,default:16.17,invalidField:'length',errorKey:'Длина комнаты должна быть больше нуля'},
 {id:'slab-foundation',input:{length:2,width:3,thickness:.1,meshStep:1,rebarDiameter:10,waste:0},expected:.6,default:25.2,invalidField:'length',errorKey:'Размеры плиты должны быть больше нуля'},
 {id:'stairs',input:{rise_total:1.2,tread:.3,max_riser:.2},expected:6,default:16,invalidField:'rise_total',errorKey:'Общий подъём должен быть больше нуля'},
 {id:'strip-foundation',input:{perimeter:10,width:.2,depth:.5,waste:0},expected:1,default:13.44,invalidField:'perimeter',errorKey:'Длина ленты должна быть больше нуля'},
 {id:'tank-volume',input:{shape:'rect',d:2,len:3,level:1},expected:4,default:2.121,invalidField:'d',errorKey:'Размер сечения должен быть больше нуля'},
 {id:'underfloor-heating',input:{area:10,step:.5,edgeZone:0,edgeStep:.1,loopMax:8,waste:0},expected:20,default:161.33,invalidField:'area',errorKey:'Площадь должна быть больше нуля'},
 {id:'wood-weight',input:{volume:2,species:'pine',moisture:12},expected:1040,default:520,invalidField:'volume',errorKey:'Объём должен быть больше нуля'},
];
const record=(id:string,locale:Locale)=>fixtures.records.find(r=>r.id===id&&r.locale===locale)!;
const path=(id:string,locale:Locale,input:Record<string,string|number>)=>record(id,locale).url+'?'+new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)]));
function number(text:string,locale:Locale){
 const token=text.trim().replace(/\s/g,'').replaceAll('−','-').match(/^[+-]?\d+(?:[.,]\d+)*(?:·10\^[+-]?\d+)?/);
 if(!token)throw new Error('No numeric prefix: '+text);
 return Number((locale==='en'?token[0].replaceAll(',',''):token[0].replace(',','.')).replace('·10^','e'));
}
const quantity=async(loc:Locator,locale:Locale,expected:number)=>{await expect(loc).toBeVisible();await expect.poll(async()=>number(await loc.innerText(),locale)).toBe(expected);};
const primary=(page:Page,locale:Locale,expected:number)=>quantity(page.getByTestId('calc-result-primary'),locale,expected);
const row=(page:Page,index:number)=>page.getByTestId('calc-result-row-'+index).locator('dd');
const noInvalid=async(page:Page)=>expect((await page.getByTestId('calc-result-wrap').allTextContents()).join(' ')).not.toMatch(/NaN|Infinity|undefined/);
const native=(id:string,locale:Locale,key:string)=>{if(locale==='ru')return key;const result=(record(id,locale).errors as Record<string,string>)[key];expect(result,'owned native error: '+key).toBeTruthy();return result;};
const enterNumber={ru:'Введите число.',en:'Enter a number.',uk:'Введіть число.',de:'Bitte eine Zahl eingeben.',es:'Introduce un número.'};
async function share(page:Page){
 await page.evaluate(()=>(window as unknown as {building16Link:string}).building16Link='');await page.getByTestId('calc-share-btn').click();
 await expect.poll(()=>page.evaluate(()=>(window as unknown as {building16Link?:string}).building16Link??'')).not.toBe('');
 const u=new URL(await page.evaluate(()=>(window as unknown as {building16Link:string}).building16Link));
 expect(u.origin).toBe(new URL(page.url()).origin);expect(u.pathname).toBe(new URL(page.url()).pathname);expect(u.hash).toBe('#calculator');return u;
}
test.beforeEach(async({context})=>{
 await context.route('**/*',route=>{const u=new URL(route.request().url());return u.protocol==='data:'||u.protocol==='blob:'||['localhost','127.0.0.1','::1'].includes(u.hostname)?route.continue():route.abort();});
 await context.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as {building16Link:string}).building16Link=text;}}}));
});
for(const sample of samples)for(const[index,locale]of locales.entries())test(`building16 ${sample.id}/${locale} literal native query share reload and malformed active value`,async({page})=>{
 await page.setViewportSize({width:index%2?1365:390,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(path(sample.id,locale,sample.input));await primary(page,locale,sample.expected);
 await expect(page.locator('h1')).toHaveText(record(sample.id,locale).h1);await expect(page.locator('html')).toHaveAttribute('lang',locale);
 for(const source of getBuildingWave16MethodSources(sample.id,locale))await expect(page.getByTestId('calculator-source-review').locator(`a[href="${source.href}"]`)).toBeVisible();
 if(locale==='en'||locale==='de'||locale==='es')expect(await page.getByTestId('calc-result-wrap').innerText()).not.toMatch(/[А-Яа-яЁёІіЇїЄє]/);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 const link=await share(page);for(const field of record(sample.id,locale).fields)if(sample.input[field.name]!==undefined&&sample.input[field.name]===field.defaultValue)expect(link.searchParams.has(field.name)).toBe(false);
 await page.goto(link.href);await primary(page,locale,sample.expected);await page.reload();await primary(page,locale,sample.expected);
 await page.goto(path(sample.id,locale,{...sample.input,[sample.invalidField]:'1e-9999'}));
 await expect(page.getByTestId('field-error-'+sample.invalidField)).toHaveText(enterNumber[locale]);await expect(page.getByTestId('field-'+sample.invalidField)).toHaveAttribute('aria-invalid','true');
 await expect(page.getByTestId('calc-result')).toHaveCount(0);await noInvalid(page);expect(errors).toEqual([]);
});
for(const sample of samples)for(const[index,locale]of locales.entries())test(`building16 ${sample.id}/${locale} genuine defaults survive omission and reload`,async({page})=>{
 await page.setViewportSize({width:index%2?390:1365,height:900});await page.goto(record(sample.id,locale).url);await primary(page,locale,sample.default);
 const link=await share(page);expect([...link.searchParams]).toEqual([]);await page.goto(link.href);await primary(page,locale,sample.default);await noInvalid(page);
});
for(const sample of samples.filter(s=>s.id!=='room-volume'))for(const locale of locales)test(`building16 ${sample.id}/${locale} exact zero respects positive dimension contract`,async({page})=>{
 await page.goto(path(sample.id,locale,sample.input));await primary(page,locale,sample.expected);await page.getByTestId('field-'+sample.invalidField).fill('0');
 await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(row(page,0)).toHaveText(native(sample.id,locale,sample.errorKey));await noInvalid(page);
});
for(const locale of locales)test(`building16 roof/${locale} percent mode and active-only shared fields`,async({page})=>{
 await page.goto(path('roof-area',locale,{mode:'gable',length:3,width:4,slopeMode:'percent',slopePercent:100,angle:45}));
 await primary(page,locale,16.971);await quantity(row(page,0),locale,8.485);await expect(page.getByTestId('field-angle')).toHaveCount(0);await expect(page.getByTestId('field-slopePercent')).toBeVisible();
 const link=await share(page);expect(link.searchParams.has('angle')).toBe(false);await page.goto(link.href);await primary(page,locale,16.971);
});
for(const locale of locales)test(`building16 room/${locale} area mode suppresses unknown perimeter and inactive dimensions`,async({page})=>{
 await page.goto(path('room-volume',locale,{mode:'area',area:6,height:4,length:2,width:3}));await primary(page,locale,24);
 await expect(page.getByTestId('field-length')).toHaveCount(0);await expect(page.getByTestId('field-width')).toHaveCount(0);await expect(page.getByTestId('calc-result-wrap').locator('dl > div')).toHaveCount(2);
 const link=await share(page);expect(link.searchParams.has('length')).toBe(false);expect(link.searchParams.has('width')).toBe(false);await page.goto(link.href);await primary(page,locale,24);
});
const tankNames={
 ru:{side:'Сторона квадратного основания',diameter:'Внутренний диаметр',height:'Внутренняя высота',length:'Внутренняя длина цилиндра',capsule:'Длина цилиндрической части'},
 en:{side:'Square-base side',diameter:'Internal diameter',height:'Internal height',length:'Internal cylinder length',capsule:'Length of cylindrical part'},
 uk:{side:'Сторона квадратної основи',diameter:'Внутрішній діаметр',height:'Внутрішня висота',length:'Внутрішня довжина циліндра',capsule:'Довжина циліндричної частини'},
 de:{side:'Seite der quadratischen Grundfläche',diameter:'Innendurchmesser',height:'Innenhöhe',length:'Innere Zylinderlänge',capsule:'Länge des zylindrischen Teils'},
 es:{side:'Lado de base cuadrada',diameter:'Diámetro interior',height:'Altura interior',length:'Longitud interior del cilindro',capsule:'Longitud de la parte cilíndrica'},
};
for(const locale of locales)for(const[shape,expected]of[['vertical-cylinder',3.142],['horizontal-cylinder',4.712],['rect',4],['capsule',2.723]]as const)test(`building16 tank/${locale}/${shape} literal geometry and contextual internal dimensions`,async({page})=>{
 await page.goto(path('tank-volume',locale,{shape,d:2,len:3,level:1}));await primary(page,locale,expected);
 const names=tankNames[locale];await expect(page.getByTestId('field-label-d')).toContainText(shape==='rect'?names.side:names.diameter);
 await expect(page.getByTestId('field-label-len')).toContainText(shape==='capsule'?names.capsule:shape==='horizontal-cylinder'?names.length:names.height);
 if(shape==='capsule')await expect(page.getByTestId('field-len')).toHaveAttribute('aria-describedby',/help/);
 const link=await share(page);await page.goto(link.href);await primary(page,locale,expected);
});
for(const locale of locales)test(`building16 tank/${locale} capsule full height and disclosed linear model`,async({page})=>{
 await page.goto(path('tank-volume',locale,{shape:'capsule',d:2,len:3,level:5}));await primary(page,locale,13.614);await quantity(row(page,1),locale,100);await quantity(row(page,3),locale,0);
 await expect(page.getByTestId('calc-result-wrap')).toContainText(native('tank-volume',locale,'Для капсулы налив оценён линейно по уровню: это приближение, а не точный объём сферических торцов.'));
 await page.getByTestId('field-level').fill('5.01');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(row(page,0)).toHaveText(native('tank-volume',locale,'Уровень не может быть выше самой ёмкости'));
});
for(const locale of locales)test(`building16 tank/${locale} shallow nonzero segment never displays false zero`,async({page})=>{
 await page.goto(path('tank-volume',locale,{shape:'horizontal-cylinder',d:1,len:1,level:'0.00000000000000000001'}));await primary(page,locale,1.333e-30);await quantity(row(page,2),locale,1.333e-27);await noInvalid(page);
 await page.getByTestId('field-level').fill('0');await primary(page,locale,0);await quantity(row(page,1),locale,0);
});
for(const locale of locales)test(`building16 ${locale} independent decimal row and packaging corrections`,async({page})=>{
 await page.goto(path('slab-foundation',locale,{length:1,width:.3,thickness:.2,meshStep:.1,rebarDiameter:12,waste:0}));await primary(page,locale,.06);await quantity(row(page,3),locale,14.6);await quantity(row(page,5),locale,30);
 await page.goto(path('sealant-volume',locale,{width:1,depth:1,length:'3.0000000000000004',cart:3,waste:0}));await primary(page,locale,3);await quantity(row(page,1),locale,2);
 await page.getByTestId('field-length').fill('3');await quantity(row(page,1),locale,1);
 await page.goto(path('skirting',locale,{...samples.find(s=>s.id==='skirting')!.input,doors:'3.00000000000000001'}));await expect(page.getByTestId('field-error-doors')).toHaveText(native('skirting',locale,'Введите целые числа в допустимом диапазоне'));await expect(page.getByTestId('calc-result')).toHaveCount(0);await noInvalid(page);
});
for(const locale of locales)for(const[id,field,key]of[['roof-area','mode','Выберите поддерживаемый режим расчёта'],['roof-area','slopeMode','Выберите поддерживаемый режим расчёта'],['tank-volume','shape','Выберите поддерживаемый режим расчёта'],['wood-weight','species','Неизвестная порода древесины']]as const)test(`building16 ${id}.${field}/${locale} explicit unknown mode never becomes a supported model`,async({page})=>{
 const sample=samples.find(s=>s.id===id)!;await page.goto(path(id,locale,sample.input));await primary(page,locale,sample.expected);
 await page.getByTestId('field-'+field).evaluate(select=>{const option=document.createElement('option');option.value='alien';option.textContent='unsupported local QA';select.appendChild(option);});await page.getByTestId('field-'+field).selectOption('alien');
 await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(row(page,0)).toHaveText(native(id,locale,key));await noInvalid(page);
});
for(const locale of locales)test(`building16 room-volume.mode/${locale} unknown query keeps default and real toggle states share correctly`,async({page})=>{
 await page.goto(path('room-volume',locale,{mode:'alien',length:2,width:3,height:4}));
 await primary(page,locale,24); // 2 × 3 × 4; the invalid query mode is not a supported option.
 const group=page.getByTestId('field-mode'),dimensions=page.getByTestId('field-mode-opt-dimensions'),area=page.getByTestId('field-mode-opt-area');
 await expect(group).toHaveAttribute('role','group');await expect(group.locator('button')).toHaveCount(2);
 await expect(dimensions).toHaveAttribute('aria-pressed','true');await expect(area).toHaveAttribute('aria-pressed','false');
 await expect(page.getByTestId('field-area')).toHaveCount(0);
 const fallbackLink=await share(page);expect(fallbackLink.searchParams.has('mode')).toBe(false);expect(fallbackLink.searchParams.has('area')).toBe(false);
 expect(fallbackLink.searchParams.get('length')).toBe('2');expect(fallbackLink.searchParams.get('width')).toBe('3');expect(fallbackLink.searchParams.get('height')).toBe('4');
 await page.goto(fallbackLink.href);await primary(page,locale,24);await page.reload();await primary(page,locale,24);
 await page.getByTestId('field-mode-opt-area').click();await expect(page.getByTestId('field-area')).toBeVisible();await page.getByTestId('field-area').fill('7');
 await primary(page,locale,28); // 7 × 4; this differs from the dimensions-mode result.
 await quantity(row(page,0),locale,7);await quantity(row(page,1),locale,4);
 await expect(page.getByTestId('field-mode-opt-area')).toHaveAttribute('aria-pressed','true');
 await expect(page.getByTestId('field-mode-opt-dimensions')).toHaveAttribute('aria-pressed','false');
 await expect(page.getByTestId('field-length')).toHaveCount(0);await expect(page.getByTestId('field-width')).toHaveCount(0);
 const areaLink=await share(page);expect(areaLink.searchParams.get('mode')).toBe('area');expect(areaLink.searchParams.get('area')).toBe('7');expect(areaLink.searchParams.get('height')).toBe('4');
 expect(areaLink.searchParams.has('length')).toBe(false);expect(areaLink.searchParams.has('width')).toBe(false);
 await page.goto(areaLink.href);await primary(page,locale,28);await page.reload();await primary(page,locale,28);
 await page.getByTestId('calc-reset-btn').click();await primary(page,locale,54); // genuine defaults: 5 × 4 × 2.7.
 await expect(page.getByTestId('field-mode-opt-dimensions')).toHaveAttribute('aria-pressed','true');
 const defaultLink=await share(page);expect([...defaultLink.searchParams]).toEqual([]);
 await page.goto(defaultLink.href);await primary(page,locale,54);await noInvalid(page);
});
for(const locale of locales)test(`building16 ${locale} physical field units and declared along-rafter overhang`,async({page})=>{
 await page.goto(path('sealant-volume',locale,samples.find(s=>s.id==='sealant-volume')!.input));await primary(page,locale,60);
 await expect(page.getByTestId('field-label-cart')).toContainText('('+{ru:'мл',en:'mL',uk:'мл',de:'ml',es:'ml'}[locale]+')');
 await page.goto(path('rafters',locale,samples.find(s=>s.id==='rafters')!.input));await primary(page,locale,5);
 await expect(page.getByTestId('field-label-overhang')).toContainText({ru:'Свес вдоль стропила',en:'Overhang along the rafter',uk:'Звис уздовж крокви',de:'Überstand entlang des Sparrens',es:'Vuelo a lo largo del par'}[locale]);
});
for(const locale of locales)test(`building16 roof/${locale} supported89.5 and excluded90 degrees`,async({page})=>{
 await page.goto(path('roof-area',locale,{mode:'shed',length:1,width:1,slopeMode:'degrees',angle:89.5}));await primary(page,locale,114.59);
 await page.getByTestId('field-angle').fill('90');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(row(page,0)).toHaveText(native('roof-area',locale,'Уклон должен быть меньше 90 градусов'));await noInvalid(page);
});
