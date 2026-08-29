import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { allRunners as runners } from '../src/lib/runners.all';
import { buildInitialValues } from '../src/lib/shareLink';
import { getCalculatorById } from '../src/lib/i18n';
import { v2Runtimes } from '../src/calculators/runtime.generated';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';
import { localizedResultLabel, resultLabelPhrases } from '../src/lib/clientI18n';
import { v2Localization } from '../src/calculators/localization.generated';
import type { CalcResult, Field } from '../src/lib/types';

// Утечка русского текста в переведённые локали на уровне РЕЗУЛЬТАТА.
//
// Существующий localeIsolation.test.ts проверяет данные реестра — имена, слаги,
// описания, метки полей. Строки результата там не появляются вообще: их собирает
// раннер во время расчёта, и переводит их уже клиентский слой по словарю
// resultValueMap. Поэтому калькулятор мог пройти localeIsolation и всё равно
// показывать англоязычному посетителю русское примечание — что и случилось с
// тремя калькуляторами Expansion Pack #2.
//
// Этот тест закрывает именно тот класс: берёт настоящий вывод раннеров, гоняет
// его через настоящий путь локализации и смотрит на то, что видит посетитель.

const CYRILLIC = /[Ѐ-ӿ]/;
// Буквы, которых нет в украинском алфавите: их присутствие означает русский текст.
const RUSSIAN_ONLY_LETTERS = /[ыъэё]/i;

// В украинском многие строки результата законно совпадают с русскими: единицы
// («4 шт. × 2,5 л»), символы («56,7–76,3 кг») и короткие метки («Прогноз на 5 км»).
// Признаком утечки служит связная фраза: четыре и больше кириллических слова,
// дословно совпавшие с русским оригиналом.
const UK_SENTENCE_WORDS = 4;

// Сокращения и аббревиатуры словами не считаются. Причина измерена: конвертеры
// вводят единицы, записанные несколькими токенами, — «мм рт. ст.», «гал. США».
// В украинском они пишутся ровно так же, как в русском, и это не утечка, а
// правильный перевод; но по токенам такая строка выглядела как фраза из четырёх
// слов. Признаком утечки остаётся связная проза, поэтому из счёта исключаются
// токены с точкой на конце (сокращение) и целиком прописные (аббревиатура).
function isProseWord(word: string): boolean {
  return CYRILLIC.test(word) && !word.endsWith('.') && word !== word.toUpperCase();
}

function cyrillicWordCount(value: string): number {
  return value.split(/\s+/).filter(isProseWord).length;
}

function visibleStrings(result: CalcResult): string[] {
  return [
    result.primary.label,
    result.primary.value,
    ...result.secondary.flatMap((row) => [row.label, row.value]),
    ...(result.table
      ? [result.table.title ?? '', ...result.table.columns, ...result.table.rows.flat(), result.table.note ?? '']
      : []),
    result.note ?? '',
  ].filter((value) => value.length > 0);
}

// Сценарии подбираются автоматически: дефолты, границы числовых полей и каждая
// опция каждого переключателя. Так тест видит и обычный результат, и все ветки
// ошибок, а не только счастливый путь.
function scenariosFor(fields: Field[]): Array<Record<string, unknown>> {
  const base = buildInitialValues(fields) as Record<string, unknown>;
  const out: Array<Record<string, unknown>> = [base];
  for (const field of fields) {
    if (field.type === 'number') {
      // Положительное значение обязательно: у необязательного поля значение по
      // умолчанию — ноль, а строка результата, которая появляется только при
      // непустом поле, при нуле не отрисовывается вовсе. Ровно этой дыры
      // хватило, чтобы «Фиксированный сбор» и «Покупательная способность
      // через N» доехали до Production мимо этой проверки.
      for (const value of [field.min, field.max, 0, -1, 1000].filter((v) => v !== undefined)) {
        out.push({ ...base, [field.name]: value });
      }
    } else if (field.options) {
      for (const option of field.options) out.push({ ...base, [field.name]: option.value });
    } else if (field.type === 'date') {
      out.push({ ...base, [field.name]: '2026-08-29' }, { ...base, [field.name]: '' });
    }
  }
  return out;
}

type Leak = { calculator: string; scenario: string; value: string };

// Второй признак утечки — для ПОДПИСЕЙ строк результата, и он точный, а не
// эвристический. Значение можно оценивать только по виду: «4 шт. × 2,5 л» в
// украинском законно совпадает с русским. С подписью иначе — у неё либо есть
// объявленный перевод, либо его нет.
//
// Разница не теоретическая. «Покупательная способность через 1» — три слова,
// то есть ниже порога связной прозы, и русских букв ыъэё в ней нет. Эвристика
// по значению её не видит, а проверка объявления видит сразу.
function undeclaredLabel(label: string, locale: 'en' | 'uk' | 'de', calculatorId: string): boolean {
  if (!CYRILLIC.test(label)) return false;
  if (v2Localization[locale][calculatorId]?.results?.[label] !== undefined) return false;
  if (resultLabelPhrases[label]?.[locale] !== undefined) return false;
  return localizedResultLabel(label, locale) === label;
}

function collectLeaks(locale: 'en' | 'uk' | 'de', onlyIds?: Set<string>): Leak[] {
  const leaks: Leak[] = [];
  for (const calculator of calculators) {
    if (onlyIds && !onlyIds.has(calculator.id)) continue;
    // Калькуляторы без страницы в этой локали посетитель в ней не увидит.
    if (!getCalculatorById(calculator.id, locale)) continue;
    const run = runners[calculator.id];
    if (!run) continue;

    for (const inputs of scenariosFor(calculator.fields)) {
      let russian: CalcResult;
      try {
        russian = run(inputs as never);
      } catch {
        continue;
      }
      const original = new Set(visibleStrings(russian));
      const localized = localizeResult(russian, locale, calculator.id, v2Runtimes[calculator.id]);
      const scenario = JSON.stringify(inputs).slice(0, 70);

      const labels = [
        russian.primary.label,
        ...russian.secondary.map((row) => row.label),
        ...(russian.table ? [russian.table.title ?? '', ...russian.table.columns] : []),
      ].filter(Boolean);
      for (const label of labels) {
        if (undeclaredLabel(label, locale, calculator.id)) {
          leaks.push({ calculator: calculator.id, scenario, value: `подпись без перевода: ${label}` });
        }
      }

      for (const value of visibleStrings(localized)) {
        const leaked = locale !== 'uk'
          ? CYRILLIC.test(value)
          // В украинском кириллица законна, поэтому признаком утечки служит либо
          // русская буква, которой нет в украинском, либо строка, дословно
          // совпавшая с русским оригиналом и слишком длинная, чтобы это было
          // совпадением единицы измерения.
          : RUSSIAN_ONLY_LETTERS.test(value)
            || (original.has(value) && cyrillicWordCount(value) >= UK_SENTENCE_WORDS);
        if (leaked) leaks.push({ calculator: calculator.id, scenario, value });
      }
    }
  }
  return leaks;
}

const EXPANSION_PACK_2 = new Set(['break-even-calculator', 'body-fat-calculator', 'brick-calculator']);

describe('runtime result localization: калькуляторы Expansion Pack #2', () => {
  it('не показывают русский текст в английском результате', () => {
    const leaks = collectLeaks('en', EXPANSION_PACK_2);
    const shown = leaks.slice(0, 8).map((l) => `${l.calculator}: «${l.value.slice(0, 70)}»`).join('\n');
    expect(leaks, `утечек ${leaks.length}:\n${shown}`).toEqual([]);
  });

  it('не показывают русский текст в украинском результате', () => {
    const leaks = collectLeaks('uk', EXPANSION_PACK_2);
    const shown = leaks.slice(0, 8).map((l) => `${l.calculator}: «${l.value.slice(0, 70)}»`).join('\n');
    expect(leaks, `утечек ${leaks.length}:\n${shown}`).toEqual([]);
  });

  it('копируемый текст локализован так же, как видимый результат', () => {
    for (const id of EXPANSION_PACK_2) {
      const calculator = calculators.find((item) => item.id === id)!;
      const russian = runners[id](buildInitialValues(calculator.fields) as never);
      for (const locale of ['en', 'uk'] as const) {
        const name = getCalculatorById(id, locale)!.name;
        const text = resultToText({ name }, localizeResult(russian, locale, id, v2Runtimes[id]), locale);
        if (locale === 'en') {
          expect(text, `${id} EN буфер`).not.toMatch(CYRILLIC);
        } else {
          expect(text, `${id} UK буфер`).not.toMatch(RUSSIAN_ONLY_LETTERS);
        }
      }
    }
  });
});

describe('runtime result localization: остальные опубликованные калькуляторы', () => {
  // Общий контроль по всему каталогу: тот же класс дефекта у любого
  // калькулятора, а не только у трёх новых. Исключений нет — любая утечка
  // роняет тест.
  //
  // Разбит по разделам не ради скорости, а ради предсказуемости: единым тестом
  // проверка занимала больше пяти секунд под нагрузкой полного прогона и
  // упиралась в общий предел — на неизменённом main это воспроизводилось.
  // Покрытие прежнее, работа та же, но каждый тест мелкий, а падение сразу
  // называет раздел.
  const categories = [...new Set(calculators.map((item) => item.category))].sort();

  for (const locale of ['en', 'uk', 'de'] as const) {
    for (const category of categories) {
      const ids = new Set(
        calculators.filter((item) => item.category === category).map((item) => item.id),
      );
      it(`${locale} / ${category}: утечек нет`, () => {
        const leaks = collectLeaks(locale, ids).filter((l) => !EXPANSION_PACK_2.has(l.calculator));
        const shown = leaks.slice(0, 8).map((l) => `${l.calculator}: «${l.value.slice(0, 70)}»`).join('\n');
        expect(leaks, `утечек ${leaks.length}:\n${shown}`).toEqual([]);
      });
    }
  }
});
