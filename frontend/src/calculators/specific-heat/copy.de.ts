import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const specificHeatCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die spezifische Wärmekapazität",
  "slug": "waermemenge-rechner",
  "shortDescription": "Wie viel Energie es kostet, einen Körper zu erwärmen: Q = c·m·ΔT.",
  "seoTitle": "Wärmemenge berechnen — Q = c·m·ΔT",
  "seoDescription": "Berechne die Wärme, die zum Erwärmen oder Abkühlen eines Körpers nötig ist, aus spezifischer Wärmekapazität, Masse und Temperaturänderung.",
  "h1": "Rechner für die spezifische Wärmekapazität",
  "keywords": [
    "Wärmemenge berechnen",
    "spezifische Wärmekapazität",
    "Wasser erwärmen Energie",
    "Waermemenge"
  ]
},
  ...contract.de,
};
