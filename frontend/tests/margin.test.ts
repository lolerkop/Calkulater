import { describe, it, expect } from 'vitest';
import { calcMargin, markupFromMargin, marginFromMarkup } from '../src/lib/calculators/margin';

const norm = (s: string) => s.replace(/[\s  ]+/g, ' ').trim();
const row = (r: ReturnType<typeof calcMargin>, label: string) =>
  norm(r.secondary.find((s) => s.label === label)?.value ?? '');

describe('margin: по себестоимости и цене', () => {
  it('себестоимость 100, цена 125 → наценка 25%, маржа 20%', () => {
    // прибыль 25; наценка 25/100 = 25%; маржа 25/125 = 20%
    const r = calcMargin({ mode: 'fromPrice', cost: 100, sellPrice: 125 });
    expect(norm(r.primary.value)).toBe('125 ₽');
    expect(row(r, 'Прибыль с единицы')).toBe('25 ₽');
    expect(row(r, 'Наценка')).toBe('25,00%');
    expect(row(r, 'Маржа')).toBe('20,00%');
  });

  it('наценка 100% соответствует марже 50%', () => {
    const r = calcMargin({ mode: 'fromPrice', cost: 500, sellPrice: 1000 });
    expect(row(r, 'Наценка')).toBe('100,00%');
    expect(row(r, 'Маржа')).toBe('50,00%');
  });

  it('цена равна себестоимости — нулевая прибыль', () => {
    const r = calcMargin({ mode: 'fromPrice', cost: 300, sellPrice: 300 });
    expect(row(r, 'Прибыль с единицы')).toBe('0 ₽');
    expect(row(r, 'Наценка')).toBe('0,00%');
    expect(row(r, 'Маржа')).toBe('0,00%');
  });
});

describe('margin: по наценке и по марже', () => {
  it('себестоимость 200 и наценка 30% дают цену 260', () => {
    const r = calcMargin({ mode: 'fromMarkup', cost: 200, markupPct: 30 });
    expect(norm(r.primary.value)).toBe('260 ₽');
    expect(row(r, 'Наценка')).toBe('30,00%');
    // маржа = 60/260 = 23,0769…%
    expect(row(r, 'Маржа')).toBe('23,08%');
  });

  it('себестоимость 200 и маржа 20% дают цену 250', () => {
    // price = 200 / (1 - 0,2) = 250; наценка = 50/200 = 25%
    const r = calcMargin({ mode: 'fromMargin', cost: 200, marginPct: 20 });
    expect(norm(r.primary.value)).toBe('250 ₽');
    expect(row(r, 'Наценка')).toBe('25,00%');
    expect(row(r, 'Маржа')).toBe('20,00%');
  });

  it('режимы наценки и маржи согласованы между собой', () => {
    const byMarkup = calcMargin({ mode: 'fromMarkup', cost: 800, markupPct: 25 });
    const byMargin = calcMargin({ mode: 'fromMargin', cost: 800, marginPct: 20 });
    expect(norm(byMarkup.primary.value)).toBe(norm(byMargin.primary.value));
  });
});

describe('margin: тождества наценки и маржи', () => {
  it('markupFromMargin и marginFromMarkup обратны друг другу', () => {
    for (const markup of [10, 25, 30, 50, 100, 233.5]) {
      expect(markupFromMargin(marginFromMarkup(markup))).toBeCloseTo(markup, 10);
    }
    for (const margin of [5, 20, 33.3, 50, 75]) {
      expect(marginFromMarkup(markupFromMargin(margin))).toBeCloseTo(margin, 10);
    }
  });

  it('известные пары значений', () => {
    expect(marginFromMarkup(100)).toBeCloseTo(50, 10);
    expect(marginFromMarkup(25)).toBeCloseTo(20, 10);
    expect(markupFromMargin(50)).toBeCloseTo(100, 10);
    expect(markupFromMargin(20)).toBeCloseTo(25, 10);
  });

  it('маржа всегда меньше наценки при положительной прибыли', () => {
    for (const markup of [1, 10, 50, 200]) {
      expect(marginFromMarkup(markup)).toBeLessThan(markup);
    }
  });
});

describe('margin: партия', () => {
  it('прибыль за партию появляется только при количестве больше единицы', () => {
    const single = calcMargin({ mode: 'fromPrice', cost: 100, sellPrice: 150, quantity: 1 });
    expect(single.secondary.some((s) => s.label === 'Прибыль за партию')).toBe(false);
    const batch = calcMargin({ mode: 'fromPrice', cost: 100, sellPrice: 150, quantity: 40 });
    expect(row(batch, 'Прибыль за партию')).toBe('2 000 ₽');
  });

  it('дробное количество усекается, ноль трактуется как одна единица', () => {
    const r = calcMargin({ mode: 'fromPrice', cost: 100, sellPrice: 150, quantity: 0 });
    expect(r.secondary.some((s) => s.label === 'Прибыль за партию')).toBe(false);
    const frac = calcMargin({ mode: 'fromPrice', cost: 100, sellPrice: 150, quantity: 3.9 });
    expect(row(frac, 'Прибыль за партию')).toBe('150 ₽');
  });
});

describe('margin: продажа в убыток', () => {
  it('цена ниже себестоимости даёт отрицательные наценку и маржу с пояснением', () => {
    const r = calcMargin({ mode: 'fromPrice', cost: 100, sellPrice: 80 });
    expect(row(r, 'Прибыль с единицы')).toContain('-20');
    expect(row(r, 'Наценка')).toBe('-20,00%');
    expect(row(r, 'Маржа')).toBe('-25,00%');
    expect(r.note).toContain('ниже себестоимости');
  });
});

describe('margin: некорректный ввод', () => {
  it('нулевая себестоимость отклоняется', () => {
    const r = calcMargin({ mode: 'fromPrice', cost: 0, sellPrice: 100 });
    expect(r.primary.value).toBe('—');
    expect(row(r, 'Проверьте данные')).toContain('себестоимость');
  });

  it('маржа 100% и больше отклоняется', () => {
    for (const marginPct of [100, 120]) {
      const r = calcMargin({ mode: 'fromMargin', cost: 200, marginPct });
      expect(r.primary.value).toBe('—');
      expect(row(r, 'Проверьте данные')).toContain('меньше 100%');
    }
  });

  it('маржа чуть ниже 100% считается', () => {
    const r = calcMargin({ mode: 'fromMargin', cost: 1, marginPct: 99 });
    expect(norm(r.primary.value)).toBe('100 ₽');
  });

  it('нулевая цена продажи отклоняется', () => {
    const r = calcMargin({ mode: 'fromPrice', cost: 100, sellPrice: 0 });
    expect(r.primary.value).toBe('—');
    expect(row(r, 'Проверьте данные')).toContain('Цена продажи');
  });

  it('наценка -100% обнуляет цену и отклоняется', () => {
    expect(calcMargin({ mode: 'fromMarkup', cost: 100, markupPct: -100 }).primary.value).toBe('—');
  });
});
