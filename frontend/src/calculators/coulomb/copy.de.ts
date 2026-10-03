import type { CalculatorCopy } from '../../lib/platform/types';
import { coulombContractContent } from './contractContent';

export const coulombCopyDe: CalculatorCopy = {
  name: 'Rechner zum coulombschen Gesetz',
  slug: 'coulombsches-gesetz',
  shortDescription: 'Die Kraft zwischen zwei Punktladungen.',
  seoTitle: 'Coulombsches Gesetz berechnen — Kraft zwischen Ladungen',
  seoDescription: 'Berechne die Kraft zwischen zwei Punktladungen nach dem coulombschen Gesetz, mit Feldstärke und potentieller Energie.',
  h1: 'Rechner zum coulombschen Gesetz',
  keywords: ['coulombsches Gesetz', 'Kraft zwischen Ladungen', 'Feldstärke', 'Punktladung'],
  ...coulombContractContent.de,
};
