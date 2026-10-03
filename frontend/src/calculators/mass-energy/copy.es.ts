import type { CalculatorCopy } from '../../lib/platform/types';
import { massEnergyContractContent } from './contractContent';

export const massEnergyCopyEs: CalculatorCopy = {
  name: "Calculadora de equivalencia masa-energía",
  slug: "equivalencia-masa-energia",
  shortDescription: "Energía en reposo de una masa según E=mc², en julios, kilovatios hora y toneladas de TNT.",
  seoTitle: "Calculadora E=mc² — energía en reposo de una masa",
  seoDescription: "Calcula la energía en reposo de la materia según E=mc², en julios, kilovatios hora y toneladas equivalentes de TNT.",
  h1: "Calculadora de equivalencia masa-energía",
  keywords: ["E=mc2", "energía en reposo", "equivalencia masa-energía", "equivalente en TNT"],
  ...massEnergyContractContent.es,
};
