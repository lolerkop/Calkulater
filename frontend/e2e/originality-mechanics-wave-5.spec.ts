import { expect, test, type Page } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

// Literal expectations are elementary analytical cases, never obtained from
// the production compute functions. Unit expectations are explicit SI symbols.
type Input = Record<string, string | number>;
type RowExpectation = { index: number; expected: number };
type MechanicalCase = {
  id: string; input: Input; expected: number; invalid: Input;
  units: Record<string, string>; rows?: RowExpectation[];
};
const cases: MechanicalCase[] = [
  // Two triangles under |v(t)|: path20m, while signed displacement is0m.
  { id:'acceleration', input:{mode:'a',v0:10,v:-10,t:4}, expected:-5, invalid:{t:0},
    units:{v0:'m/s',v:'m/s',t:'s'}, rows:[{index:1,expected:20},{index:2,expected:0}] },
  { id:'newton-force', input:{mode:'F',m:10,a:2}, expected:20, invalid:{m:0},
    units:{m:'kg',a:'m/s²'} },
  // Signed p=3×(-4); one-axis energy=3×16/2, always nonnegative.
  { id:'momentum', input:{mode:'p',m:3,v:-4}, expected:-12, invalid:{m:0},
    units:{m:'kg',v:'m/s'}, rows:[{index:3,expected:24}] },
  { id:'work', input:{mode:'W',F:10,s:5,angleDeg:180}, expected:-50, invalid:{angleDeg:181},
    units:{F:'N',s:'m',angleDeg:'°'}, rows:[{index:3,expected:-1}] },
  // r=.3 is distance to the point, not the already perpendicular moment arm.
  { id:'physics-torque', input:{force:50,radius:.3,angle:30}, expected:7.5, invalid:{radius:-.1},
    units:{force:'N',radius:'m',angle:'°'}, rows:[{index:0,expected:.15},{index:1,expected:.5}] },
  { id:'lever-moment', input:{mode:'force2',f1:100,d1:2,d2:.5}, expected:400, invalid:{d2:0},
    units:{f1:'N',d1:'m',d2:'m'}, rows:[{index:0,expected:4},{index:1,expected:200}] },
  { id:'pressure', input:{mode:'p',F:1000,A:2}, expected:500, invalid:{A:0},
    units:{F:'N',A:'m²'} },
  // Gas example:1.2g in1L -> .0012kg/.001m³ =1.2kg/m³ =.0012g/cm³.
  { id:'density', input:{mode:'rho',m:.0012,V:.001}, expected:1.2, invalid:{V:0},
    units:{m:'kg',V:'m³'}, rows:[{index:3,expected:.0012}] },
];
const inverseCases: Array<{id:string;name:string;input:Input;expected:number;rows?:RowExpectation[]}> = [
  {id:'acceleration',name:'negative velocity and acceleration increase speed',input:{mode:'v',v0:-10,a:-5,t:2},expected:-20,rows:[{index:1,expected:30},{index:2,expected:-30}]},
  {id:'newton-force',name:'positive inverse mass',input:{mode:'m',F:20,a2:2},expected:10},
  {id:'newton-force',name:'zero resultant permits zero acceleration',input:{mode:'a',F2:0,m2:4},expected:0},
  {id:'momentum',name:'negative signed velocity',input:{mode:'v',p:-12,m2:3},expected:-4},
  {id:'momentum',name:'same-sign inverse momentum and velocity give positive mass',input:{mode:'m',p2:-18,v2:-9},expected:2},
  {id:'work',name:'negative work at180degrees recovers positive displacement magnitude',input:{mode:'s',F:10,W:-50,angleDeg:180},expected:5,rows:[{index:0,expected:-50}]},
  {id:'lever-moment',name:'positive inverse perpendicular arm',input:{mode:'distance2',f1:100,d1:2,f2:400},expected:.5},
  {id:'pressure',name:'pressure times area gives normal force',input:{mode:'F',p:500,A2:2},expected:1000},
  {id:'pressure',name:'algebraic positive bearing area',input:{mode:'A',F2:2000,p2:100000},expected:.02},
  {id:'density',name:'gas density times SI volume gives mass',input:{mode:'m',rho:1.2,V2:.001},expected:.0012},
  {id:'density',name:'mass over positive density gives SI volume',input:{mode:'V',m2:.0012,rho2:1.2},expected:.001},
];

const cyrillicUnits: Record<string,string> = {
  s:'с',m:'м',kg:'кг',N:'Н',Pa:'Па',J:'Дж',
  'm/s':'м/с','m/s²':'м/с²','m²':'м²','m³':'м³','°':'°',
};
const query = (input: Input) => new URLSearchParams(Object.entries(input).map(([key,value])=>[key,String(value)]));
function displayedNumber(text: string, locale: string): number {
  const token=text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if(!token) throw new Error(`No numeric result in: ${text}`);
  const compact=token.replace(/[\s\u00a0\u202f]/g,'').replace('−','-');
  return Number(locale==='en'?compact.replaceAll(',',''):compact.replaceAll('.','').replace(',','.'));
}
async function expectPrimary(page: Page, locale: string, expected: number) {
  const primary=page.getByTestId('calc-result-primary');
  await expect(primary).toBeVisible();
  // Absolute0.0005 tolerance matches existing three-place ordinary display.
  await expect.poll(async()=>displayedNumber(await primary.innerText(),locale)).toBeCloseTo(expected,3);
}
async function expectRows(page: Page, locale: string, rows: readonly RowExpectation[]=[]) {
  for(const row of rows) await expect.poll(async()=>displayedNumber(
    await page.getByTestId(`calc-result-row-${row.index}`).locator('dd').innerText(),locale)).toBeCloseTo(row.expected,3);
}
async function expectVisibleError(page: Page) {
  await expect.poll(async()=>{
    if(await page.locator('[data-testid^="field-error-"]:visible').count()>0)return true;
    return (await page.getByTestId('calc-result-primary').allTextContents()).some(text=>text.trim()==='—');
  }).toBe(true);
  await expect(page.locator('main')).not.toContainText(/NaN|Infinity|undefined/);
}
async function expectNativeResult(page: Page,locale:string) {
  await expect(page.getByTestId('calc-result')).not.toContainText(/NaN|Infinity|undefined/);
  if(locale!=='ru')await expect(page.getByTestId('calc-result')).not.toContainText(
    locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u);
}

for(const sample of cases) for(const locale of locales) {
  const calculator=getCalculatorById(sample.id,locale);
  if(!calculator)throw new Error(`Missing required released mechanics URL: ${sample.id}/${locale}`);
  for(const key of Object.keys(sample.input))if(!calculator.fields.some(field=>field.name===key))
    throw new Error(`Unknown independent fixture field: ${sample.id}/${key}`);
  test(`${locale} ${sample.id}: independent signed/SI arithmetic and authored copy survive query reload`,async({page})=>{
    const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
    await page.goto(`${calculator.fullPath}?${query(sample.input)}`);
    await expectPrimary(page,locale,sample.expected);await expectRows(page,locale,sample.rows);
    for(const [name,unit] of Object.entries(sample.units)) {
      const native=locale==='ru'||locale==='uk'?cyrillicUnits[unit]:unit;
      await expect(page.getByTestId(`field-${name}`)).toBeVisible();
      await expect(page.getByTestId(`field-label-${name}`)).toContainText(`(${native})`);
    }
    await expect(page.locator('main')).toContainText(calculator.seoContent!.howItWorks);
    await expect(page.locator('main')).toContainText(calculator.seoContent!.example);
    await expectNativeResult(page,locale);
    await page.reload();await expectPrimary(page,locale,sample.expected);await expectRows(page,locale,sample.rows);
    expect(errors).toEqual([]);
  });
  test(`${locale} ${sample.id}: invalid active domain and blank input show errors`,async({page})=>{
    const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
    await page.goto(`${calculator.fullPath}?${query({...sample.input,...sample.invalid})}`);
    await expectVisibleError(page);
    await page.goto(`${calculator.fullPath}?${query(sample.input)}`);
    await expectPrimary(page,locale,sample.expected);
    const active=Object.keys(sample.units)[0];
    await page.getByTestId(`field-${active}`).fill('');
    await expectVisibleError(page);
    await page.getByTestId(`field-${active}`).fill(String(sample.input[active]));
    await expectPrimary(page,locale,sample.expected);await expectNativeResult(page,locale);
    expect(errors).toEqual([]);
  });
}

for(const sample of inverseCases) for(const locale of locales) {
  const calculator=getCalculatorById(sample.id,locale)!;
  for(const key of Object.keys(sample.input))if(!calculator.fields.some(field=>field.name===key))
    throw new Error(`Unknown inverse fixture field: ${sample.id}/${key}`);
  test(`${locale} ${sample.id}: ${sample.name}`,async({page})=>{
    await page.goto(`${calculator.fullPath}?${query(sample.input)}`);
    await expectPrimary(page,locale,sample.expected);await expectRows(page,locale,sample.rows);
    await expectNativeResult(page,locale);
    await page.reload();await expectPrimary(page,locale,sample.expected);
  });
}

for(const locale of locales) {
  test(`${locale} lever-moment: exactly the known field pair is visible in both modes`,async({page})=>{
    const calculator=getCalculatorById('lever-moment',locale)!;
    // Capture only this isolated test page's public share-link write. It lets
    // the test verify the actual visible-input serialization without clipboard
    // permissions or access to the user's clipboard.
    await page.addInitScript(()=>{
      Object.defineProperty(navigator,'clipboard',{configurable:true,value:{
        writeText:async(text:string)=>{(window as Window & {mechanicsShare?:string}).mechanicsShare=text;},
      }});
    });
    await page.goto(`${calculator.fullPath}?${query({mode:'force2',f1:120,d1:3,d2:.4,f2:999})}`);
    await expectPrimary(page,locale,900); //120×3/.4; hidden stored f2=999 cannot masquerade as computed900.
    await expect(page.getByTestId('field-f2')).toHaveCount(0);
    await expect(page.getByTestId('field-d2')).toBeVisible();
    await expect(page.getByTestId('calc-form').locator('input')).toHaveCount(3);
    await page.getByTestId('field-mode').selectOption('distance2');
    await expect(page.getByTestId('field-f2')).toBeVisible();
    await expect(page.getByTestId('field-d2')).toHaveCount(0);
    await page.getByTestId('field-f2').fill('720');
    await expectPrimary(page,locale,.5); //120×3/720; hidden saved d2=.4 cannot appear as computed.5.
    await expect(page.getByTestId('calc-form').locator('input')).toHaveCount(3);
    await page.getByTestId('field-mode').selectOption('force2');
    await expect(page.getByTestId('field-d2')).toBeVisible();
    await expect(page.getByTestId('field-f2')).toHaveCount(0);
    // Mode changes keep the form's known-input drafts in this session.
    await expectPrimary(page,locale,900);
    await page.getByTestId('field-mode').selectOption('distance2');
    await expectPrimary(page,locale,.5);
    await page.getByTestId('calc-share-btn').click();
    await expect.poll(async()=>page.evaluate(()=>(window as Window & {mechanicsShare?:string}).mechanicsShare??'')).not.toBe('');
    const shared=await page.evaluate(()=>(window as Window & {mechanicsShare?:string}).mechanicsShare!);
    const params=new URL(shared).searchParams;
    expect(params.get('mode')).toBe('distance2');expect(params.get('f2')).toBe('720');
    expect(params.has('d2')).toBe(false); // Unknown target is not a shared input.
    await page.goto(shared);await expectPrimary(page,locale,.5);
    await page.reload();await expectPrimary(page,locale,.5);
    await expect(page.getByTestId('field-mode')).toHaveValue('distance2');
    await expect(page.getByTestId('field-f2')).toHaveValue('720');
    await expect(page.getByTestId('field-d2')).toHaveCount(0);
  });
  test(`${locale} pressure: mean-pressure units add no ambient reference and reject negative supplied pressure`,async({page})=>{
    const calculator=getCalculatorById('pressure',locale)!;
    await page.goto(`${calculator.fullPath}?${query({mode:'p',F:0,A:2})}`);
    await expectPrimary(page,locale,0);await expectRows(page,locale,[{index:3,expected:0}]);
    await page.goto(`${calculator.fullPath}?${query({mode:'p',F:101325,A:1})}`);
    await expectPrimary(page,locale,101325);await expectRows(page,locale,[{index:3,expected:1}]);
    // Negative gauge values can exist physically. This nonnegative mechanical
    // mean-pressure form does not promise to convert their reference to absolute.
    await page.goto(`${calculator.fullPath}?${query({mode:'F',p:-20000,A2:1})}`);
    await expectVisibleError(page);
    const referenceFaq=calculator.seoContent!.faq[1];
    await expect(page.locator('main')).toContainText(referenceFaq.a);
  });
  test(`${locale} work: exact right angle gives zero forward work and cannot determine inverse displacement`,async({page})=>{
    const calculator=getCalculatorById('work',locale)!;
    await page.goto(`${calculator.fullPath}?${query({mode:'W',F:10,s:5,angleDeg:90})}`);
    await expectPrimary(page,locale,0);
    await page.goto(`${calculator.fullPath}?${query({mode:'s',F:10,W:0,angleDeg:90})}`);
    await expectVisibleError(page);
  });
}
