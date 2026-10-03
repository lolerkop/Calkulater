import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const rcFilterCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für das RC-Glied",
    "slug": "rc-glied-rechner",
    "shortDescription": "Grenzfrequenz und Zeitkonstante eines Widerstands mit einem Kondensator.",
    "seoTitle": "RC-Glied berechnen — Grenzfrequenz und Zeitkonstante",
    "seoDescription": "Berechne Grenzfrequenz und Zeitkonstante eines RC-Filters aus Widerstand und Kapazität, mit der Einschwingzeit des Kondensators.",
    "h1": "Rechner für das RC-Glied",
    "keywords": [
      "RC-Filter berechnen",
      "Grenzfrequenz berechnen",
      "RC-Zeitkonstante",
      "Tiefpass berechnen"
    ]
  },
  ...contract.de,
};
