import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave16ContractContent } from './contractContent';
const metadata = {
  "name": "Calculadora de tubo para suelo radiante",
  "slug": "tubo-para-suelo-radiante",
  "shortDescription": "Longitud de tubo y número de circuitos para una instalación de suelo radiante por agua.",
  "seoTitle": "Calculadora de tubo para suelo radiante: longitud y circuitos",
  "seoDescription": "Calcula la longitud de tubo y el número de circuitos de un suelo radiante a partir de la superficie, la separación y la zona perimetral.",
  "h1": "Calculadora de tubo para suelo radiante",
  "keywords": [
    "calculadora de suelo radiante",
    "longitud de tubo de suelo radiante",
    "longitud de un circuito",
    "separación del suelo radiante"
  ]
};
export const underfloorHeatingCopyEs:CalculatorCopy={...metadata,...buildingWave16ContractContent.es};
