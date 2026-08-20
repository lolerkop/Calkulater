import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const waterIntakeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "вес 72 кг, 45 минут нагрузки, обычная погода",
    inputs: {"activityMinutes": 45, "hotWeather": "no", "weight": 72},
    expectPrimary: "2,901 л",
    expectSecondary: [{ label: "Базовая норма", value: "2,376 л" }, { label: "Надбавка за нагрузку", value: "0,525 л" }, { label: "Стаканов по 250 мл", value: "11,604" }],
  },
  {
    name: "вес 58 кг, 90 минут нагрузки, жара",
    inputs: {"activityMinutes": 90, "hotWeather": "yes", "weight": 58},
    expectPrimary: "3,26 л",
    expectSecondary: [{ label: "Базовая норма", value: "1,914 л" }, { label: "Надбавка за нагрузку", value: "1,05 л" }, { label: "Стаканов по 250 мл", value: "13,042" }],
  },
  {
    name: "без нагрузки",
    inputs: {"activityMinutes": 0, "hotWeather": "no", "weight": 80},
    expectPrimary: "2,64 л",
    expectSecondary: [{ label: "Базовая норма", value: "2,64 л" }, { label: "Надбавка за нагрузку", value: "0 л" }, { label: "Стаканов по 250 мл", value: "10,56" }],
  },
  {
    name: "нулевой вес отклоняется",
    inputs: {"activityMinutes": 30, "hotWeather": "no", "weight": 0},
    expectPrimary: "—",
  },
];
