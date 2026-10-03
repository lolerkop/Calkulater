import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   F₁=0, F₂=1; n ≤ 78 — сохранённый предел страницы, не предел BigInt.
//   Исторические названия тестов о точности не задают численную границу:
//   при этой нумерации F₇₉ = 8 944 394 323 791 464 ещё безопасно для Number.
export const fibonacciReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "десятый член",
    inputs: { "n": 10 },
    expectPrimary: "34",
    expectSecondary: [{ label: "Сумма ряда", value: "88" }, { label: "Отношение к предыдущему", value: "1,619" }],
  },
  {
    name: "двадцатый член",
    inputs: { "n": 20 },
    expectPrimary: "4 181",
    expectSecondary: [{ label: "Сумма ряда", value: "10 945" }, { label: "Отношение к предыдущему", value: "1,618" }],
  },
  {
    name: "предельный точный член 78",
    inputs: { "n": 78 },
    expectPrimary: "5 527 939 700 884 757",
    expectSecondary: [{ label: "Сумма ряда", value: "14 472 334 024 676 220" }, { label: "Отношение к предыдущему", value: "1,618" }],
  },
  {
    name: "выход за предел точности (79) отклоняется",
    inputs: { "n": 79 },
    expectPrimary: "—",
  },
];
