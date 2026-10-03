import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für Bahnenbelag",
  "slug": "bahnenbelag-rechner",
  "shortDescription": "Laufmeter Bahnenbelag für einen Raum, mit Bahnen, Nähten und Verschnitt.",
  "seoTitle": "Bahnenbelag berechnen: Laufmeter, Bahnen und Nähte",
  "seoDescription": "Ermittle, wie viele Laufmeter Bahnenbelag ein Raum braucht, wie viele Bahnen und Nähte das bedeutet und wie viel Verschnitt bleibt.",
  "h1": "Rechner für Bahnenbelag",
  "keywords": [
    "Bahnenbelag berechnen",
    "Linoleum Laufmeter",
    "PVC-Boden Bahnen",
    "Bodenbelag Rolle"
  ]
};

export const linoleumCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
