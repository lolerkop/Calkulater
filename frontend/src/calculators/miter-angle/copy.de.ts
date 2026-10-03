import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für den Gehrungswinkel",
  "slug": "gehrungswinkel-rechner",
  "shortDescription": "Der Schnittwinkel, um zwei Stücke in einer Ecke zu verbinden.",
  "seoTitle": "Gehrungswinkel berechnen — Gehrungsschnitt",
  "seoDescription": "Berechne den Schnittwinkel für Sockelleisten oder Zierprofile im Gehrungsschnitt: den halben Eckwinkel und den Wert für die Skala der Kappsäge.",
  "h1": "Rechner für den Gehrungswinkel",
  "keywords": [
    "Gehrungswinkel berechnen",
    "Gehrung schneiden",
    "Sockelleiste Ecke",
    "Kappsäge Winkel"
  ]
};

export const miterAngleCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
