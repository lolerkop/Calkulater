import type { CalculatorCopy } from '../../lib/platform/types';
import { waveContractContent } from './contractContent';

export const waveCopyDe: CalculatorCopy = {
  name: 'Rechner für Wellenlänge und Frequenz',
  slug: 'wellenlaenge-frequenz',
  shortDescription: 'Verbindet Wellengeschwindigkeit, Frequenz und Wellenlänge in jede Richtung.',
  seoTitle: 'Wellenlänge, Frequenz und Wellengeschwindigkeit berechnen',
  seoDescription: 'Berechne Wellenlänge, Frequenz oder Wellengeschwindigkeit aus den beiden bekannten Größen, samt der Schwingungsdauer.',
  h1: 'Rechner für Wellenlänge und Frequenz',
  keywords: ['Wellenlänge berechnen', 'Frequenz berechnen', 'Wellengeschwindigkeit', 'Wellenlaenge Frequenz'],
  ...waveContractContent.de,
};
