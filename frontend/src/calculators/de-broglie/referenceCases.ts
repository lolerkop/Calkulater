import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Original independent Phase references retained with explicit subject corrections.
// Corrections and the unaltered39payloads: reports/originality-modern-physics-wave-7-reference-amendment.json.
// New edge values use independent SI constants, algebra and Decimal fixtures.
export const deBroglieReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "электрон при 1000 км/с",
    "inputs": {
      "mass27": 0.00091093837,
      "velocityKmS": 1000
    },
    "expectPrimary": "7,274·10^-10 м",
    "expectSecondary": [
      {
        "label": "Импульс",
        "value": "9,109·10^-25 кг·м/с"
      },
      {
        "label": "Доля скорости света",
        "value": "0,003336"
      }
    ]
  },
  {
    "name": "протон при 10 км/с",
    "inputs": {
      "mass27": 1.67262192,
      "velocityKmS": 10
    },
    "expectPrimary": "3,961·10^-11 м",
    "expectSecondary": [
      {
        "label": "Импульс",
        "value": "1,673·10^-23 кг·м/с"
      },
      {
        "label": "Доля скорости света",
        "value": "3,336·10^-5"
      }
    ]
  },
  {
    "name": "единичные масса и скорость",
    "inputs": {
      "mass27": 1,
      "velocityKmS": 1
    },
    "expectPrimary": "6,626·10^-10 м",
    "expectSecondary": [
      {
        "label": "Импульс",
        "value": "1,000·10^-24 кг·м/с"
      },
      {
        "label": "Доля скорости света",
        "value": "3,336·10^-6"
      }
    ]
  },
  {
    "name": "нулевая масса отклоняется",
    "inputs": {
      "mass27": 0,
      "velocityKmS": 1000
    },
    "expectPrimary": "—"
  },
  {
    "name": "нулевая скорость отклоняется",
    "inputs": {
      "mass27": 0.00091093837,
      "velocityKmS": 0
    },
    "expectPrimary": "—"
  },
  {
    "name": "massive particle at c is rejected",
    "inputs": {
      "mass27": 1,
      "velocityKmS": 299792.458
    },
    "expectPrimary": "—"
  },
  {
    "name": "lexical nonzero mass underflow is rejected",
    "inputs": {
      "mass27": "1e-999",
      "velocityKmS": 1
    },
    "expectPrimary": "—"
  }
];
