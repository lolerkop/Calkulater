import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für das Streifenfundament",
  "slug": "streifenfundament-rechner",
  "shortDescription": "Betonvolumen für einen Streifen aus Länge, Breite und Tiefe.",
  "seoTitle": "Streifenfundament berechnen — Betonvolumen",
  "seoDescription": "Berechne das Betonvolumen für ein Streifenfundament aus Länge, Breite und Tiefe des Streifens, mit Zuschlag.",
  "h1": "Rechner für das Streifenfundament",
  "keywords": [
    "Streifenfundament berechnen",
    "Beton Streifenfundament",
    "Fundament Kubikmeter"
  ]
};
export const stripFoundationCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
