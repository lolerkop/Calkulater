import { describe, it, expect } from 'vitest';
import { calcWorkingDays } from '../src/lib/calculators/workingDays';

describe('Калькулятор рабочих дней', () => {
  it('пн-пт одной недели = 5 рабочих дней', () => {
    // 2025-02-03 (пн) — 2025-02-07 (пт)
    const res = calcWorkingDays({ startDate: '2025-02-03', endDate: '2025-02-07' });
    expect(res.primary.value).toMatch(/5/);
    expect(res.secondary.find((r) => r.label === 'Календарные дни')?.value).toMatch(/5/);
    expect(res.secondary.find((r) => r.label === 'Выходные дни')?.value).toMatch(/0/);
  });

  it('полная неделя с пн по вс = 5 раб + 2 вых', () => {
    const res = calcWorkingDays({ startDate: '2025-02-03', endDate: '2025-02-09' });
    expect(res.primary.value).toMatch(/5/);
    expect(res.secondary.find((r) => r.label === 'Выходные дни')?.value).toMatch(/2/);
  });

  it('includeWeekends = yes считает выходные как рабочие', () => {
    const res = calcWorkingDays({
      startDate: '2025-02-03',
      endDate: '2025-02-09',
      includeWeekends: 'yes',
    });
    expect(res.primary.value).toMatch(/7/);
  });

  it('исключённые даты вычитаются', () => {
    const res = calcWorkingDays({
      startDate: '2025-02-03',
      endDate: '2025-02-07',
      excludedDates: '2025-02-05',
    });
    expect(res.primary.value).toMatch(/4/);
    expect(res.secondary.find((r) => r.label === 'Исключённые даты')?.value).toMatch(/1/);
  });

  it('end раньше start → ошибка', () => {
    const res = calcWorkingDays({ startDate: '2025-02-10', endDate: '2025-02-01' });
    expect(res.primary.value).toBe('—');
  });
});
