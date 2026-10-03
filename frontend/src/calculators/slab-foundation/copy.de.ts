import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für die Bodenplatte",
  "slug": "bodenplatte-rechner",
  "shortDescription": "Betonvolumen und Bewehrungsmatte für eine Bodenplatte.",
  "seoTitle": "Bodenplatte berechnen: Beton und Bewehrung",
  "seoDescription": "Berechne das Betonvolumen sowie Länge und Gewicht der Bewehrung für eine Bodenplatte.",
  "h1": "Rechner für die Bodenplatte",
  "keywords": [
    "Bodenplatte berechnen",
    "Beton Bodenplatte",
    "Bewehrung berechnen",
    "Fundamentplatte"
  ]
};
export const slabFoundationCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
