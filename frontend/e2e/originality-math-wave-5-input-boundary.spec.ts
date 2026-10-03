import { expect, test } from '@playwright/test';

const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const routes = {
  modulo: ['/ru/math/modulo/', '/en/math/remainder-calculator/', '/uk/math/kalkulyator-ostachi/', '/de/mathematik/division-mit-rest/', '/es/matematicas/calculadora-de-resto/'],
  fraction: ['/ru/math/fractions/', '/en/math/fraction-calculator/', '/uk/math/drobi/', '/de/mathematik/bruchrechner/', '/es/matematicas/calculadora-de-fracciones/'],
  factorial: ['/ru/math/factorial/', '/en/math/factorial-calculator/', '/uk/math/faktorial/', '/de/mathematik/fakultaet-rechner/', '/es/matematicas/calculadora-de-factorial/'],
  power: ['/ru/math/power-root/', '/en/math/power-and-root-calculator/', '/uk/math/stepeni-ta-koreni/', '/de/mathematik/potenz-wurzel-rechner/', '/es/matematicas/potencias-y-raices/'],
} as const;
const nativeErrors = {
  modulo: ['Введите целые числа по модулю до 9007199254740991', 'Enter integers of magnitude at most 9007199254740991', 'Введіть цілі числа за модулем до 9007199254740991', 'Geben Sie ganze Zahlen mit Betrag bis 9007199254740991 ein', 'Introduzca enteros con valor absoluto máximo de 9007199254740991'],
  fraction: ['Числа должны быть целыми', 'The numbers must be whole', 'Числа мають бути цілими', 'Die Zahlen müssen ganz sein', 'Los números deben ser enteros'],
  factorial: ['Число должно быть целым', 'The number must be a whole number', 'Число має бути цілим', 'Die Zahl muss eine ganze Zahl sein', 'El número debe ser entero'],
  power: ['Отрицательное основание требует целого показателя по модулю до 9007199254740991', 'A negative base requires an integer exponent of magnitude at most 9007199254740991', 'Від’ємна основа потребує цілого показника за модулем до 9007199254740991', 'Eine negative Basis verlangt einen ganzzahligen Exponenten mit Betrag bis 9007199254740991', 'Una base negativa requiere un exponente entero con valor absoluto máximo de 9007199254740991'],
  root: ['Отрицательное число требует положительной нечётной целой степени корня до 9007199254740991', 'A negative number requires a positive odd integer root index up to 9007199254740991', 'Від’ємне число потребує додатного непарного цілого індексу кореня до 9007199254740991', 'Eine negative Zahl verlangt einen positiven ungeraden ganzzahligen Wurzelgrad bis 9007199254740991', 'Un número negativo requiere un índice de raíz entero positivo e impar hasta 9007199254740991'],
  number: ['Введите число.', 'Enter a number.', 'Введіть число.', 'Bitte eine Zahl eingeben.', 'Introduce un número.'],
} as const;
const query = (input: Record<string, string | number>) => new URLSearchParams(Object.entries(input).map(([key, value]) => [key, String(value)])).toString();
const samples = [
  { route: 'modulo', key: 'modulo', field: 'a', input: { a: 1, b: 2 }, expected: '1' },
  { route: 'fraction', key: 'fraction', field: 'a', input: { op: 'add', a: 1, b: 2, c: 3, d: 4 }, expected: '5/4' },
  { route: 'factorial', key: 'factorial', field: 'n', input: { n: 1 }, expected: '1' },
  { route: 'power', key: 'power', field: 'exponent', input: { mode: 'power', base: -8, exponent: 1 }, expected: '-8' },
  { route: 'power', key: 'root', field: 'exponent', input: { mode: 'root', base: -8, exponent: 1 }, expected: '-8' },
] as const;

test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    return url.protocol === 'data:' || url.protocol === 'blob:' || ['localhost', '127.0.0.1', '::1'].includes(url.hostname)
      ? route.continue() : route.abort();
  });
});

for (const [index, locale] of locales.entries()) {
  const point = locale === 'en' ? '.' : ',';
  for (const sample of samples) test(`${locale}/${sample.key}: fractional lexeme remains invalid through form, query and reload`, async ({ page }) => {
    const raw = `1${point}00000000000000001`;
    const route = routes[sample.route][index];
    await page.goto(`${route}?${query(sample.input)}`);
    await expect(page.getByTestId('calc-result-primary')).toHaveText(sample.expected);
    await page.getByTestId(`field-${sample.field}`).fill(raw);
    await expect(page.getByTestId(`field-error-${sample.field}`)).toHaveText(nativeErrors[sample.key][index]);
    await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    await page.goto(`${route}?${query({ ...sample.input, [sample.field]: raw })}`);
    await expect(page.getByTestId(`field-${sample.field}`)).toHaveValue(raw);
    await expect(page.getByTestId(`field-error-${sample.field}`)).toHaveText(nativeErrors[sample.key][index]);
    await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    await page.reload();
    await expect(page.getByTestId(`field-${sample.field}`)).toHaveValue(raw);
    await expect(page.getByTestId(`field-error-${sample.field}`)).toHaveText(nativeErrors[sample.key][index]);
    await page.getByTestId(`field-${sample.field}`).fill(`1${point}00000000000000000`);
    await expect(page.getByTestId('calc-result-primary')).toHaveText(sample.expected);
    // Decimal digits hidden by binary rounding must also survive scientific
    // query syntax. The shared decimal form grammar rejects this preserved
    // raw string with the ordinary native number error.
    const scientific = '1.00000000000000001e0';
    await page.goto(`${route}?${query({ ...sample.input, [sample.field]: scientific })}`);
    await expect(page.getByTestId(`field-${sample.field}`)).toHaveValue(scientific);
    await expect(page.getByTestId(`field-error-${sample.field}`)).toHaveText(nativeErrors.number[index]);
    await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    await page.reload();
    await expect(page.getByTestId(`field-${sample.field}`)).toHaveValue(scientific);
    await expect(page.getByTestId(`field-error-${sample.field}`)).toHaveText(nativeErrors.number[index]);
    // An exact scientific integer is still restored as a valid Number.
    await page.goto(`${route}?${query({ ...sample.input, [sample.field]: '1e0' })}`);
    await expect(page.getByTestId('calc-result-primary')).toHaveText(sample.expected);
  });
  test(`${locale}: nonzero raw decimal and exponential query underflow never yields zero`, async ({ page }) => {
    const route = routes.power[index];
    const decimal = `0${point}${'0'.repeat(400)}1`;
    await page.goto(`${route}?${query({ mode: 'power', base: 3, exponent: 2 })}`);
    await expect(page.getByTestId('calc-result-primary')).toHaveText('9');
    await page.getByTestId('field-base').fill(decimal);
    await expect(page.getByTestId('field-error-base')).toHaveText(nativeErrors.number[index]);
    await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
    for (const base of [decimal, '1e-400']) {
      await page.goto(`${route}?${query({ mode: 'power', base, exponent: 2 })}`);
      await expect(page.getByTestId('field-base')).toHaveValue(base);
      await expect(page.getByTestId('field-error-base')).toHaveText(nativeErrors.number[index]);
      await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
      await page.reload();
      await expect(page.getByTestId('field-error-base')).toHaveText(nativeErrors.number[index]);
    }
    await page.getByTestId('field-base').fill('0');
    await expect(page.getByTestId('calc-result-primary')).toHaveText('0');
  });
  test(`${locale}: positive fractional powers and root indices remain valid`, async ({ page }) => {
    for (const [mode, expected] of [['power', '2'], ['root', '16']] as const) {
      await page.goto(`${routes.power[index]}?${query({ mode, base: 4, exponent: `0${point}5` })}`);
      await expect(page.getByTestId('calc-result-primary')).toHaveText(expected);
      await page.reload();
      await expect(page.getByTestId('calc-result-primary')).toHaveText(expected);
    }
  });
}
