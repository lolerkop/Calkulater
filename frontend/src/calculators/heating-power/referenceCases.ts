import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   20 × 2,7 = 54 м³; 54 × 40 = 2160 Вт; окно +100 -> 2260 Вт = 2,26 кВт
//   45 × 3,2 = 144 м³; 144 × 45 = 6480; три окна +300 -> 6780 Вт = 6,78 кВт
//   без окон: 54 × 40 = 2160 Вт = 2,16 кВт
export const heatingPowerReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "комната 20 м² при потолке 2,7 м и норме 40 Вт/м³",
    inputs: { area: 20, height: 2.7, wattsPerM3: 40, windows: 1 },
    expectPrimary: "2,26 кВт",
    expectSecondary: [
      { label: "В ваттах", value: "2 260 Вт" },
      { label: "Объём помещения", value: "54 м³" },
      { label: "Надбавка на окна", value: "100 Вт" },
    ],
  },
  {
    name: "зал 45 м² при потолке 3,2 м и трёх окнах",
    inputs: { area: 45, height: 3.2, wattsPerM3: 45, windows: 3 },
    expectPrimary: "6,78 кВт",
    expectSecondary: [
      { label: "В ваттах", value: "6 780 Вт" },
      { label: "Объём помещения", value: "144 м³" },
    ],
  },
  {
    name: "граница: помещение без окон",
    inputs: { area: 20, height: 2.7, wattsPerM3: 40, windows: 0 },
    expectPrimary: "2,16 кВт",
    expectSecondary: [{ label: "Надбавка на окна", value: "0 Вт" }],
  },
  {
    name: "нулевая площадь отклоняется",
    inputs: { area: 0, height: 2.7, wattsPerM3: 40, windows: 1 },
    expectPrimary: "—",
  },
];
