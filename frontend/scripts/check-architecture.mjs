// Архитектурный guard Platform V2.
//
// Он защищает единственное свойство, ради которого затевалась V2: добавление
// калькулятора не должно требовать правок в общих рукописных файлах. Как только
// в общем runtime-коде появляется ветвление или регистрация по конкретному
// id калькулятора V2, архитектура тихо возвращается к V1 — guard делает такой
// возврат шумным.
//
// Guard намеренно узкий: слишком широкий линт отключит первый же человек,
// которому он помешает. Поэтому он запрещает ровно две вещи и ничего сверх.
//
//   1. ВЕТВЛЕНИЕ — сравнение с id калькулятора (`=== 'id'`, `!== 'id'`,
//      `case 'id':`). Это тот самый паттерн, который в V1 расползся по острову
//      и валидации.
//   2. РЕГИСТРАЦИЯ — id как ключ в общем реестре, который обязан наполняться
//      из генерируемого манифеста, а не руками.
//
// Что guard сознательно НЕ считает нарушением:
//   · `relatedCalculatorIds` — содержательные перекрёстные ссылки между
//     калькуляторами. Это данные о продукте, а не архитектурная связь;
//   · сгенерированный манифест — он и должен знать обо всех;
//   · файлы внутри `src/calculators/**` — калькулятор вправе знать себя;
//   · тесты и фикстуры — они обязаны ссылаться на конкретные калькуляторы;
//   · копирайт несобираемых локалей в `legacyCalculatorSeoByLocale` — это
//     унаследованные данные для локалей, которые сайт не собирает. Чистка
//     относится к отдельной задаче, а не к смене архитектуры регистрации.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

/** Общие рукописные файлы, которые обязаны оставаться незнающими о калькуляторах. */
export const GUARDED_FILES = [
  'src/data/calculators.ts',
  'src/lib/runners.ts',
  'src/lib/i18n.ts',
  'src/components/islands/calculator/validation.ts',
  'src/components/islands/CalculatorIsland.tsx',
];

/**
 * Реестры опознаются по форме, а не по имени файла: guard ищет объявление
 * реестра и его закрывающую скобку. Так проверка не привязана к текущей
 * раскладке файлов и продолжает работать, если реестр переедет.
 */
const REGISTRY_REGIONS = [
  { name: 'legacyRunners', start: /const legacyRunners\b/, end: /^\};/ },
  { name: 'legacyEnCalculatorCopy', start: /const legacyEnCalculatorCopy\b/, end: /^\};/ },
  // Украинский подблок: помимо английской это единственная локаль сборки,
  // копирайт которой лежит в общем файле.
  {
    name: 'legacyCalculatorSeoByLocale.uk',
    after: /const legacyCalculatorSeoByLocale\b/,
    start: /^ {2}uk: \{$/,
    end: /^ {2}\},$/,
  },
];

export function v2CalculatorIds(root = ROOT) {
  const dir = join(root, 'src/calculators');
  return readdirSync(dir)
    .filter((entry) => {
      const full = join(dir, entry);
      if (!statSync(full).isDirectory()) return false;
      try { statSync(join(full, 'definition.ts')); return true; } catch { return false; }
    })
    .sort();
}

function stripComment(line) {
  return line.replace(/\/\/.*$/, '');
}

function registryLineRange(source) {
  const lines = source.split('\n');
  const ranges = [];
  for (const region of REGISTRY_REGIONS) {
    let from = 0;
    if (region.after) {
      const anchor = lines.findIndex((line) => region.after.test(line));
      if (anchor < 0) continue;
      from = anchor;
    }
    const start = lines.findIndex((line, index) => index >= from && region.start.test(line));
    if (start < 0) continue;
    const end = lines.findIndex((line, index) => index > start && region.end.test(line));
    ranges.push([start + 1, (end < 0 ? lines.length : end) + 1]);
  }
  return ranges;
}

/**
 * Дешёвая отсечка перед перебором калькуляторов.
 *
 * Строка способна дать нарушение только двумя способами, и оба оставляют
 * след, который виден без знания конкретного id:
 *   · ветвление требует один из `===`, `!==`, `==`, `!=` — каждый содержит
 *     либо `==`, либо `!=`, — или литеральное `case`;
 *   · регистрация требует, чтобы строка начиналась с кавычки после отступа.
 *
 * Поэтому строка, не прошедшая отсечку, не может совпасть НИ С ОДНИМ id.
 * Отсечка — надмножество обеих проверок, а не выборка: семантика не меняется,
 * меняется только объём работы. На нынешних пяти файлах она оставляет
 * 184 строки из 8633.
 */
const MAY_BRANCH = /[=!]=|case/;
const MAY_REGISTER = /^\s*['"]/;

/**
 * Возвращает нарушения: ветвление по id калькулятора V2 в общих файлах
 * и ручную регистрацию в реестрах, которые должен наполнять манифест.
 *
 * Регулярные выражения готовятся ОДИН раз на калькулятор. Прежняя версия
 * строила их заново внутри двойного цикла: на 250 калькуляторах и 8633
 * строках это 4 316 500 построений RegExp и около трёх секунд — вплотную к
 * пятисекундному пределу Vitest, который срывался под нагрузкой полного
 * прогона. Множество проверяемых файлов, множество калькуляторов и правила
 * совпадения не изменились.
 */
export function findViolations(root = ROOT, files = GUARDED_FILES, ids = v2CalculatorIds(root)) {
  const matchers = ids.map((id) => {
    const quoted = `['"]${id.replace(/[-]/g, '\\-')}['"]`;
    return {
      id,
      branching: new RegExp(`(===|!==|==|!=)\\s*${quoted}|case\\s+${quoted}\\s*:`),
      registration: new RegExp(`^\\s*${quoted}\\s*:`),
    };
  });

  const violations = [];
  for (const rel of files) {
    let source;
    try { source = readFileSync(join(root, rel), 'utf8'); } catch { continue; }
    const lines = source.split('\n');
    const registries = registryLineRange(source);

    lines.forEach((rawLine, index) => {
      const line = stripComment(rawLine);
      const lineNumber = index + 1;
      const inRegistry = registries.some(([from, to]) => lineNumber >= from && lineNumber <= to);
      if (!MAY_BRANCH.test(line) && !(inRegistry && MAY_REGISTER.test(line))) return;

      for (const { id, branching, registration } of matchers) {
        if (branching.test(line)) {
          violations.push({ file: rel, line: lineNumber, id, kind: 'ветвление', text: rawLine.trim() });
          continue;
        }
        if (inRegistry && registration.test(line)) {
          violations.push({ file: rel, line: lineNumber, id, kind: 'ручная регистрация', text: rawLine.trim() });
        }
      }
    });
  }
  return violations;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const violations = findViolations();
  if (violations.length > 0) {
    console.error('Архитектурный guard: общий код знает о конкретных калькуляторах V2.\n');
    for (const v of violations) {
      console.error(`  ${v.file}:${v.line}  [${v.kind}]  ${v.id}`);
      console.error(`    ${v.text}`);
    }
    console.error('\nПеренесите специфичное поведение в директорию калькулятора.');
    process.exit(1);
  }
  const ids = v2CalculatorIds();
  console.log(`Архитектурный guard пройден: ${GUARDED_FILES.length} общих файлов не ветвятся и не регистрируют ${ids.length} калькуляторов V2.`);
}
