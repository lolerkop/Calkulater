// Guard бесполезен, если не доказано, что он ловит нарушение. Фикстуры ниже
// содержат ровно те два паттерна, ради запрета которых он написан.

import { describe, expect, it } from 'vitest';
import { findViolations, GUARDED_FILES, v2CalculatorIds } from '../../scripts/check-architecture.mjs';

const ROOT = process.cwd() + '/';

describe('архитектурный guard', () => {
  it('общие рукописные файлы не знают о калькуляторах V2', () => {
    expect(findViolations(ROOT, GUARDED_FILES, v2CalculatorIds(ROOT))).toEqual([]);
  });

  it('ловит ветвление по id калькулятора', () => {
    const found = findViolations(ROOT, ['tests/platform/__fixtures__/violation-branching.ts'], ['percent-calculator']);
    expect(found).toHaveLength(1);
    expect(found[0].kind).toBe('ветвление');
  });

  it('ловит ручную регистрацию в реестре', () => {
    const found = findViolations(ROOT, ['tests/platform/__fixtures__/violation-registry.ts'], ['percent-calculator']);
    expect(found).toHaveLength(1);
    expect(found[0].kind).toBe('ручная регистрация');
  });

  it('не мешает калькулятору знать самого себя', () => {
    expect(findViolations(ROOT, ['src/calculators/percent-calculator/definition.ts'], ['percent-calculator'])).toEqual([]);
  });

  it('не считает нарушением перекрёстные ссылки relatedCalculatorIds', () => {
    const found = findViolations(ROOT, ['src/data/calculators.ts'], v2CalculatorIds(ROOT));
    expect(found).toEqual([]);
  });
});
