import { describe, expect, it, vi } from 'vitest';
import { calculateAge, calcAge } from '../src/lib/calculators/age';

function localDate(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

function withTimezone<T>(timezone: string, run: () => T): T {
  const originalTimezone = process.env.TZ;
  process.env.TZ = timezone;
  try {
    return run();
  } finally {
    if (originalTimezone === undefined) delete process.env.TZ;
    else process.env.TZ = originalTimezone;
  }
}

function secondaryValue(inputs: Record<string, string>, label: string): string | undefined {
  return calcAge(inputs).secondary.find((row) => row.label === label)?.value;
}

describe('age: calculateAge', () => {
  it('точный год без переходов месяцев', () => {
    const r = calculateAge(new Date('1990-06-15'), new Date('2020-06-15'));
    expect(r.years).toBe(30);
    expect(r.months).toBe(0);
    expect(r.days).toBe(0);
  });

  it('день рождения ещё не наступил в этом году', () => {
    const r = calculateAge(new Date('1990-06-15'), new Date('2020-06-14'));
    expect(r.years).toBe(29);
    expect(r.months).toBe(11);
  });

  it('возвращает нули если target раньше birth', () => {
    const r = calculateAge(new Date('2020-01-01'), new Date('2019-01-01'));
    expect(r.years).toBe(0);
    expect(r.totalDays).toBe(0);
  });

  it('считает количество прожитых дней', () => {
    const r = calculateAge(localDate(2020, 1, 1), localDate(2020, 1, 11));
    expect(r.totalDays).toBe(10);
  });

  it('считает календарные дни через весенний переход DST', () => {
    withTimezone('Europe/Berlin', () => {
      const r = calculateAge(localDate(2026, 3, 28), localDate(2026, 3, 30));
      expect(r.totalDays).toBe(2);
    });
  });

  it.each([
    ['конец месяца', [2026, 1, 31], [2026, 2, 1], 1],
    ['конец года', [2025, 12, 31], [2026, 1, 1], 1],
    ['февраль високосного года', [2024, 2, 28], [2024, 3, 1], 2],
    ['февраль невисокосного года', [2025, 2, 28], [2025, 3, 1], 1],
  ] as const)('%s: считает календарные дни', (_name, birthParts, targetParts, expected) => {
    for (const timezone of ['UTC', 'Europe/Berlin', 'America/New_York']) {
      withTimezone(timezone, () => {
        const r = calculateAge(localDate(...birthParts), localDate(...targetParts));
        expect(r.totalDays).toBe(expected);
      });
    }
  });
});

describe('age: calcAge', () => {
  it('ошибка при пустой дате', () => {
    expect(calcAge({ birthDate: '', targetDate: '' }).primary.value).toBe('—');
  });

  it('ошибка если target раньше birth', () => {
    const r = calcAge({ birthDate: '2020-01-01', targetDate: '2019-01-01' });
    expect(r.primary.value).toBe('—');
  });

  it('возвращает строку с правильным склонением', () => {
    const r = calcAge({ birthDate: '1990-06-15', targetDate: '2020-06-15' });
    expect(r.primary.value).toContain('30 лет');
  });

  it('в день рождения без даты расчёта показывает 0 дней', () => {
    withTimezone('UTC', () => {
      vi.useFakeTimers();
      try {
        vi.setSystemTime(new Date(2026, 5, 15, 12, 30));
        expect(secondaryValue({ birthDate: '2000-06-15', targetDate: '' }, 'До дня рождения')).toBe('0 дн.');
        expect(secondaryValue({ birthDate: '2000-06-15', targetDate: '' }, 'Следующий день рождения')).toBe('2026-06-15');
      } finally {
        vi.useRealTimers();
      }
    });
  });

  it('для явной даты в день рождения показывает 0 дней', () => {
    expect(secondaryValue({ birthDate: '2000-06-15', targetDate: '2026-06-15' }, 'До дня рождения')).toBe('0 дн.');
    expect(secondaryValue({ birthDate: '2000-06-15', targetDate: '2026-06-15' }, 'Следующий день рождения')).toBe('2026-06-15');
  });

  it('за день до рождения показывает 1 день даже через осенний переход DST', () => {
    withTimezone('Europe/Berlin', () => {
      expect(secondaryValue({ birthDate: '2000-10-26', targetDate: '2026-10-25' }, 'До дня рождения')).toBe('1 дн.');
      expect(secondaryValue({ birthDate: '2000-10-26', targetDate: '2026-10-25' }, 'Следующий день рождения')).toBe('2026-10-26');
    });
  });

  it('после дня рождения считает до события следующего года', () => {
    expect(secondaryValue({ birthDate: '2000-06-15', targetDate: '2026-06-16' }, 'До дня рождения')).toBe('364 дн.');
    expect(secondaryValue({ birthDate: '2000-06-15', targetDate: '2026-06-16' }, 'Следующий день рождения')).toBe('2027-06-15');
  });

  it('сохраняет наблюдение 29 февраля как 28 февраля в невисокосный год', () => {
    expect(calcAge({ birthDate: '2000-02-29', targetDate: '2025-02-28' }).primary.value)
      .toContain('25 лет, 0 месяцев, 0 дней');
    expect(secondaryValue({ birthDate: '2000-02-29', targetDate: '2025-02-27' }, 'До дня рождения')).toBe('1 дн.');
    expect(secondaryValue({ birthDate: '2000-02-29', targetDate: '2025-02-28' }, 'До дня рождения')).toBe('0 дн.');
    expect(secondaryValue({ birthDate: '2000-02-29', targetDate: '2025-03-01' }, 'Следующий день рождения')).toBe('2026-02-28');
  });
});
