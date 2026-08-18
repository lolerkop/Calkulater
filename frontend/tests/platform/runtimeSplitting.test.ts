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

  it('легаси-калькуляторы сохраняют общий остров', () => {
    expect(dispatch).toContain('!V2_IDS.has(id)');
    expect(dispatch).toContain("import CalculatorIsland from './islands/CalculatorIsland'");
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
