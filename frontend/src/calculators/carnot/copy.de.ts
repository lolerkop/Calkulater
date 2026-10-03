import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const carnotCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für den Carnot-Wirkungsgrad",
  "slug": "carnot-wirkungsgrad",
  "shortDescription": "Der Höchstwirkungsgrad einer Wärmekraftmaschine aus zwei Temperaturen.",
  "seoTitle": "Carnot-Wirkungsgrad berechnen — die Grenze der Wärmekraftmaschine",
  "seoDescription": "Berechne den höchstmöglichen Wirkungsgrad einer Wärmekraftmaschine aus den Temperaturen des warmen und des kalten Reservoirs in Kelvin.",
  "h1": "Rechner für den Carnot-Wirkungsgrad",
  "keywords": [
    "Carnot-Wirkungsgrad",
    "Wirkungsgrad Wärmekraftmaschine",
    "Carnot-Prozess",
    "thermischer Wirkungsgrad"
  ]
},
  ...contract.de,
};
