import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const beltLengthReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "шкивы 100 и 200 мм при 300 мм между осями",
    inputs: { center: 300, d1: 100, d2: 200 },
    expectPrimary: "1 079,57 мм",
    expectSecondary: [
      { label: "В метрах", value: "1,08 м" },
      { label: "Угол обхвата малого шкива", value: "160,81 °" },
      { label: "Передаточное отношение", value: "2" },
      { label: "Межосевое расстояние", value: "300 мм" },
    ],
  },
  {
    name: "равные шкивы 150 мм при 500 мм",
    inputs: { center: 500, d1: 150, d2: 150 },
    expectPrimary: "1 471,24 мм",
    expectSecondary: [
      { label: "В метрах", value: "1,471 м" },
      { label: "Угол обхвата малого шкива", value: "180 °" },
      { label: "Передаточное отношение", value: "1" },
      { label: "Межосевое расстояние", value: "500 мм" },
    ],
  },
  {
    name: "граница: оси едва разведены",
    inputs: { center: 151, d1: 150, d2: 150 },
    expectPrimary: "773,24 мм",
    expectSecondary: [
      { label: "В метрах", value: "0,7732 м" },
      { label: "Угол обхвата малого шкива", value: "180 °" },
      { label: "Передаточное отношение", value: "1" },
      { label: "Межосевое расстояние", value: "151 мм" },
    ],
  },
  {
    name: "шкивы пересекаются отклоняются",
    inputs: { center: 100, d1: 150, d2: 150 },
    expectPrimary: "—",
  },
  {
    name: "нулевой диаметр отклоняется",
    inputs: { center: 300, d1: 0, d2: 200 },
    expectPrimary: "—",
  },
];
