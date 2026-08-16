import { describe, expect, it } from 'vitest';
import { calculateAge, calcAge } from '../src/lib/calculators/age';

// Независимый календарный oracle. Он намеренно построен иначе, чем рантайм:
// рантайм вычитает компоненты дат и при необходимости заимствует месяц, а oracle
// идёт от даты рождения вперёд — прибавляет максимум полных лет, затем максимум
// полных месяцев, и остаток считает разностью календарных дней. Общего кода с
// рантаймом нет, поэтому совпадение результатов не является самоподтверждением.

function localDate(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

const daysInMonth = (year: number, monthIndex: number) => new Date(year, monthIndex + 1, 0).getDate();

// Прибавление календарных месяцев с усечением до последнего дня короткого месяца:
// 31 января + 1 месяц = 28 (или 29) февраля. Та же семантика описана в FAQ
// калькулятора для дня рождения 29 февраля.
function addCalendarMonths(date: Date, months: number): Date {
  const shifted = date.getFullYear() * 12 + date.getMonth() + months;
  const year = Math.floor(shifted / 12);
  const monthIndex = shifted - year * 12;
  return new Date(year, monthIndex, Math.min(date.getDate(), daysInMonth(year, monthIndex)));
}

function calendarDayNumber(date: Date): number {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000;
}

export function oracleAge(birth: Date, target: Date): { years: number; months: number; days: number } {
  if (target < birth) return { years: 0, months: 0, days: 0 };
  // Монотонный поиск наибольшего числа целых календарных месяцев, укладывающихся
  // от даты рождения до даты расчёта. Усечение применяется ровно один раз — к
  // сумме месяцев от исходной даты рождения. Прибавлять сначала годы, а затем
  // месяцы от полученного якоря нельзя: два последовательных усечения теряют
  // исходное число месяца, и для даты рождения 29 февраля разложение уезжает
  // на день.
  // Двоичный поиск по числу месяцев: рантайм считает оценку арифметикой и
  // поправляет её на один шаг, здесь же граница ищется делением отрезка, то есть
  // структура вычисления другая.
  let low = 0;
  let high = 1;
  while (addCalendarMonths(birth, high) <= target) high *= 2;
  while (high - low > 1) {
    const middle = Math.floor((low + high) / 2);
    if (addCalendarMonths(birth, middle) <= target) low = middle; else high = middle;
  }
  const totalMonths = addCalendarMonths(birth, high) <= target ? high : low;
  const anniversary = addCalendarMonths(birth, totalMonths);
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    days: calendarDayNumber(target) - calendarDayNumber(anniversary),
  };
}

// Восстановление даты по разложению — проверяет, что компоненты действительно
// описывают путь от даты рождения к дате расчёта.
function reconstruct(birth: Date, years: number, months: number, days: number): Date {
  const afterMonths = addCalendarMonths(birth, years * 12 + months);
  return new Date(afterMonths.getFullYear(), afterMonths.getMonth(), afterMonths.getDate() + days);
}

const fmt = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

describe('age: oracle сам по себе корректен', () => {
  it('усечение месяца соответствует задокументированной семантике', () => {
    expect(fmt(addCalendarMonths(localDate(2026, 1, 31), 1))).toBe('2026-02-28');
    expect(fmt(addCalendarMonths(localDate(2028, 1, 31), 1))).toBe('2028-02-29');
    expect(fmt(addCalendarMonths(localDate(2000, 2, 29), 12))).toBe('2001-02-28');
    expect(fmt(addCalendarMonths(localDate(2000, 2, 29), 48))).toBe('2004-02-29');
  });

  it('на простых случаях даёт очевидный ответ', () => {
    expect(oracleAge(localDate(1990, 6, 15), localDate(2020, 6, 15))).toEqual({ years: 30, months: 0, days: 0 });
    expect(oracleAge(localDate(1990, 6, 15), localDate(2020, 6, 14))).toEqual({ years: 29, months: 11, days: 30 });
    expect(oracleAge(localDate(2020, 1, 1), localDate(2020, 1, 11))).toEqual({ years: 0, months: 0, days: 10 });
  });
});

// Класс входов, найденный сертификационным аудитом: день рождения в конце месяца
// с переходом через февраль. До исправления рантайм возвращал отрицательные дни.
const MONTH_END_CASES: Array<[string, [number, number, number], [number, number, number], [number, number, number]]> = [
  ['31 января → 1 марта невисокосного года', [2000, 1, 31], [2026, 3, 1], [26, 1, 1]],
  ['30 января → 1 марта невисокосного года', [2000, 1, 30], [2026, 3, 1], [26, 1, 1]],
  ['31 января → 1 марта високосного года', [2000, 1, 31], [2028, 3, 1], [28, 1, 1]],
  ['31 января → 2 марта', [2000, 1, 31], [2026, 3, 2], [26, 1, 2]],
  ['31 декабря → 1 марта', [1990, 12, 31], [2026, 3, 1], [35, 2, 1]],
  ['31 января того же года → 1 марта', [2024, 1, 31], [2024, 3, 1], [0, 1, 1]],
  ['31 марта → 1 марта следующего года', [2000, 3, 31], [2026, 3, 1], [25, 11, 1]],
  ['31 октября → 1 марта', [2000, 10, 31], [2026, 3, 1], [25, 4, 1]],
];

describe('age: разложение на конце месяца через февраль', () => {
  it.each(MONTH_END_CASES)('%s', (_name, b, t, expected) => {
    const birth = localDate(...b);
    const target = localDate(...t);
    const actual = calculateAge(birth, target);
    const oracle = oracleAge(birth, target);

    // Ожидание выведено независимо и совпадает с oracle.
    expect([oracle.years, oracle.months, oracle.days]).toEqual([...expected]);
    expect([actual.years, actual.months, actual.days]).toEqual([...expected]);
    expect(fmt(reconstruct(birth, actual.years, actual.months, actual.days))).toBe(fmt(target));
  });

  it('видимый результат не содержит отрицательных компонентов', () => {
    const r = calcAge({ birthDate: '2000-01-31', targetDate: '2026-03-01' });
    expect(r.primary.value).not.toContain('-');
    expect(r.primary.value.replace(/[\s  ]+/g, ' ')).toBe('26 лет, 1 месяц, 1 день');
  });
});

describe('age: задокументированная конвенция 29 февраля сохранена', () => {
  it.each([
    ['годовщина в невисокосный год наблюдается 28 февраля', [2000, 2, 29], [2026, 2, 28], [26, 0, 0]],
    ['1 марта — следующий полный день после годовщины', [2000, 2, 29], [2026, 3, 1], [26, 0, 1]],
    ['в високосный год годовщина ровно 29 февраля', [2000, 2, 29], [2028, 2, 29], [28, 0, 0]],
    ['за день до наблюдаемой годовщины', [2000, 2, 29], [2026, 2, 27], [25, 11, 29]],
  ] as const)('%s', (_n, b, t, expected) => {
    const actual = calculateAge(localDate(...b), localDate(...t));
    expect([actual.years, actual.months, actual.days]).toEqual([...expected]);
  });
});

describe('age: граничная матрица', () => {
  it.each([
    // обычные
    ['ровно годовщина', [2000, 1, 1], [2026, 1, 1], [26, 0, 0]],
    ['день после годовщины', [2000, 1, 1], [2026, 1, 2], [26, 0, 1]],
    ['день до годовщины', [2000, 1, 1], [2025, 12, 31], [25, 11, 30]],
    ['середина месяца', [2000, 1, 15], [2026, 2, 20], [26, 1, 5]],
    // конец месяца
    ['30 апреля → 30 мая', [2000, 4, 30], [2026, 5, 30], [26, 1, 0]],
    ['31 марта → 30 апреля (усечение даёт ровно 1 месяц)', [2000, 3, 31], [2026, 4, 30], [26, 1, 0]],
    ['31 мая → 30 июня (усечение даёт ровно 1 месяц)', [2000, 5, 31], [2026, 6, 30], [26, 1, 0]],
    // февраль
    ['28 февраля невисокосного → 1 марта', [2025, 2, 28], [2025, 3, 1], [0, 0, 1]],
    ['28 февраля високосного → 1 марта', [2024, 2, 28], [2024, 3, 1], [0, 0, 2]],
    ['29 февраля → 28 февраля високосного', [2024, 2, 29], [2028, 2, 28], [3, 11, 30]],
    // младенческие
    ['тот же день', [2026, 8, 16], [2026, 8, 16], [0, 0, 0]],
    ['один день', [2026, 8, 16], [2026, 8, 17], [0, 0, 1]],
    ['один месяц', [2026, 7, 16], [2026, 8, 16], [0, 1, 0]],
    // большой возраст
    ['семьдесят лет', [1956, 3, 15], [2026, 8, 16], [70, 5, 1]],
    ['сто лет', [1926, 2, 28], [2026, 2, 28], [100, 0, 0]],
  ] as const)('%s', (_n, b, t, expected) => {
    const birth = localDate(...b);
    const target = localDate(...t);
    const actual = calculateAge(birth, target);
    expect([actual.years, actual.months, actual.days], `${fmt(birth)} → ${fmt(target)}`).toEqual([...expected]);
    expect(oracleAge(birth, target)).toEqual({ years: expected[0], months: expected[1], days: expected[2] });
  });
});

describe('age: инварианты на детерминированной сетке', () => {
  // Сетка воспроизводит класс входов сертификационного аудита: даты рождения
  // около конца месяца за 50 лет против целевых дат, включая переходы февраля.
  const births: Date[] = [];
  for (let year = 1960; year <= 2010; year += 1) {
    for (let month = 1; month <= 12; month += 1) {
      for (const day of [1, 15, 28, 29, 30, 31]) {
        const d = localDate(year, month, day);
        if (d.getDate() === day && d.getMonth() === month - 1) births.push(d);
      }
    }
  }
  const targets = [
    localDate(2026, 3, 1), localDate(2026, 3, 2), localDate(2026, 5, 1),
    localDate(2026, 7, 1), localDate(2026, 10, 1), localDate(2026, 12, 1),
    localDate(2028, 3, 1), localDate(2028, 2, 29), localDate(2026, 8, 16),
  ];

  it('нет отрицательных компонентов и месяцы в диапазоне 0..11', () => {
    let checked = 0;
    for (const birth of births) for (const target of targets) {
      if (target < birth) continue;
      const r = calculateAge(birth, target);
      checked++;
      expect(r.years, `${fmt(birth)} → ${fmt(target)}`).toBeGreaterThanOrEqual(0);
      expect(r.months, `${fmt(birth)} → ${fmt(target)}`).toBeGreaterThanOrEqual(0);
      expect(r.months, `${fmt(birth)} → ${fmt(target)}`).toBeLessThanOrEqual(11);
      expect(r.days, `${fmt(birth)} → ${fmt(target)}`).toBeGreaterThanOrEqual(0);
      expect(Number.isFinite(r.totalDays)).toBe(true);
    }
    expect(checked).toBeGreaterThan(3000);
  });

  it('разложение совпадает с независимым oracle', () => {
    const mismatches: string[] = [];
    let checked = 0;
    for (const birth of births) for (const target of targets) {
      if (target < birth) continue;
      checked++;
      const a = calculateAge(birth, target);
      const o = oracleAge(birth, target);
      if (a.years !== o.years || a.months !== o.months || a.days !== o.days) {
        mismatches.push(`${fmt(birth)} → ${fmt(target)}: рантайм ${a.years}/${a.months}/${a.days}, oracle ${o.years}/${o.months}/${o.days}`);
      }
    }
    expect(mismatches.slice(0, 5)).toEqual([]);
    expect(mismatches).toHaveLength(0);
    expect(checked).toBeGreaterThan(3000);
  });

  it('восстановление по компонентам возвращает дату расчёта', () => {
    for (const birth of births) for (const target of targets) {
      if (target < birth) continue;
      const r = calculateAge(birth, target);
      expect(fmt(reconstruct(birth, r.years, r.months, r.days)), `${fmt(birth)} → ${fmt(target)}`).toBe(fmt(target));
    }
  });

  it('всего прожитых дней совпадает с независимой разностью дат и монотонно растёт', () => {
    const birth = localDate(1990, 1, 31);
    let previous = -1;
    for (let offset = 0; offset <= 800; offset += 1) {
      const target = new Date(2026, 0, 1 + offset);
      const r = calculateAge(birth, target);
      const expected = calendarDayNumber(target) - calendarDayNumber(birth);
      expect(r.totalDays, fmt(target)).toBe(expected);
      expect(r.totalDays).toBeGreaterThan(previous);
      previous = r.totalDays;
    }
  });

  it('сдвиг даты расчёта на день не создаёт отрицательных компонентов', () => {
    for (const birth of [localDate(2000, 1, 31), localDate(2000, 1, 30), localDate(2000, 2, 29), localDate(2000, 12, 31)]) {
      for (let offset = 0; offset <= 400; offset += 1) {
        const target = new Date(2026, 0, 1 + offset);
        const r = calculateAge(birth, target);
        expect(Math.min(r.years, r.months, r.days), `${fmt(birth)} → ${fmt(target)}`).toBeGreaterThanOrEqual(0);
      }
    }
  });
});

describe('age: разложение не зависит от часового пояса', () => {
  const zones = ['UTC', 'Europe/Kyiv', 'America/New_York', 'Asia/Tokyo'];
  it.each([
    [[2000, 1, 31], [2026, 3, 1]],
    [[2000, 2, 29], [2026, 2, 28]],
    [[1990, 1, 1], [2026, 2, 1]],
    [[2000, 12, 31], [2026, 1, 1]],
  ] as const)('%s', (b, t) => {
    const results = zones.map((zone) => {
      const original = process.env.TZ;
      process.env.TZ = zone;
      try {
        const r = calculateAge(localDate(...b), localDate(...t));
        return `${r.years}/${r.months}/${r.days}/${r.totalDays}`;
      } finally {
        if (original === undefined) delete process.env.TZ; else process.env.TZ = original;
      }
    });
    expect(new Set(results).size, `результаты по зонам: ${results.join(' | ')}`).toBe(1);
  });
});
