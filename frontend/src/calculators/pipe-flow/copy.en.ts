import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const pipeFlowCopyEn: CalculatorCopy = {
  ...{
  "name": "Pipe flow velocity calculator",
  "slug": "pipe-flow-velocity",
  "shortDescription": "Water velocity in a pipe from flow rate and inner diameter.",
  "seoTitle": "Pipe flow velocity calculator — from flow rate and diameter",
  "seoDescription": "Calculate water velocity in a pipe from the flow rate in cubic metres per hour and the inner diameter.",
  "h1": "Pipe flow velocity calculator",
  "keywords": [
    "pipe flow velocity",
    "water flow rate",
    "pipe inner diameter",
    "pipe sizing"
  ]
},
  ...contract.en,
};
