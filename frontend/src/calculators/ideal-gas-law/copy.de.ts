import type { CalculatorCopy } from '../../lib/platform/types';
import { idealGasLawContractContent } from './contractContent';

export const idealGasLawCopyDe: CalculatorCopy = {
  name: 'Rechner für das ideale Gasgesetz',
  slug: 'ideales-gasgesetz',
  shortDescription: 'pV = nRT: Druck oder Volumen eines Gases aus dem Rest.',
  seoTitle: 'Ideales Gasgesetz berechnen — pV = nRT',
  seoDescription: 'Berechne Druck oder Volumen eines idealen Gases aus pV = nRT, mit Auswahl der Einheiten für Druck, Volumen und Temperatur.',
  h1: 'Rechner für das ideale Gasgesetz',
  keywords: ['ideales Gasgesetz', 'pV = nRT', 'Gaskonstante', 'Zustandsgleichung Gas'],
  ...idealGasLawContractContent.de,
};
