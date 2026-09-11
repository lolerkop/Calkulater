// Отрицательные контроли испанских ворот артефакта.
//
// Ворота изоляции локали и ворота качества содержимого проверяются здесь на
// фикстуре, а не на текущей сборке. Собирается маленький dist из испанских
// страниц всех видов — главная локали, раздел, общий каталог, «О проекте»,
// контакты, приватность, 404 и страница калькулятора, — настоящий скрипт
// ворот запускается на нём, и каждая мутация обязана его уронить. Чистая
// фикстура — контроль того, что падение вызвано мутацией, а не неполнотой
// самой фикстуры.
//
// До этой проверки испанский проходил мимо обоих ворот: ворота изоляции
// обходили испанские страницы, но веток для них не имели, а ворота качества не
// читали /es/ вовсе — список локалей в них был выписан буквами.

import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

const LOCALES_GATE = resolve('scripts/verify-dist-locales.mjs');
const QUALITY_GATE = resolve('scripts/verify-dist-content-quality.mjs');
const CALCULATOR = 'es/finanzas/cuota-francesa/index.html';
const CALCULATOR_ROUTE = '/es/finanzas/cuota-francesa/';

let root: string;

const write = (relative: string, content: string) => {
  const file = join(root, relative);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content, 'utf8');
};

const run = (gate: string) => {
  const result = spawnSync(process.execPath, [gate], { cwd: root, encoding: 'utf8' });
  return { code: result.status, output: `${result.stdout}${result.stderr}` };
};

// Переключатель языка пишет родные названия локалей их собственными
// алфавитами — это не утечка, и ворота обязаны это различать.
const HEADER = '<header><nav><a href="/ru/" hreflang="ru">Русский</a> <a href="/uk/" hreflang="uk">Українська</a> <a href="/es/" hreflang="es">Español</a></nav></header>';

const page = (lang: string, main: string, jsonLd = '') => [
  `<!DOCTYPE html><html lang="${lang}"><head><title>Calcuway</title>`,
  jsonLd ? `<script type="application/ld+json">${jsonLd}</script>` : '',
  `</head><body>${HEADER}<main>${main}</main><footer><p>Calcuway</p></footer></body></html>`,
].join('');

const SERVICE: Record<string, string> = {
  'es/index.html': '<h1>Calculadoras online gratuitas</h1><p>Finanzas, divisas, fitness, reformas y fechas en un solo sitio.</p>',
  'es/finanzas/index.html': '<h1>Finanzas</h1><p>Qué elegir en esta sección: empieza por una calculadora popular.</p>',
  'es/calculators/index.html': '<h1>Todas las calculadoras</h1><p>La lista completa de herramientas del sitio.</p>',
  'es/about/index.html': '<h1>Acerca del proyecto</h1><p>Los cálculos se ejecutan en tu navegador.</p>',
  'es/contacts/index.html': '<h1>Contacto</h1><p>Describe la consulta e incluye la URL de la calculadora.</p>',
  'es/privacy/index.html': '<h1>Política de privacidad</h1><p>Los valores introducidos se procesan en tu navegador.</p>',
  'es/404.html': '<h1>Página no encontrada</h1><p>Vuelve al inicio y sigue buscando la calculadora que necesitas.</p>',
};

const SECTIONS = {
  details: '<section id="details"><h2>Cómo se calcula</h2><p>La cuota sale de la fórmula del sistema francés a partir del importe, el tipo anual y el número de meses.</p></section>',
  usage: '<section id="usage"><h2>Cómo usarla</h2><p>Indica el importe, el tipo de interés y el plazo; el resultado aparece al instante.</p></section>',
  sources: '<section id="sources"><h2>Fuentes y vigencia</h2><p>Método de cálculo: amortización francesa con cuota constante.</p></section>',
  faq: '<section id="faq"><h2>Preguntas frecuentes</h2><p>¿Incluye comisiones? No: solo capital e intereses.</p></section>',
};

const calculator = (extra = '', omit?: keyof typeof SECTIONS) => [
  '<h1>Cuota francesa</h1>',
  '<div data-testid="calculator-support"><p>Reparte el préstamo en cuotas iguales durante todo el plazo pactado con la entidad.</p></div>',
  ...Object.entries(SECTIONS).filter(([id]) => id !== omit).map(([, html]) => html),
  extra,
].join('');

const withExtra = (file: string, extra: string) =>
  file === CALCULATOR ? calculator(extra) : `${SERVICE[file]}${extra}`;

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'es-guard-'));
  for (const [file, main] of Object.entries(SERVICE)) write(`dist/${file}`, page('es', main));
  write(`dist/${CALCULATOR}`, page('es', calculator()));
});
afterEach(() => rmSync(root, { recursive: true, force: true }));

describe('ворота изоляции локали: испанский', () => {
  it('чистая испанская фикстура проходит', () => {
    const { code, output } = run(LOCALES_GATE);
    expect(code, output).toBe(0);
  });

  it.each([...Object.keys(SERVICE), CALCULATOR])('кириллица в видимом тексте %s роняет ворота', (file) => {
    write(`dist/${file}`, page('es', withExtra(file, '<p>Итоговая сумма</p>')));
    const { code, output } = run(LOCALES_GATE);
    expect(code).toBe(1);
    expect(output).toContain(`${file}: visible Spanish content contains Cyrillic text`);
  });

  it('кириллица в JSON-LD испанской страницы роняет ворота', () => {
    write('dist/es/about/index.html', page('es', SERVICE['es/about/index.html'], '{"@type":"WebPage","name":"О проекте"}'));
    const { code, output } = run(LOCALES_GATE);
    expect(code).toBe(1);
    expect(output).toContain('es/about/index.html: Spanish JSON-LD contains Cyrillic text');
  });

  // По одной фразе на каждый английский запасной путь, который у испанской
  // страницы реально есть.
  it.each<[string, string]>([
    ['es/contacts/index.html', 'How to contact us'],
    ['es/finanzas/index.html', 'Choose a calculator in this section'],
    ['es/privacy/index.html', 'Cookies and browser storage'],
    [CALCULATOR, 'Sources and review status'],
  ])('английский запасной путь на %s роняет ворота', (file, phrase) => {
    write(`dist/${file}`, page('es', withExtra(file, `<p>${phrase}</p>`)));
    const { code, output } = run(LOCALES_GATE);
    expect(code).toBe(1);
    expect(output).toContain(`${file}: Spanish content contains English fallback "${phrase}"`);
  });

  it('кириллица в адресах и атрибутах разметки утечкой не считается', () => {
    write('dist/es/about/index.html', page('es', `${SERVICE['es/about/index.html']}<a href="/ru/finansy/" title="Калькулятор" aria-label="Русская версия">Versión rusa</a>`));
    const { code, output } = run(LOCALES_GATE);
    expect(code, output).toBe(0);
  });

  it('немецкая и украинская проверки по-прежнему срабатывают', () => {
    write('dist/de/index.html', page('de', '<h1>Rechner</h1><p>Итог</p>'));
    write('dist/uk/index.html', page('uk', '<h1>Калькулятори</h1><p>Частые вопросы</p>'));
    const { code, output } = run(LOCALES_GATE);
    expect(code).toBe(1);
    expect(output).toContain('de/index.html: visible German content contains Cyrillic text');
    expect(output).toContain('uk/index.html: Ukrainian content contains Russian marker "Частые вопросы"');
  });
});

describe('ворота качества содержимого: испанский', () => {
  it('чистая испанская страница проходит и учтена в сводке', () => {
    const { code, output } = run(QUALITY_GATE);
    expect(code, output).toBe(0);
    expect(output).toContain('1 испанских');
  });

  it('пропавший обязательный раздел роняет ворота', () => {
    write(`dist/${CALCULATOR}`, page('es', calculator('', 'faq')));
    const { code, output } = run(QUALITY_GATE);
    expect(code).toBe(1);
    expect(output).toContain(`нет обязательного раздела: ${CALCULATOR_ROUTE} :: faq`);
  });

  it('заглушка в испанском тексте роняет ворота', () => {
    write(`dist/${CALCULATOR}`, page('es', calculator('<p>Resultado: undefined</p>')));
    const { code, output } = run(QUALITY_GATE);
    expect(code).toBe(1);
    expect(output).toContain(`заглушка в видимом тексте: ${CALCULATOR_ROUTE} :: undefined`);
  });

  it('кириллица в испанском тексте роняет ворота', () => {
    write(`dist/${CALCULATOR}`, page('es', calculator('<p>Итоговая сумма</p>')));
    const { code, output } = run(QUALITY_GATE);
    expect(code).toBe(1);
    expect(output).toContain(`кириллица в испанском тексте: ${CALCULATOR_ROUTE} :: «И»`);
  });

  it.each([
    'The calculator applies the relevant formula',
    'La calculadora aplica la fórmula correspondiente a los valores introducidos',
    '¿Necesito crear una cuenta?',
  ])('общий шаблон «%s» роняет ворота', (phrase) => {
    write(`dist/${CALCULATOR}`, page('es', calculator(`<p>${phrase}</p>`)));
    const { code, output } = run(QUALITY_GATE);
    expect(code).toBe(1);
    expect(output).toContain(`вернулся общий шаблон: ${CALCULATOR_ROUTE} :: «${phrase.slice(0, 48)}…»`);
  });

  it('обвал объёма относительно базовой линии роняет ворота', () => {
    write('scripts/content-baseline.json', JSON.stringify({ pages: { [CALCULATOR_ROUTE]: { faq: 0, words: 10000 } } }));
    const { code, output } = run(QUALITY_GATE);
    expect(code).toBe(1);
    expect(output).toMatch(/обвал объёма относительно базовой линии: \/es\/finanzas\/cuota-francesa\/ :: \d+ против одобренных 10000/);
  });

  it('пропавшая испанская страница из базовой линии роняет ворота', () => {
    write('scripts/content-baseline.json', JSON.stringify({ pages: { '/es/finanzas/prestamo/': { faq: 0, words: 10 } } }));
    const { code, output } = run(QUALITY_GATE);
    expect(code).toBe(1);
    expect(output).toContain('страница из базовой линии исчезла: /es/finanzas/prestamo/');
  });
});
