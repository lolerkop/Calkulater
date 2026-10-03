import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const positionSizeCopyDe: CalculatorCopy = {
  "name": "Rechner für die Positionsgröße",
  "slug": "positionsgroesse-rechner",
  "shortDescription": "Handelsgröße aus dem Risiko, das du je Konto zulässt, und dem Abstand zum Stopp.",
  "seoTitle": "Positionsgröße nach Risiko berechnen",
  "seoDescription": "Berechne die Handelsgröße aus dem je Konto zugelassenen Risiko und dem Abstand zwischen Einstiegspreis und Stopp, samt dem Anteil am Konto.",
  "h1": "Rechner für die Positionsgröße",
  "keywords": [
    "Positionsgröße berechnen",
    "Risiko je Handel",
    "Stopp Abstand",
    "Positionsgroesse"
  ],
  ...contractContent.de,
};
