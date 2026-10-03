import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const boilingPointCopyEn: CalculatorCopy = {
 ...{
  "name": "Boiling point calculator",
  "slug": "boiling-point-altitude",
  "shortDescription": "The boiling point of water at a given altitude above sea level.",
  "seoTitle": "Boiling point calculator — water at altitude",
  "seoDescription": "Approximate pure-water boiling temperature for heights −430 to 9000 m from a pressure model and constant latent heat.",
  "h1": "Boiling point calculator",
  "keywords": [
    "boiling point",
    "boiling at altitude",
    "atmospheric pressure",
    "vapour pressure"
  ]
},
 ...contract.en,
};
