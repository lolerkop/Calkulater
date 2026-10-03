import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const pipeFlowCopyEs: CalculatorCopy = {
  ...{
  "name": "Calculadora de velocidad del agua en una tubería",
  "slug": "velocidad-del-agua-en-tuberia",
  "shortDescription": "Velocidad del agua en una tubería a partir del caudal y el diámetro interior.",
  "seoTitle": "Calculadora de velocidad en tubería — por caudal y diámetro",
  "seoDescription": "Calcula la velocidad del agua en una tubería a partir del caudal en metros cúbicos por hora y el diámetro interior.",
  "h1": "Calculadora de velocidad del agua en una tubería",
  "keywords": [
    "velocidad del agua en una tubería",
    "caudal de agua",
    "diámetro interior de una tubería",
    "dimensionar tuberías"
  ]
},
  ...contract.es,
};
