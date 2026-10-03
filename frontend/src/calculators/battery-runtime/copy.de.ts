import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const batteryRuntimeCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Laufzeit eines Akkus",
  "slug": "akku-laufzeit-rechner",
  "shortDescription": "Wie lange ein Akku eine gegebene Last trägt.",
  "seoTitle": "Laufzeit eines Akkus berechnen — Stunden aus Kapazität und Last",
  "seoDescription": "Schätze, wie lange ein Akku eine Last trägt, aus Kapazität, Spannung, Entladetiefe und Wirkungsgrad der Wandlung.",
  "h1": "Rechner für die Laufzeit eines Akkus",
  "keywords": [
    "Akku Laufzeit berechnen",
    "Betriebsdauer Akku",
    "Amperestunden in Wattstunden",
    "Akku Laufzeit"
  ]
},
  ...contractContent.de,
};
