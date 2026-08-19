import { describe, expect, it } from 'vitest';
import { formatMeasure, formatQuantity, lengthSymbol, formatStatistic, sinDegrees } from '../../src/lib/platform/measurement';
import { fmtNumber } from '../../src/lib/format';

// Помощник извлечён после десяти реальных потребителей и отвечает ровно за две
// вещи. Его собственные проверки закрепляют то, ради чего он и появился:
// разряды подбираются по величине, а хвост нулей не показывается.
const NBSP = '\u00a0';   // ru-RU разделяет разряды именно им, а не обычным пробелом
const f = (value: number) => formatMeasure(value, fmtNumber);

describe('оформление измеренной величины', () => {
  it('подбирает разряды по величине', () => {
    expect(f(1234.5678)).toBe(`1${NBSP}234,57`);   // >= 100 -> два знака
    expect(f(28.274334)).toBe('28,274');      // >= 1   -> три знака
    expect(f(0.014142)).toBe('0,0141');       // >= 0,01 -> четыре знака
    expect(f(0.000001)).toBe('0,000001');     // меньше -> шесть знаков
  });

  it('не показывает хвост нулей', () => {
    expect(f(25)).toBe('25');
    expect(f(20)).toBe('20');
    expect(f(18.8495559)).toBe('18,85');
    expect(f(0.5)).toBe('0,5');
  });

  it('разделитель разрядов — неразрывный пробел', () => {
    expect(f(1000)).toContain(' ');
  });

  it('переводит ASCII-код единицы в символ и не падает на неизвестном', () => {
    expect(lengthSymbol('mm')).toBe('мм');
    expect(lengthSymbol('cm')).toBe('см');
    expect(lengthSymbol('m')).toBe('м');
    expect(lengthSymbol('parsec')).toBe('см');
  });
});

// Оформление физической величины извлечено после восьми потребителей и
// отличается от оформления размера ровно одним: краями диапазона.
describe('оформление физической величины', () => {
  const q = (value: number) => formatQuantity(value, fmtNumber);

  it('в обычном диапазоне совпадает с оформлением размера', () => {
    for (const value of [0, 20, 9, 490.3325, 0.5, 1234.5678]) {
      expect(q(value)).toBe(f(value));
    }
  });

  it('у краёв диапазона переходит к показательной записи', () => {
    expect(q(1e-12)).toBe('1,000·10^-12');
    expect(q(2.5e-7)).toBe('2,500·10^-7');
    expect(q(3e14)).toBe('3,000·10^14');
  });

  it('ноль остаётся нулём, а не показательной записью', () => {
    expect(q(0)).toBe('0');
  });

  it('граница диапазона: 10⁻⁴ ещё обычная запись', () => {
    expect(q(1e-4)).not.toContain('10^');
    expect(q(9e-5)).toContain('10^');
  });
});

describe('formatStatistic', () => {
  const s = (value: number) => formatStatistic(value, fmtNumber);

  it('держит четыре знака там, где у размеров фигуры хватило бы трёх', () => {
    // √182 = 13,4907376… — третий знак уже теряет различие с 13,491
    expect(s(Math.sqrt(182))).toBe('13,4907');
    expect(s(Math.sqrt(910 / 6))).toBe('12,3153');
    expect(s(690 / 9)).toBe('76,6667');
  });

  it('срезает хвост нулей и не оставляет висящей запятой', () => {
    expect(s(18)).toBe('18');
    expect(s(15.5)).toBe('15,5');
    expect(s(0)).toBe('0');
    expect(s(1000)).toBe('1 000');
  });

  it('сохраняет знак', () => {
    expect(s(-8)).toBe('-8');
    expect(s(-2 / 3)).toBe('-0,6667');
  });

  it('разряды не зависят от величины, в отличие от formatMeasure', () => {
    // formatMeasure для 1234,5678 даёт два знака, статистика — четыре
    expect(s(1234.5678)).toBe('1 234,5678');
  });
});

describe('sinDegrees', () => {
  it('переводит градусы в радианы, а не подставляет их в Math.sin', () => {
    expect(sinDegrees(30)).toBeCloseTo(0.5, 12);
    expect(sinDegrees(90)).toBe(1);
    expect(sinDegrees(45)).toBeCloseTo(Math.SQRT1_2, 12);
  });

  it('приводит машинный нуль к точному', () => {
    // Math.sin(Math.PI) даёт 1,2246e-16 — именно этот остаток и должен исчезнуть
    expect(Math.sin(Math.PI)).not.toBe(0);
    expect(sinDegrees(180)).toBe(0);
    expect(sinDegrees(360)).toBe(0);
    expect(sinDegrees(0)).toBe(0);
  });

  it('порог не съедает настоящие малые значения', () => {
    expect(sinDegrees(1e-6)).toBeGreaterThan(0);
  });
});
