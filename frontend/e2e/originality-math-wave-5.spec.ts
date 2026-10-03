import { expect, test, type Page } from '@playwright/test';

// Forty routes were read from the actual pre-wave catalogue. All numbers and
// error expectations below are literal independently checked fixtures. No
// production compute function is called to construct expected results.
const routes = {
  "power-root": {
    "ru": "/ru/math/power-root/",
    "en": "/en/math/power-and-root-calculator/",
    "uk": "/uk/math/stepeni-ta-koreni/",
    "de": "/de/mathematik/potenz-wurzel-rechner/",
    "es": "/es/matematicas/potencias-y-raices/"
  },
  "quadratic-equation": {
    "ru": "/ru/math/quadratic-equation/",
    "en": "/en/math/quadratic-equation/",
    "uk": "/uk/math/kvadratne-rivnyannya/",
    "de": "/de/mathematik/quadratische-gleichung-loesen/",
    "es": "/es/matematicas/ecuacion-de-segundo-grado/"
  },
  "linear-equation": {
    "ru": "/ru/math/linear-equation/",
    "en": "/en/math/linear-equation-calculator/",
    "uk": "/uk/math/liniyne-rivnyannya/",
    "de": "/de/mathematik/lineare-gleichung/",
    "es": "/es/matematicas/ecuacion-lineal/"
  },
  "linear-system": {
    "ru": "/ru/math/linear-system/",
    "en": "/en/math/linear-system-calculator/",
    "uk": "/uk/math/systema-rivnyan/",
    "de": "/de/mathematik/lineares-gleichungssystem/",
    "es": "/es/matematicas/sistema-de-ecuaciones-lineales/"
  },
  "modulo": {
    "ru": "/ru/math/modulo/",
    "en": "/en/math/remainder-calculator/",
    "uk": "/uk/math/kalkulyator-ostachi/",
    "de": "/de/mathematik/division-mit-rest/",
    "es": "/es/matematicas/calculadora-de-resto/"
  },
  "gcd-lcm": {
    "ru": "/ru/math/gcd-lcm/",
    "en": "/en/math/gcd-and-lcm-calculator/",
    "uk": "/uk/math/nsd-nsk/",
    "de": "/de/mathematik/ggt-kgv-rechner/",
    "es": "/es/matematicas/calculadora-de-mcd-y-mcm/"
  },
  "fraction-arith": {
    "ru": "/ru/math/fractions/",
    "en": "/en/math/fraction-calculator/",
    "uk": "/uk/math/drobi/",
    "de": "/de/mathematik/bruchrechner/",
    "es": "/es/matematicas/calculadora-de-fracciones/"
  },
  "factorial": {
    "ru": "/ru/math/factorial/",
    "en": "/en/math/factorial-calculator/",
    "uk": "/uk/math/faktorial/",
    "de": "/de/mathematik/fakultaet-rechner/",
    "es": "/es/matematicas/calculadora-de-factorial/"
  }
} as const;
const locales = ['ru','en','uk','de','es'] as const;
type Locale = typeof locales[number];
type MathId = keyof typeof routes;
const samples: {id:MathId;input:Record<string,string|number>;primary:string;proofField:string;invalid:Record<string,string|number>;inline?:string;errors:readonly string[]}[] = [
  {id:'power-root',input:{mode:'power',base:3,exponent:4},primary:'81',proofField:'base',invalid:{base:0,exponent:0},
    errors:['Для 0⁰ на этой странице не выбран результат','This page does not assign a result to 0⁰','Для 0⁰ на цій сторінці не обрано результат','Diese Seite weist 0⁰ keinen Ergebniswert zu','Esta página no asigna un resultado a 0⁰']},
  {id:'quadratic-equation',input:{a:1,b:-7,c:12},primary:'x₁ = 4, x₂ = 3',proofField:'c',invalid:{a:0},
    errors:['При a = 0 уравнение не квадратное','With a = 0 the equation is not quadratic','За a = 0 рівняння не квадратне','Mit a = 0 ist die Gleichung nicht quadratisch','Con a = 0 la ecuación no es de segundo grado']},
  {id:'linear-equation',input:{a:4,b:5,c:17},primary:'x = 3',proofField:'a',invalid:{a:'abc'},inline:'a',
    errors:['Введите число.','Enter a number.','Введіть число.','Bitte eine Zahl eingeben.','Introduce un número.']},
  {id:'linear-system',input:{a1:1,b1:1,c1:5,a2:1,b2:-1,c2:1},primary:'x = 3',proofField:'c1',invalid:{a1:0,b1:0},
    errors:['Определитель равен нулю: единственной пары решений нет','The determinant is zero: there is no unique solution pair','Визначник дорівнює нулю: єдиної пари розв’язків немає','Die Determinante ist null: Es gibt kein eindeutiges Lösungspaar','El determinante es cero: no hay un par único de soluciones']},
  {id:'modulo',input:{a:17,b:-5},primary:'2',proofField:'b',invalid:{b:0},
    errors:['Делитель не может быть нулём','The divisor cannot be zero','Дільник не може бути нулем','Der Divisor kann nicht null sein','El divisor no puede ser cero']},
  {id:'gcd-lcm',input:{numbers:'6 10 15'},primary:'1',proofField:'numbers',invalid:{numbers:'1.5 2'},
    errors:['Введите положительные целые числа до 9007199254740991','Enter positive integers up to 9007199254740991','Введіть додатні цілі числа до 9007199254740991','Geben Sie positive ganze Zahlen bis 9007199254740991 ein','Introduzca enteros positivos hasta 9007199254740991']},
  {id:'fraction-arith',input:{op:'add',a:1,b:2,c:3,d:4},primary:'5/4',proofField:'c',invalid:{b:0},
    errors:['Знаменатель не может быть нулём','A denominator cannot be zero','Знаменник не може бути нулем','Ein Nenner kann nicht null sein','Un denominador no puede ser cero']},
  {id:'factorial',input:{n:5},primary:'120',proofField:'n',invalid:{n:-1},inline:'n',
    errors:['Минимум 0.','Minimum 0.','Мінімум 0.','Minimum 0.','Mínimo 0.']},
];
const query = (input:Record<string,string|number>) => new URLSearchParams(Object.entries(input).map(([key,value])=>[key,String(value)])).toString();
const engineErrorLabels=['Проверьте данные','Check the values','Перевірте дані','Prüfe die Werte','Revisa los datos'];

// These tests never contact real analytics/ad providers or external services.
test.beforeEach(async({context})=>{
  await context.route('**/*',route=>{
    const url=new URL(route.request().url());
    return url.protocol==='data:'||url.protocol==='blob:'||['localhost','127.0.0.1','::1'].includes(url.hostname)
      ?route.continue():route.abort();
  });
});
async function visit(page:Page,id:MathId,locale:Locale,input:Record<string,string|number>) {
  await page.goto(`${routes[id][locale]}?${query(input)}`);
  await expect(page.getByTestId(`calculator-island-${id}`)).toBeVisible();
}
for(const sample of samples)for(const [index,locale]of locales.entries()){
  test(`${locale}/${sample.id}: fixed arithmetic, restored query/reload and native error`,async({page})=>{
    const pageErrors:string[]=[];page.on('pageerror',error=>pageErrors.push(error.message));
    await visit(page,sample.id,locale,sample.input);
    const primary=page.getByTestId('calc-result-primary');
    await expect(primary).toHaveText(sample.primary);
    await expect(page.getByTestId(`field-${sample.proofField}`)).toHaveValue(String(sample.input[sample.proofField]));
    if(sample.id==='linear-system')await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText('2');
    if(sample.id==='gcd-lcm')await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText('30');
    if(sample.id==='modulo')await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText('-3');
    await page.reload();await expect(primary).toHaveText(sample.primary);
    await expect(page.getByTestId(`field-${sample.proofField}`)).toHaveValue(String(sample.input[sample.proofField]));
    for(const[field,value]of Object.entries(sample.invalid))await page.getByTestId(`field-${field}`).fill(String(value));
    if(sample.inline){
      await expect(page.getByTestId(`field-error-${sample.inline}`)).toHaveText(sample.errors[index]);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
      await expect(page.getByTestId('calc-result')).toHaveCount(0);
      await expect(primary).toHaveCount(0);
    }else{
      await expect(primary).toHaveText('—');
      const row=page.getByTestId('calc-result-row-0');
      await expect(row.locator('dt')).toHaveText(engineErrorLabels[index]);
      await expect(row.locator('dd')).toHaveText(sample.errors[index]);
    }
    // The result wrapper remains present during inline validation; the
    // successful-result component is deliberately unmounted in that state.
    expect(await page.getByTestId('calc-result-wrap').textContent()).not.toMatch(/NaN|Infinity|undefined/);
    expect(pageErrors).toEqual([]);
  });
}
for(const[index,locale]of locales.entries()){
  test(`${locale}: quadratic cancellation keeps the small root`,async({page})=>{
    await visit(page,'quadratic-equation',locale,{a:1,b:100000000,c:1});
    const primary=page.getByTestId('calc-result-primary');
    // Independent root is approximately −1e−8. It must remain nonzero;
    // the other root rounds to −100000000 at four decimal places.
    await expect(primary).toContainText(/x₁ = -1[.,]00000e-8/);
    await expect(primary).toContainText(/x₂ = -100(?:[ ,\.\u00a0\u202f]?000){2}/);
    await expect(page.getByTestId('calc-result-row-1').locator('dd')).toHaveText('2');
  });
  test(`${locale}: singular all-zero row reports no unique pair`,async({page})=>{
    for(const c1 of [0,1]){
      await visit(page,'linear-system',locale,{a1:0,b1:0,c1,a2:1,b2:1,c2:2});
      await expect(page.getByTestId('calc-result-primary')).toHaveText('—');
      await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText(samples[3].errors[index]);
    }
  });
  test(`${locale}: signed remainder follows dividend with negative divisor`,async({page})=>{
    await visit(page,'modulo',locale,{a:-17,b:-5});
    await expect(page.getByTestId('calc-result-primary')).toHaveText('-2');
    await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText('3');
  });
  test(`${locale}: factorial0 and1 retain exact values and readable scientific form`,async({page})=>{
    for(const n of[0,1]){
      await visit(page,'factorial',locale,{n});
      await expect(page.getByTestId('calc-result-primary')).toHaveText('1');
      await expect(page.getByTestId('calc-result-row-1').locator('dd')).toHaveText('≈ 1 · 10^0');
      if(n===1)await expect(page.getByTestId('calc-result-row-2').locator('dd')).toHaveText('1! = 1');
    }
  });
  test(`${locale}: zero linear coefficient preserves identity and contradiction`,async({page})=>{
    const values={ru:['любое число','решений нет'],en:['any number','no solution'],uk:['будь-яке число','розв’язків немає'],de:['jede Zahl','keine Lösung'],es:['cualquier número','sin solución']}as const;
    for(const[j,c]of[5,9].entries()){
      await visit(page,'linear-equation',locale,{a:0,b:5,c});
      await expect(page.getByTestId('calc-result-primary')).toHaveText(values[locale][j]);
    }
  });
}
