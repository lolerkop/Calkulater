import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für das Raumvolumen",
  "slug": "raumvolumen-rechner",
  "shortDescription": "Volumen eines Raumes aus seinen Maßen oder seiner Bodenfläche.",
  "seoTitle": "Raumvolumen berechnen — Kubikmeter aus den Maßen",
  "seoDescription": "Berechne das Raumvolumen in Kubikmetern aus den Maßen oder der Bodenfläche, dazu Umfang und Wandfläche.",
  "h1": "Rechner für das Raumvolumen",
  "keywords": [
    "Raumvolumen berechnen",
    "Kubikmeter Raum",
    "Wandfläche berechnen",
    "Raum Kubikmeter"
  ]
};
export const roomVolumeCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
