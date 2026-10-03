import {expect,test,type Page} from '@playwright/test';
// Independent fixed arithmetic and Unicode examples; no compute/registry imports.
const routes={
  "gpa": {
    "ru": "/ru/education/gpa/",
    "en": "/en/education/gpa-calculator/",
    "uk": "/uk/navchannya/seredniy-bal/",
    "de": "/de/lernen/notendurchschnitt-rechner/",
    "es": "/es/estudios/nota-media-ponderada/"
  },
  "final-grade": {
    "ru": "/ru/education/final-grade/",
    "en": "/en/education/final-grade-calculator/",
    "uk": "/uk/navchannya/potribna-otsinka/",
    "de": "/de/lernen/endnote-rechner/",
    "es": "/es/estudios/calculadora-de-nota-final/"
  },
  "test-score-percent": {
    "ru": "/ru/education/test-score-percent/",
    "en": "/en/education/test-score-percentage-calculator/",
    "uk": "/uk/navchannya/vidsotok-za-test/",
    "de": "/de/lernen/testergebnis-prozent/",
    "es": "/es/estudios/porcentaje-de-acierto-en-un-test/"
  },
  "reading-speed": {
    "ru": "/ru/education/reading-speed/",
    "en": "/en/education/reading-speed-calculator/",
    "uk": "/uk/navchannya/shvydkist-chytannya/",
    "de": "/de/lernen/lesegeschwindigkeit-test/",
    "es": "/es/estudios/velocidad-de-lectura/"
  },
  "text-reading-time": {
    "ru": "/ru/education/text-reading-time/",
    "en": "/en/education/reading-time-calculator/",
    "uk": "/uk/navchannya/chas-chytannya-tekstu/",
    "de": "/de/lernen/lesedauer-rechner/",
    "es": "/es/estudios/tiempo-de-lectura/"
  },
  "text-word-char-count": {
    "ru": "/ru/computers/text-word-char-count/",
    "en": "/en/computers/word-and-character-counter/",
    "uk": "/uk/kompyutery/lichylnyk-sliv-i-symvoliv/",
    "de": "/de/computer/zeichenzaehler/",
    "es": "/es/informatica/contador-de-palabras-y-caracteres/"
  }
} as const;

const locales=['ru','en','uk','de','es']as const;
type Locale=typeof locales[number];type Id=keyof typeof routes;
type Sample={id:Id;input:Record<string,string|number>;expected:number;active:string;invalid:string;};
const samples:Sample[]=[
 {id:'gpa',input:{grades:'5 3\n4 4\n3 2'},expected:4.1111,active:'grades',invalid:'5 -1'},
 {id:'final-grade',input:{current:80,target:85,weight:30},expected:96.67,active:'current',invalid:'101'},
 {id:'test-score-percent',input:{correct:18,total:20,passMark:60},expected:90,active:'correct',invalid:'18.000000000000001'},
 {id:'reading-speed',input:{words:3000,minutes:12,bookWords:100000},expected:250,active:'words',invalid:'3000.00000000000001'},
 {id:'text-reading-time',input:{mode:'words',words:1200,wpm:200,speechWpm:130},expected:6,active:'words',invalid:'1200.0000000000001'},
 {id:'text-word-char-count',input:{text:'größer résumé español З’їж м’яких'},expected:5,active:'text',invalid:' '},
];
const q=(input:Record<string,string|number>)=>new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)]));
function number(text:string,locale:Locale){const token=text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];if(!token)return Number.NaN;const raw=token.replace(/[\s\u00a0\u202f]/g,'').replace('−','-');return Number(locale==='en'?raw.replaceAll(',',''):raw.replaceAll('.','').replace(',','.'));}
async function primary(page:Page,locale:Locale,n:number){await expect.poll(async()=>number((await page.getByTestId('calc-result-primary').allTextContents())[0]??'',locale)).toBeCloseTo(n,3);}
async function error(page:Page){await expect.poll(async()=>await page.locator('[data-testid^="field-error-"]:visible').count()>0||await page.getByTestId('calc-result-invalid').count()>0||(await page.getByTestId('calc-result-primary').allTextContents()).some(t=>t.trim()==='—')).toBe(true);}
async function native(page:Page,locale:Locale){await expect(page.getByTestId('calc-result-wrap')).not.toContainText(/NaN|Infinity|undefined/);if(locale!=='ru')await expect(page.getByTestId('calc-result-wrap')).not.toContainText(locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u);}
async function share(page:Page){await page.getByTestId('calc-share-btn').click();await expect.poll(async()=>page.evaluate(()=>(window as Window&{educationLink?:string}).educationLink??'')).not.toBe('');return page.evaluate(()=>(window as Window&{educationLink?:string}).educationLink!);}
const setupClipboard=async(page:Page)=>page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(value:string)=>{(window as Window&{educationLink?:string}).educationLink=value;}}}));
for(const width of [390,1365])test.describe(`${width}px education`,()=>{
 test.use({viewport:{width,height:900}});
 for(const sample of samples)for(const locale of locales){
  test(`${sample.id}/${locale} independent result, native copy, reload and width`,async({page})=>{
   const faults:string[]=[];page.on('pageerror',e=>faults.push(e.message));await page.goto(`${routes[sample.id][locale]}?${q(sample.input)}`);await primary(page,locale,sample.expected);await native(page,locale);
   await expect(page.locator('#details')).toBeVisible();expect(await page.locator('#faq details').count()).toBeGreaterThanOrEqual(4);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
   await page.reload();await primary(page,locale,sample.expected);expect(faults).toEqual([]);
  });
  test(`${sample.id}/${locale} actual invalid field recovers without plausible result`,async({page})=>{
   await page.goto(`${routes[sample.id][locale]}?${q(sample.input)}`);await primary(page,locale,sample.expected);await page.getByTestId(`field-${sample.active}`).fill(sample.invalid);await error(page);await native(page,locale);
   const numeric=await page.getByTestId('calc-result-primary').allTextContents();expect(numeric.every(t=>t.trim()==='—')).toBe(true);
   await page.getByTestId(`field-${sample.active}`).fill(String(sample.input[sample.active]));await primary(page,locale,sample.expected);await native(page,locale);
  });
  test(`${sample.id}/${locale} explicit clipboard URL reproduces visible data after reload`,async({page})=>{
   await setupClipboard(page);await page.goto(`${routes[sample.id][locale]}?${q(sample.input)}`);await primary(page,locale,sample.expected);
   const visible:Record<string,string>={};for(const field of await page.locator('[data-testid^="field-"]').all()){const tag=await field.evaluate(el=>el.tagName);if(['INPUT','TEXTAREA','SELECT'].includes(tag)&&await field.isVisible())visible[(await field.getAttribute('data-testid'))!]=await field.inputValue();}
   const link=await share(page),url=new URL(link);expect(url.pathname).toBe(routes[sample.id][locale]);expect(url.hash).toBe('#calculator');
   await page.goto(link);await primary(page,locale,sample.expected);for(const[key,value]of Object.entries(visible))await expect(page.getByTestId(key)).toHaveValue(value);
   await page.reload();await primary(page,locale,sample.expected);await native(page,locale);
  });
 }
 for(const locale of locales){
  test(`${locale} reading preserves half word per minute and two-minute book duration`,async({page})=>{
   await page.goto(`${routes['reading-speed'][locale]}?${q({words:1,minutes:2,bookWords:1})}`);await primary(page,locale,.5);
   await expect.poll(async()=>number((await page.getByTestId('calc-result-row-0').locator('dd').allTextContents())[0]??'',locale)).toBe(30);
   await expect.poll(async()=>number((await page.getByTestId('calc-result-row-2').locator('dd').allTextContents())[0]??'',locale)).toBe(2);await native(page,locale);
  });
  test(`${locale} exact threshold comparison does not use rounded score`,async({page})=>{
   await page.goto(`${routes['test-score-percent'][locale]}?${q({correct:5,total:6,passMark:'83.33333333333334'})}`);await primary(page,locale,83.33);
   const failed=['Тест не сдан','Not passed','Тест не складено','Nicht bestanden','Test no superado'][locales.indexOf(locale)];
   await expect(page.getByTestId('calc-result-wrap')).toContainText(failed);await native(page,locale);
  });
  test(`${locale} Unicode text mode ignores inactive fractional count and retains five words`,async({page})=>{
   await page.goto(`${routes['text-reading-time'][locale]}?${q({mode:'text',words:'3.5',text:'größer résumé español З’їж м’яких',wpm:60,speechWpm:60})}`);await primary(page,locale,0);
   await expect(page.getByTestId('calc-result-primary')).toContainText('5');await expect(page.getByTestId('field-words')).toHaveCount(0);await expect(page.getByTestId('field-text')).toBeVisible();await native(page,locale);
  });
 }
});
