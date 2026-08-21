import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   ETRTO 25-622: 622 + 2×25 = 672 мм, окружность π×672 = 2111,15
//   26 дюймов: 26 × 25,4 = 660,4 мм — НЕ то же самое, и это видно
export const bikeWheelSizeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "покрышка 25-622 по ETRTO",
    inputs: { "etrtoRim": 622, "etrtoTire": 25, "inches": 26, "mode": "etrto" },
    expectPrimary: "2 111,15 мм",
    expectSecondary: [
      { label: "Диаметр", value: "672 мм" },
      { label: "Диаметр в дюймах", value: "26,457" },
      { label: "Оборотов на километр", value: "473,68" },
      { label: "Радиус", value: "336 мм" },
    ],
  },
  {
    name: "двадцать шесть дюймов",
    inputs: { "etrtoRim": 622, "etrtoTire": 25, "inches": 26, "mode": "inches" },
    expectPrimary: "2 074,71 мм",
    expectSecondary: [
      { label: "Диаметр", value: "660,4 мм" },
      { label: "Диаметр в дюймах", value: "26" },
      { label: "Оборотов на километр", value: "482" },
      { label: "Радиус", value: "330,2 мм" },
    ],
  },
  {
    name: "граница: голый обод без покрышки",
    inputs: { "etrtoRim": 622, "etrtoTire": 0, "inches": 26, "mode": "etrto" },
    expectPrimary: "1 954,07 мм",
    expectSecondary: [
      { label: "Диаметр", value: "622 мм" },
      { label: "Диаметр в дюймах", value: "24,488" },
      { label: "Оборотов на километр", value: "511,75" },
      { label: "Радиус", value: "311 мм" },
    ],
  },
  {
    name: "нулевой обод отклоняется",
    inputs: { "etrtoRim": 0, "etrtoTire": 25, "inches": 26, "mode": "etrto" },
    expectPrimary: "—",
  },
  {
    name: "неизвестный режим отклоняется",
    inputs: { "etrtoRim": 622, "etrtoTire": 25, "inches": 26, "mode": "wheel" },
    expectPrimary: "—",
  },
];
