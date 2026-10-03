import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Stair rise and run calculator",
  "slug": "stair-rise-run",
  "shortDescription": "Step count, riser height, total run and pitch angle.",
  "seoTitle": "Stair rise and run calculator — steps, riser height, pitch",
  "seoDescription": "Calculate a staircase: number of steps from the maximum riser height, the total run, the pitch angle and the 2h + b comfort rule.",
  "h1": "Stair rise and run calculator",
  "keywords": [
    "stair calculator",
    "rise and run calculator",
    "riser height calculator",
    "staircase pitch calculator"
  ]
};
export const stairsCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
