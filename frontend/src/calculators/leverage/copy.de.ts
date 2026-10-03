import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const leverageCopyDe: CalculatorCopy = {
  "name": "Hebelrechner",
  "slug": "hebel-position-rechner",
  "shortDescription": "Positionsgröße, Liquidationspreis und der Abstand dorthin.",
  "seoTitle": "Hebel berechnen — Positionsgröße und Liquidation",
  "seoDescription": "Berechne die Größe einer gehebelten Position, ihren Liquidationspreis und den prozentualen Rückgang bis dorthin, aus Sicherheit, Hebel und Erhaltungsmarge.",
  "h1": "Hebelrechner",
  "keywords": [
    "Hebel berechnen",
    "Liquidationspreis",
    "Positionsgröße",
    "Margin Handel"
  ],
  ...contractContent.de,
};
