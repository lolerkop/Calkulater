// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const revenuePerEmployeeCopyDe: CalculatorCopy = {
  name: 'Rechner für den Umsatz je Mitarbeiter',
  slug: 'umsatz-je-mitarbeiter',
  shortDescription: "Jahresumsatz geteilt durch eine ganze Mitarbeiterzahl.",
  seoTitle: 'Umsatz je Mitarbeiter berechnen — Arbeitsproduktivität',
  seoDescription: "Berechne den Jahresumsatz je Mitarbeiter aus Jahresumsatz und ganzer Kopfzahl. Die Monatszeile teilt den Jahreswert durch 12; gebrochene FTE werden nicht unterstützt.",
  h1: 'Rechner für den Umsatz je Mitarbeiter',
  keywords: ['Umsatz je Mitarbeiter', 'Arbeitsproduktivität', 'Umsatz je Beschäftigten', 'Arbeitsproduktivitaet'],
  ...contractContent.de,
};
