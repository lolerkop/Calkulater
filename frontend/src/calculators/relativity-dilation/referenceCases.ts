import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Original independent Phase references retained with explicit subject corrections.
// Corrections and the unaltered39payloads: reports/originality-modern-physics-wave-7-reference-amendment.json.
// New edge values use independent SI constants, algebra and Decimal fixtures.
export const relativityDilationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "половина скорости света",
    "inputs": {
      "beta": 0.5,
      "properTime": 1
    },
    "expectPrimary": "1,155 с",
    "expectSecondary": [
      {
        "label": "Множитель Лоренца",
        "value": "1,155"
      },
      {
        "label": "Длина от собственной",
        "value": "86,6025 %"
      },
      {
        "label": "Скорость",
        "value": "149 896 229 м/с"
      },
      {
        "label": "Разница во времени",
        "value": "0,1547 с"
      }
    ]
  },
  {
    "name": "0,99 скорости света за год",
    "inputs": {
      "beta": 0.99,
      "properTime": 31557600
    },
    "expectPrimary": "223 705 895,15 с",
    "expectSecondary": [
      {
        "label": "Множитель Лоренца",
        "value": "7,089"
      },
      {
        "label": "Длина от собственной",
        "value": "14,1067 %"
      },
      {
        "label": "Скорость",
        "value": "296 794 533,42 м/с"
      },
      {
        "label": "Разница во времени",
        "value": "192 148 295,15 с"
      }
    ]
  },
  {
    "name": "граница: покой",
    "inputs": {
      "beta": 0,
      "properTime": 1
    },
    "expectPrimary": "1 с",
    "expectSecondary": [
      {
        "label": "Множитель Лоренца",
        "value": "1"
      },
      {
        "label": "Длина от собственной",
        "value": "100 %"
      },
      {
        "label": "Скорость",
        "value": "0 м/с"
      },
      {
        "label": "Разница во времени",
        "value": "0 с"
      }
    ]
  },
  {
    "name": "скорость света отклоняется",
    "inputs": {
      "beta": 1,
      "properTime": 1
    },
    "expectPrimary": "—"
  },
  {
    "name": "отрицательная доля отклоняется",
    "inputs": {
      "beta": -0.5,
      "properTime": 1
    },
    "expectPrimary": "—"
  },
  {
    "name": "tiny beta retains independently scaled difference",
    "inputs": {
      "beta": 1e-09,
      "properTime": 1e+20
    },
    "expectPrimary": "1,000·10^20 с"
  },
  {
    "name": "blank beta is not rest",
    "inputs": {
      "beta": "",
      "properTime": 1
    },
    "expectPrimary": "—"
  }
];
