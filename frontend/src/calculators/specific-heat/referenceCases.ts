import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   Q = c·m·ΔT = 4186 · 2 · 50 = 418 600 Дж
//   ΔT = Q/(c·m) = 418 600 / (4186 · 2) = 50 К
//   охлаждение: 900 · 1 · (−20) = −18 000 Дж, знак означает отданное тепло
export const specificHeatReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "нагрев двух килограммов воды на 50 К",
    inputs: { mode: 'energy', mass: 2, c: 4186, dt: 50, q: 418600 },
    expectPrimary: "418 600 Дж",
    expectSecondary: [
      { label: "В киловатт-часах", value: "0,1163 кВт·ч" },
      { label: "Масса", value: "2 кг" },
    ],
  },
  {
    name: "обратная задача: перепад по подведённой энергии",
    inputs: { mode: 'deltaT', mass: 2, c: 4186, dt: 50, q: 418600 },
    expectPrimary: "50 К",
    expectSecondary: [{ label: "Удельная теплоёмкость", value: "4 186 Дж/(кг·К)" }],
  },
  {
    name: "граница: охлаждение даёт отрицательную энергию",
    inputs: { mode: 'energy', mass: 1, c: 900, dt: -20, q: 0 },
    expectPrimary: "-18 000 Дж",
    expectSecondary: [{ label: "Изменение температуры", value: "-20 К" }],
  },
  {
    name: "нулевая масса отклоняется",
    inputs: { mode: 'energy', mass: 0, c: 4186, dt: 50, q: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевой перепад при поиске массы отклоняется",
    inputs: { mode: 'mass', mass: 0, c: 4186, dt: 0, q: 1000 },
    expectPrimary: "—",
  },
];
