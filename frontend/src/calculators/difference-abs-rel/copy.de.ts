// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const differenceAbsRelCopyDe: CalculatorCopy = {
  name: 'Absolute und relative Differenz',
  slug: 'absolute-relative-differenz',
  shortDescription: 'Um wie viel sich zwei Werte unterscheiden, in Einheiten und in Prozent.',
  seoTitle: 'Absolute und relative Differenz berechnen',
  seoDescription: "Berechne die vorzeichenbehaftete Differenz und die relative Differenz zum Betrag des Ausgangswerts. Negative Basen sind zulässig; bei null ist der relative Prozentsatz nicht definiert.",
  h1: 'Absolute und relative Differenz',
  keywords: ['absolute Differenz', 'relative Differenz', 'Unterschied in Prozent', 'Differenz berechnen'],
  ...contractContent.de,
};
