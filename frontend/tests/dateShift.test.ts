import { describe, it, expect } from 'vitest';
import { calcDateShift, addCalendarMonths, shiftDate, isoWeekNumber, formatIsoDate } from '../src/lib/calculators/dateShift';

const iso = (y: number, m: number, d: number) => formatIsoDate(new Date(y, m - 1, d));
const run = (inputs: Record<string, string | number>) => calcDateShift(inputs);
const row = (r: ReturnType<typeof calcDateShift>, label: string) =>
  r.secondary.find((s) => s.label === label)?.value ?? '';

describe('dateShift: прибавление дней', () => {
  it('01.01.2026 + 90 дней = 01.04.2026', () => {
    // 2026 не високосный: январь 31 + февраль 28 + март 31 = 90 дней до 01.04
    const r = run({ startDate: '2026-01-01', shiftDays: 90 });
    expect(r.primary.value).toBe('2026-04-01');
    expect(row(r, 'Всего календарных дней')).toBe('90');
  });

  it('прибавляет недели как 7 дней', () => {
    const r = run({ startDate: '2026-03-02', shiftWeeks: 3 });
    expect(r.primary.value).toBe('2026-03-23');
    expect(row(r, 'Всего календарных дней')).toBe('21');
  });

  it('комбинирует годы, месяцы, недели и дни', () => {
    // 15.05.2026 +1 год -> 15.05.2027, +2 мес -> 15.07.2027, +1 нед +3 дн -> 25.07.2027
    const r = run({ startDate: '2026-05-15', shiftYears: 1, shiftMonths: 2, shiftWeeks: 1, shiftDays: 3 });
    expect(r.primary.value).toBe('2027-07-25');
  });
});

describe('dateShift: вычитание', () => {
  it('01.03.2026 − 1 день = 28.02.2026 (2026 не високосный)', () => {
    const r = run({ startDate: '2026-03-01', shiftDirection: 'backward', shiftDays: 1 });
    expect(r.primary.value).toBe('2026-02-28');
    expect(row(r, 'Всего календарных дней')).toBe('-1');
  });

  it('01.03.2028 − 1 день = 29.02.2028 (високосный год)', () => {
    const r = run({ startDate: '2028-03-01', shiftDirection: 'backward', shiftDays: 1 });
    expect(r.primary.value).toBe('2028-02-29');
  });

  it('вычитает месяцы через границу года', () => {
    const r = run({ startDate: '2026-01-15', shiftDirection: 'backward', shiftMonths: 2 });
    expect(r.primary.value).toBe('2025-11-15');
  });
});

describe('dateShift: усечение до последнего дня месяца', () => {
  it('31.01.2026 + 1 месяц = 28.02.2026', () => {
    expect(formatIsoDate(addCalendarMonths(new Date(2026, 0, 31), 1))).toBe('2026-02-28');
  });

  it('31.01.2028 + 1 месяц = 29.02.2028 (високосный)', () => {
    expect(formatIsoDate(addCalendarMonths(new Date(2028, 0, 31), 1))).toBe('2028-02-29');
  });

  it('31.05.2026 + 1 месяц = 30.06.2026', () => {
    const r = run({ startDate: '2026-05-31', shiftMonths: 1 });
    expect(r.primary.value).toBe('2026-06-30');
  });

  it('29.02.2028 + 1 год = 28.02.2029', () => {
    const r = run({ startDate: '2028-02-29', shiftYears: 1 });
    expect(r.primary.value).toBe('2029-02-28');
  });

  it('усечение не обратимо, и это ожидаемо', () => {
    const forward = shiftDate(new Date(2026, 0, 31), { months: 1 }, 1);
    const back = shiftDate(forward, { months: 1 }, -1);
    expect(formatIsoDate(forward)).toBe('2026-02-28');
    expect(formatIsoDate(back)).toBe('2026-01-28');
  });
});

describe('dateShift: нулевые и граничные значения', () => {
  it('нулевой сдвиг возвращает исходную дату', () => {
    const r = run({ startDate: '2026-08-16' });
    expect(r.primary.value).toBe('2026-08-16');
    expect(row(r, 'Всего календарных дней')).toBe('0');
    expect(row(r, 'Исходная дата')).toBe('2026-08-16');
  });

  it('переход через границу года', () => {
    const r = run({ startDate: '2026-12-31', shiftDays: 1 });
    expect(r.primary.value).toBe('2027-01-01');
    expect(row(r, 'Номер дня в году')).toBe('1');
  });

  it('дробный ввод усекается до целого', () => {
    expect(run({ startDate: '2026-01-01', shiftDays: 1.9 }).primary.value).toBe('2026-01-02');
  });
});

describe('dateShift: день недели и номера', () => {
  it('01.01.2026 — четверг', () => {
    expect(row(run({ startDate: '2026-01-01' }), 'День недели')).toBe('Четверг');
  });

  it('день года для 31.12 невисокосного года = 365', () => {
    expect(row(run({ startDate: '2026-12-31' }), 'Номер дня в году')).toBe('365');
  });

  it('день года для 31.12 високосного года = 366', () => {
    expect(row(run({ startDate: '2028-12-31' }), 'Номер дня в году')).toBe('366');
  });

  it('номер недели ISO 8601 на известных датах', () => {
    // 04.01.2026 — воскресенье, входит в первую неделю 2026 года.
    expect(isoWeekNumber(new Date(2026, 0, 4))).toBe(1);
    // 05.01.2026 — понедельник, начало второй недели.
    expect(isoWeekNumber(new Date(2026, 0, 5))).toBe(2);
    // 01.01.2027 — пятница, относится к 53-й неделе 2026 года.
    expect(isoWeekNumber(new Date(2027, 0, 1))).toBe(53);
    // 29.12.2025 — понедельник, первая неделя 2026 года.
    expect(isoWeekNumber(new Date(2025, 11, 29))).toBe(1);
  });
});

describe('dateShift: некорректный ввод', () => {
  it('пустая дата возвращает прочерк', () => {
    const r = run({ startDate: '' });
    expect(r.primary.value).toBe('—');
    expect(row(r, 'Проверьте данные')).toContain('исходную дату');
  });

  it('несуществующая дата возвращает прочерк', () => {
    expect(run({ startDate: '2026-02-30' }).primary.value).toBe('—');
  });

  it('отрицательный интервал отклоняется', () => {
    const r = run({ startDate: '2026-01-01', shiftDays: -5 });
    expect(r.primary.value).toBe('—');
    expect(row(r, 'Ошибка')).toContain('отрицательным');
  });
});
