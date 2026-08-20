import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const audienceGrowthReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "с 12 000 до 18 500 за 6 периодов",
    inputs: {"end": 18500, "periods": 6, "start": 12000},
    expectPrimary: "54,17%",
    expectSecondary: [{ label: "Рост за период", value: "7,48%" }, { label: "Прирост", value: "6 500" }, { label: "Множитель", value: "1,5417" }],
  },
  {
    name: "с 850 до 3 400 за 12 периодов",
    inputs: {"end": 3400, "periods": 12, "start": 850},
    expectPrimary: "300,00%",
    expectSecondary: [{ label: "Рост за период", value: "12,25%" }, { label: "Прирост", value: "2 550" }, { label: "Множитель", value: "4" }],
  },
  {
    name: "аудитория не изменилась",
    inputs: {"end": 5000, "periods": 4, "start": 5000},
    expectPrimary: "0,00%",
    expectSecondary: [{ label: "Рост за период", value: "0,00%" }, { label: "Прирост", value: "0" }, { label: "Множитель", value: "1" }],
  },
  {
    name: "нулевая начальная аудитория отклоняется",
    inputs: {"end": 100, "periods": 6, "start": 0},
    expectPrimary: "—",
  },
];
