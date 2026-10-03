import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const weekNumberCopyDe: CalculatorCopy = {
  name: "Kalenderwochen-Rechner",
  slug: "kalenderwoche-berechnen",
  shortDescription: "ISO-Kalenderwoche und laufender Tag für ein gültiges gregorianisches Datum.",
  seoTitle: "Kalenderwoche berechnen — ISO-Woche und Tag des Jahres",
  seoDescription: "ISO-Kalenderwoche, ISO-Jahr, laufender Tag und verbleibende Tage für gregorianische Daten der Jahre 0001–9999.",
  h1: "Kalenderwochen-Rechner",
  keywords: ["Kalenderwoche","KW berechnen","ISO 8601","Tag des Jahres"],
  ...contractContent.de,
};
