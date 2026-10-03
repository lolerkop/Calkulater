import type { CalculatorCopy } from '../../lib/platform/types';
import { gasLawsContractContent } from './contractContent';

export const gasLawsCopyDe: CalculatorCopy = {
  name: 'Rechner zur allgemeinen Gasgleichung',
  slug: 'allgemeine-gasgleichung',
  shortDescription: 'Ein Gas zwischen zwei Zuständen: p₁V₁/T₁ = p₂V₂/T₂.',
  seoTitle: 'Allgemeine Gasgleichung — p₁V₁/T₁ = p₂V₂/T₂',
  seoDescription: 'Berechne Druck, Volumen oder Temperatur eines Gases beim Übergang zwischen zwei Zuständen mit der allgemeinen Gasgleichung.',
  h1: 'Rechner zur allgemeinen Gasgleichung',
  keywords: ['allgemeine Gasgleichung', 'Gesetz von Boyle-Mariotte', 'Gesetz von Gay-Lussac', 'p1V1 T1 p2V2 T2'],
  ...gasLawsContractContent.de,
};
