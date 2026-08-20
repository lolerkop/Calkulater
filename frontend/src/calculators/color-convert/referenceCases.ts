import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   HEX→RGB побайтово; RGB→HSL через максимум и минимум канала
export const colorConvertReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "шестизначный #2E86DE",
    inputs: { "mode": "hex", "hex": "#2E86DE" },
    expectPrimary: "rgb(46, 134, 222)",
    expectSecondary: [{ label: "HSL", value: "hsl(210, 72,73%, 52,55%)" }, { label: "HEX", value: "#2E86DE" }, { label: "Яркость", value: "52,55" }],
  },
  {
    name: "трёхзначный #F0A",
    inputs: { "mode": "hex", "hex": "#F0A" },
    expectPrimary: "rgb(255, 0, 170)",
    expectSecondary: [{ label: "HSL", value: "hsl(320, 100,00%, 50,00%)" }, { label: "HEX", value: "#FF00AA" }, { label: "Яркость", value: "50,00" }],
  },
  {
    name: "чистый чёрный #000000",
    inputs: { "mode": "hex", "hex": "#000000" },
    expectPrimary: "rgb(0, 0, 0)",
    expectSecondary: [{ label: "HSL", value: "hsl(0, 0,00%, 0,00%)" }, { label: "HEX", value: "#000000" }, { label: "Яркость", value: "0,00" }],
  },
  {
    name: "недопустимый шестнадцатеричный код отклоняется",
    inputs: { "mode": "hex", "hex": "#ZZTOP1" },
    expectPrimary: "—",
  },
];
