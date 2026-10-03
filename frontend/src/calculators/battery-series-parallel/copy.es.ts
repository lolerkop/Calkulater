import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const batterySeriesParallelCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de baterías en serie y en paralelo",
  "slug": "baterias-en-serie-y-paralelo",
  "shortDescription": "Tensión, capacidad y energía de un pack según el esquema de conexión.",
  "seoTitle": "Calculadora de conexión de baterías en serie y en paralelo",
  "seoDescription": "Calcula la tensión, la capacidad y la energía de un pack a partir de la tensión y la capacidad de la celda y un esquema serie-paralelo.",
  "h1": "Calculadora de baterías en serie y en paralelo",
  "keywords": [
    "calculadora de pack de baterías",
    "serie y paralelo",
    "tensión del pack",
    "capacidad de una batería"
  ]
},
  ...contractContent.es,
};
