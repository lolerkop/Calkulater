import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   0: n·S · 1: S · 5: (n−1)S · 6: (n−2)S · 10: n/2·S
export const raidReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "RAID 5 из 6 дисков по 4 ТБ",
    inputs: { "level": "5", "disks": 6, "sizeTb": 4 },
    expectPrimary: "20 ТБ",
    expectSecondary: [{ label: "Сырая ёмкость", value: "24 ТБ" }, { label: "Допустимо отказов", value: "1" }, { label: "Эффективность", value: "83,33%" }, { label: "Тип массива", value: "чётность" }],
  },
  {
    name: "RAID 6 из 8 дисков по 12 ТБ",
    inputs: { "level": "6", "disks": 8, "sizeTb": 12 },
    expectPrimary: "72 ТБ",
    expectSecondary: [{ label: "Сырая ёмкость", value: "96 ТБ" }, { label: "Допустимо отказов", value: "2" }, { label: "Эффективность", value: "75,00%" }, { label: "Тип массива", value: "двойная чётность" }],
  },
  {
    name: "RAID 1 из двух дисков — половина ёмкости",
    inputs: { "level": "1", "disks": 2, "sizeTb": 8 },
    expectPrimary: "8 ТБ",
    expectSecondary: [{ label: "Сырая ёмкость", value: "16 ТБ" }, { label: "Допустимо отказов", value: "1" }, { label: "Эффективность", value: "50,00%" }, { label: "Тип массива", value: "зеркало" }],
  },
  {
    name: "RAID 5 из двух дисков отклоняется",
    inputs: { "level": "5", "disks": 2, "sizeTb": 4 },
    expectPrimary: "—",
  },
];
