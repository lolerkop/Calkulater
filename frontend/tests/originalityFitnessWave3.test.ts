import { describe, expect, it } from 'vitest';
import { calcBmi } from '../src/lib/calculators/bmi';
import { calcCalorie } from '../src/lib/calculators/calorie';
import { calcBodyFat } from '../src/lib/calculators/bodyFat';
import { calcPace } from '../src/lib/calculators/pace';
import { calcOneRm } from '../src/lib/calculators/oneRm';
import { definition as plates } from '../src/calculators/barbell-plates/definition';
import { definition as gear } from '../src/calculators/bike-gear-ratio/definition';
import { definition as wheel } from '../src/calculators/bike-wheel-size/definition';
import { fitnessLegacyContractContent, getFitnessMethodSources } from '../src/data/fitnessLegacyContractContent';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getCalculatorSeoContent } from '../src/data/calculatorSeoContent';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import type { CalcFunction, CalcResult } from '../src/lib/types';

const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const v2 = [plates, gear, wheel];
const legacy: Record<string, { fn: CalcFunction; normal: Record<string, number | string>; invalid: Record<string, number | string> }> = {
  'bmi-calculator': { fn: calcBmi, normal: { height: 175, weight: 70 }, invalid: { height: 'NaN', weight: 70 } },
  'calorie-calculator': { fn: calcCalorie, normal: { gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'maintain' }, invalid: { gender: 'male', age: 1, height: 180, weight: 80 } },
  'body-fat-calculator': { fn: calcBodyFat, normal: { sex: 'male', height: 180, neck: 38, waist: 90 }, invalid: { sex: 'unknown', height: 180, neck: 38, waist: 90 } },
  'running-pace-calculator': { fn: calcPace, normal: { distance: 5, unit: 'km', minutes: 25 }, invalid: { distance: 5, unit: 'km', hours: -1, minutes: 90 } },
  'one-rep-max-calculator': { fn: calcOneRm, normal: { weight: 100, reps: 5 }, invalid: { weight: 100, reps: 37 } },
};
const row = (r: CalcResult, label: string) => r.secondary.find((x) => x.label === label)?.value ?? '';
const number = (s: string) => Number(s.replace(/[\s≥]/g, '').replace(',', '.').match(/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/i)?.[0]);
const norm = (s: string) => s.replace(/[\u00a0\u202f]/g, ' ');
const error = (r: CalcResult) => { expect(r.primary.value).toBe('—'); expect(r.secondary[0].accent).toBe('red'); };

describe('fitness wave 3 independent numerical regressions', () => {
  it('BMI boundary uses exact25, not displayed tenths or24.9', () => {
    const r = calcBmi({ height: 200, weight: 99.99 });
    expect(r.primary.value).toBe('25,0');
    expect(row(r, 'Категория')).toBe('Норма');
    expect(norm(row(r, 'Ориентир здорового веса'))).toBe('≥ 74,0 и < 100,0 кг');
    expect(row(calcBmi({ height: 200, weight: 100 }), 'Категория')).toBe('Избыточный вес');
    expect(r.note).toContain('до округления');
    expect(row(r, 'Комментарий')).not.toMatch(/Срочно|снизить|набрать/);
  });
  it('BMI does not publish overflow in the inverse weight interval', () => error(calcBmi({ height: 1e156, weight: 1e308 })));
  it('calorie example follows Mifflin and user20% adjustment independently', () => {
    const r = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'lose', goalAdjustment: 20, proteinPct: 35, fatPct: 25 });
    expect(number(r.primary.value)).toBe(2207);
    expect(number(row(r, 'Расход энергии в покое (REE)'))).toBe(1780);
    expect(number(row(r, 'Белки'))).toBe(193);
    expect(number(row(r, 'Жиры'))).toBe(61);
    expect(number(row(r, 'Углеводы'))).toBe(221);
    expect(number(row(r, 'Поддержание веса (TDEE)'))).toBe(2759);
  });
  it('calorie rejects impossible macro totals instead of rescaling them', () => error(calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, proteinPct: 60, fatPct: 60 })));
  it('maintenance ignores inactive adjustment while active malformed adjustment errors', () => {
    const base = { gender: 'male', age: 30, height: 180, weight: 80 };
    expect(calcCalorie({ ...base, goal: 'maintain', goalAdjustment: 'junk' }).primary.value).not.toBe('—');
    error(calcCalorie({ ...base, goal: 'lose', goalAdjustment: 'junk' }));
  });
  it('female circumference condition is sum, not separate waist>neck', () => {
    // W=50<N=55, but W+P-N=95; equation gives a positive finite estimate.
    const r = calcBodyFat({ sex: 'female', height: 165, neck: 55, waist: 50, hip: 100 });
    const independent = 163.205 * Math.log10(95 / 2.54) - 97.684 * Math.log10(165 / 2.54) - 78.387;
    expect(independent).toBeGreaterThan(0);
    expect(number(r.primary.value)).toBeCloseTo(independent, 0);
    expect(number(row(r, 'Талия плюс бёдра минус шея'))).toBe(95);
  });
  it('male body-fat branch ignores inactive hip but verifies active measurements', () => {
    expect(calcBodyFat({ sex: 'male', height: 180, neck: 38, waist: 90, hip: 'junk' }).primary.value).toBe('19,9%');
    error(calcBodyFat({ sex: 'female', height: 165, neck: 32, waist: 72, hip: 'junk' }));
  });
  it('5km/25min separates arithmetic even splits from power-law forecast', () => {
    const r = calcPace({ distance: 5, unit: 'km', minutes: 25 });
    expect(r.primary.value).toBe('5:00/км');
    expect(row(r, 'Темп на милю')).toBe('8:03/миля');
    expect(row(r, 'Прогноз на 10 км')).toBe('52:07');
    expect(r.table?.rows[4]).toEqual(['5 км', '25:00']);
  });
  it('exact mile conversion preserves reciprocal speed and pace', () => {
    const r = calcPace({ distance: 1, unit: 'mi', minutes: 8, seconds: 3 });
    expect(row(r, 'Темп на милю')).toBe('8:03/миля');
    expect(number(row(r, 'Средняя скорость'))).toBeCloseTo(1.609344 / 483 * 3600, 1);
  });
  it('one repetition preserves observed primary without claiming all models coincide', () => {
    const r = calcOneRm({ weight: 100, reps: 1 });
    expect(r.primary.value).toBe('100,0 кг');
    expect(number(row(r, 'Формула Лэндера'))).toBeCloseTo(10000 / (101.3 - 2.67123), 0);
  });
  it('gear development and cadence example conserve units', () => {
    const r = gear.compute({ chainring: 50, sprocket: 25, wheelCircumference: 2.1 });
    expect(r.primary.value).toBe('2,00');
    expect(row(r, 'Развитие за оборот')).toBe('4,20 м');
    expect(4.2 * 90 * 60 / 1000).toBeCloseTo(22.68, 10);
  });
  it('wheel ETRTO is explicit approximation, inch mode ignores inactive fields', () => {
    const r = wheel.compute({ mode: 'etrto', etrtoRim: 622, etrtoTire: 25 });
    expect(number(r.primary.value)).toBeCloseTo(Math.PI * 672, 1);
    expect(r.note).toContain('принята равной');
    expect(wheel.compute({ mode: 'inches', inches: 26, etrtoRim: 'junk', etrtoTire: 'junk' }).primary.value).toBe('2 074,71 мм');
  });
});

describe('fitness wave 3 engine domain has explicit errors', () => {
  const invalidInputs = [true, false, 'junk', 'NaN', 'Infinity', NaN, Infinity, -Infinity];
  for (const [id, tool] of Object.entries(legacy)) it.each(invalidInputs)(`${id}: malformed active input %s`, (bad) => {
    const key = id === 'bmi-calculator' ? 'height' : id === 'calorie-calculator' ? 'age' : id === 'body-fat-calculator' ? 'neck' : id === 'running-pace-calculator' ? 'distance' : 'weight';
    error(tool.fn({ ...tool.normal, [key]: bad }));
  });
  it.each([18, 79, 1000])('calorie age%s is outside the explicit cohort product range', (age) => error(calcCalorie({ age, height: 180, weight: 80 })));
  it.each([-1, 2, 'junk', Infinity])('calorie multiplier%s is not a declared selection', (activity) => error(calcCalorie({ age: 30, height: 180, weight: 80, activity })));
  it('unknown mode selectors are not silently relabelled', () => {
    error(calcCalorie({ gender: 'unknown', age: 30, height: 180, weight: 80 }));
    error(calcCalorie({ goal: 'unknown', age: 30, height: 180, weight: 80 }));
    error(calcPace({ distance: 5, unit: 'unknown', minutes: 25 }));
  });
  it('negative time components cannot cancel into a valid-looking run', () => error(calcPace({ distance: 5, hours: -1, minutes: 90 })));
  for (const d of v2) for (const c of d.referenceCases ?? []) it(`${d.id}: ${c.name}`, () => {
    const r = d.compute(c.inputs);
    expect(norm(r.primary.value)).toBe(norm(c.expectPrimary));
    c.expectSecondary?.forEach((e) => expect(norm(row(r, e.label))).toBe(norm(e.value)));
    if (c.expectPrimary === '—') expect(r.secondary[0].accent).toBe('red');
  });
});

describe('plate combination is optimal for arbitrary denominations', () => {
  // Exhaustive count-vector enumeration is independent from the engine DP.
  for (const denominations of [[4, 3], [6, 4], [7, 5, 2], [8, 3, 2], [9, 6, 5]]) it(`enumerates [${denominations}] against all targets0..20`, () => {
    for (let target = 0; target <= 20; target++) {
      let best = 0, minimum = 0;
      const visit = (i: number, sum: number, count: number) => {
        if (i === denominations.length) { if (sum > best || sum === best && count < minimum) [best, minimum] = [sum, count]; return; }
        for (let n = 0; sum + n * denominations[i] <= target; n++) visit(i + 1, sum + n * denominations[i], count + n);
      };
      visit(0, 0, 0);
      const r = plates.compute({ target: 20 + 2 * target, bar: 20, plates: denominations.join(' ') });
      expect(number(row(r, 'Фактический вес'))).toBe(20 + 2 * best);
      expect(number(row(r, 'Блинов на сторону'))).toBe(minimum);
      expect(number(row(r, 'Недобор'))).toBe(2 * (target - best));
    }
  });
  it('bounded product capacity rejects huge inputs before attempting search', () => error(plates.compute({ target: 1e308, bar: 20, plates: '0.001' })));
  it('fractional per-side grams choose closest load without rounding over target', () => {
    const r = plates.compute({ target: 20.003, bar: 20, plates: '0.001' });
    expect(number(row(r, 'Фактический вес'))).toBe(20.002);
    expect(number(row(r, 'Недобор'))).toBe(.001);
  });
});

const oldCounts: Record<string, number[]> = {
 'bmi-calculator': [5,5,4,5,5], 'calorie-calculator':[5,3,4,5,3], 'body-fat-calculator':[7,7,7,6,7],
 'running-pace-calculator':[5,3,4,5,3], 'one-rep-max-calculator':[5,3,4,5,3],
 'barbell-plates':[5,5,5,5,5], 'bike-gear-ratio':[4,4,4,4,4], 'bike-wheel-size':[5,5,5,5,5],
};
describe('40 published localized fitness contracts', () => {
  for (const id of Object.keys(oldCounts)) for (const [index, locale] of locales.entries()) it(`${id}/${locale}: actual page owns authored content and subject sources`, () => {
    const c = getCalculatorById(id, locale)!;
    expect(c).toBeDefined();
    const d = v2.find((x) => x.id === id);
    const owned = d ? locale === 'ru' ? d.presentation : d.copy![locale]! : fitnessLegacyContractContent[locale][id];
    for (const key of ['longDescription', 'howToUse', 'howItWorks', 'example', 'faq', 'disclaimer'] as const) expect(c[key]).toEqual(owned[key]);
    for (const key of ['shortDescription', 'seoDescription'] as const) if (owned[key]) expect(c[key]).toEqual(owned[key]);
    expect(c.faq.length).toBeGreaterThanOrEqual(oldCounts[id][index]);
    expect(getCalculatorSeoContent(c, locale, true)).toMatchObject({ intro: owned.longDescription, howItWorks: owned.howItWorks, example: owned.example, faq: owned.faq });
    expect(getFitnessMethodSources(id, locale).length).toBeGreaterThan(0);
    expect(getCalculatorEditorial(c, locale).sources).toEqual(getFitnessMethodSources(id, locale));
    expect(c.example).toMatch(/\d/);
    expect(c.howItWorks).not.toMatch(/NaN|undefined/);
    if (locale !== 'ru' && locale !== 'uk') expect([c.longDescription,c.howItWorks,c.disclaimer].join(' ')).not.toMatch(/[А-Яа-яЁё]/);
  });
  for (const d of v2) for (const locale of locales) it(`${d.id}/${locale}: active physical unit is visible`, () => {
    const c = getCalculatorById(d.id, locale)!;
    const field = c.fields.find((f) => f.name === (d.id === 'barbell-plates' ? 'target' : d.id === 'bike-gear-ratio' ? 'wheelCircumference' : 'inches'))!;
    expect(field.unit).toBeDefined();
    expect(fieldUnitLabel(field, locale)).not.toBe('');
  });
  for (const [id, tool] of Object.entries(legacy)) for (const locale of ['en','uk','de','es'] as const) it(`${id}/${locale}: normal and error results translate`, () => {
    for (const inputs of [tool.normal,tool.invalid]) {
      const r = tool.fn(inputs), localized = localizeResult(r, locale, id, runtimeFor(id));
      if (r.note) expect(localized.note).not.toBe(r.note);
      if (r.primary.value === '—') expect(localized.secondary[0].value).not.toBe(r.secondary[0].value);
      if (locale !== 'uk') expect(JSON.stringify(localized)).not.toMatch(/[А-Яа-яЁё]/);
    }
  });
});


describe('V2 fitness normal and boundary results localize in every supported language', () => {
  for (const d of v2) for (const sample of d.referenceCases ?? []) for (const locale of ['en','uk','de','es'] as const) it(`${d.id}/${locale}: ${sample.name}`, () => {
    const raw = d.compute(sample.inputs);
    const result = localizeResult(raw, locale, d.id, runtimeFor(d.id));
    expect(result.primary.label).not.toBe(raw.primary.label);
    if (sample.expectPrimary === '—') {
      expect(result.primary.value).toBe('—');
      expect(result.secondary[0].accent).toBe('red');
      expect(result.secondary[0].value).not.toBe(raw.secondary[0].value);
    }
    if (raw.note) expect(result.note).not.toBe(raw.note);
    if (locale !== 'uk') expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁё]/);
    expect(JSON.stringify(result)).not.toMatch(/NaN|Infinity|undefined/);
  });
});


describe('legacy fitness metadata does not contradict reviewed methods', () => {
  for (const locale of locales) it(`body-fat/${locale}: historical model and actual sites are visible in metadata`, () => {
    const c = getCalculatorById('body-fat-calculator', locale)!;
    const historic = {ru:/историч/i,en:/historical/i,uk:/історич/i,de:/historisch/i,es:/históric/i}[locale];
    expect(c.shortDescription).toMatch(historic);
    expect(c.seoDescription).toMatch(historic);
    expect(c.seoDescription.length).toBeLessThanOrEqual(170);
  });
  it.each(['ru','uk'] as const)('calorie/%s short description calls the number an estimate', (locale) => {
    const c = getCalculatorById('calorie-calculator', locale)!;
    expect(c.shortDescription).toMatch(/Оценка|Оцінка/);
    expect(c.shortDescription).not.toMatch(/норма|норму/);
  });
  it('Russian1RM metadata says estimate rather than an achieved maximum', () => {
    const c = getCalculatorById('one-rep-max-calculator', 'ru')!;
    expect(c.shortDescription).toContain('Оценка');
    expect(c.seoDescription).toContain('не готовая программа');
  });
});
