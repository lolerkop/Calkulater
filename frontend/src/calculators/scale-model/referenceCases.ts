import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и перепечатка их руками их же и портит.
export const scaleModelReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "вагон 4350 мм в масштабе 1:87",
    inputs: { mode: "toModel", real: 4350, model: 0, scale: 87 },
    expectPrimary: "50 мм",
  },
  {
    name: "модель 50 мм в масштабе 1:43",
    inputs: { mode: "toReal", real: 0, model: 50, scale: 43 },
    expectPrimary: "2 150 мм",
  },
  {
    name: "найти масштаб по паре размеров",
    inputs: { mode: "findScale", real: 1000, model: 100, scale: 0 },
    expectPrimary: "1:10",
  },
  {
    name: "нулевой масштаб отклоняется",
    inputs: { mode: "toModel", real: 4350, model: 0, scale: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевая модель при поиске масштаба",
    inputs: { mode: "findScale", real: 1000, model: 0, scale: 0 },
    expectPrimary: "—",
  },
];
