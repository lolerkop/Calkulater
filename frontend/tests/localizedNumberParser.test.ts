import { describe, expect, it } from 'vitest';
import { fmtNumber, parseLocalizedNumber } from '../src/lib/format';

// Полная таблица грамматики разбора. Описание решений — phase14/parser-grammar.md.
// Смысл набора один: десятичная дробь никогда не должна стать числом в тысячу раз
// больше. «2.500» на боевом калькуляторе квадрата давало ответ для 2500 — эти
// проверки существуют, чтобы это не вернулось.

const NBSP = ' ';
const NNBSP = ' ';
const THIN = ' ';
type L = 'ru' | 'en' | 'uk';
const ALL: L[] = ['ru', 'en', 'uk'];

describe('разбор числа: инвариант тысячи', () => {
  // Ядро всей фазы: дробь с ЛЮБЫМ числом знаков не умножается на тысячу.
  it.each(['0.001', '1.234', '2.500', '18.015', '16.667', '12.345', '999.999', '44.009'])(
    'точка в «%s» — дробный разделитель во всех локалях',
    (raw) => {
      for (const locale of ALL) expect(parseLocalizedNumber(raw, locale)).toBe(Number(raw));
    },
  );

  it.each(['0,001', '1,234', '2,500', '18,015', '12,345'])(
    'запятая в «%s» — дробный разделитель в ru и uk',
    (raw) => {
      const expected = Number(raw.replace(',', '.'));
      expect(parseLocalizedNumber(raw, 'ru')).toBe(expected);
      expect(parseLocalizedNumber(raw, 'uk')).toBe(expected);
    },
  );

  it('запятая с ведущим нулём не читается как разряды даже в en', () => {
    expect(parseLocalizedNumber('0,001', 'en')).toBe(0.001);
    expect(parseLocalizedNumber('0,500', 'en')).toBe(0.5);
  });
});

describe('разбор числа: разряды', () => {
  it.each([
    ['1 234', 1234], [`1${NBSP}234`, 1234], [`1${NNBSP}234`, 1234], [`1${THIN}234`, 1234],
    ['1 000 000', 1000000], ['12 345 678', 12345678],
  ])('пробел любого вида группирует разряды: «%s»', (raw, expected) => {
    for (const locale of ALL) expect(parseLocalizedNumber(raw as string, locale)).toBe(expected);
  });

  it('запятая группирует только в en', () => {
    expect(parseLocalizedNumber('1,234', 'en')).toBe(1234);
    expect(parseLocalizedNumber('12,345', 'en')).toBe(12345);
    expect(parseLocalizedNumber('1,000', 'en')).toBe(1000);
    expect(parseLocalizedNumber('1,234', 'ru')).toBe(1.234);
    expect(parseLocalizedNumber('1,234', 'uk')).toBe(1.234);
  });

  it('два одинаковых разделителя — всегда разряды: дробью они быть не могут', () => {
    for (const locale of ALL) {
      expect(parseLocalizedNumber('1,000,000', locale)).toBe(1000000);
      expect(parseLocalizedNumber('1.000.000', locale)).toBe(1000000);
    }
  });

  it('одиночная точка в ru/uk разрядами не является', () => {
    expect(parseLocalizedNumber('1.000', 'ru')).toBe(1);
    expect(parseLocalizedNumber('1.000', 'uk')).toBe(1);
    expect(parseLocalizedNumber('1.000', 'en')).toBe(1);
  });
});

describe('разбор числа: оба разделителя сразу', () => {
  it.each([
    ['1,000.50', 1000.5], ['1.000,50', 1000.5],
    ['12 345,67', 12345.67], ['12 345.67', 12345.67],
    ['1,234,567.89', 1234567.89], ['1.234.567,89', 1234567.89],
  ])('«%s» читается однозначно во всех локалях', (raw, expected) => {
    for (const locale of ALL) expect(parseLocalizedNumber(raw as string, locale)).toBe(expected);
  });
});

describe('разбор числа: знак, нуль и границы', () => {
  it.each([
    ['0', 0], ['1', 1], ['-1', -1], ['+1', 1], ['-0.001', -0.001], ['-2.500', -2.5],
    ['0.0001', 0.0001], ['1.0001', 1.0001], ['9.80665', 9.80665], ['58.44', 58.44],
    ['1000', 1000], ['1000000', 1000000], ['0.5', 0.5], ['2.50', 2.5], ['1234.56', 1234.56],
  ])('«%s» -> %s во всех локалях', (raw, expected) => {
    for (const locale of ALL) expect(parseLocalizedNumber(raw as string, locale)).toBe(expected);
  });

  it('минус применяется после разбора, а не к части числа', () => {
    expect(parseLocalizedNumber('-1 234', 'ru')).toBe(-1234);
    expect(parseLocalizedNumber('-1,234', 'en')).toBe(-1234);
    expect(parseLocalizedNumber('-1,234', 'ru')).toBe(-1.234);
  });
});

describe('разбор числа: некорректный ввод отклоняется, а не достраивается', () => {
  it.each(['1..2', '1,,2', '1,2.3,4', '--1', '1 23', '1,23,4', '.5', ',5', '5.', '5,', 'abc', '1e3', '', '   ', '1 2 3', '1..', '-', '+', '1-2', '1 000 00'])(
    '«%s» отклоняется во всех локалях',
    (raw) => {
      for (const locale of ALL) expect(parseLocalizedNumber(raw, locale)).toBeNull();
    },
  );
});

describe('разбор числа: число проходит насквозь', () => {
  it('конечное число возвращается как есть, бесконечность отклоняется', () => {
    expect(parseLocalizedNumber(16.667, 'ru')).toBe(16.667);
    expect(parseLocalizedNumber(-0.001, 'en')).toBe(-0.001);
    expect(parseLocalizedNumber(Number.POSITIVE_INFINITY, 'ru')).toBeNull();
    expect(parseLocalizedNumber(Number.NaN, 'ru')).toBeNull();
  });
});

describe('форматирование и разбор — обратные операции', () => {
  // fmtNumber выводит в ru-RU: неразрывный пробел между разрядами и запятая в дроби.
  const values = [0, 0.001, -0.001, 1.234, -1.234, 12.5, 999.999, 1000, 1234.56, 1000000, 16.667, 18.015, 2.5];
  it.each(values)('fmtNumber -> parseLocalizedNumber восстанавливает %s', (value) => {
    for (const digits of [0, 2, 3, 4]) {
      const text = fmtNumber(value, digits);
      const back = parseLocalizedNumber(text, 'ru');
      expect(back).not.toBeNull();
      // Сравнение по представленной точности: округление вывода — не потеря разбора.
      expect(Math.abs((back as number) - Number(value.toFixed(digits)))).toBeLessThan(1e-9);
    }
  });

  it('обратный оборот работает и для строкового вида числа из JS', () => {
    for (const value of values) {
      for (const locale of ALL) {
        expect(parseLocalizedNumber(String(value), locale)).toBe(value);
      }
    }
  });
});
