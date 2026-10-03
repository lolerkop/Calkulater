import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const machNumberCopyDe: CalculatorCopy = {
 ...{
  "name": "Rechner für die Mach-Zahl",
  "slug": "mach-zahl-rechner",
  "shortDescription": "Mach-Zahl aus Geschwindigkeit und Lufttemperatur, mit benanntem Flugbereich.",
  "seoTitle": "Mach-Zahl berechnen — Schallgeschwindigkeit und Flugbereich",
  "seoDescription": "Mach-Zahl aus Geschwindigkeit relativ zur Luft und Temperatur im angenäherten Trockenluftmodell, mit Schallgeschwindigkeit und grober Bereichsklassifikation.",
  "h1": "Rechner für die Mach-Zahl",
  "keywords": [
    "Mach-Zahl berechnen",
    "Schallgeschwindigkeit",
    "Überschall",
    "Mach Zahl Flug"
  ]
},
 ...contract.de,
};
