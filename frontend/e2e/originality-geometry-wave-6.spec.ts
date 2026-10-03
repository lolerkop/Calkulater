import { expect, test, type Page } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

// Independent analytical literals; no production compute function supplies expectations.
type Input = Record<string,string|number>;
type Row = {index:number;expected:number};
type Sample = {id:string;input:Input;expected:number;invalid:Input;active:string;rows?:Row[]};
const normal:Sample[]=[
 {id:'geom-circle',input:{unit:'cm',mode:'radius',r:3},expected:28.274,invalid:{r:0},active:'r',rows:[{index:0,expected:3},{index:1,expected:6},{index:2,expected:18.85}]},
 {id:'geom-square',input:{unit:'cm',mode:'side',side:5},expected:25,invalid:{side:0},active:'side',rows:[{index:0,expected:5},{index:1,expected:20},{index:2,expected:7.071}]},
 {id:'geom-rectangle',input:{unit:'cm',mode:'sides',a:8,b:3},expected:24,invalid:{b:0},active:'a',rows:[{index:2,expected:22},{index:3,expected:8.544}]},
 {id:'geom-triangle',input:{unit:'cm',mode:'sss',a:3,b:4,c:5},expected:6,invalid:{a:1,b:2,c:3},active:'a',rows:[{index:0,expected:12}]},
 {id:'geom-right-triangle',input:{unit:'cm',mode:'legs',a:3,b:4},expected:5,invalid:{b:0},active:'a',rows:[{index:0,expected:6},{index:1,expected:12}]},
 {id:'geom-parallelogram',input:{unit:'cm',mode:'height',a:10,h:6},expected:60,invalid:{h:0},active:'a'},
 // Horizontal projections3 each:3²+4²=5²; S=(8+2)×4/2=20; P=8+2+5+5=20.
 {id:'geom-trapezoid',input:{unit:'cm',a:8,b:2,h:4,c:5,d:5},expected:20,invalid:{a:10,b:6},active:'a',rows:[{index:0,expected:5},{index:1,expected:20}]},
 {id:'geom-rhombus',input:{unit:'cm',d1:6,d2:8},expected:24,invalid:{d1:0},active:'d1',rows:[{index:0,expected:5},{index:1,expected:20},{index:2,expected:4.8}]},
];
// The seven null entries equal published field defaults; share URLs omit them.
// The corrected trapezoid uses a=8 instead of the default10, so it stays explicit.
const sharedActive:Record<string,string|null>={
 'geom-circle':null,'geom-square':null,'geom-rectangle':null,'geom-triangle':null,
 'geom-right-triangle':null,'geom-parallelogram':null,'geom-trapezoid':'8','geom-rhombus':null,
};
const inverse:Array<{id:string;name:string;input:Input;expected:number;rows?:Row[]}>= [
 {id:'geom-circle',name:'diameter',input:{unit:'m',mode:'diameter',d:10},expected:78.54,rows:[{index:0,expected:5}]},
 {id:'geom-circle',name:'circumference',input:{unit:'m',mode:'circumference',c:31.41592653589793},expected:78.54,rows:[{index:0,expected:5}]},
 {id:'geom-circle',name:'area with squared units',input:{unit:'m',mode:'area',area:78.53981633974483},expected:78.54,rows:[{index:0,expected:5}]},
 {id:'geom-square',name:'area',input:{unit:'m',mode:'area',area:49},expected:49,rows:[{index:0,expected:7},{index:1,expected:28}]},
 {id:'geom-square',name:'perimeter',input:{unit:'m',mode:'perimeter',perimeter:24},expected:36,rows:[{index:0,expected:6},{index:1,expected:24}]},
 {id:'geom-rectangle',name:'area and one side',input:{unit:'m',mode:'areaSide',area:30,a:6},expected:30,rows:[{index:1,expected:5},{index:2,expected:22}]},
 {id:'geom-triangle',name:'base and perpendicular height',input:{unit:'m',mode:'baseHeight',base:10,height:4},expected:20},
 {id:'geom-right-triangle',name:'leg and hypotenuse',input:{unit:'m',mode:'legHyp',a:5,c:13},expected:12,rows:[{index:0,expected:30},{index:1,expected:30}]},
 {id:'geom-parallelogram',name:'two sides and right angle',input:{unit:'m',mode:'sides',a:3,b:4,angle:90},expected:12,rows:[{index:0,expected:14},{index:1,expected:4},{index:2,expected:5},{index:3,expected:5}]},
];
const viewports=[{width:390,height:844},{width:1365,height:900}];
const query=(input:Input)=>new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)]));
function displayedNumber(text:string,locale:string):number{
 const numericText=(s:string)=>{
  const compact=s.replace(/[\s\u00a0\u202f]/g,'').replace('−','-');
  return Number(locale==='en'?compact.replaceAll(',',''):compact.replaceAll('.','').replace(',','.'));
 };
 const scientific=text.match(/([-−]?\d[\d\s\u00a0\u202f.,]*)·10\^(-?\d+)/);
 if(scientific)return numericText(scientific[1])*10**Number(scientific[2]);
 const token=text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
 // An error result briefly remains visible while a repaired field recomputes.
 // NaN fails the unchanged numeric matcher and lets expect.poll retry.
 return token?numericText(token):Number.NaN;
}
async function primary(page:Page,locale:string,expected:number){
 await expect(page.getByTestId('calc-result-primary')).toBeVisible();
 await expect.poll(async()=>displayedNumber(await page.getByTestId('calc-result-primary').innerText(),locale)).toBeCloseTo(expected,3);
}
async function rows(page:Page,locale:string,expected:Row[]=[]){
 for(const r of expected)await expect.poll(async()=>displayedNumber(await page.getByTestId(`calc-result-row-${r.index}`).locator('dd').innerText(),locale)).toBeCloseTo(r.expected,3);
}
async function error(page:Page){
 await expect.poll(async()=>await page.locator('[data-testid^="field-error-"]:visible').count()>0 || (await page.getByTestId('calc-result-primary').allTextContents()).some(s=>s.trim()==='—')).toBe(true);
 await expect(page.locator('main')).not.toContainText(/NaN|Infinity|undefined/);
}
async function native(page:Page,locale:string){
 await expect(page.getByTestId('calc-result')).not.toContainText(/NaN|Infinity|undefined/);
 if(locale!=='ru')await expect(page.getByTestId('calc-result')).not.toContainText(locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u);
}
async function layout(page:Page,width:number){
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
 const secondary=page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]');
 for(const row of await secondary.all()){
  const dt=await row.locator('dt').boundingBox(),dd=await row.locator('dd').boundingBox();
  expect(dt).not.toBeNull();expect(dd).not.toBeNull();
  if(width===390){expect(dt!.width).toBeGreaterThanOrEqual(240);expect(dd!.width).toBeGreaterThanOrEqual(240);expect(dd!.y).toBeGreaterThanOrEqual(dt!.y+dt!.height-1);}
  else{expect(dt!.width).toBeGreaterThanOrEqual(140);expect(dd!.width).toBeGreaterThanOrEqual(160);}
 }
}
async function captureShare(page:Page){
 await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as Window&{geometryShare?:string}).geometryShare=text;}}}));
}
async function shareUrl(page:Page):Promise<string>{
 await page.getByTestId('calc-share-btn').click();await expect.poll(async()=>page.evaluate(()=>(window as Window&{geometryShare?:string}).geometryShare??'')).not.toBe('');
 return page.evaluate(()=>(window as Window&{geometryShare?:string}).geometryShare!);
}

for(const viewport of viewports)test.describe(`${viewport.width}px geometry`,()=>{
 test.use({viewport});
 for(const sample of normal)for(const locale of locales){
  const calculator=getCalculatorById(sample.id,locale);if(!calculator)throw new Error(`Missing geometry URL ${sample.id}/${locale}`);
  for(const key of Object.keys(sample.input))if(!calculator.fields.some(f=>f.name===key))throw new Error(`Unknown fixture field ${sample.id}/${key}`);
  test(`${locale} ${sample.id}: independent normal values, authored body and reload`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto(`${calculator.fullPath}?${query(sample.input)}`);await primary(page,locale,sample.expected);await rows(page,locale,sample.rows);
   await expect(page.locator('main')).toContainText(calculator.seoContent!.howItWorks);await expect(page.locator('main')).toContainText(calculator.seoContent!.example);
   await native(page,locale);await layout(page,viewport.width);
   await page.reload();await primary(page,locale,sample.expected);await rows(page,locale,sample.rows);expect(errors).toEqual([]);
  });
  test(`${locale} ${sample.id}: invalid geometry and blank field show recoverable errors`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto(`${calculator.fullPath}?${query({...sample.input,...sample.invalid})}`);await error(page);
   await page.goto(`${calculator.fullPath}?${query(sample.input)}`);await primary(page,locale,sample.expected);
   await page.getByTestId(`field-${sample.active}`).fill('');await error(page);
   await page.getByTestId(`field-${sample.active}`).fill(String(sample.input[sample.active]));await primary(page,locale,sample.expected);await native(page,locale);expect(errors).toEqual([]);
  });
  test(`${locale} ${sample.id}: unit selection changes interpretation and actual share reload`,async({page})=>{
   await captureShare(page);await page.goto(`${calculator.fullPath}?${query(sample.input)}`);await primary(page,locale,sample.expected);
   const cm=locale==='ru'||locale==='uk'?'см':'cm';await expect(page.getByTestId(`field-label-${sample.active}`)).toContainText(`(${cm})`);
   await page.getByTestId('field-unit').selectOption('m');await primary(page,locale,sample.expected);
   const m=locale==='ru'||locale==='uk'?'м':'m';await expect(page.getByTestId(`field-label-${sample.active}`)).toContainText(`(${m})`);
   await expect(page.getByTestId('calc-result-primary')).toContainText(sample.id==='geom-right-triangle'?` ${m}`:` ${m}²`);
   const shared=await shareUrl(page);const params=new URL(shared).searchParams;expect(params.get('unit')).toBe('m');expect(params.get(sample.active)).toBe(sharedActive[sample.id]);
   await page.goto(shared);await primary(page,locale,sample.expected);await expect(page.getByTestId(`field-${sample.active}`)).toHaveValue(String(sample.input[sample.active]));
   await page.reload();await primary(page,locale,sample.expected);await expect(page.getByTestId(`field-${sample.active}`)).toHaveValue(String(sample.input[sample.active]));await expect(page.getByTestId('field-unit')).toHaveValue('m');await native(page,locale);
  });
 }
 for(const sample of inverse)for(const locale of locales)test(`${locale} ${sample.id}: mode ${sample.name} with independent inverse value`,async({page})=>{
  const calculator=getCalculatorById(sample.id,locale)!;await page.goto(`${calculator.fullPath}?${query(sample.input)}`);await primary(page,locale,sample.expected);await rows(page,locale,sample.rows);await native(page,locale);
  if(sample.input.mode==='area'){const m=locale==='ru'||locale==='uk'?'м':'m';await expect(page.getByTestId('field-label-area')).toContainText(`(${m}²)`);}
  if(sample.id==='geom-triangle'){for(const name of ['a','b','c'])await expect(page.getByTestId(`field-${name}`)).toHaveCount(0);await expect(page.getByTestId('calc-result')).not.toContainText(locale==='ru'?'Периметр':locale==='uk'?'Периметр':locale==='de'?'Umfang':locale==='es'?'Perímetro':'Perimeter');}
  if(sample.id==='geom-right-triangle'){await expect(page.getByTestId('field-b')).toHaveCount(0);await expect(page.getByTestId('field-c')).toBeVisible();}
  await page.reload();await primary(page,locale,sample.expected);
 });
 for(const locale of locales){
  test(`${locale} geom-triangle: exact3-4-5, obtuse, invalid inequality and both known fieldsets`,async({page})=>{
   const calculator=getCalculatorById('geom-triangle',locale)!;
   await page.goto(`${calculator.fullPath}?${query({unit:'m',mode:'sss',a:3,b:4,c:5})}`);await primary(page,locale,6);await rows(page,locale,[{index:0,expected:12}]);
   await expect(page.getByTestId('calc-form').locator('input')).toHaveCount(3);for(const n of ['base','height'])await expect(page.getByTestId(`field-${n}`)).toHaveCount(0);
   await page.getByTestId('field-c').fill('6');await primary(page,locale,5.333); //S=√(6.5×3.5×2.5×.5)=√28.4375.
   await page.getByTestId('field-mode').selectOption('baseHeight');for(const n of ['a','b','c'])await expect(page.getByTestId(`field-${n}`)).toHaveCount(0);
   await expect(page.getByTestId('calc-form').locator('input')).toHaveCount(2);await page.getByTestId('field-base').fill('6');await page.getByTestId('field-height').fill('4');await primary(page,locale,12);
   await page.getByTestId('field-mode').selectOption('sss');await primary(page,locale,5.333);await page.getByTestId('field-c').fill('7');await error(page);await native(page,locale);
  });
  test(`${locale} geom-trapezoid: corrected geometry, inconsistent legs and optional zero pair`,async({page})=>{
   const calculator=getCalculatorById('geom-trapezoid',locale)!;
   await page.goto(`${calculator.fullPath}?${query({unit:'m',a:8,b:2,h:4,c:5,d:5})}`);await primary(page,locale,20);await rows(page,locale,[{index:0,expected:5},{index:1,expected:20}]);
   await page.getByTestId('field-a').fill('10');await page.getByTestId('field-b').fill('6');await error(page);
   await page.getByTestId('field-c').fill('0');await page.getByTestId('field-d').fill('0');await primary(page,locale,32);await expect(page.getByTestId('calc-result-row-1')).toHaveCount(0);
   await page.getByTestId('field-c').fill('5');await error(page);await page.getByTestId('field-c').fill('0');await primary(page,locale,32);await native(page,locale);
  });
  test(`${locale} geom-parallelogram: small positive angle and diagonal remain nonzero`,async({page})=>{
   const calculator=getCalculatorById('geom-parallelogram',locale)!;await page.goto(`${calculator.fullPath}?${query({unit:'m',mode:'sides',a:1,b:1,angle:.0000001})}`);
   const expected=1.7453292519943295e-9;
   for(const testId of ['calc-result-primary','calc-result-row-3'])await expect.poll(async()=>{
    const text=testId==='calc-result-primary'?await page.getByTestId(testId).innerText():await page.getByTestId(testId).locator('dd').innerText();return displayedNumber(text,locale);
   }).toBeGreaterThan(0);
   const area=displayedNumber(await page.getByTestId('calc-result-primary').innerText(),locale);expect(Math.abs(area/expected-1)).toBeLessThan(.00055);
   await page.getByTestId('field-angle').fill('0');await error(page);await native(page,locale);
  });
 }
});
