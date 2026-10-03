import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const rmsVoltageCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für den Effektivwert der Spannung",
    "slug": "effektivwert-spannung",
    "shortDescription": "Zwischen Scheitelwert, Spitze-Spitze und Effektivwert umrechnen, für Sinus, Rechteck und Dreieck.",
    "seoTitle": "Effektivwert der Spannung berechnen — Scheitelwert und Spitze-Spitze",
    "seoDescription": "Rechne Scheitelwert, Spitze-Spitze-Wert und Effektivwert der Spannung für Sinus-, Rechteck- und Dreieckform um.",
    "h1": "Rechner für den Effektivwert der Spannung",
    "keywords": [
      "Effektivwert Spannung",
      "Scheitelwert",
      "Spitze-Spitze",
      "Scheitelfaktor"
    ]
  },
  ...contract.de,
};
