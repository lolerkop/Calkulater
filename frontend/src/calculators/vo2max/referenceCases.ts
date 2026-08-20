import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const vo2maxReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "тест Купера, 2 600 м за 12 минут",
    inputs: {"distance": 2600, "hrMax": 0, "hrRest": 0, "mode": "cooper"},
    expectPrimary: "46,839 мл/кг/мин",
    expectSecondary: [{ label: "Метод", value: "тест Купера" }],
  },
  {
    name: "тест Купера, 1 900 м",
    inputs: {"distance": 1900, "hrMax": 0, "hrRest": 0, "mode": "cooper"},
    expectPrimary: "31,189 мл/кг/мин",
    expectSecondary: [{ label: "Метод", value: "тест Купера" }],
  },
  {
    name: "по пульсу: покой 60, максимум 190",
    inputs: {"distance": 0, "hrMax": 190, "hrRest": 60, "mode": "hr"},
    expectPrimary: "48,45 мл/кг/мин",
    expectSecondary: [{ label: "Метод", value: "по пульсу" }],
  },
  {
    name: "нулевая дистанция в тесте Купера отклоняется",
    inputs: {"distance": 0, "hrMax": 0, "hrRest": 0, "mode": "cooper"},
    expectPrimary: "—",
  },
];
