import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const petFoodCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Futtermenge",
  "slug": "futtermenge-rechner",
  "shortDescription": "Tägliche Futterration aus Körpergewicht, Bedarfsfaktor und Energiegehalt des Futters.",
  "seoTitle": "Futtermenge berechnen — Tagesration in Gramm",
  "seoDescription": "Berechne die tägliche Futterration für Katze oder Hund aus Körpergewicht, einem Faktor für den Energiebedarf und dem Energiegehalt des Futters je 100 Gramm.",
  "h1": "Rechner für die Futtermenge",
  "keywords": [
    "Futtermenge berechnen",
    "Tagesration Hund",
    "Katzenfutter Menge",
    "Energiebedarf Haustier"
  ]
},
  ...contractContent.de,
};
