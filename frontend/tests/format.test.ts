import { describe, it, expect } from 'vitest';
import {
  fmtNumber,
  fmtInt,
  fmtMoney,
  fmtPct,
  toNumber,
  toStr,
  pluralRu,
  fmtDuration,
} from '../src/lib/format';

describe('format: fmtNumber', () => {
  it('форматирует число с двумя знаками после запятой по умолчанию', () => {
    expect(fmtNumber(1234.5)).toMatch(/1[\s\u00A0\u202F]?234,50/);
  });

  it('возвращает прочерк для нечисловых значений', () => {
    expect(fmtNumber(Infinity)).toBe('—');
    expect(fmtNumber(NaN)).toBe('—');
  });

  it('учитывает количество знаков после запятой', () => {
    expect(fmtNumber(3.14159, 3)).toMatch(/3,142/);
  });
});

describe('format: fmtInt', () => {
  it('округляет и форматирует целое число', () => {
    expect(fmtInt(1999.7)).toMatch(/2[\s\u00A0\u202F]?000/);
  });

  it('возвращает прочерк для Infinity', () => {
    expect(fmtInt(Infinity)).toBe('—');
  });
});

describe('format: fmtMoney', () => {
  it('добавляет символ валюты по умолчанию ₽', () => {
    expect(fmtMoney(1500)).toMatch(/1[\s\u00A0\u202F]?500 ₽/);
  });

  it('поддерживает кастомную валюту', () => {
    expect(fmtMoney(100, '$')).toMatch(/100 \$/);
  });
});

describe('format: fmtPct', () => {
  it('форматирует процент', () => {
    expect(fmtPct(12.5)).toBe('12,50%');
  });
});

describe('format: toNumber', () => {
  it('преобразует строку с запятой', () => {
    expect(toNumber('12,5')).toBe(12.5);
  });

  it('возвращает число как есть', () => {
    expect(toNumber(42)).toBe(42);
  });

  it('возвращает fallback для пустых значений', () => {
    expect(toNumber(undefined, 10)).toBe(10);
    expect(toNumber('', 5)).toBe(5);
  });

  it('булевы значения переводятся в 0/1', () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });
});

describe('format: toStr', () => {
  it('возвращает строку из числа', () => {
    expect(toStr(123)).toBe('123');
  });

  it('возвращает fallback для undefined', () => {
    expect(toStr(undefined, 'def')).toBe('def');
  });
});

describe('format: pluralRu', () => {
  const forms: [string, string, string] = ['год', 'года', 'лет'];

  it('форма для 1', () => {
    expect(pluralRu(1, forms)).toBe('год');
    expect(pluralRu(21, forms)).toBe('год');
  });

  it('форма для 2-4', () => {
    expect(pluralRu(2, forms)).toBe('года');
    expect(pluralRu(23, forms)).toBe('года');
  });

  it('форма для 5+ и подростковых чисел', () => {
    expect(pluralRu(5, forms)).toBe('лет');
    expect(pluralRu(11, forms)).toBe('лет');
    expect(pluralRu(15, forms)).toBe('лет');
    expect(pluralRu(0, forms)).toBe('лет');
  });
});

describe('format: fmtDuration', () => {
  it('форматирует длительность менее часа как m:ss', () => {
    expect(fmtDuration(125)).toBe('2:05');
  });

  it('форматирует длительность с часами как h:mm:ss', () => {
    expect(fmtDuration(3725)).toBe('1:02:05');
  });

  it('возвращает прочерк для отрицательных значений', () => {
    expect(fmtDuration(-1)).toBe('—');
  });
});
