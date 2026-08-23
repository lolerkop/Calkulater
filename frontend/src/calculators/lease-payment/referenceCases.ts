import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const leasePaymentReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "2 млн, аванс 400 тыс., остаток 40 %, 36 мес.",
    inputs: { price: 2000000, down: 400000, residualPct: 40, months: 36, rate: 12 },
    expectPrimary: "34 222,22 ₽",
    expectSecondary: [
      { label: "Амортизационная часть", value: "22 222,22 ₽" },
      { label: "Процентная часть", value: "12 000 ₽" },
      { label: "Остаточная стоимость", value: "800 000 ₽" },
      { label: "Всего выплат с авансом", value: "1 632 000 ₽" },
    ],
  },
  {
    name: "3,5 млн, аванс 700 тыс., остаток 25 %, 48 мес.",
    inputs: { price: 3500000, down: 700000, residualPct: 25, months: 48, rate: 9.5 },
    expectPrimary: "54 651,04 ₽",
    expectSecondary: [
      { label: "Амортизационная часть", value: "40 104,17 ₽" },
      { label: "Процентная часть", value: "14 546,88 ₽" },
      { label: "Остаточная стоимость", value: "875 000 ₽" },
      { label: "Всего выплат с авансом", value: "3 323 250 ₽" },
    ],
  },
  {
    name: "граница: нулевая остаточная стоимость",
    inputs: { price: 1000000, down: 0, residualPct: 0, months: 12, rate: 0 },
    expectPrimary: "83 333,33 ₽",
    expectSecondary: [
      { label: "Амортизационная часть", value: "83 333,33 ₽" },
      { label: "Процентная часть", value: "0 ₽" },
      { label: "Остаточная стоимость", value: "0 ₽" },
      { label: "Всего выплат с авансом", value: "1 000 000 ₽" },
    ],
  },
  {
    name: "аванс больше стоимости отклоняется",
    inputs: { price: 1000000, down: 1200000, residualPct: 40, months: 36, rate: 12 },
    expectPrimary: "—",
  },
  {
    name: "остаток выше профинансированной суммы отклоняется",
    inputs: { price: 1000000, down: 700000, residualPct: 50, months: 36, rate: 12 },
    expectPrimary: "—",
  },
];
