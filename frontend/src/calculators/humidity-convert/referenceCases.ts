import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const humidityConvertReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "20 °C при 50 %",
    inputs: { t: 20, rh: 50, pressure: 1013.25 },
    expectPrimary: "8,642 г/м³",
    expectSecondary: [
      { label: "Давление пара", value: "11,69 гПа" },
      { label: "Давление насыщения", value: "23,381 гПа" },
      { label: "Влагосодержание", value: "7,26 г/кг" },
      { label: "Максимум при этой температуре", value: "17,283 г/м³" },
    ],
  },
  {
    name: "жара 35 °C при 90 %",
    inputs: { t: 35, rh: 90, pressure: 1005 },
    expectPrimary: "35,582 г/м³",
    expectSecondary: [
      { label: "Давление пара", value: "50,598 гПа" },
      { label: "Давление насыщения", value: "56,221 гПа" },
      { label: "Влагосодержание", value: "32,974 г/кг" },
      { label: "Максимум при этой температуре", value: "39,536 г/м³" },
    ],
  },
  {
    name: "граница: сухой воздух",
    inputs: { t: 20, rh: 0, pressure: 1013.25 },
    expectPrimary: "0 г/м³",
    expectSecondary: [
      { label: "Давление пара", value: "0 гПа" },
      { label: "Давление насыщения", value: "23,381 гПа" },
      { label: "Влагосодержание", value: "0 г/кг" },
      { label: "Максимум при этой температуре", value: "17,283 г/м³" },
    ],
  },
  {
    name: "влажность больше ста отклоняется",
    inputs: { t: 20, rh: 101, pressure: 1013.25 },
    expectPrimary: "—",
  },
  {
    name: "температура ниже абсолютного нуля отклоняется",
    inputs: { t: -300, rh: 50, pressure: 1013.25 },
    expectPrimary: "—",
  },
];
