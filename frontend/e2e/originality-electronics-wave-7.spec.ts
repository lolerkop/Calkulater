import { expect, test, type Page } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

type Input = Record<string, string | number>;
type Row = { index: number; expected: number };
type Sample = { id: string; input: Input; expected: number; invalid: Input; active: string; unit: string; rows?: Row[] };
// Independent charge/energy balances, exact series sums and rational inverses.
const normal: Sample[] = [
 {id:'battery-charge-time',input:{capacityAh:50,currentA:10,efficiency:100},expected:5,invalid:{currentA:0},active:'capacityAh',unit:'А·ч',rows:[{index:0,expected:5},{index:1,expected:50},{index:2,expected:50}]},
 {id:'battery-runtime',input:{capacity:100,voltage:12,load:200,dod:80,efficiency:90},expected:4.32,invalid:{load:0},active:'capacity',unit:'А·ч',rows:[{index:1,expected:864},{index:2,expected:1200}]},
 {id:'battery-series-parallel',input:{cells:12,series:3,parallel:4,cellVoltage:3.7,cellCapacity:3.4},expected:11.1,invalid:{cells:13},active:'cells',unit:'1',rows:[{index:0,expected:13.6},{index:1,expected:150.96}]},
 {id:'resistor-network',input:{mode:'parallel',resistances:'100 220 330'},expected:56.897,invalid:{resistances:'100 0'},active:'resistances',unit:'Ом'},
 {id:'capacitor-network',input:{mode:'series',capacitances:'100 220'},expected:68.75,invalid:{capacitances:'100 0'},active:'capacitances',unit:'мкФ'},
 {id:'capacitor-basics',input:{mode:'charge',c:100,v:-12,q:999999},expected:-1200,invalid:{c:0},active:'c',unit:'мкФ',rows:[{index:0,expected:.0072},{index:2,expected:-12},{index:3,expected:-1200}]},
 {id:'kva-kw',input:{mode:'kw',kva:5,pf:.8,kw:999999},expected:4,invalid:{pf:0},active:'kva',unit:'кВА',rows:[{index:0,expected:3},{index:1,expected:4},{index:2,expected:5}]},
 {id:'single-phase',input:{mode:'P',voltage:230,current:8,powerFactor:.9,power:999999},expected:1656,invalid:{voltage:0},active:'voltage',unit:'В',rows:[{index:0,expected:1840},{index:1,expected:802.04},{index:2,expected:8}]},
];
// These active values are the published defaults and are intentionally omitted.
const sharedActive: Record<string, string | null> = {
 'battery-charge-time':'50', 'battery-runtime':null, 'battery-series-parallel':null,
 'resistor-network':null, 'capacitor-network':'100 220', 'capacitor-basics':null,
 'kva-kw':'5', 'single-phase':null,
};
const alternatives: Array<{id:string;name:string;input:Input;expected:number;rows?:Row[]}> = [
 {id:'resistor-network',name:'series equal470',input:{mode:'series',resistances:'470 470'},expected:940},
 {id:'capacitor-network',name:'parallel100220',input:{mode:'parallel',capacitances:'100 220'},expected:320},
 {id:'capacitor-basics',name:'voltage signed',input:{mode:'voltage',c:100,q:-1200,v:999999},expected:-12,rows:[{index:0,expected:.0072},{index:3,expected:-1200}]},
 {id:'capacitor-basics',name:'capacitance signed',input:{mode:'capacitance',v:-12,q:-1200,c:999999},expected:100,rows:[{index:0,expected:.0072}]},
 {id:'kva-kw',name:'apparent10kw',input:{mode:'kva',kw:10,pf:.8,kva:999999},expected:12.5,rows:[{index:0,expected:7.5}]},
 {id:'single-phase',name:'inverse current',input:{mode:'current',voltage:230,power:1656,powerFactor:.9,current:999999},expected:8,rows:[{index:0,expected:1656},{index:1,expected:1840},{index:2,expected:802.04}]},
];
const viewports=[{width:390,height:844},{width:1365,height:900}];
const query=(input:Input)=>new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)]));
const latin:Record<string,string>={'А·ч':'Ah','Ом':'Ω','мкФ':'µF','кВА':'kVA','В':'V','1':'1'};
const unit=(s:string,locale:string)=>locale==='ru'?s:locale==='uk'?(s==='А·ч'?'А·год':s):latin[s];
function displayedNumber(text:string,locale:string):number {
 const number=(s:string)=>{const t=s.replace(/[\s\u00a0\u202f]/g,'').replace('−','-');return Number(locale==='en'?t.replaceAll(',',''):t.replaceAll('.','').replace(',','.'));};
 const scientific=text.match(/([-−]?\d[\d\s\u00a0\u202f.,]*)·10\^(-?\d+)/);
 if(scientific)return number(scientific[1])*10**Number(scientific[2]);
 const token=text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];return token ? number(token) : Number.NaN;
}
async function primary(page:Page,locale:string,expected:number){
 await expect(page.getByTestId('calc-result-primary')).toBeVisible();
 await expect.poll(async()=>displayedNumber((await page.getByTestId('calc-result-primary').allTextContents())[0]??'',locale)).toBeCloseTo(expected,3);
}
async function rows(page:Page,locale:string,expected:Row[]=[]){for(const r of expected)await expect.poll(async()=>displayedNumber(await page.getByTestId(`calc-result-row-${r.index}`).locator('dd').innerText(),locale)).toBeCloseTo(r.expected,3);}
async function error(page:Page){
 await expect.poll(async()=>await page.locator('[data-testid^="field-error-"]:visible').count()>0||(await page.getByTestId('calc-result-primary').allTextContents()).some(s=>s.trim()==='—')).toBe(true);
 await expect(page.locator('main')).not.toContainText(/NaN|Infinity|undefined/);
}
async function native(page:Page,locale:string){
 await expect(page.getByTestId('calc-result')).not.toContainText(/NaN|Infinity|undefined/);
 if(locale!=='ru')await expect(page.getByTestId('calc-result')).not.toContainText(locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u);
}
async function layout(page:Page,width:number){
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
 for(const row of await page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]').all()){
  const dt=await row.locator('dt').boundingBox(),dd=await row.locator('dd').boundingBox();expect(dt).not.toBeNull();expect(dd).not.toBeNull();
  if(width===390){expect(dt!.width).toBeGreaterThanOrEqual(240);expect(dd!.width).toBeGreaterThanOrEqual(240);expect(dd!.y).toBeGreaterThanOrEqual(dt!.y+dt!.height-1);}
  else{expect(dt!.width).toBeGreaterThanOrEqual(140);expect(dd!.width).toBeGreaterThanOrEqual(160);}
 }
}
async function captureShare(page:Page){await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as Window&{electronicsShare?:string}).electronicsShare=text;}}}));}
async function shareUrl(page:Page){await page.getByTestId('calc-share-btn').click();await expect.poll(async()=>page.evaluate(()=>(window as Window&{electronicsShare?:string}).electronicsShare??'')).not.toBe('');return page.evaluate(()=>(window as Window&{electronicsShare?:string}).electronicsShare!);}
async function knownFields(page:Page,id:string,mode:string){
 if(id==='capacitor-basics'){
  const known:Record<string,string[]>={charge:['c','v'],voltage:['c','q'],capacitance:['v','q']};
  for(const name of ['c','v','q'])if(known[mode].includes(name))await expect(page.getByTestId(`field-${name}`)).toBeVisible();else await expect(page.getByTestId(`field-${name}`)).toHaveCount(0);
  await expect(page.getByTestId('calc-form').locator('input')).toHaveCount(2);
 }
 if(id==='kva-kw'){await expect(page.getByTestId(mode==='kw'?'field-kva':'field-kw')).toBeVisible();await expect(page.getByTestId(mode==='kw'?'field-kw':'field-kva')).toHaveCount(0);}
 if(id==='single-phase'){await expect(page.getByTestId(mode==='P'?'field-current':'field-power')).toBeVisible();await expect(page.getByTestId(mode==='P'?'field-power':'field-current')).toHaveCount(0);}
}

for(const viewport of viewports)test.describe(`${viewport.width}px electronics`,()=>{
 test.use({viewport});
 for(const sample of normal)for(const locale of locales){
  const calc=getCalculatorById(sample.id,locale);if(!calc)throw new Error(`Missing electronics URL ${sample.id}/${locale}`);
  test(`${locale} ${sample.id}: independent values, authored explanation, native result and reload`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto(`${calc.fullPath}?${query(sample.input)}`);await primary(page,locale,sample.expected);await rows(page,locale,sample.rows);
   await expect(page.locator('main')).toContainText(calc.seoContent!.howItWorks);await expect(page.locator('main')).toContainText(calc.seoContent!.example);
   await native(page,locale);await layout(page,viewport.width);await knownFields(page,sample.id,String(sample.input.mode??''));
   await page.reload();await primary(page,locale,sample.expected);await rows(page,locale,sample.rows);expect(errors).toEqual([]);
  });
  test(`${locale} ${sample.id}: invalid and blank active field recover without false numeric output`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto(`${calc.fullPath}?${query({...sample.input,...sample.invalid})}`);await error(page);
   await page.goto(`${calc.fullPath}?${query(sample.input)}`);await primary(page,locale,sample.expected);
   await page.getByTestId(`field-${sample.active}`).fill('');await error(page);
   await page.getByTestId(`field-${sample.active}`).fill(String(sample.input[sample.active]));await primary(page,locale,sample.expected);await native(page,locale);expect(errors).toEqual([]);
  });
  test(`${locale} ${sample.id}: fixed-unit labels and actual share reload omit unknown fields`,async({page})=>{
   await captureShare(page);await page.goto(`${calc.fullPath}?${query(sample.input)}`);await primary(page,locale,sample.expected);
   // Numeric units are displayed beside controls; textarea units are in Fields and units.
   if(sample.id==='resistor-network'||sample.id==='capacitor-network')await expect(page.locator('main')).toContainText(unit(sample.unit,locale));
   else await expect(page.getByTestId(`field-label-${sample.active}`)).toContainText(`(${unit(sample.unit,locale)})`);
   const shared=await shareUrl(page),params=new URL(shared).searchParams;expect(params.get(sample.active)).toBe(sharedActive[sample.id]);
   if(sample.id==='capacitor-basics')expect(params.has('q')).toBe(false);
   if(sample.id==='kva-kw')expect(params.has('kw')).toBe(false);
   if(sample.id==='single-phase')expect(params.has('power')).toBe(false);
   await page.goto(shared);await primary(page,locale,sample.expected);await page.reload();await primary(page,locale,sample.expected);await knownFields(page,sample.id,String(sample.input.mode??''));await native(page,locale);
  });
 }
 for(const sample of alternatives)for(const locale of locales)test(`${locale} ${sample.id}: ${sample.name}, known fieldset and mode reload`,async({page})=>{
  const calc=getCalculatorById(sample.id,locale)!;await page.goto(`${calc.fullPath}?${query(sample.input)}`);await primary(page,locale,sample.expected);await rows(page,locale,sample.rows);await knownFields(page,sample.id,String(sample.input.mode));await native(page,locale);await page.reload();await primary(page,locale,sample.expected);
 });
 for(const locale of locales){
  test(`${locale} battery-charge-time: charge retention changes source Ah and partial charge`,async({page})=>{
   const calc=getCalculatorById('battery-charge-time',locale)!;await page.goto(`${calc.fullPath}?${query({capacityAh:100,currentA:10,efficiency:80})}`);await primary(page,locale,12); //12h30min is a duration, not12h.
   const minute=locale==='uk'?'хв':locale==='ru'?'мин':'min';await expect(page.getByTestId('calc-result-primary')).toContainText(`30 ${minute}`);await rows(page,locale,[{index:0,expected:12.5},{index:2,expected:125}]);
   await page.getByTestId('field-efficiency').fill('100');await page.getByTestId('field-capacityAh').fill('50');await primary(page,locale,5);await page.getByTestId('field-currentA').fill('0');await error(page);await native(page,locale);
  });
  test(`${locale} battery-runtime: minutes carry and tiny positive energy`,async({page})=>{
   const calc=getCalculatorById('battery-runtime',locale)!;await page.goto(`${calc.fullPath}?${query({capacity:1.999,voltage:1,load:1,dod:100,efficiency:100})}`);await primary(page,locale,2);
   const h=locale==='ru'?'ч':locale==='uk'?'год':'h',m=locale==='ru'?'мин':locale==='uk'?'хв':'min';await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(`2 ${h} 0 ${m}`);
   await page.getByTestId('field-capacity').fill('0.001');await primary(page,locale,.001);await rows(page,locale,[{index:1,expected:.001}]);await native(page,locale);
  });
  test(`${locale} battery-series-parallel: raw fractional counts and nominal energy identity`,async({page})=>{
   const calc=getCalculatorById('battery-series-parallel',locale)!;await page.goto(`${calc.fullPath}?${query({cells:12,series:4,parallel:3,cellVoltage:3.7,cellCapacity:3.4})}`);await primary(page,locale,14.8);await rows(page,locale,[{index:1,expected:150.96}]);
   await page.getByTestId('field-cells').fill('12.00000000000000001');await error(page);await expect(page.getByTestId('field-error-cells')).toBeVisible();await page.getByTestId('field-cells').fill('12');await primary(page,locale,14.8);
   await page.getByTestId('field-series').fill('3');await error(page);await page.getByTestId('field-parallel').fill('4');await primary(page,locale,11.1);await rows(page,locale,[{index:1,expected:150.96}]);await native(page,locale);
  });
  test(`${locale} resistor-network: decimal-comma rating, minimum count and overflow error`,async({page})=>{
   const calc=getCalculatorById('resistor-network',locale)!;await page.goto(`${calc.fullPath}?${query({mode:'series',resistances:'4,7; 4,7'})}`);await primary(page,locale,9.4);
   await page.getByTestId('field-resistances').fill('100');await error(page);await page.getByTestId('field-resistances').fill('1e308 1e308');await error(page);
   await page.getByTestId('field-mode').selectOption('parallel');await primary(page,locale,5e307);await native(page,locale);
  });
  test(`${locale} capacitor-network: decimal-point microfarads and legacy comma separator`,async({page})=>{
   const calc=getCalculatorById('capacitor-network',locale)!;await page.goto(`${calc.fullPath}?${query({mode:'parallel',capacitances:'0.1; 0.1'})}`);await primary(page,locale,.2);
   await page.getByTestId('field-capacitances').fill('0,1');await error(page);await page.getByTestId('field-capacitances').fill('100,220');await primary(page,locale,320);
   await page.getByTestId('field-mode').selectOption('series');await primary(page,locale,68.75);await page.getByTestId('field-capacitances').fill('0.1');await primary(page,locale,.1);await native(page,locale);
  });
  test(`${locale} capacitor-basics: all fieldsets, signed/zero charge and tiny field energy`,async({page})=>{
   const calc=getCalculatorById('capacitor-basics',locale)!;await page.goto(`${calc.fullPath}?${query({mode:'charge',c:100,v:12})}`);await primary(page,locale,1200);await rows(page,locale,[{index:0,expected:.0072}]);
   await page.getByTestId('field-v').fill('0');await primary(page,locale,0);await page.getByTestId('field-mode').selectOption('capacitance');await knownFields(page,'capacitor-basics','capacitance');await error(page);
   await page.getByTestId('field-v').fill('-12');await page.getByTestId('field-q').fill('-1200');await primary(page,locale,100);await page.getByTestId('field-q').fill('1200');await error(page);
   await page.goto(`${calc.fullPath}?${query({mode:'charge',c:.0001,v:.01})}`);
   await expect.poll(async()=>displayedNumber(await page.getByTestId('calc-result-row-0').locator('dd').innerText(),locale)).toBeGreaterThan(0);
   const actual=displayedNumber(await page.getByTestId('calc-result-row-0').locator('dd').innerText(),locale);expect(Math.abs(actual/5e-15-1)).toBeLessThan(.00055);await native(page,locale);
  });
  test(`${locale} kva-kw: unity PF, Q triangle and negative magnitude boundary`,async({page})=>{
   const calc=getCalculatorById('kva-kw',locale)!;await page.goto(`${calc.fullPath}?${query({mode:'kw',kva:5,pf:.8})}`);await primary(page,locale,4);await rows(page,locale,[{index:0,expected:3}]);
   await page.getByTestId('field-pf').fill('1');await primary(page,locale,5);await rows(page,locale,[{index:0,expected:0}]);await page.getByTestId('field-kva').fill('-5');await error(page);
   await page.getByTestId('field-kva').fill('0');await primary(page,locale,0);await page.getByTestId('field-mode').selectOption('kva');await knownFields(page,'kva-kw','kva');await page.getByTestId('field-kw').fill('10');await page.getByTestId('field-pf').fill('0.8');await primary(page,locale,12.5);await native(page,locale);
  });
  test(`${locale} single-phase: RMS units, inverse, unity and zero passive load`,async({page})=>{
   const calc=getCalculatorById('single-phase',locale)!;await page.goto(`${calc.fullPath}?${query({mode:'P',voltage:230,current:8,powerFactor:1})}`);await primary(page,locale,1840);await rows(page,locale,[{index:1,expected:0}]);
   await page.getByTestId('field-current').fill('0');await primary(page,locale,0);await page.getByTestId('field-current').fill('-1');await error(page);
   await page.getByTestId('field-mode').selectOption('current');await knownFields(page,'single-phase','current');await page.getByTestId('field-power').fill('1656');await page.getByTestId('field-powerFactor').fill('0.9');await primary(page,locale,8);await native(page,locale);
  });
 }
});
