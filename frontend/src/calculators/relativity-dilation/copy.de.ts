import type { CalculatorCopy } from '../../lib/platform/types';
import { relativityDilationContractContent } from './contractContent';

export const relativityDilationCopyDe: CalculatorCopy = {
  name: 'Rechner für die Zeitdilatation',
  slug: 'zeitdilatation-rechner',
  shortDescription: 'Lorentzfaktor, Zeitdilatation und Längenkontraktion.',
  seoTitle: 'Zeitdilatation berechnen — Lorentzfaktor',
  seoDescription: 'Berechne Lorentzfaktor, Zeitdilatation und Längenkontraktion aus einem Bruchteil der Lichtgeschwindigkeit.',
  h1: 'Rechner für die Zeitdilatation',
  keywords: ['Zeitdilatation berechnen', 'Lorentzfaktor', 'Längenkontraktion', 'Relativitätstheorie'],
  ...relativityDilationContractContent.de,
};
