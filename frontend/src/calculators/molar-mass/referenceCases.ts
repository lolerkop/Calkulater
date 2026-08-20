import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   H2SO4 = 2·1,008 + 32,06 + 4·15,999 = 98,072 г/моль
//   Ca(OH)2 = 40,078 + 2·(15,999 + 1,008) = 74,092 г/моль
//   C6H12O6 = 6·12,011 + 12·1,008 + 6·15,999 = 180,156 г/моль
export const molarMassReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "серная кислота H2SO4",
    inputs: { "formula": "H2SO4" },
    expectPrimary: "98,072",
    expectSecondary: [{ label: "Атомов всего", value: "7" }, { label: "Элементов", value: "3" }],
  },
  {
    name: "гидроксид кальция Ca(OH)2 — со скобками",
    inputs: { "formula": "Ca(OH)2" },
    expectPrimary: "74,092",
    expectSecondary: [{ label: "Атомов всего", value: "5" }, { label: "Элементов", value: "3" }],
  },
  {
    name: "глюкоза C6H12O6",
    inputs: { "formula": "C6H12O6" },
    expectPrimary: "180,156",
    expectSecondary: [{ label: "Атомов всего", value: "24" }, { label: "Элементов", value: "3" }],
  },
  {
    name: "граница: одиночный атом кислорода",
    inputs: { "formula": "O" },
    expectPrimary: "15,999",
    expectSecondary: [{ label: "Атомов всего", value: "1" }, { label: "Элементов", value: "1" }],
  },
  {
    name: "неизвестный символ элемента отклоняется",
    inputs: { "formula": "Xx2O" },
    expectPrimary: "—",
  },
  {
    name: "пустая формула отклоняется",
    inputs: { "formula": "" },
    expectPrimary: "—",
  },
];
