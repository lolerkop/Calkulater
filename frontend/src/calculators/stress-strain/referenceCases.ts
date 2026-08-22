import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   10 кН на 100 мм² -> σ = 100 МПа
//   удлинение 0,5 мм на 1000 мм -> ε = 0,0005 и E = 200 000 МПа (сталь)
//   обратный ход: при E = 200 000 то же напряжение даёт ровно 0,5 мм
// Случай «напряжение» намеренно приходит с нулевыми длиной и удлинением:
// сечение — единственное, что ему нужно, и строки о деформации не выводятся.
export const stressStrainReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "модуль Юнга по силе и замеренному удлинению",
    inputs: { mode: 'modulus', force: 10000, area: 100, length: 1000, delta: 0.5, e: 0 },
    expectPrimary: "200 000 МПа",
    expectSecondary: [
      { label: "Напряжение", value: "100 МПа" },
      { label: "Относительная деформация", value: "0,0005" },
      { label: "Удлинение", value: "0,5 мм" },
    ],
  },
  {
    name: "напряжение от 10 кН на сечении 100 мм²",
    inputs: { mode: 'stress', force: 10000, area: 100, length: 0, delta: 0, e: 0 },
    expectPrimary: "100 МПа",
    expectSecondary: [
      { label: "Напряжение", value: "100 МПа" },
      { label: "Площадь сечения", value: "100 мм²" },
    ],
  },
  {
    name: "обратный режим: удлинение по известному модулю",
    inputs: { mode: 'elongation', force: 10000, area: 100, length: 1000, delta: 0, e: 200000 },
    expectPrimary: "0,5 мм",
    expectSecondary: [
      { label: "Напряжение", value: "100 МПа" },
      { label: "Модуль Юнга", value: "200 000 МПа" },
    ],
  },
  {
    name: "нулевая площадь сечения отклоняется",
    inputs: { mode: 'stress', force: 10000, area: 0, length: 0, delta: 0, e: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевое удлинение при поиске модуля отклоняется",
    inputs: { mode: 'modulus', force: 10000, area: 100, length: 1000, delta: 0, e: 0 },
    expectPrimary: "—",
  },
];
