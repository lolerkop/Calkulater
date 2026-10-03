import type { CalculatorCopy } from '../../lib/platform/types';
import { deBroglieContractContent } from './contractContent';

export const deBroglieCopyDe: CalculatorCopy = {
  name: 'Rechner für die De-Broglie-Wellenlänge',
  slug: 'de-broglie-wellenlaenge',
  shortDescription: 'Die Wellenlänge eines Teilchens aus seiner Masse und Geschwindigkeit.',
  seoTitle: 'De-Broglie-Wellenlänge berechnen — aus Masse und Geschwindigkeit',
  seoDescription: "Berechne die De-Broglie-Wellenlänge aus Masse und Geschwindigkeit, mit Impuls, kinetischer Energie und Anteil der Lichtgeschwindigkeit.",
  h1: 'Rechner für die De-Broglie-Wellenlänge',
  keywords: ['De-Broglie-Wellenlänge', 'Materiewelle', 'Wellenlänge Elektron', 'De Broglie berechnen'],
  ...deBroglieContractContent.de,
};
