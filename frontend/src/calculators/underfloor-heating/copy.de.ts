import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für Rohre der Fußbodenheizung",
  "slug": "fussbodenheizung-rohr",
  "shortDescription": "Rohrlänge und Zahl der Heizkreise für eine Fußbodenheizung.",
  "seoTitle": "Fußbodenheizung berechnen: Rohrlänge und Heizkreise",
  "seoDescription": "Berechne Rohrlänge und Zahl der Heizkreise für eine Fußbodenheizung aus Fläche, Verlegeabstand und Randzone.",
  "h1": "Rechner für Rohre der Fußbodenheizung",
  "keywords": [
    "Fußbodenheizung berechnen",
    "Rohrlänge Heizkreis",
    "Verlegeabstand",
    "Fussbodenheizung Rohr"
  ]
};
export const underfloorHeatingCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
