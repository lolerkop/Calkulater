import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   свая π·0,15²·1,8 = 0,1272 м³, ×12 = 1,527; ростверк 32·0,4·0,4 = 5,12
//   итого (1,527 + 5,12) × 1,05 = 6,979
export const pileFoundationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "двенадцать свай с ростверком",
    inputs: { "count": 12, "depth": 1.8, "diameter": 0.3, "grillageHeight": 0.4, "grillageLength": 32, "grillageWidth": 0.4, "waste": 5 },
    expectPrimary: "6,979 м³",
    expectSecondary: [
      { label: "Объём свай", value: "1,527 м³" },
      { label: "Объём ростверка", value: "5,12 м³" },
      { label: "Чистый объём", value: "6,647 м³" },
      { label: "Объём одной сваи", value: "0,1272 м³" },
    ],
  },
  {
    name: "шесть свай без ростверка",
    inputs: { "count": 6, "depth": 2, "diameter": 0.25, "grillageHeight": 0, "grillageLength": 0, "grillageWidth": 0, "waste": 0 },
    expectPrimary: "0,589 м³",
    expectSecondary: [
      { label: "Объём свай", value: "0,589 м³" },
      { label: "Объём ростверка", value: "0 м³" },
      { label: "Чистый объём", value: "0,589 м³" },
      { label: "Объём одной сваи", value: "0,0982 м³" },
    ],
  },
  {
    name: "граница: одна свая с половинным запасом",
    inputs: { "count": 1, "depth": 1, "diameter": 0.2, "grillageHeight": 0, "grillageLength": 0, "grillageWidth": 0, "waste": 50 },
    expectPrimary: "0,0471 м³",
    expectSecondary: [
      { label: "Объём свай", value: "0,0314 м³" },
      { label: "Объём ростверка", value: "0 м³" },
      { label: "Чистый объём", value: "0,0314 м³" },
      { label: "Объём одной сваи", value: "0,0314 м³" },
    ],
  },
  {
    name: "ноль свай отклоняется",
    inputs: { "count": 0, "depth": 1.8, "diameter": 0.3, "grillageHeight": 0, "grillageLength": 0, "grillageWidth": 0, "waste": 5 },
    expectPrimary: "—",
  },
  {
    name: "запас свыше пятидесяти процентов отклоняется",
    inputs: { "count": 12, "depth": 1.8, "diameter": 0.3, "grillageHeight": 0, "grillageLength": 0, "grillageWidth": 0, "waste": 51 },
    expectPrimary: "—",
  },
];
