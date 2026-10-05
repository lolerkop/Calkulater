import { describe, it, expect } from 'vitest';
import { calcBmi } from '../src/lib/calculators/bmi';
import { compute as temperature } from '../src/calculators/convert-temperature/compute';

describe('post-audit: exact decimal BMI classification, not rounded display', () => {
  // Independently obtained from weight = cutoff × 160² / 10000.
  const boundaries = [
    ['40.96', 'Выраженный дефицит', 'Недостаток веса'],
    ['47.36', 'Недостаток веса', 'Норма'],
    ['64', 'Норма', 'Избыточный вес'],
    ['76.8', 'Избыточный вес', 'Ожирение I степени'],
    ['89.6', 'Ожирение I степени', 'Ожирение II степени'],
    ['102.4', 'Ожирение II степени', 'Ожирение III степени'],
  ] as const;
  const category = (height: string | number, weight: string | number) => calcBmi({ height, weight }).secondary[0].value;
  for (const [weight, below, at] of boundaries) {
    it(`160cm/${weight}kg reaches the inclusive cutoff`, () => {
      expect(category(160, weight)).toBe(at);
      expect(category(160, Number(weight))).toBe(at);
      // Decimal neighbours differ by 0.000001 kg, not by a display digit.
      expect(category(160, (Number(weight) - 0.000001).toFixed(6))).toBe(below);
      expect(category(160, (Number(weight) + 0.000001).toFixed(6))).toBe(at);
    });
  }
  it('keeps accepted decimal digits which binary parsing would erase', () => {
    expect(category('160', '63.9999999999999999')).toBe('Норма');
    expect(category('160', '64.0000000000000001')).toBe('Избыточный вес');
    expect(category('160.0000000000000001', '64')).toBe('Норма');
    expect(category('159.9999999999999999', '64')).toBe('Избыточный вес');
    expect(category('200', '100')).toBe('Избыточный вес');
    expect(category('160', '47,36')).toBe('Норма');
  });
});

describe('post-audit: exact temperature anchors with real small values', () => {
  for (const [from, value] of [['c', '-273.15'], ['f', '-459.67'], ['k', '0'], ['r', '0']] as const) {
    for (const to of ['k', 'r']) it(`${value}${from} is exactly zero in ${to}`, () => {
      expect(temperature({ from, to, value }).primary.value).toBe(to === 'k' ? '0 K' : '0 °Ra');
    });
  }
  it('keeps both decimal neighbours and the existing algebraic negative-temperature contract', () => {
    expect(temperature({ from: 'f', to: 'k', value: '-459.6699999999999999' }).primary.value).toBe('5,555556·10^-17 K');
    expect(temperature({ from: 'f', to: 'k', value: '-459.6700000000000001' }).primary.value).toBe('-5,555556·10^-17 K');
    expect(temperature({ from: 'r', to: 'k', value: 1e-300 }).primary.value).toBe('5,555556·10^-301 K');
  });
  it('converts exact zero back to all scale anchors', () => {
    expect(temperature({ from: 'k', to: 'c', value: 0 }).primary.value).toBe('-273,1500 °C');
    expect(temperature({ from: 'r', to: 'f', value: 0 }).primary.value).toBe('-459,6700 °F');
  });
});
