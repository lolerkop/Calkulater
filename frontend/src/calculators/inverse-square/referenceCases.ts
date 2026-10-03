import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Original independent Phase references retained with explicit subject corrections.
// Corrections and the unaltered39payloads: reports/originality-modern-physics-wave-7-reference-amendment.json.
// New edge values use independent SI constants, algebra and Decimal fixtures.
export const inverseSquareReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "втрое дальше",
    "inputs": {
      "i1": 1000,
      "d1": 1,
      "d2": 3
    },
    "expectPrimary": "111,11",
    "expectSecondary": [
      {
        "label": "Во сколько раз изменилась",
        "value": "0,1111"
      },
      {
        "label": "Отношение расстояний",
        "value": "3"
      },
      {
        "label": "В процентах от исходной",
        "value": "11,1111 %"
      }
    ]
  },
  {
    "name": "вдвое ближе",
    "inputs": {
      "i1": 500,
      "d1": 2,
      "d2": 1
    },
    "expectPrimary": "2 000",
    "expectSecondary": [
      {
        "label": "Во сколько раз изменилась",
        "value": "4"
      },
      {
        "label": "Отношение расстояний",
        "value": "0,5"
      },
      {
        "label": "В процентах от исходной",
        "value": "400 %"
      }
    ]
  },
  {
    "name": "то же расстояние",
    "inputs": {
      "i1": 1000,
      "d1": 2,
      "d2": 2
    },
    "expectPrimary": "1 000",
    "expectSecondary": [
      {
        "label": "Во сколько раз изменилась",
        "value": "1"
      },
      {
        "label": "Отношение расстояний",
        "value": "1"
      },
      {
        "label": "В процентах от исходной",
        "value": "100 %"
      }
    ]
  },
  {
    "name": "нулевое расстояние отклоняется",
    "inputs": {
      "i1": 1000,
      "d1": 1,
      "d2": 0
    },
    "expectPrimary": "—"
  },
  {
    "name": "нулевая интенсивность: нулевой результат",
    "inputs": {
      "i1": 0,
      "d1": 1,
      "d2": 3
    },
    "expectPrimary": "0"
  },
  {
    "name": "scaled finite intensity survives intermediate squared underflow",
    "inputs": {
      "i1": 1e+300,
      "d1": 1e-200,
      "d2": 1
    },
    "expectPrimary": "1,000·10^-100"
  },
  {
    "name": "negative initial intensity is rejected",
    "inputs": {
      "i1": -1,
      "d1": 1,
      "d2": 2
    },
    "expectPrimary": "—"
  }
];
