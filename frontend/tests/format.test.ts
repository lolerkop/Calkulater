import { describe, it, expect } from 'vitest';
import { fmtNumber, fmtInt, fmtMoney, fmtPct, toNumber, toStr, pluralRu, fmtDuration } from '../src/lib/format';

describe('Утилиты форматирования', () => {
  it('fmtNumber использует ru-RU локаль', () => {
    expect(fmtNumber(1234.56, 2)).toMatch(/1\s?234,56/);
  });

  it('fmtInt округляет', () => {
    expect(fmtInt(1234.7)).toMatch(/1\s?235/);
  });

  it('fmtMoney добавляет символ', () => {
    expect(fmtMoney(1000)).toMatch(/₽/);
    expect(fmtMoney(1000, '$')).toMatch(/\$/);
  });

  it('fmtPct добавляет %', () => {
    expect(fmtPct(12.5)).toMatch(/12,50%/);
  });

  it('toNumber поддерживает запятую', () => {
    expect(toNumber('1,5')).toBe(1.5);
    expect(toNumber('abc', 7)).toBe(7);
    expect(toNumber(undefined, 3)).toBe(3);
  });

  it('toStr возвращает fallback при undefined', () => {
    expect(toStr(undefined, 'x')).toBe('x');
    expect(toStr(42)).toBe('42');
  });

  it('pluralRu выбирает правильную форму', () => {
    const forms: [string, string, string] = ['год', 'года', 'лет'];
    expect(pluralRu(1, forms)).toBe('год');
    expect(pluralRu(2, forms)).toBe('года');
    expect(pluralRu(5, forms)).toBe('лет');
    expect(pluralRu(11, forms)).toBe('лет');
    expect(pluralRu(21, forms)).toBe('год');
  });

  it('fmtDuration работает с часами и без', () => {
    expect(fmtDuration(65)).toBe('1:05');
    expect(fmtDuration(3725)).toBe('1:02:05');
  });
});
