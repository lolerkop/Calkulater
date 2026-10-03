import { describe, expect, it } from 'vitest';
import type { CalculatorDef } from '../src/lib/types';
import { validateValues } from '../src/components/islands/calculator/validation';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { buildCalculatorQueryString, readValuesFromSearch } from '../src/lib/shareLink';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { getFinanceWave8MethodSources } from '../src/data/financeWave8MethodSources';
import { definition as tool0 } from '../src/calculators/inflation/definition';
import { contractContent as content0 } from '../src/calculators/inflation/contractContent';
import { localization as localization0 } from '../src/calculators/inflation/localization';
import { definition as tool1 } from '../src/calculators/real-return/definition';
import { contractContent as content1 } from '../src/calculators/real-return/contractContent';
import { localization as localization1 } from '../src/calculators/real-return/localization';
import { definition as tool2 } from '../src/calculators/rule-of-72/definition';
import { contractContent as content2 } from '../src/calculators/rule-of-72/contractContent';
import { localization as localization2 } from '../src/calculators/rule-of-72/localization';
import { definition as tool3 } from '../src/calculators/time-value-money/definition';
import { contractContent as content3 } from '../src/calculators/time-value-money/contractContent';
import { localization as localization3 } from '../src/calculators/time-value-money/localization';
import { definition as tool4 } from '../src/calculators/dti/definition';
import { contractContent as content4 } from '../src/calculators/dti/contractContent';
import { localization as localization4 } from '../src/calculators/dti/localization';
import { definition as tool5 } from '../src/calculators/emergency-fund/definition';
import { contractContent as content5 } from '../src/calculators/emergency-fund/contractContent';
import { localization as localization5 } from '../src/calculators/emergency-fund/localization';
import { definition as tool6 } from '../src/calculators/savings-rate/definition';
import { contractContent as content6 } from '../src/calculators/savings-rate/contractContent';
import { localization as localization6 } from '../src/calculators/savings-rate/localization';
import { definition as tool7 } from '../src/calculators/budget-50-30-20/definition';
import { contractContent as content7 } from '../src/calculators/budget-50-30-20/contractContent';
import { localization as localization7 } from '../src/calculators/budget-50-30-20/localization';
const tools = [tool0, tool1, tool2, tool3, tool4, tool5, tool6, tool7];
const contents = [content0, content1, content2, content3, content4, content5, content6, content7];
const localizations = [localization0, localization1, localization2, localization3, localization4, localization5, localization6, localization7];
const identity = {
  "inflation": {
    "ru": {
      "name": "Калькулятор инфляции",
      "slug": "inflation",
      "h1": "Калькулятор инфляции"
    },
    "en": {
      "name": "Inflation calculator",
      "slug": "inflation-calculator",
      "h1": "Inflation calculator"
    },
    "uk": {
      "name": "Калькулятор інфляції",
      "slug": "inflyatsiya",
      "h1": "Калькулятор інфляції"
    },
    "de": {
      "name": "Inflationsrechner",
      "slug": "inflation-rechner",
      "h1": "Inflationsrechner"
    },
    "es": {
      "name": "Calculadora de inflación",
      "slug": "calculadora-de-inflacion",
      "h1": "Calculadora de inflación"
    }
  },
  "real-return": {
    "ru": {
      "name": "Калькулятор реальной доходности",
      "slug": "real-return",
      "h1": "Калькулятор реальной доходности"
    },
    "en": {
      "name": "Real return calculator",
      "slug": "real-return-calculator",
      "h1": "Real return calculator"
    },
    "uk": {
      "name": "Калькулятор реальної дохідності",
      "slug": "realna-dokhidnist",
      "h1": "Калькулятор реальної дохідності"
    },
    "de": {
      "name": "Rechner für die reale Rendite",
      "slug": "reale-rendite-rechner",
      "h1": "Rechner für die reale Rendite"
    },
    "es": {
      "name": "Calculadora de rentabilidad real",
      "slug": "rentabilidad-real",
      "h1": "Calculadora de rentabilidad real"
    }
  },
  "rule-of-72": {
    "ru": {
      "name": "Калькулятор правила 72",
      "slug": "rule-of-72",
      "h1": "Калькулятор правила 72"
    },
    "en": {
      "name": "Rule of 72 calculator",
      "slug": "rule-of-72-calculator",
      "h1": "Rule of 72 calculator"
    },
    "uk": {
      "name": "Калькулятор правила 72",
      "slug": "pravylo-72",
      "h1": "Калькулятор правила 72"
    },
    "de": {
      "name": "Rechner zur Regel von 72",
      "slug": "regel-von-72-rechner",
      "h1": "Rechner zur Regel von 72"
    },
    "es": {
      "name": "Calculadora de la regla del 72",
      "slug": "regla-del-72",
      "h1": "Calculadora de la regla del 72"
    }
  },
  "time-value-money": {
    "ru": {
      "name": "Калькулятор будущей и текущей стоимости денег",
      "slug": "time-value-money",
      "h1": "Калькулятор будущей и текущей стоимости денег"
    },
    "en": {
      "name": "Time value of money calculator",
      "slug": "time-value-of-money-calculator",
      "h1": "Time value of money calculator"
    },
    "uk": {
      "name": "Калькулятор майбутньої та поточної вартості грошей",
      "slug": "vartist-hroshey-u-chasi",
      "h1": "Калькулятор майбутньої та поточної вартості грошей"
    },
    "de": {
      "name": "Rechner zum Zeitwert des Geldes",
      "slug": "zeitwert-des-geldes",
      "h1": "Rechner zum Zeitwert des Geldes"
    },
    "es": {
      "name": "Calculadora del valor temporal del dinero",
      "slug": "valor-temporal-del-dinero",
      "h1": "Calculadora del valor temporal del dinero"
    }
  },
  "dti": {
    "ru": {
      "name": "Калькулятор кредитной нагрузки",
      "slug": "dti",
      "h1": "Калькулятор кредитной нагрузки"
    },
    "en": {
      "name": "Debt-to-income calculator",
      "slug": "debt-to-income",
      "h1": "Debt-to-income calculator"
    },
    "uk": {
      "name": "Калькулятор кредитного навантаження",
      "slug": "kredytne-navantazhennya",
      "h1": "Калькулятор кредитного навантаження"
    },
    "de": {
      "name": "Rechner für die Schuldendienstquote",
      "slug": "schuldendienstquote",
      "h1": "Rechner für die Schuldendienstquote"
    },
    "es": {
      "name": "Calculadora de ratio deuda-ingresos",
      "slug": "ratio-deuda-ingresos",
      "h1": "Calculadora de ratio deuda-ingresos"
    }
  },
  "emergency-fund": {
    "ru": {
      "name": "Калькулятор финансовой подушки",
      "slug": "emergency-fund",
      "h1": "Калькулятор финансовой подушки"
    },
    "en": {
      "name": "Emergency fund calculator",
      "slug": "emergency-fund-calculator",
      "h1": "Emergency fund calculator"
    },
    "uk": {
      "name": "Калькулятор фінансової подушки",
      "slug": "finansova-podushka",
      "h1": "Калькулятор фінансової подушки"
    },
    "de": {
      "name": "Rechner für den Notgroschen",
      "slug": "notgroschen-rechner",
      "h1": "Rechner für den Notgroschen"
    },
    "es": {
      "name": "Calculadora de fondo de emergencia",
      "slug": "fondo-de-emergencia",
      "h1": "Calculadora de fondo de emergencia"
    }
  },
  "savings-rate": {
    "ru": {
      "name": "Калькулятор нормы сбережений",
      "slug": "savings-rate",
      "h1": "Калькулятор нормы сбережений"
    },
    "en": {
      "name": "Savings rate calculator",
      "slug": "savings-rate-calculator",
      "h1": "Savings rate calculator"
    },
    "uk": {
      "name": "Калькулятор норми заощаджень",
      "slug": "kalkulyator-normy-zaoshchadzhen",
      "h1": "Калькулятор норми заощаджень"
    },
    "de": {
      "name": "Sparquotenrechner",
      "slug": "sparquote-rechner",
      "h1": "Sparquotenrechner"
    },
    "es": {
      "name": "Calculadora de tasa de ahorro",
      "slug": "tasa-de-ahorro",
      "h1": "Calculadora de tasa de ahorro"
    }
  },
  "budget-50-30-20": {
    "ru": {
      "name": "Калькулятор бюджета 50/30/20",
      "slug": "budget-50-30-20",
      "h1": "Калькулятор бюджета 50/30/20"
    },
    "en": {
      "name": "50/30/20 budget calculator",
      "slug": "budget-50-30-20-calculator",
      "h1": "50/30/20 budget calculator"
    },
    "uk": {
      "name": "Калькулятор бюджету 50/30/20",
      "slug": "kalkulyator-byudzhetu-50-30-20",
      "h1": "Калькулятор бюджету 50/30/20"
    },
    "de": {
      "name": "Rechner für das 50-30-20-Budget",
      "slug": "50-30-20-budget",
      "h1": "Rechner für das 50-30-20-Budget"
    },
    "es": {
      "name": "Calculadora de presupuesto 50/30/20",
      "slug": "presupuesto-50-30-20",
      "h1": "Calculadora de presupuesto 50/30/20"
    }
  }
} as const;
const originalDefaults = {
  "inflation": {
    "amount": 100000,
    "ratePct": 8,
    "years": 10
  },
  "real-return": {
    "nominal": 12,
    "inflation": 7,
    "amount": 0,
    "years": 1
  },
  "rule-of-72": {
    "rate": 8,
    "amount": 0
  },
  "time-value-money": {
    "mode": "fv",
    "amount": 100000,
    "rate": 12,
    "years": 5,
    "compounding": "month"
  },
  "dti": {
    "payments": 45000,
    "income": 150000
  },
  "emergency-fund": {
    "monthlyExpenses": 85000,
    "months": 6,
    "saved": 210000
  },
  "savings-rate": {
    "income": 100000,
    "expenses": 70000
  },
  "budget-50-30-20": {
    "income": 100000
  }
} as const;
const faqFloor = {
  "inflation": {
    "ru": 5,
    "en": 5,
    "uk": 4,
    "de": 5,
    "es": 5
  },
  "real-return": {
    "ru": 4,
    "en": 4,
    "uk": 4,
    "de": 4,
    "es": 4
  },
  "rule-of-72": {
    "ru": 4,
    "en": 4,
    "uk": 4,
    "de": 4,
    "es": 4
  },
  "time-value-money": {
    "ru": 5,
    "en": 5,
    "uk": 4,
    "de": 5,
    "es": 5
  },
  "dti": {
    "ru": 4,
    "en": 4,
    "uk": 4,
    "de": 4,
    "es": 4
  },
  "emergency-fund": {
    "ru": 4,
    "en": 4,
    "uk": 4,
    "de": 4,
    "es": 4
  },
  "savings-rate": {
    "ru": 4,
    "en": 4,
    "uk": 4,
    "de": 4,
    "es": 4
  },
  "budget-50-30-20": {
    "ru": 4,
    "en": 4,
    "uk": 4,
    "de": 4,
    "es": 4
  }
} as const;
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const units = { ru: '₽', en: '$', uk: '₴', de: '€', es: '€' };
const moneyFields = [['amount'], ['amount'], ['amount'], ['amount'], ['payments','income'], ['monthlyExpenses','saved'], ['income','expenses'], ['income']];
const defaults = (index: number) => Object.fromEntries(tools[index].presentation.fields.map(field => [field.name, field.defaultValue ?? '']));
const runtime = (index: number) => ({ compute: tools[index].compute, contextualField: tools[index].contextualField, localization: localizations[index] });
const malformed: unknown[] = [true, false, NaN, Infinity, -Infinity, 'malformed'];

describe('FinanceWave8 forty owned candidate bodies and preserved identities', () => {
  for (const [index, tool] of tools.entries()) for (const locale of locales) it(`${tool.id}/${locale}: complete subject body, inherited identity/defaults and bounded primary sources`, () => {
    const candidate: Partial<CalculatorDef> = locale === 'ru' ? tool.presentation : tool.copy![locale]!;
    const previous = identity[tool.id as keyof typeof identity][locale];
    expect(candidate.name).toBe(previous.name); expect(candidate.h1).toBe(previous.h1); expect(candidate.slug).toBe(previous.slug);
    expect(defaults(index)).toEqual(originalDefaults[tool.id as keyof typeof originalDefaults]);
    expect(tool.presentation.fields.map(field => field.name)).toEqual(Object.keys(originalDefaults[tool.id as keyof typeof originalDefaults]));
    const copy = contents[index][locale];
    for (const key of ['longDescription','howToUse','howItWorks','example','faq','disclaimer'] as const) expect(candidate[key]).toEqual(copy[key]);
    expect(copy.faq!.length).toBeGreaterThanOrEqual(faqFloor[tool.id as keyof typeof faqFloor][locale]);
    expect(new Set(copy.faq!.map(item => item.q)).size).toBe(copy.faq!.length);
    expect(JSON.stringify(copy)).not.toMatch(/undefined|NaN|Infinity/);
    if (locale !== 'ru') expect(isCompleteCalculatorCopy(tool.copy![locale])).toBe(true);
    for (const field of moneyFields[index]) expect(tool.presentation.fields.find(item => item.name === field)!.unit).toBe('₽');
    const sources = getFinanceWave8MethodSources(tool.id, locale); expect(sources.length).toBeGreaterThan(0);
    if (locale === 'en' || locale === 'de' || locale === 'es') {
      expect(JSON.stringify(copy)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
      expect(JSON.stringify(sources)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
    }
  });
  it('ten specifically read source URLs are not supplied to unrelated pages', () => {
    const urls = new Set(tools.flatMap(tool => getFinanceWave8MethodSources(tool.id,'en').map(source => source.href)));
    expect(urls.size).toBe(10); expect(getFinanceWave8MethodSources('unreviewed','en')).toEqual([]);
  });
});

describe('FinanceWave8 actual raw form/query and native result pipeline', () => {
  for (const [index, tool] of tools.entries()) for (const locale of locales) {
    for (const field of tool.presentation.fields.filter(item => item.type === 'number')) it(`${tool.id}/${field.name}/${locale}: active boolean/nonfinite/malformed input receives native visible validation`, () => {
      for (const invalid of malformed) {
        const errors = validateValues(tool.id, tool.presentation.fields, { ...defaults(index), [field.name]: invalid } as never, locale, runtime(index));
        expect(errors[field.name]).toBeTruthy();
        if (locale === 'en' || locale === 'de' || locale === 'es') expect(errors[field.name]).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
      }
      const raw = '1e-9999';
      const restored = readValuesFromSearch(tool.presentation.fields, defaults(index), `?${field.name}=${raw}`, locale);
      expect(restored[field.name]).toBe(raw);
      expect(validateValues(tool.id, tool.presentation.fields, restored, locale, runtime(index))[field.name]).toBeTruthy();
    });
    it(`${tool.id}/${locale}: correct inherited default values retain native result labels/units`, () => {
      const result = localizeResult(tool.compute(defaults(index)),locale,tool.id,runtime(index));
      expect(result.primary.value).not.toBe('—');
      expect(JSON.stringify(result)).not.toMatch(/undefined|NaN|Infinity/);
      if (index !== 1 && index !== 2) expect(JSON.stringify(result)).toContain(units[locale]);
      if (locale === 'en' || locale === 'de' || locale === 'es') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
    });
    it(`${tool.id}/${locale}: compute numeric-domain error uses the same native runtime`, () => {
      const badField = tool.presentation.fields.find(field => field.type === 'number')!.name;
      const result = localizeResult(tool.compute({ ...defaults(index), [badField]: true }),locale,tool.id,runtime(index));
      expect(result.primary.value).toBe('—');
      if (locale === 'en' || locale === 'de' || locale === 'es') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
    });
  }
  for (const [index, key, value] of [[0,'years',.5], [1,'years',1.5], [3,'years',.125], [5,'months',1.5]] as const) for (const locale of locales) it(`${tools[index].id}/${locale}: fractional duration is explicit and valid through query restoration`, () => {
    const tool=tools[index], fields=tool.presentation.fields, values={...defaults(index),[key]:value};
    const field=tool.contextualField!(fields.find(item=>item.name===key)!,values,locale);
    expect(field.help).toMatch(locale==='en' ? /fraction/i : locale==='de' ? /[Bb]ruch|[Gg]ebrochen/ : locale==='es' ? /fraccion/ : /[Дд]роб/);
    const query=buildCalculatorQueryString(fields,values,locale), restored=readValuesFromSearch(fields,defaults(index),query,locale);
    expect(restored[key]).toBe(value); expect(validateValues(tool.id,fields,restored,locale,runtime(index))).toEqual({});
    expect(tool.compute(restored).primary.value).not.toBe('—');
  });
  for (const locale of locales) {
    it(`${locale}: each model preserves independently specified small nonzero values through native results`, () => {
      const samples = [
        { amount: .001, ratePct: 0, years: 1 },
        { nominal: .000001, inflation: 0, amount: 0, years: 1 },
        { rate: 1000000, amount: 0 },
        { amount: 10000, rate: .000001, years: 1, mode: 'fv', compounding: 'month' },
        { income: 1, payments: .00004 },
        { monthlyExpenses: .001, months: 1, saved: 0 },
        { income: 1, expenses: .999 },
        { income: .000001 },
      ];
      for (const [index, sample] of samples.entries()) {
        const result = localizeResult(tools[index].compute(sample as never), locale, tools[index].id, runtime(index));
        expect(result.primary.value).not.toBe('—');
        expect(result.primary.value).not.toMatch(/^0[,.]0+(?:\s|[%₽₴€$])/);
        expect(JSON.stringify(result)).not.toMatch(/undefined|NaN|Infinity/);
        if (locale === 'en' || locale === 'de' || locale === 'es') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
      }
    });
    for (const index of [1,2]) it(`${tools[index].id}/${locale}: optional blank capital is zero while supplied negative/boolean capital fails`, () => {
      const tool=tools[index], values={...defaults(index),amount:''};
      expect(validateValues(tool.id,tool.presentation.fields,values,locale,runtime(index))).toEqual({});
      expect(tool.compute(values).primary.value).not.toBe('—');
      for (const amount of [-1,true,false]) {
        const result=localizeResult(tool.compute({...values,amount} as never),locale,tool.id,runtime(index));
        expect(result.primary.value).toBe('—');
        if (locale==='en'||locale==='de'||locale==='es') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
      }
    });
    it(`${locale}: TVM amount label follows the actual direction and unknown modes are native`, () => {
      const field=tvmAmountField();
      const future=tools[3].contextualField!(field,{...defaults(3),mode:'fv'},locale);
      const present=tools[3].contextualField!(field,{...defaults(3),mode:'pv'},locale);
      expect(future.label).not.toBe(present.label); expect(future.unit).toBe('₽'); expect(present.unit).toBe('₽');
      for (const values of [{...defaults(3),mode:'unknown'}, {...defaults(3),compounding:'unknown'}]) {
        const result=localizeResult(tools[3].compute(values),locale,tools[3].id,runtime(3));
        expect(result.primary.value).toBe('—');
        if (locale==='en'||locale==='de'||locale==='es') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
      }
    });
    it(`${locale}: DTI bands are native neutral descriptions rather than approval conclusions`, () => {
      for (const payments of [45000,64500,75000]) {
        const result=localizeResult(tools[4].compute({income:150000,payments}),locale,tools[4].id,runtime(4));
        expect(result.secondary![0].accent).toBe('neutral');
        if (locale==='en'||locale==='de'||locale==='es') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
      }
    });
  }
});
function tvmAmountField() { return tools[3].presentation.fields.find(field=>field.name==='amount')!; }
