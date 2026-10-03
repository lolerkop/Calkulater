import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const momentOfInertiaCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de momento de inercia",
  "slug": "momento-de-inercia",
  "shortDescription": "Momento de inercia de una barra, un disco, un aro o una esfera respecto a un eje.",
  "seoTitle": "Calculadora de momento de inercia — barra, disco, aro, esfera",
  "seoDescription": "Calcula el momento de inercia de un cuerpo respecto a un eje a partir de la masa y el tamaño para seis formas clásicas, con el radio de giro.",
  "h1": "Calculadora de momento de inercia",
  "keywords": [
    "calculadora de momento de inercia",
    "momento de inercia de un disco",
    "momento de inercia de una barra",
    "radio de giro"
  ]
},
  ...contract.es,
};
