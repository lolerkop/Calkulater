import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const petFoodCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de ración de pienso",
  "slug": "racion-de-pienso",
  "shortDescription": "Ración diaria de pienso a partir del peso corporal, un multiplicador de necesidad y la energía del alimento.",
  "seoTitle": "Calculadora de ración de pienso — ración diaria en gramos",
  "seoDescription": "Calcula la ración diaria de pienso de un gato o un perro a partir del peso corporal, un multiplicador de necesidad energética y la energía del alimento por 100 gramos.",
  "h1": "Calculadora de ración de pienso",
  "keywords": [
    "calculadora de ración de pienso",
    "cuánto dar de comer a un perro",
    "necesidad energética de una mascota",
    "RER"
  ]
},
  ...contractContent.es,
};
