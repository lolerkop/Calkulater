import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   −10 °C при 20 км/ч -> −17,86058, разница −7,86058
//   0 °C при 30 км/ч   -> −6,47295 (при нуле разница равна самой величине)
//   10 °C при 4,8 км/ч -> 9,81748 — оба края области сразу
export const windChillReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "−10 °C при ветре 20 км/ч",
    inputs: { t: -10, v: 20 },
    expectPrimary: "-17,861 °C",
    expectSecondary: [
      { label: "Разница с термометром", value: "-7,861 °C" },
      { label: "Скорость ветра", value: "20 км/ч" },
    ],
  },
  {
    name: "0 °C при ветре 30 км/ч",
    inputs: { t: 0, v: 30 },
    expectPrimary: "-6,473 °C",
    expectSecondary: [
      { label: "Разница с термометром", value: "-6,473 °C" },
      { label: "Ощущаемая в градусах Фаренгейта", value: "20,349 °F" },
    ],
  },
  {
    name: "граница области: 10 °C и 4,8 км/ч",
    inputs: { t: 10, v: 4.8 },
    expectPrimary: "9,817 °C",
    expectSecondary: [{ label: "Разница с термометром", value: "-0,1825 °C" }],
  },
  {
    name: "температура выше 10 °C отклоняется",
    inputs: { t: 15, v: 20 },
    expectPrimary: "—",
  },
  {
    name: "ветер слабее 4,8 км/ч отклоняется",
    inputs: { t: -10, v: 3 },
    expectPrimary: "—",
  },
];
