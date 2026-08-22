import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   F = k·x = 200 · 0,05 = 10 Н; E = 200 · 0,05² / 2 = 0,25 Дж
//   x = F/k = 50 / 200 = 0,25 м; E = 50² / (2·200) = 6,25 Дж
//   k = F/x = 10 / 0,02 = 500 Н/м; E = 10 · 0,02 / 2 = 0,1 Дж
export const hookeLawReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "пружина 200 Н/м, сжатая на 5 см",
    inputs: { mode: 'force', k: 200, x: 0.05, f: 10 },
    expectPrimary: "10 Н",
    expectSecondary: [
      { label: "Энергия пружины", value: "0,25 Дж" },
      { label: "Жёсткость", value: "200 Н/м" },
    ],
  },
  {
    name: "та же пружина под силой 50 Н",
    inputs: { mode: 'extension', k: 200, x: 0.25, f: 50 },
    expectPrimary: "0,25 м",
    expectSecondary: [{ label: "Энергия пружины", value: "6,25 Дж" }],
  },
  {
    name: "граница: жёсткость по силе и удлинению",
    inputs: { mode: 'stiffness', k: 500, x: 0.02, f: 10 },
    expectPrimary: "500 Н/м",
    expectSecondary: [{ label: "Энергия пружины", value: "0,1 Дж" }],
  },
  {
    name: "нулевая жёсткость отклоняется",
    inputs: { mode: 'force', k: 0, x: 0.05, f: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевое удлинение при поиске жёсткости отклоняется",
    inputs: { mode: 'stiffness', k: 0, x: 0, f: 10 },
    expectPrimary: "—",
  },
];
