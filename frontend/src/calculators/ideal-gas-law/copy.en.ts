import type { CalculatorCopy } from '../../lib/platform/types';
import { idealGasLawContractContent } from './contractContent';

export const idealGasLawCopyEn: CalculatorCopy = {
  name: 'Ideal gas law calculator',
  slug: 'ideal-gas-law-calculator',
  shortDescription: 'PV = nRT: the pressure or the volume of a gas from the rest.',
  seoTitle: 'Ideal gas law calculator — PV = nRT',
  seoDescription: 'Calculate the pressure or volume of an ideal gas from PV = nRT with a choice of pressure, volume and temperature units.',
  h1: 'Ideal gas law calculator',
  keywords: ['ideal gas law calculator', 'pv nrt', 'gas constant', 'gas equation'],
  ...idealGasLawContractContent.en,
};
