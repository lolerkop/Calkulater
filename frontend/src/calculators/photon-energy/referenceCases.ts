import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const photonEnergyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "зелёный свет 550 нм",
    inputs: { wavelengthNm: 550 },
    expectPrimary: "3,612·10^-19 Дж",
    expectSecondary: [
      { label: "В электронвольтах", value: "2,254 эВ" },
      { label: "Частота", value: "5,451·10^14 Гц" },
      { label: "Волновое число", value: "18 181,82 1/см" },
      { label: "Длина волны", value: "550 нм" },
    ],
  },
  {
    name: "ультрафиолет 200 нм",
    inputs: { wavelengthNm: 200 },
    expectPrimary: "9,932·10^-19 Дж",
    expectSecondary: [
      { label: "В электронвольтах", value: "6,199 эВ" },
      { label: "Частота", value: "1,499·10^15 Гц" },
      { label: "Волновое число", value: "50 000 1/см" },
      { label: "Длина волны", value: "200 нм" },
    ],
  },
  {
    name: "граница: один нанометр",
    inputs: { wavelengthNm: 1 },
    expectPrimary: "1,986·10^-16 Дж",
    expectSecondary: [
      { label: "В электронвольтах", value: "1 239,84 эВ" },
      { label: "Частота", value: "2,998·10^17 Гц" },
      { label: "Волновое число", value: "10 000 000 1/см" },
      { label: "Длина волны", value: "1 нм" },
    ],
  },
  {
    name: "нулевая длина волны отклоняется",
    inputs: { wavelengthNm: 0 },
    expectPrimary: "—",
  },
  {
    name: "отрицательная длина волны отклоняется",
    inputs: { wavelengthNm: -550 },
    expectPrimary: "—",
  },
];
