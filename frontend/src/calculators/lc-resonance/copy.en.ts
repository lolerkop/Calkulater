import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const lcResonanceCopyEn: CalculatorCopy = {
  ...{
    "name": "LC resonant frequency calculator",
    "slug": "lc-resonant-frequency",
    "shortDescription": "Tank circuit frequency from inductance and capacitance.",
    "seoTitle": "LC resonant frequency calculator",
    "seoDescription": "Calculate the resonant frequency of a tank circuit from inductance in microhenries and capacitance in nanofarads.",
    "h1": "LC resonant frequency calculator",
    "keywords": [
      "resonant frequency",
      "lc circuit",
      "tank circuit",
      "thomson formula"
    ]
  },
  ...contract.en,
};
