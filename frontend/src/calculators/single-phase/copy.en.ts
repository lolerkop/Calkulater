import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const singlePhaseCopyEn: CalculatorCopy = {
  ...{
  "name": "Single-phase power calculator",
  "slug": "single-phase-power-calculator",
  "shortDescription": "Active, apparent and reactive power of a single-phase circuit, or current from power.",
  "seoTitle": "Single-phase power calculator — active, apparent, reactive",
  "seoDescription": "Calculate the active, apparent and reactive power of a single-phase circuit from voltage, current and power factor, or find the current from power.",
  "h1": "Single-phase power calculator",
  "keywords": [
    "single phase power calculator",
    "current from power",
    "power factor",
    "apparent power"
  ]
},
  ...contractContent.en,
};
