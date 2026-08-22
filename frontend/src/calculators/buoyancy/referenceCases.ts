import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const buoyancyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "тело 15 кг объёмом 20 литров в воде",
    inputs: { volume: 0.02, rhoFluid: 1000, mass: 15 },
    expectPrimary: "196,13 Н",
    expectSecondary: [
      { label: "Вес тела", value: "147,1 Н" },
      { label: "Равнодействующая", value: "49,033 Н" },
      { label: "Вытесненная масса", value: "20 кг" },
    ],
  },
  {
    name: "то же в морской воде",
    inputs: { volume: 0.05, rhoFluid: 1025, mass: 60 },
    expectPrimary: "502,59 Н",
    expectSecondary: [
      { label: "Вес тела", value: "588,4 Н" },
      { label: "Равнодействующая", value: "-85,808 Н" },
      { label: "Вытесненная масса", value: "51,25 кг" },
    ],
  },
  {
    name: "нейтральная плавучесть",
    inputs: { volume: 0.015, rhoFluid: 1000, mass: 15 },
    expectPrimary: "147,1 Н",
    expectSecondary: [
      { label: "Вес тела", value: "147,1 Н" },
      { label: "Равнодействующая", value: "0 Н" },
      { label: "Вытесненная масса", value: "15 кг" },
    ],
  },
  {
    name: "нулевой объём отклоняется",
    inputs: { volume: 0, rhoFluid: 1000, mass: 15 },
    expectPrimary: "—",
  },
  {
    name: "нулевая плотность среды отклоняется",
    inputs: { volume: 0.02, rhoFluid: 0, mass: 15 },
    expectPrimary: "—",
  },
];
