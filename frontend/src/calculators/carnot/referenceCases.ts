import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const carnotReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "печь 800 К и среда 300 К",
    inputs: { tHot: 800, tCold: 300 },
    expectPrimary: "62,5 %",
    expectSecondary: [
      { label: "Полезная работа из 1000 Дж тепла", value: "625 Дж" },
      { label: "Отдано холодильнику", value: "375 Дж" },
      { label: "Перепад температур", value: "500 К" },
    ],
  },
  {
    name: "кипяток и комната",
    inputs: { tHot: 373.15, tCold: 293.15 },
    expectPrimary: "21,4391 %",
    expectSecondary: [
      { label: "Полезная работа из 1000 Дж тепла", value: "214,39 Дж" },
      { label: "Отдано холодильнику", value: "785,61 Дж" },
      { label: "Перепад температур", value: "80 К" },
    ],
  },
  {
    name: "перепад в тысячную кельвина",
    inputs: { tHot: 300.001, tCold: 300 },
    expectPrimary: "0,0003 %",
    expectSecondary: [
      { label: "Полезная работа из 1000 Дж тепла", value: "0,003333 Дж" },
      { label: "Отдано холодильнику", value: "1 000 Дж" },
      { label: "Перепад температур", value: "0,001 К" },
    ],
  },
  {
    name: "нулевая холодная температура отклоняется",
    inputs: { tHot: 800, tCold: 0 },
    expectPrimary: "—",
  },
  {
    name: "холодная не ниже горячей отклоняется",
    inputs: { tHot: 300, tCold: 300 },
    expectPrimary: "—",
  },
];
