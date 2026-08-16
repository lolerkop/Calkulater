import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { runners } from '../src/lib/runners';
import { buildInitialValues } from '../src/lib/shareLink';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';
import { localizedResultText } from '../src/lib/clientI18n';
import type { CalcResult } from '../src/lib/types';

// Характеризация текущего конвейера локализации результата. Значения считаются
// настоящими раннерами, поэтому тесты описывают то, что реально видит посетитель.
// Часть ожиданий фиксирует известные дефекты — они помечены LEGACY и должны
// поменяться намеренно, когда дефект будут исправлять.
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

describe('result localization: LEGACY number formatting', () => {
  // Раннер форматирует числа через Intl.NumberFormat('ru-RU'), а слой локализации
  // заменяет только слова, символ валюты и единицы — цифры он не трогает.
  it('LEGACY: EN keeps the Russian group separator and a postfix currency symbol', () => {
    const en = localizeResult(credit(), 'en');
    expect(en.primary.value).toBe('13 347 $');
    expect(en.secondary.find((row) => row.label === 'Total repayment')?.value).toBe('800 800 $');
  });

  it('LEGACY: EN keeps the Russian decimal comma', () => {
    const en = localizeResult(bmi(), 'en');
    expect(en.primary.value).toBe('24,7');
    expect(en.secondary.find((row) => row.label === 'Healthy weight reference')?.value).toBe('59,9–80,7 kg');
  });

  it('UK keeps the comma decimal, which is correct for Ukrainian', () => {
    const uk = localizeResult(bmi(), 'uk');
    expect(uk.primary.value).toBe('24,7');
    expect(uk.secondary.find((row) => row.label === 'Орієнтир здорової ваги')?.value).toBe('59,9–80,7 кг');
  });
});

describe('result localization: LEGACY UK phrase corruption', () => {
  // Словарь фраз применяется повторно к уже переведённой строке, а украинский
  // перевод «Норма» начинается с «Норма», поэтому подстановка срабатывает дважды.
  it('LEGACY: the BMI category is doubled in UK', () => {
    const uk = localizeResult(bmi(), 'uk');
    expect(uk.secondary.find((row) => row.label === 'Категорія')?.value)
      .toBe('Нормальний діапазонльний діапазон');
  });

  it('LEGACY: the transformation is not idempotent for that phrase', () => {
    const once = localizedResultText('Норма', 'uk');
    expect(once).toBe('Нормальний діапазонльний діапазон');
    expect(localizedResultText(once, 'uk')).not.toBe(once);
  });

  it('is the only non-idempotent value across every calculator and locale', () => {
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
          const once = localizedResultText(value, locale);
          if (localizedResultText(once, locale) !== once) offenders.push(`${locale}:${calculator.id}:${value}`);
        }
      }
    }
    expect(offenders).toEqual(['uk:bmi-calculator:Норма']);
  });
});

describe('result localization: copied text follows the visible result', () => {
  it('serialises the localized values, not the raw ones', () => {
    const en = localizeResult(credit(), 'en');
    const text = resultToText({ name: 'Loan calculator' }, en, 'en');
    expect(text).toContain('Loan calculator');
    expect(text).toContain('Monthly payment: 13 347 $');
    expect(text).toContain('Total repayment: 800 800 $');
  });

  it('adds the localized note label when a note exists', () => {
    const uk = localizeResult(bmi(), 'uk');
    const text = resultToText({ name: 'Калькулятор ІМТ' }, uk, 'uk');
    expect(text).toContain('Примітка: ');
  });
});
