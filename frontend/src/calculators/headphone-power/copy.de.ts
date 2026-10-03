import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const headphonePowerCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für die Kopfhörerleistung",
    "slug": "kopfhoerer-leistung",
    "shortDescription": "Lautstärke aus Empfindlichkeit und zugeführter Leistung.",
    "seoTitle": "Kopfhörerleistung berechnen — Lautstärke und Spannung",
    "seoDescription": "Berechne den Schalldruckpegel von Kopfhörern aus Empfindlichkeit, Impedanz und zugeführter Leistung, mit Spannung und Strom.",
    "h1": "Rechner für die Kopfhörerleistung",
    "keywords": [
      "Kopfhörerleistung",
      "Empfindlichkeit Kopfhörer",
      "Impedanz Kopfhörer",
      "Kopfhörerverstärker",
      "Kopfhoerer Leistung"
    ]
  },
  ...contract.de,
};
