import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const ledResistorCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für den LED-Vorwiderstand",
    "slug": "led-vorwiderstand",
    "shortDescription": "Vorwiderstand für eine LED, samt der Leistung, die er umsetzt.",
    "seoTitle": "LED-Vorwiderstand berechnen — Widerstand und Leistung",
    "seoDescription": "Berechne den Vorwiderstand für eine LED aus Versorgungsspannung, Flussspannung und Strom, mit der Verlustleistung des Widerstands.",
    "h1": "Rechner für den LED-Vorwiderstand",
    "keywords": [
      "LED-Vorwiderstand berechnen",
      "Vorwiderstand LED",
      "Strombegrenzung Widerstand"
    ]
  },
  ...contract.de,
};
