import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für Dichtstoff",
  "slug": "dichtstoff-rechner",
  "shortDescription": "Nötiger Dichtstoff für eine Fuge gegebenen Querschnitts und wie viele Kartuschen das sind.",
  "seoTitle": "Dichtstoff berechnen — Menge und Zahl der Kartuschen",
  "seoDescription": "Ermittle den nötigen Dichtstoff aus Breite, Tiefe und Länge der Fuge, mit der Zahl der Kartuschen und den Metern je Kartusche.",
  "h1": "Rechner für Dichtstoff",
  "keywords": [
    "Dichtstoff berechnen",
    "Silikon Menge",
    "Kartuschen berechnen",
    "Fugendichtstoff"
  ]
};
export const sealantVolumeCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
