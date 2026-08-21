import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Латинские названия заменены русскими —
// и во входных данных, и в строках, куда имя возвращается эхом.
//   299/1 + 1990/12 + 169/1 = 299 + 165,8333… + 169 = 633,8333… -> 633,83
//   год считается от неокруглённой суммы: 633,8333…×12 = 7606
export const subscriptionsCostReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "три подписки с разной периодичностью",
    inputs: { "items": "стриминг 299 1\nоблако 1990 12\nмузыка 169 1" },
    expectPrimary: "633,83 ₽",
    expectSecondary: [
      { label: "В год", value: "7 606,00 ₽" },
      { label: "Подписок", value: "3" },
      { label: "Самая дорогая", value: "стриминг" },
      { label: "Её вклад в месяц", value: "299,00 ₽" },
    ],
  },
  {
    name: "одна годовая подписка",
    inputs: { "items": "хостинг 4800 12" },
    expectPrimary: "400,00 ₽",
    expectSecondary: [
      { label: "В год", value: "4 800,00 ₽" },
      { label: "Подписок", value: "1" },
      { label: "Самая дорогая", value: "хостинг" },
      { label: "Её вклад в месяц", value: "400,00 ₽" },
    ],
  },
  {
    name: "граница: бесплатный пробный период",
    inputs: { "items": "пробный 0 1" },
    expectPrimary: "0,00 ₽",
    expectSecondary: [
      { label: "В год", value: "0,00 ₽" },
      { label: "Подписок", value: "1" },
      { label: "Самая дорогая", value: "пробный" },
      { label: "Её вклад в месяц", value: "0,00 ₽" },
    ],
  },
  {
    name: "пустой список отклоняется",
    inputs: { "items": "" },
    expectPrimary: "—",
  },
  {
    name: "нулевая периодичность отклоняется",
    inputs: { "items": "стриминг 299 0" },
    expectPrimary: "—",
  },
];
