// Сноска таблицы результата: она вычислялась и локализовалась, но слой
// отображения читал только result.note верхнего уровня, поэтому пользователь
// видел молча обрезанную таблицу. На боевом это проверялось так: график
// погашения кредитной карты с итогом «99 мес» показывал ровно 36 строк и ни
// слова о том, что показаны только первые 36.
//
// Тест держит два контракта сразу: разметку (сноска выводится после таблицы и
// связана с ней через aria-describedby) и текстовое представление (копируемый
// результат больше не теряет таблицу целиком).

import { describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ResultPanel } from '../src/components/islands/calculator/results';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';
import { v2Definitions } from '../src/calculators/manifest.generated';
import { v2Runtimes } from '../src/calculators/runtime.generated';
import type { CalcResult } from '../src/lib/types';
import type { Locale } from '../src/lib/clientI18n';

const noop = () => {};

function render(result: CalcResult | null, locale: Locale = 'ru'): string {
  return renderToStaticMarkup(
    createElement(ResultPanel, {
      title: 'Результат',
      result,
      hasValidationErrors: false,
      copied: false,
      locale,
      onCopy: noop,
      onEdit: noop,
      onPrint: noop,
    }),
  );
}

const withTable = (note?: string, topNote?: string): CalcResult => ({
  primary: { label: 'Итог', value: '42' },
  secondary: [{ label: 'Строка', value: '1' }],
  table: {
    title: 'График',
    columns: ['Месяц', 'Платёж'],
    rows: [['1', '100'], ['2', '100']],
    ...(note === undefined ? {} : { note }),
  },
  ...(topNote === undefined ? {} : { note: topNote }),
});

// Поля живут в presentation, а не на верхнем уровне определения.
const fieldDefaults = (def: { presentation: { fields: Array<{ name: string; defaultValue?: unknown }> } }) =>
  Object.fromEntries(def.presentation.fields.map((field) => [field.name, field.defaultValue])) as Record<string, never>;

const definition = (id: string) => {
  const found = v2Definitions.find((item) => item.id === id);
  if (!found) throw new Error(`нет калькулятора: ${id}`);
  return found;
};

describe('сноска таблицы: разметка', () => {
  it('выводится, когда она есть', () => {
    const html = render(withTable('Показаны первые 2 строки'));
    expect(html).toContain('Показаны первые 2 строки');
    expect(html).toContain('data-testid="calc-result-table-note"');
  });

  it('стоит ПОСЛЕ таблицы, а не внутри неё', () => {
    const html = render(withTable('Сноска таблицы'));
    const closingTable = html.indexOf('</table>');
    const notePosition = html.indexOf('Сноска таблицы');
    expect(closingTable).toBeGreaterThan(-1);
    expect(notePosition).toBeGreaterThan(closingTable);
    // семантика таблицы не тронута
    expect(html).toContain('<caption');
    expect(html).toContain('<thead>');
    expect(html).toContain('<tbody>');
    expect(html).toContain('scope="col"');
  });

  it('связана с таблицей через aria-describedby', () => {
    const html = render(withTable('Сноска таблицы'));
    const described = /<table[^>]*aria-describedby="([^"]+)"/.exec(html);
    expect(described, 'таблица должна ссылаться на сноску').not.toBeNull();
    expect(html).toContain(`id="${described![1]}"`);
  });

  it('без сноски не оставляет пустого места', () => {
    const html = render(withTable(undefined));
    expect(html).toContain('<table');
    expect(html).not.toContain('data-testid="calc-result-table-note"');
    expect(html).not.toContain('aria-describedby');
  });

  it('не подменяет и не дублирует сноску верхнего уровня', () => {
    const html = render(withTable('Сноска таблицы', 'Общее примечание'));
    expect(html).toContain('Сноска таблицы');
    expect(html).toContain('Общее примечание');
    expect(html.split('Сноска таблицы').length - 1).toBe(1);
    expect(html.split('Общее примечание').length - 1).toBe(1);
  });
});

describe('сноска таблицы: настоящие калькуляторы', () => {
  // По одному представителю разных разделов: математика, финансы, химия, быт.
  const cases: Array<[string, Record<string, unknown>, 'усечение' | 'безусловная']> = [
    ['arithmetic-progression', { a1: 1, d: 2, n: 50 }, 'усечение'],
    ['fibonacci', { n: 30 }, 'усечение'],
    ['credit-card-payoff', { balance: 500000, apr: 25, payment: 12000 }, 'усечение'],
    ['molar-mass', {}, 'безусловная'],
    ['bakers-percentage', {}, 'безусловная'],
  ];

  for (const [id, inputs, kind] of cases) {
    it(`${id} (${kind}) показывает сноску пользователю`, () => {
      const def = definition(id);
      const defaults = fieldDefaults(def);
      const result = def.compute({ ...defaults, ...inputs } as never);
      expect(result.table, 'калькулятор обязан вернуть таблицу').toBeDefined();
      expect(result.table!.note, 'сноска таблицы обязана быть заполнена').toBeTruthy();
      const html = render(result);
      expect(html).toContain(result.table!.note!);
    });
  }

  it('усечённая таблица прямо сообщает об усечении', () => {
    const def = definition('credit-card-payoff');
    const defaults = fieldDefaults(def);
    const result = def.compute({ ...defaults, balance: 500000, apr: 25, payment: 12000 } as never);
    expect(result.table!.rows.length).toBe(36);
    expect(result.table!.note).toMatch(/36/);
    expect(render(result)).toContain(result.table!.note!);
  });
});

describe('сноска таблицы: три локали', () => {
  // Собственные фразы калькулятора приходят через runtime — без него платформа
  // применяет только общий словарь, и сноска остаётся русской. Первая версия
  // этого теста runtime не передавала и подняла ложную тревогу о непереведённых
  // сносках; продукт был проверен и оказался прав.
  const notes: Array<[string, Record<string, unknown>]> = [
    ['molar-mass', {}],
    ['credit-card-payoff', { balance: 500000, apr: 25, payment: 12000 }],
    ['fibonacci', { n: 40 }],
  ];
  for (const [id, inputs] of notes) {
    for (const locale of ['ru', 'en', 'uk'] as const) {
      it(`${locale}: ${id} — сноска локализуется и попадает в разметку`, () => {
        const def = definition(id);
        const runtime = (v2Runtimes as Record<string, never>)[id];
        const raw = def.compute({ ...fieldDefaults(def), ...inputs } as never);
        const localized = localizeResult(raw, locale, def.id, runtime);
        expect(localized.table?.note, 'сноска не должна потеряться при локализации').toBeTruthy();
        expect(render(localized, locale)).toContain(localized.table!.note!);
        if (locale !== 'ru') {
          expect(localized.table!.note, `${locale}: сноска обязана отличаться от русской`)
            .not.toBe(raw.table!.note);
        }
        if (locale === 'en') {
          expect(localized.table!.note!, 'английская сноска не должна остаться кириллицей')
            .not.toMatch(/[А-Яа-яЁё]/);
        }
      });
    }
  }
});

describe('текстовое представление результата', () => {
  it('переносит таблицу и её сноску, а не только шапку', () => {
    const text = resultToText({ name: 'Тест' }, withTable('Показаны первые 2 строки'), 'ru');
    expect(text).toContain('График');
    expect(text).toContain('Месяц\tПлатёж');
    expect(text).toContain('1\t100');
    expect(text).toContain('Примечание: Показаны первые 2 строки');
  });

  it('без таблицы ничего лишнего не добавляет', () => {
    const text = resultToText(
      { name: 'Тест' },
      { primary: { label: 'Итог', value: '42' }, secondary: [] },
      'ru',
    );
    expect(text).toBe('Тест\nИтог: 42');
  });

  it('настоящий график погашения копируется целиком', () => {
    const def = definition('credit-card-payoff');
    const defaults = fieldDefaults(def);
    const result = def.compute({ ...defaults, balance: 500000, apr: 25, payment: 12000 } as never);
    const text = resultToText({ name: 'Погашение карты' }, result, 'ru');
    for (const row of result.table!.rows) expect(text).toContain(row.join('\t'));
    expect(text).toContain(result.table!.note!);
  });

  for (const locale of ['en', 'uk'] as const) {
    it(`${locale}: копируемый текст содержит локализованную сноску таблицы`, () => {
      const def = definition('molar-mass');
      const defaults = fieldDefaults(def);
      const runtime = (v2Runtimes as Record<string, never>)['molar-mass'];
      const localized = localizeResult(def.compute(defaults as never), locale, def.id, runtime);
      const text = resultToText({ name: def.presentation.name }, localized, locale);
      expect(text).toContain(localized.table!.note!);
    });
  }
});
