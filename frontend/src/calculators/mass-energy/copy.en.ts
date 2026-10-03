import type { CalculatorCopy } from '../../lib/platform/types';
import { massEnergyContractContent } from './contractContent';

export const massEnergyCopyEn: CalculatorCopy = {
  name: "Mass-energy equivalence calculator",
  slug: "mass-energy-equivalence",
  shortDescription: "Rest energy of a mass from E=mc² in joules, kilowatt-hours and tonnes of TNT.",
  seoTitle: "E=mc² calculator — rest energy of a mass",
  seoDescription: "Calculate the rest energy of matter from E=mc² in joules, kilowatt-hours and tonnes of TNT equivalent.",
  h1: "Mass-energy equivalence calculator",
  keywords: ["E=mc2", "rest energy", "mass-energy equivalence", "TNT equivalent"],
  ...massEnergyContractContent.en,
};
