import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const inverterPowerCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für die Leistung eines Wechselrichters",
    "slug": "wechselrichter-leistung",
    "shortDescription": "Was ein Wechselrichter aus dem Akku zieht, aus Ausgangsleistung und Wirkungsgrad.",
    "seoTitle": "Wechselrichter berechnen — Eingangsleistung und Batteriestrom",
    "seoDescription": "Ermittle Eingangsleistung, Batteriestrom und Verluste eines Wechselrichters aus Ausgangsleistung, Wirkungsgrad und Batteriespannung.",
    "h1": "Rechner für die Leistung eines Wechselrichters",
    "keywords": [
      "Wechselrichter Leistung berechnen",
      "Stromaufnahme Wechselrichter",
      "Wirkungsgrad Wechselrichter"
    ]
  },
  ...contract.de,
};
