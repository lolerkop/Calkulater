import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const headphonePowerCopyEn: CalculatorCopy = {
  ...{
    "name": "Headphone power calculator",
    "slug": "headphone-power",
    "shortDescription": "Loudness from sensitivity and applied power.",
    "seoTitle": "Headphone power calculator — loudness and voltage",
    "seoDescription": "Calculate headphone sound pressure level from sensitivity, impedance and applied power, with voltage and current.",
    "h1": "Headphone power calculator",
    "keywords": [
      "headphone power",
      "headphone sensitivity",
      "headphone impedance",
      "headphone amplifier"
    ]
  },
  ...contract.en,
};
