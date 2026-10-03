import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../src/calculators/manifest.generated';
import { convert } from '../src/lib/platform/conversion';
import { lengthUnits } from '../src/calculators/convert-length/units';

const ids = ['angle', 'area', 'cooking-volume', 'data-rate', 'density', 'digital', 'energy', 'flow', 'force', 'frequency', 'illuminance', 'length', 'mass', 'power', 'pressure', 'speed', 'temperature', 'time', 'torque', 'volume'].map((id) => `convert-${id}`);

// NIST SI/IEC definitions and dimensionally derived conversions. These constants
// are deliberately independent of the tables and formatting implementation.
const definedCases = [
  ['angle', 180, 'deg', 'rad', '3,1416 рад'],
  ['area', 1, 'ha', 'm2', '10 000,00 м²'],
  ['cooking-volume', 1, 'cupUS', 'ml', '236,5882 мл'],
  ['data-rate', 8, 'mbits', 'mbytes', '1,0000 МБ/с'],
  ['density', 1, 'gcm3', 'kgm3', '1 000,00 кг/м³'],
  ['digital', 1, 'MiB', 'B', '1 048 576,00 Б'],
  ['energy', 1, 'kwh', 'j', '3 600 000,00 Дж'],
  ['flow', 60, 'lmin', 'ls', '1,0000 л/с'],
  ['force', 1, 'kgf', 'n', '9,8067 Н'],
  ['frequency', 60, 'rpm', 'hz', '1,0000 Гц'],
  ['illuminance', 1, 'fc', 'lx', '10,7639 лк'],
  ['length', 1, 'in', 'cm', '2,5400 см'],
  ['mass', 1, 'lb', 'kg', '0,453592 кг'],
  ['power', 1, 'ps', 'w', '735,4988 Вт'],
  ['pressure', 1, 'atm', 'kpa', '101,3250 кПа'],
  ['speed', 36, 'kmh', 'ms', '10,0000 м/с'],
  ['temperature', -40, 'c', 'f', '-40,0000 °F'],
  ['time', 1, 'wk', 'h', '168,0000 ч'],
  ['torque', 12, 'lbfin', 'lbfft', '1,0000 lbf·ft'],
  ['volume', 1, 'galUS', 'l', '3,7854 л'],
] as const;

describe('independent defined-unit cases', () => {
  it.each(definedCases)('%s conversion of %s %s to %s', (family, value, from, to, expected) => {
    const definition = v2Definitions.find((item) => item.id === `convert-${family}`)!;
    expect(definition.compute({ value, from, to }).primary.value).toBe(expected);
  });
});

describe('converter input integrity', () => {
  for (const id of ids) {
    const definition = v2Definitions.find((item) => item.id === id)!;
    const fields = definition.presentation.fields;
    const from = fields.find((field) => field.name === 'from')!.defaultValue;
    const to = fields.find((field) => field.name === 'to')!.defaultValue;
    it.each(['', ' ', 'not-a-number', undefined, null, true, false, Number.NaN, Number.POSITIVE_INFINITY])(`${id} rejects invalid active value %s`, (value) => {
      const result = definition.compute({ value, from, to } as never);
      expect(result.primary.value).toBe('—');
      expect(result.secondary).toContainEqual(expect.objectContaining({ label: 'Проверьте данные', accent: 'red' }));
    });
    it(`${id} rejects inherited and unknown unit keys`, () => {
      for (const bad of ['constructor', '__proto__', 'unknown-unit']) {
        expect(definition.compute({ value: 1, from: bad, to }).primary.value).toBe('—');
      }
    });
  }
});

describe('range and localized input', () => {
  it('converts a large finite kilometre value without overflowing an unnecessary metre intermediate', () => {
    // International mile: 1760 yards × 3 feet × 12 inches × 0.0254 metres.
    const expectedRatio = 1000 / (1760 * 3 * 12 * 0.0254);
    const result = convert(lengthUnits, 1e308, 'km', 'mi');
    expect(Number.isFinite(result)).toBe(true);
    expect(result / 1e308).toBeCloseTo(expectedRatio, 14);
  });
  it('converts a grouped comma-decimal value using the stated SI centimetre definition', () => {
    const definition = v2Definitions.find((item) => item.id === 'convert-length')!;
    expect(definition.compute({ value: '2 000,5', from: 'm', to: 'cm' }).primary.value).toBe('200 050,00 см');
  });
  it('reports arithmetic underflow instead of presenting nonzero electronvolt energy as zero joules', () => {
    const definition = v2Definitions.find((item) => item.id === 'convert-energy')!;
    const result = definition.compute({ value: 1e-308, from: 'ev', to: 'j' });
    expect(result.primary.value).toBe('—');
    expect(result.secondary).toContainEqual(expect.objectContaining({ value: 'Результат вне допустимого диапазона', accent: 'red' }));
  });
});
