import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const tipCopyEs: CalculatorCopy = {
  "name": "Calculadora de propina",
  "slug": "calculadora-de-propina",
  "shortDescription": "Propina, total y reparto a partes iguales entre los comensales.",
  "seoTitle": "Calculadora de propina — propina, total y reparto por persona",
  "seoDescription": "Calcula la propina, el total de la cuenta y cuánto paga cada persona, con la opción de redondear al alza cada parte.",
  "h1": "Calculadora de propina",
  "keywords": ["calculadora de propina", "repartir la cuenta", "calculadora de gratificación"],
  ...contract.es,
};
