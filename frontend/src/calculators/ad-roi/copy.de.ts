// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const adRoiCopyDe: CalculatorCopy = {
  name: 'Rechner für den Werbe-ROI',
  slug: 'werbe-roi-rechner',
  shortDescription: "ROAS und vereinfachter ROI aus Umsatz und Werbekosten.",
  seoTitle: 'Werbe-ROI berechnen — ROI und ROAS aus Kosten und Umsatz',
  seoDescription: "Berechne ROAS und vereinfachten ROI aus Kampagnenumsatz und reinen Werbekosten. Warenkosten, Gebühren und andere Ausgaben sind nicht Teil der Eingaben.",
  h1: 'Rechner für den Werbe-ROI',
  keywords: ['Werbe-ROI berechnen', 'ROAS', 'Rückfluss Werbung', 'Werbe ROI'],
  ...contractContent.de,
};
