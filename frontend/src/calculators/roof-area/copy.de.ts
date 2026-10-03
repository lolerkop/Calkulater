import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für die Dachfläche",
  "slug": "dachflaeche-rechner",
  "shortDescription": "Fläche der Dachflächen aus dem Grundriss und der Neigung, in Grad oder Prozent.",
  "seoTitle": "Dachfläche berechnen — Flächen aus der Neigung",
  "seoDescription": "Berechne die Dachfläche aus Länge und Breite des Grundrisses und der Neigung in Grad oder Prozent.",
  "h1": "Rechner für die Dachfläche",
  "keywords": [
    "Dachfläche berechnen",
    "Dachneigung Fläche",
    "Satteldach Fläche",
    "Dachflaeche"
  ]
};
export const roofAreaCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
