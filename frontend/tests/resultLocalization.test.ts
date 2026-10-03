import { describe, expect, it } from 'vitest';
import { localizeText } from '../src/lib/resultText';
import { calculators } from '../src/data/calculators';
import { allRunners as runners } from '../src/lib/runners.all';
import { buildInitialValues } from '../src/lib/shareLink';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizedResultText } from '../src/lib/resultPhrases';
import type { CalcResult } from '../src/lib/types';
import { calcScreed } from '../src/lib/calculators/screed';
import { localizeText } from '../src/lib/resultText';

describe('time units retain their meaning through phrase translation', () => {
  it('does not reinterpret translated Ukrainian hours as years', () => {
    expect(localizeText('2 ч 0 мин', 'uk', { 'ч': 'год', 'мин': 'хв' })).toBe('2 год 0 хв');
    expect(localizeText('1 ч 30 мин', 'uk', { 'ч': 'год', 'мин': 'хв' })).toBe('1 год 30 хв');
  });
  it.each([
    ['en', '1 year', '2 years'], ['uk', '1 рік', '2 роки'],
    ['de', '1 Jahr', '2 Jahre'], ['es', '1 año', '2 años'],
  ] as const)('preserves year counts in %s', (locale, one, two) => {
    expect(localizeText('1 год', locale, {})).toBe(one);
    expect(localizeText('2 года', locale, {})).toBe(two);
  });
});

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

const BMI = 'bmi-calculator';
const CREDIT = 'credit-calculator';
const SCREED = 'screed-calculator';
const bmi = () => resultOf(BMI, { height: 180, weight: 80 });
const credit = () => resultOf('credit-calculator', { amount: 600000, rate: 12, term: 5 });

describe('result localization: RU is the control locale', () => {
  it('returns the runner output untouched', () => {
    const raw = bmi();
    expect(localizeResult(raw, 'ru')).toBe(raw);
  });

  it('keeps the Russian formatting the runner produced', () => {
    const ru = localizeResult(bmi(), 'ru', BMI, runtimeFor(BMI));
    expect(ru.primary.value).toBe('24,7');
    expect(ru.secondary.find((row) => row.label === 'Категория')?.value).toBe('Норма');
    expect(ru.secondary.find((row) => row.label === 'Ориентир здорового веса')?.value).toBe('≥ 59,9 и < 81,0 кг');
    expect(localizeResult(credit(), 'ru', CREDIT, runtimeFor(CREDIT)).primary.value).toBe('13 347 ₽');
  });
});

describe('result localization: labels and units are translated', () => {
  it('translates EN labels and units', () => {
    const en = localizeResult(credit(), 'en', CREDIT, runtimeFor(CREDIT));
    expect(en.primary.label).toBe('Monthly payment');
    expect(en.secondary.map((row) => row.label)).toContain('Total repayment');
    expect(en.secondary.find((row) => row.label === 'Term')?.value).toBe('60 mo.');
  });

  it('translates UK labels and units', () => {
    const uk = localizeResult(bmi(), 'uk', BMI, runtimeFor(BMI));
    expect(uk.secondary.map((row) => row.label)).toEqual(
      expect.arrayContaining(['Категорія', 'Зріст', 'Вага']),
    );
    expect(uk.secondary.find((row) => row.label === 'Зріст')?.value).toBe('180 см');
  });

  it('translates the fallback-rate row as a label in every published non-RU locale', () => {
    const raw = resultOf('currency-converter', { amount: 100, from: 'EUR', to: 'MDL' });
    const fallback = raw.secondary.find((row) => row.label === 'Резервный источник');
    if (!fallback) {
      // The live snapshot may use BNM instead; exercise the same result row
      // explicitly so this regression remains covered with either provider.
      raw.secondary.push({ label: 'Резервный источник', value: 'Основной источник был недоступен, курс получен из резервного.' });
    }
    for (const [locale, expected] of [
      ['en', 'Fallback source'],
      ['uk', 'Резервне джерело'],
      ['de', 'Ersatzquelle'],
      ['es', 'Fuente de reserva'],
    ] as const) {
      const localized = localizeResult(raw, locale, 'currency-converter', runtimeFor('currency-converter'));
      expect(localized.secondary.map((row) => row.label), locale).toContain(expected);
    }
  });

  it('keeps the actual source dates beside localized currency source names', () => {
    const raw = resultOf('eur-to-mdl', { amount: 100, from: 'EUR', to: 'MDL' });
    const dates = raw.secondary.filter((row) => row.label === 'Источник').map((row) => row.value.match(/\d{4}-\d{2}-\d{2}/)?.[0]);
    expect(dates).toHaveLength(2);
    for (const locale of ['en', 'uk', 'de', 'es'] as const) {
      const localized = localizeResult(raw, locale, 'eur-to-mdl', runtimeFor('eur-to-mdl'));
      const sourceRows = localized.secondary.filter((row) => row.label === ({
        en: 'Source', uk: 'Джерело', de: 'Quelle', es: 'Fuente',
      } as const)[locale]);
      expect(sourceRows, locale).toHaveLength(2);
      expect(sourceRows.map((row) => row.value.match(/\d{4}-\d{2}-\d{2}/)?.[0]), locale).toEqual(dates);
      if (locale !== 'uk') expect(sourceRows.map((row) => row.value).join(' '), locale).not.toMatch(/[А-Яа-яЁё]/);
    }
  });
});

describe('result localization: number formatting per locale', () => {
  // Раннер форматирует числа по ru-RU; английские разделители расставляются
  // на границе представления, остальные локали используют запятую как есть.
  it('EN groups thousands with a comma; the currency symbol still trails', () => {
    const en = localizeResult(credit(), 'en', CREDIT, runtimeFor(CREDIT));
    expect(en.primary.value).toBe('13,347 $');
    expect(en.secondary.find((row) => row.label === 'Total repayment')?.value).toBe('800,800 $');
  });

  // At180cm:18.5×1.8²=59.94kg;25×1.8²=81kg. The upper BMI boundary is exclusive.
  it('EN marks the decimal with a dot and preserves the exclusive upper boundary', () => {
    const en = localizeResult(bmi(), 'en', BMI, runtimeFor(BMI));
    expect(en.primary.value).toBe('24.7');
    expect(en.secondary.find((row) => row.label === 'Healthy weight reference')?.value).toBe('≥ 59.9 and < 81.0 kg');
  });

  it('UK keeps the comma decimal, which is correct for Ukrainian', () => {
    const uk = localizeResult(bmi(), 'uk', BMI, runtimeFor(BMI));
    expect(uk.primary.value).toBe('24,7');
    expect(uk.secondary.find((row) => row.label === 'Орієнтир здорової ваги')?.value).toBe('≥ 59,9 і < 81,0 кг');
  });
});

describe('result localization: UK phrase substitution', () => {
  it('translates the BMI category exactly once', () => {
    const uk = localizeResult(bmi(), 'uk', BMI, runtimeFor(BMI));
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
    const en = localizeResult(credit(), 'en', CREDIT, runtimeFor(CREDIT));
    const text = resultToText({ name: 'Loan calculator' }, en, 'en');
    expect(text).toContain('Loan calculator');
    expect(text).toContain('Monthly payment: 13,347 $');
    expect(text).toContain('Total repayment: 800,800 $');
  });

  it('adds the localized note label when a note exists', () => {
    const uk = localizeResult(bmi(), 'uk', BMI, runtimeFor(BMI));
    const text = resultToText({ name: 'Калькулятор ІМТ' }, uk, 'uk');
    expect(text).toContain('Примітка: ');
  });
});

describe('result localization: единицы объёма', () => {
  it('переводит кубометры так же, как квадратные', () => {
    // EN/DE/ES use Latin SI notation. UK retains the Ukrainian notation
    // also used by the area/volume input fields, including mm/cm prefixes.
    for (const locale of ['en', 'de', 'es'] as const) {
      expect(localizedResultText('1,100 м³', locale)).toBe('1,100 m³');
      expect(localizedResultText('12,00 м²', locale)).toBe('12,00 m²');
      expect(localizedResultText('3 см²; 4 мм³', locale)).toBe('3 cm²; 4 mm³');
    }
    expect(localizedResultText('1,100 м³; 12,00 м²; 3 см²; 4 мм³', 'uk'))
      .toBe('1,100 м³; 12,00 м²; 3 см²; 4 мм³');
  });

  it('не трогает кубометры в русской локали', () => {
    expect(localizedResultText('1,100 м³', 'ru')).toBe('1,100 м³');
  });

  it('переводит единицу внутри полного результата стяжки', () => {
    const en = localizeResult(calcScreed({ mode: 'area', manualArea: 20, thickness: 5, reserve: 0 }), 'en', SCREED, runtimeFor(SCREED));
    expect(en.primary.value).toBe('1.000 m³');
    expect(en.primary.label).toBe('Mortar volume');
    expect(JSON.stringify(en)).not.toMatch(/[А-Яа-яЁё]/);
  });
});

describe('original Russian count word boundaries',()=>{
 it('fractional years do not match only their decimal tail',()=>{expect(localizeText('12,01 лет','en',{})).toBe('12,01 years');expect(localizeText('2.1 лет','en',{})).toBe('2.1 years');});
 it('year words do not consume the prefix of a different Russian word',()=>expect(localizeText('1 годовых','en',{'годовых':'yearly'})).toBe('1 yearly'));
});

it('owned day abbreviation retains precedence for whole and fractional durations',()=>{expect(localizeText('28 дн.','en',{'дн.':'d'})).toBe('28 d');expect(localizeText('28,01 дн.','en',{'дн.':'d'})).toBe('28,01 d');expect(localizeText('28 дн.','en',{})).toBe('28 days');});
