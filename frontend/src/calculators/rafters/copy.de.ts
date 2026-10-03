import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für die Sparrenlänge",
  "slug": "sparrenlaenge-rechner",
  "shortDescription": "Sparrenlänge, Dachneigung und Gefälle für ein Satteldach.",
  "seoTitle": "Sparrenlänge für ein Satteldach berechnen",
  "seoDescription": "Berechne die Sparrenlänge aus der Gebäudespannweite, der Firsthöhe und dem Dachüberstand, samt Dachneigung und Gefälle in Prozent.",
  "h1": "Rechner für die Sparrenlänge",
  "keywords": [
    "Sparrenlänge berechnen",
    "Dachneigung",
    "Satteldach Sparren",
    "Sparrenlaenge"
  ]
};
export const raftersCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
