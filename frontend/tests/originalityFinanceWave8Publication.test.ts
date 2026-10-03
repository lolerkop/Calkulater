import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
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

const inheritedPaths = {
  "inflation": {
    "ru": "/ru/finance/inflation/",
    "en": "/en/finance/inflation-calculator/",
    "uk": "/uk/finansy/inflyatsiya/",
    "de": "/de/finanzen/inflation-rechner/",
    "es": "/es/finanzas/calculadora-de-inflacion/"
  },
  "real-return": {
    "ru": "/ru/finance/real-return/",
    "en": "/en/finance/real-return-calculator/",
    "uk": "/uk/finansy/realna-dokhidnist/",
    "de": "/de/finanzen/reale-rendite-rechner/",
    "es": "/es/finanzas/rentabilidad-real/"
  },
  "rule-of-72": {
    "ru": "/ru/finance/rule-of-72/",
    "en": "/en/finance/rule-of-72-calculator/",
    "uk": "/uk/finansy/pravylo-72/",
    "de": "/de/finanzen/regel-von-72-rechner/",
    "es": "/es/finanzas/regla-del-72/"
  },
  "time-value-money": {
    "ru": "/ru/finance/time-value-money/",
    "en": "/en/finance/time-value-of-money-calculator/",
    "uk": "/uk/finansy/vartist-hroshey-u-chasi/",
    "de": "/de/finanzen/zeitwert-des-geldes/",
    "es": "/es/finanzas/valor-temporal-del-dinero/"
  },
  "dti": {
    "ru": "/ru/finance/dti/",
    "en": "/en/finance/debt-to-income/",
    "uk": "/uk/finansy/kredytne-navantazhennya/",
    "de": "/de/finanzen/schuldendienstquote/",
    "es": "/es/finanzas/ratio-deuda-ingresos/"
  },
  "emergency-fund": {
    "ru": "/ru/finance/emergency-fund/",
    "en": "/en/finance/emergency-fund-calculator/",
    "uk": "/uk/finansy/finansova-podushka/",
    "de": "/de/finanzen/notgroschen-rechner/",
    "es": "/es/finanzas/fondo-de-emergencia/"
  },
  "savings-rate": {
    "ru": "/ru/finance/savings-rate/",
    "en": "/en/finance/savings-rate-calculator/",
    "uk": "/uk/finansy/kalkulyator-normy-zaoshchadzhen/",
    "de": "/de/finanzen/sparquote-rechner/",
    "es": "/es/finanzas/tasa-de-ahorro/"
  },
  "budget-50-30-20": {
    "ru": "/ru/finance/budget-50-30-20/",
    "en": "/en/finance/budget-50-30-20-calculator/",
    "uk": "/uk/finansy/kalkulyator-byudzhetu-50-30-20/",
    "de": "/de/finanzen/50-30-20-budget/",
    "es": "/es/finanzas/presupuesto-50-30-20/"
  }
} as const;
// Prepared for root integration. Do not infer a browser/build/human pass
// from these data assertions. No runtime engine supplies an expected number.
const fixedPrimary = [46319.35,4.67,9,181669.67,30,510000,30,50000];
function numeric(value:string,locale:typeof locales[number]) {
  const token=value.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0]!;
  const compact=token.replace(/[\s\u00a0\u202f]/g,'').replace('−','-');
  return Number(locale==='en'?compact.replaceAll(',',''):compact.replaceAll('.','').replace(',','.'));
}
describe('FinanceWave8 actual40 integrated public data copies', () => {
  for (const [index,tool] of tools.entries()) for (const locale of locales) {
    it(`${tool.id}/${locale}: actual route/body/SEO preserve identity and reviewed subject content`, () => {
      const calc=getCalculatorById(tool.id,locale)!;
      const key=tool.id as keyof typeof identity, previous=identity[key][locale], copy=contents[index][locale];
      expect(calc.fullPath).toBe(inheritedPaths[key][locale]); expect(calc.name).toBe(previous.name); expect(calc.h1).toBe(previous.h1);
      for (const field of calc.fields) expect(field.defaultValue).toBe(originalDefaults[key][field.name as never]);
      expect(calc.fields.map(field=>field.name)).toEqual(Object.keys(originalDefaults[key]));
      for (const section of ['longDescription','howToUse','howItWorks','example','faq','disclaimer'] as const) expect(calc[section]).toEqual(copy[section]);
      expect(calc.seoContent!.intro).toBe(copy.longDescription); expect(calc.seoContent!.howItWorks).toBe(copy.howItWorks); expect(calc.seoContent!.example).toBe(copy.example); expect(calc.seoContent!.faq).toEqual(copy.faq);
      expect(copy.faq!.length).toBeGreaterThanOrEqual(faqFloor[key][locale]);
      expect(JSON.stringify(copy)).not.toMatch(/undefined|NaN|Infinity/);
    });
    it(`${tool.id}/${locale}: public sources and limitations come from this model`, () => {
      const calc=getCalculatorById(tool.id,locale)!, editorial=getCalculatorEditorial(calc,locale), copy=contents[index][locale];
      expect(editorial.method).toBe(copy.howItWorks); expect(editorial.limitation).toBe(copy.disclaimer);
      expect(editorial.sources).toEqual(getFinanceWave8MethodSources(tool.id,locale));
    });
    it(`${tool.id}/${locale}: actual native money units and independent default numeric result`, () => {
      const calc=getCalculatorById(tool.id,locale)!;
      for (const key of moneyFields[index]) {
        const field=calc.fields.find(item=>item.name===key)!;
        expect(field.unit).toBe(units[locale]); expect(field.label).not.toMatch(/[₽$₴€]/);
      }
      const result=localizeResult(tool.compute(defaults(index)),locale,tool.id,runtime(index));
      expect(numeric(result.primary.value,locale)).toBeCloseTo(fixedPrimary[index],3);
      if (locale==='en'||locale==='de'||locale==='es') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁёІіЇїЄєҐґ]/);
    });
    it(`${tool.id}/${locale}: actual fields reject active malformed/bool/nonfinite input`, () => {
      const fields=getCalculatorById(tool.id,locale)!.fields;
      for (const field of fields.filter(item=>item.type==='number')) for (const invalid of malformed) {
        expect(validateValues(tool.id,fields,{...defaults(index),[field.name]:invalid} as never,locale,runtime(index))[field.name]).toBeTruthy();
      }
    });
  }
  for (const [index,key,value] of [[0,'years',.5],[1,'years',.5],[3,'years',.125],[5,'months',1.5]] as const) for (const locale of locales) it(`${tools[index].id}/${locale}: actual fractional-duration contract reaches compute without integer-year help`, () => {
    const tool=tools[index],fields=getCalculatorById(tool.id,locale)!.fields,values={...defaults(index),[key]:value};
    expect(validateValues(tool.id,fields,values,locale,runtime(index))).toEqual({});
    const field=tool.contextualField!(fields.find(item=>item.name===key)!,values,locale);
    expect(field.help).toMatch(locale==='en'?/fraction/i:locale==='de'?/[Bb]ruch|[Gg]ebrochen/:locale==='es'?/fraccion/:/[Дд]роб/);
    const restored=readValuesFromSearch(fields,defaults(index),buildCalculatorQueryString(fields,values,locale),locale);
    expect(restored[key]).toBe(value); expect(tool.compute(restored).primary.value).not.toBe('—');
  });
  it('unread pages do not receive this bibliography',()=>expect(getFinanceWave8MethodSources('unreviewed','en')).toEqual([]));
});
