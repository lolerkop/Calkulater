import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const timer555CopyDe: CalculatorCopy = {
  ...{
    "name": "NE555-Rechner für astabilen Betrieb",
    "slug": "ne555-rechner",
    "shortDescription": "Frequenz, Periodendauer und Tastverhältnis eines NE555-Multivibrators aus zwei Widerständen und einem Kondensator.",
    "seoTitle": "NE555 berechnen — Frequenz, Periodendauer und Tastverhältnis",
    "seoDescription": "Berechne Frequenz, Periodendauer, High- und Low-Zeiten sowie das Tastverhältnis eines astabilen NE555-Multivibrators.",
    "h1": "NE555-Rechner für astabilen Betrieb",
    "keywords": [
      "NE555",
      "astabiler Multivibrator",
      "Tastverhältnis",
      "Impulsgenerator",
      "Tastverhaeltnis"
    ]
  },
  ...contract.de,
};
