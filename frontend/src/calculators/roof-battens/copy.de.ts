import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für die Dachlattung",
  "slug": "dachlattung-rechner",
  "shortDescription": "Laufmeter, Latten und Holzvolumen für eine Dachlattung.",
  "seoTitle": "Dachlattung berechnen: Meter, Stück und Volumen",
  "seoDescription": "Ermittle Laufmeter, Zahl der Latten und Holzvolumen für ein Dach aus seiner Fläche und dem Lattenabstand.",
  "h1": "Rechner für die Dachlattung",
  "keywords": [
    "Dachlattung berechnen",
    "Lattenabstand",
    "Dachlatten Menge",
    "Lattung Holz"
  ]
};
export const roofBattensCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
