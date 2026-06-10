import { describe, it, expect } from 'vitest';
import { calcWorkingDays } from '../src/lib/calculators/workingDays';

describe('workingDays: calcWorkingDays', () => {
  it('считает рабочие дни в полной неделе пн-вс', () => {
    // 2026-02-02 (пн) — 2026-02-08 (вс) = 5 рабочих + 2 выходных
    const r = calcWorkingDays({
      startDate: '2026-02-02',
      endDate: '2026-02-08',
      includeWeekends: 'no',
      excludedDates: '',
    });
    expect(r.primary.value).toMatch(/5 дн\./);
    expect(r.secondary.find((s) => s.label === 'Календарные дни')?.value).toBe('7');
    expect(r.secondary.find((s) => s.label === 'Выходные дни')?.value).toBe('2');
  });

  it('если включать выходные — все 7 дней рабочие', () => {
    const r = calcWorkingDays({
      startDate: '2026-02-02',
      endDate: '2026-02-08',
      includeWeekends: 'yes',
      excludedDates: '',
    });
    expect(r.primary.value).toMatch(/7 дн\./);
  });

  it('режим шестидневки считает субботу рабочей', () => {
    const r = calcWorkingDays({
      startDate: '2026-02-02',
      endDate: '2026-02-08',
      includeWeekends: 'no',
      saturdayWorking: 'yes',
      excludedDates: '',
    });
    expect(r.primary.value).toMatch(/6 дн\./);
    expect(r.secondary.find((s) => s.label === 'Выходные дни')?.value).toBe('1');
  });

  it('исключённые даты не считаются рабочими', () => {
    const r = calcWorkingDays({
      startDate: '2026-02-02',
      endDate: '2026-02-06',
      includeWeekends: 'no',
      excludedDates: '2026-02-03, 2026-02-04',
    });
    // 5 будних - 2 исключённых = 3
    expect(r.primary.value).toMatch(/3 дн\./);
    expect(r.secondary.find((s) => s.label === 'Исключённые даты')?.value).toBe('2');
  });

  it('ошибка при отсутствии дат', () => {
    expect(calcWorkingDays({ startDate: '', endDate: '' }).primary.value).toBe('—');
  });

  it('ошибка если конец раньше начала', () => {
    const r = calcWorkingDays({ startDate: '2026-02-10', endDate: '2026-02-01' });
    expect(r.primary.value).toBe('—');
  });
});
