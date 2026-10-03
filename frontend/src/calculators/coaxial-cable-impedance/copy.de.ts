import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const coaxialCableImpedanceCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für die Impedanz eines Koaxialkabels",
    "slug": "koaxialkabel-impedanz",
    "shortDescription": "Wellenwiderstand eines Koaxialkabels aus Leiter- und Schirmdurchmesser und dem Dielektrikum.",
    "seoTitle": "Impedanz eines Koaxialkabels berechnen",
    "seoDescription": "Berechne den Wellenwiderstand eines Koaxialkabels aus Leiter- und Schirmdurchmesser, mit Kapazität je Meter und Verkürzungsfaktor.",
    "h1": "Rechner für die Impedanz eines Koaxialkabels",
    "keywords": [
      "Wellenwiderstand",
      "Koaxialkabel",
      "Verkürzungsfaktor",
      "50 Ohm",
      "Verkuerzungsfaktor"
    ]
  },
  ...contract.de,
};
