import { describe, expect, it } from 'vitest';
import type { Field } from '../src/lib/types';
import {
  buildCalculatorQueryString,
  buildHydrationValues,
  buildInitialValues,
  readValuesFromSearch,
  toLocalIsoDate,
} from '../src/lib/shareLink';

const fields: Field[] = [
  { name: 'amount', label: 'Amount', type: 'number', defaultValue: 100 },
  { name: 'mode', label: 'Mode', type: 'select', defaultValue: 'gross', options: [
    { value: 'gross', label: 'Gross' },
    { value: 'net', label: 'Net' },
  ] },
  { name: 'includeTax', label: 'Include tax', type: 'checkbox', defaultValue: false },
  { name: 'deduction', label: 'Deduction', type: 'number', defaultValue: 0, showIf: { field: 'mode', equals: 'net' } },
];

describe('calculator share-link codec', () => {
  it('encodes only changed visible values without mutating the current URL', () => {
    const query = buildCalculatorQueryString(fields, {
      amount: '1 250,5',
      mode: 'net',
      includeTax: true,
      deduction: 50,
    }, 'ru');

    expect(query).toBe('?amount=1250.5&mode=net&includeTax=1&deduction=50');
  });

  it('decodes current and legacy-compatible values', () => {
    const defaults = buildInitialValues(fields);
    const values = readValuesFromSearch(
      fields,
      defaults,
      '?amount=2500.75&mode=net&includeTax=true&deduction=100',
      'en',
    );

    expect(values).toEqual({ amount: 2500.75, mode: 'net', includeTax: true, deduction: 100 });
  });

  it('ignores malformed numbers and unsupported select values', () => {
    const defaults = buildInitialValues(fields);
    const values = readValuesFromSearch(fields, defaults, '?amount=oops&mode=other', 'en');
    expect(values).toEqual(defaults);
  });
});

const dateFields: Field[] = [
  { name: 'startDate', label: 'Start', type: 'date' },
  { name: 'endDate', label: 'End', type: 'date' },
  { name: 'birthDate', label: 'Birth', type: 'date', defaultValue: '1990-01-01' },
  { name: 'amount', label: 'Amount', type: 'number', defaultValue: 100 },
];

function withBrowserGlobal(run: () => void): void {
  const scope = globalThis as { window?: unknown };
  const original = Object.prototype.hasOwnProperty.call(scope, 'window') ? scope.window : undefined;
  const existed = Object.prototype.hasOwnProperty.call(scope, 'window');
  scope.window = {};
  try {
    run();
  } finally {
    if (existed) scope.window = original;
    else delete scope.window;
  }
}

describe('calendar date defaults', () => {
  it('formats the local calendar day, not the UTC one', () => {
    // Момент, который в поясах западнее UTC приходится уже на следующие сутки по UTC:
    // старое toISOString().slice(0, 10) отдавало бы там 2 марта.
    const lateEvening = new Date(2026, 2, 1, 23, 30);
    expect(toLocalIsoDate(lateEvening)).toBe('2026-03-01');

    expect(toLocalIsoDate(new Date(2026, 0, 1, 0, 5))).toBe('2026-01-01');
    expect(toLocalIsoDate(new Date(2025, 11, 31, 23, 59))).toBe('2025-12-31');
    expect(toLocalIsoDate(new Date(2026, 1, 28, 12, 0))).toBe('2026-02-28');
  });

  it('leaves automatic dates empty for the first render even in a browser', () => {
    withBrowserGlobal(() => {
      const clientValues = buildInitialValues(dateFields);
      const firstRender = buildHydrationValues(dateFields);

      // Клиент подставляет реальные даты...
      expect(clientValues.startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(clientValues.endDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      // ...но первый рендер обязан совпасть с серверным, где их нет.
      expect(firstRender.startDate).toBe('');
      expect(firstRender.endDate).toBe('');
    });
  });

  it('matches the server render exactly', () => {
    const serverValues = buildInitialValues(dateFields);
    let firstRenderInBrowser: Record<string, unknown> = {};
    withBrowserGlobal(() => {
      firstRenderInBrowser = buildHydrationValues(dateFields);
    });

    expect(firstRenderInBrowser).toEqual(serverValues);
  });

  it('keeps explicit defaults and non-date fields untouched', () => {
    withBrowserGlobal(() => {
      const firstRender = buildHydrationValues(dateFields);
      expect(firstRender.birthDate).toBe('1990-01-01');
      expect(firstRender.amount).toBe(100);
    });
  });
});
