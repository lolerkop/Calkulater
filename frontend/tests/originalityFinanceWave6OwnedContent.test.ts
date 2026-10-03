import { describe, expect, it } from 'vitest';
import type { CalculatorDef } from '../src/lib/types';
import { definition as definition0 } from '../src/calculators/annuity/definition';
import { contractContent as contractContent0 } from '../src/calculators/annuity/contractContent';
import { localization as localization0 } from '../src/calculators/annuity/localization';
import { shared as shared0 } from '../src/calculators/annuity/shared.generated';
import { definition as definition1 } from '../src/calculators/apr-apy/definition';
import { contractContent as contractContent1 } from '../src/calculators/apr-apy/contractContent';
import { localization as localization1 } from '../src/calculators/apr-apy/localization';
import { shared as shared1 } from '../src/calculators/apr-apy/shared.generated';
import { definition as definition2 } from '../src/calculators/cagr/definition';
import { contractContent as contractContent2 } from '../src/calculators/cagr/contractContent';
import { localization as localization2 } from '../src/calculators/cagr/localization';
import { shared as shared2 } from '../src/calculators/cagr/shared.generated';
import { definition as definition3 } from '../src/calculators/savings-goal/definition';
import { contractContent as contractContent3 } from '../src/calculators/savings-goal/contractContent';
import { localization as localization3 } from '../src/calculators/savings-goal/localization';
import { shared as shared3 } from '../src/calculators/savings-goal/shared.generated';
import { definition as definition4 } from '../src/calculators/lease-payment/definition';
import { contractContent as contractContent4 } from '../src/calculators/lease-payment/contractContent';
import { localization as localization4 } from '../src/calculators/lease-payment/localization';
import { shared as shared4 } from '../src/calculators/lease-payment/shared.generated';
import { definition as definition5 } from '../src/calculators/early-repayment/definition';
import { contractContent as contractContent5 } from '../src/calculators/early-repayment/contractContent';
import { localization as localization5 } from '../src/calculators/early-repayment/localization';
import { shared as shared5 } from '../src/calculators/early-repayment/shared.generated';
import { definition as definition6 } from '../src/calculators/refinancing/definition';
import { contractContent as contractContent6 } from '../src/calculators/refinancing/contractContent';
import { localization as localization6 } from '../src/calculators/refinancing/localization';
import { shared as shared6 } from '../src/calculators/refinancing/shared.generated';
import { definition as definition7 } from '../src/calculators/down-payment/definition';
import { contractContent as contractContent7 } from '../src/calculators/down-payment/contractContent';
import { localization as localization7 } from '../src/calculators/down-payment/localization';
import { shared as shared7 } from '../src/calculators/down-payment/shared.generated';
import { getFinanceWave6MethodSources } from '../src/data/financeWave6MethodSources';
import { validateValues } from '../src/components/islands/calculator/validation';
import { buildCalculatorQueryString, readValuesFromSearch } from '../src/lib/shareLink';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { withSharedPhrases } from '../src/lib/platform/runtime';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const tools = [definition0, definition1, definition2, definition3, definition4, definition5, definition6, definition7];
const contents = [contractContent0, contractContent1, contractContent2, contractContent3, contractContent4, contractContent5, contractContent6, contractContent7];
const localizations = [localization0, localization1, localization2, localization3, localization4, localization5, localization6, localization7];
const shared = [shared0, shared1, shared2, shared3, shared4, shared5, shared6, shared7];
const units = { ru: '₽', en: '$', uk: '₴', de: '€', es: '€' };
const moneyFields = [['amount'], [], ['begin', 'end'], ['goal', 'initial', 'monthly'], ['price', 'down'], ['amount', 'extra'], ['balance', 'fee'], ['price', 'downPayment']];
const defaults = (index: number) => Object.fromEntries(tools[index].presentation.fields.map(field => [field.name, field.defaultValue ?? '']));
const runtime = (index: number) => ({ compute: tools[index].compute, validate: tools[index].validate, contextualField: tools[index].contextualField, localization: withSharedPhrases(localizations[index], shared[index]) });
const identity = {
  "annuity": {
    "ru": {
      "fullPath": "/ru/finance/annuity/",
      "name": "Калькулятор аннуитета",
      "h1": "Калькулятор аннуитета"
    },
    "en": {
      "fullPath": "/en/finance/annuity-calculator/",
      "name": "Annuity payment calculator",
      "h1": "Annuity payment calculator"
    },
    "uk": {
      "fullPath": "/uk/finansy/anuitet/",
      "name": "Калькулятор ануїтету",
      "h1": "Калькулятор ануїтету"
    },
    "de": {
      "fullPath": "/de/finanzen/annuitaetenrechner/",
      "name": "Annuitätenrechner",
      "h1": "Annuitätenrechner"
    },
    "es": {
      "fullPath": "/es/finanzas/cuota-francesa/",
      "name": "Calculadora de cuota francesa",
      "h1": "Calculadora de cuota francesa"
    }
  },
  "apr-apy": {
    "ru": {
      "fullPath": "/ru/finance/apr-apy/",
      "name": "Калькулятор APR и APY",
      "h1": "Калькулятор APR и APY"
    },
    "en": {
      "fullPath": "/en/finance/apr-apy-calculator/",
      "name": "APR and APY calculator",
      "h1": "APR and APY calculator"
    },
    "uk": {
      "fullPath": "/uk/finansy/apr-apy/",
      "name": "Калькулятор APR і APY",
      "h1": "Калькулятор APR і APY"
    },
    "de": {
      "fullPath": "/de/finanzen/effektiver-jahreszins/",
      "name": "Rechner für Nominal- und Effektivzins",
      "h1": "Rechner für Nominal- und Effektivzins"
    },
    "es": {
      "fullPath": "/es/finanzas/tin-y-tae/",
      "name": "Calculadora de TIN y TAE",
      "h1": "Calculadora de TIN y TAE"
    }
  },
  "cagr": {
    "ru": {
      "fullPath": "/ru/finance/cagr/",
      "name": "CAGR-калькулятор",
      "h1": "CAGR-калькулятор"
    },
    "en": {
      "fullPath": "/en/finance/cagr-calculator/",
      "name": "CAGR calculator",
      "h1": "CAGR calculator"
    },
    "uk": {
      "fullPath": "/uk/finansy/cagr-kalkulyator/",
      "name": "CAGR-калькулятор",
      "h1": "CAGR-калькулятор"
    },
    "de": {
      "fullPath": "/de/finanzen/cagr-rechner/",
      "name": "CAGR-Rechner",
      "h1": "CAGR-Rechner"
    },
    "es": {
      "fullPath": "/es/finanzas/calculadora-de-cagr/",
      "name": "Calculadora de CAGR",
      "h1": "Calculadora de CAGR"
    }
  },
  "savings-goal": {
    "ru": {
      "fullPath": "/ru/finance/finansovaya-cel/",
      "name": "Калькулятор финансовой цели",
      "h1": "Калькулятор финансовой цели"
    },
    "en": {
      "fullPath": "/en/finance/savings-goal/",
      "name": "Savings goal calculator",
      "h1": "Savings goal calculator"
    },
    "uk": {
      "fullPath": "/uk/finansy/finansova-meta/",
      "name": "Калькулятор фінансової цілі",
      "h1": "Калькулятор фінансової цілі"
    },
    "de": {
      "fullPath": "/de/finanzen/sparziel-rechner/",
      "name": "Sparzielrechner",
      "h1": "Sparzielrechner"
    },
    "es": {
      "fullPath": "/es/finanzas/objetivo-de-ahorro/",
      "name": "Calculadora de objetivo de ahorro",
      "h1": "Calculadora de objetivo de ahorro"
    }
  },
  "lease-payment": {
    "ru": {
      "fullPath": "/ru/finance/platyozh-po-lizingu/",
      "name": "Калькулятор платежа по лизингу",
      "h1": "Калькулятор платежа по лизингу"
    },
    "en": {
      "fullPath": "/en/finance/lease-payment/",
      "name": "Lease payment calculator",
      "h1": "Lease payment calculator"
    },
    "uk": {
      "fullPath": "/uk/finansy/platizh-za-lizyngom/",
      "name": "Калькулятор платежу за лізингом",
      "h1": "Калькулятор платежу за лізингом"
    },
    "de": {
      "fullPath": "/de/finanzen/leasingrate-rechner/",
      "name": "Leasingratenrechner",
      "h1": "Leasingratenrechner"
    },
    "es": {
      "fullPath": "/es/finanzas/cuota-de-renting/",
      "name": "Calculadora de cuota de renting",
      "h1": "Calculadora de cuota de renting"
    }
  },
  "early-repayment": {
    "ru": {
      "fullPath": "/ru/finance/early-repayment/",
      "name": "Калькулятор досрочного погашения",
      "h1": "Калькулятор досрочного погашения"
    },
    "en": {
      "fullPath": "/en/finance/early-loan-repayment-calculator/",
      "name": "Early loan repayment calculator",
      "h1": "Early loan repayment calculator"
    },
    "uk": {
      "fullPath": "/uk/finansy/dostrokove-pohashennya/",
      "name": "Калькулятор дострокового погашення",
      "h1": "Калькулятор дострокового погашення"
    },
    "de": {
      "fullPath": "/de/finanzen/sondertilgung-rechner/",
      "name": "Rechner für die Sondertilgung",
      "h1": "Rechner für die Sondertilgung"
    },
    "es": {
      "fullPath": "/es/finanzas/amortizacion-anticipada/",
      "name": "Calculadora de amortización anticipada",
      "h1": "Calculadora de amortización anticipada"
    }
  },
  "refinancing": {
    "ru": {
      "fullPath": "/ru/finance/refinansirovanie/",
      "name": "Калькулятор рефинансирования кредита",
      "h1": "Калькулятор рефинансирования кредита"
    },
    "en": {
      "fullPath": "/en/finance/refinancing/",
      "name": "Loan refinancing calculator",
      "h1": "Loan refinancing calculator"
    },
    "uk": {
      "fullPath": "/uk/finansy/refinansuvannya/",
      "name": "Калькулятор рефінансування кредиту",
      "h1": "Калькулятор рефінансування кредиту"
    },
    "de": {
      "fullPath": "/de/finanzen/umschuldung-rechner/",
      "name": "Umschuldungsrechner",
      "h1": "Umschuldungsrechner"
    },
    "es": {
      "fullPath": "/es/finanzas/refinanciacion-de-prestamos/",
      "name": "Calculadora de refinanciación de préstamos",
      "h1": "Calculadora de refinanciación de préstamos"
    }
  },
  "down-payment": {
    "ru": {
      "fullPath": "/ru/finance/down-payment/",
      "name": "Калькулятор первоначального взноса",
      "h1": "Калькулятор первоначального взноса"
    },
    "en": {
      "fullPath": "/en/finance/down-payment-calculator/",
      "name": "Down payment calculator",
      "h1": "Down payment calculator"
    },
    "uk": {
      "fullPath": "/uk/finansy/pershyy-vnesok/",
      "name": "Калькулятор першого внеску",
      "h1": "Калькулятор першого внеску"
    },
    "de": {
      "fullPath": "/de/finanzen/eigenkapital-rechner/",
      "name": "Rechner für das Eigenkapital",
      "h1": "Rechner für das Eigenkapital"
    },
    "es": {
      "fullPath": "/es/finanzas/calculadora-de-entrada/",
      "name": "Calculadora de entrada",
      "h1": "Calculadora de entrada"
    }
  }
} as const;
const inheritedDefaults = {
  "annuity": {
    "amount": 1000000,
    "rate": 12,
    "months": 12
  },
  "apr-apy": {
    "mode": "toApy",
    "rate": 18,
    "periods": 12
  },
  "cagr": {
    "begin": 100000,
    "end": 200000,
    "years": 5
  },
  "savings-goal": {
    "mode": "payment",
    "goal": 1000000,
    "initial": 100000,
    "rate": 8,
    "years": 5,
    "monthly": 15000
  },
  "lease-payment": {
    "price": 2000000,
    "down": 400000,
    "residualPct": 40,
    "months": 36,
    "rate": 12
  },
  "early-repayment": {
    "amount": 3000000,
    "rate": 18,
    "years": 20,
    "extra": 10000
  },
  "refinancing": {
    "balance": 2000000,
    "oldRate": 14,
    "oldMonths": 120,
    "newRate": 10,
    "newMonths": 120,
    "fee": 30000
  },
  "down-payment": {
    "mode": "percent",
    "price": 5000000,
    "percent": 20,
    "downPayment": 1500000
  }
} as const;

describe('FinanceWave6 forty owned candidate copies before public integration', () => {
  for (const [index, tool] of tools.entries()) for (const locale of locales) it(`${tool.id}/${locale}: complete subject copy preserves inherited identity`, () => {
    const candidate: Partial<CalculatorDef> = locale === 'ru' ? tool.presentation : tool.copy![locale]!;
    const baseline = identity[tool.id as keyof typeof identity][locale];
    expect(candidate.name).toBe(baseline.name); expect(candidate.h1).toBe(baseline.h1);
    expect(defaults(index)).toEqual(inheritedDefaults[tool.id as keyof typeof inheritedDefaults]);
    expect(tool.presentation.fields.map(field => field.name)).toEqual(Object.keys(inheritedDefaults[tool.id as keyof typeof inheritedDefaults]));
    const copy = contents[index][locale];
    for (const key of ['longDescription', 'howToUse', 'howItWorks', 'example', 'faq', 'disclaimer'] as const) expect(candidate[key]).toEqual(copy[key]);
    expect(copy.faq!.length).toBeGreaterThanOrEqual(index === 3 || index === 6 ? 5 : 4);
    expect(new Set(copy.faq!.map(item => item.q)).size).toBe(copy.faq!.length);
    expect(JSON.stringify(copy)).not.toMatch(/undefined|NaN|Infinity/);
    if (locale !== 'ru') expect(isCompleteCalculatorCopy(tool.copy![locale])).toBe(true);
    for (const name of moneyFields[index]) expect(tool.presentation.fields.find(field => field.name === name)!.unit).toBe('₽');
    const sources = getFinanceWave6MethodSources(tool.id, locale); expect(sources.length).toBeGreaterThan(0);
    if (locale === 'en' || locale === 'de' || locale === 'es') { expect(JSON.stringify(copy)).not.toMatch(/[А-Яа-яЁё]/); expect(JSON.stringify(sources)).not.toMatch(/[А-Яа-яЁё]/); }
  });
  it('all ten primary bibliography URLs are specifically scoped, without fallback for other tools', () => {
    const urls = new Set(tools.flatMap(tool => getFinanceWave6MethodSources(tool.id, 'en').map(source => source.href)));
    expect(urls.size).toBe(10); expect(getFinanceWave6MethodSources('unreviewed', 'en')).toEqual([]);
  });
});
describe('FinanceWave6 raw period counts survive form and query normalization', () => {
  for (const [index, key] of [[0, 'months'], [1, 'periods'], [4, 'months'], [6, 'oldMonths'], [6, 'newMonths']] as const) for (const locale of locales) {
    it(`${tools[index].id}/${key}/${locale}: rejects exact fractional text and preserves exact whole tails`, () => {
      const fields = tools[index].presentation.fields, values = defaults(index), point = locale === 'en' ? '.' : ',';
      const raw = `${values[key]}${point}00000000000000001`;
      const invalid = { ...values, [key]: raw };
      expect(tools[index].compute(invalid).primary.value).toBe('—');
      const errors = validateValues(tools[index].id, fields, invalid, locale, runtime(index));
      expect(errors[key]).toBe(locale === 'ru' ? 'Количество должно быть целым в допустимом диапазоне' : localizations[index][locale]!.values!['Количество должно быть целым в допустимом диапазоне']);
      const query = buildCalculatorQueryString(fields, invalid, locale);
      expect(new URLSearchParams(query).get(key)).toBe(raw);
      const restored = readValuesFromSearch(fields, values, query, locale);
      expect(restored[key]).toBe(raw); expect(validateValues(tools[index].id, fields, restored, locale, runtime(index))[key]).toBe(errors[key]);
      const whole = { ...values, [key]: `${values[key]}${point}00000000000000000` };
      expect(validateValues(tools[index].id, fields, whole, locale, runtime(index))).toEqual({});
      expect(tools[index].compute(whole).primary.value).toBe(tools[index].compute(values).primary.value);
    });
    it(`${tools[index].id}/${key}/${locale}: query retains a scientific fractional lexeme`, () => {
      const fields = tools[index].presentation.fields, values = defaults(index), raw = `${values[key]}.00000000000000001e0`;
      const restored = readValuesFromSearch(fields, values, `?${key}=${raw}`, locale);
      expect(restored[key]).toBe(raw); expect(validateValues(tools[index].id, fields, restored, locale, runtime(index))[key]).toBeTruthy();
      if (locale === 'en' || locale === 'de' || locale === 'es') expect(validateValues(tools[index].id, fields, restored, locale, runtime(index))[key]).not.toMatch(/[А-Яа-яЁё]/);
    });
  }
});

describe('FinanceWave6 visible timing, optional money and native errors', () => {
  for (const locale of locales) {
    for (const index of [2, 3, 5]) it(`${tools[index].id}/${locale}: fractional years have explicit native help`, () => {
      const fields = tools[index].presentation.fields, field = fields.find(item => item.name === 'years')!, values = { ...defaults(index), years: index === 3 ? 0.5 : 1.5 };
      const contextual = tools[index].contextualField!(field, values, locale);
      expect(contextual.help).toContain(index === 3 ? (locale === 'en' ? '0.5' : '0,5') : (locale === 'en' ? '1.5' : '1,5')); 
      if (locale === 'en' || locale === 'de' || locale === 'es') expect(contextual.help).not.toMatch(/[А-Яа-яЁё]/);
      expect(validateValues(tools[index].id, fields, values, locale, runtime(index))).toEqual({}); expect(tools[index].compute(values).primary.value).not.toBe('—');
    });
    for (const [index, key] of [[3, 'initial'], [4, 'down'], [5, 'extra'], [6, 'fee']] as const) it(`${tools[index].id}/${locale}: optional blank ${key} is zero but a boolean errors`, () => {
      const fields = tools[index].presentation.fields, values = { ...defaults(index), [key]: '' };
      expect(fields.find(field => field.name === key)!.optional).toBe(true);
      expect(validateValues(tools[index].id, fields, values, locale, runtime(index))).toEqual({}); expect(tools[index].compute(values).primary.value).not.toBe('—');
      expect(validateValues(tools[index].id, fields, { ...values, [key]: false }, locale, runtime(index))[key]).toBeTruthy();
    });
    for (const [index, tool] of tools.entries()) it(`${tool.id}/${locale}: numeric, range and mode errors use native runtime`, () => {
      const key = tool.presentation.fields.find(field => field.type === 'number')!.name;
      const invalid = localizeResult(tool.compute({ ...defaults(index), [key]: true }), locale, tool.id, runtime(index));
      expect(invalid.primary.value).toBe('—'); expect(invalid.secondary![0].accent).toBe('red');
      if (locale === 'en' || locale === 'de' || locale === 'es') expect(JSON.stringify(invalid)).not.toMatch(/[А-Яа-яЁё]/);
      if ([1, 3, 7].includes(index)) { const badMode = localizeResult(tool.compute({ ...defaults(index), mode: 'unknown' }), locale, tool.id, runtime(index)); expect(badMode.primary.value).toBe('—'); if (locale === 'en' || locale === 'de' || locale === 'es') expect(JSON.stringify(badMode)).not.toMatch(/[А-Яа-яЁё]/); }
    });
    it(`${locale}: inactive savings and down-payment money is excluded from validation and links`, () => {
      for (const [index, values, inactive] of [[3, { ...defaults(3), mode: 'payment', monthly: true }, 'monthly'], [3, { ...defaults(3), mode: 'term', years: true }, 'years'], [7, { ...defaults(7), mode: 'percent', downPayment: true }, 'downPayment'], [7, { ...defaults(7), mode: 'amount', percent: true }, 'percent']] as const) {
        const fields = tools[index].presentation.fields;
        expect(validateValues(tools[index].id, fields, values, locale, runtime(index))).toEqual({}); expect(tools[index].compute(values).primary.value).not.toBe('—');
        expect(new URLSearchParams(buildCalculatorQueryString(fields, values, locale)).has(inactive)).toBe(false);
      }
    });
  }
});
