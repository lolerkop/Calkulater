import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const geomSectorCopyEn: CalculatorCopy = {
  name: "Circular sector calculator",
  slug: "sector-calculator",
  seoTitle: "Circular sector calculator — area, arc, chord",
  h1: "Circular sector calculator",
  keywords: ["sector calculator", "area of a sector", "arc length", "chord of a circle"],
  ...contractContent.en,
};
