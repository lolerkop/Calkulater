// Знак валюты в переведённых локалях.
//
// Платформа знает соответствие: RU → ₽, EN → $, UK → ₴ (src/lib/clientI18n.ts,
// src/lib/i18n.ts). Собственный словарь калькулятора имеет приоритет над этим
// соответствием, и пять калькуляторов гасили символ, объявив '₽': ''. На боевом
// это выглядело так: /en/finance/home-equity-loan/ показывал «4,000,000» без
// знака валюты, тогда как /ru/ давал «4 000 000 ₽», а /uk/ — «4 000 000 ₴».
// Расхождение было не новым: lease-payment и payback-period уехали в Production
// с тем же дефектом задолго до этого.
//
// Тест держит два уровня: словари (никто не имеет права гасить символ) и
// фактический вывод настоящих раннеров во всех локалях.

import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../src/calculators/manifest.generated';
import { v2Runtimes } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { calculators } from '../src/data/calculators';
import { allRunners } from '../src/lib/runners.all';
import { buildInitialValues } from '../src/lib/shareLink';
import type { CalcResult } from '../src/lib/types';

/** Символы, которые платформа считает валютой. */
const CURRENCY = ['₽', '$', '₴', '€', '£', '¥', '₺', '₫'];
const CURRENCY_RE = /[₽$₴€£¥₺₫]/;

/**
 * Список калькуляторов, которым разрешено гасить знак валюты.
 * Пуст намеренно: гасить символ — значит показать посетителю голое число.
 * Пополнять только вместе с объяснением, почему у величины нет валюты вообще.
 */
const ALLOWLIST: readonly string[] = [];

const everyValue = (result: CalcResult): string =>
  [
    result.primary.value,
    ...result.secondary.map((row) => row.value),
    ...(result.table ? [...result.table.rows.flat(), result.table.note ?? ''] : []),
    result.note ?? '',
  ].join(' ');

describe('словари калькуляторов не гасят знак валюты', () => {
  it('ни один локальный словарь не переводит символ валюты в пустоту', () => {
    const offenders: string[] = [];
    for (const definition of v2Definitions) {
      const runtime = (v2Runtimes as Record<string, { localization?: Record<string, { values?: Record<string, string> }> }>)[definition.id];
      const localization = runtime?.localization;
      if (!localization) continue;
      for (const locale of ['en', 'uk'] as const) {
        const values = localization[locale]?.values;
        if (!values) continue;
        for (const [from, to] of Object.entries(values)) {
          if (!CURRENCY.includes(from)) continue;
          if (to.trim() === '' || !CURRENCY_RE.test(to)) {
            offenders.push(`${definition.id}/${locale}: «${from}» → «${to}»`);
          }
        }
      }
    }
    expect(offenders.filter((row) => !ALLOWLIST.some((id) => row.startsWith(`${id}/`)))).toEqual([]);
  });
});

describe('знак валюты доживает до посетителя во всех локалях', () => {
  const v2WithCurrency = v2Definitions.filter((definition) => {
    const defaults = Object.fromEntries(
      definition.presentation.fields.map((field) => [field.name, field.defaultValue]),
    );
    try {
      return CURRENCY_RE.test(everyValue(definition.compute(defaults as never)));
    } catch {
      return false;
    }
  });

  it('таких калькуляторов V2 действительно много — выборка не выродилась', () => {
    expect(v2WithCurrency.length).toBeGreaterThan(50);
  });

  for (const locale of ['en', 'uk'] as const) {
    it(`${locale}: ни один калькулятор V2 не теряет символ`, () => {
      const lost: string[] = [];
      for (const definition of v2WithCurrency) {
        const defaults = Object.fromEntries(
          definition.presentation.fields.map((field) => [field.name, field.defaultValue]),
        );
        const runtime = (v2Runtimes as Record<string, never>)[definition.id];
        const localized = localizeResult(definition.compute(defaults as never), locale, definition.id, runtime);
        if (!CURRENCY_RE.test(everyValue(localized))) lost.push(definition.id);
      }
      expect(lost).toEqual([]);
    });

    it(`${locale}: рубль не остаётся в переведённом выводе V2`, () => {
      const leaked: string[] = [];
      for (const definition of v2WithCurrency) {
        const defaults = Object.fromEntries(
          definition.presentation.fields.map((field) => [field.name, field.defaultValue]),
        );
        const runtime = (v2Runtimes as Record<string, never>)[definition.id];
        const localized = localizeResult(definition.compute(defaults as never), locale, definition.id, runtime);
        if (everyValue(localized).includes('₽')) leaked.push(definition.id);
      }
      expect(leaked).toEqual([]);
    });
  }

  it('наследственные калькуляторы держат тот же контракт', () => {
    const lost: string[] = [];
    for (const calculator of calculators) {
      const run = (allRunners as Record<string, ((values: never) => CalcResult) | undefined>)[calculator.id];
      if (!run) continue;
      let russian: CalcResult;
      try {
        russian = run(buildInitialValues(calculator.fields) as never);
      } catch {
        continue;
      }
      if (!CURRENCY_RE.test(everyValue(russian))) continue;
      for (const locale of ['en', 'uk'] as const) {
        const localized = localizeResult(russian, locale, calculator.id);
        if (!CURRENCY_RE.test(everyValue(localized))) lost.push(`${calculator.id}/${locale}`);
        if (everyValue(localized).includes('₽')) lost.push(`${calculator.id}/${locale}: остался ₽`);
      }
    }
    expect(lost).toEqual([]);
  });
});
