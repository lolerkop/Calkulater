import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const stoppingDistanceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "90 км/ч по сухому асфальту",
    inputs: { speed: 90, reaction: 1, mu: 0.7, grade: 0 },
    expectPrimary: "70,523 м",
    expectSecondary: [
      { label: "Путь за время реакции", value: "25 м" },
      { label: "Тормозной путь", value: "45,523 м" },
      { label: "Замедление", value: "6,865 м/с²" },
      { label: "Время торможения", value: "3,642 с" },
    ],
  },
  {
    name: "60 км/ч по мокрой дороге под уклон",
    inputs: { speed: 60, reaction: 1.2, mu: 0.4, grade: -5 },
    expectPrimary: "60,465 м",
    expectSecondary: [
      { label: "Путь за время реакции", value: "20 м" },
      { label: "Тормозной путь", value: "40,465 м" },
      { label: "Замедление", value: "3,432 м/с²" },
      { label: "Время торможения", value: "4,856 с" },
    ],
  },
  {
    name: "граница: нулевое время реакции",
    inputs: { speed: 50, reaction: 0, mu: 0.7, grade: 0 },
    expectPrimary: "14,05 м",
    expectSecondary: [
      { label: "Путь за время реакции", value: "0 м" },
      { label: "Тормозной путь", value: "14,05 м" },
      { label: "Замедление", value: "6,865 м/с²" },
      { label: "Время торможения", value: "2,023 с" },
    ],
  },
  {
    name: "нулевая скорость отклоняется",
    inputs: { speed: 0, reaction: 1, mu: 0.7, grade: 0 },
    expectPrimary: "—",
  },
  {
    name: "уклон круче сцепления отклоняется",
    inputs: { speed: 90, reaction: 1, mu: 0.3, grade: -40 },
    expectPrimary: "—",
  },
];
