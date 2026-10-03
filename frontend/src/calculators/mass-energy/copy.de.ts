import type { CalculatorCopy } from '../../lib/platform/types';
import { massEnergyContractContent } from './contractContent';

export const massEnergyCopyDe: CalculatorCopy = {
  name: 'Rechner zur Masse-Energie-Äquivalenz',
  slug: 'e-gleich-mc-quadrat',
  shortDescription: 'Ruheenergie einer Masse aus E=mc² in Joule, Kilowattstunden und Tonnen TNT.',
  seoTitle: 'E=mc² berechnen — Ruheenergie einer Masse',
  seoDescription: 'Berechne die Ruheenergie von Materie aus E=mc² in Joule, Kilowattstunden und Tonnen TNT-Äquivalent.',
  h1: 'Rechner zur Masse-Energie-Äquivalenz',
  keywords: ['E gleich mc Quadrat', 'Ruheenergie berechnen', 'Masse-Energie-Äquivalenz', 'Masse in Energie'],
  ...massEnergyContractContent.de,
};
