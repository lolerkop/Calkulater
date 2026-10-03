// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const dividendYieldCopyDe: CalculatorCopy = {
  name: 'Rechner für die Dividendenrendite',
  slug: 'dividendenrendite-rechner',
  shortDescription: "Jahresdividende als Anteil des eingegebenen Aktienpreises.",
  seoTitle: 'Dividendenrendite berechnen — Rendite in Prozent',
  seoDescription: 'Berechne die Dividendenrendite aus der Jahresdividende je Aktie und dem Aktienkurs, samt dem Ertrag auf deinen Bestand.',
  h1: 'Rechner für die Dividendenrendite',
  keywords: ['Dividendenrendite berechnen', 'Dividende je Aktie', 'Ertrag Aktien', 'Dividende Rendite'],
  ...contractContent.de,
};
