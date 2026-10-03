import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const centripetalForceCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Zentripetalkraft",
  "slug": "zentripetalkraft-rechner",
  "shortDescription": "Zentripetalkraft, Beschleunigung, Winkelgeschwindigkeit und Umlaufdauer.",
  "seoTitle": "Zentripetalkraft berechnen — Kreisbewegung",
  "seoDescription": "Berechne die Zentripetalkraft aus Masse, Geschwindigkeit und Radius, samt Zentripetalbeschleunigung, Winkelgeschwindigkeit und Umlaufdauer.",
  "h1": "Rechner für die Zentripetalkraft",
  "keywords": [
    "Zentripetalkraft berechnen",
    "Kreisbewegung",
    "Winkelgeschwindigkeit",
    "Umlaufdauer"
  ]
},
  ...contract.de,
};
