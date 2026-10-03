import { describe, expect, it } from 'vitest';
import { definition as inclined } from '../src/calculators/inclined-plane/definition';
import { definition as potential } from '../src/calculators/potential-energy/definition';
import { definition as kinetic } from '../src/calculators/kinetic-energy/definition';
import { definition as ohm } from '../src/calculators/ohms-law/definition';
import { definition as voltage } from '../src/calculators/voltage-drop/definition';
import { definition as power } from '../src/calculators/physics-power/definition';
import { contextualField } from '../src/calculators/ohms-law/contextualField';
import { localization as l1 } from '../src/calculators/inclined-plane/localization';
import { localization as l2 } from '../src/calculators/potential-energy/localization';
import { localization as l3 } from '../src/calculators/kinetic-energy/localization';
import { localization as l4 } from '../src/calculators/ohms-law/localization';
import { localization as l5 } from '../src/calculators/voltage-drop/localization';
import { localization as l6 } from '../src/calculators/physics-power/localization';
import { getCalculatorById } from '../src/lib/i18n';
import type { CalcResult } from '../src/lib/types';

const tools = [inclined, potential, kinetic, ohm, voltage, power];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const normalize = (v: string) => v.replace(/[\u00a0\u202f]/g, ' ');
const row = (r: CalcResult, label: string) => r.secondary?.find((item) => item.label === label)?.value;

describe('physics wave 1 independent calculations', () => {
  for (const tool of tools) it(`${tool.id}: declared analytical reference cases`, () => {
    for (const sample of tool.referenceCases ?? []) {
      const result = tool.compute(sample.inputs);
      expect(normalize(result.primary.value), sample.name).toBe(normalize(sample.expectPrimary));
      for (const expected of sample.expectSecondary ?? []) expect(normalize(String(row(result, expected.label))), sample.name).toBe(normalize(expected.value));
    }
  });

  it('counts heat in all three conductors separately from line-to-line voltage drop', () => {
    // R = 0.0282 × 50 / 6 = 0.235 Ω. Sum of three I²R losses = 3 × 32² × 0.235 = 721.92 W.
    const r = voltage.compute({ current: 32, length: 50, section: 6, voltage: 400, material: 'aluminium', phase: 'three' });
    expect(r.primary.value).toBe('13,025 В');
    expect(row(r, 'Потери мощности')).toBe('721,92 Вт');
    expect(row(r, 'Сопротивление одной жилы')).toBe('0,235 Ом');
  });

  it('accepts zero current/length and rejects a drop greater than supply voltage', () => {
    const base = { current: 16, length: 20, section: 2.5, voltage: 230, material: 'copper', phase: 'single' };
    for (const change of [{ current: 0 }, { length: 0 }]) {
      const r = voltage.compute({ ...base, ...change });
      expect(r.primary.value).toBe('0 В');
      expect(row(r, 'Напряжение у нагрузки')).toBe('230 В');
      expect(row(r, 'Потери мощности')).toBe('0 Вт');
    }
    expect(voltage.compute({ ...base, current: 1000 }).secondary?.[0].value).toContain('Падение превышает');
  });

  it('has the independent flat limit −μg and the vertical limit with zero normal/friction force', () => {
    expect(row(inclined.compute({ m: 50, angle: 0, mu: 0.2 }), 'Ускорение')).toBe('-1,961 м/с²');
    const r = inclined.compute({ m: 1, angle: 90, mu: 100 });
    expect(row(r, 'Сила нормального давления')).toBe('0 Н');
    expect(row(r, 'Сила трения')).toBe('0 Н');
    expect(row(r, 'Ускорение')).toBe('9,807 м/с²');
  });

  it('calculates every extra numerical example now written in the visible content', () => {
    expect(kinetic.compute({ mode: 'E', m: 2, v: 6 }).primary.value).toBe('36 Дж');
    expect(power.compute({ mode: 'P', W: 1000, t: 20 }).primary.value).toBe('50 Вт');
    const r = ohm.compute({ mode: 'vr', voltage: 5, resistance: 250 });
    expect(r.primary.value).toBe('0,020 А');
    expect(row(r, 'Мощность')).toBe('0,10 Вт');
    expect(row(ohm.compute({ mode: 'ir', current: 0, resistance: 250 }), 'Мощность')).toBe('0,00 Вт');
  });

  it('checks the new angle/unit and resistance/cross-section comparison FAQ examples', () => {
    // 100% rise/run gives atan(1) = 45°. At 45° a 1 kg frictionless body has mg/√2 = 6.9343487… N downhill.
    expect(inclined.compute({ m: 1, angle: 45, mu: 0 }).primary.value).toBe('6,934 Н');
    expect(kinetic.compute({ mode: 'v', E: 1000, m2: 80 }).primary.value).toBe('5 м/с');
    expect(row(ohm.compute({ mode: 'vr', voltage: 12, resistance: 12 }), 'Мощность')).toBe('12,00 Вт');
    const cable = voltage.compute({ current: 16, length: 20, section: 5, voltage: 230, material: 'copper', phase: 'single' });
    expect(cable.primary.value).toBe('2,24 В');
    expect(row(cable, 'Потери мощности')).toBe('35,84 Вт');
  });

  it('ignores only the inputs irrelevant to the selected mode', () => {
    expect(ohm.compute({ mode: 'vi', voltage: 12, current: 2, resistance: 'invalid' }).primary.value).toBe('6,00 Ом');
    expect(potential.compute({ mode: 'h', E: 490.3325, m2: 5, h: -5 }).primary.value).toBe('10 м');
    expect(kinetic.compute({ mode: 'v', E: 100, m2: 8, v: -5 }).primary.value).toBe('5 м/с');
    expect(power.compute({ mode: 'W', P2: 75, t2: 4, W: -5 }).primary.value).toBe('300 Дж');
  });

  it('rejects unknown modes rather than taking the final branch', () => {
    for (const t of [potential, kinetic, ohm, power]) expect(t.compute({ mode: 'not-a-mode', E2: 50, h2: 2, v2: 10, P2: 75, t2: 4, current: 1, resistance: 1 }).primary.value).toBe('—');
  });

  for (const tool of tools) it(`${tool.id}: blank/malformed/nonfinite/boolean active input is a visible error`, () => {
    const valid = { ...tool.publishedExample!.inputs };
    const key = Object.keys(valid).find((k) => typeof valid[k] === 'number')!;
    for (const value of ['', 'not a number', NaN, Infinity, true]) {
      const r = tool.compute({ ...valid, [key]: value });
      expect(r.primary.value, String(value)).toBe('—');
      expect(r.secondary?.[0].accent).toBe('red');
    }
  });

  it('explains overflowing arithmetic instead of printing an unexplained dash', () => {
    for (const [tool, values] of [
      [inclined, { m: 1e308, angle: 30, mu: 0.2 }],
      [potential, { mode: 'E', m: 1e308, h: 10 }],
      [kinetic, { mode: 'E', m: 1e308, v: 10 }],
      [power, { mode: 'W', P2: 1e308, t2: 10 }],
      [ohm, { mode: 'ir', current: 1e308, resistance: 10 }],
      [voltage, { current: 1e308, length: 20, section: 2.5, voltage: 230, phase: 'three', material: 'copper' }],
    ] as const) expect(tool.compute(values).secondary?.[0].value).toBe('Результат выходит за числовой диапазон');
  });

  it('avoids intermediate overflow when a finite inverse or direct answer exists', () => {
    // 1e308 J / 1e308 kg / g = 1/g m; numerator and denominator are finite.
    expect(potential.compute({ mode: 'h', E: 1e308, m2: 1e308 }).primary.value).toBe('0,102 м');
    expect(potential.compute({ mode: 'E', m: 1e308, h: 0 }).primary.value).toBe('0 Дж');
    expect(potential.compute({ mode: 'h', E: 1e308, m2: 0.1 }).primary.value).toBe('1,020·10^308 м');
    expect(potential.compute({ mode: 'm', E2: 1e308, h2: 0.1 }).primary.value).toBe('1,020·10^308 кг');
    // sqrt(2e308/1e308) = sqrt(2), despite 2e308 exceeding the floating point range.
    expect(kinetic.compute({ mode: 'v', E: 1e308, m2: 1e308 }).primary.value).toBe('1,414 м/с');
  });

  it('accepts the shared comma-decimal input without changing its magnitude', () => {
    expect(kinetic.compute({ mode: 'E', m: '2,5', v: '4' }).primary.value).toBe('20 Дж');
    expect(potential.compute({ mode: 'E', m: '5', h: '0,5' }).primary.value).toBe('24,517 Дж');
  });
});

describe('physics wave 1 runtime content and translations', () => {
  for (const tool of tools) for (const locale of locales) it(`${tool.id}/${locale}: owned method/example/FAQ/boundary reach runtime`, () => {
    const c = getCalculatorById(tool.id, locale)!;
    const authored = locale === 'ru' ? tool.presentation : tool.copy![locale]!;
    expect(c.howItWorks).toBe(authored.howItWorks);
    expect(c.example).toBe(authored.example);
    expect(c.faq).toEqual(authored.faq);
    expect(c.disclaimer).toBe(authored.disclaimer);
    expect(c.seoContent?.example).toBe(authored.example);
    expect(c.fullPath).toContain(`/${locale}/`);
    for (const f of c.fields.filter((field) => field.type === 'number')) {
      expect(f.unit, f.name).toBeTruthy();
      expect(f.label, f.name).not.toContain(', '); // UI appends unit separately, once.
    }
  });

  it('states downhill sliding and a dimensionless friction coefficient in every authored language', () => {
    for (const locale of locales) {
      const c = getCalculatorById(inclined.id, locale)!;
      expect(c.longDescription).toMatch(/скользит|sliding|ковзає|hinabgleitet|desliza/);
      expect(c.fields.find((f) => f.name === 'mu')?.unit).toBe('1');
    }
  });

  it('translates each newly reachable engine error and the cable-model note', () => {
    for (const bundle of [l1,l2,l3,l4,l5,l6]) for (const locale of ['en','uk','de','es'] as const) {
      for (const msg of ['Неизвестный режим расчёта','Введите конечные числа для выбранного режима','Результат выходит за числовой диапазон']) expect(bundle[locale]?.values?.[msg]).toBeTruthy();
    }
    for (const locale of ['en','uk','de','es'] as const) {
      expect(l5[locale]?.values?.[String(voltage.compute(voltage.publishedExample!.inputs).note)]).toBeTruthy();
      expect(l5[locale]?.results?.['Сопротивление одной жилы']).toBeTruthy();
    }
  });

  it('uses German and Spanish computed-field suffixes', () => {
    const f = ohm.presentation.fields.find((field) => field.name === 'resistance')!;
    expect(contextualField(f, { mode: 'vi' }, 'de').label).toContain('(berechnet)');
    expect(contextualField(f, { mode: 'vi' }, 'es').label).toContain('(calculado)');
  });
});
