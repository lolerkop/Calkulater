import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const orbitalPeriodCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de periodo orbital",
  "slug": "periodo-orbital",
  "shortDescription": "Periodo orbital a partir de la masa del cuerpo central y el radio de la órbita.",
  "seoTitle": "Calculadora de periodo orbital — satélite y órbita geoestacionaria",
  "seoDescription": "Calcula el periodo y la velocidad orbital de una órbita circular a partir de la masa del cuerpo central y el radio de la órbita.",
  "h1": "Calculadora de periodo orbital",
  "keywords": [
    "calculadora de periodo orbital",
    "velocidad orbital",
    "órbita geoestacionaria",
    "tercera ley de Kepler"
  ]
},
  ...contract.es,
};
