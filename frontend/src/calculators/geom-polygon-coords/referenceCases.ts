import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками.
//   прямоугольник 4×3: 2A = |4·3 − 0| ... = 24 -> площадь 12, периметр 14
//   треугольник 0 0 / 5 0 / 2,5 4: площадь 10, периметр 14,434
export const geomPolygonCoordsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "прямоугольник по четырём углам",
    inputs: { "points": "0 0\n4 0\n4 3\n0 3" },
    expectPrimary: "12",
    expectSecondary: [
      { label: "Периметр", value: "14" },
      { label: "Вершин", value: "4" },
      { label: "Центроид X", value: "2" },
      { label: "Центроид Y", value: "1,5" },
    ],
  },
  {
    name: "треугольник по трём вершинам",
    inputs: { "points": "0 0\n5 0\n2.5 4" },
    expectPrimary: "10",
    expectSecondary: [
      { label: "Периметр", value: "14,434" },
      { label: "Вершин", value: "3" },
      { label: "Центроид X", value: "2,5" },
      { label: "Центроид Y", value: "1,333" },
    ],
  },
  {
    name: "граница: наименьший целочисленный треугольник",
    inputs: { "points": "0 0\n1 0\n0 1" },
    expectPrimary: "0,5",
    expectSecondary: [
      { label: "Периметр", value: "3,414" },
      { label: "Вершин", value: "3" },
      { label: "Центроид X", value: "0,3333" },
      { label: "Центроид Y", value: "0,3333" },
    ],
  },
  {
    name: "две вершины отклоняются",
    inputs: { "points": "0 0\n1 1" },
    expectPrimary: "—",
  },
  {
    name: "три точки на прямой отклоняются",
    inputs: { "points": "0 0\n1 0\n2 0" },
    expectPrimary: "—",
  },
];
