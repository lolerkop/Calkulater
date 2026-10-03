// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const dayOfWeekCopyDe: CalculatorCopy = {
  name: 'Wochentagsrechner',
  slug: 'wochentag-berechnen',
  shortDescription: 'Auf welchen Wochentag ein Datum fällt.',
  seoTitle: 'Wochentag berechnen — Wochentag zu jedem Datum',
  seoDescription: "Ermittle Wochentag, laufenden Jahrestag, ISO-Wochennummer und Wochenjahr einer gregorianischen Datumsangabe. Wochenende markiert Samstag und Sonntag ohne Feiertage.",
  h1: 'Wochentagsrechner',
  keywords: ['Wochentag berechnen', 'welcher Tag war', 'Wochentag zu Datum', 'Kalenderwoche'],
  ...contractContent.de,
};
