import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const windPowerReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { d: 3, v: 7, cp: 0.4, rho: 1.225 },
    expectPrimary: "0,594 кВт",
    expectSecondary: [
      { label: "Мощность потока", value: "1,485 кВт" },
      { label: "Ометаемая площадь", value: "7,069 м²" },
      { label: "Предел Бетца", value: "0,8806 кВт" },
      { label: "Выработка за сутки", value: "14,256 кВт·ч" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { d: 50, v: 12, cp: 0.45, rho: 1.2 },
    expectPrimary: "916,09 кВт",
    expectSecondary: [
      { label: "Мощность потока", value: "2 035,75 кВт" },
      { label: "Ометаемая площадь", value: "1 963,5 м²" },
      { label: "Предел Бетца", value: "1 207,2 кВт" },
      { label: "Выработка за сутки", value: "21 986,12 кВт·ч" },
    ],
  },
  {
    name: "граница 3",
    inputs: { d: 1, v: 0, cp: 0.3, rho: 1.225 },
    expectPrimary: "0 кВт",
    expectSecondary: [
      { label: "Мощность потока", value: "0 кВт" },
      { label: "Ометаемая площадь", value: "0,7854 м²" },
      { label: "Предел Бетца", value: "0 кВт" },
      { label: "Выработка за сутки", value: "0 кВт·ч" },
    ],
  },
  {
    name: "диаметр должен быть больше нуля",
    inputs: { d: 0, v: 7, cp: 0.4, rho: 1.225 },
    expectPrimary: "—",
  },
  {
    name: "коэффициент использования не может превышать предел Бетца 0,593",
    inputs: { d: 3, v: 7, cp: 0.8, rho: 1.225 },
    expectPrimary: "—",
  },
];
