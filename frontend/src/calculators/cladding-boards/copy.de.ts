import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für Fassadenbretter",
  "slug": "fassadenbretter-rechner",
  "shortDescription": "Wie viele Bretter eine Wand braucht, wenn die Überlappung berücksichtigt ist.",
  "seoTitle": "Fassadenbretter berechnen — Zahl der Bretter mit Überlappung",
  "seoDescription": "Berechne, wie viele Fassadenbretter eine Wand braucht: nutzbare Breite nach Überlappung, ein Zuschnittzuschlag und die nötigen Laufmeter.",
  "h1": "Rechner für Fassadenbretter",
  "keywords": [
    "Fassadenbretter berechnen",
    "Holzverschalung Menge",
    "Überlappung Bretter",
    "Fassadenbretter"
  ]
};

export const claddingBoardsCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
