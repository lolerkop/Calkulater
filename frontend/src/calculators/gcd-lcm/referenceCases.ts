import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   НОД по Евклиду попарно; НОК = a·b/НОД(a,b) накопительно — ТОЧНЫЕ целые
export const gcdLcmReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "12 и 18",
    inputs: { "numbers": "12 18" },
    expectPrimary: "6",
    expectSecondary: [{ label: "НОК", value: "36" }, { label: "Чисел", value: "2" }, { label: "Взаимно простые", value: "нет" }],
  },
  {
    name: "четыре числа",
    inputs: { "numbers": "24 36 60 84" },
    expectPrimary: "12",
    expectSecondary: [{ label: "НОК", value: "2 520" }, { label: "Чисел", value: "4" }, { label: "Взаимно простые", value: "нет" }],
  },
  {
    name: "взаимно простые 8 и 15",
    inputs: { "numbers": "8 15" },
    expectPrimary: "1",
    expectSecondary: [{ label: "НОК", value: "120" }, { label: "Чисел", value: "2" }, { label: "Взаимно простые", value: "да" }],
  },
  {
    name: "дробное число отклоняется",
    inputs: { "numbers": "12 7,5" },
    expectPrimary: "—",
  },
];
