import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   k = to/from; каждое количество умножается на k
//   грамматика строки: последний ОДИН токен — число
export const recipeScaleReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "с 4 порций на 6",
    inputs: { "ingredients": "мука 500\nвода 320\nсоль 10\nдрожжи 7", "fromServings": 4, "toServings": 6 },
    expectPrimary: "1,5",
    expectSecondary: [{ label: "Ингредиентов", value: "4" }, { label: "Было всего", value: "837" }, { label: "Стало всего", value: "1 255,5" }],
  },
  {
    name: "с 12 порций на 5",
    inputs: { "ingredients": "мука 500\nвода 320\nсоль 10\nдрожжи 7", "fromServings": 12, "toServings": 5 },
    expectPrimary: "0,4167",
    expectSecondary: [{ label: "Ингредиентов", value: "4" }, { label: "Было всего", value: "837" }, { label: "Стало всего", value: "348,75" }],
  },
  {
    name: "одинаковое число порций — коэффициент 1",
    inputs: { "ingredients": "мука 500\nвода 320\nсоль 10\nдрожжи 7", "fromServings": 8, "toServings": 8 },
    expectPrimary: "1",
    expectSecondary: [{ label: "Ингредиентов", value: "4" }, { label: "Было всего", value: "837" }, { label: "Стало всего", value: "837" }],
  },
  {
    name: "нулевое исходное число порций отклоняется",
    inputs: { "ingredients": "мука 500\nвода 320\nсоль 10\nдрожжи 7", "fromServings": 0, "toServings": 6 },
    expectPrimary: "—",
  },
];
