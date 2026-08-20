import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const leverageReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "залог 50 000, плечо 5×, вход 2 400, поддержка 0,5 %",
    inputs: {"entry": 2400, "equity": 50000, "leverage": 5, "maintenancePct": 0.5},
    expectPrimary: "250 000,00 ₽",
    expectSecondary: [{ label: "Единиц позиции", value: "104,17" }, { label: "Цена ликвидации", value: "1 932,00 ₽" }, { label: "Падение до ликвидации", value: "19,50%" }, { label: "Залог", value: "50 000,00 ₽" }],
  },
  {
    name: "залог 12 000, плечо 20×, вход 65 000, поддержка 0,4 %",
    inputs: {"entry": 65000, "equity": 12000, "leverage": 20, "maintenancePct": 0.4},
    expectPrimary: "240 000,00 ₽",
    expectSecondary: [{ label: "Единиц позиции", value: "3,692" }, { label: "Цена ликвидации", value: "62 010,00 ₽" }, { label: "Падение до ликвидации", value: "4,60%" }, { label: "Залог", value: "12 000,00 ₽" }],
  },
  {
    name: "плечо 1× — ликвидация только при нуле цены",
    inputs: {"entry": 100, "equity": 30000, "leverage": 1, "maintenancePct": 0},
    expectPrimary: "30 000,00 ₽",
    expectSecondary: [{ label: "Единиц позиции", value: "300" }, { label: "Цена ликвидации", value: "0,00 ₽" }, { label: "Падение до ликвидации", value: "100,00%" }, { label: "Залог", value: "30 000,00 ₽" }],
  },
  {
    name: "плечо меньше единицы отклоняется",
    inputs: {"entry": 10, "equity": 1000, "leverage": 0, "maintenancePct": 0},
    expectPrimary: "—",
  },
];
