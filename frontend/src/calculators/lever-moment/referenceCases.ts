import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   F₂ = F₁·d₁/d₂ = 100 · 2 / 0,5 = 400 Н; выигрыш d₁/d₂ = 4
//   d₂ = F₁·d₁/F₂ = 100 · 2 / 400 = 0,5 м; выигрыш тот же
//   равные плечи: F₂ = F₁ = 50 Н, выигрыша нет
export const leverMomentReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сила 100 Н на плече 2 м против плеча 0,5 м",
    inputs: { mode: 'force2', f1: 100, d1: 2, d2: 0.5, f2: 400 },
    expectPrimary: "400 Н",
    expectSecondary: [
      { label: "Выигрыш в силе", value: "4" },
      { label: "Момент первой силы", value: "200 Н·м" },
    ],
  },
  {
    name: "обратная задача: плечо по известной второй силе",
    inputs: { mode: 'distance2', f1: 100, d1: 2, d2: 0.5, f2: 400 },
    expectPrimary: "0,5 м",
    expectSecondary: [{ label: "Выигрыш в силе", value: "4" }],
  },
  {
    name: "граница: равные плечи не дают выигрыша",
    inputs: { mode: 'force2', f1: 50, d1: 1, d2: 1, f2: 50 },
    expectPrimary: "50 Н",
    expectSecondary: [{ label: "Выигрыш в силе", value: "1" }],
  },
  {
    name: "нулевое второе плечо отклоняется",
    inputs: { mode: 'force2', f1: 100, d1: 2, d2: 0, f2: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевая вторая сила отклоняется",
    inputs: { mode: 'distance2', f1: 100, d1: 2, d2: 0, f2: 0 },
    expectPrimary: "—",
  },
];
