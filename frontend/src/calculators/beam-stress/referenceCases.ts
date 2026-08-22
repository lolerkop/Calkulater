import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const beamStressReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "прямоугольник 100×200 при 4,5 кН·м",
    inputs: { moment: 4500, section: "rect", b: 100, h: 200, d: 0 },
    expectPrimary: "6,75 МПа",
    expectSecondary: [
      { label: "Момент сопротивления", value: "666 666,67 мм³" },
      { label: "Изгибающий момент", value: "4 500 Н·м" },
    ],
  },
  {
    name: "круг 120 мм при том же моменте",
    inputs: { moment: 4500, section: "circle", b: 0, h: 0, d: 120 },
    expectPrimary: "26,526 МПа",
    expectSecondary: [
      { label: "Момент сопротивления", value: "169 646 мм³" },
      { label: "Изгибающий момент", value: "4 500 Н·м" },
    ],
  },
  {
    name: "предельно малый момент",
    inputs: { moment: 0.001, section: "rect", b: 100, h: 200, d: 0 },
    expectPrimary: "0,000002 МПа",
    expectSecondary: [
      { label: "Момент сопротивления", value: "666 666,67 мм³" },
      { label: "Изгибающий момент", value: "0,001 Н·м" },
    ],
  },
  {
    name: "нулевой момент отклоняется",
    inputs: { moment: 0, section: "rect", b: 100, h: 200, d: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевая высота сечения отклоняется",
    inputs: { moment: 4500, section: "rect", b: 100, h: 0, d: 0 },
    expectPrimary: "—",
  },
];
