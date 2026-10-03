import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const stressStrainCopyDe: CalculatorCopy = {
 ...{
  "name": "Rechner für Spannung, Dehnung und Elastizitätsmodul",
  "slug": "spannung-dehnung-rechner",
  "shortDescription": "Spannung, Dehnung und Elastizitätsmodul einer Probe im Zugversuch.",
  "seoTitle": "Spannung und Dehnung berechnen — Elastizitätsmodul aus dem Zugversuch",
  "seoDescription": "Berechne Spannung, Dehnung und Elastizitätsmodul im Zug aus Kraft, Querschnitt, Ausgangslänge und gemessener Verlängerung.",
  "h1": "Rechner für Spannung, Dehnung und Elastizitätsmodul",
  "keywords": [
    "Elastizitätsmodul berechnen",
    "Zugspannung",
    "Dehnung berechnen",
    "Zugversuch"
  ]
},
 ...contract.de,
};
