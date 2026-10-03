import { expect, test, type Locator, type Page } from '@playwright/test';

// Actual40pre-wave routes; fixed independent numerical expectations.
// Prepared for root coherent snapshot. No compute/runtime imports, live ads,
// analytics or outside network are used to construct expected results.
const routes = {
  "photon-energy": {
    "ru": "/ru/physics/energiya-fotona/",
    "en": "/en/physics/photon-energy/",
    "uk": "/uk/fizyka/energiya-fotona/",
    "de": "/de/physik/photonenenergie-rechner/",
    "es": "/es/fisica/energia-de-un-foton/"
  },
  "de-broglie": {
    "ru": "/ru/physics/dlina-volny-de-broylya/",
    "en": "/en/physics/de-broglie-wavelength/",
    "uk": "/uk/fizyka/dovzhyna-hvyli-de-broylya/",
    "de": "/de/physik/de-broglie-wellenlaenge/",
    "es": "/es/fisica/longitud-de-onda-de-de-broglie/"
  },
  "mass-energy": {
    "ru": "/ru/physics/energiya-pokoya/",
    "en": "/en/physics/mass-energy-equivalence/",
    "uk": "/uk/fizyka/energiya-spokoyu/",
    "de": "/de/physik/e-gleich-mc-quadrat/",
    "es": "/es/fisica/equivalencia-masa-energia/"
  },
  "relativity-dilation": {
    "ru": "/ru/physics/zamedlenie-vremeni/",
    "en": "/en/physics/time-dilation/",
    "uk": "/uk/fizyka/spovilnennya-chasu/",
    "de": "/de/physik/zeitdilatation-rechner/",
    "es": "/es/fisica/dilatacion-del-tiempo/"
  },
  "coulomb": {
    "ru": "/ru/physics/zakon-kulona/",
    "en": "/en/physics/coulombs-law/",
    "uk": "/uk/fizyka/zakon-kulona/",
    "de": "/de/physik/coulombsches-gesetz/",
    "es": "/es/fisica/ley-de-coulomb/"
  },
  "half-life": {
    "ru": "/ru/physics/period-poluraspada/",
    "en": "/en/physics/half-life/",
    "uk": "/uk/fizyka/period-napivrozpadu/",
    "de": "/de/physik/halbwertszeit-rechner/",
    "es": "/es/fisica/periodo-de-semidesintegracion/"
  },
  "inverse-square": {
    "ru": "/ru/physics/zakon-obratnyh-kvadratov/",
    "en": "/en/physics/inverse-square-law/",
    "uk": "/uk/fizyka/zakon-obernenyh-kvadrativ/",
    "de": "/de/physik/abstandsquadratgesetz/",
    "es": "/es/fisica/ley-de-la-inversa-del-cuadrado/"
  },
  "wave": {
    "ru": "/ru/physics/wave-frequency/",
    "en": "/en/physics/wave-frequency-calculator/",
    "uk": "/uk/fizyka/khvylya-chastota/",
    "de": "/de/physik/wellenlaenge-frequenz/",
    "es": "/es/fisica/longitud-de-onda-y-frecuencia/"
  }
} as const;
const locales=['ru','en','uk','de','es'] as const;
type Locale=typeof locales[number];type ToolId=keyof typeof routes;
const engineErrorLabels=['Проверьте данные','Check the values','Перевірте дані','Prüfe die Werte','Revisa los datos'] as const;
const enterNumber=['Введите число.','Enter a number.','Введіть число.','Bitte eine Zahl eingeben.','Introduce un número.'] as const;
const modeErrors=['Выберите поддерживаемый режим расчёта','Choose a supported calculation mode','Виберіть підтримуваний режим розрахунку','Wähle einen unterstützten Rechenmodus','Elige un modo de cálculo admitido'] as const;
const below=['Ненулевое значение меньше числового диапазона','A nonzero value is below the numerical range','Ненульове значення менше за числовий діапазон','Ein Wert ungleich null liegt unterhalb des Zahlenbereichs','Un valor distinto de cero queda por debajo del rango numérico'] as const;
const noForce=['Нет силы взаимодействия','No interaction force','Немає сили взаємодії','Keine Wechselwirkungskraft','Sin fuerza de interacción'] as const;
const betaLabels=['Доля скорости света','Fraction of light speed','Частка швидкості світла','Anteil der Lichtgeschwindigkeit','Fracción de la velocidad de la luz'] as const;
const lengthLabels=['Длина от собственной','Fraction of proper length','Частка власної довжини','Anteil der Eigenlänge','Fracción de la longitud propia'] as const;
interface Sample { id:ToolId;input:Record<string,string|number>;primary:number;proofField:string;invalid:Record<string,string|number>;errors:readonly string[]; }
const samples:readonly Sample[]=[
 {id:'photon-energy',input:{wavelengthNm:550},primary:3.612e-19,proofField:'wavelengthNm',invalid:{wavelengthNm:0},errors:['Длина волны должна быть больше нуля','The wavelength must be greater than zero','Довжина хвилі має бути більшою за нуль','Die Wellenlänge muss größer als null sein','La longitud de onda debe ser mayor que cero']},
 {id:'de-broglie',input:{mass27:1,velocityKmS:1},primary:6.626e-10,proofField:'mass27',invalid:{velocityKmS:299792.458},errors:['Скорость массивной частицы должна быть меньше скорости света','A massive particle’s speed must be below light speed','Швидкість масивної частинки має бути меншою за швидкість світла','Die Geschwindigkeit eines massiven Teilchens muss unter der Lichtgeschwindigkeit liegen','La velocidad de una partícula con masa debe ser inferior a la de la luz']},
 {id:'mass-energy',input:{massG:1},primary:8.988e13,proofField:'massG',invalid:{massG:0},errors:['Масса должна быть больше нуля','The mass must be greater than zero','Маса має бути більшою за нуль','Die Masse muss größer als null sein','La masa debe ser mayor que cero']},
 {id:'relativity-dilation',input:{beta:.5,properTime:1},primary:1.155,proofField:'beta',invalid:{beta:1},errors:['Достичь скорости света нельзя: доля должна быть меньше единицы','The speed of light cannot be reached: the fraction must be below one','Досягти швидкості світла не можна: частка має бути меншою за одиницю','Die Lichtgeschwindigkeit lässt sich nicht erreichen: der Bruchteil muss unter eins liegen','No se puede alcanzar la velocidad de la luz: la fracción debe ser menor que uno']},
 {id:'coulomb',input:{q1:1,q2:-1,r:10},primary:8.988e-7,proofField:'r',invalid:{r:0},errors:['Расстояние должно быть больше нуля','The distance must be greater than zero','Відстань має бути більшою за нуль','Der Abstand muss größer als null sein','La distancia debe ser mayor que cero']},
 {id:'half-life',input:{mode:'remaining',n0:100,half:1,t:1},primary:50,proofField:'n0',invalid:{half:0},errors:['Период полураспада должен быть больше нуля','The half-life must be greater than zero','Період напіврозпаду має бути більшим за нуль','Die Halbwertszeit muss größer als null sein','La semivida debe ser mayor que cero']},
 {id:'inverse-square',input:{i1:1000,d1:1,d2:3},primary:111.11,proofField:'d1',invalid:{d2:0},errors:['Новое расстояние должно быть больше нуля','The new distance must be greater than zero','Нова відстань має бути більшою за нуль','Der neue Abstand muss größer als null sein','La nueva distancia debe ser mayor que cero']},
 {id:'wave',input:{mode:'lambda',v:343,f:440,wavelength:777},primary:.7795,proofField:'v',invalid:{f:0},errors:['Частота должна быть больше нуля','The frequency must be greater than zero','Частота має бути більшою за нуль','Die Frequenz muss größer als null sein','La frecuencia debe ser mayor que cero']},
];
// Independently selected authored German model bounds; form notice remains a separate contract.
const expectedGermanLimitations:Record<ToolId,string>={
  "photon-energy": "Die Rechnung umfasst weder Quellenleistung noch Bestrahlungsdauer oder eine Bewertung der Wirkung auf Menschen. Gib eine positive Vakuumwellenlänge ein. Bei einer Wellenlänge innerhalb eines Materials wird zusätzlich dessen Brechungsindex benötigt.",
  "de-broglie": "Alle Ergebnisse gehören zur nichtrelativistischen Näherung. Die Geschwindigkeit muss positiv und kleiner als 299792,458 km/s sein; ein zulässiger Eingabewert belegt noch nicht die Genauigkeit der Näherung.",
  "mass-energy": "Die Einheiten erläutern die Größenordnung; sie bestimmen keine aus Brennstoff gewinnbare Strommenge. Für eine Reaktion ist der Massendefekt Δm nötig, für Strom zusätzlich der Umwandlungswirkungsgrad.",
  "relativity-dilation": "Für zwei Ereignisse an derselben bewegten Uhr wird deren Eigenzeitintervall τ zu t=γτ im Inertialsystem, in dem sich die Uhr mit v bewegt. Gravitation, Beschleunigung und der Ablauf einer Reise werden nicht modelliert.",
  "coulomb": "Implementiert sind Punktladungen im Vakuum. Ein homogenes lineares Dielektrikum erfordert εᵣ, dafür gibt es hier kein Eingabefeld.",
  "half-life": "Die Halbwertszeit bleibt konstant, die Ausgangskomponente wird nicht aufgefüllt; Zerfallsprodukte und ihr weiterer Zerfall werden nicht berechnet.",
  "inverse-square": "Betrachtet wird dieselbe Richtung bei unveränderter Abstrahlung, ohne Absorption oder Reflexionen; nahe einer ausgedehnten Quelle kann das Modell ungeeignet sein. Gib keinen dB-Pegel ein: Er ist logarithmisch und darf nicht mit dem quadratischen Abstandsverhältnis multipliziert werden.",
  "wave": "Es gilt die Phasengeschwindigkeit v=fλ; λ=v/f, f=v/λ und T=1/f. Die Gruppengeschwindigkeit eines Wellenpakets kann abweichen und wird hier nicht berechnet."
};
const primarySource:Record<ToolId,string>={
 'photon-energy':'https://openstax.org/books/university-physics-volume-3/pages/6-2-photoelectric-effect',
 'de-broglie':'https://openstax.org/books/university-physics-volume-3/pages/6-5-de-broglies-matter-waves',
 'mass-energy':'https://openstax.org/books/university-physics-volume-3/pages/5-9-relativistic-energy',
 'relativity-dilation':'https://openstax.org/books/university-physics-volume-3/pages/5-3-time-dilation',
 coulomb:'https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law',
 'half-life':'https://openstax.org/books/university-physics-volume-3/pages/10-3-radioactive-decay',
 'inverse-square':'https://openstax.org/books/university-physics-volume-1/pages/17-3-sound-intensity',
 wave:'https://openstax.org/books/university-physics-volume-1/pages/16-1-traveling-waves',
};
// Index in the static field list, plus physically meaningful unit key.
const staticUnits:Record<ToolId,readonly(readonly[number,string])[]>={
 'photon-energy':[[0,'nm']], 'de-broglie':[[0,'scaledMass'],[1,'kmps']], 'mass-energy':[[0,'g']],
 'relativity-dilation':[[0,'noUnit'],[1,'s']], coulomb:[[0,'nC'],[1,'nC'],[2,'cm']],
 'half-life':[[1,'g'],[2,'years'],[3,'years'],[4,'g']], 'inverse-square':[[0,'intensityUnit'],[1,'lengthUnit'],[2,'lengthUnit']],
 wave:[[1,'mps'],[2,'Hz'],[3,'m']],
};
const units:Record<Locale,Record<string,string>>={
 ru:{nm:'нм',scaledMass:'×10⁻²⁷ кг',kmps:'км/с',g:'г',s:'с',nC:'нКл',cm:'см',years:'лет',intensityUnit:'ед. I₁',lengthUnit:'ед. длины',mps:'м/с',Hz:'Гц',m:'м',noUnit:'без единицы'},
 en:{nm:'nm',scaledMass:'×10⁻²⁷ kg',kmps:'km/s',g:'g',s:'s',nC:'nC',cm:'cm',years:'years',intensityUnit:'units of I₁',lengthUnit:'length unit',mps:'m/s',Hz:'Hz',m:'m',noUnit:'unitless'},
 uk:{nm:'нм',scaledMass:'×10⁻²⁷ кг',kmps:'км/с',g:'г',s:'с',nC:'нКл',cm:'см',years:'років',intensityUnit:'од. I₁',lengthUnit:'од. довжини',mps:'м/с',Hz:'Гц',m:'м',noUnit:'без одиниці'},
 de:{nm:'nm',scaledMass:'×10⁻²⁷ kg',kmps:'km/s',g:'g',s:'s',nC:'nC',cm:'cm',years:'Jahre',intensityUnit:'Einheit von I₁',lengthUnit:'Längeneinheit',mps:'m/s',Hz:'Hz',m:'m',noUnit:'ohne Einheit'},
 es:{nm:'nm',scaledMass:'×10⁻²⁷ kg',kmps:'km/s',g:'g',s:'s',nC:'nC',cm:'cm',years:'años',intensityUnit:'unidad de I₁',lengthUnit:'unidad de longitud',mps:'m/s',Hz:'Hz',m:'m',noUnit:'sin unidad'},
};
test.beforeEach(async({context})=>{
 await context.route('**/*',route=>{
  const url=new URL(route.request().url());return url.protocol==='data:'||url.protocol==='blob:'||['localhost','127.0.0.1','::1'].includes(url.hostname)?route.continue():route.abort();
 });
});
const query=(input:Record<string,string|number>)=>new URLSearchParams(Object.entries(input).map(([k,v])=>[k,String(v)])).toString();
async function visit(page:Page,id:ToolId,locale:Locale,input:Record<string,string|number>){
 await page.goto(`${routes[id][locale]}?${query(input)}`);await expect(page.getByTestId(`calculator-island-${id}`)).toBeVisible();
}
function numericPrefix(text:string,locale:Locale){
 const match=text.trim().replace(/[\u00a0\u202f]/g,'').match(/^[+-]?\d+(?:[.,]\d+)*(?:·10\^[+-]?\d+)?/);
 if(!match)throw new Error(`No numeric prefix: ${text}`);
 return Number((locale==='en'?match[0].replaceAll(',',''):match[0].replace(',','.')).replace('·10^','e'));
}
async function quantity(locator:Locator,locale:Locale,expected:number){
 await expect(locator).toBeVisible();await expect.poll(async()=>numericPrefix(await locator.innerText(),locale)).toBe(expected);
}
const dd=(page:Page,index:number)=>page.getByTestId(`calc-result-row-${index}`).locator('dd');
async function noInvalidNumber(page:Page){
 // A native field error correctly removes the result component. Reading the
 // optional wrapper must therefore be nonblocking; explicit field-error and
 // invalid-state assertions above still prove that the input was rejected.
 expect((await page.getByTestId('calc-result-wrap').allTextContents()).join(' ')).not.toMatch(/NaN|Infinity|undefined/);
}
async function readable(page:Page,width:number){
 const sizes=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));expect(sizes.client).toBe(width);expect(sizes.scroll).toBeLessThanOrEqual(width+1);
 const row=page.getByTestId('calc-result-row-0');const dt=await row.locator('dt').boundingBox(),value=await row.locator('dd').boundingBox();expect(dt).not.toBeNull();expect(value).not.toBeNull();
 if(width===390){expect(dt!.width).toBeGreaterThanOrEqual(240);expect(value!.width).toBeGreaterThanOrEqual(240);expect(value!.y).toBeGreaterThanOrEqual(dt!.y+dt!.height-1);}
 else{expect(dt!.width).toBeGreaterThanOrEqual(140);expect(value!.width).toBeGreaterThanOrEqual(160);expect(dt!.x+dt!.width).toBeLessThanOrEqual(value!.x+1);}
}
for(const sample of samples)for(const[index,locale]of locales.entries())for(const width of[390,1365]){
 test(`${locale}/${sample.id}/${width}: fixed result, reload, units, sources, native domain error and readable rows`,async({page})=>{
  await page.setViewportSize({width,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await visit(page,sample.id,locale,sample.input);await quantity(page.getByTestId('calc-result-primary'),locale,sample.primary);
  await expect(page.getByTestId(`field-${sample.proofField}`)).toHaveValue(String(sample.input[sample.proofField]));
  for(const[position,key]of staticUnits[sample.id])await expect(page.getByTestId('calculator-fields').locator('li').nth(position)).toContainText(`— ${units[locale][key]}`);
  await expect(page.getByTestId('calculator-source-review').locator(`a[href="${primarySource[sample.id]}"]`)).toBeVisible();
  if(locale==='de'){
   await expect(page.getByTestId('calc-form')).toContainText('Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen.');
   const limitation=page.getByTestId('calculator-source-review').locator('dd').last();
   await expect(limitation).toContainText(expectedGermanLimitations[sample.id]);
   await expect(limitation).not.toContainText(/reference estimates|Orientierungswerte|9[,.]\s*80665/i);
  }
  if(sample.id==='de-broglie'){await expect(page.getByTestId('calc-result-row-1').locator('dt')).toHaveText(betaLabels[index]);await quantity(dd(page,1),locale,3.336e-6);}
  if(sample.id==='relativity-dilation'){await expect(page.getByTestId('calc-result-row-1').locator('dt')).toHaveText(lengthLabels[index]);await quantity(dd(page,1),locale,86.6025);}
  if(sample.id==='wave')await expect(page.getByTestId('field-wavelength')).toHaveCount(0);
  await readable(page,width);await page.reload();await quantity(page.getByTestId('calc-result-primary'),locale,sample.primary);
  for(const[field,value]of Object.entries(sample.invalid))await page.getByTestId(`field-${field}`).fill(String(value));
  await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(page.getByTestId('calc-result-row-0').locator('dt')).toHaveText(engineErrorLabels[index]);await expect(dd(page,0)).toHaveText(sample.errors[index]);
  await noInvalidNumber(page);await readable(page,width);expect(errors).toEqual([]);
 });
}
for(const sample of samples)for(const[index,locale]of locales.entries()){
 test(`${locale}/${sample.id}: blank and malformed active input is native field error, not zero`,async({page})=>{
  await page.setViewportSize({width:390,height:900});await visit(page,sample.id,locale,sample.input);
  // The visible SSR form precedes client query restoration. Prove the fixed initial state before editing.
  await quantity(page.getByTestId('calc-result-primary'),locale,sample.primary);
  await expect(page.getByTestId(`field-${sample.proofField}`)).toHaveValue(String(sample.input[sample.proofField]));
  for(const invalid of['','abc']){
   await page.getByTestId(`field-${sample.proofField}`).fill(invalid);await expect(page.getByTestId(`field-error-${sample.proofField}`)).toHaveText(enterNumber[index]);
   await expect(page.getByTestId('calc-result-invalid')).toBeVisible();await expect(page.getByTestId('calc-result')).toHaveCount(0);await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);await noInvalidNumber(page);
  }
 });
}
for(const[index,locale]of locales.entries()){
 test(`${locale}: stable tiny-beta time difference survives query restoration`,async({page})=>{
  await visit(page,'relativity-dilation',locale,{beta:1e-9,properTime:1e20});await quantity(page.getByTestId('calc-result-primary'),locale,1e20);await quantity(dd(page,0),locale,1);await quantity(dd(page,3),locale,50);
  await page.reload();await quantity(dd(page,3),locale,50);await noInvalidNumber(page);
 });
 test(`${locale}: near-light remaining length percent remains nonzero`,async({page})=>{
  await visit(page,'relativity-dilation',locale,{beta:1-Number.EPSILON,properTime:1});await quantity(dd(page,1),locale,2.107e-6);await expect(page.getByTestId('calc-result-row-1').locator('dt')).toHaveText(lengthLabels[index]);await noInvalidNumber(page);
 });
 test(`${locale}: decay combines huge mass with subnormal attenuation before rounding`,async({page})=>{
  await visit(page,'half-life',locale,{mode:'remaining',n0:1e308,half:1,t:1073.5});await quantity(page.getByTestId('calc-result-primary'),locale,6.987e-16);
  await visit(page,'half-life',locale,{mode:'remaining',n0:1e308,half:1,t:1100});await quantity(page.getByTestId('calc-result-primary'),locale,7.362e-24);await expect(dd(page,1)).toHaveText(below[index]);await noInvalidNumber(page);
 });
 test(`${locale}: inverse decay mode hides inactive time and preserves literal5730years`,async({page})=>{
  await visit(page,'half-life',locale,{mode:'time',n0:100,half:5730,left:50,t:-123});await quantity(page.getByTestId('calc-result-primary'),locale,5730);await expect(page.getByTestId('field-t')).toHaveCount(0);await expect(page.getByTestId('field-left')).toHaveValue('50');
  await page.reload();await quantity(page.getByTestId('calc-result-primary'),locale,5730);await noInvalidNumber(page);
 });
 test(`${locale}: a zero test charge yields no force but retains the first-charge field`,async({page})=>{
  await visit(page,'coulomb',locale,{q1:1,q2:0,r:10});await quantity(page.getByTestId('calc-result-primary'),locale,0);await expect(dd(page,0)).toHaveText(noForce[index]);await quantity(dd(page,1),locale,898.76);await quantity(dd(page,2),locale,0);await noInvalidNumber(page);
 });
 test(`${locale}: zero linear intensity remains distinct from nonzero geometricfactor`,async({page})=>{
  await visit(page,'inverse-square',locale,{i1:0,d1:1,d2:3});await quantity(page.getByTestId('calc-result-primary'),locale,0);await quantity(dd(page,0),locale,.1111);await quantity(dd(page,2),locale,11.1111);await noInvalidNumber(page);
 });
 test(`${locale}: very small linear intensity retains its positive percentage`,async({page})=>{
  await visit(page,'inverse-square',locale,{i1:1000,d1:1,d2:1e6});await quantity(page.getByTestId('calc-result-primary'),locale,1e-9);await quantity(dd(page,2),locale,1e-10);await noInvalidNumber(page);
 });
 test(`${locale}: wave three directions hide the unknown and share only active values`,async({page})=>{
  await page.addInitScript(()=>{Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as {copiedLink:string}).copiedLink=text;}}});});
  await visit(page,'wave',locale,{mode:'lambda',v:343,f:440,wavelength:777});await quantity(page.getByTestId('calc-result-primary'),locale,.7795);await expect(page.getByTestId('field-wavelength')).toHaveCount(0);
  await page.getByTestId('field-mode').selectOption('f');await page.getByTestId('field-v').fill('1500');await page.getByTestId('field-wavelength').fill('0.75');await quantity(page.getByTestId('calc-result-primary'),locale,2000);await expect(page.getByTestId('field-f')).toHaveCount(0);
  await page.getByTestId('calc-share-btn').click();await expect.poll(()=>page.evaluate(()=>(window as unknown as {copiedLink?:string}).copiedLink??'')).not.toBe('');
  const shared=await page.evaluate(()=>(window as unknown as {copiedLink:string}).copiedLink);const parsed=new URL(shared);expect(parsed.searchParams.get('mode')).toBe('f');expect(parsed.searchParams.has('f')).toBe(false);expect(parsed.searchParams.get('v')).toBe('1500');
  await page.goto(shared);await quantity(page.getByTestId('calc-result-primary'),locale,2000);await expect(page.getByTestId('field-f')).toHaveCount(0);
  await page.getByTestId('field-mode').selectOption('v');await page.getByTestId('field-f').fill('440');await page.getByTestId('field-wavelength').fill('0.5');await quantity(page.getByTestId('calc-result-primary'),locale,220);await expect(page.getByTestId('field-v')).toHaveCount(0);await noInvalidNumber(page);
 });
 for(const id of['wave','half-life']as const)test(`${locale}/${id}: untrustedmode URL is discarded and injected unsupported runtime mode gives native error`,async({page})=>{
  const input:Record<string,string|number>=id==='wave'?{mode:'alien',v:343,f:440,wavelength:.75}:{mode:'alien',n0:100,half:1,t:1,left:50};
  await visit(page,id,locale,input);await expect(page.getByTestId('field-mode')).toHaveValue(id==='wave'?'lambda':'remaining');await quantity(page.getByTestId('calc-result-primary'),locale,id==='wave'?.7795:50);
  // Deliberate malformed DOM fixture, separate from the normal select UI.
  // This exercises the actual runtime whitelist without pretending that an
  // invalid URL option is accepted by the shared URL boundary.
  await page.getByTestId('field-mode').evaluate(element=>{const option=document.createElement('option');option.value='alien';option.textContent='unsupported fixture';element.appendChild(option);});
  await page.getByTestId('field-mode').selectOption('alien');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');await expect(dd(page,0)).toHaveText(modeErrors[index]);await noInvalidNumber(page);
 });
}
