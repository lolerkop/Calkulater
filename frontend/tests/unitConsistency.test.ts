// Одна русская единица — одно английское написание по всему сайту.
//
// Литр показывался на английских страницах двумя способами: «1,350 l» у
// rainfall-volume, pipe-weight и aquarium-water-change (собственный словарь
// калькулятора) и «12 L» у fuel-consumption, fuel-oil-mix и molarity
// (платформенный путь). Посетитель видел на соседних страницах разные символы
// одной и той же величины.
//
// Тест не опирается на то, какая карта «правильная»: он сравнивает фактический
// вывод настоящих раннеров и требует, чтобы у русской единицы был ровно один
// английский эквивалент. Заодно ловит и обратный случай — единицу, оставшуюся
// кириллицей.

import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../src/calculators/manifest.generated';
import { v2Runtimes } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import type { CalcResult } from '../src/lib/types';

/** Число вместе с единицей: «1 350 л», «12,5 кг/м», «0,264172 гал. США». */
const MEASURE = /^-?\d[\d   .,]*\s+(\S.*)$/;

type Pair = { ru: string; en: string; calculator: string; label: string };

function rows(result: CalcResult): Array<[string, string]> {
  return [
    ['primary', result.primary.value],
    ...result.secondary.map((row) => [row.label, row.value] as [string, string]),
  ];
}

function collect(): Pair[] {
  const pairs: Pair[] = [];
  for (const definition of v2Definitions) {
    const defaults = Object.fromEntries(
      definition.presentation.fields.map((field) => [field.name, field.defaultValue]),
    );
    let russian: CalcResult;
    try {
      russian = definition.compute(defaults as never);
    } catch {
      continue;
    }
    const runtime = (v2Runtimes as Record<string, never>)[definition.id];
    const english = localizeResult(russian, 'en', definition.id, runtime);
    const ruRows = rows(russian);
    const enRows = rows(english);
    for (let i = 0; i < ruRows.length; i += 1) {
      const ru = MEASURE.exec(ruRows[i][1].trim());
      const en = MEASURE.exec(enRows[i]?.[1].trim() ?? '');
      if (!ru || !en) continue;
      if (!/[А-Яа-яЁё]/.test(ru[1])) continue; // единица и так латиницей — сверять нечего
      pairs.push({ ru: ru[1], en: en[1], calculator: definition.id, label: ruRows[i][0] });
    }
  }
  return pairs;
}

describe('единицы переводятся одинаково на всём сайте', () => {
  const pairs = collect();

  it('выборка не выродилась', () => {
    expect(pairs.length).toBeGreaterThan(80);
  });

  it('у русской единицы ровно один английский эквивалент', () => {
    const byUnit = new Map<string, Map<string, string[]>>();
    for (const pair of pairs) {
      const variants = byUnit.get(pair.ru) ?? new Map<string, string[]>();
      variants.set(pair.en, [...(variants.get(pair.en) ?? []), pair.calculator]);
      byUnit.set(pair.ru, variants);
    }
    const split: string[] = [];
    for (const [ru, variants] of byUnit) {
      if (variants.size > 1) {
        const shown = [...variants].map(([en, ids]) => `«${en}» (${ids.slice(0, 4).join(', ')})`).join(' против ');
        split.push(`«${ru}» → ${shown}`);
      }
    }
    expect(split).toEqual([]);
  });

  it('единица не остаётся кириллицей в английском выводе', () => {
    const cyrillic = pairs
      .filter((pair) => /[А-Яа-яЁё]/.test(pair.en))
      .map((pair) => `${pair.calculator}/${pair.label}: «${pair.ru}» → «${pair.en}»`);
    expect(cyrillic).toEqual([]);
  });
});
