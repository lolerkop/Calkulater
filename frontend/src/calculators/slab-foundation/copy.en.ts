import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Slab foundation calculator",
  "slug": "slab-foundation",
  "shortDescription": "Concrete volume and reinforcing mesh for a raft slab.",
  "seoTitle": "Slab foundation calculator: concrete and rebar",
  "seoDescription": "Calculate the concrete volume and the length and weight of reinforcing mesh for a raft slab foundation.",
  "h1": "Slab foundation calculator",
  "keywords": [
    "slab foundation calculator",
    "raft slab concrete",
    "rebar mesh calculator",
    "foundation concrete volume"
  ]
};
export const slabFoundationCopyEn:CalculatorCopy={...metadata,...buildingWave16ContractContent.en};
