import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из S = ((a+b)/2)·h:
//   10 и 6 при h = 4  -> средняя линия 8,   S = 32
//   7,5 и 2,5 при h=3 -> средняя линия 5,   S = 15
//   геометрически согласованный случай 8/2, h=4, c=d=5:
//   (8−2)/2 = 3; 3²+4²=5² -> S=20, P=8+2+5+5=20.
//   Старый случай 10/6,h=4,c=d=5 был несовместим: при равных
//   боковых 5 и разности оснований 4 высота должна равняться √21.
export const geomTrapezoidReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "основания 10 и 6 при высоте 4",
    inputs: {"unit": "m", "a": 10, "b": 6, "h": 4},
    expectPrimary: "32 м²",
    expectSecondary: [{ label: "Средняя линия", value: "8 м" }],
  },
  {
    name: "дробные основания 7,5 и 2,5 при высоте 3",
    inputs: {"unit": "m", "a": 7.5, "b": 2.5, "h": 3},
    expectPrimary: "15 м²",
    expectSecondary: [{ label: "Средняя линия", value: "5 м" }],
  },
  {
    name: "с боковыми сторонами появляется периметр",
    inputs: {"unit": "m", "a": 8, "b": 2, "h": 4, "c": 5, "d": 5},
    expectPrimary: "20 м²",
    expectSecondary: [{ label: "Периметр", value: "20 м" }],
  },
  {
    name: "граница: равные основания дают параллелограмм",
    inputs: {"unit": "m", "a": 5, "b": 5, "h": 2},
    expectPrimary: "10 м²",
    expectSecondary: [{ label: "Средняя линия", value: "5 м" }],
  },
  {
    name: "нулевая высота отклоняется",
    inputs: {"unit": "m", "a": 10, "b": 6, "h": 0},
    expectPrimary: "—",
  },
  // Независимые аналитические случаи: масштабирование формул и явные границы области.
  {"name": "средняя линия без промежуточного переполнения суммы", "inputs": {"unit": "m", "a": 1e+308, "b": 1e+308, "h": 1e-100}, "expectPrimary": "1,000·10^208 м²", "expectSecondary": [{"label": "Средняя линия", "value": "1,000·10^308 м"}]},
  {"name": "несовместимые боковые стороны не дают правдоподобный периметр", "inputs": {"unit": "m", "a": 10, "b": 6, "h": 4, "c": 5, "d": 5}, "expectPrimary": "—"},
];
