import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const rmsVoltageCopyEn: CalculatorCopy = {
  ...{
    "name": "RMS voltage calculator",
    "slug": "rms-voltage",
    "shortDescription": "Convert between peak, peak-to-peak and RMS voltage for sine, square and triangle waves.",
    "seoTitle": "RMS voltage calculator — peak, peak-to-peak and RMS",
    "seoDescription": "Convert peak value, peak-to-peak and RMS voltage for sine, square and triangular waveforms.",
    "h1": "RMS voltage calculator",
    "keywords": [
      "RMS voltage",
      "peak value",
      "peak-to-peak",
      "crest factor"
    ]
  },
  ...contract.en,
};
