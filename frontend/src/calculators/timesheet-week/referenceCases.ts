import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const timesheetWeekReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { lines: "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0", rate: 500, normal: 40 },
    expectPrimary: "36,75 ч",
    expectSecondary: [
      { label: "Дней в табеле", value: "5" },
      { label: "В часах и минутах", value: "36 ч 45 мин" },
      { label: "Сверхурочных", value: "0 ч" },
      { label: "Начислено", value: "18 375 ₽" },
    ],
  },
  {
    name: "граница 2",
    inputs: { lines: "22:00,06:00,30", rate: 700, normal: 40 },
    expectPrimary: "7,5 ч",
    expectSecondary: [
      { label: "Дней в табеле", value: "1" },
      { label: "В часах и минутах", value: "7 ч 30 мин" },
      { label: "Сверхурочных", value: "0 ч" },
      { label: "Начислено", value: "5 250 ₽" },
    ],
  },
  {
    name: "обычный 3",
    inputs: { lines: "08:00,20:00,60\n08:00,20:00,60\n08:00,20:00,60\n08:00,20:00,60\n08:00,20:00,60", rate: 400, normal: 40 },
    expectPrimary: "55 ч",
    expectSecondary: [
      { label: "Дней в табеле", value: "5" },
      { label: "В часах и минутах", value: "55 ч 0 мин" },
      { label: "Сверхурочных", value: "15 ч" },
      { label: "Начислено", value: "25 000 ₽" },
    ],
  },
  {
    name: "введите хотя бы одну строку вида «09:00,18:00,60»",
    inputs: { lines: "", rate: 500, normal: 40 },
    expectPrimary: "—",
  },
  {
    name: "в строке нужны начало и конец через запятую",
    inputs: { lines: "09:00", rate: 500, normal: 40 },
    expectPrimary: "—",
  },
];
