// Генератор манифеста категорий.
//
// Устроен так же, как генератор калькуляторов, и по той же причине: общий код
// не должен перечислять категории руками. Директория — единица владения,
// фиксированное имя экспорта — договор, а порядок в манифесте задаёт поле
// order, а не позиция в массиве.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIR = join(ROOT, 'src/categories');
const OUT = join(DIR, 'manifest.generated.ts');
const OUT_RUNTIME = join(DIR, 'aliases.generated.ts');

export function discoverCategoryIds(dir = DIR): string[] {
  return readdirSync(dir)
    .filter((entry) => {
      const full = join(dir, entry);
      if (!statSync(full).isDirectory()) return false;
      try { statSync(join(full, 'definition.ts')); return true; } catch { return false; }
    })
    .sort();
}

/** Порядок читается из исходника: манифест должен быть детерминирован. */
export function orderOf(id: string, dir = DIR): number {
  const source = readFileSync(join(dir, id, 'definition.ts'), 'utf8');
  const match = source.match(/^\s+order: (\d+),$/m);
  if (!match) throw new Error(`Категория ${id}: не объявлен order`);
  return Number(match[1]);
}

/**
 * Рантаймовый манифест: только то, что действительно нужно браузеру.
 *
 * Полный манифест тянет за собой копирайт, вопросы, подсказки и оговорки всех
 * категорий на семнадцати локалях. Поиск живёт на клиенте и импортирует
 * псевдонимы — через общий манифест в бандл уезжало бы всё остальное. Ровно
 * так же в Phase 1 разъехались сборочный и рантаймовый манифесты
 * калькуляторов, и по той же причине.
 */
export function renderAliases(ids: string[], dir = DIR): string {
  const ordered = [...ids].sort((a, b) => orderOf(a, dir) - orderOf(b, dir) || a.localeCompare(b));
  const rows = ordered.map((id) => {
    const source = readFileSync(join(dir, id, 'definition.ts'), 'utf8');
    const match = source.match(/^\s+searchAliases: (".*"|'.*'),$/m);
    if (!match) throw new Error(`Категория ${id}: не объявлены searchAliases`);
    return `  '${id}': ${match[1]},`;
  });
  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Псевдонимы поиска отдельно от полного манифеста: этот файл уезжает в браузер,
// а копирайт, вопросы и подсказки категорий там не нужны.
// Перегенерировать: npm run categories:generate

export const categorySearchAliases = {
${rows.join('\n')}
} as const;
`;
}

export function renderManifest(ids: string[], dir = DIR): string {
  const ordered = [...ids].sort((a, b) => orderOf(a, dir) - orderOf(b, dir) || a.localeCompare(b));

  const duplicates = new Map<number, string[]>();
  for (const id of ordered) {
    const order = orderOf(id, dir);
    duplicates.set(order, [...(duplicates.get(order) ?? []), id]);
  }
  for (const [order, owners] of duplicates) {
    if (owners.length > 1) throw new Error(`Порядок ${order} занят сразу несколькими категориями: ${owners.join(', ')}`);
  }

  const alias = (id: string) => `def_${id.replace(/-/g, '_')}`;
  const imports = ordered
    .map((id) => `import { definition as ${alias(id)} } from './${id}/definition';`)
    .join('\n');

  return `// СГЕНЕРИРОВАНО. Не редактировать руками.
// Категории обнаружены по директориям src/categories/*/definition.ts.
// Перегенерировать: npm run categories:generate

import type { CategoryDefinition } from './types';

${imports}

/** Порядок задан полем order каждой категории, а не этим списком. */
export const categoryIds = [${ordered.map((id) => `'${id}'`).join(', ')}] as const;

export type CategoryId = (typeof categoryIds)[number];

export const categoryDefinitions: readonly CategoryDefinition[] = [
${ordered.map((id) => `  ${alias(id)},`).join('\n')}
];

export const categoryById: Readonly<Record<CategoryId, CategoryDefinition>> = {
${ordered.map((id) => `  '${id}': ${alias(id)},`).join('\n')}
} as const;
`;
}

// Файл исполняется как CLI: vite-node убирает путь скрипта из process.argv,
// поэтому определить прямой запуск изнутри нельзя. Модуль разделён так же, как
// у калькуляторов: чистые функции экспортируются и тестируются, а работа с
// диском идёт здесь, при импорте только этого файла.
{
  const ids = discoverCategoryIds();
  const verify = process.argv.includes('--verify');
  const targets = [
    { path: OUT, content: renderManifest(ids), name: 'manifest.generated.ts' },
    { path: OUT_RUNTIME, content: renderAliases(ids), name: 'aliases.generated.ts' },
  ];
  for (const target of targets) {
    const current = (() => { try { return readFileSync(target.path, 'utf8'); } catch { return ''; } })();
    if (verify) {
      if (current !== target.content) {
        console.error(`Устарел ${target.name}. Запустите npm run categories:generate`);
        process.exit(1);
      }
    } else {
      writeFileSync(target.path, target.content);
    }
  }
  console.log(
    verify
      ? `Манифесты категорий актуальны: ${ids.length} категорий.`
      : `Манифесты категорий собраны: ${ids.length} категорий — ${ids.join(', ')}`,
  );
}
