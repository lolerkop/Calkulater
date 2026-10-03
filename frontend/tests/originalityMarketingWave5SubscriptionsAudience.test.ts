import { describe, expect, it } from 'vitest';
import { definition as ltv } from '../src/calculators/ltv/definition';
import { definition as mrr } from '../src/calculators/mrr-arr/definition';
import { definition as arpu } from '../src/calculators/arpu-arppu/definition';
import { definition as engagement } from '../src/calculators/engagement-rate/definition';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import { validateValues } from '../src/components/islands/calculator/validation';
import { withSharedPhrases } from '../src/lib/platform/runtime';
import { localization as l1 } from '../src/calculators/ltv/localization';
import { localization as l2 } from '../src/calculators/mrr-arr/localization';
import { localization as l3 } from '../src/calculators/arpu-arppu/localization';
import { localization as l4 } from '../src/calculators/engagement-rate/localization';
import { shared as h1 } from '../src/calculators/ltv/shared.generated';
import { shared as h2 } from '../src/calculators/mrr-arr/shared.generated';
import { shared as h3 } from '../src/calculators/arpu-arppu/shared.generated';
import { shared as h4 } from '../src/calculators/engagement-rate/shared.generated';
import { methodSources as s1 } from '../src/calculators/ltv/methodSources';
import { methodSources as s2 } from '../src/calculators/mrr-arr/methodSources';
import { methodSources as s3 } from '../src/calculators/arpu-arppu/methodSources';
import { methodSources as s4 } from '../src/calculators/engagement-rate/methodSources';
const tools = [ltv, mrr, arpu, engagement], sources = [s1, s2, s3, s4];
const ownedLocales = [l1, l2, l3, l4], sharedPhrases = [h1, h2, h3, h4];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const norm = (s: string) => s.replace(/[\u00a0\u202f]/g, ' ');
const row = (r: ReturnType<typeof ltv.compute>, label: string) => norm(r.secondary!.find(item => item.label === label)!.value);
const inputs = {
  ltv: { mode: 'months', arpu: 1200, months: 18, margin: 100, cac: 0 },
  'mrr-arr': { subscribers: 420, arpuMonth: 1490, growthPct: 4 },
  'arpu-arppu': { revenue: 500000, users: 12500, payingUsers: 900 },
  'engagement-rate': { engagements: 450, base: 'reach', reach: 9000 },
};
const malformed = [true, false, null, NaN, Infinity, -Infinity, {}, [], '12bad'];
describe('wave5 subscription and audience independent contracts', () => {
  for (const tool of tools) for (const sample of tool.referenceCases!) it(`${tool.id}: preserved ${sample.name}`, () => {
    const result = tool.compute(sample.inputs);
    expect(norm(result.primary.value)).toBe(norm(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(row(result, expected.label)).toBe(norm(expected.value));
  });
  const active = {
    ltv: ['arpu', 'months', 'margin', 'cac'],
    'mrr-arr': ['subscribers', 'arpuMonth', 'growthPct'],
    'arpu-arppu': ['revenue', 'users', 'payingUsers'],
    'engagement-rate': ['engagements', 'reach'],
  };
  for (const tool of tools) for (const key of active[tool.id as keyof typeof active]) for (const [i, value] of malformed.entries()) it(`${tool.id}: active ${key} malformed${i}`, () => {
    const result = tool.compute({ ...inputs[tool.id as keyof typeof inputs], [key]: value } as never);
    expect(result.primary.value).toBe('—'); expect(result.secondary![0].accent).toBe('red');
  });
  for (const [i, value] of malformed.entries()) it(`LTV active churn malformed${i}`, () => expect(ltv.compute({ mode: 'churn', arpu: 800, churn: value, margin: 70 } as never).primary.value).toBe('—'));
  for (const [i, value] of malformed.entries()) it(`ER active followers malformed${i}`, () => expect(engagement.compute({ engagements: 450, base: 'followers', followers: value } as never).primary.value).toBe('—'));
  for (const value of [0.5, 1.5, Number.MAX_SAFE_INTEGER + 1]) {
    it(`MRR strict actual subscriber count ${value}`, () => expect(mrr.compute({ ...inputs['mrr-arr'], subscribers: value }).primary.value).toBe('—'));
    for (const key of ['users', 'payingUsers']) it(`ARPU strict ${key} count ${value}`, () => expect(arpu.compute({ ...inputs['arpu-arppu'], [key]: value }).primary.value).toBe('—'));
    for (const key of ['engagements', 'reach', 'followers']) it(`ER strict ${key} count ${value}`, () => expect(engagement.compute({ engagements: 450, base: key === 'followers' ? 'followers' : 'reach', reach: 9000, followers: 4000, [key]: value }).primary.value).toBe('—'));
  }
  for (const mode of ['', null, true, 'other']) it(`LTV unknownmode ${String(mode)}`, () => expect(ltv.compute({ ...inputs.ltv, mode } as never).primary.value).toBe('—'));
  for (const base of ['', null, true, 'other']) it(`ER unknownbase ${String(base)}`, () => expect(engagement.compute({ ...inputs['engagement-rate'], base } as never).primary.value).toBe('—'));
  it('LTV independent geometric series includes first paid month and labels simple CAC coverage', () => {
    const result = ltv.compute({ mode: 'churn', arpu: 800, churn: 12, margin: 70, cac: 2800 });
    expect(norm(result.primary.value)).toBe('4 666,67 ₽'); expect(row(result, 'Срок жизни клиента')).toBe('8,33 мес');
    expect(row(result, 'Отношение LTV к CAC')).toBe('1,67×'); expect(row(result, 'Простой срок покрытия CAC')).toBe('5,00 мес');
    expect(result.secondary!.some(item => item.label === 'Окупаемость привлечения')).toBe(false);
    expect(ltv.compute({ mode: 'churn', arpu: 500, churn: 100, margin: 100 }).primary.value).toBe('500,00 ₽');
    expect(ltv.compute({ mode: 'churn', arpu: 500, churn: 0, margin: 100 }).primary.value).toBe('—');
  });
  it('fractional mean lifetime, optional CAC omission and inactive lifetime field', () => {
    for (const months of [8.5, '8,5']) expect(norm(ltv.compute({ arpu: 1200, months, margin: 100 }).primary.value)).toBe('10 200,00 ₽');
    for (const cac of [undefined, '', ' ', 0]) {
      const result = ltv.compute({ ...inputs.ltv, cac }); expect(norm(result.primary.value)).toBe('21 600,00 ₽');
      expect(result.secondary!.some(item => item.label === 'Отношение LTV к CAC')).toBe(false);
    }
    expect(ltv.compute({ ...inputs.ltv, cac: -1 }).primary.value).toBe('—');
    for (const value of malformed) {
      expect(norm(ltv.compute({ ...inputs.ltv, churn: value } as never).primary.value)).toBe('21 600,00 ₽');
      expect(norm(ltv.compute({ mode: 'churn', arpu: 800, churn: 12, margin: 70, months: value } as never).primary.value)).toBe('4 666,67 ₽');
    }
    const fields = getCalculatorById('ltv', 'ru')!.fields;
    expect(validateValues('ltv', fields, { ...inputs.ltv, churn: NaN }, 'ru')).toEqual({});
    expect(fields.filter(f => isFieldVisible(f, inputs.ltv)).map(f => f.name)).not.toContain('churn');
  });
  it('LTV balances positive factors before a nonzero subnormal intermediate loses precision', () => {
    // Independent Decimal100: 10^-300 × 10^300 × 10^-20 /100 =10^-22.
    // A naive nonzero intermediate gives9.8813129168e-23 instead.
    expect(ltv.compute({ arpu: 1e-300, months: 1e300, margin: 1e-20 }).primary.value).toBe('1,000·10^-22 ₽');
    expect(ltv.compute({ arpu: 1e308, months: 100, margin: 1 }).primary.value).toBe('1,000·10^308 ₽');
    expect(ltv.compute({ arpu: 1e308, months: 100, margin: 100 }).primary.value).toBe('—');
  });
  it('MRR independent current run rate and complete-loss boundary', () => {
    const result = mrr.compute(inputs['mrr-arr']); expect(norm(result.primary.value)).toBe('625 800,00 ₽'); expect(row(result, 'ARR')).toBe('7 509 600,00 ₽');
    expect(row(result, 'MRR через месяц')).toBe('650 832,00 ₽'); expect(row(result, 'Прирост за месяц')).toBe('25 032,00 ₽');
    const loss = mrr.compute({ ...inputs['mrr-arr'], growthPct: -100 }); expect(row(loss, 'MRR через месяц')).toBe('0,00 ₽'); expect(row(loss, 'Прирост за месяц')).toBe('-625 800,00 ₽');
    expect(mrr.compute({ ...inputs['mrr-arr'], growthPct: -100.01 }).primary.value).toBe('—');
    expect(mrr.compute({ subscribers: 1, arpuMonth: 1.25, growthPct: 0 }).primary.value).toBe('1,25 ₽');
    expect(mrr.compute({ subscribers: 1, arpuMonth: 1e308, growthPct: 0 }).primary.value).toBe('—');
  });
  it('ending ARR is not the sum of actual monthly revenues', () => {
    // Six months at100 plus six at200 =1800; ending200×12 =2400.
    const result = mrr.compute({ subscribers: 1, arpuMonth: 200, growthPct: 0 }); expect(row(result, 'ARR')).toBe('2 400,00 ₽');
    expect([100,100,100,100,100,100,200,200,200,200,200,200].reduce((a, b) => a + b, 0)).toBe(1800);
  });
  it('ARPU independent common-numerator oracle and zero-payer omission', () => {
    const result = arpu.compute(inputs['arpu-arppu']); expect(result.primary.value).toBe('40,00 ₽'); expect(row(result, 'ARPPU')).toBe('555,56 ₽'); expect(row(result, 'Доля платящих')).toBe('7,20%');
    const zero = arpu.compute({ revenue: 500, users: 100, payingUsers: 0 }); expect(zero.primary.value).toBe('5,00 ₽'); expect(row(zero, 'Доля платящих')).toBe('0,00%'); expect(zero.secondary!.some(item => item.label === 'ARPPU')).toBe(false);
    expect(arpu.compute({ revenue: 0, users: 100, payingUsers: 0 }).primary.value).toBe('—');
    expect(arpu.compute({ revenue: 500, users: 100, payingUsers: -1 }).primary.value).toBe('—');
  });
  it('falling payer share can accompany a rising absolute payer count', () => {
    const before = arpu.compute({ revenue: 100, users: 100, payingUsers: 10 }); const after = arpu.compute({ revenue: 200, users: 1000, payingUsers: 15 });
    expect(before.primary.value).toBe('1,00 ₽'); expect(row(before, 'ARPPU')).toBe('10,00 ₽'); expect(row(before, 'Доля платящих')).toBe('10,00%');
    expect(after.primary.value).toBe('0,20 ₽'); expect(row(after, 'ARPPU')).toBe('13,33 ₽'); expect(row(after, 'Доля платящих')).toBe('1,50%'); expect(row(after, 'Платящих')).toBe('15');
  });
  it('engagement bases, repeated actions above100percent, zero actions and inactive inputs', () => {
    expect(engagement.compute(inputs['engagement-rate']).primary.value).toBe('5,00%'); expect(row(engagement.compute(inputs['engagement-rate']), 'Реакций на тысячу')).toBe('50,0');
    expect(engagement.compute({ engagements: 450, base: 'followers', followers: 4000 }).primary.value).toBe('11,25%');
    expect(engagement.compute({ engagements: 150, base: 'reach', reach: 100 }).primary.value).toBe('150,00%');
    expect(engagement.compute({ engagements: 0, base: 'reach', reach: 100 }).primary.value).toBe('0,00%');
    for (const value of malformed) {
      expect(engagement.compute({ ...inputs['engagement-rate'], followers: value } as never).primary.value).toBe('5,00%');
      expect(engagement.compute({ engagements: 450, base: 'followers', followers: 4000, reach: value } as never).primary.value).toBe('11,25%');
    }
    const fields = getCalculatorById('engagement-rate', 'ru')!.fields;
    expect(validateValues('engagement-rate', fields, { ...inputs['engagement-rate'], followers: NaN }, 'ru')).toEqual({});
  });
  it('positive small valid quantities remain visible rather than false zero', () => {
    expect(arpu.compute({ revenue: 0.000001, users: 1, payingUsers: 1 }).primary.value).toBe('0,000001 ₽');
    expect(arpu.compute({ revenue: 1e-20, users: 1, payingUsers: 1 }).primary.value).toBe('1,000·10^-20 ₽');
    expect(engagement.compute({ engagements: 1, base: 'reach', reach: 100000000 }).primary.value).toBe('0,000001%');
  });
});
describe('wave5 actual publication and native runtime contracts', () => {
  for (const [index, tool] of tools.entries()) for (const locale of locales) it(`${tool.id}/${locale}: authored body, SEO, retained FAQ and bounded sources`, () => {
    const calc = getCalculatorById(tool.id, locale)!; const source = locale === 'ru' ? tool.presentation : tool.copy![locale]!;
    expect(calc.longDescription).toBe(source.longDescription); expect(calc.howToUse).toEqual(source.howToUse); expect(calc.howItWorks).toBe(source.howItWorks); expect(calc.example).toBe(source.example); expect(calc.faq).toEqual(source.faq);
    expect(calc.faq.length).toBeGreaterThanOrEqual(tool.id === 'engagement-rate' ? 4 : 5);
    expect(calc.seoContent).toMatchObject({ intro: calc.longDescription, howItWorks: calc.howItWorks, example: calc.example, tips: calc.howToUse!.join(' '), faq: calc.faq });
    expect(getCalculatorEditorial(calc, locale).sources).toEqual(sources[index][locale]);
    expect(JSON.stringify(calc.seoContent)).not.toMatch(/\b(?:undefined|NaN|Infinity)\b/);
    expect(calc.name).toBe(source.name); expect(calc.h1).toBe(source.h1);
  });
  for (const [index, tool] of tools.entries()) for (const locale of locales.slice(1)) it(`${tool.id}/${locale}: same scoped result localization as public island`, () => {
    const runtime = { compute: tool.compute, localization: withSharedPhrases(ownedLocales[index], sharedPhrases[index]) };
    const result = localizeResult(tool.compute(inputs[tool.id as keyof typeof inputs]), locale, tool.id, runtime);
    if (locale !== 'uk') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁё]/);
    for (const result of [
      localizeResult(tool.compute({ ...inputs[tool.id as keyof typeof inputs], [tool.id === 'ltv' ? 'arpu' : tool.id === 'mrr-arr' ? 'arpuMonth' : tool.id === 'arpu-arppu' ? 'revenue' : 'engagements']: true } as never), locale, tool.id, runtime),
      ...(tool.id === 'ltv' ? [localizeResult(tool.compute({ ...inputs.ltv, margin: 0 }), locale, tool.id, runtime), localizeResult(tool.compute({ mode: 'churn', arpu: 800, churn: 0, margin: 70 }), locale, tool.id, runtime)] : []),
    ]) {
      expect(result.primary.value).toBe('—'); expect(result.secondary![0].accent).toBe('red');
      if (locale !== 'uk') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁё]/);
    }
    const calc = getCalculatorById(tool.id, locale)!;
    for (const field of calc.fields.filter(f => f.unit === ({ en: '$', uk: '₴', de: '€', es: '€' } as const)[locale])) expect(field.label).not.toContain(field.unit!);
  });
  for (const locale of locales) it(`fractional lifetime and monthly money have native explicit UI help ${locale}`, () => {
    for (const [tool, key] of [[ltv, 'months'], [mrr, 'arpuMonth']] as const) {
      const field = getCalculatorById(tool.id, locale)!.fields.find(f => f.name === key)!;
      const contextual = tool.contextualField!(field, {}, locale); expect(contextual.help).toBeTruthy();
      if (locale !== 'ru' && locale !== 'uk') expect(contextual.help).not.toMatch(/[А-Яа-яЁё]/);
      expect(contextual.label).toBe(field.label);
    }
  });
});
