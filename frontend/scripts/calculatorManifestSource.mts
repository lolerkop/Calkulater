// Чистая часть генератора манифеста: обнаружение калькуляторов и рендеринг
// содержимого. Здесь нет побочных эффектов, поэтому модуль можно импортировать
// из тестов, не рискуя, что импорт молча перезапишет файл в репозитории.
// Запуск живёт отдельно — в `generate-calculator-manifest.mts`.
//
// Генератор манифеста калькуляторов V2.
//
// Манифест — единственная точка, знающая обо всех V2-калькуляторах, и он
// порождается из файловой системы, а не редактируется руками. Именно это
// снимает главную проблему V1: чтобы добавить калькулятор, достаточно создать
// его директорию — ни один общий файл править не нужно.
//
// Файл коммитится, а не собирается на лету. Причины: он виден в code review,
// работает в vitest без плагинов Vite, не зависит от порядка сборки, и любое
// расхождение ловится проверкой `calculators:verify`.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { resultPhrases, resultLabelPhrases } from '../src/lib/resultPhrases';
import { TRANSLATED_LOCALES } from '../src/lib/platform/types';
import { calculators as legacyCalculators } from '../src/data/calculators';

const ROOT = new URL('..', import.meta.url).pathname;
const CALC_DIR = join(ROOT, 'src/calculators');
export const MANIFEST_PATH = join(CALC_DIR, 'manifest.generated.ts');
export const RUNTIME_PATH = join(CALC_DIR, 'runtime.generated.ts');
export const LOCALIZATION_PATH = join(CALC_DIR, 'localization.generated.ts');
export const DISPATCH_PATH = join(ROOT, 'src/components/CalculatorIslandDispatch.generated.astro');
export const islandEntryPath = (id: string) => join(CALC_DIR, id, 'island.tsx');
export const sharedPhrasesPath = (id: string) => join(CALC_DIR, id, 'shared.generated.ts');

/** Отобранные под калькулятор общие фразы — отдельным модулем. */
export function renderSharedPhrases(id: string, dir?: string): string {
  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Общие фразы результата, отобранные под калькулятор ${id}.
// Перегенерировать: npm run calculators:generate
//
// Модуль один на двоих: его импортирует точка входа острова, которая уезжает в
// браузер, и манифест рантаймов, по которому идут тесты. Поэтому проверить
// перевод можно ровно на том наборе фраз, который увидит посетитель.

import type { CalculatorLocalization } from '../../lib/platform/types';

export const shared: CalculatorLocalization = ${renderSharedBundle(calculatorLiterals(id, dir), '')};
`;
}

/**
 * Отбор общих фраз результата под конкретный калькулятор.
 *
 * Общий словарь раньше уезжал в браузер целиком на каждой странице: полсотни
 * килобайт фраз всех калькуляторов на всех локалях. Измерение показало, что
 * 99,3 % подписей при первой отрисовке приходит из собственной локализации
 * калькулятора, а общий словарь обслуживает наследственные — их двадцать пять
 * из трёхсот семидесяти трёх.
 *
 * Отбор идёт по СТРОКОВЫМ ЛИТЕРАЛАМ собственных исходников калькулятора и
 * намеренно с запасом: подстановка умеет переводить фразу внутри более длинного
 * текста, поэтому ключ засчитывается и как часть литерала. Лишняя запись стоит
 * десятки байт, пропущенная — русское слово на чужой странице, поэтому запас
 * идёт в сторону лишнего. Полноту отбора закрепляет тест.
 *
 * `localization.ts` и `copy.*.ts` не читаются: первый содержит собственные
 * переводы, которые и так важнее, второй — копирайт, а не строки результата.
 */
const SLICE_SOURCES = ['compute.ts', 'validate.ts', 'contextualField.ts', 'definition.ts', 'referenceCases.ts'];

type PhraseMap = Record<string, Partial<Record<string, string>>>;

const quote = (value: string) => `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

/** Литерал бандла общих фраз: только записи, которые может показать этот текст. */
export function renderSharedBundle(haystack: string, indent = '  '): string {
  const pick = (source: PhraseMap) => Object.entries(source)
    .filter(([key]) => haystack.includes(key));
  const labels = pick(resultLabelPhrases);
  const values = pick(resultPhrases);
  const locales = TRANSLATED_LOCALES.filter((locale) =>
    labels.some(([, byLocale]) => byLocale[locale]) || values.some(([, byLocale]) => byLocale[locale]));
  if (locales.length === 0) return '{}';

  const bucket = (entries: [string, Partial<Record<string, string>>][], locale: string) => entries
    .filter(([, byLocale]) => byLocale[locale])
    .map(([key, byLocale]) => `${indent}      ${quote(key)}: ${quote(byLocale[locale] as string)},`);

  const blocks = locales.map((locale) => {
    const r = bucket(labels, locale);
    const v = bucket(values, locale);
    return [
      `${indent}  ${locale}: {`,
      ...(r.length ? [`${indent}    results: {`, ...r, `${indent}    },`] : []),
      ...(v.length ? [`${indent}    values: {`, ...v, `${indent}    },`] : []),
      `${indent}  },`,
    ].join('\n');
  });
  return ['{', ...blocks, `${indent}}`].join('\n');
}

// Сами словари из обхода исключены: в них встречается КАЖДЫЙ ключ, и обход,
// дошедший до них, вернул бы весь словарь целиком.
const SLICE_EXCLUDED = ['/lib/resultPhrases', '/lib/clientI18n', '/lib/resultText'];

function literalsOf(text: string, into: string[]): void {
    for (const pattern of [/'((?:[^'\\\n]|\\.)*)'/g, /"((?:[^"\\\n]|\\.)*)"/g, /`([^`]*)`/g]) {
    for (const match of text.matchAll(pattern)) into.push(match[1]);
  }
}

/**
 * Обход по графу локальных импортов.
 *
 * Читать только собственные файлы калькулятора оказалось мало: названия валют и
 * центробанков живут в `src/data/currencies.ts`, куда расчёт ходит импортом, и
 * четыре валютные страницы потеряли перевод. Строка, которую калькулятор может
 * напечатать, приходит из всего его графа, поэтому и обход идёт по графу.
 */
export function literalsFromGraph(seeds: readonly string[]): string {
  const parts: string[] = [];
  const seen = new Set<string>();
  const queue = [...seeds];
  while (queue.length > 0) {
    const file = queue.pop() as string;
    if (seen.has(file)) continue;
    seen.add(file);
    let text: string;
    try { text = readFileSync(file, 'utf8'); } catch { continue; }
    literalsOf(text, parts);
    // Типовые импорты не приносят строк, зато уводят обход в общие модули:
    // `lib/types` тянет манифест категорий со всем копирайтом на пяти локалях.
    for (const match of text.matchAll(/^import (?!type )[^;]*? from '(\.[^']*)';/gm)) {
      const base = resolve(dirname(file), match[1]);
      if (SLICE_EXCLUDED.some((tail) => base.endsWith(tail))) continue;
      for (const candidate of [`${base}.ts`, `${base}.tsx`, join(base, 'index.ts')]) {
        try { statSync(candidate); queue.push(candidate); break; } catch { /* следующий вариант */ }
      }
    }
  }
  return parts.join('\u0000');
}

export function calculatorLiterals(id: string, dir: string = CALC_DIR): string {
  // Граф расчёта обходится вглубь: напечатать можно только то, до чего он
  // дотягивается. Определение и эталоны читаются как есть — это объявления,
  // и их импорты ведут в копирайт, а не в строки результата.
  const deep = ['compute.ts', 'validate.ts', 'contextualField.ts'].map((file) => join(dir, id, file));
  const shallow: string[] = [];
  for (const file of ['definition.ts', 'referenceCases.ts']) {
    try { literalsOf(readFileSync(join(dir, id, file), 'utf8'), shallow); } catch { /* нет файла */ }
  }
  return [literalsFromGraph(deep), ...shallow].join('\u0000');
}

/**
 * Статус читается из текста определения на этапе генерации.
 *
 * Runtime-манифест сознательно не импортирует `definition.ts` — иначе SEO-тексты
 * уехали бы в клиентский бандл. Поэтому статус приходится извлекать из исходника,
 * а не из объекта. Отсутствие статуса — ошибка генерации, а не повод угадывать:
 * иначе невыпущенный калькулятор молча отгрузил бы свой код посетителям.
 */
export function lifecycleOf(id: string, dir: string = CALC_DIR): string {
  const source = readFileSync(join(dir, id, 'definition.ts'), 'utf8');
  const match = source.match(/lifecycle:\s*'([a-z]+)'/);
  if (!match) throw new Error(`Не удалось определить статус калькулятора ${id}: нет поля lifecycle`);
  return match[1];
}

/** Какие runtime-модули есть у калькулятора. */
export function runtimeModules(id: string, dir: string = CALC_DIR) {
  const has = (file: string) => {
    try { statSync(join(dir, id, file)); return true; } catch { return false; }
  };
  return {
    compute: has('compute.ts'),
    validate: has('validate.ts'),
    contextualField: has('contextualField.ts'),
    localization: has('localization.ts'),
  };
}

export function discoverCalculatorIds(dir: string = CALC_DIR): string[] {
  const ids = readdirSync(dir)
    .filter((entry) => {
      const full = join(dir, entry);
      if (!statSync(full).isDirectory()) return false;
      try {
        statSync(join(full, 'definition.ts'));
        return true;
      } catch {
        return false;
      }
    })
    // Порядок задаётся сортировкой, а не обходом файловой системы: иначе
    // манифест менялся бы от машины к машине и перестал быть детерминированным.
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) throw new Error(`Дублирующийся калькулятор: ${id}`);
    seen.add(id);
  }
  return ids;
}

export function renderManifest(ids: readonly string[]): string {
  const alias = (id: string) => 'def_' + id.replace(/[^a-zA-Z0-9]+/g, '_');
  const imports = ids
    .map((id) => `import { definition as ${alias(id)} } from './${id}/definition';`)
    .join('\n');
  const entries = ids.map((id) => `  ${alias(id)},`).join('\n');

  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Источник: директории src/calculators/*/definition.ts
// Перегенерировать: npm run calculators:generate
// Проверить актуальность: npm run calculators:verify

import type { CalculatorDef } from '../lib/types';
import type {
  CalculatorCopy,
  CalculatorDefinitionV2,
  CalculatorPublishedExample,
  CalculatorSeoCopy,
} from '../lib/platform/types';
import { isPublished } from '../lib/platform/types';
${imports ? '\n' + imports + '\n' : ''}
export const v2Definitions: readonly CalculatorDefinitionV2[] = [
${entries}
];

const published = v2Definitions.filter(isPublished);

/** Определения в контракте, который downstream уже умеет обрабатывать. */
export const v2Calculators: CalculatorDef[] = published.map((d) => d.presentation);

/** Порядок вставки в каталог: см. \`mergeIntoCatalog\`. */
export const v2CatalogAdditions = published.map((d) => ({
  presentation: d.presentation,
  catalogAnchor: d.catalogAnchor,
}));

export const v2EnCopy: Record<string, CalculatorCopy> = Object.fromEntries(
  published.filter((d) => d.copy?.en).map((d) => [d.id, d.copy!.en!]),
);

export const v2UkCopy: Record<string, CalculatorSeoCopy> = Object.fromEntries(
  published.filter((d) => d.copy?.uk).map((d) => [d.id, d.copy!.uk!]),
);

export const v2DeCopy: Record<string, CalculatorSeoCopy> = Object.fromEntries(
  published.filter((d) => d.copy?.de).map((d) => [d.id, d.copy!.de!]),
);

/**
 * Калькулятор доступен во всех локалях сборки, если владеет копирайтом для них.
 * Прежде это решал центральный список идентификаторов — из-за него добавление
 * калькулятора требовало правки общего файла.
 */
export const v2FullParityIds: readonly string[] = published
  .filter((d) => d.copy?.en && d.copy?.uk)
  .map((d) => d.id);

export const v2PublishedExamples: readonly { id: string; example: CalculatorPublishedExample }[] =
  published.filter((d) => d.publishedExample).map((d) => ({ id: d.id, example: d.publishedExample! }));
`;
}

/**
 * Runtime-манифест: только то, что действительно выполняется в браузере.
 *
 * Разделение не косметическое. Полный манифест тянет `definition.ts`, а вместе
 * с ним SEO-тексты, FAQ и длинные описания — и всё это попадало в клиентский
 * бандл острова, раздув его на 17 КБ. Runtime-манифест импортирует функции
 * напрямую из их модулей, минуя определение, поэтому в браузер уезжает только
 * код расчёта.
 */
export function renderRuntimeManifest(ids: readonly string[], dir?: string): string {
  const alias = (id: string, kind: string) => `${kind}_${id.replace(/[^a-zA-Z0-9]+/g, '_')}`;
  const imports: string[] = [];
  const compute: string[] = [];
  const validators: string[] = [];
  const contextual: string[] = [];
  const shared: string[] = [];

  for (const id of ids) {
    // В браузер уезжает только код выпущенных калькуляторов.
    if (lifecycleOf(id, dir) !== 'released') continue;
    const modules = runtimeModules(id, dir);
    if (modules.compute) {
      imports.push(`import { compute as ${alias(id, 'compute')} } from './${id}/compute';`);
      compute.push(`  '${id}': ${alias(id, 'compute')},`);
    }
    if (modules.validate) {
      imports.push(`import { validate as ${alias(id, 'validate')} } from './${id}/validate';`);
      validators.push(`  '${id}': ${alias(id, 'validate')},`);
    }
    if (modules.contextualField) {
      imports.push(`import { contextualField as ${alias(id, 'ctx')} } from './${id}/contextualField';`);
      contextual.push(`  '${id}': ${alias(id, 'ctx')},`);
    }
    imports.push(`import { shared as ${alias(id, 'shared')} } from './${id}/shared.generated';`);
    shared.push(`  '${id}': ${alias(id, 'shared')},`);
  }

  const legacy = [...legacyRunnerMap()].filter(([id]) => !ids.includes(id));
  // Четыре валютные страницы делят один расчёт, поэтому импорт выводится один раз.
  for (const name of new Set(legacy.map(([, entry]) => entry.name))) {
    const entry = legacy.find(([, item]) => item.name === name)?.[1] as { name: string; module: string };
    imports.push(`import { ${name} } from '../lib/calculators/${entry.module.replace(/^\.\/calculators\//, '')}';`);
  }
  for (const [id] of legacy) {
    imports.push(`import { shared as ${alias(id, 'legacy')} } from '../components/islands/legacy/${id}/shared.generated';`);
  }
  const legacyRuntimes = legacy
    .map(([id, entry]) => `  '${id}': { compute: ${entry.name}, localization: ${alias(id, 'legacy')} },`)
    .join('\n');

  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Только runtime: этот файл попадает в клиентский бандл, поэтому он не должен
// импортировать definition-объекты с SEO-текстами и FAQ.
//
// Каждый runtime-модуль калькулятора обязан экспортировать функцию под
// фиксированным именем: compute.ts → compute, validate.ts → validate,
// contextualField.ts → contextualField. Генератор ничего не угадывает по id —
// первая же попытка это делать сломалась на калькуляторе, чьё имя не легло
// в соглашение.
// Перегенерировать: npm run calculators:generate

import type { CalcFunction } from '../lib/types';
import type { CalculatorContextualField, CalculatorValidator } from '../lib/platform/types';
import type { CalculatorClientRuntime } from '../lib/platform/runtime';
import type { CalculatorLocalization } from '../lib/platform/types';
import { withSharedPhrases } from '../lib/platform/runtime';
import { v2Localization } from './localization.generated';

${imports.join('\n')}

export const v2Runners: Record<string, CalcFunction> = {
${compute.join('\n')}
};

export const v2Validators: Record<string, CalculatorValidator> = {
${validators.join('\n')}
};

export const v2ContextualFields: Record<string, CalculatorContextualField> = {
${contextual.join('\n')}
};

/**
 * Полные рантаймы по идентификатору — для сборки и тестов.
 *
 * В клиентский граф этот файл не входит: остров получает рантайм от своей
 * точки входа. Здесь он собран целиком только чтобы тесты могли обратиться
 * к любому калькулятору по идентификатору.
 */
export const v2SharedPhrases: Record<string, CalculatorLocalization> = {
${shared.join('\n')}
};

export const v2Runtimes: Record<string, CalculatorClientRuntime> = Object.fromEntries(
  Object.keys(v2Runners).map((id) => [id, {
    compute: v2Runners[id],
    validate: v2Validators[id],
    contextualField: v2ContextualFields[id],
    localization: withSharedPhrases(
      v2Localization.en[id] || v2Localization.uk[id] || v2Localization.de[id]
        ? { en: v2Localization.en[id], uk: v2Localization.uk[id], de: v2Localization.de[id] }
        : undefined,
      v2SharedPhrases[id] ?? {},
    ),
  }]),
);

/**
 * Рантаймы наследственных калькуляторов — те же, что несут их точки входа.
 * Существуют затем, чтобы тест шёл по тому набору фраз, который увидит
 * посетитель, а не по более полному.
 */
export const legacyRuntimes: Record<string, CalculatorClientRuntime> = {
${legacyRuntimes}
};

export function runtimeFor(id: string): CalculatorClientRuntime {
  const runtime = v2Runtimes[id] ?? legacyRuntimes[id];
  if (!runtime) throw new Error(\`Нет рантайма для калькулятора \${id}\`);
  return runtime;
}
`;
}

/**
 * Манифест локализации: подписи полей и фразы результата, которыми владеют
 * калькуляторы.
 *
 * Отдельный файл, потому что у этих данных два потребителя с разным временем
 * жизни — `i18n` на сборке и `clientI18n` в браузере. Модули калькуляторов,
 * которые он импортирует, не имеют собственных импортов, поэтому цикла между
 * локализацией и платформой не возникает.
 */
export function renderLocalizationManifest(ids: readonly string[], dir?: string): string {
  const withLocalization = ids.filter((id) => runtimeModules(id, dir).localization
    && lifecycleOf(id, dir) === 'released');
  const alias = (id: string) => 'loc_' + id.replace(/[^a-zA-Z0-9]+/g, '_');
  const imports = withLocalization
    .map((id) => `import { localization as ${alias(id)} } from './${id}/localization';`)
    .join('\n');
  const entries = (locale: string) => withLocalization
    .map((id) => `    '${id}': ${alias(id)}.${locale} ?? {},`)
    .join('\n');

  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Локализация калькуляторов V2, размеченная по (локаль, калькулятор, ключ).
// Ключи вроде \`mode\` или \`amount\` встречаются у многих калькуляторов, поэтому
// плоская карта по имени ключа здесь невозможна by construction.
// Перегенерировать: npm run calculators:generate

import type { ScopedLocalization } from '../lib/platform/types';

${imports}

export const v2Localization: ScopedLocalization = {
  en: {
${entries('en')}
  },
  uk: {
${entries('uk')}
  },
  de: {
${entries('de')}
  },
};
`;
}

/**
 * Точка входа калькулятора: общий остров плюс рантайм ровно одного калькулятора.
 *
 * Существует ради разделения клиентского графа. Astro ставит на страницу
 * `component-url` того компонента, который отрендерил маршрут, поэтому каждый
 * калькулятор получает свой чанк, а общий остров Rollup выносит в разделяемый.
 * Рантайм приходит обычной зависимостью модуля — он уже здесь к моменту
 * исполнения острова, поэтому асинхронной загрузки после монтирования нет
 * и гонки «ввод до прихода расчёта» не возникает.
 */
export function renderIslandEntry(id: string, dir?: string): string {
  const modules = runtimeModules(id, dir);
  const imports = [
    "import CalculatorIsland from '../../components/islands/CalculatorIsland';",
    "import type { CalculatorClientRuntime } from '../../lib/platform/runtime';",
    "import { withSharedPhrases } from '../../lib/platform/runtime';",
    "import { shared } from './shared.generated';",
    "import { compute } from './compute';",
  ];
  const fields = ['  compute,'];
  if (modules.validate) { imports.push("import { validate } from './validate';"); fields.push('  validate,'); }
  if (modules.contextualField) {
    imports.push("import { contextualField } from './contextualField';");
    fields.push('  contextualField,');
  }
  if (modules.localization) imports.push("import { localization } from './localization';");
  fields.push(`  localization: withSharedPhrases(${modules.localization ? 'localization' : 'undefined'}, shared),`);
  const name = id.split(/[^a-zA-Z0-9]+/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');

  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа калькулятора ${id}. Перегенерировать: npm run calculators:generate

${imports.join('\n')}

const runtime: CalculatorClientRuntime = {
${fields.join('\n')}
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function ${name}Island(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
`;
}

/**
 * Диспетчер островов: явные литеральные ссылки на компоненты.
 *
 * Каждая ссылка статически видна компилятору Astro. Это обязательное условие:
 * `client:*` умеет гидратировать только компонент, чей модуль Astro может
 * разрешить во время рендера, а выбор из словаря по идентификатору падает
 * с `NoMatchingImport`.
 *
 * Файл линейно растёт по числу калькуляторов, но это стоимость сборки:
 * в браузер уезжает чанк ровно одного выбранного острова.
 */
/**
 * Остров наследственных калькуляторов.
 *
 * Двадцать пять калькуляторов без собственной локализации показывают фразы из
 * общего словаря — им он приезжает целиком, ровно как приезжал раньше всем.
 * Отдельная точка входа нужна именно для этого: словарь остаётся в графе только
 * тех страниц, которые его читают, и уходит из графа трёхсот пятидесяти
 * остальных.
 */
/**
 * Наследственные калькуляторы: идентификатор → модуль расчёта.
 *
 * Читается из клиентского реестра, а не выписывается здесь: реестр и так
 * единственное место, где это соответствие объявлено.
 */
export function legacyRunnerMap(): Map<string, { name: string; module: string }> {
  const source = readFileSync(join(ROOT, 'src/lib/runners.ts'), 'utf8');
  const modules = new Map<string, string>();
  for (const match of source.matchAll(/import \{ (\w+) \} from '(\.[^']*)';/g)) {
    modules.set(match[1], match[2]);
  }
  const byId = new Map<string, { name: string; module: string }>();
  for (const match of source.matchAll(/^  '([a-z0-9-]+)': (\w+),$/gm)) {
    const module = modules.get(match[2]);
    if (module) byId.set(match[1], { name: match[2], module });
  }
  return byId;
}

// Точка входа наследственного калькулятора лежит в собственной директории и
// зовётся так же, как у V2. Это не косметика: чанк получает имя `island`, и
// бюджет выпуска считает его собственным чанком калькулятора, а не общим кодом.
export const legacyIslandPath = (id: string) =>
  join(ROOT, 'src/components/islands/legacy', id, 'island.tsx');
export const legacySharedPath = (id: string) =>
  join(ROOT, 'src/components/islands/legacy', id, 'shared.generated.ts');

/** Отобранные фразы наследственного калькулятора — отдельным модулем, как у V2. */
export function renderLegacySharedPhrases(id: string): string {
  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Общие фразы результата, отобранные под наследственный калькулятор ${id}.
// Перегенерировать: npm run calculators:generate

import type { CalculatorLocalization } from '../../../../lib/platform/types';

export const shared: CalculatorLocalization = ${renderSharedBundle(legacyLiterals(id), '')};
`;
}

/**
 * Отбор фраз наследственного калькулятора: граф его собственного расчёта плюс
 * подписи, объявленные в его определении.
 */
export function legacyLiterals(id: string): string {
  const entry = legacyRunnerMap().get(id);
  const parts: string[] = [];
  if (entry) parts.push(literalsFromGraph([join(ROOT, 'src/lib', `${entry.module.replace(/^\.\//, '')}.ts`)]));
  const calculator = legacyCalculators.find((item) => item.id === id);
  if (calculator?.resultLabels) parts.push(...Object.values(calculator.resultLabels));
  return parts.join('\u0000');
}

/**
 * Точка входа наследственного калькулятора.
 *
 * Своя у каждого — ровно затем же, зачем она есть у калькуляторов V2: страница
 * везёт свой расчёт и свои фразы, а не реестр из двадцати трёх расчётов и общий
 * словарь. Раньше эти двадцать пять страниц были самыми тяжёлыми на сайте.
 */
export function renderLegacyIsland(id: string): string {
  const entry = legacyRunnerMap().get(id);
  if (!entry) throw new Error(`Наследственный калькулятор ${id} не найден в реестре расчётов`);
  const name = id.split(/[^a-zA-Z0-9]+/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Точка входа наследственного калькулятора ${id}.
// Перегенерировать: npm run calculators:generate

import CalculatorIsland from '../../CalculatorIsland';
import type { CalculatorClientRuntime } from '../../../../lib/platform/runtime';
import { ${entry.name} } from '../../../../lib/calculators/${entry.module.replace(/^\.\/calculators\//, '')}';
import { shared } from './shared.generated';

const runtime: CalculatorClientRuntime = {
  compute: ${entry.name},
  localization: shared,
};

type Props = Omit<Parameters<typeof CalculatorIsland>[0], 'runtime'>;

export default function ${name}LegacyIsland(props: Props) {
  return <CalculatorIsland {...props} runtime={runtime} />;
}
`;
}

export function renderDispatch(ids: readonly string[], dir?: string): string {
  const released = ids.filter((id) => lifecycleOf(id, dir) === 'released');
  const name = (id: string) =>
    id.split(/[^a-zA-Z0-9]+/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('') + 'Island';
  const imports = released
    .map((id) => `import ${name(id)} from '../calculators/${id}/island';`)
    .join('\n');
  const branches = released
    .map((id) => `{id === '${id}' && <${name(id)} calc={calc} locale={locale} client:load />}`)
    .join('\n');
  const legacyName = (id: string) =>
    id.split(/[^a-zA-Z0-9]+/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('') + 'LegacyIsland';
  const legacyIds = [...legacyRunnerMap().keys()].filter((id) => !released.includes(id));
  const legacyImports = legacyIds
    .map((id) => `import ${legacyName(id)} from './islands/legacy/${id}/island';`)
    .join('\n');
  const legacyBranches = legacyIds
    .map((id) => `{id === '${id}' && <${legacyName(id)} calc={calc} locale={locale} client:load />}`)
    .join('\n');

  return `---
// СГЕНЕРИРОВАНО. Не редактировать руками.
// Диспетчер островов калькуляторов. Перегенерировать: npm run calculators:generate
//
// Ссылки на компоненты литеральные: \`client:*\` гидратирует только тот
// компонент, чей модуль Astro может разрешить во время рендера. Выбор из
// словаря по идентификатору падает с \`NoMatchingImport\`, поэтому ветки явные.
//
// У наследственных калькуляторов точка входа тоже своя: страница везёт свой
// расчёт и свои фразы, а не реестр всех расчётов и весь словарь.
${legacyImports}
${imports}

const { calc, locale } = Astro.props;
const id = calc.id;
---

${branches}
${legacyBranches}
`;
}
