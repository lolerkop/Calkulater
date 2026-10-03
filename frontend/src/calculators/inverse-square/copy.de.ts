import type { CalculatorCopy } from '../../lib/platform/types';
import { inverseSquareContractContent } from './contractContent';

export const inverseSquareCopyDe: CalculatorCopy = {
  name: 'Rechner zum Abstandsquadratgesetz',
  slug: 'abstandsquadratgesetz',
  shortDescription: 'Wie die Intensität mit dem Abstand von einer punktförmigen Quelle fällt.',
  seoTitle: 'Abstandsquadratgesetz berechnen — Intensität und Abstand',
  seoDescription: "Berechne die Änderung der linearen Intensität oder Beleuchtungsstärke mit dem Abstand von einer Punktquelle nach dem Abstandsgesetz.",
  h1: 'Rechner zum Abstandsquadratgesetz',
  keywords: ['Abstandsquadratgesetz', 'Intensität und Abstand', 'Lichtstärke Abstand', 'Quadratgesetz'],
  ...inverseSquareContractContent.de,
};
