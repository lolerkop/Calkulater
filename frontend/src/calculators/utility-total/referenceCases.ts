import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Латинские названия заменены русскими —
// и во входных данных, и в строках, куда имя возвращается эхом.
//   250·5,5 + 8·45 + 40·7,2 = 1375 + 360 + 288 = 2023; плюс 1200 постоянных
export const utilityTotalReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "три услуги и постоянная часть",
    inputs: { "fixed": 1200, "meters": "электричество 250 5.5\nвода 8 45\nгаз 40 7.2" },
    expectPrimary: "3 223,00 ₽",
    expectSecondary: [
      { label: "Позиций", value: "3" },
      { label: "Самая дорогая услуга", value: "электричество" },
      { label: "Переменная часть", value: "2 023,00 ₽" },
      { label: "Постоянная часть", value: "1 200,00 ₽" },
      { label: "В год", value: "38 676,00 ₽" },
    ],
  },
  {
    name: "одна услуга без постоянной части",
    inputs: { "fixed": 0, "meters": "электричество 120 6" },
    expectPrimary: "720,00 ₽",
    expectSecondary: [
      { label: "Позиций", value: "1" },
      { label: "Самая дорогая услуга", value: "электричество" },
      { label: "Переменная часть", value: "720,00 ₽" },
      { label: "Постоянная часть", value: "0,00 ₽" },
      { label: "В год", value: "8 640,00 ₽" },
    ],
  },
  {
    name: "граница: нулевой расход",
    inputs: { "fixed": 0, "meters": "электричество 0 6" },
    expectPrimary: "0,00 ₽",
    expectSecondary: [
      { label: "Позиций", value: "1" },
      { label: "Самая дорогая услуга", value: "электричество" },
      { label: "Переменная часть", value: "0,00 ₽" },
      { label: "Постоянная часть", value: "0,00 ₽" },
      { label: "В год", value: "0,00 ₽" },
    ],
  },
  {
    name: "пустой список отклоняется",
    inputs: { "fixed": 0, "meters": "" },
    expectPrimary: "—",
  },
  {
    name: "отрицательный тариф отклоняется",
    inputs: { "fixed": 0, "meters": "электричество 250 -1" },
    expectPrimary: "—",
  },
];
