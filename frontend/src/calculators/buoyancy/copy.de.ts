import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const buoyancyCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Auftriebskraft",
  "slug": "auftriebskraft-rechner",
  "shortDescription": "Archimedische Kraft, das Gewicht des Körpers und ob er schwimmt.",
  "seoTitle": "Auftriebskraft berechnen — Archimedisches Prinzip",
  "seoDescription": "Berechne die Auftriebskraft aus dem Körpervolumen und der Dichte des Mediums, mit Gewicht, resultierender Kraft und verdrängter Masse.",
  "h1": "Rechner für die Auftriebskraft",
  "keywords": [
    "Auftriebskraft berechnen",
    "Archimedisches Prinzip",
    "Verdrängung",
    "schwimmt oder sinkt"
  ]
},
  ...contract.de,
};
