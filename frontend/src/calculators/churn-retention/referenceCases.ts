import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const churnRetentionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "1000 клиентов, ушло 50, пришло 80",
    inputs: { "startCustomers": 1000, "lost": 50, "gained": 80 },
    expectPrimary: "5,00%",
    expectSecondary: [{ label: "Удержание", value: "95,00%" }, { label: "Клиентов на конец", value: "1 030" }, { label: "Чистый прирост", value: "3,00%" }, { label: "Средний срок жизни, периодов", value: "20" }],
  },
  {
    name: "4200 клиентов, ушло 315, пришло 210",
    inputs: { "startCustomers": 4200, "lost": 315, "gained": 210 },
    expectPrimary: "7,50%",
    expectSecondary: [{ label: "Удержание", value: "92,50%" }, { label: "Клиентов на конец", value: "4 095" }, { label: "Чистый прирост", value: "-2,50%" }, { label: "Средний срок жизни, периодов", value: "13,333" }],
  },
  {
    name: "нулевой отток — удержание 100 %",
    inputs: { "startCustomers": 800, "lost": 0, "gained": 40 },
    expectPrimary: "0,00%",
    expectSecondary: [{ label: "Удержание", value: "100,00%" }, { label: "Клиентов на конец", value: "840" }, { label: "Чистый прирост", value: "5,00%" }],
  },
  {
    name: "ушло больше, чем было — отклоняется",
    inputs: { "startCustomers": 100, "lost": 150, "gained": 0 },
    expectPrimary: "—",
  },
];
