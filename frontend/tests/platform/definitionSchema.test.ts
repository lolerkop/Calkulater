// Проверка схемы V2-определений. Ловит ошибку в момент написания калькулятора,
// а не на продакшене в виде исчезнувшего поля.

import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../../src/calculators/manifest.generated';
import { validateDefinitions } from '../../src/lib/platform/validateDefinitions';
import type { CalculatorDefinitionV2 } from '../../src/lib/platform/types';

const sample = () => JSON.parse(JSON.stringify({
  id: 'sample', definitionVersion: 1, lifecycle: 'implemented',
  presentation: {
    id: 'sample', name: 'Пример', slug: 'sample', fullPath: '/finance/sample/', category: 'finance',
    shortDescription: '', longDescription: '', seoTitle: '', seoDescription: '', h1: '',
    keywords: [], icon: 'percent', popularity: 1,
    fields: [{ name: 'a', label: 'A', type: 'number' }],
    resultLabels: {}, howToUse: [], howItWorks: '', example: '', faq: [], relatedCalculatorIds: [],
  },
})) as CalculatorDefinitionV2;
const withCompute = (d: CalculatorDefinitionV2) =>
  ({ ...d, compute: () => ({ primary: { label: '', value: '' }, secondary: [] }) }) as CalculatorDefinitionV2;

describe('схема определений', () => {
  it('все реальные определения проходят проверку', () => {
    expect(validateDefinitions(v2Definitions)).toEqual([]);
  });

  it('ловит дублирующийся id', () => {
    const d = withCompute(sample());
    const problems = validateDefinitions([d, d]);
    expect(problems.some((p) => p.problem === 'дублирующийся id')).toBe(true);
  });

  it('ловит неизвестную категорию', () => {
    const d = withCompute(sample());
    (d.presentation as { category: string }).category = 'нет-такой';
    expect(validateDefinitions([d]).some((p) => p.problem.includes('неизвестная категория'))).toBe(true);
  });

  it('ловит дублирующееся имя поля', () => {
    const d = withCompute(sample());
    (d.presentation.fields as unknown[]).push({ name: 'a', label: 'A2', type: 'number' });
    expect(validateDefinitions([d]).some((p) => p.problem.includes('дублирующееся имя поля'))).toBe(true);
  });

  it('ловит зависимость от несуществующего поля', () => {
    const d = withCompute(sample());
    (d.presentation.fields as unknown[]).push({ name: 'b', label: 'B', type: 'number', showIf: { field: 'нет', equals: '1' } });
    expect(validateDefinitions([d]).some((p) => p.problem.includes('несуществующего поля'))).toBe(true);
  });

  it('ловит отсутствие функции расчёта', () => {
    expect(validateDefinitions([sample()]).some((p) => p.problem === 'отсутствует функция расчёта')).toBe(true);
  });

  it('ловит неизвестный статус', () => {
    const d = withCompute(sample());
    (d as { lifecycle: string }).lifecycle = 'какой-то';
    expect(validateDefinitions([d]).some((p) => p.problem.includes('неизвестный статус'))).toBe(true);
  });

  it('требует полный копирайт и эталонные случаи у выпущенных', () => {
    const d = withCompute(sample());
    (d as { lifecycle: string }).lifecycle = 'released';
    const problems = validateDefinitions([d]).map((p) => p.problem);
    expect(problems).toContain('выпущенный калькулятор без английского копирайта');
    expect(problems).toContain('выпущенный калькулятор без украинского копирайта');
    expect(problems).toContain('выпущенный калькулятор без эталонных случаев');
  });
});
