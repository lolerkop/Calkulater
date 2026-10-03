import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const pipeFlowCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für die Strömungsgeschwindigkeit im Rohr",
  "slug": "stroemungsgeschwindigkeit-rohr",
  "shortDescription": "Wassergeschwindigkeit im Rohr aus Durchfluss und Innendurchmesser.",
  "seoTitle": "Strömungsgeschwindigkeit im Rohr berechnen",
  "seoDescription": "Berechne die Wassergeschwindigkeit im Rohr aus dem Durchfluss in Kubikmetern je Stunde und dem Innendurchmesser.",
  "h1": "Rechner für die Strömungsgeschwindigkeit im Rohr",
  "keywords": [
    "Strömungsgeschwindigkeit Rohr",
    "Wassergeschwindigkeit",
    "Rohrdurchmesser Geschwindigkeit",
    "Stroemungsgeschwindigkeit"
  ]
},
  ...contract.de,
};
