import { describe, it, expect } from 'vitest';
import { calcPercent } from '../src/calculators/percent-calculator/compute';
import { percentContextualField } from '../src/calculators/percent-calculator/contextualField';
import { validatePercent } from '../src/calculators/percent-calculator/validate';
import { parseLocalizedNumber } from '../src/lib/format';

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

describe('percent: input contract and task-specific labels', () => {
  const localeLabels = [
    ['ru', 'Число', 'Процент', 'Значение не может быть равно нулю.'],
    ['en', 'Number', 'Percentage', 'The value cannot be zero.'],
    ['uk', 'Число', 'Відсоток', 'Значення не може дорівнювати нулю.'],
    ['de', 'Zahl', 'Prozentsatz', 'Der Wert darf nicht null sein.'],
    ['es', 'Número', 'Porcentaje', 'El valor no puede ser cero.'],
  ] as const;
  it.each(localeLabels)('%s add/sub labels put the percentage on B, matching the arithmetic', (locale, number, percentage) => {
    for (const mode of ['addPct', 'subPct']) {
      const a = percentContextualField({ name: 'a', label: 'A', type: 'number' }, { mode }, locale);
      const b = percentContextualField({ name: 'b', label: 'B', type: 'number' }, { mode }, locale);
      expect(a.label).toBe(number);
      expect(a.unit).toBeUndefined();
      expect(b.label).toBe(percentage);
      expect(b.unit).toBe('%');
      expect(calcPercent({ mode, a: 200, b: 15 }).primary.value).toBe(mode === 'addPct' ? '230,00' : '170,00');
    }
    expect(percentContextualField({ name: 'a', label: 'A', type: 'number' }, { mode: 'of' }, locale).unit).toBe('%');
    expect(percentContextualField({ name: 'b', label: 'B', type: 'number', unit: '%' }, { mode: 'change' }, locale).unit).toBeUndefined();
  });
  it.each(localeLabels)('%s zero-denominator UI error is translated', (locale, _number, _percentage, error) => {
    expect(validatePercent({ values: { mode: 'what', a: 50, b: 0 }, locale, fields: [], parseNumber: parseLocalizedNumber })).toEqual({ b: error });
    expect(validatePercent({ values: { mode: 'change', a: 0, b: 50 }, locale, fields: [], parseNumber: parseLocalizedNumber })).toEqual({ a: error });
    expect(validatePercent({ values: { mode: 'of', a: 0, b: 0 }, locale, fields: [], parseNumber: parseLocalizedNumber })).toEqual({});
  });
  it.each(['a', 'b'])('rejects malformed active %s without coercion to zero or one', (field) => {
    for (const invalid of [true, false, '', 'abc', '1 23', '1e3', NaN, Infinity, -Infinity, { toString: () => '15' }]) {
      const result = calcPercent({ mode: 'of', a: 15, b: 200, [field]: invalid } as never);
      expect(result.primary.value).toBe('—');
      expect(result.secondary[0].accent).toBe('red');
    }
  });
  it('rejects an unknown mode explicitly instead of returning a plausible zero', () => {
    const result = calcPercent({ mode: 'zzz', a: 1, b: 2 });
    expect(result.primary.value).toBe('—');
    expect(result.secondary[0].value).toBe('Выберите допустимый режим расчёта.');
    expect(calcPercent({ mode: { toString: () => 'of' }, a: 1, b: 2 } as never).primary.value).toBe('—');
  });
  it('preserves signed and above-100 percent arithmetic and explains a negative base', () => {
    expect(calcPercent({ mode: 'of', a: -25, b: 200 }).primary.value).toBe('-50,00');
    expect(calcPercent({ mode: 'subPct', a: 200, b: 150 }).primary.value).toBe('-100,00');
    const negativeBase = calcPercent({ mode: 'change', a: -100, b: -50 });
    expect(negativeBase.primary.value).toBe('-50,00%');
    expect(negativeBase.secondary.find((row) => row.label === 'Разница B − A')?.value).toBe('50,00');
    expect(negativeBase.secondary.find((row) => row.label === 'Подсказка')?.value).toContain('отрицательной');
  });
  it('reports numerical overflow explicitly and accepts localized finite decimals', () => {
    expect(calcPercent({ mode: 'addPct', a: 1e308, b: 1000 }).secondary[0].value).toBe('Результат выходит за пределы числовой точности.');
    expect(calcPercent({ mode: 'of', a: '12,5', b: '340' }).primary.value).toBe('42,50');
  });
  it('equal increase and decrease percentages use different bases', () => {
    const increased = 100 * 1.1;
    expect(calcPercent({ mode: 'addPct', a: 100, b: 10 }).primary.value).toBe('110,00');
    expect(calcPercent({ mode: 'subPct', a: increased, b: 10 }).primary.value).toBe('99,00');
    expect(calcPercent({ mode: 'change', a: 10, b: 12 }).primary.value).toBe('+20,00%');
  });
  it('an unchanged negative base displays one zero sign, avoiding a plus-minus zero', () => {
    expect(calcPercent({ mode: 'change', a: -100, b: -100 }).primary.value).toBe('+0,00%');
  });
});
