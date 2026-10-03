import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const voltageDividerCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für den Spannungsteiler",
    "slug": "spannungsteiler-rechner",
    "shortDescription": "Ausgangsspannung, Strom und Leistung je Zweig eines Teilers aus zwei Widerständen.",
    "seoTitle": "Spannungsteiler berechnen — Ausgang, Strom und Leistung",
    "seoDescription": "Berechne Ausgangsspannung, Strom und Verlustleistung je Zweig eines Spannungsteilers aus zwei Widerständen und der Eingangsspannung.",
    "h1": "Rechner für den Spannungsteiler",
    "keywords": [
      "Spannungsteiler berechnen",
      "Widerstandsteiler",
      "Spannung herabsetzen",
      "Ausgangsspannung Teiler"
    ]
  },
  ...contract.de,
};
