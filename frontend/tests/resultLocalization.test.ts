import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { runners } from '../src/lib/runners';
import { buildInitialValues } from '../src/lib/shareLink';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';
import { localizedResultText } from '../src/lib/clientI18n';
import type { CalcResult } from '../src/lib/types';

// Характеризация текущего конвейера локализации результата. Значения считаются
// настоящими раннерами, поэтому тесты описывают то, что реально видит посетитель.
// Ожидания описывают исправленное поведение: EN получает английские разделители,
// UK сохраняет запятую и переводится ровно один раз.
function resultOf(id: string, overrides: Record<string, unknown> = {}): CalcResult {
  const calculator = calculators.find((item) => item.id === id);
  if (!calculator) throw new Error(`unknown calculator: ${id}`);
  const run = runners[id];
  if (!run) throw new Error(`no runner: ${id}`);
  return run({ ...buildInitialValues(calculator.fields), ...overrides } as never);
}

const bmi = () => resultOf('bmi-calculator', { height: 180, weight: 80 });
const credit = () => resultOf('credit-calculator', { amount: 600000, rate: 12, term: 5 });

describe('result localization: RU is the control locale', () => {
  it('returns the runner output untouched', () => {
    const raw = bmi();
    expect(localizeResult(raw, 'ru')).toBe(raw);
  });

  it('keeps the Russian formatting the runner produced', () => {
    const ru = localizeResult(bmi(), 'ru');
    expect(ru.primary.value).toBe('24,7');
    expect(ru.secondary.find((row) => row.label === 'Категория')?.value).toBe('Норма');
    expect(ru.secondary.find((row) => row.label === 'Ориентир здорового веса')?.value).toBe('59,9–80,7 кг');
    expect(localizeResult(credit(), 'ru').primary.value).toBe('13 347 ₽');
  });
});

describe('result localization: labels and units are translated', () => {
  it('translates EN labels and units', () => {
    const en = localizeResult(credit(), 'en');
    expect(en.primary.label).toBe('Monthly payment');
    expect(en.secondary.map((row) => row.label)).toContain('Total repayment');
    expect(en.secondary.find((row) => row.label === 'Term')?.value).toBe('60 mo.');
  });

  it('translates UK labels and units', () => {
    const uk = localizeResult(bmi(), 'uk');
    expect(uk.secondary.map((row) => row.label)).toEqual(
      expect.arrayContaining(['Категорія', 'Зріст', 'Вага']),
    );
    expect(uk.secondary.find((row) => row.label === 'Зріст')?.value).toBe('180 см');
  });
});

describe('result localization: number formatting per locale', () => {
  // Раннер форматирует числа по ru-RU; английские разделители расставляются
  // на границе представления, остальные локали используют запятую как есть.
  it('EN groups thousands with a comma; the currency symbol still trails', () => {
    const en = localizeResult(credit(), 'en');
    expect(en.primary.value).toBe('13,347 $');
    expect(en.secondary.find((row) => row.label === 'Total repayment')?.value).toBe('800,800 $');
  });

  it('EN marks the decimal with a dot', () => {
    const en = localizeResult(bmi(), 'en');
    expect(en.primary.value).toBe('24.7');
    expect(en.secondary.find((row) => row.label === 'Healthy weight reference')?.value).toBe('59.9–80.7 kg');
  });

  it('UK keeps the comma decimal, which is correct for Ukrainian', () => {
    const uk = localizeResult(bmi(), 'uk');
    expect(uk.primary.value).toBe('24,7');
    expect(uk.secondary.find((row) => row.label === 'Орієнтир здорової ваги')?.value).toBe('59,9–80,7 кг');
  });
});

describe('result localization: UK phrase substitution', () => {
  it('translates the BMI category exactly once', () => {
    const uk = localizeResult(bmi(), 'uk');
    expect(uk.secondary.find((row) => row.label === 'Категорія')?.value)
      .toBe('Нормальний діапазон');
  });

  it('returns exactly the dictionary entry, with nothing appended', () => {
    expect(localizedResultText('Норма', 'uk')).toBe('Нормальний діапазон');
  });

  it('leaves no doubled fragment in any localized runner output', () => {
    // Признак прежней порчи — переведённая строка, в которой один и тот же кусок
    // идёт подряд дважды. Проверяется по фактическому выводу всех калькуляторов.
    const offenders: string[] = [];
    for (const calculator of calculators) {
      const run = runners[calculator.id];
      if (!run) continue;
      let raw: CalcResult;
      try {
        raw = run(buildInitialValues(calculator.fields) as never);
      } catch {
        continue;
      }
      const values = [raw.primary.value, ...raw.secondary.map((row) => row.value), raw.note ?? '']
        .filter(Boolean);
      for (const locale of ['en', 'uk'] as const) {
        for (const value of values) {
          const localized = localizedResultText(value, locale);
          if (/(\S{5,})\1/.test(localized)) offenders.push(`${locale}:${calculator.id}:${localized}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });
});

describe('result localization: copied text follows the visible result', () => {
  it('serialises the localized values, not the raw ones', () => {
    const en = localizeResult(credit(), 'en');
    const text = resultToText({ name: 'Loan calculator' }, en, 'en');
    expect(text).toContain('Loan calculator');
    expect(text).toContain('Monthly payment: 13,347 $');
    expect(text).toContain('Total repayment: 800,800 $');
  });

  it('adds the localized note label when a note exists', () => {
    const uk = localizeResult(bmi(), 'uk');
    const text = resultToText({ name: 'Калькулятор ІМТ' }, uk, 'uk');
    expect(text).toContain('Примітка: ');
  });
});
