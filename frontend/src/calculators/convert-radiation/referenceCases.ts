import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   1 мЗв = 1000 мкЗв; 250 мбэр = 2,5 мЗв (1 бэр = 0,01 Зв точно)
export const convertRadiationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "миллизиверты в микрозиверты",
    inputs: { "from": "mSv", "to": "uSv", "value": 1 },
    expectPrimary: "1 000",
    expectSecondary: [
      { label: "Исходное значение", value: "1" },
      { label: "Соотношение", value: "1 000" },
    ],
  },
  {
    name: "миллибэры в миллизиверты",
    inputs: { "from": "mrem", "to": "mSv", "value": 250 },
    expectPrimary: "2,5",
    expectSecondary: [
      { label: "Исходное значение", value: "250" },
      { label: "Соотношение", value: "0,01" },
    ],
  },
  {
    name: "граница: нулевая доза",
    inputs: { "from": "Sv", "to": "rem", "value": 0 },
    expectPrimary: "0",
    expectSecondary: [
      { label: "Исходное значение", value: "0" },
      { label: "Соотношение", value: "100" },
    ],
  },
  {
    name: "отрицательная доза отклоняется",
    inputs: { "from": "Sv", "to": "rem", "value": -1 },
    expectPrimary: "—",
  },
  {
    name: "грей вне области отклоняется",
    inputs: { "from": "Gy", "to": "Sv", "value": 1 },
    expectPrimary: "—",
  },
];
