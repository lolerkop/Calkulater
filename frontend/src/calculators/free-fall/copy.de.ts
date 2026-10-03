import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const freeFallCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für den freien Fall",
  "slug": "freier-fall-rechner",
  "shortDescription": "Aufprallgeschwindigkeit und Fallzeit aus einer Höhe oder aus einer Dauer.",
  "seoTitle": "Freier Fall berechnen — Geschwindigkeit und Zeit",
  "seoDescription": "Berechne Aufprallgeschwindigkeit und Fallzeit im freien Fall aus einer Höhe oder einer Dauer, mit der Fallbeschleunigung als Feld.",
  "h1": "Rechner für den freien Fall",
  "keywords": [
    "freier Fall berechnen",
    "Fallzeit",
    "Aufprallgeschwindigkeit",
    "Fallhöhe"
  ]
},
  ...contract.de,
};
