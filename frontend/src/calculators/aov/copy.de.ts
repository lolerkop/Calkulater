// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const aovCopyDe: CalculatorCopy = {
  name: 'Rechner für den durchschnittlichen Bestellwert',
  slug: 'durchschnittlicher-bestellwert',
  shortDescription: 'Umsatz geteilt durch die Zahl der Bestellungen.',
  seoTitle: 'Durchschnittlichen Bestellwert berechnen — aus Umsatz und Bestellungen',
  seoDescription: 'Berechne den durchschnittlichen Bestellwert, indem du den Umsatz eines Zeitraums durch die Zahl der Bestellungen desselben Zeitraums teilst.',
  h1: 'Rechner für den durchschnittlichen Bestellwert',
  keywords: ['durchschnittlicher Bestellwert', 'Warenkorbwert berechnen', 'AOV berechnen'],
  ...contractContent.de,
};
