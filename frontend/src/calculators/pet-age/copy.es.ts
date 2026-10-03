import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const petAgeCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de edad de mascotas",
  "slug": "edad-de-mascotas",
  "shortDescription": "Edad de un gato o un perro en años humanos según una tabla veterinaria.",
  "seoTitle": "Calculadora de edad de mascotas — años de gato y de perro",
  "seoDescription": "Convierte la edad de un gato o un perro en años humanos con una tabla veterinaria no lineal y un ritmo aparte para las razas grandes.",
  "h1": "Calculadora de edad de mascotas",
  "keywords": [
    "calculadora de edad de mascotas",
    "años de gato",
    "años de perro",
    "años humanos"
  ]
},
  ...contractContent.es,
};
