import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Латинские названия заменены русскими —
// и во входных данных, и в строках, куда имя возвращается эхом.
//   300·3,64 + 100·7,17 + 150·3,87 = 1092 + 717 + 580,5 = 2389,5 -> 2390 на 4 порции
export const caloriesPerServingReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "три ингредиента на четыре порции",
    inputs: { "ingredients": "мука 300 364\nмасло 100 717\nсахар 150 387", "servings": 4 },
    expectPrimary: "597 ккал",
    expectSecondary: [
      { label: "Всего калорий", value: "2 390 ккал" },
      { label: "Ингредиентов", value: "3" },
      { label: "Самый калорийный", value: "мука" },
      { label: "Порций", value: "4" },
    ],
  },
  {
    name: "два ингредиента на две порции",
    inputs: { "ingredients": "рис 200 344\nподсолнечное 20 899", "servings": 2 },
    expectPrimary: "434 ккал",
    expectSecondary: [
      { label: "Всего калорий", value: "868 ккал" },
      { label: "Ингредиентов", value: "2" },
      { label: "Самый калорийный", value: "рис" },
      { label: "Порций", value: "2" },
    ],
  },
  {
    name: "граница: нулевая калорийность",
    inputs: { "ingredients": "вода 500 0", "servings": 1 },
    expectPrimary: "0 ккал",
    expectSecondary: [
      { label: "Всего калорий", value: "0 ккал" },
      { label: "Ингредиентов", value: "1" },
      { label: "Самый калорийный", value: "вода" },
      { label: "Порций", value: "1" },
    ],
  },
  {
    name: "пустой список отклоняется",
    inputs: { "ingredients": "", "servings": 4 },
    expectPrimary: "—",
  },
  {
    name: "ноль порций отклоняется",
    inputs: { "ingredients": "мука 300 364", "servings": 0 },
    expectPrimary: "—",
  },
];
