import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { runners } from '../src/lib/runners';
import { buildInitialValues } from '../src/lib/shareLink';
import { getCalculatorById } from '../src/lib/i18n';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';
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

function cyrillicWordCount(value: string): number {
  return value.split(/\s+/).filter((word) => CYRILLIC.test(word)).length;
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
      for (const value of [field.min, field.max, 0, -1].filter((v) => v !== undefined)) {
        out.push({ ...base, [field.name]: value });
      }
    } else if (field.options) {
      for (const option of field.options) out.push({ ...base, [field.name]: option.value });
    }
  }
  return out;
}

type Leak = { calculator: string; scenario: string; value: string };

function collectLeaks(locale: 'en' | 'uk', onlyIds?: Set<string>): Leak[] {
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
      const localized = localizeResult(russian, locale);
      const scenario = JSON.stringify(inputs).slice(0, 70);

      for (const value of visibleStrings(localized)) {
        const leaked = locale === 'en'
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
        const text = resultToText({ name }, localizeResult(russian, locale), locale);
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
  // Общий контроль по всему каталогу. Он ловит тот же класс дефекта у любого
  // калькулятора, а не только у трёх новых. Всё, что уже протекало до этой
  // задачи, перечислено ниже поимённо: это отдельные находки, а не разрешение.
  //
  // Эти строки протекали до Expansion Pack #2 и в этой задаче намеренно не
  // чинятся: правка старых калькуляторов в её область не входит. Список закрыт —
  // любая новая утечка уронит тест.
  // Старый долг вычищен: исключений не осталось. Любая утечка runtime-локализации
  // в любом опубликованном калькуляторе теперь роняет тест.
  const PRE_EXISTING_EN: string[] = [];
  const PRE_EXISTING_UK: string[] = [];

  it('английский результат: новых утечек нет', () => {
    const leaks = collectLeaks('en').filter((l) => !EXPANSION_PACK_2.has(l.calculator));
    const unexpected = leaks.filter((l) => !PRE_EXISTING_EN.includes(l.value));
    const shown = unexpected.slice(0, 8).map((l) => `${l.calculator}: «${l.value.slice(0, 70)}»`).join('\n');
    expect(unexpected, `новых утечек ${unexpected.length}:\n${shown}`).toEqual([]);
  });

  it('украинский результат: новых утечек нет', () => {
    const leaks = collectLeaks('uk').filter((l) => !EXPANSION_PACK_2.has(l.calculator));
    const unexpected = leaks.filter((l) => !PRE_EXISTING_UK.includes(l.value));
    const shown = unexpected.slice(0, 8).map((l) => `${l.calculator}: «${l.value.slice(0, 70)}»`).join('\n');
    expect(unexpected, `новых утечек ${unexpected.length}:\n${shown}`).toEqual([]);
  });
});
