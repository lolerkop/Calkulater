import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const inverterPowerCopyEs: CalculatorCopy = {
  ...{
    "name": "Calculadora de potencia de un inversor",
    "slug": "potencia-de-un-inversor",
    "shortDescription": "Consumo de batería de un inversor a partir de su potencia de salida y su rendimiento.",
    "seoTitle": "Calculadora de potencia de un inversor — potencia de entrada y corriente de batería",
    "seoDescription": "Calcula la potencia de entrada, la corriente de batería y las pérdidas de un inversor a partir de su potencia de salida, su rendimiento y la tensión de la batería.",
    "h1": "Calculadora de potencia de un inversor",
    "keywords": [
      "calculadora de potencia de un inversor",
      "consumo de corriente de un inversor",
      "rendimiento de un inversor"
    ]
  },
  ...contract.es,
};
