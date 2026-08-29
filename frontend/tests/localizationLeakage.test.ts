import { describe, expect, it } from 'vitest';
import { getCalculators, locales } from '../src/lib/i18n';
import { localizedResultLabel, resultLabelPhrases } from '../src/lib/clientI18n';
import { v2Localization } from '../src/calculators/localization.generated';
import { v2Runners } from '../src/calculators/runtime.generated';
import { runners } from '../src/lib/runners';
import type { CalculatorDef } from '../src/lib/types';

// Русские подписи, протекающие в переведённые локали.
//
// Два дефекта такого рода дожили до Production и были найдены только сплошной
// проверкой: условная строка «Фиксированный сбор», которой не было в картах
// EN и UK, и составная «Покупательная способность через N», у которой точного
// ключа быть не может — раннер собирает её вместе с числом лет.
//
// Критерий здесь один и он важен: утечка — это ОТСУТСТВИЕ объявления, а не
// совпадение с русским словом. «Запас» по-украински тоже «Запас», и объявленный
// тождественный перевод — решение переводчика, а не пропуск.

const CYRILLIC = /[А-Яа-яЁё]/;
const translated = locales.filter((locale) => locale !== 'ru');

// Значения по умолчанию покрывают не всё: половина подписей живёт в ветках,
// куда попадают только другой режим или заполненное необязательное поле.
function scenarios(calculator: CalculatorDef): Array<Record<string, unknown>> {
  const filled = Object.fromEntries(calculator.fields.map((field) => {
    const value = field.defaultValue ?? field.options?.[0]?.value;
    if (value !== undefined && value !== null && value !== '') return [field.name, value];
    if (field.type === 'date') return [field.name, '2026-08-29'];
    if (field.type === 'textarea') return [field.name, '2026-09-01'];
    if (field.type === 'number') return [field.name, 1000];
    return [field.name, 0];
  }));
  const cases: Array<Record<string, unknown>> = [filled];
  for (const field of calculator.fields) {
    for (const option of field.options ?? []) cases.push({ ...filled, [field.name]: option.value });
    if (field.type === 'number') cases.push({ ...filled, [field.name]: 0 }, { ...filled, [field.name]: 1000 });
    if (field.type === 'date') cases.push({ ...filled, [field.name]: '' });
  }
  return cases;
}

function rawLabels(id: string, inputs: Record<string, unknown>): string[] {
  const runner = v2Runners[id] ?? runners[id];
  if (!runner) return [];
  let result;
  try { result = runner(inputs as never); } catch { return []; }
  return [
    result.primary.label,
    ...result.secondary.map((row) => row.label),
    ...(result.table ? [result.table.title ?? '', ...result.table.columns] : []),
  ].filter(Boolean);
}

describe('русские подписи не протекают в переведённые локали', () => {
  it('набор для проверки не выродился', () => {
    expect(translated).toEqual(['en', 'uk', 'de']);
    for (const locale of translated) expect(getCalculators(locale).length).toBeGreaterThan(300);
  });

  for (const locale of translated) {
    it(`${locale}: у каждой русской подписи результата есть объявленный перевод`, () => {
      const missing: string[] = [];
      for (const calculator of getCalculators(locale)) {
        const own = v2Localization[locale][calculator.id]?.results ?? {};
        for (const inputs of scenarios(calculator)) {
          for (const label of rawLabels(calculator.id, inputs)) {
            if (!CYRILLIC.test(label)) continue;
            if (own[label] !== undefined) continue;
            if (resultLabelPhrases[label]?.[locale] !== undefined) continue;
            if (localizedResultLabel(label, locale) !== label) continue;
            missing.push(`${calculator.id} :: ${label}`);
          }
        }
      }
      expect([...new Set(missing)]).toEqual([]);
    });
  }

  it('две подписи, дожившие до Production, переведены поимённо', () => {
    expect(v2Localization.en['currency-exchange-fee'].results?.['Фиксированный сбор']).toBe('Flat charge');
    expect(v2Localization.uk['currency-exchange-fee'].results?.['Фиксированный сбор']).toBe('Фіксований збір');
    expect(v2Localization.de['currency-exchange-fee'].results?.['Фиксированный сбор']).toBe('Feste Gebühr');
    // Составная подпись переводится постоянной частью: точного ключа у неё нет.
    for (const [locale, expected] of [
      ['en', 'Purchasing power after 3'],
      ['uk', 'Купівельна спроможність через 3'],
      ['de', 'Kaufkraft nach 3'],
    ] as const) {
      expect(localizedResultLabel('Покупательная способность через 3', locale)).toBe(expected);
    }
    expect(localizedResultLabel('Покупательная способность через 3', 'ru'))
      .toBe('Покупательная способность через 3');
  });
});
