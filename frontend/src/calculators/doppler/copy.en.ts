import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const dopplerCopyEn: CalculatorCopy = {
  ...{
  "name": "Doppler effect calculator",
  "slug": "doppler-effect",
  "shortDescription": "The heard frequency when the source or the listener moves.",
  "seoTitle": "Doppler effect calculator — frequency shift",
  "seoDescription": "Calculate the heard frequency when a sound source or the listener moves, with the shift in hertz and per cent.",
  "h1": "Doppler effect calculator",
  "keywords": [
    "doppler effect",
    "frequency shift",
    "siren frequency",
    "speed of sound"
  ]
},
  ...contract.en,
};
