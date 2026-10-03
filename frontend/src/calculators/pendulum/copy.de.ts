import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const pendulumCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Pendeldauer",
  "slug": "pendel-rechner",
  "shortDescription": "Schwingungsdauer eines Fadenpendels aus seiner Länge.",
  "seoTitle": "Pendeldauer berechnen — aus der Fadenlänge",
  "seoDescription": "Berechne Schwingungsdauer und Frequenz eines Fadenpendels aus seiner Länge und der Fallbeschleunigung.",
  "h1": "Rechner für die Pendeldauer",
  "keywords": [
    "Pendeldauer berechnen",
    "Schwingungsdauer",
    "Fadenpendel",
    "Pendel Frequenz"
  ]
},
  ...contract.de,
};
