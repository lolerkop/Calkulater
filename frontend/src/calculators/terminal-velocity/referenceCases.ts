import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const terminalVelocityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { m: 80, a: 0.7, cd: 1.0, rho: 1.225 },
    expectPrimary: "42,776 м/с",
    expectSecondary: [
      { label: "В километрах в час", value: "153,99 км/ч" },
      { label: "Сила сопротивления при этой скорости", value: "784,53 Н" },
      { label: "Время разгона до 95 процентов", value: "7,99 с" },
      { label: "Путь до 95 процентов", value: "217,18 м" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { m: 0.145, a: 0.00426, cd: 0.47, rho: 1.225 },
    expectPrimary: "34,052 м/с",
    expectSecondary: [
      { label: "В километрах в час", value: "122,59 км/ч" },
      { label: "Сила сопротивления при этой скорости", value: "1,422 Н" },
      { label: "Время разгона до 95 процентов", value: "6,36 с" },
      { label: "Путь до 95 процентов", value: "137,62 м" },
    ],
  },
  {
    name: "граница 3",
    inputs: { m: 1, a: 1, cd: 1, rho: 1 },
    expectPrimary: "4,429 м/с",
    expectSecondary: [
      { label: "В километрах в час", value: "15,943 км/ч" },
      { label: "Сила сопротивления при этой скорости", value: "9,807 Н" },
      { label: "Время разгона до 95 процентов", value: "0,8272 с" },
      { label: "Путь до 95 процентов", value: "2,328 м" },
    ],
  },
  {
    name: "масса должна быть больше нуля",
    inputs: { m: 0, a: 0.7, cd: 1.0, rho: 1.225 },
    expectPrimary: "—",
  },
  {
    name: "коэффициент сопротивления должен быть больше нуля",
    inputs: { m: 80, a: 0.7, cd: 0, rho: 1.225 },
    expectPrimary: "—",
  },
];
