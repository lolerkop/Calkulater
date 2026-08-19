import { describe, expect, it } from 'vitest';
import { formatMeasure, lengthSymbol } from '../../src/lib/platform/measurement';
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
