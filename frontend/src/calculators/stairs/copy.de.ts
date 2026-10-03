import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für Steigung und Auftritt einer Treppe",
  "slug": "treppe-steigung-auftritt",
  "shortDescription": "Zahl der Stufen, Steigungshöhe, Lauflänge und Neigungswinkel.",
  "seoTitle": "Treppe berechnen — Stufen, Steigungshöhe, Neigung",
  "seoDescription": "Berechne eine Treppe: Zahl der Stufen aus der höchstzulässigen Steigung, die Lauflänge, den Neigungswinkel und die Schrittmaßregel 2h + b.",
  "h1": "Rechner für Steigung und Auftritt einer Treppe",
  "keywords": [
    "Treppe berechnen",
    "Steigungshöhe",
    "Auftritt",
    "Schrittmaßregel",
    "Steigungshoehe"
  ]
};
export const stairsCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
