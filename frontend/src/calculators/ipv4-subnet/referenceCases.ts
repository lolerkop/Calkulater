import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   /24: маска 255.255.255.0; сеть 192.168.1.0; широковещательный .255; узлов 2⁸ − 2 = 254
//   /20: маска 255.255.240.0; сеть 10.0.0.0; узлов 2¹² − 2 = 4094
//   /31: два адреса точка-точка, широковещательного нет; /32: единственный адрес
export const ipv4SubnetReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сеть 192.168.1.10/24",
    inputs: { "address": "192.168.1.10", "prefix": 24 },
    expectPrimary: "192.168.1.0",
    expectSecondary: [{ label: "Маска подсети", value: "255.255.255.0" }, { label: "Широковещательный", value: "192.168.1.255" }, { label: "Первый узел", value: "192.168.1.1" }, { label: "Узлов в сети", value: "254" }],
  },
  {
    name: "сеть 10.0.5.77/20 — маска не по границе октета",
    inputs: { "address": "10.0.5.77", "prefix": 20 },
    expectPrimary: "10.0.0.0",
    expectSecondary: [{ label: "Маска подсети", value: "255.255.240.0" }, { label: "Широковещательный", value: "10.0.15.255" }, { label: "Узлов в сети", value: "4 094" }],
  },
  {
    name: "граница: /31 — два адреса точка-точка без широковещательного",
    inputs: { "address": "192.168.1.10", "prefix": 31 },
    expectPrimary: "192.168.1.10",
    expectSecondary: [{ label: "Узлов в сети", value: "2" }, { label: "Первый узел", value: "192.168.1.10" }, { label: "Последний узел", value: "192.168.1.11" }],
  },
  {
    name: "граница: /32 — единственный адрес",
    inputs: { "address": "192.168.1.10", "prefix": 32 },
    expectPrimary: "192.168.1.10",
    expectSecondary: [{ label: "Узлов в сети", value: "1" }, { label: "Маска подсети", value: "255.255.255.255" }],
  },
  {
    name: "октет больше 255 отклоняется",
    inputs: { "address": "192.168.1.256", "prefix": 24 },
    expectPrimary: "—",
  },
];
