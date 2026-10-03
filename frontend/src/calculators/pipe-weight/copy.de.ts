import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für das Rohrgewicht",
  "slug": "rohrgewicht-rechner",
  "shortDescription": "Masse eines Rohres aus Außendurchmesser, Wandstärke, Länge und Werkstoffdichte.",
  "seoTitle": "Rohrgewicht berechnen — nach Durchmesser, Wand und Länge",
  "seoDescription": "Berechne die Masse eines Stahl- oder Kunststoffrohres aus Außendurchmesser, Wandstärke, Länge und Werkstoffdichte.",
  "h1": "Rechner für das Rohrgewicht",
  "keywords": [
    "Rohrgewicht berechnen",
    "Gewicht Stahlrohr",
    "Metergewicht Rohr",
    "Innendurchmesser Rohr"
  ]
};

export const pipeWeightCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
