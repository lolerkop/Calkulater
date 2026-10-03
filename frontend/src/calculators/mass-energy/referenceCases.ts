import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Original independent Phase references retained with explicit subject corrections.
// Corrections and the unaltered39payloads: reports/originality-modern-physics-wave-7-reference-amendment.json.
// New edge values use independent SI constants, algebra and Decimal fixtures.
export const massEnergyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    "name": "обычный 1",
    "inputs": {
      "massG": 1
    },
    "expectPrimary": "8,988·10^13 Дж",
    "expectSecondary": [
      {
        "label": "В киловатт-часах",
        "value": "24 965 421,63 кВт·ч"
      },
      {
        "label": "В тоннах тротилового эквивалента",
        "value": "21 480,76 т"
      },
      {
        "label": "Масса",
        "value": "0,001 кг"
      },
      {
        "label": "В миллионах киловатт-часов",
        "value": "24,965 млн кВт·ч"
      }
    ]
  },
  {
    "name": "обычный 2",
    "inputs": {
      "massG": 0.5
    },
    "expectPrimary": "4,494·10^13 Дж",
    "expectSecondary": [
      {
        "label": "В киловатт-часах",
        "value": "12 482 710,82 кВт·ч"
      },
      {
        "label": "В тоннах тротилового эквивалента",
        "value": "10 740,38 т"
      },
      {
        "label": "Масса",
        "value": "0,0005 кг"
      },
      {
        "label": "В миллионах киловатт-часов",
        "value": "12,483 млн кВт·ч"
      }
    ]
  },
  {
    "name": "граница 3",
    "inputs": {
      "massG": 1000
    },
    "expectPrimary": "8,988·10^16 Дж",
    "expectSecondary": [
      {
        "label": "В киловатт-часах",
        "value": "24 965 421 631,58 кВт·ч"
      },
      {
        "label": "В тоннах тротилового эквивалента",
        "value": "21 480 764,31 т"
      },
      {
        "label": "Масса",
        "value": "1 кг"
      },
      {
        "label": "В миллионах киловатт-часов",
        "value": "24 965,42 млн кВт·ч"
      }
    ]
  },
  {
    "name": "масса должна быть больше нуля",
    "inputs": {
      "massG": 0
    },
    "expectPrimary": "—"
  },
  {
    "name": "поле не принимает отрицательные значения",
    "inputs": {
      "massG": -1
    },
    "expectPrimary": "—"
  },
  {
    "name": "rest energy outside Number range is rejected",
    "inputs": {
      "massG": 1e+308
    },
    "expectPrimary": "—"
  },
  {
    "name": "nanogram retains nonzero kg echo",
    "inputs": {
      "massG": 1e-09
    },
    "expectPrimary": "89 875,52 Дж"
  }
];
