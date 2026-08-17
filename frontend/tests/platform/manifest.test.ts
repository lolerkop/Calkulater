// Манифест — единственная точка, знающая обо всех калькуляторах V2.
// Если он перестанет быть детерминированным или начнёт пропускать невыпущенные
// определения в публичные списки, вся архитектура Phase 1 теряет смысл.

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { v2Calculators, v2Definitions, v2EnCopy, v2UkCopy } from '../../src/calculators/manifest.generated';
import { v2ContextualFields, v2Runners, v2Validators } from '../../src/calculators/runtime.generated';
import {
  discoverCalculatorIds, renderManifest, renderRuntimeManifest,
} from '../../scripts/calculatorManifestSource.mts';

describe('манифест калькуляторов V2', () => {
  it('содержит хотя бы один калькулятор', () => {
    expect(v2Definitions.length).toBeGreaterThan(0);
  });

  it('не содержит дублирующихся id', () => {
    const ids = v2Definitions.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('отсортирован по id — порядок не зависит от обхода файловой системы', () => {
    const ids = v2Definitions.map((d) => d.id);
    expect(ids).toEqual([...ids].sort());
  });

  it('совпадает с тем, что сгенерировал бы генератор сейчас', () => {
    const ids = discoverCalculatorIds();
    expect(readFileSync('src/calculators/manifest.generated.ts', 'utf8')).toBe(renderManifest(ids));
    expect(readFileSync('src/calculators/runtime.generated.ts', 'utf8')).toBe(renderRuntimeManifest(ids));
  });

  it('runtime-манифест не тянет тексты определений в клиентский бандл', () => {
    const runtime = readFileSync('src/calculators/runtime.generated.ts', 'utf8');
    expect(runtime).not.toContain('/definition');
    expect(runtime).not.toContain('seoTitle');
  });

  it('генерация детерминирована: два прогона дают одинаковый результат', () => {
    const ids = discoverCalculatorIds();
    expect(renderManifest(ids)).toBe(renderManifest(ids));
  });

  it('публикует только выпущенные калькуляторы', () => {
    const released = v2Definitions.filter((d) => d.lifecycle === 'released').map((d) => d.id);
    expect(v2Calculators.map((c) => c.id).sort()).toEqual(released.sort());
    expect(Object.keys(v2Runners).sort()).toEqual(released.sort());
  });

  it('id определения совпадает с id его представления', () => {
    for (const definition of v2Definitions) {
      expect(definition.presentation.id).toBe(definition.id);
    }
  });

  it('производные реестры не содержат посторонних ключей', () => {
    const known = new Set(v2Definitions.map((d) => d.id));
    for (const registry of [v2Runners, v2Validators, v2ContextualFields, v2EnCopy, v2UkCopy]) {
      for (const key of Object.keys(registry)) expect(known.has(key)).toBe(true);
    }
  });
});
