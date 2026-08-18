// Запуск генератора манифеста. Вся логика — в `calculatorManifestSource.mts`;
// этот файл существует ровно для того, чтобы побочный эффект записи на диск
// происходил только при явном вызове, а не при импорте из теста.
//
//   npm run calculators:generate  — собрать манифест
//   npm run calculators:verify    — убедиться, что закоммиченный актуален

import { readFileSync, writeFileSync } from 'node:fs';
import {
  discoverCalculatorIds, DISPATCH_PATH, islandEntryPath, LOCALIZATION_PATH, MANIFEST_PATH,
  renderDispatch, renderIslandEntry, renderLocalizationManifest,
  renderManifest, renderRuntimeManifest, RUNTIME_PATH,
} from './calculatorManifestSource.mts';

const isVerify = process.argv.includes('--verify');
const ids = discoverCalculatorIds();
const targets = [
  { path: MANIFEST_PATH, content: renderManifest(ids), name: 'манифест' },
  { path: RUNTIME_PATH, content: renderRuntimeManifest(ids), name: 'runtime-манифест' },
  { path: LOCALIZATION_PATH, content: renderLocalizationManifest(ids), name: 'манифест локализации' },
  { path: DISPATCH_PATH, content: renderDispatch(ids), name: 'диспетчер островов' },
  ...ids.map((id) => ({ path: islandEntryPath(id), content: renderIslandEntry(id), name: `точка входа ${id}` })),
];

for (const target of targets) {
  if (isVerify) {
    let current = '';
    try {
      current = readFileSync(target.path, 'utf8');
    } catch {
      console.error(`Отсутствует ${target.name}. Запустите: npm run calculators:generate`);
      process.exit(1);
    }
    if (current !== target.content) {
      console.error(`Устарел ${target.name}. Запустите: npm run calculators:generate`);
      process.exit(1);
    }
  } else {
    writeFileSync(target.path, target.content, 'utf8');
  }
}
console.log(
  isVerify
    ? `Манифесты актуальны: ${ids.length} калькуляторов V2.`
    : `Манифесты собраны: ${ids.length} калькуляторов V2 — ${ids.join(', ')}`,
);
