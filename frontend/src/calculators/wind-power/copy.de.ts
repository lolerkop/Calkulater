import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const windPowerCopyDe: CalculatorCopy = {
 ...{
  "name": "Rechner für die Windleistung",
  "slug": "windleistung-rechner",
  "shortDescription": "Leistung im Wind und die Leistung, die ein Rotor entnehmen kann, gegen die Betz-Grenze.",
  "seoTitle": "Windleistung berechnen — Leistung im Wind und Ertrag einer Anlage",
  "seoDescription": "Momentane mechanische Rotorleistung, exakte Betz-Grenze 16/27 und Energie für 24 Stunden unter konstanten Bedingungen.",
  "h1": "Rechner für die Windleistung",
  "keywords": [
    "Windleistung berechnen",
    "Windkraft Ertrag",
    "Betz-Grenze",
    "Leistungsbeiwert"
  ]
},
 ...contract.de,
};
