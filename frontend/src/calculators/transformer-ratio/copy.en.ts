import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const transformerRatioCopyEn: CalculatorCopy = {
  ...{
    "name": "Transformer turns ratio calculator",
    "slug": "transformer-turns-ratio",
    "shortDescription": "Turns, voltages and currents of an ideal transformer.",
    "seoTitle": "Transformer turns ratio calculator — turns, voltage, current",
    "seoDescription": "Calculate the secondary voltage and current of an ideal transformer from the turns, or find the winding ratio you need.",
    "h1": "Transformer turns ratio calculator",
    "keywords": [
      "transformer turns ratio",
      "secondary voltage calculator",
      "ideal transformer",
      "winding ratio"
    ]
  },
  ...contract.en,
};
