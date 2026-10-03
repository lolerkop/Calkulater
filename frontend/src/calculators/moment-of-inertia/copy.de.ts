import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const momentOfInertiaCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für das Trägheitsmoment",
  "slug": "traegheitsmoment-rechner",
  "shortDescription": "Trägheitsmoment von Stab, Scheibe, Ring oder Kugel um eine Achse.",
  "seoTitle": "Trägheitsmoment berechnen — Stab, Scheibe, Ring, Kugel",
  "seoDescription": "Berechne das Trägheitsmoment eines Körpers um eine Achse aus Masse und Größe für sechs klassische Formen, mit dem Trägheitsradius.",
  "h1": "Rechner für das Trägheitsmoment",
  "keywords": [
    "Trägheitsmoment berechnen",
    "Trägheitsradius",
    "Rotation Trägheit",
    "Traegheitsmoment"
  ]
},
  ...contract.de,
};
