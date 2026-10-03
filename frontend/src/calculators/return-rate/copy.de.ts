// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const returnRateCopyDe: CalculatorCopy = {
  name: 'Rechner für die Rücksendequote',
  slug: 'ruecksendequote-rechner',
  shortDescription: 'Welcher Anteil der Bestellungen zurückkam.',
  seoTitle: 'Rücksendequote berechnen — Anteil zurückgeschickter Bestellungen',
  seoDescription: "Berechne eindeutig gezählte Rücksendebestellungen als Anteil einer Kohorte und die Ergänzung auf 100%. Rücksendungen und Nenner müssen zu denselben Bestellungen gehören.",
  h1: 'Rechner für die Rücksendequote',
  keywords: ['Rücksendequote berechnen', 'Retourenquote', 'Anteil Retouren', 'Ruecksendequote'],
  ...contractContent.de,
};
