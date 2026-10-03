import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de peso de tubo",
  "slug": "peso-de-tubo",
  "shortDescription": "Masa de un tubo a partir del diámetro exterior, el espesor de pared, la longitud y la densidad del material.",
  "seoTitle": "Calculadora de peso de tubo — por diámetro, pared y longitud",
  "seoDescription": "Calcula la masa de un tubo de acero o de plástico a partir de su diámetro exterior, el espesor de pared, la longitud y la densidad del material.",
  "h1": "Calculadora de peso de tubo",
  "keywords": [
    "peso de un tubo",
    "masa de un tubo",
    "masa por metro",
    "diámetro interior"
  ]
};

export const pipeWeightCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
