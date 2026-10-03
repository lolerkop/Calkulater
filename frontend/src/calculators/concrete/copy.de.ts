import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Betonrechner",
  "slug": "beton-rechner",
  "shortDescription": "Betonvolumen für Platte, Streifen oder Stützen, mit Zuschlag.",
  "seoTitle": "Beton berechnen — Volumen für Platte, Streifen oder Stützen",
  "seoDescription": "Berechne das Betonvolumen für eine Platte, ein Streifenfundament oder Stützen, mit einem Zuschlag für Verluste.",
  "h1": "Betonrechner",
  "keywords": [
    "Beton berechnen",
    "Betonvolumen",
    "Streifenfundament Beton",
    "Betonmenge"
  ]
};

export const concreteCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
