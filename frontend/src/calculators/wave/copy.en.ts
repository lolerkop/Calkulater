import type { CalculatorCopy } from '../../lib/platform/types';
import { waveContractContent } from './contractContent';

export const waveCopyEn: CalculatorCopy = {
  name: 'Wavelength and frequency calculator',
  slug: 'wave-frequency-calculator',
  shortDescription: 'Relates wave speed, frequency and wavelength in any direction.',
  seoTitle: 'Wavelength, frequency and wave speed calculator',
  seoDescription: 'Calculate wavelength, frequency or wave speed from the two quantities you know, together with the period of oscillation.',
  h1: 'Wavelength and frequency calculator',
  keywords: ['wavelength calculator', 'frequency', 'wave speed', 'period of oscillation'],
  ...waveContractContent.en,
};
