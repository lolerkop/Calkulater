import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const heatIndexCopyEn: CalculatorCopy = {
 ...{
  "name": "Heat index calculator",
  "slug": "heat-index",
  "shortDescription": "An illustrative heat index from the unadjusted regression.",
  "seoTitle": "Heat index calculator — apparent temperature and humidity",
  "seoDescription": "Unadjusted nine-term Rothfusz regression: heat index, difference from air temperature and categories on the °F scale; not the full NWS algorithm.",
  "h1": "Heat index calculator",
  "keywords": [
    "heat index calculator",
    "apparent temperature calculator",
    "feels like temperature",
    "humidity heat calculator"
  ]
},
 ...contract.en,
};
