import { describe, expect, it } from 'vitest';
import { definition as activity } from '../src/calculators/activity-calories/definition';
import { definition as ideal } from '../src/calculators/ideal-weight/definition';
import { definition as heart } from '../src/calculators/max-heart-rate/definition';
import { definition as steps } from '../src/calculators/steps-distance-calories/definition';
import { definition as vo2 } from '../src/calculators/vo2max/definition';
import { definition as water } from '../src/calculators/water-intake/definition';
import { definition as waist } from '../src/calculators/waist-ratio/definition';
import { definition as macros } from '../src/calculators/calories-from-macros/definition';
import { getCalculatorById } from '../src/lib/i18n';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import type { CalcResult } from '../src/lib/types';

const tools = [activity, ideal, heart, steps, vo2, water, waist, macros];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const translated = ['en', 'uk', 'de', 'es'] as const;
const normalize = (v: string) => v.replace(/[\u00a0\u202f]/g, ' ');
const row = (r: CalcResult, label: string) => r.secondary.find((item) => item.label === label)?.value;
const numeric = (v: string) => Number(v.replace(/[\u00a0\u202f]/g, '').replace(',', '.').match(/^-?[\d.]+/)?.[0]);

describe('health wave 2 independent model and domain calculations', () => {
  for (const tool of tools) for (const sample of tool.referenceCases ?? []) it(`${tool.id}: ${sample.name}`, () => {
    const result = tool.compute(sample.inputs);
    expect(normalize(result.primary.value)).toBe(normalize(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(normalize(String(row(result, expected.label)))).toBe(normalize(expected.value));
    if (sample.expectPrimary === '—') expect(result.secondary[0].accent).toBe('red');
  });

  it('retains ordinary whole-kcal presentation while comparing gross and 1-MET expenditure', () => {
    // Gross = 7 × 3.5 × 70 × 45 / 200 = 385.875; baseline = 55.125; excess = 330.75.
    const r = activity.compute({ activity: 'cycling', weightKg: 70, minutes: 45 });
    expect(r.primary.value).toBe('386 ккал');
    expect(numeric(row(r, 'Расход за то же время при 1 MET')!)).toBe(55.125);
    expect(numeric(row(r, 'Разница с 1 MET')!)).toBe(330.75);
    expect(activity.compute({ activity: 'custom', met: 1, weightKg: 70, minutes: 60 }).primary.value).toBe('74 ккал');
  });

  it('keeps the exact imperial Hamwi equation and the open upper BMI boundary distinct', () => {
    const r = ideal.compute({ height: 180, sex: 'male' });
    const excessInches = 180 / 2.54 - 60;
    expect(numeric(row(r, 'Хамви')!)).toBeCloseTo((106 + 6 * excessInches) * 0.45359237, 3);
    expect(row(r, 'Граница при ИМТ 25 (не включительно)')).toBe('81 кг');
    expect(ideal.compute({ height: 152.399, sex: 'male' }).primary.value).toBe('—');
  });

  it('uses unrounded maximum estimates in reserve bands and keeps a missing resting pulse explicit', () => {
    // Tanaka at 42: 178.6; reserve 123.6. 55 + 0.7×123.6 = 141.52, upper = 153.88.
    const r = heart.compute({ age: 42, formula: 'tanaka', restingHr: 55 });
    expect(row(r, 'Диапазон 70–80 %')).toBe('142–154 уд/мин');
    const absent = heart.compute({ age: 35, formula: '220-age', restingHr: '' });
    expect(row(absent, 'Пульс покоя')).toBe('не задан');
    expect(row(absent, 'Диапазон 70–80 %')).toBe('130–148 уд/мин');
    expect(absent.table?.columns[1]).toBe('Доля максимума');
    expect(r.table?.columns[1]).toBe('Доля резерва');
  });

  it('calibrates one counted step separately from its energy assumption', () => {
    // 14 m / 20 steps = 0.7 m/step; 10000 steps × 0.7 m = 7 km.
    const base = { mode: 'stride', stride: 70, steps: 10000, weight: 70, kcalPerKgKm: .53 };
    expect(steps.compute(base).primary.value).toBe('7 км');
    expect(row(steps.compute(base), 'Калории')).toBe('260 ккал');
    expect(steps.compute({ ...base, kcalPerKgKm: 1.06 }).primary.value).toBe('7 км');
    expect(row(steps.compute({ ...base, kcalPerKgKm: 1.06 }), 'Калории')).toBe('519 ккал');
  });

  it('evaluates the two VO₂ estimates independently without treating positivity as validation', () => {
    expect(numeric(vo2.compute({ mode: 'hr', hrMax: 190, hrRest: 55 }).primary.value)).toBeCloseTo(15.3 * 190 / 55, 3);
    const at2600 = numeric(vo2.compute({ mode: 'cooper', distance: 2600 }).primary.value);
    const at2650 = numeric(vo2.compute({ mode: 'cooper', distance: 2650 }).primary.value);
    expect(at2650 - at2600).toBeCloseTo(50 / 44.73, 2);
    expect(vo2.compute({ mode: 'cooper', distance: 504.9 }).primary.value).toBe('—');
  });

  it('shows heat as a change to the complete adopted water scenario', () => {
    const r = water.compute({ weight: 72, activityMinutes: 45, hotWeather: 'yes' });
    expect(r.primary.value).toBe('3,191 л');
    expect(row(r, 'Поправка модели на жару')).toBe('0,2901 л');
    expect(numeric(row(r, 'Часть от массы')!)).toBeCloseTo(.033 * 72, 6);
    expect(numeric(row(r, 'Часть от нагрузки')!)).toBeCloseTo(.35 * 45 / 30, 6);
  });

  it('classifies the actual waist ratio rather than its rounded display', () => {
    const r = waist.compute({ waist: 79.9999, height: 160, hip: 100 });
    expect(r.primary.value).toBe('0,5');
    expect(row(r, 'Категория')).toContain('не повышено');
    expect(row(waist.compute({ waist: 80, height: 160, hip: 100 }), 'Категория')).toContain('повышено (0,5');
  });

  it('calculates energy shares from energy and defines the all-zero case', () => {
    const r = macros.compute({ protein: 10, fat: 10, carbs: 0 });
    expect(row(r, 'Из белков')).toBe('40 ккал · 30,77 %');
    expect(row(r, 'Из жиров')).toBe('90 ккал · 69,23 %');
    const empty = macros.compute({ protein: 0, fat: 0, carbs: 0 });
    expect(empty.primary.value).toBe('0 ккал');
    expect(empty.secondary.every((item) => item.value.includes('доля отсутствует'))).toBe(true);
  });

  for (const tool of tools) it(`${tool.id}: malformed or nonfinite active numeric inputs are visible errors`, () => {
    const example = { ...tool.publishedExample!.inputs };
    const key = Object.keys(example).find((name) => typeof example[name] === 'number')!;
    for (const value of ['', 'not a number', NaN, Infinity, true]) {
      const r = tool.compute({ ...example, [key]: value });
      expect(r.primary.value, String(value)).toBe('—');
      expect(r.secondary[0].accent).toBe('red');
    }
  });

  for (const tool of tools) it(`${tool.id}: every published numerical example agrees with the result`, () => {
    const result = tool.compute(tool.publishedExample!.inputs);
    const output = normalize([result.primary.value, ...result.secondary.map((item) => item.value)].join(' '));
    for (const value of tool.publishedExample!.expected) expect(output).toContain(normalize(value));
  });

  it('checks the selected mode alone while rejecting unknown enums and prototype keys', () => {
    expect(activity.compute({ activity: 'walking', met: 'bad', weightKg: 70, minutes: 10 }).primary.value).not.toBe('—');
    expect(steps.compute({ mode: 'stride', height: 'bad', stride: 70, steps: 1, weight: 70, kcalPerKgKm: .53 }).primary.value).not.toBe('—');
    expect(vo2.compute({ mode: 'hr', distance: 'bad', hrMax: 190, hrRest: 60 }).primary.value).not.toBe('—');
    for (const [tool, key] of [[activity, 'activity'], [ideal, 'sex'], [heart, 'formula'], [steps, 'mode'], [vo2, 'mode'], [water, 'hotWeather']] as const) {
      for (const value of ['unexpected', 'constructor', '__proto__']) expect(tool.compute({ ...tool.publishedExample!.inputs, [key]: value }).primary.value).toBe('—');
    }
  });

  it('reports overflowing arithmetic instead of displaying a numerical dash without an error', () => {
    for (const [tool, inputs] of [
      [activity, { activity: 'custom', met: 1e308, weightKg: 1e308, minutes: 1 }],
      [steps, { mode: 'stride', steps: 1e308, stride: 1e308, weight: 70, kcalPerKgKm: .53 }],
      [vo2, { mode: 'hr', hrMax: 1e308, hrRest: 1e-308 }],
      [waist, { waist: 1e308, hip: 1e-308, height: 160 }],
      [macros, { protein: 1e308, fat: 0, carbs: 0 }],
    ] as const) expect(tool.compute(inputs).secondary[0].value).toBe('Результат выходит за числовой диапазон');
  });
});

describe('health wave 2 actual published copy, unit contracts and reachable localization', () => {
  for (const tool of tools) for (const locale of locales) it(`${tool.id}/${locale}: subject-specific owned content reaches the published contract`, () => {
    const c = getCalculatorById(tool.id, locale)!;
    const authored = locale === 'ru' ? tool.presentation : tool.copy![locale]!;
    expect(c.longDescription).toBe(authored.longDescription);
    expect(c.howItWorks).toBe(authored.howItWorks);
    expect(c.example).toBe(authored.example);
    expect(c.faq).toEqual(authored.faq);
    expect(c.disclaimer).toBe(authored.disclaimer);
    expect(c.seoContent?.example).toBe(authored.example);
    expect(c.fullPath).toContain(`/${locale}/`);
    // Actual pre-wave baselines were 5 on the first four + waist, 4 on VO2/water/macros.
    expect(c.faq.length).toBeGreaterThanOrEqual(['vo2max', 'water-intake', 'calories-from-macros'].includes(tool.id) ? 4 : 5);
    for (const field of c.fields.filter((f) => f.type === 'number')) {
      expect(field.unit, field.name).toBeTruthy();
      expect(fieldUnitLabel(field, locale)).toBe(field.unit);
      expect(field.label, field.name).not.toContain(', ');
      if (['en', 'de', 'es'].includes(locale)) expect(field.unit).not.toMatch(/[Ѐ-ӿ]/);
    }
    if (['en', 'de', 'es'].includes(locale)) expect([c.longDescription, c.howItWorks, c.example, ...c.faq.flatMap((item) => [item.q, item.a])].join(' ')).not.toMatch(/[Ѐ-ӿ]/);
  });

  for (const tool of tools) for (const locale of translated) it(`${tool.id}/${locale}: new labels, notes, tables and errors are localized in the real runtime`, () => {
    const runtime = runtimeFor(tool.id);
    const valid = tool.compute(tool.publishedExample!.inputs);
    const localized = localizeResult(valid, locale, tool.id, runtime);
    const firstNumeric = Object.keys(tool.publishedExample!.inputs).find((key) => typeof tool.publishedExample!.inputs[key] === 'number')!;
    const error = tool.compute({ ...tool.publishedExample!.inputs, [firstNumeric]: 'not a number' });
    const localizedError = localizeResult(error, locale, tool.id, runtime);
    const text = JSON.stringify([localized, localizedError]);
    if (locale === 'uk') expect(text).not.toMatch(/[ыъэё]/i);
    else expect(text).not.toMatch(/[Ѐ-ӿ]/);
    if (valid.note) expect(localized.note).not.toBe(valid.note);
    expect(localizedError.secondary[0].value).not.toBe(error.secondary[0].value);
    for (const sample of tool.referenceCases ?? []) {
      const text = JSON.stringify(localizeResult(tool.compute(sample.inputs), locale, tool.id, runtime));
      if (locale === 'uk') expect(text, sample.name).not.toMatch(/[ыъэё]/i);
      else expect(text, sample.name).not.toMatch(/[Ѐ-ӿ]/);
    }
  });

  it('makes health estimate boundaries specific instead of promising diagnosis or a universal target', () => {
    for (const locale of locales) {
      const met = getCalculatorById(activity.id, locale)!;
      expect(met.longDescription).toMatch(/19.?59/);
      expect(met.example).toMatch(/386/);
      const idealCopy = getCalculatorById(ideal.id, locale)!;
      expect(idealCopy.howToUse.join(' ')).toMatch(/152[,.]4/);
      const heartCopy = getCalculatorById(heart.id, locale)!;
      expect(heartCopy.howItWorks).toMatch(/206.*0[,.]88/);
      const vo2Copy = getCalculatorById(vo2.id, locale)!;
      expect(vo2Copy.longDescription).toMatch(/46/);
      expect(vo2Copy.longDescription).toMatch(/21.?51/);
      const waterCopy = getCalculatorById(water.id, locale)!;
      expect(waterCopy.longDescription).toContain('EFSA');
      expect(waterCopy.howItWorks).toMatch(/0[,.]033/);
      const waistCopy = getCalculatorById(waist.id, locale)!;
      expect(waistCopy.longDescription).toContain('35');
      expect(waistCopy.example).toMatch(/0[,.]5/);
      const macroCopy = getCalculatorById(macros.id, locale)!;
      expect(macroCopy.howItWorks).toMatch(/4.*9.*4/);
      expect(macroCopy.faq.map((item) => item.a).join(' ')).toMatch(/Atwater|Этуотер|Етвотер/);
    }
  });
});
