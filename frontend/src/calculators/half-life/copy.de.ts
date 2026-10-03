import type { CalculatorCopy } from '../../lib/platform/types';
import { halfLifeContractContent } from './contractContent';

export const halfLifeCopyDe: CalculatorCopy = {
  name: 'Rechner für die Halbwertszeit',
  slug: 'halbwertszeit-rechner',
  shortDescription: 'Verbleibende Menge aus einer Halbwertszeit oder die Zeit bis zu einem gegebenen Rest.',
  seoTitle: 'Halbwertszeit berechnen — Restmenge und Zeit',
  seoDescription: 'Ermittle, wie viel Substanz nach einer gegebenen Zeit übrig ist, oder wie lange bis zum gewünschten Rest zu warten ist.',
  h1: 'Rechner für die Halbwertszeit',
  keywords: ['Halbwertszeit berechnen', 'Zerfall berechnen', 'Restmenge', 'mittlere Lebensdauer'],
  ...halfLifeContractContent.de,
};
