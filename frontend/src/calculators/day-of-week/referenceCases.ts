import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Дни недели проверены по календарю, а не получены прогоном:
//   1 января 2024 — понедельник, первый день года
//   29 февраля 2024 — четверг, 60-й день (31 январских + 29)
//   31 декабря 2024 — вторник, 366-й день високосного года
//   1 января 2023 — воскресенье; по ISO это последняя неделя 2022 года
export const dayOfWeekReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'начало года: 1 января 2024 — понедельник',
    inputs: { date: '2024-01-01' },
    expectPrimary: 'понедельник',
    expectSecondary: [{ label: 'День года', value: '1' }],
  },
  {
    name: 'високосный день: 29 февраля 2024 — четверг, 60-й день',
    inputs: { date: '2024-02-29' },
    expectPrimary: 'четверг',
    expectSecondary: [{ label: 'День года', value: '60' }],
  },
  {
    name: 'конец високосного года: 31 декабря 2024 — вторник',
    inputs: { date: '2024-12-31' },
    expectPrimary: 'вторник',
    expectSecondary: [
      { label: 'Дней в году', value: '366' },
      { label: 'Номер недели ISO', value: '1' },
      { label: 'Год недели ISO', value: '2025' },
    ],
  },
  {
    name: 'граница недель ISO: 1 января 2023 принадлежит прошлому году',
    inputs: { date: '2023-01-01' },
    expectPrimary: 'воскресенье',
    // Strengthened after fixing the previous non-numeric placeholder: Python's
    // independent isocalendar confirms 2023-01-01 = 2022-W52-7.
    expectSecondary: [
      { label: 'Номер недели ISO', value: '52' },
      { label: 'Год недели ISO', value: '2022' },
    ],
  },
  {
    name: 'выходной отмечается отдельно',
    inputs: { date: '2024-06-01' },
    expectPrimary: 'суббота',
    expectSecondary: [{ label: 'Выходной', value: 'Да' }],
  },
  {
    name: 'недопустимо: несуществующая дата',
    inputs: { date: '2023-02-30' },
    expectPrimary: '—',
  },
];
