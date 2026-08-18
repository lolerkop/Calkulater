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
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const CALC_DIR = join(ROOT, 'src/calculators');
export const MANIFEST_PATH = join(CALC_DIR, 'manifest.generated.ts');
export const RUNTIME_PATH = join(CALC_DIR, 'runtime.generated.ts');
export const LOCALIZATION_PATH = join(CALC_DIR, 'localization.generated.ts');

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
  }

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
};
`;
}
