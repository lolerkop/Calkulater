import { describe, expect, it } from 'vitest';
import { calcOneRm } from '../src/lib/calculators/oneRm';
import { calculators } from '../src/data/calculators';
import { validateValues } from '../src/components/islands/calculator/validation';
import type { CalcResult } from '../src/lib/types';

// Product range 1..12 is the already published form range. The runner now
// enforces it too; unsupported models must not be relabelled Epley estimates.
const row = (r: CalcResult, label: string) => r.secondary.find((x) => x.label === label)?.value;
const kg = (s?: string) => s === undefined ? Number.NaN : Number(s.replace(' кг', '').replace(/\s/g, '').replace(',', '.'));
const run = (weight: number, reps: number) => calcOneRm({ weight, reps });
const labels = ['Формула Бжицки', 'Формула Лэндера', 'Средняя оценка'];

describe('one-rep-max: matching public and runner range', () => {
  it('the existing public range is 1..12', () => {
    const c = calculators.find((x) => x.id === 'one-rep-max-calculator')!;
    const f = c.fields.find((x) => x.name === 'reps')!;
    expect([f.min, f.max]).toEqual([1, 12]);
    for (const reps of [1, 5, 12]) expect(validateValues(c.id, c.fields, { weight: 100, reps }, 'ru')).toEqual({});
    for (const reps of [0, 13, 37, 38, 100]) expect(validateValues(c.id, c.fields, { weight: 100, reps }, 'ru')).toHaveProperty('reps');
  });
  it.each([1, 2, 5, 8, 10, 12])('keeps all original mathematical models at r=%i', (reps) => {
    for (const weight of [20, 40, 60, 100, 150, 250]) {
      const e = reps === 1 ? weight : weight * (1 + reps / 30);
      const b = weight * 36 / (37 - reps);
      const l = 100 * weight / (101.3 - 2.67123 * reps);
      const expected = [b, l, (e + b + l) / 3];
      const r = run(weight, reps);
      expect(kg(r.primary.value)).toBeCloseTo(e, 0);
      labels.forEach((label, i) => expect(kg(row(r, label))).toBeCloseTo(expected[i], 0));
    }
  });
  it('keeps the independently worked 100 kg ×5 and 60 kg ×12 examples', () => {
    const five = run(100, 5);
    expect(five.primary.value).toBe('116,7 кг');
    expect(labels.map((l) => row(five, l))).toEqual(['112,5 кг', '113,7 кг', '114,3 кг']);
    expect(five.note).toBeUndefined();
    expect(run(60, 12).primary.value).toBe('84,0 кг');
    expect(run(60, 12).note).toBe('Точность формулы снижается при повторениях больше 10.');
  });
});
describe('one-rep-max: refuses unsupported results explicitly', () => {
  it.each([0, -5, 5.5, 12.1, 13, 20, 36, 37, 38, 100, 1000, NaN, Infinity])('r=%s produces an error, not a substituted named model', (reps) => {
    const r = run(100, reps);
    expect(r.primary.value).toBe('—');
    expect(r.secondary[0].accent).toBe('red');
    for (const label of labels) expect(row(r, label)).toBeUndefined();
  });
  it.each([0, -100, NaN, Infinity, 1.7e308])('rejects invalid or overflow-producing weight %s', (weight) => {
    const r = run(weight, 12);
    expect(r.primary.value).toBe('—');
    expect(r.secondary[0].accent).toBe('red');
  });
  it('does not round fractional repetitions into another set', () => {
    expect(run(80, 5.5).primary.value).toBe('—');
    expect(run(80, 6).primary.value).toBe('96,0 кг');
  });
  it('small positive estimates are not displayed as zero', () => {
    const r = run(0.001, 5);
    expect(kg(r.primary.value)).toBeGreaterThan(0);
    for (const label of labels) expect(kg(row(r, label))).toBeGreaterThan(0);
  });
});
