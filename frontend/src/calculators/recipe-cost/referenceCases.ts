import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   0,5·45 + 0,2·890 + 0,3·68 = 22,5 + 178 + 20,4 = 220,9; на 4 порции 55,225
//   грамматика строки: последние ДВА токена — числа, всё перед ними название
export const recipeCostReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "три ингредиента на 4 порции",
    inputs: { "ingredients": "мука 0,5 45\nмасло 0,2 890\nсахар 0,3 68", "servings": 4 },
    expectPrimary: "55,23 ₽",
    expectSecondary: [{ label: "Стоимость всего", value: "220,90 ₽" }, { label: "Ингредиентов", value: "3" }, { label: "Самый дорогой", value: "масло" }],
  },
  {
    name: "два ингредиента на 10 порций",
    inputs: { "ingredients": "сыр 0,4 720\nтесто 1 130", "servings": 10 },
    expectPrimary: "41,80 ₽",
    expectSecondary: [{ label: "Стоимость всего", value: "418,00 ₽" }, { label: "Ингредиентов", value: "2" }, { label: "Самый дорогой", value: "сыр" }],
  },
  {
    name: "одна порция — цена порции равна общей",
    inputs: { "ingredients": "кофе 0,02 2400", "servings": 1 },
    expectPrimary: "48,00 ₽",
    expectSecondary: [{ label: "Стоимость всего", value: "48,00 ₽" }, { label: "Ингредиентов", value: "1" }, { label: "Самый дорогой", value: "кофе" }],
  },
  {
    name: "строка без цены отклоняется",
    inputs: { "ingredients": "мука 0,5", "servings": 4 },
    expectPrimary: "—",
  },
];
