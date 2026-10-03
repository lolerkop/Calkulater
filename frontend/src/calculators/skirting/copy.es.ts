import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de rodapié",
  "slug": "calculadora-de-rodapie",
  "shortDescription": "Longitud de rodapié de una habitación, descontadas las puertas, repartida en tramos.",
  "seoTitle": "Calculadora de rodapié — longitud y número de tramos",
  "seoDescription": "Calcula la longitud de rodapié a partir de las dimensiones de la habitación, descontadas las puertas, con un margen de corte y el número de tramos.",
  "h1": "Calculadora de rodapié",
  "keywords": [
    "rodapié",
    "longitud de rodapié",
    "zócalo",
    "corte de tramos"
  ]
};
export const skirtingCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
