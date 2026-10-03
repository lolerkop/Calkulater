import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const bernoulliCopyDe: CalculatorCopy = {
 ...{
  "name": "Rechner zur Bernoulli-Gleichung",
  "slug": "bernoulli-gleichung",
  "shortDescription": "Druck im zweiten Querschnitt einer Strömung aus Geschwindigkeiten und Höhen, mit der Gesamthöhe.",
  "seoTitle": "Bernoulli-Gleichung berechnen — Druck in einer Strömung",
  "seoDescription": "Berechne den Druck im zweiten Querschnitt einer Strömung nach der Bernoulli-Gleichung: Geschwindigkeiten, Höhen, Dichte und Gesamthöhe.",
  "h1": "Rechner zur Bernoulli-Gleichung",
  "keywords": [
    "Bernoulli-Gleichung",
    "Druck in einer Strömung",
    "Venturi",
    "Staudruck"
  ]
},
 ...contract.de,
};
