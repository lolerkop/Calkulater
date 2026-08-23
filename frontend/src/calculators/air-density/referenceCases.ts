import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const airDensityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "20 °C при 1013,25 гПа и 50 %",
    inputs: { t: 20, pressure: 1013.25, humidity: 50 },
    expectPrimary: "1,199 кг/м³",
    expectSecondary: [
      { label: "Плотность сухого воздуха", value: "1,204 кг/м³" },
      { label: "Давление водяного пара", value: "11,69 гПа" },
      { label: "Давление насыщения", value: "23,381 гПа" },
      { label: "Отклонение от 1,225", value: "-2,136 %" },
    ],
  },
  {
    name: "мороз −20 °C при 1030 гПа и 80 %",
    inputs: { t: -20, pressure: 1030, humidity: 80 },
    expectPrimary: "1,417 кг/м³",
    expectSecondary: [
      { label: "Плотность сухого воздуха", value: "1,417 кг/м³" },
      { label: "Давление водяного пара", value: "0,997 гПа" },
      { label: "Давление насыщения", value: "1,246 гПа" },
      { label: "Отклонение от 1,225", value: "15,663 %" },
    ],
  },
  {
    name: "граница: сухой воздух",
    inputs: { t: 15, pressure: 1013.25, humidity: 0 },
    expectPrimary: "1,225 кг/м³",
    expectSecondary: [
      { label: "Плотность сухого воздуха", value: "1,225 кг/м³" },
      { label: "Давление водяного пара", value: "0 гПа" },
      { label: "Давление насыщения", value: "17,052 гПа" },
      { label: "Отклонение от 1,225", value: "-0,0018 %" },
    ],
  },
  {
    name: "влажность больше ста отклоняется",
    inputs: { t: 20, pressure: 1013.25, humidity: 150 },
    expectPrimary: "—",
  },
  {
    name: "нулевое давление отклоняется",
    inputs: { t: 20, pressure: 0, humidity: 50 },
    expectPrimary: "—",
  },
];
