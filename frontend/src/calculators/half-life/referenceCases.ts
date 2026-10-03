import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Original independent Phase references retained with explicit subject corrections.
// Corrections and the unaltered39payloads: reports/originality-modern-physics-wave-7-reference-amendment.json.
// New edge values use independent SI constants, algebra and Decimal fixtures.
export const halfLifeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "обычный 1",
    "inputs": {
      "mode": "remaining",
      "n0": 100,
      "half": 5730,
      "t": 11460
    },
    "expectPrimary": "25 г",
    "expectSecondary": [
      {
        "label": "Распалось",
        "value": "75 г"
      },
      {
        "label": "Осталось доли",
        "value": "25 %"
      },
      {
        "label": "Периодов полураспада прошло",
        "value": "2"
      },
      {
        "label": "Среднее время жизни",
        "value": "8 266,64 лет"
      }
    ]
  },
  {
    "name": "обычный 2",
    "inputs": {
      "mode": "remaining",
      "n0": 8,
      "half": 30.17,
      "t": 90
    },
    "expectPrimary": "1,012 г",
    "expectSecondary": [
      {
        "label": "Распалось",
        "value": "6,988 г"
      },
      {
        "label": "Осталось доли",
        "value": "12,647 %"
      },
      {
        "label": "Периодов полураспада прошло",
        "value": "2,983"
      },
      {
        "label": "Среднее время жизни",
        "value": "43,526 лет"
      }
    ]
  },
  {
    "name": "граница 3",
    "inputs": {
      "mode": "time",
      "n0": 100,
      "half": 5730,
      "left": 50
    },
    "expectPrimary": "5 730 лет",
    "expectSecondary": [
      {
        "label": "Периодов полураспада",
        "value": "1"
      },
      {
        "label": "Осталось доли",
        "value": "50 %"
      },
      {
        "label": "Распалось",
        "value": "50 г"
      },
      {
        "label": "Среднее время жизни",
        "value": "8 266,64 лет"
      }
    ]
  },
  {
    "name": "период полураспада должен быть больше нуля",
    "inputs": {
      "mode": "remaining",
      "n0": 100,
      "half": 0,
      "t": 10
    },
    "expectPrimary": "—"
  },
  {
    "name": "остаток не может превышать исходное количество",
    "inputs": {
      "mode": "time",
      "n0": 10,
      "half": 5,
      "left": 20
    },
    "expectPrimary": "—"
  },
  {
    "name": "scaled decay survives standalone factor underflow",
    "inputs": {
      "mode": "remaining",
      "n0": 1e+308,
      "half": 1,
      "t": 1100
    },
    "expectPrimary": "7,362·10^-24 г"
  },
  {
    "name": "remaining amount equal to initial means zero wait",
    "inputs": {
      "mode": "time",
      "n0": 100,
      "half": 5730,
      "left": 100
    },
    "expectPrimary": "0 лет"
  }
];
