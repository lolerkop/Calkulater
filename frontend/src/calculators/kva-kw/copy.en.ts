import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const kvaKwCopyEn: CalculatorCopy = {
  ...{
  "name": "kVA to kW calculator",
  "slug": "kva-to-kw",
  "shortDescription": "Converting apparent power to active power through the power factor.",
  "seoTitle": "kVA to kW calculator — convert by power factor",
  "seoDescription": "Convert kVA to kW and back by the power factor, with the reactive component: what a generator or UPS actually delivers.",
  "h1": "kVA to kW calculator",
  "keywords": [
    "kva to kw calculator",
    "power factor calculator",
    "kw to kva",
    "generator power rating"
  ]
},
  ...contractContent.en,
};
