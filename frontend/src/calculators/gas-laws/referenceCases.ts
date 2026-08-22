import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   p₂ = p₁V₁T₂ / (T₁V₂) = 100·2·300 / (300·1) = 200 кПа
//   V₂ = p₁V₁T₂ / (T₁p₂) = 100·2·600 / (300·100) = 4 л
//   T₂ = p₂V₂T₁ / (p₁V₁) = 100·2·300 / (100·2) = 300 К
export const gasLawsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сжатие вдвое при постоянной температуре удваивает давление",
    inputs: { mode: 'p2', p1: 100, v1: 2, t1: 300, p2: 100, v2: 1, t2: 300 },
    expectPrimary: "200 кПа",
    expectSecondary: [
      { label: "Состояние 1: p·V/T", value: "0,6667 кПа·л/К" },
      { label: "Первое состояние", value: "100 кПа · 2 л · 300 К" },
    ],
  },
  {
    name: "нагрев вдвое при постоянном давлении удваивает объём",
    inputs: { mode: 'v2', p1: 100, v1: 2, t1: 300, p2: 100, v2: 1, t2: 600 },
    expectPrimary: "4 л",
    expectSecondary: [{ label: "Состояние 2: p·V/T", value: "0,6667 кПа·л/К" }],
  },
  {
    name: "граница: равные состояния дают исходную температуру",
    inputs: { mode: 't2', p1: 100, v1: 2, t1: 300, p2: 100, v2: 2, t2: 300 },
    expectPrimary: "300 К",
  },
  {
    name: "нулевая температура отклоняется",
    inputs: { mode: 'p2', p1: 100, v1: 2, t1: 0, p2: 100, v2: 1, t2: 300 },
    expectPrimary: "—",
  },
  {
    name: "нулевой объём в знаменателе отклоняется",
    inputs: { mode: 'p2', p1: 100, v1: 2, t1: 300, p2: 100, v2: 0, t2: 300 },
    expectPrimary: "—",
  },
];
