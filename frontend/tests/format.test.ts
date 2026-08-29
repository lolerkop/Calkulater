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

describe('format: ненулевое значение не выглядит нулём', () => {
  // Дефект, найденный аудитом Production и воспроизведённый на бою: при
  // фиксированной точности малые величины печатались нулём, а суммы меньше
  // рубля округлялись до целого. 0,001 Ом читалось как «0,00 Ом», средний чек
  // 0,50 ₽ — как «1 ₽», то есть вдвое больше настоящего.

  it('малое ненулевое значение не схлопывается в нули', () => {
    expect(fmtNumber(0.001, 2)).toBe('0,001');
    expect(fmtNumber(0.0001, 2)).toBe('0,0001');
    expect(fmtNumber(0.00001, 2)).toBe('0,00001');
    expect(fmtNumber(0.000001, 2)).toBe('0,000001');
    expect(fmtNumber(0.001, 0)).toBe('0,001');
  });

  it('запрошенная точность остаётся основной там, где её хватает', () => {
    expect(fmtNumber(0.005, 2)).toBe('0,01');
    expect(fmtNumber(0.009, 2)).toBe('0,01');
    expect(fmtNumber(0.01, 2)).toBe('0,01');
    expect(fmtNumber(0.1, 2)).toBe('0,10');
    expect(fmtNumber(0.5, 2)).toBe('0,50');
    expect(fmtNumber(0.99, 2)).toBe('0,99');
    expect(fmtNumber(1, 2)).toBe('1,00');
    expect(fmtNumber(1.2345, 2)).toBe('1,23');
    expect(fmtNumber(12.3456, 2)).toBe('12,35');
  });

  it('обычные большие числа не обрастают хвостами', () => {
    expect(fmtNumber(999.999, 2)).toMatch(/^1[\s  ]000,00$/);
    expect(fmtNumber(1000, 2)).toMatch(/^1[\s  ]000,00$/);
    expect(fmtNumber(1234567.89, 2)).toMatch(/^1[\s  ]234[\s  ]567,89$/);
  });

  it('ноль остаётся нулём, а не расширяется', () => {
    expect(fmtNumber(0, 2)).toBe('0,00');
    expect(fmtNumber(0, 0)).toBe('0');
    expect(fmtMoney(0)).toBe('0 ₽');
  });

  it('знак сохраняется при расширении точности', () => {
    expect(fmtNumber(-0.001, 2)).toBe('-0,001');
    expect(fmtNumber(-0.5, 2)).toBe('-0,50');
    expect(fmtMoney(-0.5)).toBe('-0,50 ₽');
    expect(fmtMoney(-0.001)).toBe('-0,001 ₽');
  });

  it('машинный остаток не выдаётся за данные', () => {
    // Разность почти равных величин даёт 10⁻¹⁵ — это не измерение, и показывать
    // такой хвост хуже, чем ноль. Ниже границы работает прежнее округление.
    expect(fmtNumber(1.8e-15, 1)).toBe('0,0');
    expect(fmtNumber(3.3e-9, 2)).toBe('0,00');
    // Знак у машинного нуля Intl печатает сам и печатал всегда: «-0» здесь —
    // прежнее поведение платформы, а не следствие расширения точности.
    expect(fmtNumber(-1e-16, 0)).toBe('-0');
    expect(fmtNumber(1e-16, 0)).toBe('0');
    // А самый мелкий класс, который продукт обязан показывать честно, — жив.
    expect(fmtNumber(1e-6, 2)).toBe('0,000001');
  });

  it('экспоненциальной записи не появляется', () => {
    for (const n of [0.000001, 0.0001, 0.001, 1e-7, 1234567.89]) {
      expect(fmtNumber(n, 2)).not.toMatch(/e[+-]/i);
    }
  });
});

describe('format: деньги меньше единицы', () => {
  it('сумма меньше рубля не округляется ни до нуля, ни до рубля', () => {
    expect(fmtMoney(0.5)).toBe('0,50 ₽');
    expect(fmtMoney(0.49)).toBe('0,49 ₽');
    expect(fmtMoney(0.99)).toBe('0,99 ₽');
    expect(fmtMoney(0.01)).toBe('0,01 ₽');
    expect(fmtMoney(0.009)).toBe('0,01 ₽');
    expect(fmtMoney(0.005)).toBe('0,01 ₽');
    expect(fmtMoney(0.004)).toBe('0,004 ₽');
    expect(fmtMoney(0.001)).toBe('0,001 ₽');
  });

  it('от рубля и выше денежный вывод прежний — целыми', () => {
    expect(fmtMoney(1)).toBe('1 ₽');
    expect(fmtMoney(1.01)).toBe('1 ₽');
    expect(fmtMoney(1687.71)).toMatch(/^1[\s  ]688 ₽$/);
    expect(fmtMoney(250000)).toMatch(/^250[\s  ]000 ₽$/);
  });

  it('валюта подставляется как прежде', () => {
    expect(fmtMoney(0.5, '$')).toBe('0,50 $');
    expect(fmtMoney(12, '€')).toBe('12 €');
  });
});

describe('format: целые и проценты не изменились', () => {
  it('fmtInt округляет как прежде', () => {
    expect(fmtInt(0)).toBe('0');
    expect(fmtInt(0.4)).toBe('0');
    expect(fmtInt(0.5)).toBe('1');
    expect(fmtInt(1.6)).toBe('2');
  });

  it('проценты наследуют расширение точности', () => {
    expect(fmtPct(0.001)).toBe('0,001%');
    expect(fmtPct(0.5)).toBe('0,50%');
    expect(fmtPct(12.345)).toBe('12,35%');
  });
});

describe('format: денежная традиция от единицы и выше', () => {
  // Закрепляется НАМЕРЕННОЕ поведение, а не дефект.
  //
  // Проверено отдельно: в продукте две денежные традиции. Эта функция — 105
  // мест, преимущественно наследственные финансовые калькуляторы, целые
  // единицы; собственный помощник `fmtNumber(value, 2)` — 81 место,
  // калькуляторы V2, копейки. Тридцать один опубликованный пример на страницах
  // написан руками с целыми суммами, одиннадцать примеров второй традиции —
  // с копейками. Пересечений нет ни там, ни там.
  //
  // Раньше это держалось только данными: все 53 денежных ожидания эталонов
  // посчитаны на входах, дающих ТОЧНО целую сумму, и о округлении дроби не
  // говорили ничего. Теперь традиция закреплена явно — если кто-то решит её
  // сменить, он сменит её осознанно и увидит здесь, что именно ломает.

  it('дробная часть от единицы и выше округляется до целой суммы', () => {
    expect(fmtMoney(1)).toBe('1 ₽');
    expect(fmtMoney(1.01)).toBe('1 ₽');
    expect(fmtMoney(1.49)).toBe('1 ₽');
    expect(fmtMoney(1.5)).toBe('2 ₽');
    expect(fmtMoney(1.99)).toBe('2 ₽');
    expect(fmtMoney(12.01)).toBe('12 ₽');
    expect(fmtMoney(12.34)).toBe('12 ₽');
    expect(fmtMoney(99.99)).toBe('100 ₽');
    expect(fmtMoney(1234.56)).toMatch(/^1[\s  ]235 ₽$/);
  });

  it('знак сохраняется и при округлении до целой суммы', () => {
    expect(fmtMoney(-1.01)).toBe('-1 ₽');
    expect(fmtMoney(-12.34)).toBe('-12 ₽');
  });

  it('вторая традиция продукта живёт рядом и копейки показывает', () => {
    // Именно так устроены 81 место калькуляторов V2: они обходят fmtMoney.
    const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
    expect(money(1.01)).toBe('1,01 ₽');
    expect(money(12.34)).toBe('12,34 ₽');
    expect(money(1234.56)).toMatch(/^1[\s  ]234,56 ₽$/);
  });

  it('граница традиции проходит по единице, и ниже неё величина не теряется', () => {
    expect(fmtMoney(0.99)).toBe('0,99 ₽');
    expect(fmtMoney(1)).toBe('1 ₽');
    // Ниже единицы округление до целого стирало бы саму величину, а не разряд.
    expect(fmtMoney(0.5)).not.toBe('1 ₽');
    expect(fmtMoney(0.01)).not.toBe('0 ₽');
  });
});
