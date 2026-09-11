// Разделение клиентского рантайма.
//
// До Phase 3 остров содержал реализации всех выпущенных калькуляторов V2:
// посетитель одной страницы скачивал девять чужих расчётов. Тесты ниже
// закрепляют контракт, который это исключает, — и должны падать, если кто-то
// вернёт общий эаger-импорт ради удобства.

import { readFileSync, existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../../src/calculators/manifest.generated';
import {
  discoverCalculatorIds, renderDispatch, renderIslandEntry,
} from '../../scripts/calculatorManifestSource.mts';

const released = v2Definitions.filter((d) => d.lifecycle === 'released').map((d) => d.id);
const DISPATCH = 'src/components/CalculatorIslandDispatch.generated.astro';

describe('точки входа калькуляторов', () => {
  it('у каждого выпущенного калькулятора ровно одна точка входа', () => {
    for (const id of released) {
      expect(existsSync(`src/calculators/${id}/island.tsx`), id).toBe(true);
    }
  });

  it('точка входа импортирует рантайм только своего калькулятора', () => {
    for (const id of released) {
      const source = readFileSync(`src/calculators/${id}/island.tsx`, 'utf8');
      // Относительные импорты — только из собственной директории.
      const relative = [...source.matchAll(/from '(\.\/[^']+)'/g)].map((m) => m[1]);
      expect(relative.length, id).toBeGreaterThan(0);
      for (const other of released) {
        if (other === id) continue;
        expect(source, `${id} тянет ${other}`).not.toContain(`/${other}/`);
      }
    }
  });

  it('невыпущенный калькулятор не получает публичной точки входа', () => {
    const unreleased = v2Definitions.filter((d) => d.lifecycle !== 'released').map((d) => d.id);
    const dispatch = readFileSync(DISPATCH, 'utf8');
    for (const id of unreleased) expect(dispatch, id).not.toContain(`'${id}'`);
  });
});

describe('диспетчер островов', () => {
  const dispatch = readFileSync(DISPATCH, 'utf8');

  it('ссылки на компоненты литеральные, а не выбираются из словаря', () => {
    // `client:*` гидратирует только статически разрешимый компонент; выбор
    // из словаря падает с NoMatchingImport. Именно поэтому ветки явные.
    for (const id of released) {
      expect(dispatch, id).toMatch(new RegExp(`id === '${id}' && <\\w+ `));
    }
    expect(dispatch).not.toMatch(/\[\s*id\s*\]\s*(\?\?|\|\|)/);
  });

  it('каждая точка входа импортирована ровно один раз', () => {
    for (const id of released) {
      const hits = [...dispatch.matchAll(new RegExp(`calculators/${id}/island`, 'g'))];
      expect(hits, id).toHaveLength(1);
    }
  });

  it('у наследственного калькулятора тоже своя точка входа', () => {
    for (const id of ['age-calculator', 'currency-converter', 'bmi-calculator']) {
      expect(dispatch, id).toContain(`id === '${id}'`);
      expect(dispatch, id).toContain(`from './islands/legacy/${id}/island'`);
      const entry = readFileSync(`src/components/islands/legacy/${id}/island.tsx`, 'utf8');
      expect(entry, id).toContain("from './shared.generated'");
      // Свой расчёт, а не реестр всех двадцати шести.
      expect(entry, id).not.toMatch(/lib\/runners/);
    }
  });

  // Ради этого разделения общий словарь и уехал из общего графа: страница
  // калькулятора не должна везти фразы, которых её раннер не печатает.
  it('общий словарь не достаётся клиентскому коду вовсе', () => {
    for (const path of [
      'src/components/islands/CalculatorIsland.tsx',
      'src/components/islands/calculator/resultLocalization.ts',
      'src/components/islands/SearchBox.tsx',
      'src/components/islands/CalculatorCatalog.tsx',
    ]) {
      expect(readFileSync(path, 'utf8'), path).not.toMatch(/from '.*lib\/resultPhrases'/);
    }
  });

  it('каждая точка входа V2 берёт свой отбор фраз, а не общий словарь', () => {
    for (const id of released) {
      const entry = readFileSync(`src/calculators/${id}/island.tsx`, 'utf8');
      expect(entry, id).toContain("from './shared.generated'");
      expect(entry, id).not.toMatch(/lib\/resultPhrases/);
    }
  });

  it('генерация детерминирована и совпадает с закоммиченной', () => {
    const ids = discoverCalculatorIds();
    expect(renderDispatch(ids)).toBe(dispatch);
    expect(renderDispatch(ids)).toBe(renderDispatch(ids));
    for (const id of released) {
      expect(renderIslandEntry(id)).toBe(readFileSync(`src/calculators/${id}/island.tsx`, 'utf8'));
    }
  });
});

describe('общий клиентский код не знает реализаций V2', () => {
  it('остров не импортирует манифесты рантайма и локализации', () => {
    // Это и были четыре ребра, делавшие все калькуляторы достижимыми.
    for (const path of [
      'src/components/islands/CalculatorIsland.tsx',
      'src/components/islands/calculator/validation.ts',
      'src/components/islands/calculator/resultLocalization.ts',
      'src/lib/runners.ts',
    ]) {
      const source = readFileSync(path, 'utf8');
      expect(source, path).not.toMatch(/from '.*calculators\/runtime\.generated'/);
      expect(source, path).not.toMatch(/from '.*calculators\/localization\.generated'/);
    }
    // Реестр наследственных расчётов — тоже реализация, и он тоже уезжал на все
    // страницы: двадцать три модуля на каждой из трёхсот пятидесяти, где ни один
    // из них не вызывается.
    expect(readFileSync('src/components/islands/CalculatorIsland.tsx', 'utf8'))
      .not.toMatch(/from '.*lib\/runners'/);
  });

  it('полный реестр расчётов живёт отдельно от клиентского', () => {
    const client = readFileSync('src/lib/runners.ts', 'utf8');
    expect(client).not.toContain('v2Runners');
    const all = readFileSync('src/lib/runners.all.ts', 'utf8');
    expect(all).toContain('v2Runners');
    // Островом импортируется только клиентский реестр.
    expect(readFileSync('src/components/islands/CalculatorIsland.tsx', 'utf8'))
      .not.toContain('runners.all');
  });
});
