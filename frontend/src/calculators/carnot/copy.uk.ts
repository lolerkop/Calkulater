import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const carnotCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор ККД циклу Карно",
  "slug": "kkd-cyklu-karno",
  "shortDescription": "Граничний ККД теплової машини за двома температурами.",
  "seoTitle": "Калькулятор ККД циклу Карно — межа теплової машини",
  "seoDescription": "Розрахуйте граничний ККД теплової машини за температурами нагрівника та холодильника в кельвінах.",
  "h1": "Калькулятор ККД циклу Карно",
  "keywords": [
    "ККД циклу Карно",
    "граничний ККД",
    "теплова машина"
  ]
},
  ...contract.uk,
};
