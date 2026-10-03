import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für die Biegespannung",
  "slug": "biegespannung-rechner",
  "shortDescription": "Biegespannung aus dem Moment und der Form des Querschnitts.",
  "seoTitle": "Biegespannung berechnen — Widerstandsmoment",
  "seoDescription": "Berechne die Biegespannung in einem Träger aus dem Biegemoment und der Querschnittsform, Rechteck oder Kreis, mit dem Widerstandsmoment.",
  "h1": "Rechner für die Biegespannung",
  "keywords": [
    "Biegespannung berechnen",
    "Widerstandsmoment",
    "Träger Spannung",
    "Widerstandsmoment berechnen"
  ]
};

export const beamStressCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
