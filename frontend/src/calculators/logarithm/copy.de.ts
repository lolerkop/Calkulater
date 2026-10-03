// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const logarithmCopyDe: CalculatorCopy = {
  name: 'Logarithmusrechner',
  slug: 'logarithmus-rechner',
  shortDescription: 'Zehner-, natürlicher und Logarithmus zu beliebiger Basis, mit Probe.',
  seoTitle: 'Logarithmus berechnen — Zehnerlogarithmus, ln und beliebige Basis',
  seoDescription: 'Berechne einen Logarithmus zur Basis 10, zur Basis e oder zu einer beliebigen Basis, mit Prüfung des Definitionsbereichs vor dem Ergebnis.',
  h1: 'Logarithmusrechner',
  keywords: ['Logarithmus berechnen', 'natürlicher Logarithmus', 'Zehnerlogarithmus', 'ln berechnen'],
  ...contractContent.de,
};
