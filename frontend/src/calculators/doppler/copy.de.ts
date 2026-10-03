import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const dopplerCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für den Dopplereffekt",
  "slug": "dopplereffekt-rechner",
  "shortDescription": "Die gehörte Frequenz, wenn sich Quelle oder Zuhörer bewegen.",
  "seoTitle": "Dopplereffekt berechnen — Frequenzverschiebung",
  "seoDescription": "Berechne die gehörte Frequenz, wenn sich eine Schallquelle oder der Zuhörer bewegt, mit der Verschiebung in Hertz und in Prozent.",
  "h1": "Rechner für den Dopplereffekt",
  "keywords": [
    "Dopplereffekt berechnen",
    "Frequenzverschiebung",
    "Sirene Tonhöhe",
    "Doppler Formel"
  ]
},
  ...contract.de,
};
