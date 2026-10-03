import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für ein Pfahlfundament",
  "slug": "pfahlfundament-rechner",
  "shortDescription": "Beton für Bohrpfähle und den Rost, der sie verbindet.",
  "seoTitle": "Pfahlfundament berechnen: Beton für Pfähle und Rost",
  "seoDescription": "Berechne das Betonvolumen für Bohrpfähle und den Rost, mit gesondert ausgewiesener Aufteilung zwischen beiden.",
  "h1": "Rechner für ein Pfahlfundament",
  "keywords": [
    "Pfahlfundament berechnen",
    "Bohrpfähle Beton",
    "Rost Fundament",
    "Pfahlgruendung"
  ]
};

export const pileFoundationCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
