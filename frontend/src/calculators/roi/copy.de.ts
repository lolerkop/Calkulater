// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const roiCopyDe: CalculatorCopy = {
  name: 'ROI-Rechner',
  slug: 'roi-rechner',
  shortDescription: 'Kapitalrendite, mit richtig berücksichtigten Nebenkosten.',
  seoTitle: 'ROI berechnen — Kapitalrendite in Prozent',
  seoDescription: 'Berechne die Kapitalrendite aus dem erhaltenen und dem eingesetzten Betrag, samt zusätzlichen Kosten.',
  h1: 'ROI-Rechner',
  keywords: ['ROI berechnen', 'Kapitalrendite', 'Return on Investment', 'Rendite Investition'],
  ...contractContent.de,
};
