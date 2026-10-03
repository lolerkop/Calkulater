import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für das Volumen von Brettern",
  "slug": "holz-kubikmeter-rechner",
  "shortDescription": "Volumen von Schnittholz, eines einzelnen Brettes und Bretter je Kubikmeter.",
  "seoTitle": "Holzvolumen berechnen — Kubikmeter Schnittholz",
  "seoDescription": "Berechne das Volumen von Brettern in Kubikmetern aus Länge und Querschnitt, das Volumen eines Brettes und die Zahl der Bretter je Kubikmeter.",
  "h1": "Rechner für das Volumen von Brettern",
  "keywords": [
    "Holzvolumen berechnen",
    "Kubikmeter Schnittholz",
    "Bretter je Kubikmeter",
    "Holz Kubikmeter"
  ]
};

export const boardVolumeCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
