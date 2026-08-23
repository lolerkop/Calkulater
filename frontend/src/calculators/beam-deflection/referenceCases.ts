import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const beamDeflectionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "равномерная 2 кН/м на пролёте 3 м",
    inputs: { scheme: "uniform", load: 2, span: 3, e: 10, inertia: 1000 },
    expectPrimary: "21,094 мм",
    expectSecondary: [
      { label: "Относительный прогиб", value: "1/142,22" },
      { label: "Жёсткость EI", value: "100 000 Н·м²" },
      { label: "Пролёт", value: "3 м" },
      { label: "Предел 1/250", value: "12 мм" },
    ],
  },
  {
    name: "сосредоточенная 5 кН на пролёте 4 м",
    inputs: { scheme: "point", load: 5, span: 4, e: 210, inertia: 2000 },
    expectPrimary: "1,587 мм",
    expectSecondary: [
      { label: "Относительный прогиб", value: "1/2 520" },
      { label: "Жёсткость EI", value: "4 200 000 Н·м²" },
      { label: "Пролёт", value: "4 м" },
      { label: "Предел 1/250", value: "16 мм" },
    ],
  },
  {
    name: "граница: пролёт один метр",
    inputs: { scheme: "uniform", load: 1, span: 1, e: 10, inertia: 1000 },
    expectPrimary: "0,1302 мм",
    expectSecondary: [
      { label: "Относительный прогиб", value: "1/7 680" },
      { label: "Жёсткость EI", value: "100 000 Н·м²" },
      { label: "Пролёт", value: "1 м" },
      { label: "Предел 1/250", value: "4 мм" },
    ],
  },
  {
    name: "нулевой момент инерции отклоняется",
    inputs: { scheme: "uniform", load: 2, span: 3, e: 10, inertia: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевой пролёт отклоняется",
    inputs: { scheme: "uniform", load: 2, span: 0, e: 10, inertia: 1000 },
    expectPrimary: "—",
  },
];
