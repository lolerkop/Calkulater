import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную в минутах от полуночи:
//   17:30 = 1050, 9:00 = 540 → 1050 − 540 = 510 = 8 ч 30 мин
//   22:15 = 1335, 6:45 = 405 → (405 − 1335 + 1440) mod 1440 = 510
//   14:45 = 885, +150 = 1035 = 17:15
//   0:20 = 20, −45 = −25 → +1440 = 1415 = 23:35
//   ровно сутки: 9:00 → 9:00 даёт 0 минут, а не 1440
export const timeDurationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'разница: с 9:00 до 17:30 — 8 ч 30 мин',
    inputs: { mode: 'difference', startHour: 9, startMinute: 0, endHour: 17, endMinute: 30 },
    expectPrimary: '8 ч 30 мин',
    expectSecondary: [{ label: 'Всего минут', value: '510' }],
  },
  {
    name: 'разница через полночь: с 22:15 до 6:45 — те же 8 ч 30 мин',
    inputs: { mode: 'difference', startHour: 22, startMinute: 15, endHour: 6, endMinute: 45 },
    expectPrimary: '8 ч 30 мин',
    expectSecondary: [
      { label: 'Всего минут', value: '510' },
      { label: 'Переход через полночь', value: 'да' },
    ],
  },
  {
    name: 'прибавление: 14:45 плюс 2 ч 30 мин даёт 17:15',
    inputs: { mode: 'add', startHour: 14, startMinute: 45, spanHour: 2, spanMinute: 30 },
    expectPrimary: '17:15',
    expectSecondary: [{ label: 'Исходное время', value: '14:45' }],
  },
  {
    name: 'вычитание уходит в предыдущие сутки: 0:20 минус 45 мин — 23:35',
    inputs: { mode: 'subtract', startHour: 0, startMinute: 20, spanHour: 0, spanMinute: 45 },
    expectPrimary: '23:35',
    expectSecondary: [{ label: 'Предыдущие сутки', value: 'да' }],
  },
  {
    name: 'граница: совпадающие моменты дают нулевую продолжительность',
    inputs: { mode: 'difference', startHour: 9, startMinute: 0, endHour: 9, endMinute: 0 },
    expectPrimary: '0 ч 0 мин',
    expectSecondary: [{ label: 'Всего минут', value: '0' }],
  },
  {
    name: 'домен: значения вне суток приводятся к границам, а не ломают расчёт',
    inputs: { mode: 'difference', startHour: 99, startMinute: -5, endHour: 23, endMinute: 59 },
    expectPrimary: '0 ч 59 мин',
    expectSecondary: [{ label: 'Начало', value: '23:00' }],
  },
];
