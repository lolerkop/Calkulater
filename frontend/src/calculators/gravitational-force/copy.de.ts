import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const gravitationalForceCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Gravitationskraft",
  "slug": "gravitationskraft-rechner",
  "shortDescription": "Anziehung zweier Körper nach dem Gravitationsgesetz.",
  "seoTitle": "Gravitationskraft berechnen — zwei Körper",
  "seoDescription": "Berechne die Gravitationskraft zwischen zwei Massen in gegebenem Abstand, samt der Beschleunigung des ersten Körpers.",
  "h1": "Rechner für die Gravitationskraft",
  "keywords": [
    "Gravitationskraft berechnen",
    "Gravitationsgesetz",
    "Anziehung zweier Massen",
    "Gravitationskonstante"
  ]
},
  ...contract.de,
};
