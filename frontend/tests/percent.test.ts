import { describe, it, expect } from 'vitest';
import { calcPercent } from '../src/lib/calculators/percent';

describe('percent: режим "of" — сколько X% от A', () => {
  it('20% от 500 = 100', () => {
    const r = calcPercent({ mode: 'of', a: 20, b: 500 });
    expect(r.primary.value).toContain('100');
  });

  it('0% от 999 = 0', () => {
    const r = calcPercent({ mode: 'of', a: 0, b: 999 });
    expect(r.primary.value).toContain('0');
  });
});

describe('percent: режим "what" — A составляет сколько % от B', () => {
  it('25 от 200 = 12,5%', () => {
    const r = calcPercent({ mode: 'what', a: 25, b: 200 });
    expect(r.primary.value).toContain('12,5');
    expect(r.primary.value).toContain('%');
  });

  it('деление на ноль возвращает ошибку', () => {
    const r = calcPercent({ mode: 'what', a: 50, b: 0 });
    expect(r.primary.value).toBe('—');
  });
});

describe('percent: режимы addPct / subPct', () => {
  it('200 + 15% = 230', () => {
    const r = calcPercent({ mode: 'addPct', a: 200, b: 15 });
    expect(r.primary.value).toContain('230');
  });

  it('200 − 25% = 150', () => {
    const r = calcPercent({ mode: 'subPct', a: 200, b: 25 });
    expect(r.primary.value).toContain('150');
  });
});

describe('percent: режим "change" — изменение в %', () => {
  it('с 100 до 150 = +50%', () => {
    const r = calcPercent({ mode: 'change', a: 100, b: 150 });
    expect(r.primary.value).toContain('+50');
    expect(r.primary.value).toContain('%');
  });

  it('с 200 до 100 = -50%', () => {
    const r = calcPercent({ mode: 'change', a: 200, b: 100 });
    expect(r.primary.value).toContain('-50');
  });

  it('исходное значение 0 — ошибка', () => {
    const r = calcPercent({ mode: 'change', a: 0, b: 100 });
    expect(r.primary.value).toBe('—');
  });
});
