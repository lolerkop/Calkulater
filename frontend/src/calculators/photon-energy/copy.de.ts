import type { CalculatorCopy } from '../../lib/platform/types';
import { photonEnergyContractContent } from './contractContent';

export const photonEnergyCopyDe: CalculatorCopy = {
  name: 'Rechner für die Photonenenergie',
  slug: 'photonenenergie-rechner',
  shortDescription: 'Photonenenergie und Frequenz aus der Wellenlänge.',
  seoTitle: 'Photonenenergie berechnen — aus der Wellenlänge',
  seoDescription: 'Berechne die Photonenenergie in Joule und Elektronenvolt, dazu Frequenz und Wellenzahl, aus der Wellenlänge.',
  h1: 'Rechner für die Photonenenergie',
  keywords: ['Photonenenergie berechnen', 'Energie aus Wellenlänge', 'Elektronenvolt', 'Photon Frequenz'],
  ...photonEnergyContractContent.de,
};
