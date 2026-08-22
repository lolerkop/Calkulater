import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const debtSnowballAvalancheReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "лавина: сначала дорогой долг",
    inputs: { debts: "small 40000 12 2000\nbig 200000 26 6000", extra: 4000, strategy: "avalanche" },
    expectPrimary: "26 мес",
    expectSecondary: [
      { label: "Переплата процентами", value: "69 619,92 ₽" },
      { label: "Выплачено всего", value: "309 619,92 ₽" },
      { label: "Первым закрывается", value: "small" },
      { label: "Долгов", value: "2" },
    ],
  },
  {
    name: "снежный ком: сначала малый долг",
    inputs: { debts: "small 40000 12 2000\nbig 200000 26 6000", extra: 4000, strategy: "snowball" },
    expectPrimary: "27 мес",
    expectSecondary: [
      { label: "Переплата процентами", value: "75 082,64 ₽" },
      { label: "Выплачено всего", value: "315 082,64 ₽" },
      { label: "Первым закрывается", value: "small" },
      { label: "Долгов", value: "2" },
    ],
  },
  {
    name: "граница: нулевая ставка и нет свободных денег",
    inputs: { debts: "one 50000 0 5000", extra: 0, strategy: "avalanche" },
    expectPrimary: "10 мес",
    expectSecondary: [
      { label: "Переплата процентами", value: "0,00 ₽" },
      { label: "Выплачено всего", value: "50 000,00 ₽" },
      { label: "Первым закрывается", value: "one" },
      { label: "Долгов", value: "1" },
    ],
  },
  {
    name: "пустой список отклоняется",
    inputs: { debts: "", extra: 0, strategy: "avalanche" },
    expectPrimary: "—",
  },
  {
    name: "платёж не покрывает проценты",
    inputs: { debts: "card 100000 36 1000", extra: 0, strategy: "avalanche" },
    expectPrimary: "—",
  },
];
