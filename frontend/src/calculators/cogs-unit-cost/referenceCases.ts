import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const cogsUnitCostReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "материалы 240 000, труд 96 000, накладные 54 000 на 1 500 шт",
    inputs: {"labor": 96000, "materials": 240000, "overhead": 54000, "units": 1500},
    expectPrimary: "260,00 ₽",
    expectSecondary: [{ label: "Всего затрат", value: "390 000,00 ₽" }, { label: "Единиц", value: "1 500" }, { label: "Доля материалов", value: "61,54%" }],
  },
  {
    name: "материалы 8 400, труд 3 150, накладные 1 260 на 90 шт",
    inputs: {"labor": 3150, "materials": 8400, "overhead": 1260, "units": 90},
    expectPrimary: "142,33 ₽",
    expectSecondary: [{ label: "Всего затрат", value: "12 810,00 ₽" }, { label: "Единиц", value: "90" }, { label: "Доля материалов", value: "65,57%" }],
  },
  {
    name: "только материалы",
    inputs: {"labor": 0, "materials": 50000, "overhead": 0, "units": 250},
    expectPrimary: "200,00 ₽",
    expectSecondary: [{ label: "Всего затрат", value: "50 000,00 ₽" }, { label: "Единиц", value: "250" }, { label: "Доля материалов", value: "100,00%" }],
  },
  {
    name: "нулевой тираж отклоняется",
    inputs: {"labor": 0, "materials": 100, "overhead": 0, "units": 0},
    expectPrimary: "—",
  },
];
