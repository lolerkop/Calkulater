import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Sockelleisten-Rechner",
  "slug": "sockelleisten-rechner",
  "shortDescription": "Sockelleistenlänge im Raum, ohne Türöffnungen, aufgeteilt in Leisten.",
  "seoTitle": "Sockelleisten-Rechner — Länge und Anzahl der Leisten",
  "seoDescription": "Ermittle die Sockelleistenlänge aus den Raummaßen, abzüglich Türöffnungen, mit Verschnittzuschlag und Anzahl der Leisten.",
  "h1": "Sockelleisten-Rechner",
  "keywords": [
    "Sockelleisten",
    "Fußleisten berechnen",
    "Verschnitt",
    "Raumumfang",
    "Fussleisten berechnen"
  ]
};
export const skirtingCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
