import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für die Durchbiegung eines Trägers",
  "slug": "durchbiegung-traeger",
  "shortDescription": "Durchbiegung eines Einfeldträgers unter Gleichlast oder Einzellast.",
  "seoTitle": "Durchbiegung berechnen — Gleichlast und Einzellast",
  "seoDescription": "Berechne die Durchbiegung eines Einfeldträgers aus Last, Stützweite, Elastizitätsmodul und Flächenträgheitsmoment.",
  "h1": "Rechner für die Durchbiegung eines Trägers",
  "keywords": [
    "Durchbiegung berechnen",
    "Träger Durchbiegung",
    "Flächenträgheitsmoment",
    "Traeger Durchbiegung"
  ]
};

export const beamDeflectionCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
