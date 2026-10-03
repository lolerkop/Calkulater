import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für Schüttgut",
  "slug": "schuettgut-rechner",
  "shortDescription": "Volumen und Masse von Schotter, Sand oder Splitt für eine Tragschicht.",
  "seoTitle": "Schüttgut berechnen — Volumen und Masse einer Tragschicht",
  "seoDescription": "Berechne Volumen und Masse von Schotter, Sand oder Splitt für eine Tragschicht aus Fläche, Schichtdicke und Schüttdichte.",
  "h1": "Rechner für Schüttgut",
  "keywords": [
    "Schüttgut berechnen",
    "Schotter Menge",
    "Sand Kubikmeter",
    "Tragschicht berechnen",
    "Schuettgut"
  ]
};

export const bulkMaterialVolumeCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
