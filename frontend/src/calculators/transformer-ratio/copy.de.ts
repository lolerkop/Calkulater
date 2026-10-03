import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const transformerRatioCopyDe: CalculatorCopy = {
  ...{
    "name": "Rechner für das Übersetzungsverhältnis eines Transformators",
    "slug": "transformator-uebersetzung",
    "shortDescription": "Windungen, Spannungen und Ströme eines idealen Transformators.",
    "seoTitle": "Übersetzungsverhältnis berechnen — Windungen, Spannung, Strom",
    "seoDescription": "Berechne Sekundärspannung und Sekundärstrom eines idealen Transformators aus den Windungszahlen oder finde das nötige Wicklungsverhältnis.",
    "h1": "Rechner für das Übersetzungsverhältnis eines Transformators",
    "keywords": [
      "Übersetzungsverhältnis Transformator",
      "Sekundärspannung berechnen",
      "idealer Transformator",
      "Wicklungsverhältnis",
      "Uebersetzungsverhaeltnis"
    ]
  },
  ...contract.de,
};
