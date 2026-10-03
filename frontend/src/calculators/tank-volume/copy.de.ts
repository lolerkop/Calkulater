import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für das Behältervolumen",
  "slug": "behaeltervolumen-rechner",
  "shortDescription": "Gesamtvolumen eines Behälters und die Menge bei gegebenem Füllstand.",
  "seoTitle": "Behältervolumen berechnen — stehend, liegend, Fass",
  "seoDescription": "Berechne das Gesamtvolumen eines Behälters und die Menge bei gegebenem Füllstand für stehende, liegende, rechteckige und kapselförmige Behälter.",
  "h1": "Rechner für das Behältervolumen",
  "keywords": [
    "Behältervolumen berechnen",
    "Tankinhalt",
    "Füllstand Liter",
    "Behaeltervolumen"
  ]
};
export const tankVolumeCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
