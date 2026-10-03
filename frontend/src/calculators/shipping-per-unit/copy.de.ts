// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const shippingPerUnitCopyDe: CalculatorCopy = {
  name: 'Rechner für Versandkosten je Stück',
  slug: 'versandkosten-je-stueck',
  shortDescription: 'Was die Logistik zu den Kosten eines Artikels beiträgt.',
  seoTitle: 'Versandkosten je Stück berechnen — Logistik je Artikel',
  seoDescription: 'Berechne die Versandkosten je Stück aus den Lieferkosten, der Stückzahl und wahlweise der Verpackung.',
  h1: 'Rechner für Versandkosten je Stück',
  keywords: ['Versandkosten je Stück', 'Logistikkosten je Artikel', 'Versand je Stueck'],
  ...contractContent.de,
};
