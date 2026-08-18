import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { allRunners as runners } from '../src/lib/runners.all';
import { buildInitialValues } from '../src/lib/shareLink';
import { localizedResultText } from '../src/lib/clientI18n';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';
import { calculatorCopy } from '../src/components/islands/calculator/copy';
import type { CalcResult } from '../src/lib/types';

// Согласование счётных слов с числом в клиентском выводе. Русские строки
// приходят из раннеров уже в правильной форме, поэтому проверяется именно
// поведение слоя локализации: форма должна выбираться заново по тому же числу,
// а не подставляться константой. Значения берутся у настоящих раннеров, чтобы
// тест описывал то, что видит посетитель, а не форму записи в исходнике.

function resultOf(id: string, overrides: Record<string, unknown> = {}): CalcResult {
  const calculator = calculators.find((item) => item.id === id);
  if (!calculator) throw new Error(`unknown calculator: ${id}`);
  const run = runners[id];
  if (!run) throw new Error(`no runner: ${id}`);
  return run({ ...buildInitialValues(calculator.fields), ...overrides } as never);
}

const age = (birthDate: string, targetDate: string) => resultOf('age-calculator', { birthDate, targetDate });
const rowValue = (result: CalcResult, label: string) =>
  result.secondary.find((row) => row.label === label)?.value;

// Независимый оракул нужной формы. Категорию числа выбирает Intl.PluralRules,
// то есть таблицы CLDR внутри среды выполнения, а не арифметика проекта: если
// в pluralRu ошибётся условие, тест это увидит.
function expectedForm(
  locale: 'ru' | 'uk' | 'en',
  count: number,
  forms: { one: string; few?: string; many?: string; other?: string },
): string {
  const category = new Intl.PluralRules(locale).select(count);
  const form = forms[category as keyof typeof forms];
  if (!form) throw new Error(`no ${locale} form for category «${category}» of ${count}`);
  return form;
}

describe('English result pluralization', () => {
  it('uses the singular form for exactly one unit', () => {
    expect(localizedResultText('1 год, 1 месяц, 1 день', 'en')).toBe('1 year, 1 month, 1 day');
  });

  it('uses the plural form for zero and for every count above one', () => {
    expect(localizedResultText('0 лет, 0 месяцев, 0 дней', 'en')).toBe('0 years, 0 months, 0 days');
    expect(localizedResultText('2 года, 2 месяца, 2 дня', 'en')).toBe('2 years, 2 months, 2 days');
    expect(localizedResultText('5 лет, 5 месяцев, 5 дней', 'en')).toBe('5 years, 5 months, 5 days');
    expect(localizedResultText('21 год, 11 месяцев, 21 день', 'en')).toBe('21 years, 11 months, 21 days');
    expect(localizedResultText('101 год, 0 месяцев, 0 дней', 'en')).toBe('101 years, 0 months, 0 days');
  });

  it('agrees the day abbreviation it expands into a full word', () => {
    expect(localizedResultText('1 дн.', 'en')).toBe('1 day');
    expect(localizedResultText('0 дн.', 'en')).toBe('0 days');
    expect(localizedResultText('2 дн.', 'en')).toBe('2 days');
    expect(localizedResultText('334 дн.', 'en')).toBe('334 days');
  });

  it('reads the whole number, including the thousands separator', () => {
    expect(localizedResultText('6 784 дн.', 'en')).toBe('6 784 days');
    expect(localizedResultText('1 001 дней', 'en')).toBe('1 001 days');
  });
});

describe('Ukrainian result pluralization', () => {
  // Украинский, как и русский, выбирает форму по двум последним цифрам:
  // 1 — називний однини, 2–4 — називний множини, решта — родовий множини,
  // с исключением для 11–14.
  const years: Array<[number, string]> = [
    [1, 'рік'], [2, 'роки'], [3, 'роки'], [4, 'роки'], [5, 'років'],
    [11, 'років'], [12, 'років'], [14, 'років'], [21, 'рік'], [22, 'роки'],
    [25, 'років'], [101, 'рік'], [111, 'років'],
  ];
  const months: Array<[number, string]> = [
    [1, 'місяць'], [2, 'місяці'], [4, 'місяці'], [5, 'місяців'], [11, 'місяців'],
    [12, 'місяців'], [14, 'місяців'], [21, 'місяць'], [22, 'місяці'], [25, 'місяців'],
  ];
  const days: Array<[number, string]> = [
    [0, 'днів'], [1, 'день'], [2, 'дні'], [3, 'дні'], [4, 'дні'], [5, 'днів'],
    [11, 'днів'], [12, 'днів'], [14, 'днів'], [21, 'день'], [22, 'дні'],
    [25, 'днів'], [101, 'день'], [111, 'днів'],
  ];

  it.each(years)('renders %i as «%s»', (count, form) => {
    expect(localizedResultText(`${count} лет`, 'uk')).toBe(`${count} ${form}`);
  });

  it.each(months)('renders %i as «%s»', (count, form) => {
    expect(localizedResultText(`${count} месяцев`, 'uk')).toBe(`${count} ${form}`);
  });

  it.each(days)('renders %i as «%s»', (count, form) => {
    expect(localizedResultText(`${count} дней`, 'uk')).toBe(`${count} ${form}`);
  });

  it('keeps the day abbreviation unchanged, because it does not inflect', () => {
    expect(localizedResultText('1 дн.', 'uk')).toBe('1 дн.');
    expect(localizedResultText('334 дн.', 'uk')).toBe('334 дн.');
  });

  it('reads the whole number, including the thousands separator', () => {
    expect(localizedResultText('1 001 дней', 'uk')).toBe('1 001 день');
    expect(localizedResultText('6 784 дней', 'uk')).toBe('6 784 дні');
  });
});

describe('Russian control locale', () => {
  it('returns runner strings untouched', () => {
    for (const value of ['1 год, 1 месяц, 1 день', '5 лет, 5 месяцев, 5 дней', '1 дн.', '12 шт.']) {
      expect(localizedResultText(value, 'ru')).toBe(value);
    }
  });

  it('keeps the Russian forms the age runner already chose', () => {
    expect(age('2000-01-31', '2026-03-01').primary.value).toBe('26 лет, 1 месяц, 1 день');
    expect(age('2026-02-27', '2026-03-01').primary.value).toBe('0 лет, 0 месяцев, 2 дня');
    expect(age('2005-03-01', '2026-03-01').primary.value).toBe('21 год, 0 месяцев, 0 дней');
    expect(age('2015-03-01', '2026-03-01').primary.value).toBe('11 лет, 0 месяцев, 0 дней');
  });
});

describe('age calculator through the whole localization pipeline', () => {
  it('agrees every unit of the fixed month-end case', () => {
    const result = age('2000-01-31', '2026-03-01');
    expect(localizeResult(result, 'en').primary.value).toBe('26 years, 1 month, 1 day');
    expect(localizeResult(result, 'uk').primary.value).toBe('26 років, 1 місяць, 1 день');
  });

  it('agrees a value of exactly one in every component', () => {
    const result = age('2025-01-31', '2026-03-01');
    expect(result.primary.value).toBe('1 год, 1 месяц, 1 день');
    expect(localizeResult(result, 'en').primary.value).toBe('1 year, 1 month, 1 day');
    expect(localizeResult(result, 'uk').primary.value).toBe('1 рік, 1 місяць, 1 день');
  });

  it('agrees the days-until-birthday row', () => {
    const result = age('1990-01-02', '2026-01-01');
    expect(rowValue(result, 'До дня рождения')).toBe('1 дн.');
    expect(rowValue(localizeResult(result, 'en'), 'Days until birthday')).toBe('1 day');
    expect(rowValue(localizeResult(result, 'uk'), 'До дня народження')).toBe('1 дн.');
    expect(rowValue(localizeResult(age('1990-01-06', '2026-01-01'), 'en'), 'Days until birthday')).toBe('5 days');
  });

  it('gives the copied text the same forms as the visible result', () => {
    const calc = { name: 'Age calculator' };
    const result = age('2000-01-31', '2026-03-01');
    expect(resultToText(calc, localizeResult(result, 'en'), 'en')).toContain('Age: 26 years, 1 month, 1 day');
    expect(resultToText(calc, localizeResult(result, 'uk'), 'uk')).toContain('Вік: 26 років, 1 місяць, 1 день');
  });
});

describe('working days calculator', () => {
  it('agrees the business-days total in English', () => {
    const oneDay = resultOf('working-days-calculator', { startDate: '2026-03-02', endDate: '2026-03-02' });
    expect(oneDay.primary.value).toBe('1 дн.');
    expect(localizeResult(oneDay, 'en').primary.value).toBe('1 day');
    expect(localizeResult(oneDay, 'uk').primary.value).toBe('1 дн.');

    const week = resultOf('working-days-calculator', { startDate: '2026-03-02', endDate: '2026-03-06' });
    expect(localizeResult(week, 'en').primary.value).toBe('5 days');
  });
});

describe('compound interest term', () => {
  it('agrees the Russian term with its number', () => {
    for (const [years, expected] of [
      [1, '1 год'], [2, '2 года'], [4, '4 года'], [5, '5 лет'],
      [11, '11 лет'], [21, '21 год'], [101, '101 год'],
    ] as Array<[number, string]>) {
      expect(rowValue(resultOf('compound-interest', { years }), 'Срок')).toBe(expected);
    }
  });

  it('agrees the translated term as well', () => {
    const one = resultOf('compound-interest', { years: 1 });
    expect(rowValue(localizeResult(one, 'en'), 'Term')).toBe('1 year');
    expect(rowValue(localizeResult(one, 'uk'), 'Строк')).toBe('1 рік');

    const four = resultOf('compound-interest', { years: 4 });
    expect(rowValue(localizeResult(four, 'en'), 'Term')).toBe('4 years');
    expect(rowValue(localizeResult(four, 'uk'), 'Строк')).toBe('4 роки');
  });
});

describe('field counter badge', () => {
  it('agrees the Russian noun with the number of fields', () => {
    const ru = calculatorCopy('ru').fieldCounter;
    expect(ru(2)).toBe('2 поля');
    expect(ru(3)).toBe('3 поля');
    expect(ru(4)).toBe('4 поля');
    expect(ru(5)).toBe('5 полей');
    expect(ru(6)).toBe('6 полей');
    expect(ru(7)).toBe('7 полей');
    expect(ru(9)).toBe('9 полей');
    expect(ru(10)).toBe('10 полей');
    expect(ru(12)).toBe('12 полей');
  });

  it('agrees the Ukrainian noun with the number of fields', () => {
    const uk = calculatorCopy('uk').fieldCounter;
    expect(uk(2)).toBe('2 поля');
    expect(uk(4)).toBe('4 поля');
    expect(uk(5)).toBe('5 полів');
    expect(uk(12)).toBe('12 полів');
  });

  it('covers every field count the catalogue can actually render', () => {
    const reachable = new Set<number>();
    for (const calculator of calculators) {
      reachable.add(calculator.fields.length);
      reachable.add(calculator.fields.filter((field) => !('showIf' in field && field.showIf)).length);
    }
    expect(reachable.size).toBeGreaterThan(5);
    for (const count of reachable) {
      expect(calculatorCopy('ru').fieldCounter(count), `ru ${count}`)
        .toBe(`${count} ${expectedForm('ru', count, { one: 'поле', few: 'поля', many: 'полей' })}`);
      expect(calculatorCopy('uk').fieldCounter(count), `uk ${count}`)
        .toBe(`${count} ${expectedForm('uk', count, { one: 'поле', few: 'поля', many: 'полів' })}`);
    }
  });
});

describe('every count from 0 to 200 agrees with the CLDR oracle', () => {
  const units = [
    { ru: 'лет', en: { one: 'year', other: 'years' }, uk: { one: 'рік', few: 'роки', many: 'років' } },
    { ru: 'месяцев', en: { one: 'month', other: 'months' }, uk: { one: 'місяць', few: 'місяці', many: 'місяців' } },
    { ru: 'дней', en: { one: 'day', other: 'days' }, uk: { one: 'день', few: 'дні', many: 'днів' } },
  ];

  it.each(units)('agrees «$ru» in English and Ukrainian', (unit) => {
    for (let count = 0; count <= 200; count += 1) {
      expect(localizedResultText(`${count} ${unit.ru}`, 'en'), `en ${count}`)
        .toBe(`${count} ${expectedForm('en', count, unit.en)}`);
      expect(localizedResultText(`${count} ${unit.ru}`, 'uk'), `uk ${count}`)
        .toBe(`${count} ${expectedForm('uk', count, unit.uk)}`);
    }
  });

  it('agrees the expanded day abbreviation in English', () => {
    for (let count = 0; count <= 200; count += 1) {
      expect(localizedResultText(`${count} дн.`, 'en'), `en ${count}`)
        .toBe(`${count} ${expectedForm('en', count, { one: 'day', other: 'days' })}`);
    }
  });
});

describe('strings that must not change', () => {
  it('keeps count-invariant units as they are', () => {
    expect(localizedResultText('1 шт.', 'en')).toBe('1 pcs.');
    expect(localizedResultText('1 шт.', 'uk')).toBe('1 шт.');
    expect(localizedResultText('1 мес.', 'en')).toBe('1 mo.');
    expect(localizedResultText('1 мес.', 'uk')).toBe('1 міс.');
    expect(localizedResultText('1 кг', 'en')).toBe('1 kg');
    expect(localizedResultText('100 см', 'uk')).toBe('100 см');
  });

  it('keeps already correct age phrases identical', () => {
    expect(localizedResultText('36 лет, 5 месяцев, 9 дней', 'en')).toBe('36 years, 5 months, 9 days');
    expect(localizedResultText('36 лет, 5 месяцев, 9 дней', 'uk')).toBe('36 років, 5 місяців, 9 днів');
  });

  it('does not turn a calendar year inside a sentence into a singular unit', () => {
    const note = resultOf('vat-calculator', { operationDate: '2025-12-31', rate: '22' }).note;
    expect(note).toContain('2026 года');
    expect(localizedResultText(note!, 'en')).toContain('2026 years');
    expect(localizedResultText(note!, 'uk')).toContain('2026 років');
  });
});

// Русская сторона той же морфологии. Формы выбирает раннер, а не слой
// локализации, поэтому проверяются они через настоящий вывод калькуляторов.
// Категорию числа снова определяет Intl.PluralRules, то есть таблицы CLDR.
describe('Russian count words across every grammatical class', () => {
  const target = new Date(2026, 2, 1); // 1 марта 2026
  const iso = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const primaryOf = (birth: Date) => age(iso(birth), iso(target)).primary.value;

  const YEARS = { one: 'год', few: 'года', many: 'лет' };
  const MONTHS = { one: 'месяц', few: 'месяца', many: 'месяцев' };
  const DAYS = { one: 'день', few: 'дня', many: 'дней' };

  it.each([0, 1, 2, 4, 5, 11, 14, 21, 22, 25, 101, 111])('agrees %i years', (count) => {
    const birth = new Date(target.getFullYear() - count, target.getMonth(), target.getDate());
    expect(primaryOf(birth)).toContain(`${count} ${expectedForm('ru', count, YEARS)}`);
  });

  it.each([0, 1, 2, 4, 5, 11])('agrees %i months', (count) => {
    const birth = new Date(target.getFullYear(), target.getMonth() - count, target.getDate());
    expect(primaryOf(birth)).toContain(`${count} ${expectedForm('ru', count, MONTHS)}`);
  });

  it.each([0, 1, 2, 4, 5, 11, 14, 21, 22, 25])('agrees %i days', (count) => {
    const birth = new Date(target.getFullYear(), target.getMonth(), target.getDate() - count);
    expect(primaryOf(birth)).toContain(`${count} ${expectedForm('ru', count, DAYS)}`);
  });

  it.each([1, 2, 4, 5, 11, 14, 21, 22, 25, 101, 111])('agrees the compound term of %i years', (years) => {
    expect(rowValue(resultOf('compound-interest', { years }), 'Срок'))
      .toBe(`${years} ${expectedForm('ru', years, YEARS)}`);
  });
});
