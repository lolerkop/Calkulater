import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Rechner für das Holzgewicht",
  "slug": "holzgewicht-rechner",
  "shortDescription": "Gewicht von Holz aus Volumen, Holzart und Holzfeuchte.",
  "seoTitle": "Holzgewicht berechnen nach Holzart und Feuchte",
  "seoDescription": "Ermittle, wie viel Holz wiegt, aus seinem Volumen, seiner Holzart und seiner Feuchte, mit der verwendeten Dichte daneben.",
  "h1": "Rechner für das Holzgewicht",
  "keywords": [
    "Holzgewicht berechnen",
    "Dichte Holz",
    "Holzfeuchte",
    "Gewicht Kubikmeter Holz"
  ]
};
export const woodWeightCopyDe:CalculatorCopy={...metadata,...buildingWave16ContractContent.de};
