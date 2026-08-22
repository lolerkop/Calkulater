import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   150 мл · 12 % = 18 мл спирта; 18 · 0,789 = 14,202 г; / 10 = 1,4202 единицы
//   500 мл · 5 %  = 25 мл спирта; 25 · 0,789 = 19,725 г; / 10 = 1,9725 единицы
//   безалкогольное: спирта нет, единиц нет
export const alcoholUnitsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "бокал вина 150 мл крепостью 12 %",
    inputs: { volume_ml: 150, abv: 12, standard_g: 10 },
    expectPrimary: "1,42",
    expectSecondary: [
      { label: "Чистого спирта по массе", value: "14,202 г" },
      { label: "Чистого спирта по объёму", value: "18 мл" },
    ],
  },
  {
    name: "пиво 500 мл крепостью 5 %",
    inputs: { volume_ml: 500, abv: 5, standard_g: 10 },
    expectPrimary: "1,97",
    expectSecondary: [
      { label: "Чистого спирта по массе", value: "19,725 г" },
      { label: "Чистого спирта по объёму", value: "25 мл" },
    ],
  },
  {
    name: "граница: безалкогольное даёт ноль единиц",
    inputs: { volume_ml: 330, abv: 0, standard_g: 10 },
    expectPrimary: "0,00",
    expectSecondary: [{ label: "Чистого спирта по объёму", value: "0 мл" }],
  },
  {
    name: "крепость больше ста процентов отклоняется",
    inputs: { volume_ml: 100, abv: 120, standard_g: 10 },
    expectPrimary: "—",
  },
  {
    name: "нулевая норма единицы отклоняется",
    inputs: { volume_ml: 100, abv: 40, standard_g: 0 },
    expectPrimary: "—",
  },
];
